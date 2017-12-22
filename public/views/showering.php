<?php
include "../partials/header.php"
?>

<header class="header headerPerso">
    <i class="material-icons closeTopbar">close</i>
    <div id="textHeader" style="font-family: Lato; font-weight: bold; color: #FFFFFF; text-align: center; font-size: 16px">Performance</div>
    <img src="../images/tabbar/parametres_blanc.svg" alt="options" style="margin-bottom: 15px;">
</header>

<div class="bgBubble" style="height: 150vh">
    <div class="row showeringPage" style="padding-top: 40%">
        <div class="col s4">
            <div class="roundBubble" style="background-color: cornflowerblue"></div>
        </div>
    </div>

    <div class="row showeringPage" style="margin-left: 40%; margin-bottom: 40%;">
        <div class="col s4">
            <img src="../images/icons/micro.svg" alt="micro">
        </div>
    </div>


    <audio id="audio1" src="../audio/Louane%20-%20Avenir%20(clip%20officiel).mp3" autoplay></audio>

<div class="row showeringPage" style="margin-left: 31%">
    <div class="col s4">
        <a class="whiteButton" id="buttonShowering">Arreter</a>
    </div>
</div>

<div class="row showeringPage">
    <div class="col s12">
        <!--<a class="waves-effect waves-light btn" id="buttonAudio">Audio</a>-->


        <!--<button id="buttonAudio">audio</button>-->



        <!--<button id="playButton">Play</button>-->
    </div>
</div>

 <!--   <button id="startRecordingButton">Start recording</button>
    <button id="stopRecordingButton">Stop recording</button>-->


<!--AFTER SHOWER-->

    <?php include 'afterShower.php'?>


<!--MIX-->


    <?php include 'mix.php'?>


</div>

    <script>
        console.log("1er");

        setTimeout(function(){
            // Initialize recorder
            navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
            navigator.getUserMedia(
                {
                    audio: true
                },
                function (e) {
                    console.log("user consent");
                    // creates the audio context
                    window.AudioContext = window.AudioContext || window.webkitAudioContext;
                    context = new AudioContext();
                    // creates an audio node from the microphone incoming stream
                    mediaStream = context.createMediaStreamSource(e);
                    // https://developer.mozilla.org/en-US/docs/Web/API/AudioContext/createScriptProcessor
                    // bufferSize: the onaudioprocess event is called when the buffer is full
                    var bufferSize = 2048;
                    var numberOfInputChannels = 2;
                    var numberOfOutputChannels = 2;
                    if (context.createScriptProcessor) {
                        recorder = context.createScriptProcessor(bufferSize, numberOfInputChannels, numberOfOutputChannels);
                    } else {
                        recorder = context.createJavaScriptNode(bufferSize, numberOfInputChannels, numberOfOutputChannels);
                    }
                    recorder.onaudioprocess = function (e) {
                        leftchannel.push(new Float32Array(e.inputBuffer.getChannelData(0)));
                        rightchannel.push(new Float32Array(e.inputBuffer.getChannelData(1)));
                        recordingLength += bufferSize;
                    };
                    // we connect the recorder
                    mediaStream.connect(recorder);
                    recorder.connect(context.destination);
                },
                function (e) {
                    console.error(e);
                });
        }, 3000);


        setTimeout(function(){
            console.log('stop record');
            // stop recording
            recorder.disconnect(context.destination);
            mediaStream.disconnect(recorder);
            // we flat the left and right channels down
            // Float32Array[] => Float32Array
            var leftBuffer = flattenArray(leftchannel, recordingLength);
            var rightBuffer = flattenArray(rightchannel, recordingLength);
            // we interleave both channels together
            // [left[0],right[0],left[1],right[1],...]
            var interleaved = interleave(leftBuffer, rightBuffer);
            // we create our wav file
            var buffer = new ArrayBuffer(44 + interleaved.length * 2);
            var view = new DataView(buffer);
            // RIFF chunk descriptor
            writeUTFBytes(view, 0, 'RIFF');
            view.setUint32(4, 44 + interleaved.length * 2, true);
            writeUTFBytes(view, 8, 'WAVE');
            // FMT sub-chunk
            writeUTFBytes(view, 12, 'fmt ');
            view.setUint32(16, 16, true); // chunkSize
            view.setUint16(20, 1, true); // wFormatTag
            view.setUint16(22, 2, true); // wChannels: stereo (2 channels)
            view.setUint32(24, sampleRate, true); // dwSamplesPerSec
            view.setUint32(28, sampleRate * 4, true); // dwAvgBytesPerSec
            view.setUint16(32, 4, true); // wBlockAlign
            view.setUint16(34, 16, true); // wBitsPerSample
            // data sub-chunk
            writeUTFBytes(view, 36, 'data');
            view.setUint32(40, interleaved.length * 2, true);
            // write the PCM samples
            var index = 44;
            var volume = 1;
            for (var i = 0; i < interleaved.length; i++) {
                view.setInt16(index, interleaved[i] * (0x7FFF * volume), true);
                index += 2;
            }
            // our final blob
            blob = new Blob([view], { type: 'audio/wav' });
        }, 30000);
    </script>
    </body>
    </html>

<?php
include '../partials/footer.php'
?>

$('.carousel.carousel-slider').carousel({fullWidth:!0});$('.redirectHome').on('click touchstart',e=>{window.location.href='home.php'})
$('.closeTopbar').on('click',function(){window.location.href='home.php'});$('.onboardingSlider').css('height','100vh');function getCookie(name){var value="; "+document.cookie;var parts=value.split("; "+name+"=");if(parts.length==2)return parts.pop().split(";").shift()}
var cookieColor=getCookie('color');var cookieName=getCookie('teamName');if(cookieColor==undefined){cookieColor='#14C7FF'}else{$('.headerPerso').css('background-color',cookieColor)}
$('.headerPerso').css('background-color',cookieColor);$('#textHeaderPerso').text(cookieName);$('#bubble1').on('click',function(){window.location.href='groupPage.php';document.cookie='color=#14C7FF';document.cookie='teamName='+$('#teamName').text()});$('#bubble2').on('click',function(){if($('#bubble2').hasClass('nextTo')){window.location.href='groupPage.php';document.cookie='color=#FF0844';document.cookie='teamName='+$('#teamName1').text()}});$('#bubble3').on('click',function(){if($('#bubble3').hasClass('nextTo')){window.location.href='groupPage.php';document.cookie='color=#27AE60';document.cookie='teamName='+$('#teamName2').text()}});$('#bubble4').on('click',function(){if($('#bubble4').hasClass('nextTo')){window.location.href='groupPage.php';document.cookie='color=#ED59FF';document.cookie='teamName='+$('#teamName3').text()}});$('#bubble5').on('click',function(){if($('#bubble5').hasClass('nextTo')){window.location.href='groupPage.php';document.cookie='color=#F09819';document.cookie='teamName='+$('#teamName4').text()}});$('#bubble6').on('click',function(){if($('#bubble6').hasClass('nextTo')){window.location.href='groupPage.php';document.cookie='color=#0089ec';document.cookie='teamName='+$('#teamName4').text()}});if(localStorage.getItem("groupeName")){$('#bubble2').removeClass('teal');$('#bubble2').removeClass('invisible');$('#bubble2').addClass('nextTo');$('#teamName1').text(localStorage.getItem("groupeName"))}else{$('#bubble2').addClass('invisible')}
if(localStorage.getItem("groupeName1")){$('#bubble3').removeClass('teal');$('#bubble3').removeClass('invisible');$('#bubble3').addClass('nextTo');$('#teamName2').text(localStorage.getItem("groupeName1"))}else{$('#bubble3').addClass('invisible')}
if(localStorage.getItem("groupeName2")){$('#bubble4').removeClass('teal');$('#bubble4').removeClass('invisible');$('#bubble4').addClass('nextTo');$('#teamName3').text(localStorage.getItem("groupeName2"))}else{$('#bubble4').addClass('invisible')}
if(localStorage.getItem("groupeName3")){$('#bubble5').removeClass('teal');$('#bubble5').removeClass('invisible');$('#bubble5').addClass('nextTo');$('#teamName4').text(localStorage.getItem("groupeName3"))}else{$('#bubble5').addClass('invisible')}
if(localStorage.getItem("groupeName4")){$('#bubble6').removeClass('teal');$('#bubble6').removeClass('invisible');$('#bubble6').addClass('nextTo');$('#teamName5').text(localStorage.getItem("groupeName4"))}else{$('#bubble6').addClass('invisible')}
$('#badge1').on('click',function(){if($('#ib1').text()=="done"){$('#ib1').text('add')}else $('#ib1').text('done')});$('#badge2').on('click',function(){if($('#ib2').text()=="done"){$('#ib2').text('add')}else $('#ib2').text('done')});$('#badge3').on('click',function(){if($('#ib3').text()=="done"){$('#ib3').text('add')}else $('#ib3').text('done')});$('#badge4').on('click',function(){if($('#ib4').text()=="done"){$('#ib4').text('add')}else $('#ib4').text('done')});var type1=document.getElementById('type1');var type2=document.getElementById('type2');var type3=document.getElementById('type3');var type4=document.getElementById('type4');var type5=document.getElementById('type5');var type6=document.getElementById('type6');$('#type1').on('click',function(){if(type1.classList.contains('blueChart')){$('#type1').removeClass('blueChart');$('#type1').css('background-color','#FFFFFF');$('#textCard1').css('color','black');$('.musicButtons').addClass('invisible');$('#imgType1').attr('src','../images/genres/black/tendance.svg')}else{$('#type1').addClass('blueChart');$('.blueChart').css('background-color','#1740FF');$('#textCard1').css('color','white');$('.musicButtons').removeClass('invisible');$('#imgType1').attr('src','../images/genres/white/tendance.svg')}
    if(type1.classList.contains('blueChart')||type2.classList.contains('blueChart')||type3.classList.contains('blueChart')||type4.classList.contains('blueChart')||type5.classList.contains('blueChart')||type6.classList.contains('blueChart')){$('.musicButtons').removeClass('invisible')}});$('#type2').on('click',function(){if(type2.classList.contains('blueChart')){$('#type2').removeClass('blueChart');$('#type2').css('background-color','#FFFFFF');$('#textCard2').css('color','black');$('.musicButtons').addClass('invisible');$('#imgType2').attr('src','../images/genres/black/rap.svg')}else{$('#type2').addClass('blueChart');$('.blueChart').css('background-color','#1740FF');$('#textCard2').css('color','white');$('.musicButtons').removeClass('invisible');$('#imgType2').attr('src','../images/genres/white/rap.svg')}
    if(type1.classList.contains('blueChart')||type2.classList.contains('blueChart')||type3.classList.contains('blueChart')||type4.classList.contains('blueChart')||type5.classList.contains('blueChart')||type6.classList.contains('blueChart')){$('.musicButtons').removeClass('invisible')}});$('#type3').on('click',function(){if(type3.classList.contains('blueChart')){$('#type3').removeClass('blueChart');$('#type3').css('background-color','#FFFFFF');$('#textCard3').css('color','black');$('.musicButtons').addClass('invisible');$('#imgType3').attr('src','../images/genres/black/reggae.svg')}else{$('#type3').addClass('blueChart');$('.blueChart').css('background-color','#1740FF');$('#textCard3').css('color','white');$('.musicButtons').removeClass('invisible');$('#imgType3').attr('src','../images/genres/white/reggae.svg')}
    if(type1.classList.contains('blueChart')||type2.classList.contains('blueChart')||type3.classList.contains('blueChart')||type4.classList.contains('blueChart')||type5.classList.contains('blueChart')||type6.classList.contains('blueChart')){$('.musicButtons').removeClass('invisible')}});$('#type4').on('click',function(){if(type4.classList.contains('blueChart')){$('#type4').removeClass('blueChart');$('#type4').css('background-color','#FFFFFF');$('#textCard4').css('color','black');$('.musicButtons').addClass('invisible');$('#imgType4').attr('src','../images/genres/black/rock.svg')}else{$('#type4').addClass('blueChart');$('.blueChart').css('background-color','#1740FF');$('#textCard4').css('color','white');$('.musicButtons').removeClass('invisible');$('#imgType4').attr('src','../images/genres/white/rock.svg')}
    if(type1.classList.contains('blueChart')||type2.classList.contains('blueChart')||type3.classList.contains('blueChart')||type4.classList.contains('blueChart')||type5.classList.contains('blueChart')||type6.classList.contains('blueChart')){$('.musicButtons').removeClass('invisible')}});$('#type5').on('click',function(){if(type5.classList.contains('blueChart')){$('#type5').removeClass('blueChart');$('#type5').css('background-color','#FFFFFF');$('#textCard5').css('color','black');$('.musicButtons').addClass('invisible');$('#imgType5').attr('src','../images/genres/black/pop.svg')}else{$('#type5').addClass('blueChart');$('.blueChart').css('background-color','#1740FF');$('#textCard5').css('color','white');$('.musicButtons').removeClass('invisible');$('#imgType5').attr('src','../images/genres/white/pop.svg')}
    if(type1.classList.contains('blueChart')||type2.classList.contains('blueChart')||type3.classList.contains('blueChart')||type4.classList.contains('blueChart')||type5.classList.contains('blueChart')||type6.classList.contains('blueChart')){$('.musicButtons').removeClass('invisible')}});$('#type6').on('click',function(){if(type6.classList.contains('blueChart')){$('#type6').removeClass('blueChart');$('#type6').css('background-color','#FFFFFF');$('#textCard6').css('color','black');$('.musicButtons').addClass('invisible');$('#imgType6').attr('src','../images/genres/black/variete-française.svg')}else{$('#type6').addClass('blueChart');$('.blueChart').css('background-color','#1740FF');$('#textCard6').css('color','white');$('.musicButtons').removeClass('invisible');$('#imgType6').attr('src','../images/genres/white/variete-française.svg')}
    if(type1.classList.contains('blueChart')||type2.classList.contains('blueChart')||type3.classList.contains('blueChart')||type4.classList.contains('blueChart')||type5.classList.contains('blueChart')||type6.classList.contains('blueChart')){$('.musicButtons').removeClass('invisible')}});$('#groupName').on('change',function(){if($('#groupName').val()==''||$('#groupName').val()==" "){$('#createGroupButton').addClass('disabled')}else{$('#createGroupButton').removeClass('disabled');var i=1;for(i;i<5;i++){if(localStorage.getItem("groupeName")===null){localStorage.setItem("groupeName",$('#groupName').val());localStorage.setItem("colorGroup",'#14C7FF');i=5}else if(localStorage.getItem("groupeName"+i)===null){localStorage.setItem("groupeName"+i,$('#groupName').val());if(i==1){localStorage.setItem("colorGroup"+i,'#FF0844')}
    if(i==2){localStorage.setItem("colorGroup"+i,'#27AE60')}
    if(i==3){localStorage.setItem("colorGroup"+i,'#ED59FF')}
    if(i==4){localStorage.setItem("colorGroup"+i,'#F09819')}
    if(i==5){localStorage.setItem("colorGroup"+i,'#0089ec')}
    i=5}}}});$('#song1').on('click',function(){if($('#songCheck1').text()=="check_box"){$('#songCheck1').text('check_box_outline_blank');$('#check1').attr('src','../images/icons/pas_coche.svg');localStorage.removeItem("title1");localStorage.removeItem("author1");localStorage.removeItem("friend1")}else{$('#songCheck1').text('check_box');$('#check1').attr('src','../images/icons/coche.svg');localStorage.setItem("title1",$('#titleSongTrue1').text());localStorage.setItem("author1",$('#authorSongTrue1').text());localStorage.setItem("friend1",$('#friendSongTrue1').text())}
    if($('#songCheck1').text()=="check_box"||($('#songCheck2').text()=="check_box")||($('#songCheck3').text()=="check_box")){$('.floatButton').removeClass('invisible')}else{$('.floatButton').addClass('invisible')}});$('#song2').on('click',function(){if($('#songCheck2').text()=="check_box"){$('#songCheck2').text('check_box_outline_blank');$('#check2').attr('src','../images/icons/pas_coche.svg');localStorage.removeItem("title2");localStorage.removeItem("author2");localStorage.removeItem("friend2")}else{$('#songCheck2').text('check_box');$('#check2').attr('src','../images/icons/coche.svg');localStorage.setItem("title2",$('#titleSongTrue2').text());localStorage.setItem("author2",$('#authorSongTrue2').text());localStorage.setItem("friend2",$('#friendSongTrue2').text())}
    if($('#songCheck1').text()=="check_box"||($('#songCheck2').text()=="check_box")||($('#songCheck3').text()=="check_box")){$('.floatButton').removeClass('invisible')}else{$('.floatButton').addClass('invisible')}});$('#song3').on('click',function(){if($('#songCheck3').text()=="check_box"){$('#songCheck3').text('check_box_outline_blank');$('#check3').attr('src','../images/icons/pas_coche.svg');localStorage.removeItem("title3");localStorage.removeItem("author3");localStorage.removeItem("friend3")}else{$('#songCheck3').text('check_box');$('#check3').attr('src','../images/icons/coche.svg');localStorage.setItem("title3",$('#titleSongTrue3').text());localStorage.setItem("author3",$('#authorSongTrue3').text());localStorage.setItem("friend3",$('#friendSongTrue3').text())}
    if($('#songCheck1').text()=="check_box"||($('#songCheck2').text()=="check_box")||($('#songCheck3').text()=="check_box")){$('.floatButton').removeClass('invisible')}else{$('.floatButton').addClass('invisible')}});var title1=localStorage.getItem("title1");var title2=localStorage.getItem("title2");var title3=localStorage.getItem("title3");if(localStorage.getItem("title1")){$('#titleBeforeShower1').text(title1);$('#authorBeforeShower1').text(localStorage.getItem('author1'));$('#friendBeforeShower1').text(localStorage.getItem('friend1'))}else{$('#cardBeforeShower1').addClass('invisible')}
if(localStorage.getItem("title2")){$('#titleBeforeShower2').text(title2);$('#authorBeforeShower2').text(localStorage.getItem('author2'));$('#friendBeforeShower2').text(localStorage.getItem('friend2'))}else{$('#cardBeforeShower2').addClass('invisible')}
if(localStorage.getItem("title3")){$('#titleBeforeShower3').text(title3);$('#authorBeforeShower3').text(localStorage.getItem('author3'));$('#friendBeforeShower3').text(localStorage.getItem('friend3'))}else{$('#cardBeforeShower3').addClass('invisible')}
$('#crossBefore1').on('click',function(){$('#cardBeforeShower1').addClass('invisible');if($('#cardBeforeShower1').hasClass('invisible')&&$('#cardBeforeShower2').hasClass('invisible')&&$('#cardBeforeShower3').hasClass('invisible')){$('#noCard').removeClass('invisible');$('#performed').addClass('invisible')}});$('#crossBefore2').on('click',function(){$('#cardBeforeShower2').addClass('invisible');if($('#cardBeforeShower1').hasClass('invisible')&&$('#cardBeforeShower2').hasClass('invisible')&&$('#cardBeforeShower3').hasClass('invisible')){$('#noCard').removeClass('invisible');$('#performed').addClass('invisible')}});$('#crossBefore3').on('click',function(){$('#cardBeforeShower3').addClass('invisible');if($('#cardBeforeShower1').hasClass('invisible')&&$('#cardBeforeShower2').hasClass('invisible')&&$('#cardBeforeShower3').hasClass('invisible')){$('#noCard').removeClass('invisible');$('#performed').addClass('invisible')}});var audio1=document.getElementById('audio1');audio1.onended=function(){$('.showeringPage').addClass('invisible');$('.afterShowerPage').removeClass('invisible');if(localStorage.getItem("title1")){$('#titleBeforeShower1').text(title1);$('#cardBeforeShower1').removeClass('invisible')}else{$('#cardBeforeShower1').addClass('invisible')}
    if(localStorage.getItem("title2")){$('#titleBeforeShower2').text(title2);$('#cardBeforeShower2').removeClass('invisible')}else{$('#cardBeforeShower2').addClass('invisible')}
    if(localStorage.getItem("title3")){$('#titleBeforeShower3').text(title3);$('#cardBeforeShower3').removeClass('invisible')}else{$('#cardBeforeShower3').addClass('invisible')}};$('#buttonShowering').on('click',function(){audio1.pause();audio1.currentTime=0;$('.showeringPage').addClass('invisible');$('.afterShowerPage').removeClass('invisible');if(localStorage.getItem("title1")){$('#titleBeforeShower1').text(title1);$('#cardBeforeShower1').removeClass('invisible')}else{$('#cardBeforeShower1').addClass('invisible')}
    if(localStorage.getItem("title2")){$('#titleBeforeShower2').text(title2);$('#cardBeforeShower2').removeClass('invisible')}else{$('#cardBeforeShower2').addClass('invisible')}
    if(localStorage.getItem("title3")){$('#titleBeforeShower3').text(title3);$('#cardBeforeShower3').removeClass('invisible')}else{$('#cardBeforeShower3').addClass('invisible')}});$('#performed').on('click',function(){$('.afterShowerPage').addClass('invisible');$('.mixPage').removeClass('invisible');$('#cardBeforeShower3').addClass('invisible');$('#cardBeforeShower2').addClass('invisible');$('#cardBeforeShower1').addClass('invisible');$('#buttonAcc').addClass('invisible')});$('#perform').on('click',function(){localStorage.removeItem("title1");localStorage.removeItem("title2");localStorage.removeItem("title3")});var promise=navigator.mediaDevices.getUserMedia({audio:!0});var startRecordingButton=document.getElementById("startRecordingButton");var stopRecordingButton=document.getElementById("stopRecordingButton");var playButton=document.getElementById("playButton");var downloadButton=document.getElementById("downloadButton");var leftchannel=[];var rightchannel=[];var recorder=null;var recordingLength=0;var volume=null;var mediaStream=null;var sampleRate=44100;var context=null;var blob=null;$('#buttonAudio').unbind('click').click(function(){});playButton.addEventListener("click",function(){console.log('play');setTimeout(function(){$('#singer').attr('src','../images/membre/IMG_1802.JPG');$('#singerText').text('Lucile est entrain de chanter !')},28000);if(blob==null){return}
    var url=window.URL.createObjectURL(blob);var audio=new Audio(url);audio.play()});function flattenArray(channelBuffer,recordingLength){var result=new Float32Array(recordingLength);var offset=0;for(var i=0;i<channelBuffer.length;i++){var buffer=channelBuffer[i];result.set(buffer,offset);offset+=buffer.length}
    return result}
function interleave(leftChannel,rightChannel){var length=leftChannel.length+rightChannel.length;var result=new Float32Array(length);var inputIndex=0;for(var index=0;index<length;){result[index++]=leftChannel[inputIndex];result[index++]=rightChannel[inputIndex];inputIndex++}
    return result}
function writeUTFBytes(view,offset,string){for(var i=0;i<string.length;i++){view.setUint8(offset+i,string.charCodeAt(i))}}
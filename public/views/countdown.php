<?php
include "../partials/header.php"
?>

    <header class="header headerPerso">
        <i class="material-icons closeTopbar">close</i>
        <div id="textHeader" style="font-family: Lato; font-weight: bold; color: #FFFFFF; text-align: center; font-size: 16px">Performance</div>
        <img src="../images/tabbar/parametres_blanc.svg" alt="options" style="margin-bottom: 15px;">
    </header>

<div class="bgBubble" style="text-align: center">

<div class="row" style="margin-top: 30%; margin-bottom: 40%">
    <div class="col s12">
        <span class="title" id="countdown" style="font-family: Lato; font-weight: bold; font-size: 120px; color:#1740FF;">10</span>
    </div>
</div>


<div class="row" style="margin-left: 31%">
    <div class="col s4">
        <a class="whiteButton" href="home.php">Annuler</a>
    </div>
</div>

</div>

    <script>
        function countDown(t) {
            var int = setInterval(function () {
                $('#countdown').text(t);
                t-- || clearInterval(int);  //if i is 0, then stop the interval
                if (t === 0) {
                    console.log('tkt');
                    window.location.replace('showering.php')
                }
            }, 1000);

        }
        countDown(10);

/*        var val = 10;
        setInterval(function(){
            $('#countdown').text(val);
            val = val - 1;
            if (val = 0) {
                window.location.replace('showering.php')
            }
        }, 1000);*/


    </script>

<?php
include "../partials/footer.php"
?>
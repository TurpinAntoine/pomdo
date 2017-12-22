<?php
include "../partials/header.php";
?>

<div class="carousel carousel-slider center onboardingSlider" data-indicators="true">
    <div class="carousel-fixed-item center passLink">
        <a class="grey-text darken-text-3 redirectHome" href="home.php">PASSER</a>
    </div>
    <div class="carousel-item panel white-text" href="#one!">
        <div>
            <img src="../images/illu/1_connected.svg" alt="illu" class="imgSlider1" >
        </div>

        <div class="sliderTitle" style="margin-bottom: 20px; margin-top: 20px">Connecte-toi à ton Pom’Do. Simple.</div>
        <div class="sliderText">Active le bluetooth pour synchroniser ton Pomdo.</div>
    </div>
    <div class="carousel-item panel white-text" href="#two!">
        <div>
            <img src="../images/illu/2_genres.svg" alt="illu" class="imgSlider1" >
        </div>

        <div class="sliderTitle" style="margin-bottom: 20px; margin-top: 20px">Toi + moi + tous ceux qui le veulent</div>
        <div class="sliderText">Crée une bul’do (un groupe) avec tes potes et <br>choisissez les styles musicaux que vous appréciez.</div>
    </div>
    <div class="carousel-item panel white-text" href="#three!">
        <div>
            <img src="../images/illu/3_sing.svg" alt="illu" class="imgSlider1" >
        </div>

        <div class="sliderTitle" style="margin-bottom: 20px; margin-top: 20px">Laissez-moiiiiii chanter</div>
        <div class="sliderText">Chaque jour, sélectionne et chante <br>tes musiques préférées sous la douche</div>
    </div>
    <div class="carousel-item panel white-text" href="#four!">
        <div>
            <img src="../images/illu/4_mix.svg" alt="illu" class="imgSlider1" >
        </div>

        <div class="sliderTitle" style="margin-bottom: 20px; margin-top: 20px">Quel chant fantastique !</div>
        <div class="sliderText">Écoute la combinaison de ta performance et celle de tes potes sur le même titre.</div>
        <a class="waves-effect yellowButton redirectHome" href="home.php" style="margin-top: 30px;">J'ai compris</a>
    </div>
</div>

<script>
    function checkActive() {
        if( $('.indicator-item').hasClass('active') ){
            $('.indicator-item').css('background-color', '#DBE6FF');
            $('.indicator-item.active').css('background-color','#1740FF' );
        }
    }

    setInterval(function(){ checkActive() }, 1000);
</script>

<?php
include "../partials/footer.php";
?>

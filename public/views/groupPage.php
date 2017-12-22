<?php
include "../partials/header.php"
?>
    <header class="header headerPerso">
        <i class="material-icons closeTopbar">close</i>
        <div id="textHeaderPerso" style="font-family: Lato; font-weight: bold; color: #FFFFFF; text-align: center; font-size: 16px"></div>
        <img src="../images/tabbar/parametres_blanc.svg" alt="options" style="margin-bottom: 15px;">
    </header>
    <div class="backgroundFriends" style="height: 300vh;">
<div class="row">
    <div class="col s12">
        <div class="title">
            <img src="../images/icons/fingers.svg" alt="yeah">
            <br>
            Hey Lucien, prêt à chanter ? Il te reste 4h21 pour t‘éclater sur les musiques du jour. Sinon, (ré)écoute les mixs de ton groupe en bas.</div>
    </div>
</div>
<div class="row">
    <h4 style="color: #1740FF; margin-left: -75px;">Les chansons du jour</h4>
</div>

    <div class="row">
        <div class="col s12 m7">
            <div class="card small" id="song1">
                <span class="card-title" id="titleSong1"><img src="../images/icons/pas_coche.svg" alt="" class="checkBox" id="check1"><i class="material-icons checkBox" id="songCheck1" style="display: none">check_box_outline_blank</i></span>
                <div class="cardContent">
                    <p style="color: #1740FF; font-family: Lato;font-weight: bold; font-size: 14px; margin: 0px; padding-top: 10px" id="authorSongTrue1">Louane</p>
                    <p style="font-family: Lato; font-size: 12px; margin: 0px" id="titleSongTrue1">Avenir</p>
                    <p style="color: #617EFF; font-family: Lato; font-size: 12px; margin-top: 10px;" id="friendSongTrue1">Thomas et 5 autres amis l’ont chanté.</p>
                </div>
            </div>
        </div>
    </div>

    <div class="row">
        <div class="col s12 m7">
            <div class="card small" id="song2">
                <span class="card-title" id="titleSong2"><img src="../images/icons/pas_coche.svg" alt="" class="checkBox" id="check2"><i class="material-icons checkBox" id="songCheck2" style="display: none">check_box_outline_blank</i></span>
                <div class="cardContent">
                    <p style="color: #1740FF; font-family: Lato;font-weight: bold; font-size: 14px; margin: 0px; padding-top: 10px" id="authorSongTrue2">Benjamin Bioley</p>
                    <p style="font-family: Lato; font-size: 12px; margin: 0px" id="titleSongTrue2">Miss Miss</p>
                    <p style="color: #617EFF; font-family: Lato; font-size: 12px; margin-top: 10px;" id="friendSongTrue2">Marie et 4 autres amis l’ont chanté.</p>
                </div>
            </div>
        </div>
    </div>

    <div class="row">
        <div class="col s12 m7">
            <div class="card small" id="song3">
                <span class="card-title" id="titleSong3"><img src="../images/icons/pas_coche.svg" alt="" class="checkBox" id="check3"><i class="material-icons checkBox" id="songCheck3" style="display: none">check_box_outline_blank</i></span>
                <div class="cardContent">
                    <p style="color: #1740FF; font-family: Lato;font-weight: bold; font-size: 14px; margin: 0px; padding-top: 10px" id="authorSongTrue3">Queen</p>
                    <p style="font-family: Lato; font-size: 12px; margin: 0px" id="titleSongTrue3">Bohemian Rapsody</p>
                    <p style="color: #617EFF; font-family: Lato; font-size: 12px; margin-top: 10px;" id="friendSongTrue3">Thomas et 5 autres amis l’ont chanté.</p>
                </div>
            </div>
        </div>
    </div>

    <div class="row">
        <h4 style="color: #1740FF; margin-left: -215px;">Les mixes</h4>
    </div>

<div class="row">
    <div class="col s12">Hier</div>
    <div class="row">
        <div class="col s12 m7">
            <div class="card small" id="record1">
                <div class="recordContent">
                    <p style="font-family: Lato; font-weight: bold; font-size: 14px; color: #FFFFFF; margin: 0px">Let it happen</p>
                    <p style="font-family: Lato; font-size: 12px; color: #FFFFFF">Tame Impala</p>
                </div>
            </div>
        </div>
    </div>
</div>

    <div class="row floatButton invisible">
        <div class="col s6">
            <a class="whiteButton" href="training.php">S'entrainer</a>
        </div>
        <div class="col s6">
            <a class="yellowButton" href="beforeShower.php">Performer</a>
        </div>
    </div>
    </div>

    <footer class="footer">
        <div class="footerCenter">
            <img src="../images/tabbar/profil-svg.svg" alt="profil" style="width: 20px; height: 30px;">
            <img src="../images/tabbar/lesbuldo_active.svg" alt="buldo" style="width: 20px; height: 30px;">
            <img src="../images/tabbar/parametres.svg" alt="parametres" style="width: 20px; height: 30px;">
        </div>
    </footer>
<?php
include "../partials/footer.php"
?>
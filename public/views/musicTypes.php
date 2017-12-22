<?php
include "../partials/header.php"
?>

<header class="header">
    <div style="font-family: Lato; font-weight: bold; color: #1740FF; text-align: center; margin-top: -2px; margin-left: 84px; font-size: 16px">
        Création d’une nouvelle bul’do
    </div>
</header>

<div class="backgroundFriends">
<div class="row centered">
    <div class="col s6">
        <div class="card-panel" id="type1" style="border-radius: 10px">
            <img src="../images/genres/black/tendance.svg" alt="trendy" id="imgType1">
            <div id="textCard1">Tendance</div>
        </div>
    </div>
    <div class="col s6">
        <div class="card-panel" id="type2" style="border-radius: 10px">
            <img src="../images/genres/black/rap.svg" alt="rap" id="imgType2">
            <div id="textCard2">Hip-Hop</div>
        </div>
    </div>
    <div class="col s6">
        <div class="card-panel" id="type3" style="border-radius: 10px">
            <img src="../images/genres/black/reggae.svg" alt="reggae" id="imgType3">
            <div id="textCard3">Reggae</div>
        </div>
    </div>
    <div class="col s6">
        <div class="card-panel" id="type4" style="border-radius: 10px">
            <img src="../images/genres/black/rock.svg" alt="rock" id="imgType4">
            <div id="textCard4">Rock</div>
        </div>
    </div>
    <div class="col s6">
        <div class="card-panel" id="type5" style="border-radius: 10px">
            <img src="../images/genres/black/pop.svg" alt="pop" id="imgType5">
            <div id="textCard5">Pop</div>
        </div>
    </div>
    <div class="col s6">
        <div class="card-panel" id="type6" style="border-radius: 10px">
            <img src="../images/genres/black/variete-française.svg" alt="fr" id="imgType6">
            <div id="textCard6">Variété Française</div>
        </div>
    </div>
</div>

<div class="row bottomPosition musicButtons invisible">
    <div class="col s6">
        <a class="whiteButton" href="home.php">Retour</a>
    </div>
    <div class="col s6">
        <a class="yellowButton" href="createGroup.php">Suivant</a>
    </div>
</div>
</div>


<?php
include "../partials/footer.php"
?>

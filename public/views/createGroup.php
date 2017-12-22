<?php
include "../partials/header.php"
?>

<header class="header">
    <div style="font-family: Lato; font-weight: bold; color: #1740FF; text-align: center; margin-top: -2px; margin-left: 84px; font-size: 16px">
        Création d’une nouvelle bul’do
    </div>
</header>

<div class="backgroundFriends">
<div class="row title">
    <h4 class="" style="font-weight: bold">Personnalise ta bul'do</h4>
</div>

<div class="row" style="margin-left: 1%">
    <form class="col s12">
        <div class="row">
            <div class="input-field col s12">
                <input id="groupName" type="text" class="validate" required>
                <label for="groupName" style="color: #617EFF;">Nom du groupe : </label>
            </div>
        </div>
    </form>
</div>
<!--
    <div class="row" style="margin-left: -15%; color: #617EFF">
        <form class="col s6">
            <div class="row">
                <div class="input-field col s12">Couleurs :</div>
            </div>
        </form>
    </div>-->

<div class="row" style="margin-top: 70%">
    <div class="col s6">
        <a class="whiteButton" href="home.php">Retour</a>
    </div>
    <div class="col s6 ">
        <a class="yellowButton disabled" href="groupPage.php" id="createGroupButton">Suivant</a>
    </div>
</div>
</div>
<?php
include "../partials/footer.php"
?>

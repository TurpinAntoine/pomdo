<?php
include "../partials/header.php"
?>
<header class="header headerPerso">
    <i class="material-icons closeTopbar">close</i>
    <div id="textHeader" style="font-family: Lato; font-weight: bold; color: #FFFFFF; text-align: center; font-size: 16px">Performance</div>
    <img src="../images/tabbar/parametres_blanc.svg" alt="options" style="margin-bottom: 15px;">
</header>

<div class="backgroundFriends" style="height: 130vh">
<div class="row">
    <div class="col s12" style="text-align: center">
        <h5 class="title">Voici les morceaux que tu as sélectionné : </h5>
    </div>
</div>

<div class="col s12 m7" id="cardBeforeShower1" style="width: 350px; margin-left: 7%">
    <div class="card horizontal" style="border-radius: 10px">
        <div class="card-stacked">
            <div class="card-content" style="text-align: left">
                <p id="titleBeforeShower1" style="font-family: Lato; font-size: 16px; color: #1740FF"></p>
                <p id="authorBeforeShower1" style="font-family: Lato; font-size: 14px; color: #292929"></p>
                <p id="friendBeforeShower1" style="font-family: Lato; font-size: 12px; color: #617EFF"></p>
                <p class="crossBeforeShower" id="crossBefore1"><i class="material-icons" style="color: red">remove_circle</i></p>
            </div>
        </div>
    </div>
</div>
<div class="col s12 m7" id="cardBeforeShower2" style="width: 350px; margin-left: 7%">
    <div class="card horizontal" style="border-radius: 10px">
        <div class="card-stacked">
            <div class="card-content" style="text-align: left">
                <p id="titleBeforeShower2" style="font-family: Lato; font-size: 16px; color: #1740FF"></p>
                <p id="authorBeforeShower2" style="font-family: Lato; font-size: 14px; color: #292929"></p>
                <p id="friendBeforeShower2" style="font-family: Lato; font-size: 12px; color: #617EFF"></p>
                <p class="crossBeforeShower" id="crossBefore2"><i class="material-icons" style="color: red">remove_circle</i></p>
            </div>
        </div>
    </div>
</div>
<div class="col s12 m7" id="cardBeforeShower3" style="width: 350px; margin-left: 7%">
    <div class="card horizontal" style="border-radius: 10px">
        <div class="card-stacked">
            <div class="card-content" style="text-align: left">
                <p id="titleBeforeShower3" style="font-family: Lato; font-size: 16px; color: #1740FF"></p>
                <p id="authorBeforeShower3" style="font-family: Lato; font-size: 14px; color: #292929"></p>
                <p id="friendBeforeShower3" style="font-family: Lato; font-size: 12px; color: #617EFF"></p>
                <p class="crossBeforeShower" id="crossBefore3"><i class="material-icons" style="color: red">remove_circle</i></p>
            </div>
        </div>
    </div>
</div>


<div class="row" style="margin-top: -60px">
    <div class="col s12" style="text-align: center">
        <h5 class="title">File sous la douche et épate nous !</h5>
    </div>
</div>
<div class="row" style="margin-bottom: 50px">
    <div class="col s12">

    </div>
</div>


<div class="row">
    <div class="col s4">
        <a class="yellowButton" href="countdown.php" style="margin-left: 90%">Commencer</a>
    </div>
</div>

</div>

<?php
include "../partials/footer.php"
?>

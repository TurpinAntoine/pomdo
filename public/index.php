<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <link rel="canonical" href="https://weather-pwa-sample.firebaseapp.com/final/">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>POMDO</title>
    <link rel="stylesheet" type="text/css" href="styles/inline.css">
    <link rel="stylesheet" type="text/css" href="styles/main.css">

    <!--Import Google Icon Font-->
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <!--Import materialize.css-->
    <link type="text/css" rel="stylesheet" href="styles/materialize.min.css"  media="screen,projection"/>

    <!--Let browser know website is optimized for mobile-->
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>


    <link rel="manifest" href="manifest.json">
    <!-- Add to home screen for Safari on iOS -->
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <meta name="apple-mobile-web-app-title" content="Weather PWA">
    <link rel="apple-touch-icon" href="images/icons/icon-152x152.png">
    <meta name="msapplication-TileImage" content="images/icons/icon-144x144.png">
    <meta name="msapplication-TileColor" content="#2F3BA2">
    <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet">
</head>
<body>

<!--<header class="header">
    <h1 class="header__title">Pom'Do</h1>
    <button id="butRefresh" class="headerButton" aria-label="Refresh"></button>
    <button id="butAdd" class="headerButton" aria-label="Add"></button>
</header>-->

<div class="bgIndex">
<div class="connect" id="connection">
    <div style="margin-top: -30%; margin-bottom: 50%;"><img src="images/logo/App%20Icon%2060%20x%2060.png" alt="Logo" style="width: 170px; height: 170px" class="imgLogoIndex"></div>
    <div style="color: #ADADAD;">Connecte toi avec :  </div>
    <div>
        <button class="connectButton1"><img src="images/icons/group2.svg" alt="f" class="imageSocial">Ton Facebook</button>
    </div>
    <div>
        <button class="connectButton2" id="numeroButton"><img src="images/icons/group1.svg" alt="phone" class="imageSocial">Ton numéro</button>
    </div>

    <a href="views/home.php" class="hasAccountClass" id="hasAccount">J'ai déja un compte</a>
</div>

<div class="account invisible " id="accountDiv">
    <div style="margin-top: -30%; margin-bottom: 30%;"><img src="images/logo/App%20Icon%2060%20x%2060.png" alt="Logo" style="width: 170px; height: 170px" class="imgLogoIndex"></div>
    <div class="input-field col s12" style="margin-bottom: 5px;">
        <input id="pseudo" type="text" class="validate inputConnect" required>
        <label for="pseudo">Pseudo</label>
    </div>

    <div class="input-field col s12" style="margin-bottom: 30px;">
        <input id="password" type="password" class="validate inputConnect" required>
        <label for="password">Mot de passe</label>
    </div>

    <a class="waves-effect disabled" href="views/onboarding.php" id="connectButton">C'est parti !</a>
</div>
</div>


<script src="https://www.gstatic.com/firebasejs/4.8.1/firebase.js"></script>
<script>
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyBQUOiPquc4nRTvjSRFyrOJk8ijIz2TnbI",
        authDomain: "pomdo-bc4ff.firebaseapp.com",
        databaseURL: "https://pomdo-bc4ff.firebaseio.com",
        projectId: "pomdo-bc4ff",
        storageBucket: "pomdo-bc4ff.appspot.com",
        messagingSenderId: "504471616750"
    };
    firebase.initializeApp(config);
</script>
<script type="text/javascript" src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
<script type="text/javascript" src="scripts/materialize.min.js"></script>


<script src="scripts/main.js" async></script>
<script src="scripts/index.js" async></script>





</body>
</html>
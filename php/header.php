<!DOCTYPE html>
<html>
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="initial-scale=1.0, user-scalable=no, width=device-width, maximum-scale=1.0">
        <meta name="apple-mobile-web-app-capable" content="yes">
        <meta name="apple-mobile-web-app-status-bar-style" content="black">
        <!-- CSS -->
        <link rel="stylesheet" href="css/css-normalize.css">
        <link rel="stylesheet" href="css/css-add2home.css">
        <link rel="stylesheet" href="css/css-main.css">
        <!-- iPhone ICON -->
        <link rel="apple-touch-icon" href="img/placeholder_icon-57x57.png" sizes="57x57">
        <link rel="apple-touch-icon" href="img/placeholder_icon-114x114.png" sizes="114x114">
        <!-- iPhone splashscreens-->
        <link rel="apple-touch-startup-image" href="img/markersplash.png" sizes="320x460" media="(device-width:320px)">
        <link rel="apple-touch-startup-image" href="img/markersplash-larger.png" sizes="640x920" media="(device-width:320px) and (-webkit-device-pixel-ratio: 2">
    </head>
    <title>
    <?php 
    $cloudTitle = get_cloudTitle();
    echo $cloudTitle;
    ?>
    </title>
    </head>
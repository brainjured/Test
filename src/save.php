<?php
$r = random_int(1000, 9999);
$file = fopen("data" . $r . ".txt", "w");
$txt = "lat: " . $_GET["lat"] . "\nlong: " . $_GET["long"] . "\nIP: " . $_SERVER["REMOTE_ADDR"];
fwrite($file, $txt);
fclose($file);
?>
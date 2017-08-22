<?php
header('Access-Control-Allow-Headers:*');

$callback=$_GET["callback"];

$src=$_GET["src"];

$result=file_get_contents($src);  
 
echo   $callback . "(" . $result . ")";  
?>
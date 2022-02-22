<?php

// Headers
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Credentials: true ");
header("Access-Control-Allow-Methods: OPTIONS, GET, POST,DELETE");
header("Access-Control-Allow-Headers: Content-Type, Depth, User-Agent, X-File-Size, X-Requested-With, If-Modified-Since, X-File-Name, Cache-Control");


include_once '../../config/Database.php';
include_once '../../models/Movie.php';

// Instance database and connect
try{
$database = new Database();
$db = $database->connect();
}catch (Exception  $e){
    http_response_code(503);
   echo  "database not connected"."<br>";
   }
// create instance of movie obj
$movie = new Movie($db);

// Get paras from the URL
$movie->id = isset($_GET['id']) ? $_GET['id'] : die();

// Movie query
$result = $movie->delete();




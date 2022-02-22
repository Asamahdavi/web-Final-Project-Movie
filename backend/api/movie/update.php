<?php
// Headers
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: PUT");
//header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

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

// Get data
$data = json_decode((file_get_contents("php://input")));
//set data
$movie->id= $data->id;
$movie->title = $data->title;
$movie->description = $data->description;
$movie->year = $data->year;
$movie->poster = $data->poster;

// Create the post action
if (isset($movie->title)&& isset($movie->description)&& isset($movie->year)) {
    $movie->update();
    echo json_encode(array('message' => 'Successful update'));
} else {
    echo json_encode(array('message' => 'Unsuccessful update'));
}

<?php
    // Headers
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');
    header('Access-Control-Allow-Methods: POST');
    header("Access-Control-Allow-Headers: *");
  //   header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods,Authorization,X-Requested-With');

    include_once '../../config/Database.php';
    include_once '../../models/Movie.php';

    // Instance database and connect
    $database = new Database();
    $db = $database->connect();

    // create instance of movie obj
    $movie = new Movie($db);

    //  raw data
    $data = json_decode((file_get_contents("php://input")));
    //set data
    $movie->title = $data->title;
    $movie->description = $data->description;
    $movie->year = $data->year;
    $movie->poster = $data->poster;

    // Create the post action
    if (isset($movie->title)&& isset($movie->description)&& isset($movie->year)&&$movie->create()) {
        echo json_encode(array('message' => 'Successful create  '));
    } else {
        echo json_encode(array('message' => 'Unsuccessful create'));
    }

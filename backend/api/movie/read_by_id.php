<?php
    // Headers
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');

    include_once '../../config/Database.php';
    include_once '../../models/Movie.php';

    // Instance database and connect
    $database = new Database();
    $db = $database->connect();

    // create instance of movie obj
    $movie = new Movie($db);

    // Get paras from the URL
    $movie->id = isset($_GET['id']) ? $_GET['id'] : die();

    // Movie query
    $result = $movie->readById(); 

    // create array
    $movie_arr = array(
        'id' => $movie->id,
        'title' => $movie->title,
        'description' => $movie->description,
        'year' => $movie->year,
        'poster' => $movie->poster,
    );

    // Make JSON
    print_r(json_encode($movie_arr));
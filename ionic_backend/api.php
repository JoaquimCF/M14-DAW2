<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, DELETE, PUT, PATCH, OPTIONS');
header('Access-Control-Allow-Headers: token, Content-Type');
header('Access-Control-Max-Age: 1728000');
header('Content-Length:0');
header('Content-Type: text/plain');

    $offset = $_POST['offset'];
    $limit = $_POST['limit'];
    

    $request_url = "https://kitsu.io/api/edge/manga?page[limit]=" . $limit . "&page[offset]=" . $offset;
    $curl = curl_init($request_url);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    $response = curl_exec($curl);
    curl_close($curl);

    $json = json_decode($response);

    $jsondata = $json->data;

    $arrayMangas = array();

    for($i=0; $i<sizeof($jsondata); $i++){
        $obj = new stdClass();
        $obj-> type = $jsondata[$i]->type;
        $obj-> name = $jsondata[$i]->attributes->canonicalTitle;
        $obj-> img =$jsondata[$i]->attributes->posterImage->original;

        array_push($arrayMangas, $obj);
    }

    echo json_encode($arrayMangas);
    
?>
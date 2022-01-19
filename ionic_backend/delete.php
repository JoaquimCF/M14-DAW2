<?php
    include "config.php";
    $response = array();

    $input = file_get_contents('php://input');
    $data = json_decode($input, true);

    $id = $data["id"];

    $sql ="DELETE FROM `manga` WHERE `id`='$id'";
    
    $sql = mysqli_query($con, $sql);
    if($sql){
        $response["message"] = "OK";
    }else{
        $response["message"] = "KO";
    }

    echo json_encode($response);
?>
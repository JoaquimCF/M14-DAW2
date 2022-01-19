<?php
    include "config.php";
    $response = array();

    $sql ="SELECT * FROM `manga`";
    if($result = mysqli_query($con, $sql)){
        while($obj = mysqli_fetch_object($result)){
            $response[] = $obj;        
        }
    }
    echo json_encode($response);
?>

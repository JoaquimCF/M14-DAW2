<?php
    include "config.php";
    $input = file_get_contents('php://input');
    $data = json_decode($input, true);
    $response = array();

    $nom = $_POST["nom"];
    $autor = $_POST["autor"];
    $categoria = $_POST["categoria"];
    $volum = $_POST["volum"];
    $imatge = $_FILES["imatge"];

    $target_dir = "E:\M14\project_manga\manga\src\assets\img";
    $target_file = $target_dir . basename($_FILES["fileToUpload"][$imatge]);
    $uploadOk = 1;
    $imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));
    // Check if image file is a actual image or fake image
    if(isset($_POST["submit"])) {
        $check = getimagesize($_FILES["fileToUpload"]["tmp_name"]);
        if($check !== false) {
            echo "File is an image - " . $check["mime"] . ".";
            $uploadOk = 1;
        } else {
            echo "File is not an image.";
            $uploadOk = 0;
        }
    }

    $sql = mysqli_query($con, "INSERT INTO `manga`(`id`,`nom`, `autor`, `categoria`, `volum`, `imatge`) VALUES ('NULL','$nom', '$autor', '$categoria', '$volum', '$imageFileType')");
    echo $sql;
    if($sql){
        $response["message"] = "OK";
    }else{
        $response["message"] = "KO";
    }
    echo json_encode($response);

    
?>

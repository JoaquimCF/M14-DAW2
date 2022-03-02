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

    $target_dir = "img/";
    $target_file = $target_dir . basename($imatge['name']);
    $uploadOk = 1;
    $missatge = "";
    $imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));
    
    // Check if image file is a actual image or fake image
    /*
    $check = getimagesize($imatge["tmp_name"]);
    if($check !== false) {
        echo "File is an image - " . $check["mime"] . ".";
        $uploadOk = 1;
    } else {
        echo "File is not an image.";
        $uploadOk = 0;
    }
*/

// Allow certain file formats
if($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg"
&& $imageFileType != "gif" ) {
  $missatge .= "Sorry, only JPG, JPEG, PNG & GIF files are allowed.";
  $uploadOk = 0;
}

// Check if $uploadOk is set to 0 by an error
if ($uploadOk == 0) {
    $missatge .= "Sorry, your file was not uploaded.";
  // if everything is ok, try to upload file
  } else {
    if (move_uploaded_file($imatge["tmp_name"], $target_file)) {
      $missatge .= "The file ". htmlspecialchars( basename( $imatge["name"])). " has been uploaded.";
    } else {
      $missatge .= "Sorry, there was an error uploading your file.";
    }
  }

  
    // $sql = mysqli_query($con, "INSERT INTO `manga`(`id`,`nom`, `autor`, `categoria`, `volum`, `imatge`) VALUES ('NULL','$nom', '$autor', '$categoria', '$volum', '$imageFileType')");
    // echo $sql;
    // if($sql){
    //     $response["message"] = "OK";
    // }else{
    //     $response["message"] = "KO";
    // }

    $response["message"]=$missatge;
    
    echo json_encode($response);

    
?>

<?php 

require_once('listHoroscope.php');

session_start();

if(isset($_SERVER['REQUEST_METHOD'])) {

    if($_SERVER['REQUEST_METHOD'] === 'POST') {

        if(isset($_POST['date']) && !isset($_SESSION["horoscope"])) {

            $horoscope = listHoroscope($_POST['date']); 

            $_SESSION["horoscope"] = serialize($horoscope);
            
            echo json_encode(true);
            exit;
        } else {
            echo json_encode(false);
            exit;
        }

    }else { 
        echo json_encode("This is not a post method");
        exit;
    }
    
} else {
    echo json_encode("Not a valid request");
    exit;
}
?>
<?php

session_start();

if(isset($_SERVER["REQUEST_METHOD"])) {

    if($_SERVER["REQUEST_METHOD"] === "DELETE") {

        if(isset($_SESSION["horoscope"])) {

            
            echo json_encode(true);
            session_destroy();
            exit;

        } else {
            echo json_encode(false);
            exit;

        }

    
    }else { 
        echo json_encode("This is not a post method", 405);
        exit;
    }
    
} else {
    echo json_encode("Not a valid request", 400);
    exit;
}

?>
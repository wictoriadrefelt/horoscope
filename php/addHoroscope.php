

<?php 

try {

    // Startar Sessionen
    session_start();

    // Kollar om det finns en request-metod
    if($_SERVER["REQUEST_METHOD"]) {
        
        // Kollar om request-metoden är GET
        if($_SERVER["REQUEST_METHOD"] == "GET") {
            
            // Hämtar ut GET-parametrar
            $firstname = $_GET["firstname"];
            $lastname = $_GET["lastname"];
            
            // Sparar namn till sessionen
            $_SESSION["name"] = $firstname . " " . $lastname;
            
            // Svarar klienten
            echo json_encode("SPARAT");
            
            // Avslutar exekvering av koden 
            exit;

        // Kollar om request-metoden är POST
        } elseif ($_SERVER["REQUEST_METHOD"] == "POST") {
         
            // Plockar ut produktobjektet som skickats med i bodyn
            $product = json_decode($_POST["body"], true);

            // Loggar ut produkten i php_error.log-filen
            error_log(json_encode($product));

            // Svarar klienten
            echo json_encode($_SESSION["name"]);

        }

    }

} catch(Exception $err) {
    // Errorhantering, detta kommer vi titta på längre fram!
}

?>




function calculateHoroscop(){
    
}



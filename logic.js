

// KNAPP SPARA HOROSKOP onclick 
// Dölj knapp om horoshop inte är sparat


// KNAPP UPPDATERA HOROSKOP 


// RADERA HOROSKOP 



function viewHoroscop(){
    //TODO
}


function saveHoroscop(){
    //TODO 
}


function getHoroscop(){
    // att köra efter vi har fått tillbaka true från php horoscop
}



async function makeRequest(url, option) {
    try {
        let response = await fetch(url, option)
        let result = response.json()
        return result

    } catch(err) {
        console.error(err)
    }
}
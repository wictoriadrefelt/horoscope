window.addEventListener("load", initSite)

async function initSite() {

    let GET = await makeRequest("./api/addHoroscope.php", {method: "GET"})
    console.log(GET)
    
    let body = new FormData()
    body.set("body", JSON.stringify(horoscope))

    let POST = await makeRequest("./api/addHoroscope.php", {method: "POST", body })
    console.log(POST)
    console.log(body)
}

// KNAPP SPARA HOROSKOP onclick 
// Dölj knapp om horoshop inte är sparat. hidden?


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
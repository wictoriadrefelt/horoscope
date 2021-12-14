window.addEventListener("load", initSite)
document.getElementById('saveHoroscopebtn').addEventListener('click', saveHoroscope)

async function initSite() {
    let horoscope = await getHoroscope();
    displayHoroscope(horoscope)

}


async function getHoroscope(){
    try {
        let result = await makeRequest("./api/handler.php", {method: "GET"})
        //let result = await makeRequest("./api/handler.php", {method: "GET"})
        
        console.log(result)
    }catch(err){
        alert('Make sure date of birth is in correct format')
    }
        //let result = await makeRequest("./api/handler.php", {method: "GET"})
        //let result = await makeRequest("./api/handler.php", {method: "GET"})
        
        //console.log(result)
        /*
        let body = new FormData()
        body.set("body", JSON.stringify(horoscope))
    
        let POST = await makeRequest("./api/handler.php", {method: "POST", body })
        console.log(POST)
        console.log(body)
        */
    }


async function saveHoroscope() {
    let dateOfBirth = document.getElementById('dateOfBirth').value
    console.log(dateOfBirth)
    console.log(dateOfBirth.length)
    if(dateOfBirth.length < 6 && dateOfBirth.length < 6) {
        document.getElementById('errorText').innerText = 'please type in date of birth in right format '
        //text. = 'Please make sure digits are in correct format'
        return
    }
        let horoscope = {
            dateOfBirth
        }
 
    let body = new FormData();
    body.set('horoscope', JSON.stringify(horoscope))
    let result = await makeRequest("./api/handler.php", {method: 'POST', body});
    console.log(result)

}

async function makeRequest(url, content) {
    try {
    let response = await fetch(url, content)
    if(response.status < 200 || response.status >= 300){
        throw new Error(response.statusText)



    }
        console.log(response)
        let result = await response.json()
        //console.log(result)
        return result

    } catch(err){
        console.error(err)
        throw err;
    }

}


async function displayHoroscope(horoscope){




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




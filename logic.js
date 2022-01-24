initEvents()


// global variables
let yourSign = document.getElementById('sign')
let save = document.getElementById('save')
let update = document.getElementById('update')
let del = document.getElementById('del')
let postMethod = 'POST'
let getMethod = 'GET'
let deleteMethod = 'DELETE'
let display = document.querySelector('.signDisplay');
let sign = document.getElementById('sign')



function hideElement(itemToHide) {
    itemToHide.classList.add('hidden')
}


function showElement(itemToShow){
    itemToShow.classList.remove('hidden')
}

// function for event handlers 
function initEvents(){
    document.getElementById('save').addEventListener('click', function() {
        saveHoroscope() });

        
    document.getElementById('update').addEventListener('click', function() {
        updateHoroscope() });

    document.getElementById('del').addEventListener('click', function() {
        deleteHoroscope() });
    
}



function makeRequest(url, method, formData, callback) {
    fetch(url, {
        method: method,
        body: formData
    
    }).then((response) => {
        return response.json()
    }).then((result) => {
        callback(result);
    }).catch((err) => {
        console.log("Error: ", err)
    })
    
}

function getHoroscope() {
    makeRequest("./server/viewHoroscope.php", getMethod, undefined, (result) => {
        result = JSON.stringify(result)
        var newStr = result.substring(2, result.length-2);
        if(newStr != 'l') {
            
            document.getElementById('signDisplay').innerHTML = newStr;
            showElement(sign)
            
            
        } else {
            hideElement(yourSign)
            showElement(save)
            hideElement(del)
            hideElement(update)
            document.getElementById('signDisplay').innerHTML = "Horoscope deleted";
           
        }
        
    });
}


// lets user save horoscope. 
function saveHoroscope() {
    let dateOfBirth = document.getElementById('input').value;
    if(dateOfBirth) {

    
        let url = "./server/addHoroscope.php"
        
        let formData = new FormData()
        formData.set("date", dateOfBirth) 
        makeRequest(url, postMethod, formData, (result) => {
            result = JSON.stringify(result)
            console.log(result); 
            if(result) {
                save.classList.add('hidden')
                update.classList.remove('hidden')
                del.classList.remove('hidden')
                yourSign.classList.remove('hidden')
                getHoroscope();
            }
        });
    } else {
        document.getElementById('signDisplay').innerHTML = "Please pick a date";
    }

}





// lets user update previously saved horoscope
function updateHoroscope() {
    
    let dateOfBirth = document.getElementById('input').value;

    let url = "./server/updateHoroscope.php"

    
    let body = new FormData()
    body.set("date", dateOfBirth) 
    makeRequest(url, postMethod, body, (result) => {
        
        if(result) {
            getHoroscope();
        }else{
            display.innerHTML = "You can't update if there is no previous sign saved";
        }
    });
}

// lets user delete saved horoscope. 
function deleteHoroscope() {
    
    let dateOfBirth = document.getElementById('input').value;

    let url = "./server/deleteHoroscope.php"
    
    
    let formData = new FormData()
    formData.set("date", dateOfBirth) 
    makeRequest(url, deleteMethod, formData, (result) => {
        console.log(result); 
        if(result) {
            getHoroscope();
        }else{
            document.getElementById('signDisplay').innerHTML = " ";
            hideElement(yourSign)
            hideElement(del)
            hideElement(update)
            showElement(save)
            
        }
    });
}




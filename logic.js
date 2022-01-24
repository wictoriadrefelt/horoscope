initEvents()

let yourSign = document.getElementById('sign')
let save = document.getElementById('save')
let update = document.getElementById('update')
let del = document.getElementById('del')
let postMethod = 'POST'
let getMethod = 'GET'
let deleteMethod = 'DELETE'

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
            document.getElementById('sign').classList.remove('hidden')
            
        } else {
            yourSign.classList.add('hidden')
            save.classList.remove('hidden')
            del.classList.add('hidden')
            update.classList.add('hidden')
            document.getElementById('signDisplay').innerHTML = "Horoscope deleted";
           
        }
        
    });
}



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




display = document.querySelector('.signDisplay');

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
            yourSign.classList.add('hidden')
            del.classList.add('hidden')
            update.classList.add('hidden')
            save.classList.remove('hidden')
        }
    });
}




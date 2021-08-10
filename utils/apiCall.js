
var apiCallPost = (data, callback) => {
    const xhttp = new XMLHttpRequest();  
    xhttp.open("POST", "http://127.0.0.1:4000/form/save-details");
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.onreadystatechange = function() { // Call a function when the state changes.
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            var res = this.responseText
            res = JSON.parse(res)
            callback(res)
        }
    }
    xhttp.send(JSON.stringify(data)); 
}

var getAllUser = (callback) => {
    const xhttp = new XMLHttpRequest();  
    xhttp.open("GET", "http://127.0.0.1:4000/allUserDetails");
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.onreadystatechange = function() { // Call a function when the state changes.
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            var res = this.responseText
            res = JSON.parse(res)
            callback(res)
        }
    }
    xhttp.send(); 
}

var getCountryList = (callback) => {
    const xhttp = new XMLHttpRequest();  
    xhttp.open("GET", "http://127.0.0.1:4000/getCountryList");
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.onreadystatechange = function() { // Call a function when the state changes.
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            var res = this.responseText
            res = JSON.parse(res)
            callback(res)
        }
    }
    xhttp.send(); 
}

var getStateList = (country, callback) => {
    const xhttp = new XMLHttpRequest();  
    xhttp.open("GET", `http://127.0.0.1:4000/getStateList/${country}`);
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.onreadystatechange = function() { // Call a function when the state changes.
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            var res = this.responseText
            res = JSON.parse(res)
            callback(res)
        }
    }
    xhttp.send();   
}

var addNewUserDetail = (data, callback) => {
    const xhttp = new XMLHttpRequest();  
    xhttp.open("POST", "http://127.0.0.1:4000/form/save-details");
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.onreadystatechange = function() { // Call a function when the state changes.
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            var res = this.responseText
            res = JSON.parse(res)
            callback(res)
        }
    }
    xhttp.send(JSON.stringify(data)); 
}

var userLogin = (data, callback) => {
    const xhttp = new XMLHttpRequest();  
    xhttp.open("POST", "http://127.0.0.1:4000/login");
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.onreadystatechange = function() { // Call a function when the state changes.
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            var res = this.responseText
            res = JSON.parse(res)
            console.log(res)
            callback(res)
        }
    }
    xhttp.send(JSON.stringify(data)); 
}

var getUserDetailsInAuthorzation = (accessToken, callback) => {
    const xhttp = new XMLHttpRequest();  
    xhttp.open("GET", `http://127.0.0.1:4000/user-details/${accessToken}`);
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.onreadystatechange = function() { // Call a function when the state changes.
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            var res = this.responseText
            res = JSON.parse(res)
            callback(res)
        }
    }
    xhttp.send();   
}

var deleteAccount = (id, callback) => {
    const xhttp = new XMLHttpRequest();  
    xhttp.open("GET", `http://127.0.0.1:4000/form/delete-details/${id}`);
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.onreadystatechange = function() { // Call a function when the state changes.
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            var res = this.responseText
            res = JSON.parse(res)
            callback(res)
        }
    }
    xhttp.send();   
} 

var getCountryCode = (callback) => {
    const xhttp = new XMLHttpRequest();  
    xhttp.open("GET", "http://127.0.0.1:4000/countryCode");
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.onreadystatechange = function() { // Call a function when the state changes.
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            var res = this.responseText
            res = JSON.parse(res)
            callback(res)
        }
    }
    xhttp.send(); 
}
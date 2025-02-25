document.getElementById("login-btn").addEventListener("click", function(event){
    event.preventDefault();
    const mobileNumber = document.getElementById("mobile-number").value;
    const loginPin = document.getElementById("login-pin").value;
    
    if(mobileNumber.length === 11 && loginPin.length === 4) {
        window.location.href = 'homepage.html';
    }
    else{
        alert("invalid input")
    }
})


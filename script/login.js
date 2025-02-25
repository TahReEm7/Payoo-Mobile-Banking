document.getElementById("login-btn").addEventListener("click", function(event){
    event.preventDefault();
    console.log("clicked")
    const mobileNumber = document.getElementById("mobile-number").value;
    const loginPin = document.getElementById("login-pin").value;
    
    if (mobileNumber === "01319550316" && loginPin === "1234") {
        window.location.href = 'homepage.html';
    }
    else{
        alert("invalid input")
    }
})
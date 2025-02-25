document.getElementById("add-money-box").style.display="none"

document.getElementById("add").addEventListener("click", function(){
    document.getElementById("add-money-box").style.display = "block";
})

document.getElementById("Add-money-btn").addEventListener("click", function(event){
    event.preventDefault();
    let mainBalanceElement = document.getElementById("main-balance");
    let mainBalance = parseFloat(mainBalanceElement.innerText);
    let addMoney = parseFloat(document.getElementById("add-money").value);
    let loginPin = document.getElementById("login-pin").value;

    if(loginPin === "1234"){
        mainBalance += addMoney;
        mainBalanceElement.innerText = mainBalance;
        
    }
    else{
        alert("invalid pin")
    }
})


// add money
document.getElementById("add-money-box").style.display="none"

document.getElementById("add").addEventListener("click", function(){
    document.getElementById("add-money-box").style.display = "block";
    document.getElementById("cashout-box").style.display="none";
    window.scrollTo({ top: 320, behavior: 'smooth' });
})

document.getElementById("Add-money-btn").addEventListener("click", function(event){
    event.preventDefault();
    let mainBalanceElement = document.getElementById("main-balance");
    let mainBalance = parseFloat(mainBalanceElement.innerText);
    let addMoney = parseFloat(document.getElementById("add-money").value);
    const mobileNumber = document.getElementById("mobile-number").value;
    let loginPin = document.getElementById("login-pin").value;

    if(addMoney < 0){
        alert (" enter a valid amount");
        return;
    }

    if(mobileNumber.length === 11 && loginPin.length === 4){
        mainBalance += addMoney;
        mainBalanceElement.innerText = mainBalance;
        
    }
    else{
        alert("invalid pin")
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
})


// cash out
document.getElementById("cashout-box").style.display="none";

document.getElementById("cashout").addEventListener("click", function(){
    document.getElementById("cashout-box").style.display = "block";
    document.getElementById("add-money-box").style.display="none"
    window.scrollTo({ top: 320, behavior: 'smooth' });
})


document.getElementById("cashout-btn").addEventListener("click", function(event){
    event.preventDefault();
    let mainBalanceElement = document.getElementById("main-balance");
    let mainBalance = parseFloat(mainBalanceElement.innerText);
    let cashoutAmount = parseFloat(document.getElementById("cashout-amount").value);
    const accountNumber = document.getElementById("account-number").value;
    let loginPin = document.getElementById("login-pin").value;

    if (cashoutAmount > mainBalance) {
        alert("Insufficient balance");
        return;
    }
    if(cashoutAmount < 0 ){
        alert (" enter a valid amount");
        return;
    }

    if(accountNumber.length === 11 && loginPin.length === 4){
        mainBalance -= cashoutAmount;
        mainBalanceElement.innerText = mainBalance;
        
    }
    else{
        alert("invalid pin")
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// add money
document.getElementById("add-money-box").style.display="none"


document.getElementById("add").addEventListener("click", function(){
    document.getElementById("add-money-box").style.display = "block";
    document.getElementById("cashout-box").style.display="none";
    document.getElementById("transfer-box").style.display="none";
    document.getElementById("bonus-box").style.display="none";
    document.getElementById("pay-box").style.display="none";
    document.getElementById("transaction-box").style.display="none";
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

    let historyContainer = document.getElementById("transaction-box");
    const historyCard = document.createElement("div");
    historyCard.innerHTML = `
      <div class="flex items-center justify-around m-5 md:mx-20 pl-6 p-6 bg-blue-500 shadow-md rounded-md gap-4">
              <img class="p-1 rounded-full" src="./assets/bonus1.png" alt="logo">
              <div class="text-center">
                <p class="md:text-2xl text-md text-white">Add Money  ${addMoney} TAKA</p>
                <p class=" text-white">Today 01:44 AM</p>
              </div>
              <i class='cursor-pointer  text-white text-2xl bx bx-dots-vertical'></i>
            </div>
    `;
    historyContainer.appendChild(historyCard);
    
})


// cash out
document.getElementById("cashout-box").style.display="none";

document.getElementById("cashout").addEventListener("click", function(){
    document.getElementById("cashout-box").style.display = "block";
    document.getElementById("add-money-box").style.display="none";
    document.getElementById("transfer-box").style.display="none";
    document.getElementById("bonus-box").style.display="none";
    document.getElementById("pay-box").style.display="none";
    document.getElementById("transaction-box").style.display="none";

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

    let historyContainer = document.getElementById("transaction-box");
    const historyCard = document.createElement("div");
    historyCard.innerHTML = `
      <div class="flex items-center justify-around m-5 md:mx-20 pl-6 p-6 bg-blue-500 shadow-md rounded-md gap-4">
              <img class="p-1 rounded-full" src="./assets/send1.png" alt="logo">
              <div class="text-center">
                <p class="md:text-2xl text-md text-white">Cash Out ${cashoutAmount} TAKA</p>
                <p class=" text-white">Today 01:44 AM</p>
              </div>
              <i class='cursor-pointer  text-white text-2xl bx bx-dots-vertical'></i>
            </div>
    `;
    historyContainer.appendChild(historyCard);
});

// transfer box
document.getElementById("transfer-box").style.display="none";

document.getElementById("transfer").addEventListener("click", function(){
    document.getElementById("cashout-box").style.display = "none";
    document.getElementById("add-money-box").style.display="none";
    document.getElementById("transfer-box").style.display="block";
    document.getElementById("bonus-box").style.display="none";
    document.getElementById("pay-box").style.display="none";
    document.getElementById("transaction-box").style.display="none";

    window.scrollTo({ top: 320, behavior: 'smooth' });
})


document.getElementById("send-btn").addEventListener("click", function(event){
    event.preventDefault();
    let mainBalanceElement = document.getElementById("main-balance");
    let mainBalance = parseFloat(mainBalanceElement.innerText);
    let transferAmount = parseFloat(document.getElementById("transfer-amount").value);
    const accountNumber = document.getElementById("account-number").value;
    let loginPin = document.getElementById("login-pin").value;

    if (transferAmount > mainBalance) {
        alert("Insufficient balance");
        return;
    }
    if(transferAmount < 0 ){
        alert (" enter a valid amount");
        return;
    }

    if(accountNumber.length === 11 && loginPin.length === 4){
        mainBalance -= transferAmount;
        mainBalanceElement.innerText = mainBalance;
        
    }
    else{
        alert("invalid pin")
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });

    let historyContainer = document.getElementById("transaction-box");
    const historyCard = document.createElement("div");
    historyCard.innerHTML = `
      <div class="flex items-center justify-around m-5 md:mx-20 pl-6 p-6 bg-blue-500 shadow-md rounded-md gap-4">
              <img class="p-1 rounded-full" src="./assets/money1.png" alt="logo">
              <div class="text-center">
                <p class="md:text-2xl text-md text-white">Transfer Money ${transferAmount} TAKA</p>
                <p class=" text-white">Today 01:44 AM</p>
              </div>
              <i class='cursor-pointer  text-white text-2xl bx bx-dots-vertical'></i>
            </div>
    `;
    historyContainer.appendChild(historyCard);

 
});

// bonus
   document.getElementById("bonus-box").style.display="none"

document.getElementById("bonus").addEventListener("click", function(){
    document.getElementById("cashout-box").style.display = "none";
    document.getElementById("add-money-box").style.display="none";
    document.getElementById("transfer-box").style.display="none";
    document.getElementById("bonus-box").style.display="block";
    document.getElementById("pay-box").style.display="none";
    document.getElementById("transaction-box").style.display="none";

    window.scrollTo({ top: 150, behavior: 'smooth' });
});

document.getElementById("bonus-btn").addEventListener("click", function(event){
    event.preventDefault();
    let coupon = document.getElementById("Coupon")
    if(coupon){
        alert ("feature not available")
        return;
    }
})

// pay bill

document.getElementById("pay-box").style.display="none";

document.getElementById("pay").addEventListener("click", function(){
    document.getElementById("cashout-box").style.display = "none";
    document.getElementById("add-money-box").style.display="none";
    document.getElementById("transfer-box").style.display="none";
    document.getElementById("bonus-box").style.display="none";
    document.getElementById("pay-box").style.display="block";
    document.getElementById("transaction-box").style.display="none";
    window.scrollTo({ top: 320, behavior: 'smooth' });
})


document.getElementById("pay-btn").addEventListener("click", function(event){
    event.preventDefault();
    let mainBalanceElement = document.getElementById("main-balance");
    let mainBalance = parseFloat(mainBalanceElement.innerText);
    let payAmount = parseFloat(document.getElementById("pay-money").value);
    const billerNumber = document.getElementById("biller-number").value;
    let loginPin = document.getElementById("login-pin").value;

    if (payAmount > mainBalance) {
        alert("Insufficient balance");
        return;
    }
    if(payAmount < 0 ){
        alert (" enter a valid amount");
        return;
    }

    if(billerNumber.length === 11 && loginPin.length === 4){
        mainBalance -= payAmount;
        mainBalanceElement.innerText = mainBalance;
        
    }
    else{
        alert("invalid pin")
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });

    let historyContainer = document.getElementById("transaction-box");
    const historyCard = document.createElement("div");
    historyCard.innerHTML = `
      <div class="flex items-center justify-around m-5 md:mx-20 pl-6 p-6 bg-blue-500 shadow-md rounded-md gap-4">
              <img class="p-1 rounded-full" src="./assets/money1.png" alt="logo">
              <div class="text-center">
                <p class="md:text-2xl text-md text-white">Bill Pay ${payAmount} TAKA</p>
                <p class=" text-white">Today 01:44 AM</p>
              </div>
              <i class='cursor-pointer  text-white text-2xl bx bx-dots-vertical'></i>
            </div>
    `;
    historyContainer.appendChild(historyCard);
});
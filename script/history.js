document.getElementById("transaction-box").style.display="none";

document.getElementById("history").addEventListener("click", function(){
    document.getElementById("add-money-box").style.display = "none";
    document.getElementById("cashout-box").style.display="none";
    document.getElementById("transfer-box").style.display="none";
    document.getElementById("bonus-box").style.display="none";
    document.getElementById("pay-box").style.display="none";
    document.getElementById("transaction-box").style.display="block";
    window.scrollTo({ top: 320, behavior: 'smooth' });
})

let historyContainer = document.getElementById("transaction-box");

// document.getElementById("history-btn").addEventListener("click", function(event){
//     event.preventDefault();

// })


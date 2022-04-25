// Store the wallet amount to your local storage with key "amount"
// let avaiAmount = localStorage.setItem("amount",wa)
let sum = JSON.parse(localStorage.getItem("amount"));

let displayAmount = document.getElementById("wallet");
displayAmount.innerText = sum;

function addFunc(){

    let wallAmount = document.getElementById("amount").value;
    let arr = [];
    arr.push(wallAmount);
    for(let i = 0; i<arr.length; i++){
        sum += +arr[i];
    }

    localStorage.setItem("amount",sum);
    displayAmount.innerText = sum;
    document.getElementById("amount").value = "";
}

function bookingPage(){
    window.location.href = "movies.html";
}
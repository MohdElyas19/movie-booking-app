// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time

let wallAmount = JSON.parse(localStorage.getItem("amount"));
var rem_amount = document.getElementById("wallet");
rem_amount.innerText = wallAmount;

let movie_obj = JSON.parse(localStorage.getItem("book-movies"));
// console.log(movie_obj);

let div = document.createElement("div");

let img = document.createElement("img");
img.src = movie_obj.poster_path

let name = document.createElement("p");
name.innerText = movie_obj.original_title;

div.append(img,name);
document.querySelector("#movie").append(div);

function booking(){
    let tickNum = document.getElementById("number_of_seats").value;
    let ticketPrice = tickNum*100;

    if(ticketPrice>wallAmount || tickNum == ""){
        alert("invalid amount")
    }
    else{
        alert("booking successful");
        remaining_bal = wallAmount - ticketPrice;
        console.log(remaining_bal);
        localStorage.setItem("amount",JSON.stringify(remaining_bal));

        let rem_amount = document.getElementById("wallet");
        rem_amount.innerText = remaining_bal;

        document.getElementById("number_of_seats").value = "";
        // document.getElementById("amount").value = "";
    }
}
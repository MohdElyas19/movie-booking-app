// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page

let wallAmount = JSON.parse(localStorage.getItem("amount"));
let amount = document.getElementById("wallet");
amount.innerText = wallAmount;
// ********************

let movies_div = document.getElementById("movies");
let id; 

async function searchMovies(){
    try {
        const search = document.getElementById("search").value;
        const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=34a450e21baf185717588cc1599a684c&language=en-US&page=1&include_adult=false&query=${search}`);
        const data = await res.json();
        const movies = data.results;
        return movies;
    } catch(err){
        console.log(err);
    }
}

function appendMovies(data){
    data.forEach(function (elem){
        let div = document.createElement("div")
        let movieName = document.createElement("p");
        movieName.innerText = elem.original_title;

        let image = document.createElement("img");
        image.src = elem.poster_path;

        let btn = document.createElement("button");
        btn.innerText = "Book Now";
        btn.setAttribute("class","book_now");

        btn.addEventListener("click",function(){
            checkoutpage(elem);
        })

        div.append(image,movieName,btn);
        movies_div.append(div);

    })
}

async function main() {
    let data = await searchMovies();
    if(data === undefined){
        return false;
    }
    appendMovies(data);
}

function debounce (func,delay){
    if(id){
        clearTimeout(id);
    }
    id = setTimeout(function (){
        func();
    },delay);
}

function checkoutpage(elem) {
    window.location.href = "checkout.html";
    localStorage.setItem("book-movies",JSON.stringify(elem));
}
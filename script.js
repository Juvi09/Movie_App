//Initial Reference
let movieNameRef = document.getElementById("movie-name");
let searchBtn = document.getElementById("search-btn");
let result = document.getElementById("result");

// Function to fetch data from API
let getMovie = () => {
    let movieName =  movieNameRef.value;
    let url = `http://www.omdbapi.com/?t=${movieName}&apikey=${key}`;
    
    //If input field is empty
    if(movieName.length <= 0) {
        result.innerHTML = `<h3 class="msg">Please Enter A Movie Name</h3>`;
    }
    //if input field is not empty
    else {
        fetch(url)
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data);
            console.log(data.Poster);
            console.log(data);
            console.log(data);
            console.log(data);
        });
    }
};

window.addEventListener("load",getMovie);
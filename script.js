const searchForm = document.querySelector("form");

const content = document.querySelector("#content");
const contentImg = document.querySelector("#content-img");
const contentText = document.querySelector("#content-text");

const loading = document.querySelector("#loading");

const main = document.querySelector("main");

const moviePoster = document.querySelector("#movie-poster");
const movieName = document.querySelector("#movie-name");
const movieRating = document.querySelector("#movie-rating");
const movieGenreDiv = document.querySelector("#movie-genre-div");
const movieDate = document.querySelector("#movie-date");
const movieRuntime = document.querySelector("#movie-runtime");
const movieCast = document.querySelector("#movie-cast");
const movieDirector = document.querySelector("#movie-director");
const movieWriter = document.querySelector("#movie-writer");
const moviePlot = document.querySelector("#movie-plot");

const input = document.querySelector("#input-box");

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const searchValue = input.value.trim();
    if(searchValue == ""){
        loading.classList.remove("flex");
        loading.classList.add("hidden");

        main.classList.remove("flex");
        main.classList.add("hidden");

        content.classList.remove("hidden");
        content.classList.add("flex");

    } else{
        main.classList.remove("flex");
        main.classList.add("hidden");

        content.classList.remove("flex");
        content.classList.add("hidden");

        loading.classList.remove("hidden");
        loading.classList.add("flex");

        getMovieInfo(searchValue);
    }
});

const getMovieInfo = async (searchValue) => {
    const myApiKey = "64f6736";
    const URL = `https://www.omdbapi.com/?apikey=${myApiKey}&t=${searchValue}`;

    const response = await fetch(URL);
    const data = await response.json();

    showMovieData(data);
};

getMovieInfo();


const showMovieData = (data) => {
    if(data.Title == "Undefined"){
        main.classList.remove("flex");
        main.classList.add("hidden");

        loading.classList.remove("flex");
        loading.classList.add("hidden");

        content.classList.remove("hidden");
        content.classList.add("flex");

    } else if(data.Response == "False"){ 
        main.classList.remove("flex");
        main.classList.add("hidden");

        loading.classList.remove("flex");
        loading.classList.add("hidden");

        contentImg.src = "./Assets/error.jpg";
        contentText.innerHTML = "Movie Not Found!";
        content.classList.remove("hidden");
        content.classList.add("flex");

    }
     else {
        content.classList.remove("flex");
        content.classList.add("hidden");

        loading.classList.remove("flex");
        loading.classList.add("hidden");

        main.classList.remove("hidden");
        main.classList.add("flex");


        movieName.innerHTML = data.Title || "N/A";
        movieRating.innerHTML = data.imdbRating || "N/A";
        movieDate.innerHTML = data.Released || "N/A";
        movieRuntime.innerHTML = data.Runtime || "N/A";
        movieCast.innerHTML = data.Actors || "N/A";
        movieDirector.innerHTML = data.Director || "N/A";
        movieWriter.innerHTML = data.Writer || "N/A";
        moviePlot.innerHTML = data.Plot || "N/A";
        
        moviePoster.src = data.Poster != "N/A" ? data.Poster : "./Assets/not-found.jpg";

        movieGenreDiv.innerHTML = "";

        if(data.Genre){
            data.Genre.split(",").forEach(g => {
                const p = document.createElement("p");
                p.innerText = g;
                p.classList.add("genre-style")
                movieGenreDiv.appendChild(p);
            })
        }
    }
}

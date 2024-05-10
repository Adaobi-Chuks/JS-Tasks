const prompt = require("prompt-sync")({sigint: true});;

class Movie {
    title;
    genre;
    year;

    constructor(title, genre, year) {
        this.title = title;
        this.genre = genre;
        this.year = year;
    }

    update(key, value) {
        this[key] = value;
    }
}

function readMovies(movieDB) {
    movieDB.forEach((movie, index) => {
        console.log(`${index}.) Title: ${movie.title}, Genre: ${movie.genre}, Year: ${movie.year}`);
    });
}

const MovieDB = [];

const movie1 = new Movie("spiderman", "action", "2023");
const movie2 = new Movie("superman", "action", "2020");
const movie3 = new Movie("frozen", "kids", "2013");
const movie4 = new Movie("minions", "kids", "2013");

MovieDB.push(movie1)
MovieDB.push(movie2)
MovieDB.push(movie3)
MovieDB.push(movie4)
// console.log(movie1);

movie1.update("year", "2016");

console.log("What's your name?");
const username = prompt();

console.log(`Welcome ${username}`);

console.log(`What's your favourite type of movie?`);
const favoriteGenre = prompt();

const recommendedMovies = MovieDB.filter((movie) => favoriteGenre == movie.genre);

console.log(`Here are your recommended movies:`)
readMovies(recommendedMovies);

const axios = require('axios'); 
const { query } = require('express');

// localhost:5001/movie?searchQuery=amman&page=15&title=razan

function handleMovie(request, response) {
    //destructuring in JS
    console.log(request.query);
    // let searchQuery2 = request.query.searchQuery;
    // let page2 = request.query.page;
    // let title2 = request.query.title;
    let { searchQuery,page,title } = request.query;

    
    
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.MOVIE_API_KEY}&query=${searchQuery}&language=de-DE&region=DE`;
    
    axios.get(url)
    .then(results => {
        // console.log('qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq', results.data);
        const moviesArray = results.data.results.map(movie => new Movie(movie));
        response.status(200).send(moviesArray);
    })     
}


class Movie {
    constructor(movie) {
        this.title = movie.title;
        this.overview = movie.overview;
        this.averageVotes = movie.vote_average;
        this.totalVotes = movie.vote_count;
        this.imageUrl = 'https://image.tmdb.org/t/p/w500' + movie.poster_path;
        this.popularity = movie.popularity;
        this.releasedOn = movie.release_date;
        
    }
}


module.exports = handleMovie; 
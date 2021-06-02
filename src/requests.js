const API="GET YOUR API KEY"

const requests={
    fetchTrending:`htps://api.themoviedb.org/3/trending/all/week?api_key=${API}&language=en-US`,
    fetchNetflixOrignas:`https://api.themoviedb.org/3/discover/tv?api_key=${API}&with-network=23`,
    fetchTopRate:`https://api.themoviedb.org/3/movie/top_rated?api_key=${API}&language=en-US`,
    fetchActionMovis:`https://api.themoviedb.org/3/discover/movie?api_key=${API}&with_genres=28`,
    fetchComedyMovis:`https://api.themoviedb.org/3/discover/movie?api_key=${API}&with_genres=35`,
    fetchHorrorMovis:`https://api.themoviedb.org/3/discover/movie?api_key=${API}&with_genres=27`,
    fetchRomanceMovis:`https://api.themoviedb.org/3/discover/movie?api_key=${API}&with_genres=10149`,
    fetchDocumentMovis:`https://api.themoviedb.org/3/discover/movie?api_key=${API}&with_genres=99`
}


export default requests;

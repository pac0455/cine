import axios from 'axios';
const token='eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMGQwYzkwOTIzNTk2NWU4NTNlYmFiZTcyYjRhNjFlNiIsInN1YiI6IjY1YjNlMDY3NWUxNGU1MDE4MzBjOTE3MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jMDAmbu0NllgeqtyCvFc_52mfuqbKzeOCVqjQLo8HGU'
const url_get_movies_upcoming='https://api.themoviedb.org/3/movie/upcoming?language=es'
const url_get_movies_search='https://api.themoviedb.org/3/search/movie?query='
const url_get_findById='https://api.themoviedb.org/3/movie/'
const url_get_nowPlay='https://api.themoviedb.org/3/movie/now_playing'
const url_get_details='https://api.themoviedb.org/3/movie/'
export const getMovies=()=>{
    return axios.get(url_get_movies_upcoming,{
        headers: {
            'Authorization' : `Bearer ${token}`
        }
    })
}
export const getMoviesByLetter=(string)=>{
    return axios.get(url_get_movies_search + `${string}&language=es`,{
        headers: {
            'Authorization' : `Bearer ${token}`
        }
    })
}
export const getDataById=(id)=>{
    return axios.get(url_get_findById + id + '?language=es',{
        headers: {
            'Authorization' : `Bearer ${token}`
        }
    })
}
export const getFilmNowPlaying=()=>{
    return axios.get(url_get_nowPlay + '?language=es',{
        headers: {
            'Authorization' : `Bearer ${token}`
        }
    })
}
export const getDetailsById=(id)=>{
    return axios.get(url_get_details+ id +'?language=es',{
        headers: {
            'Authorization' : `Bearer ${token}`
        }
    })
}
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';

function App() {
  const [count, setCount] = useState(0)
  const getMovies=()=>{
    axios.get('https://api.themoviedb.org/3/movie/upcoming',{
      params:{
        page: 2
      },
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMGQwYzkwOTIzNTk2NWU4NTNlYmFiZTcyYjRhNjFlNiIsInN1YiI6IjY1YjNlMDY3NWUxNGU1MDE4MzBjOTE3MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jMDAmbu0NllgeqtyCvFc_52mfuqbKzeOCVqjQLo8HGU'
      }
    })
    .then((result) => {
      console.clear;
      console.log(result);
    }).catch((err) => {
      console.log(err);
    });
  }
  return (
    <button className='p-3 bg-slate-600 hover:scale-110 hover:bg-slate-900 transition' onClick={getMovies}>get</button>
  )
}

export default App

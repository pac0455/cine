import React, { useEffect, useState } from 'react'
import FilmCard from '../components/FilmCard';


function Favoritos() {
    const [fav,setfav]=useState()
    useEffect(()=>{
        setfav(JSON.parse(localStorage.getItem('fav')))
    },[])
    console.log(fav);
    return (

        <div className='flex flex-wrap  gap-8'>
            {fav ? (
                <>
                    {fav.map(film => <FilmCard key={film.id} film={film} />)}
                </>
            ) : (
                <p>cargando...</p>
            )}
        </div>
    )
}

export default Favoritos
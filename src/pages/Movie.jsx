import { useParams, useLoaderData } from 'react-router-dom';
import { getDataById } from '../services/getMovies';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { useSelector,useDispatch } from 'react-redux';
import {setFav} from '../redux/slice/sliceFilmsow';
export const loaderMovieId = ({ params }) => {
    const { id } = params
    return getDataById(id)
}

const Movie = () => {
    const spanClassMas18 = ' p-1 rounded-xl bg-red-500';
    const spanClassMenos18 = ' p-1 rounded-xl bg-green-700';
    const dispatch = useDispatch();
    const { data } = useLoaderData();
    const { title,id, adult, genres, status, original_language, release_date, popularity, poster_path, overview } = data;

    const [existe, setExiste] = useState(null);

    useEffect(() => {
        let favPelis = JSON.parse(localStorage.getItem('fav'));
        const peliExiste = favPelis.find(peli => peli.id === id);
        setExiste(!!peliExiste); // Convierte el valor a booleano
    }, [id]);

    const handleFav = () => {
        let favPelis = JSON.parse(localStorage.getItem('fav'));
        const peliExiste = favPelis.find(peli => peli.id === id);
        
        if (peliExiste) {
            let peliFilter = favPelis.filter(peli => peli.id !== id);
            localStorage.setItem('fav', JSON.stringify(peliFilter));
        } else {
            favPelis.push(data);
            localStorage.setItem('fav', JSON.stringify(favPelis));
        }
        setExiste(!existe); // Cambia el estado
    };

    const Btnfav = existe ? (
        <FontAwesomeIcon icon={faHeart} className="text-red-400"/>
    ) : (
        <FontAwesomeIcon icon={faHeart} className="text-gray-400"/>
    );


    

    return (
        <>
            <div className='flex w-full text-[#bdbab9]'>
                <div className='lg:w-80 lg:h-70'>
                    <img className='object-cover' src={`https://image.tmdb.org/t/p/original/${poster_path}`} alt="" />
                </div>
                <div className='bg-black/20 w-full rounded-sm h-80 text-left pl-5 font-bold text-lg '>
                    <p>Titule: {title}</p>
                    <p>Edad: {!adult ? (
                        <span className={spanClassMas18}>+18</span>
                    ) : (
                        <span className={spanClassMenos18}>Para todas las edades</span>
                    )}</p>
                    <p>Genero: {genres.map((genre) => '|' + genre.name + '|')}</p>
                    <p>Estado: {status}</p>
                    <p>Idioma original: {original_language}</p>
                    <p>Fecha de lanzamiento: {release_date}</p>
                    <p>Popularidad: {popularity}</p>
                    <button className='p-3 bg-gray-600 rounded-xl shadow-xl hover:bg-gray-800 transition-all' onClick={handleFav}>
                    {Btnfav}
                    </button>
                </div>
            </div>
            <div className="w-full mt-4 text-xl text-left text-[#bdbab9]">
                <h1 className='font-bold text-3xl'>Sinopsis:</h1>
                {overview}
            </div>
        </>

    );
}

export default Movie;
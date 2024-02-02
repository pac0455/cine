import { useParams, useLoaderData } from 'react-router-dom';
import { getDataById } from '../services/getMovies';
import { useEffect } from 'react';
export const loaderMovieId = ({ params }) => {
    const { id } = params
    return getDataById(id)
}

const Movie = () => {
    const spanClassMas18 = ' p-1 rounded-xl bg-red-500'
    const spanClassMenos18 = ' p-1 rounded-xl bg-green-700'

    const { data } = useLoaderData()
    const {
        adult,
        backdrop_path,
        belongs_to_collection,
        budget,
        genres,
        homepage,
        id,
        imdb_id,
        original_language,
        original_title,
        overview,
        popularity,
        poster_path,
        production_companies,
        production_countries,
        release_date,
        revenue,
        runtime,
        spoken_languages,
        status,
        tagline,
        title,
        video,
        vote_average,
        vote_count
    } = data
    console.log(data);
    return (
        <>
            <div className='flex w-full'>
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
                </div>
            </div>
            <div className="w-full mt-4 text-xl text-left">
                <h1 className='font-bold text-3xl'>Sinopsis:</h1>
                {overview}
            </div>
        </>

    );
}

export default Movie;
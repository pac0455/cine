import { Link } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import { getDataById } from '../services/getMovies';
const FilmCard = ({ film }) => {
    const [details, setDetails] = useState();
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const detail = (await getDataById(film.id)).data;
            setDetails(detail);
            setGenres(detail.genres);
        };
        fetchData();
    }, []);
    return (
        <div className="group h-[30rem] w-96 [perspective:1000px] shadow-2xl">
            <div className="relativa w-full h-full rounded-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <div className="absolute inset-0 mx-5">
                    <img className=" h-full w-full shadow-2xl rounded-xl " src={`https://image.tmdb.org/t/p/original/${film.poster_path}`} />
                </div>
                <div className="absolute inset-0 h-full w-full rounded-xl bg-black/70 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden] backdrop-blur-[5px]">
                <div className="absolute top-0 left-0 w-full h-full flex items-start bg-gradient-to-r from-black ">
                    <div className="w-full h-full flex flex-col">
                        <p className="text-3xl text-left font-medium mb-5 text-red-500 neon ml-5 mt-5">{film.title}</p>
                        <div className="text-left w-full overflow-hidden text-wrap  p-2 rounded-lg">
                            <p className="text-white font-medium w-full sm:text-sm h-32 overflow-hidden">{film.overview}</p>
                            {genres.map(genre=><span> | {genre.name } |</span>)}
                        </div>
                        <Link to={`/film/${film.id}`} className="text-black text-4xl m-7 bg-white border border-1 border-solid border-black p-3 hover:text-white hover:bg-black/60 hover:border hover:border-1 hover:border-solid hover:border-white transition-all duration-500 justify-self-end">Ver más</Link>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}
export default FilmCard;
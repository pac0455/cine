import { Link } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import { getDataById } from '../services/getMovies';
import './Filmcard.css';
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
        <div className="group h-[30rem] w-96 [perspective:1000px] shadow-2xl ">
            <div id="padre" className="relativa w-full h-full rounded-xl transition-all duration-500 cursor-pointer ">
                <div className="absolute inset-0 mx-5">
                    <img
                        className="h-full w-full shadow-2xl rounded-xl"
                        src={`https://image.tmdb.org/t/p/original/${film.poster_path}`}
                    />
                </div>
                <div id="oculto" className="hidden h-full w-full rounded-xl">
                    <div className="absolute top-0 left-0 w-full h-full flex items-start bg-gradient-to-r from-black">
                            
                            <Link
                                to={`/film/${film.id}`}
                                className="text-white w-full m-auto text-4xl "
                            >
                                Ver más
                            </Link>
                    </div>
                </div>
            </div>
        </div>
    );

}
export default FilmCard;
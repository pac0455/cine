import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { GlobalStateContext } from '../main';
import { getMovies } from "../services/getMovies";
import Film from '../components/FilmCard';
export const LoaderHome = ({ params }) => {
    const data = getMovies()
    return data
}
const Films = () => {
    const { globalState, setGlobalState } = useContext(GlobalStateContext);
    const { data } = useLoaderData();
    const [film, setFilm] = useState()
    useEffect(() => {
        if (globalState == '') {
            setFilm(data.results)
        } else {
            setFilm(globalState.results)
        }
    }, [film, globalState]);
    console.log(film);
    return (
        <section>
            <h1 className='font-rubiksh text-3xl text-gray-200 font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl'>Estrenos</h1>
            <div className=" flex justify-around gap-y-6 gap-x-2 flex-wrap">
                {film ? (
                    <>
                        {film.map(film => <Film key={film.id} film={film} />)}
                    </>
                ) : (
                    <p>cargando...</p>
                )}
            </div>
        </section>
    );
}
export default Films;
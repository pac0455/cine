import React, { useContext, useEffect, useState } from "react";
import {useSelector,useDispatch} from 'react-redux';
import { Link } from "react-router-dom";
import { getFilmsNow } from '../redux/thunks/thunksFilmsNow';
import FilmCard from '../components/FilmCard';
const Films = () => {
    const {filmsNow}  = useSelector(state => state.filmsPlayNow)
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(getFilmsNow())
    },[])
    console.log(filmsNow);
    return (
        <section>
            <h1 className='font-rubiksh text-3xl text-gray-200 font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl'>Estrenos</h1>
            <div className=" flex justify-around gap-y-6 gap-x-2 flex-wrap">
                {filmsNow ? (
                    <>
                        {Object.values(filmsNow).map(film => <FilmCard key={film.id} film={film} />)}
                    </>
                ) : (
                    <p>cargando...</p>
                )}
            </div>
        </section>
    );
}
export default Films;
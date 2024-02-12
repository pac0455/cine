import React, { useContext, useEffect, useState } from "react";
import {useSelector,useDispatch} from 'react-redux';
import { Link } from "react-router-dom";
import moduleName from '../services/getMovies';
import getMovies from '../redux/thunks/thunksFilmsNow';
const Films = () => {
    const {filmsNow}  = useSelector(state => state.filmsPlayNow)
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(getMovies())
    },[])
    console.log(filmsNow);
    return (
        <section>
            <h1 className='font-rubiksh text-3xl text-gray-200 font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl'>Estrenos</h1>
            <div className=" flex justify-around gap-y-6 gap-x-2 flex-wrap">
                {/* {film ? (
                    <>
                        {film.map(film => <Film key={film.id} film={film} />)}
                    </>
                ) : (
                    <p>cargando...</p>
                )} */}
            </div>
        </section>
    );
}
export default Films;
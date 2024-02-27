import React from 'react'
import {useSelector,useDispatch} from 'react-redux';
import Entrada from './../components/Entrada';
function Entradas() {
    const dispatch = useDispatch();
    const {entradas}  = useSelector(state => state.filmsPlayNow)
    console.log(entradas.length)
  return (
    <div className='flex items-center w-full flex-wrap min-h-96'>
        {
            entradas.length!=0 ? (
                entradas.map(entrada=><Entrada entrada={entrada}/>)
            ):
            (
                <p className='w-full text-3xl text-white font-blod'>Todavia no tienes ni una entrada</p>
            )
            
        }
    </div>
  )
}

export default Entradas
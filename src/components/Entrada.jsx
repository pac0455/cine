import React from 'react'
import {useSelector,useDispatch} from 'react-redux';
import {deleteEntrada} from './../redux/slice/sliceFilmsow';
function Entrada({entrada}) {
    const dispacth=useDispatch()
    const handleDelete=()=>{
        dispacth(deleteEntrada(entrada.id))
    }
    console.log(entrada)
  return (

        <div className='bg-[#1F2937] p-3 text-white text-left min-w-1/2 font-medium w-1/2 rounded-lg flex justify-between items-center' >
            <div>
            <p>Titulo:{entrada.titulo}</p>
            <p>Fecha:{entrada.fecha}</p>
            <p>Hora:{entrada.hora}</p>
            <p>Fila:{entrada.fila}</p>
            <p>Asiento:{entrada.asiento}</p>
            </div>
        <button onClick={handleDelete} className='bg-red-500 p-2 text-black rounded-lg h-1/3'>Borrar</button>
        </div>

  )
}

export default Entrada
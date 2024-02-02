import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChair } from '@fortawesome/free-solid-svg-icons';

const Reservar = () => {
    let pillada = true
    const handleReserva = () => {
        console.log(pillada);
        if (pillada) {
            pillada = false
        } else {
            pillada = true
        }
    }
    const array = [];
    for (let i = 0; i < 40; i++) {
        array.push(i);
    }

    return (
        <>
            <div className='h-96  grid grid-cols-12 border border-1 border-solid border-black p-3'>
                {array.map((e, index) => (
                    pillada ? (
                        <div className='w-12 h-12 relative bg-green-600 rounded-lg' key={index}> {/* Cambiado el tamaño del contenedor */}
                            <FontAwesomeIcon className="absolute top-4 left-3" size="2x" icon={faChair} /> {/* Cambiado el tamaño del icono */}
                        </div>
                    ) : (
                        <div className='w-12 h-12 relative bg-red-600 rounded-lg' key={index}> {/* Cambiado el tamaño del contenedor */}
                            <FontAwesomeIcon className="absolute top-4 left-3" size="2x" icon={faChair} /> {/* Cambiado el tamaño del icono */}
                        </div>
                    )
                ))}
            </div>
            <button className="w-64 text-3xl p-3 bg-[#961e11] mt-7">Reservar</button>
        </>
    );
};

export default Reservar;

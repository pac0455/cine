import { useParams, useLoaderData, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import palomitas from '../assets/palomitas.png';
import { addEntrada } from './../redux/slice/sliceFilmsow';
import { useEffect } from 'react';
import { useState } from 'react';

const Reservar = () => {
    const { id } = useParams()
    const dispath = useDispatch()
    const [peli, setpeli] = useState(null)
    const [fecha, setFecha] = useState()
    const [fila, setFila] = useState(1)
    const [email, setEmail] = useState()
    const [asiento, setAsiento] = useState(1)
    const [hora, setHora] = useState("17:00")


    const { filmsNow } = useSelector(state => state.filmsPlayNow)
    useEffect(() => {
        setpeli(Object.values(filmsNow).find(peli => peli.id == id))
    }, [])

    console.log(id)
    const handleAddEntrada = () => {
        dispath(addEntrada({
            id: id,
            fila: fila,
            asiento: asiento,
            fecha: fecha,
            hora: hora,
            email: email,
            titulo: peli.title
        }))
    }

    return (
        <>
            <div className="bg-gray-900  flex flex-col items-center justify-center text-center">
                <img src={palomitas} alt="" srcSet="" />
                <div className=" mx-auto max-w-6xl bg-white py-20 px-12 lg:px-24 shadow-xl mb-24">
                    <form>
                        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
                            <div className="-mx-3 md:flex mb-6">
                                <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                                    <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="company">
                                        Titulo pelicula*
                                    </label>
                                    <input value={peli ? peli.title : 'titulo'} readOnly className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="company" type="text" placeholder="Tutsplus" />
                                </div>
                                <div className="md:w-1/2 px-3">
                                    <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="title">
                                        Fecha*
                                    </label>
                                    <input onChange={e => setFecha(e.target.value)} required className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="title" type="date" placeholder="Software Engineer" />
                                </div>
                            </div>
                            <div className="-mx-3 md:flex mb-6">
                                <div className="md:w-full px-3">
                                    <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="application-link">
                                        email*
                                    </label>
                                    <input onChange={e => setEmail(e.target.value)} required className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="application-link" type="email" placeholder="ejemplo@gmail.com" />
                                </div>
                            </div>
                            <div className="-mx-3 md:flex mb-2">
                                <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                                    <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="location">
                                        Horario*
                                    </label>
                                    <div>
                                        <select onChange={e => setHora(e.target.value)} className="w-full bg-gray-200 border border-gray-200 text-black text-xs py-3 px-4 pr-8 mb-3 rounded" id="location">
                                            <option>17:00</option>
                                            <option>19:00</option>
                                            <option>21:00</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                                    <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="location">
                                        Fila*
                                    </label>
                                    <div>
                                        <select onChange={e => setFila(e.target.value)} className="w-full bg-gray-200 border border-gray-200 text-black text-xs py-3 px-4 pr-8 mb-3 rounded" id="location">
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                            <option value="7">7</option>
                                        </select>

                                    </div>
                                </div>
                                <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                                    <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="location">
                                        Asiento*
                                    </label>
                                    <div>
                                        <select onChange={e => setAsiento(e.target.value)} className="w-full bg-gray-200 border border-gray-200 text-black text-xs py-3 px-4 pr-8 mb-3 rounded" id="location">
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                            <option value="7">7</option>
                                        </select>
                                    </div>
                                </div>


                            </div>

                            <div className="-mx-3 md:flex mt-2">
                                <div className="md:w-full px-3">
                                    <Link to={'/entradas'} onClick={handleAddEntrada} className="md:w-full bg-gray-900 text-white font-bold py-2 px-4 border-b-4 hover:border-b-2 border-gray-500 hover:border-gray-100 rounded-full">
                                        Button
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Reservar;

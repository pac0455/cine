import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faX } from '@fortawesome/free-solid-svg-icons'


export const Ofertas = ({ img }) => {
    console.log(img);
    return (
        <>
            <div className="w-full h-[40rem]   flex items-center justify-around text-white">

                <div className="h-[35rem] w-80 bg-gray-900 rounded-xl z-10 shadow-xl shadow-black/90 flex flex-col justify-between">
                    <div>
                        <h1 className="bg-[#961e11] p-4 text-4xl rounded-t-xl">PAY</h1>
                        <div className="text-4xl mt-5">
                            <p className="m-0">20.99€</p>
                            <span className="text-xl">al mes</span>
                        </div>

                    </div>
                    <div className="flex flex-col gap-3 justify-center items-center">
                        <div className="text-left p-2 bg-gray-600 w-[80%]">
                            <FontAwesomeIcon icon={faCheck} size='xl' />Sin anuncios
                        </div>
                        <div className="text-left p-2 bg-gray-600 w-[80%]"><FontAwesomeIcon icon={faCheck} /> Sala premium</div>
                        <div className="text-left p-2 bg-gray-600 w-[80%]"><FontAwesomeIcon icon={faX} />5 peliculas</div>
                        <div className="text-left p-2 bg-gray-600 w-[80%]"><FontAwesomeIcon icon={faX} />7 peliculas</div>
                        <div className="text-left p-2 bg-gray-600 w-[80%]"><FontAwesomeIcon icon={faCheck} />10 peliculas</div>

                        <button className="bg-yellow-700 w-[80%] mb-4 rounded-sm p-4 justify-self-center">Pagar</button>
                    </div>
                </div>
                <div className="h-[35rem] w-80 bg-gray-900 rounded-xl z-10 shadow-xl shadow-black/90 flex flex-col justify-between">
                    <div>
                        <h1 className="bg-[#961e11] p-4 text-4xl rounded-t-xl">PAY</h1>
                        <div className="text-4xl mt-5">
                            <p className="m-0">30.99€</p>
                            <span className="text-xl">al mes</span>
                        </div>

                    </div>
                    <div className="flex flex-col gap-3 justify-center items-center">
                        <div className="text-left p-2 bg-gray-600 w-[80%]">
                            <FontAwesomeIcon icon={faCheck} size='xl' />Sin anuncios
                        </div>
                        <div className="text-left p-2 bg-gray-600 w-[80%]"><FontAwesomeIcon icon={faCheck} /> Sala premium</div>
                        <div className="text-left p-2 bg-gray-600 w-[80%]"><FontAwesomeIcon icon={faX} />5 peliculas</div>
                        <div className="text-left p-2 bg-gray-600 w-[80%]"><FontAwesomeIcon icon={faX} />7 peliculas</div>
                        <div className="text-left p-2 bg-gray-600 w-[80%]"><FontAwesomeIcon icon={faCheck} />10 peliculas</div>

                        <button className="bg-yellow-700 w-[80%] mb-4 rounded-sm p-4 justify-self-center">Pagar</button>
                    </div>
                </div>
                <div className="h-[35rem] w-80 bg-gray-900 rounded-xl z-10 shadow-xl shadow-black/90 flex flex-col justify-between">
                    <div>
                        <h1 className="bg-[#961e11] p-4 text-4xl rounded-t-xl">PAY</h1>
                        <div className="text-4xl mt-5">
                            <p className="m-0">40.99€</p>
                            <span className="text-xl">al mes</span>
                        </div>

                    </div>
                    <div className="flex flex-col gap-3 justify-center items-center">
                        <div className="text-left p-2 bg-gray-600 w-[80%]">
                            <FontAwesomeIcon icon={faCheck} size='xl' />Sin anuncios
                        </div>
                        <div className="text-left p-2 bg-gray-600 w-[80%]"><FontAwesomeIcon icon={faCheck} /> Sala premium</div>
                        <div className="text-left p-2 bg-gray-600 w-[80%]"><FontAwesomeIcon icon={faX} />5 peliculas</div>
                        <div className="text-left p-2 bg-gray-600 w-[80%]"><FontAwesomeIcon icon={faX} />7 peliculas</div>
                        <div className="text-left p-2 bg-gray-600 w-[80%]"><FontAwesomeIcon icon={faCheck} />10 peliculas</div>

                        <button className="bg-yellow-700 w-[80%] mb-4 rounded-sm p-4 justify-self-center">Pagar</button>
                    </div>
                </div>

            </div>
        </>
    )
};
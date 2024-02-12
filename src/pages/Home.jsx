import { getFilmNowPlaying } from "../services/getMovies";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SliderItem from '../components/SliderItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons'
import { Ofertas } from '../components/ofertas';
import { getFilmsNow } from "../redux/thunks/thunksFilmsNow";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";


const Home = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6000,
        arrows: false
    };
    const {filmsNow}  = useSelector(state => state.filmsPlayNow)
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getFilmsNow())
    },[])
    return (
        <>
        <button onClick={()=>console.log(filmsNow)}>imprimir</button>
            <section className="w-full h-full">
                <Slider className="h-full" {...settings}>
                    {Object.values(filmsNow).map(item=><SliderItem key={item.id} film={item}/>)}
                </Slider>
            </section>
            <FontAwesomeIcon className="animate-bounce m-5" size="4x" icon={faAnglesDown} />
            <div className="p-4 w-[80%] shadow-2xl shadow-black h-96 m-auto mt-6 rounded-xl mb-6 flex">
                <div className="w-1/2 bg-white/80 h-96 rounded-xl p-3 ">
                    <h1 className="text-black font-medium text-5xl ">Ventajas: </h1>
                    <ul className="text-black font-medium text-left mt-5">
                        <li className="text-black font-medium text-left mt-5">Barato</li>
                        <li className="text-black font-medium text-left mt-5">Comodidad en nuestra salas de sitios</li>
                        <li className="text-black font-medium text-left mt-5">Buena ubicación</li>
                        <li className="text-black font-medium text-left mt-5">Rapidez a la hora de pedir entradas</li>
                        <li></li>
                    </ul>
                </div>
                <div className="w-1/2 rounded-xl p-4">
                <h1 className="text-white font-medium text-5xl ">Desventajas: </h1>
                    <ul className="text-white font-medium text-left mt-5">
                        <li className="text-white font-medium text-left mt-5">Sin tiempo para ver todas las peliculas</li>
                        <li className="text-white font-medium text-left mt-5">No poder venir a nuestro cine todos los dias</li>
                    </ul>
                </div>
            </div>
{/*             <Ofertas img={data[18].poster_path}/> */}
        </>
    );
}
export default Home;
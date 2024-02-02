import { useLoaderData } from "react-router-dom";
import { getFilmNowPlaying } from "../services/getMovies";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SliderItem from '../components/SliderItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons'
import { Ofertas } from '../components/ofertas';
export const LoaderHome = ({ params }) => {
    const data = getFilmNowPlaying()
    return data
}

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

    const data = useLoaderData().data.results;
    return (
        <>
            <section className="w-full h-full">
                <Slider className="h-full" {...settings}>
                {data.map(item=><SliderItem key={item.id} film={item}/>)}
                </Slider>
            </section>
            <FontAwesomeIcon className="animate-bounce m-5" size="4x" icon={faAnglesDown} />
            <Ofertas img={data[18].poster_path}/>
        </>
    );
}
export default Home;
import { useEffect, useState } from "react";
import { getDataById } from '../services/getMovies';

const SliderItem = ({ key, film }) => {
    const [details, setDetails] = useState();
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const detail = (await getDataById(film.id)).data;
            setDetails(detail);
            setGenres(detail.genres);
        };
        fetchData();
    }, []);
    return (
        <div className="w-full h-[80vh]">
            <div className="w-full h-full bg-black relative">
                <div
                    className="absolute top-0 left-0 w-full h-[80vh] "
                    style={{
                        background: `url(https://image.tmdb.org/t/p/original/${film.backdrop_path})`,
                        backgroundSize: "cover",
                    }}
                ></div>
                <div className="absolute top-0 left-0 w-full h-full flex items-start bg-gradient-to-r from-black ">
                    <div className="w-full">
                        <p className="text-6xl text-left font-medium mb-5 text-red-500 neon ml-5 mt-5">{film.title}</p>
                        <div className="text-left w-full overflow-hidden text-wrap  p-2 rounded-lg  ">
                            <p className="text-white font-medium w-full sm:text-sm">{film.overview}</p>
                        {genres.map(genre=><button className="text-white text-xl m-7 bg-black/60 border border-1 border-solid border-white p-1
                        pb-2 pt-2 hover:text-white   transition-all duration-500 min-w-36 rounded-3xl">{genre.name}</button>)}
                        </div>
                    </div>
                </div>

            </div>
        </div>

    );
}
export default SliderItem;
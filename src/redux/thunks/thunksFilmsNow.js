import { setFilms,startLoadingFilms } from '../slice/sliceFilmsow';
import { getFilmNowPlaying,getMoviesByLetter} from "../../services/getMovies";


export const getFilmsNow = () => {
    return async (dispatch, getState) => {
        dispatch(startLoadingFilms())
        try {
            const res = await getFilmNowPlaying();
            const data=res.data.results
            dispatch(setFilms({...data}))
        } catch (error) {
            console.log(error);
        }
    }
}
export const getMoviesByLetterThunks = (string) => {
    return async (dispatch, getState) => {
        dispatch(startLoadingFilms())
        try {
            const res = await getMoviesByLetter(string);
            const data=res.data.results
            dispatch(setFilms({...data}))
        } catch (error) {
            console.log(error);
        }
    }
}
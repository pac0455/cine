import { setFilms,startLoadingFilms } from '../slice/sliceFilmsow';
import { getFilmNowPlaying } from "../../services/getMovies";


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
export const getMovies = () => {
    return async (dispatch, getState) => {
        dispatch(startLoadingFilms())
        try {
            const res = await getMovies();
            const data=res.data.results
            dispatch(setFilms({...data}))
        } catch (error) {
            console.log(error);
        }
    }
}
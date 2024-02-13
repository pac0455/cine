import {createSlice} from '@reduxjs/toolkit';
export const sliceFilmsNow=createSlice({
    name: 'filmsNowPlaying',
    initialState:{
        filmsNow:[],
        fav:[]
    },
    reducers:{
        startLoadingFilms: (state) => {
            state.isLoading = true;
        },
        setFilms:(state,action)=>{
            state.filmsNow=action.payload
        }
    }
})

export const {setFilms,startLoadingFilms,setFav}=sliceFilmsNow.actions
export default sliceFilmsNow.reducer
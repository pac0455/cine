import {createSlice} from '@reduxjs/toolkit';
export const sliceFilmsNow=createSlice({
    name: 'filmsNowPlaying',
    initialState:{
        filmsNow:[]
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

export const {setFilms,startLoadingFilms}=sliceFilmsNow.actions
export default sliceFilmsNow.reducer
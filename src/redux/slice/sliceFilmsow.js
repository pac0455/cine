import {createSlice} from '@reduxjs/toolkit';
export const sliceFilmsNow=createSlice({
    name: 'filmsNowPlaying',
    initialState:{
        filmsNow:[],
        entradas:[]
    },
    reducers:{
        startLoadingFilms: (state) => {
            state.isLoading = true;
        },
        setFilms:(state,action)=>{
            state.filmsNow=action.payload
        },
        addEntrada:(state,action)=>{
            state.entradas.push(action.payload)
        },
        deleteEntrada:(state,action)=>{
            state.entradas=state.entradas.filter(entrada=>entrada.id!=action.payload)
        }

    }
})

export const {setFilms,startLoadingFilms,addEntrada,deleteEntrada}=sliceFilmsNow.actions
export default sliceFilmsNow.reducer
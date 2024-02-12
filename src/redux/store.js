import {configureStore} from '@reduxjs/toolkit';
import {sliceFilmsNow} from './slice/sliceFilmsow.js';
export const store = configureStore({
    reducer:{
        filmsPlayNow:sliceFilmsNow.reducer
    }
})
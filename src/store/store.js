import {configureStore} from '@reduxjs/toolkit'
import homeSliceReducer from './homeSlice'

export const store = configureStore({
    reducer: {
        home: homeSliceReducer,
    }
})
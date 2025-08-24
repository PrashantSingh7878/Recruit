import { configureStore } from '@reduxjs/toolkit';
import candidateReducer from './CandidateSlice';

const store  = configureStore({
    reducer: {
        candidate : candidateReducer,
    }
})

export default store;
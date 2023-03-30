import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './CounterSlice';
import authSlice from './AuthSlice';




const store = configureStore({
    reducer:{counter:counterSlice,auth:authSlice}

});

export default store;
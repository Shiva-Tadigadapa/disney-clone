import { configureStore,getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from "../features/users/userSlice";
import movieSlice from "../features/movies/movieSlice";
import  ApiSlice from "../features/APISlice/ApiSlice";

export default configureStore({
    reducer:{
        user : userReducer,
        movie: movieSlice,
        Api: ApiSlice,
    },                   
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }),
});


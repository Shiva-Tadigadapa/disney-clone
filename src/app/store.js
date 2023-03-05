import { configureStore,getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from "../features/users/userSlice";
import movieSlice from "../features/movies/movieSlice";

export default configureStore({
    reducer:{
        user : userReducer,
        movie: movieSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }),
});


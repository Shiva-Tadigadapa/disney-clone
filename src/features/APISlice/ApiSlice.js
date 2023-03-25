import { createSlice } from "@reduxjs/toolkit";
// import { Action } from "@remix-run/router";
// import React from 'react'

// export const fetchApi = createAsyncThunk("fetchApi", async () => {
//     const response  = await fetch("https://api.themoviedb.org/3/trending/all/day?api_key=c5ad2827c51f36bcbad41dc821d6d7c1");
//     return response.json();

// });

const initialState = {
    AllResults: "",
    results: "",
    images: "",
    imgLinks: "",
    topRated: "",
    customTopRated: "",
    topDay: "",
    CostopDay: "",
    WatchList: "",
}

const ApiSlice = createSlice({

    name: "Api",
    initialState,
    // initialState: {
    //     // isLoading: false, 
    //     data: null,
    //     // isError: false,
    // },
    // extraReducers:(builder) => {
    //     builder.addCase(fetchApi.pending, (state,action)=> {
    //         state.isLoading = true;
    //     }); 
    //     builder.addCase(fetchApi.fulFilled, (state,action)=>{
    //         state.data = action.payload;
    //         state.isLoading = false;
    //     });
    //     builder.addCase(fetchApi.rejected, (state,action)=>{
    //         console.log(action.payload);
    //         state.isError = true;
    //     });
    
    // },
    reducers:{ 
        setResults:(state,action)=>{
            state.AllResults = action.payload.AllResults;
            state.results = action.payload.results;
            state.images=action.payload.images;
            state.imgLinks= action.payload.imgLinks;
            state.topRated=action.payload.topRated;
            state.customTopRated=action.payload.customTopRated;
            state.topDay=action.payload.topDay;
            state.CostopDay=action.payload.CostopDay;
            state.WatchList=action.payload.WatchList;
        }, 

    },
});

export const {setResults} = ApiSlice.actions;

export const SelectAllResults = (state)=>state.Api.AllResults;
export const SelectResults = (state)=>state.Api.results;
export const SelectImages = (state)=>state.Api.images;
export const SelectImgLinks = (state)=>state.Api.imgLinks;
export const SelectTopRated = (state)=>state.Api.topRated;
export const SelectCustomTopRated = (state)=>state.Api.customTopRated;
export const SelectTopDay = (state)=>state.Api.topDay;
export const SelectCostopDay = (state)=>state.Api.CostopDay;
export const SelectWatchList = (state)=>state.Api.WatchList;

export default ApiSlice.reducer;


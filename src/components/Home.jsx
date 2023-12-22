import styled from "styled-components";
import ImgSlider from "./ImgSlider";

import Viewers from "./Views";
import axios from "axios";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import db from "../firebase";
import { setMovies } from "../features/movies/movieSlice";
import { SelectUserName } from "../features/users/userSlice";
import { setResults } from "../features/APISlice/ApiSlice";
import { SelectResults } from "../features/APISlice/ApiSlice";
import { SelectImages } from "../features/APISlice/ApiSlice";
import { SelectImgLinks } from "../features/APISlice/ApiSlice";
import NewTrending from "./NewTrending";
import TopRated from "./TopRated";
import { SelectTopRated } from "../features/APISlice/ApiSlice";
import { SelectTopDay } from "../features/APISlice/ApiSlice";
import { SelectAllResults } from "../features/APISlice/ApiSlice";
// import { fetchApi } from "../features/APISlice/ApiSlice";

const Home = (props) => {
  const dispatch = useDispatch();
  const userName = useSelector(SelectUserName);
  const ApiImg = useSelector(SelectImages);
  // let recommends = [];
  // let newDisneys = [];
  // let originals = [];
  // let trendings = [];

  let geners = [
    { id: 10759, name: "Action & Adventure" },
    { id: 28, name: "Action" },
    { id: 12, name: "Adventure" },
    { id: 16, name: "Animation" },
    { id: 35, name: "Comedy" },
    { id: 80, name: "Crime" },
    { id: 99, name: "Documentary" },
    { id: 18, name: "Drama" },
    { id: 10751, name: "Family" },
    { id: 14, name: "Fantasy" },
    { id: 36, name: "History" },
    { id: 27, name: "Horror" },
    { id: 10402, name: "Music" },
    { id: 9648, name: "Mystery" },
    { id: 10749, name: "Romance" },
    { id: 878, name: "Science Fiction" },
    { id: 10770, name: "TV Movie" },
    { id: 53, name: "Thriller" },
    { id: 10752, name: "War" },
    { id: 37, name: "Western" },
    { id: 10762, name: "Kids" },
    { id: 10763, name: "News" },
    { id: 10764, name: "Reality" },
    { id: 10765, name: "Sci-Fi & Fantasy" },
    { id: 10766, name: "Soap" },
    { id: 10767, name: "Talk" },
    { id: 10768, name: "War & Politics" },
  ];
  const dateSlicer = (date) => {
    date = date.toString();
    return date.slice(0, 4);
  };
  const Slicer = (vote) => {
    vote = vote.toString();
    // console.log(vote.slice(0, 1));
    return vote.slice(0, 3);
  };

  const findGern = (...id) => {
    const Gname = [];
    for (let i = 0; i < geners.length; i++) {
      for (let j = 0; j < id.length; j++) {
        if (geners[i]["id"] === id[j]) {
          if (i == geners.length - 1) {
            Gname.push(geners[i]["name"]);
          } else {
            Gname.push(geners[i]["name"] + " ,");
          }
        }
      }
    }
    return Gname;
  };

  const Api = useSelector(SelectResults);

  // useEffect(() => {
  //   const ApiData = async () => {
  //     const response = await fetch(
  //       "https://api.themoviedb.org/3/trending/all/week?api_key=c5ad2827c51f36bcbad41dc821d6d7c1"
  //     );
  //     const data = await response.json();
  //     const response3 = await fetch(
  //       "https://api.themoviedb.org/3/trending/all/day?api_key=c5ad2827c51f36bcbad41dc821d6d7c1"
  //     );

  //     const data3 = await response3.json();
  //     console.log(data3);
  //     const response2 = await fetch(
  //       "https://api.themoviedb.org/3/movie/top_rated?api_key=c5ad2827c51f36bcbad41dc821d6d7c1&page=1"
  //     );
  //     const data2 = await response2.json();

  //     for (let i = 0; i < data.results.length; i++) {
  //       imgs.push({
  //         image:
  //           "https://image.tmdb.org/t/p/original" + data.results[i].backdrop_path,
  //         id: data.results[i].id,
  //         name: data.results[i].name || data.results[i].title,
  //         or_lan: data.results[i].original_language,
  //         overview: data.results[i].overview,
  //         poster_path:
  //           "https://image.tmdb.org/t/p/original" + data.results[i].poster_path,
  //         FAD: dateSlicer(
  //           data.results[i].first_air_date || data.results[i].release_date
  //         ),
  //         vote: data.results[i].vote_average,
  //         media_type: data.results[i].media_type,
  //         rating: Slicer(data.results[i].vote_average),
  //         or_country: data.results[i].origin_country,
  //         geners: findGern(...data.results[i].genre_ids),
  //       });
  //     }

  //     for (let i = 0; i < data3.results.length; i++) {
  //       topDay.push({
  //         image:
  //           "https://image.tmdb.org/t/p/original" + data3.results[i].backdrop_path,
  //         id: data3.results[i].id,
  //         name: data3.results[i].name || data3.results[i].title,
  //         or_lan: data3.results[i].original_language,
  //         overview: data3.results[i].overview,
  //         poster_path:
  //           "https://image.tmdb.org/t/p/original" + data3.results[i].poster_path,
  //         FAD: dateSlicer(
  //           data3.results[i].first_air_date || data3.results[i].release_date
  //         ),
  //         vote: data3.results[i].vote_average,
  //         media_type: data3.results[i].media_type,
  //         rating: Slicer(data3.results[i].vote_average),
  //         or_country: data3.results[i].origin_country,
  //         geners: findGern(...data3.results[i].genre_ids),
  //       });
  //     }

  //     for (let i = 0; i < data2.results.length; i++) {
  //       topRated.push({
  //         image:
  //           "https://image.tmdb.org/t/p/original" + data2.results[i].backdrop_path,
  //         id: data2.results[i].id,
  //         name:
  //           data2.results[i].name ||
  //           data2.results[i].title ||
  //           data2.results[i].original_title,
  //         or_lan: data2.results[i].original_language,
  //         overview: data2.results[i].overview,
  //         poster_path:
  //           "https://image.tmdb.org/t/p/original" + data2.results[i].poster_path,
  //         FAD: dateSlicer(
  //           data2.results[i].first_air_date || data2.results[i].release_date
  //         ),
  //         vote: data2.results[i].vote_average,
  //         media_type: "movie",
  //         rating: Slicer(data2.results[i].vote_average),
  //         or_country: data2.results[i].origin_country,
  //         geners: findGern(...data2.results[i].genre_ids),
  //       });
  //     }
  //     dispatch(
  //       setResults({
  //         results: data.results,
  //         images: imgs,
  //         topRated: data2.results,
  //         customTopRated: topRated,
  //         topDay: data3.results,
  //         CostopDay: topDay,

  //       })
  //     );

  //     //   dispatch(setResults({
  //     //   }))
  //     // }
  //   };
  //   ApiData();
  // }, [userName]);

  const [trending, setTrending] = useState([]);
  const [trendingIdsmovie, setTrendingIds] = useState([]);
  const [trendingIdstv, setTrendingIdstv] = useState([]);

  const [topRated, setTopRated] = useState([]);
  const [topRatedmovieIds, setTopRatedmovieIds] = useState([]);
  // const [topRatedTvIds, setTopRatedTvIds] = useState([]);

  const [topDay, setTopDay] = useState([]);
  const [topDaymovieIds, setTopDaymovieIds] = useState([]);
  const [topDayTvIds, setTopDayTvIds] = useState([]);

  
  
  const [trendingImgsmovie, setTrendingImgsmovie] = useState([]);
  const [topRatedImagesMovie, setTopRatedImagesMovie] = useState([]);
  const [trendingImgstv, setTrendingImgstv] = useState([]);
  const [topDayImagesMovie, setTopDayImagesMovie] = useState([]);
  const [topDayImagesTV, setTopDayImagesTV] = useState([]);
  useEffect(() => {
    const fetchData = async (url, setState, type) => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setState(data.results);
        return data.results;
      } catch (error) {
        console.error(`Error fetching ${type} data:`, error);
      }
    };

    const fetchIdsForMediaType = async (data, setMovieIds, setTvIds) => {
      try {
        const movies = data.filter((item) => item.media_type === "movie");
        const tvShows = data.filter((item) => item.media_type === "tv");

        setMovieIds(movies.map((movie) => movie.id)); // assuming the id is stored in the 'id' property
        setTvIds(tvShows.map((tvShow) => tvShow.id));
      } catch (error) {
        console.log(error);
      }
    };

    const fetchDataForAllEndpoints = async () => {
      // Fetch data for all endpoints concurrently using Promise.all
      await Promise.all([
        fetchData(
          "https://api.themoviedb.org/3/trending/all/week?api_key=c5ad2827c51f36bcbad41dc821d6d7c1",
          setTrending,
          "topweek"
        ).then((data) => {
          fetchIdsForMediaType(data, setTrendingIds, setTrendingIdstv);
        }),
        fetchData(
          "https://api.themoviedb.org/3/movie/top_rated?api_key=c5ad2827c51f36bcbad41dc821d6d7c1&page=1",
          setTopRated,
          "topRated"
        ),
        fetchData(
          "https://api.themoviedb.org/3/trending/all/day?api_key=c5ad2827c51f36bcbad41dc821d6d7c1",
          setTopDay,
          "topDay"
        ).then((data) => {
          fetchIdsForMediaType(data, setTopDaymovieIds, setTopDayTvIds);
        }),
      ]);
    };

    // const fetchIdsForTopRated = async (data, setTopRatedIds) => {
    //   const topratedIds =await data.map((item) => item.id);
    //   setTopRatedIds(topratedIds);
    //   console.log(topratedIds);
    // };

    fetchDataForAllEndpoints();
  }, []);

  useEffect(() => {
    // console.log("Starting useEffect...");

    const fetchImagesForCategory = async (category, categoryIds, setImages) => {

      try {
        // console.log(`Fetching images for ${category}:`, categoryIds);

        const results = await Promise.all(
          categoryIds.map(async (id) => {
            try {
              // console.log(`Fetching image for ${category} ID ${id}...`);

              const response = await axios.get(
                `https://api.themoviedb.org/3/${category}/${id}/images?include_image_language=en&language=en`,
                {
                  headers: {
                    accept: "application/json",
                    Authorization:
                      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNWFkMjgyN2M1MWYzNmJjYmFkNDFkYzgyMWQ2ZDdjMSIsInN1YiI6IjY0MDU5OWEzMTM2NTQ1MDBiYTRmMWFlNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HvHrHUvvIGrvBXNsCYChgXpEPDcJzE7vYLzL4ipxnhU",
                  },
                }
              );

              // console.log(`Response for ${category} ID ${id}:`, response.data);

              const categorizedImages = {
                backdrops: response.data.backdrops[0].file_path,
                logos: response.data.logos[0].file_path,
                posters: response.data.posters[0].file_path,
              };

              return { id, images: categorizedImages };
            } catch (error) {
              console.error(
                `Error fetching images for ${category} ID ${id}:`,
                error
              );
              return { id, images: [] };
            }
          })
        );

        // console.log(`Setting images for ${category}:`, results);
        setImages(results);
      } catch (error) {
        // console.error(`Error fetching ${category} images:`, error);
      }
    };

    const fetchandSetImages = async () => {
      const categories = [
        { type: 'movie', ids: trendingIdsmovie, setImages: setTrendingImgsmovie },
        { type: 'tv', ids: trendingIdstv, setImages: setTrendingImgstv },
        { type: 'movie', ids: topDaymovieIds, setImages: setTopDayImagesMovie },
        { type: 'tv', ids: topDayTvIds, setImages: setTopDayImagesTV },
        { type: 'movie', ids: topRatedmovieIds, setImages: setTopRatedImagesMovie },
        // add more categories as needed
      ];
  
      for (const category of categories) {
        // console.log(`Calling fetchImagesForCategory for ${category.type}...`);
        if (category.ids.length > 0) {
          await fetchImagesForCategory(category.type, category.ids, category.setImages);
        }
      }
    };

    fetchandSetImages();

    // console.log("Ending useEffect...");
  }, [
    trendingIdsmovie,
    trendingIdstv,
    topDaymovieIds,
    topDayTvIds,
    topRatedmovieIds,
  ]);

  // console.log(trendingImgsmovie);
  return (
    <Container className=" relative  top-[72px] block bg-[#141414]  overflow-x-hidden  ">
      <ImgSlider />
      <Viewers />
      <NewTrending
        topDay={topDay}
        trending={trending}
        trendingImgsmovie={trendingImgsmovie}
        trendingImgstv={trendingImgstv}
        topDayImagesMovie={topDayImagesMovie}
        topDayImagesTV={topDayImagesTV}
      />
      <TopRated
        topRated={topRated}
        // topRatedmovieIds={topRatedmovieIds}
      />
    </Container>
  );
};

export default Home;

const Container = styled.main`
  min-height: calc(100vh - 250px);
  padding: 0px calc(3.5vw + 5px);

  &:before {
    background: url("/images/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    bottom: 0;
    z-index: -1;
  }
`;

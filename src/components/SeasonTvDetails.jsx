import React from "react";
import { useState } from "react";
import { CiStar } from "react-icons/ci";
import { FaPlay } from "react-icons/fa";
import { GiCrossedBones } from "react-icons/gi";
import { MdAddCircleOutline } from "react-icons/md";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useEffect } from "react";


const SeasonTvDetails = () => {
  const ReadMore = ({ Children }) => {
    const text = tvDetails1.overview;
    console.log(text)
    // const v1=text && text.slice(0, 150)
    // console.log(v1)
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
    };
    return (
      <p className="text">
        {isReadMore ? text && text.slice(0, 150) :text && text}
        <span
          onClick={toggleReadMore}
          className="read-or-hide text-gray-100 cursor-pointer"
        >
          {isReadMore ? "...read more" : " show less"}
        </span>
      </p>
    );
  };

  const { id, type ,Sno } = useParams();
  const [tvDetails, setTvDetails] = useState([]);
  const [tvDetails1, setTvDetails1] = useState([]);
  useEffect(() => {
    const fetchTvDetails = async () => {  
      
        
        const response1 = await fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=c5ad2827c51f36bcbad41dc821d6d7c1&language=en-US`);
        const data1 = await response1.json();
        console.log(data1); 
        setTvDetails1(data1);

      const response = await fetch(`https://api.themoviedb.org/3/tv/${id}/season/${Sno}?api_key=c5ad2827c51f36bcbad41dc821d6d7c1`);
      const data = await response.json();
      console.log(data);
      setTvDetails(data);
    };
    fetchTvDetails();
  }, [id]);

  return (
    <>
      <div className=" h-[100%] w-[100%] mt-[70px] ">
        <div className="bg-[#090b13] h-[460px]   ">
          <img
            src={"https://image.tmdb.org/t/p/original"+tvDetails1.backdrop_path}
            className="  h-[100%] fixed object-cover   w-[100%]"
          />
          <div className=" h-[280px] w-[190px] rounded-md    absolute z-[1] top-[63%] left-[3%] shadow-sm">
            <img
              src={"https://image.tmdb.org/t/p/original"+tvDetails1.poster_path}
              className="h-[100%] w-[100%] rounded-md"
            />
          </div>
          <h1>dhygf</h1>
          <div className="bg-gray-800 mt-[22%] w-[100%] h-[100%] absolute  flex justify-center rounded-r-[18px] rounded-t-[18px]">
            <div className="bg-gray-900 w-[70%] h-[280px] ml-[10%] mt-[2%] rounded-[10px]">
              <h1 className="mt-[3%] ml-[3%] text-[1.9rem]">{tvDetails1.name}</h1>
              <h1 className=" ml-[3%] text-[1rem]">Season - {tvDetails.season_number} { tvDetails.air_date && tvDetails.air_date.slice(0,4)}</h1>                                  
            
              <h1 className=" ml-[3%] text-[0.8rem] text-gray-700">
                {
                  tvDetails1.genres &&
                  tvDetails1.genres.map((genre) => genre.name).join(" | ")
                }
                
              </h1>
              <h1 className=" ml-[3%] text-[1rem]"></h1>

              <h1 className=" ml-[3%] w-[90%] text-[14px] text-gray-400   ">
                <ReadMore>
             {tvDetails1.overview}
                </ReadMore>
              </h1>
              <div className="bg-black py-[5px] px-[4px] rounded-[8px] left-[30px] z-[1] top-[20px]  absolute w-[55px]">
                <h1 className=" ml-[8%] text-[1rem] flex items-center   ">
                  { tvDetails1.vote_average &&
                  tvDetails1.vote_average.toFixed(1)}
                  <CiStar className="m-[0px] ml-[4px] " />{" "}
                </h1>
              </div>
              <button className="  hover:text-gray-300 hover:bg-gray-700 hover:transition-all hover:scale-[1.07] hover:border-gray-600 flex justify-center items-center  text-center absolute py-[6px] px-[10px] ml-[55px] text-gray-600 mt-[20px]  text-[1.05rem] border-[2.8px] bg-[#0f172a] rounded-[6px] border-gray-800 ">
                <FaPlay className="mr-[4px]" />
                watch
              </button>
              <button className="hover:text-gray-300 hover:bg-gray-700 hover:transition-all hover:scale-[1.07] hover:border-gray-600 flex justify-center items-center  text-center absolute py-[6px] px-[10px] ml-[185px] text-gray-600 mt-[20px]  text-[1.05rem] border-[2.8px]  bg-[#0f172a] rounded-[6px] border-gray-800 ">
                <GiCrossedBones className="mr-[5px]" />
                remove
              </button>

              <button className="hover:text-gray-300 hover:bg-gray-700 hover:transition-all hover:scale-[1.07] hover:border-gray-600 flex justify-center items-center  text-center absolute py-[6px] px-[10px] ml-[24%] text-gray-600 mt-[20px]  text-[1.05rem] border-[2.8px]  bg-[#0f172a] rounded-[6px] border-gray-800 ">
                <MdAddCircleOutline
                  className="  hover:transform hover:scale-110 hover:animate-pulse"
                  style={{
                    fontSize: "30px",
                    // marginTop: "33px",
                    // marginLeft: "16px",
                    /* for responsive rm:the margin-top and decrease the fontsize and make margin:0 position absolute*/
                  }}
                />{" "}
                watchlist
              </button>
            </div>

            <ScrollChnage className=" absolute top-[340px] h-[300px]  w-[98%] left-[20px]  rounded-2xl pl-[25px] flex overflow-auto whitespace-nowrap  backdrop-blur-sm bg-gray-900/20">
                  {
                    tvDetails.episodes &&
                    tvDetails.episodes.map((episode) => (
                      <div className="  flex  items-center justify-center w-[350px]  ml-[1px]">
                {/* <h1 className="text-[1.2rem] ml-[3%] mt-[3%]">Season 1</h1> */}
                <div className="h-[200px] w-[300px]  flex flex-col mt-[-50px] items-start   justify-center ">
                  <div className="backdrop-blur-sm bg-white/20  py-[5px] px-[4px] mt-[2px] rounded-[8px] ml-[240px] flex items-center justify-center   text-center z-[1] top-[20px]  absolute w-[55px]">
                    <h1 className=" ml-[8%] text-[1rem] flex items-center   text-center ">
                      ep {episode.episode_number}
                    </h1>
                  </div>
                  <div className="backdrop-blur-sm bg-white/20  py-[5px] px-[4px] mt-[2px] rounded-[8px] ml-[240px] flex items-center justify-center   text-center  top-[20%] z-10  absolute w-[55px]">
                  <p className="">{episode.vote_average.toFixed(1)}  </p>
                  </div>
                  <img
                    className=" w-[280px] h-[180px] rounded-[20px] "
                    src={"https://image.tmdb.org/t/p/original"+episode.still_path}
                    />
                    <button className="  hover:text-gray-300 hover:bg-gray-700/70 
                    hover:transition-all hover:scale-[1.07] hover:border-gray-300 flex justify-center 
                    items-center  text-center absolute py-[6px] px-[10px] 
                    ml-[15px] text-white/70 top-[155px] text-[1.05rem] border-[2.8px] bg-gray-800/80 backdrop-blur-[10px] rounded-[6px]  border-none">
                <FaPlay className="mr-[4px]" />
                Play
              </button>
                  <div className="flex    items-center   absolute top-[75%]">
                    <h1 className=" w-[150px] ml-[3px] text-ellipsis overflow-hidden  whitespace-nowrap text-[16px]">{episode.name}</h1>
                    <p className=" ml-[42px] text-[13px]">{episode.air_date} </p>
                  </div>
                </div>
              </div>
                    ))
                  }

               </ScrollChnage>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default SeasonTvDetails;

const ScrollChnage = styled.div`
  &::-webkit-scrollbar {
    // height: 4px;              /* height of horizontal scrollbar ← You're missing this */
    // width: 4px;               /* width of vertical scrollbar */
    // border: 1px solid #d5d5d5;
    height: 8px;
    width: 10px;
    border-radius: 10px;
    border: 10px solid #1d212f;
  }

  &::-webkit-scrollbar-thumb:horizontal {
    background: #3a3c44;
    border-radius: 6px;
  }
`;
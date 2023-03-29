import React from "react";
import styled from "styled-components";
import { FaPlay } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { SelectUserName } from "../features/users/userSlice";
import { useSelector } from "react-redux";
const Search = () => {
  const { name,type } = useParams();

  const [search, setSaveSearch] = useState(null);
  let SortedData = [];
  const userName = useSelector(SelectUserName);

  console.log("dfw" + name);
  useEffect(() => {
    const getResults = async () => {
      let url = `https://api.themoviedb.org/3/search/${type}?api_key=c5ad2827c51f36bcbad41dc821d6d7c1&query=${name}`;
      const response = await fetch(url);
      const data = await response.json();
      for (let i = 0; i < data.results.length; i++) {
        if (data.results[i].backdrop_path) {
        //   SortedData.push(data.results[i]);
        SortedData = [...SortedData , data.results[i]];
      }
      }
      // data.results = SortedData;
      console.log(data);
      // setSaveSearch();
      setSaveSearch(SortedData);
      console.log(search);
    };
    getResults();
  }, [name, userName, type]);

  //  getResults();
  return (
    <>
    

      <Container className="flex flex-wrap justify-around">



{
  search &&
  search.map((item) => (

    
    <Link to={`/detail/${item.id}/movie`}>


    <div className=" ">
              <div className=" cursor-pointer   mt-[85px] w-64 flex items-center justify-center ml-[20px] overflow-hidden shadow-xl hover:scale-105 transition-all hover:opacity-100">

              <BackgroundImage className="flex items-center justify-center">
                <p className="absolute  bg-[#0f172a] z-[3] rounded p-[3px]  text-[10px] tracking-[1.5px] ml-[80%] -mt-[40%] text-gray-400">
                  Movie
                </p>
                <div className="mt-[12px] absolute z-[2] flex items-center justify-center flex-col ">
                  <h1 className="text-lg font-bold tracking-[2.5px] mt-[25px] text-ellipsis whitespace-nowrap w-[200px] overflow-hidden text-center">
                    {item.title}
                  </h1>
                  <p className="mt-[3px] opacity-100 text-[12px] ">Action</p>
                  <div className=" hover:bg-[#1f293f] cursor-pointer tracking-[1px] text-gray-400 flex   mt-[6px] items-center justify-center bg-[#0f172a] pt-[5px] pl-[11px] pb-[5px] pr-[11px] rounded z-[4]">
                    <FaPlay className="mr-[5px]" style={{ fontSize: "10px" }} />
                    <p className="text-[10px]">Watch</p>
                  </div>
                </div>

                <img
                  className="w-full h-full rounded-[8px] "
                  src={"https://image.tmdb.org/t/p/original"+item.backdrop_path}
                  alt="movie"
                  />
              </BackgroundImage>
            </div>
          </div>

          </Link>
  ))

}
            
            
      </Container>
                  
    </>
  );
};

export default Search;

// const SearchContainer = styled.div`
// position: absolute;
// top: 110px;
// `;

const BackgroundImage = styled.div`
  // display: flex;
  // justify-content: center;
  // align-items: center;
  position: relative;
  &:hover {
    &::before {
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: rgba(0, 0, 0, 0.2);
      box-shadow: 0px -81px 38px #060c14ad inset;
      width: 100%;
      height: 100%;
      z-index: 1;
      opacity: 1;
      transition: opacity 500ms ease-in-out 0s;
    }
    &:hover {
      P {
        opacity: 1;
        transition: opacity 500ms ease-in-out 0s;
      }
    }
  }
`;
const Container = styled.div`
  // position: relative;
  min-height: calc(100vh - 250px);
  // padding: 0px calc(3.5vw + 5px);
  overflow-x: hidden;
  // display: block;
  // top: 72px;

  &:before {
    // background: url("/images/images/home-background.png") center center / cover
    //   no-repeat fixed;
    // background-color: gray;
    background: rgb(0, 0, 0);
    background: linear-gradient(
      221deg,
      rgba(0, 0, 0, 0.9836309523809523) 0%,
      rgba(37, 37, 37, 1) 21%,
      rgba(0, 0, 0, 1) 100%
    );

    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    bottom: 0;
    // z-index: -1;
  }
`;

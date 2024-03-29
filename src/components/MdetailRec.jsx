import React from "react";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {Link} from "react-router-dom";

const MdetailRec = () => {
  const controller = new AbortController();
  const {signal} = controller;

  const { id } = useParams();
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  };
  const [rec, setRec] = useState([]);
  const [rec2, setRec2] = useState([]);
  //Slide click
  // https://api.themoviedb.org/3/movie/{movie_id}/?api_key=<<api_key>>&language=en-US&page=1
  const GetRec = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=c5ad2827c51f36bcbad41dc821d6d7c1&language=en-US&page=1 `
    );
    const response2 = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/similar?api_key=c5ad2827c51f36bcbad41dc821d6d7c1&language=en-US&page=1 `
      );
    const data2 = await response2.json();
    console.log(data2);
    setRec2(data2.results);

    const data = await response.json();
    console.log(data);
    setRec(data.results);
   
  };
  useEffect(() => {
    GetRec();
   
  }, [id]);

  return (
    <>
      <ScrollChnage className="max-[480px]:top-[470px] max-[480px]:w-[100%]  max-[480px]:pl-0 max-[480px]:left-0 absolute top-[540px] h-[300px]  w-[98%] left-[20px]  rounded-[10px] pl-[25px]    bg-gray-900/20">
        <Slider1 {...settings}>
          {rec &&
            rec.map((item) => (
              <Link to={`/detail/${item.id}/movie`}>
              <div className="  flex  items-center justify-center w-[350px] mt-[100px] ml-[1px]  hover:scale-95 transition-all">
                {/* <span className=" absolute w-10 pl-3 hover:top-[10px] bg-white/10 backdrop-blur-[10px] rounded-tl-[20px] top-16">  9.0</span> */}
                {/* <h1 className="text-[1.2rem] ml-[3%] mt-[3%]">Season 1</h1> */}
                <div className="h-[200px] w-[300px]  flex flex-col mt-[-50px] items-start   justify-center ">
                  <img
                    className="max-[480px]:w-[245px] max-[480px]:h-[145px] w-[265px] h-[175px] rounded-[20px]  rounded-b-[10px] "
                    src={
                      "https://image.tmdb.org/t/p/original/" +
                      item.backdrop_path
                    }
                  />
                  <h1
                    className="text-[1.2rem] z-[1]  max-[480px]:w-[245px] text-center flex justify-center items-center  uppercase overflow-clip  fixed mt-[1.88%] max-[480px]:mt-[1.1%]
               bg-[#070f1a]/60 backdrop-blur-[10px] w-[265px] h-[55px]  rounded-b-[10px]  "
                  >
                    {item.title}
                  </h1>
                </div>
              </div>
                    </Link>
            ))}
        </Slider1>
      </ScrollChnage>

      <ScrollChnage className="max-[480px]:top-[670px] max-[480px]:w-[100%]  max-[480px]:pl-0 max-[480px]:left-0 absolute top-[800px] h-[300px]  w-[98%] left-[20px]  rounded-[10px] pl-[25px]    bg-gray-900/20">
        <Slider1 {...settings}>
          {rec2 &&
            rec2.map((item) => (
              <Link to={`/detail/${item.id}/movie`}>
              <div className="  flex  items-center justify-center w-[350px] mt-[100px] ml-[1px]  hover:scale-95 transition-all">
                {/* <span className=" absolute w-10 pl-3 hover:top-[10px] bg-white/10 backdrop-blur-[10px] rounded-tl-[20px] top-16">  9.0</span> */}
                {/* <h1 className="text-[1.2rem] ml-[3%] mt-[3%]">Season 1</h1> */}
                <div className="h-[200px] w-[300px]  flex flex-col mt-[-50px] items-start   justify-center ">
                  <img
                    className="max-[480px]:w-[245px] max-[480px]:h-[145px] w-[265px] h-[175px] rounded-[20px]  rounded-b-[10px] "
                    src={
                      "https://image.tmdb.org/t/p/original/" +
                      item.backdrop_path
                    }
                  />
                  <h1
                    className="text-[1.2rem] z-[1]  max-[480px]:w-[245px] text-center flex justify-center items-center  uppercase overflow-clip  fixed mt-[1.88%] max-[480px]:mt-[1.1%]
               bg-[#070f1a]/60 backdrop-blur-[10px] w-[265px] h-[55px]  rounded-b-[10px]  "
                  >
                    {item.title}
                  </h1>
                </div>
              </div>
                    </Link>
            ))}
        </Slider1>
      </ScrollChnage>
    </>
  );
};

export default MdetailRec;

const Slider1 = styled(Slider)`
  .slick-slide {
    width: 280px !important;
  }
  .slick-prev {
    position: absolute;
    left: 0;
    z-index: 1;
  }
  .slick-next {
    position: absolute;
    right: 0;
  }
  @media (max-width: 480px) {
    .slick-prev {
      position: absolute !important;

    }
`;

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

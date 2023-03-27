

import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useState, useEffect } from "react";
import {HiPause} from "react-icons/hi";
import {FaPlay} from "react-icons/fa";



const ImgSlider = (props) => {

 let url = `https://api.themoviedb.org/3/movie/?api_key=c5ad2827c51f36bcbad41dc821d6d7c1`;
  let url2 = `https://api.themoviedb.org/3/movie/{id}/images?api_key=c5ad2827c51f36bcbad41dc821d6d7c1`;
  let url3 = `https://api.themoviedb.org/3/movie/{id}/videos?api_key=c5ad2827c51f36bcbad41dc821d6d7c1`;

  const [watchTrailer, setWatchTrailer] = useState(false);
  const [watchTrailer1, setWatchTrailer1]=useState(false);
  const [watchTrailer2, setWatchTrailer2]=useState(false);
  const [watchTrailer3, setWatchTrailer3]=useState(false);
  const Changestate = () => {
    watchTrailer ? setWatchTrailer(false) : setWatchTrailer(true);
  };
  const Changestate1 = () => {
    watchTrailer1 ? setWatchTrailer1(false) : setWatchTrailer1(true);
  };
  const Changestate2 = () => {
    watchTrailer2 ? setWatchTrailer2(false) : setWatchTrailer2(true);
  };
  const Changestate3 = () => {
    watchTrailer3 ? setWatchTrailer3(false) : setWatchTrailer3(true);
  };

  const ReadMore = ({ children }) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
    };
    return (
      <p className="text">
        {isReadMore ? text.slice(0, 150) : text}
        <span onClick={toggleReadMore} className="read-or-hide">
          {isReadMore ? "...read more" : " show less"}
        </span>
      </p>
    );
  };
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
  };
  return (
    <Carousel {...settings} >
      <Wrap className="">
        <a className="">
          <div className=" absolute  z-[3] ml-[50px] mt-[60px]">
            <div className="flex">

            <h1 className="text-[40px] max-[480px]:hidden text-white/70 tracking-[2px] mt-3">
              Attack on taitan
            </h1>
            <img className="w-[100px] ml-2 h-[100px]" src="https://image.tmdb.org/t/p/original/v5BvSzsYnFjoSesXHL3nR4er6kD.svg"/>
            </div>
            <p className="max-[480px]:hidden text-[18px] text-white/60 mt-1"> 123min &#8226; horror | comedy |  mystery | 2023 &#8226; en &#8226; 7.3&#9733;</p>
            <p className="max-[480px]:hidden w-[60%] text-[16px] text-white/40 tracking-[1.3px] mt-3">
           <ReadMore>

              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              quod, voluptate, quia, voluptates quas voluptatibus quibusdam
              voluptatum quae quidem quos quas voluptatibus quibusdam voluptatum
              quae quidem quos quas voluptatibus quibusdam voluptatum quae quidem
              quos quas voluptatibus quibusdam voluptatum quae quidem quos quas
              voluptatibus quibusdam voluptatum quae quidem quos quas
           </ReadMore>
              </p>
              {watchTrailer ? (
                  <div
                    className=" mt-[30px] pl-[5px] pr-[8px] w-[170px]  
                    rounded-md hover:bg-gray-700 bg-gray-800 backdrop-blur-sm flex items-center justify-between h-[50px] cursor-pointer transition-all"
                    onClick={Changestate}
                  >
                    <HiPause
                      className="   transition-all "
                      style={{
                        fontSize: "38px",
                        /* for responsive rm:the margintop and decrease the fontsize*/
                      }}
                    />

                    <p
                      style={{
                        fontSize: "17px",

                        // marginLeft: "10px",
                        /* for responsive rm:the margin-top and margin-left and decrease the fontsize and mak margin:0*/
                      }}
                    >
                      Watch Trailer
                    </p>
                  </div>
                ) : (
                  <div
                    className=" w-[170px] 
                    mt-[30px] pl-[5px] pr-[8px] hover:bg-gray-700  
                    rounded-md bg-gray-900  flex items-center
                      justify-between h-[50px] cursor-pointer transition-all"
                    onClick={Changestate}
                  >
                    <FaPlay
                      className="   transition-all "
                      style={{
                        fontSize: "28px",
                        /* for responsive rm:the margintop and decrease the fontsize*/
                      }}
                    />

                    <p
                      style={{
                        fontSize: "17px",

                        // marginLeft: "20px",
                        /* for responsive rm:the margin-top and margin-left and decrease the fontsize and mak margin:0*/
                      }}
                    >
                      Watch Trailer
                    </p>
                  </div>
                )}
          </div>
          {watchTrailer1 ? (
              // <iframe width="560" height="315" src={`https://www.youtube.com/embed/?controls=0&autoplay=1`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              <iframe className=" z-[-1] relative ml-[50%]"
              
              width="560"
                height="400"
                src={`https://www.youtube.com/embed/VQGCKyvzIM4?controls=0&autoplay=1`}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            ) : (
              
              <img className="max-[480px]:h-[250px]" src="https://image.tmdb.org/t/p/original/5iilESGDr44JUO5as6KzejxkvJd.jpg" alt="" />

              )}
        </a>
      </Wrap >
     
      <Wrap className="">
        <a className="">
          <div className=" absolute  z-[3] ml-[50px] mt-[60px]">
            <div className="flex">

            <h1 className="text-[40px] max-[480px]:hidden text-white/70 tracking-[2px] mt-3">
              Attack on taitan
            </h1>
            <img className="w-[100px] ml-2 h-[100px]" src="https://image.tmdb.org/t/p/original/v5BvSzsYnFjoSesXHL3nR4er6kD.svg"/>
            </div>
            <p className="max-[480px]:hidden text-[18px] text-white/60 mt-1"> 123min &#8226; horror | comedy |  mystery | 2023 &#8226; en &#8226; 7.3&#9733;</p>
            <p className="max-[480px]:hidden w-[60%] text-[16px] text-white/40 tracking-[1.3px] mt-3">
           <ReadMore>

              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              quod, voluptate, quia, voluptates quas voluptatibus quibusdam
              voluptatum quae quidem quos quas voluptatibus quibusdam voluptatum
              quae quidem quos quas voluptatibus quibusdam voluptatum quae quidem
              quos quas voluptatibus quibusdam voluptatum quae quidem quos quas
              voluptatibus quibusdam voluptatum quae quidem quos quas
           </ReadMore>
              </p>
              {watchTrailer ? (
                  <div
                    className=" mt-[30px] pl-[5px] pr-[8px] w-[170px]  
                    rounded-md hover:bg-gray-700 bg-gray-800 backdrop-blur-sm flex items-center justify-between h-[50px] cursor-pointer transition-all"
                    onClick={Changestate}
                  >
                    <HiPause
                      className="   transition-all "
                      style={{
                        fontSize: "38px",
                        /* for responsive rm:the margintop and decrease the fontsize*/
                      }}
                    />

                    <p
                      style={{
                        fontSize: "17px",

                        // marginLeft: "10px",
                        /* for responsive rm:the margin-top and margin-left and decrease the fontsize and mak margin:0*/
                      }}
                    >
                      Watch Trailer
                    </p>
                  </div>
                ) : (
                  <div
                    className=" w-[170px] 
                    mt-[30px] pl-[5px] pr-[8px] hover:bg-gray-700  
                    rounded-md bg-gray-900  flex items-center
                      justify-between h-[50px] cursor-pointer transition-all"
                    onClick={Changestate}
                  >
                    <FaPlay
                      className="   transition-all "
                      style={{
                        fontSize: "28px",
                        /* for responsive rm:the margintop and decrease the fontsize*/
                      }}
                    />

                    <p
                      style={{
                        fontSize: "17px",

                        // marginLeft: "20px",
                        /* for responsive rm:the margin-top and margin-left and decrease the fontsize and mak margin:0*/
                      }}
                    >
                      Watch Trailer
                    </p>
                  </div>
                )}
          </div>
          {watchTrailer1 ? (
              // <iframe width="560" height="315" src={`https://www.youtube.com/embed/?controls=0&autoplay=1`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              <iframe className=" z-[-1] relative ml-[50%]"
              
              width="560"
                height="400"
                src={`https://www.youtube.com/embed/VQGCKyvzIM4?controls=0&autoplay=1`}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            ) : (
              
              <img className="max-[480px]:h-[250px]" src="https://image.tmdb.org/t/p/original/5iilESGDr44JUO5as6KzejxkvJd.jpg" alt="" />

              )}
        </a>
      </Wrap >
     
      <Wrap className="">
        <a className="">
          <div className=" absolute  z-[3] ml-[50px] mt-[60px]">
            <div className="flex">

            <h1 className="text-[40px] max-[480px]:hidden text-white/70 tracking-[2px] mt-3">
              Attack on taitan
            </h1>
            <img className="w-[100px] ml-2 h-[100px]" src="https://image.tmdb.org/t/p/original/v5BvSzsYnFjoSesXHL3nR4er6kD.svg"/>
            </div>
            <p className="max-[480px]:hidden text-[18px] text-white/60 mt-1"> 123min &#8226; horror | comedy |  mystery | 2023 &#8226; en &#8226; 7.3&#9733;</p>
            <p className="max-[480px]:hidden w-[60%] text-[16px] text-white/40 tracking-[1.3px] mt-3">
           <ReadMore>

              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              quod, voluptate, quia, voluptates quas voluptatibus quibusdam
              voluptatum quae quidem quos quas voluptatibus quibusdam voluptatum
              quae quidem quos quas voluptatibus quibusdam voluptatum quae quidem
              quos quas voluptatibus quibusdam voluptatum quae quidem quos quas
              voluptatibus quibusdam voluptatum quae quidem quos quas
           </ReadMore>
              </p>
              {watchTrailer ? (
                  <div
                    className=" mt-[30px] pl-[5px] pr-[8px] w-[170px]  
                    rounded-md hover:bg-gray-700 bg-gray-800 backdrop-blur-sm flex items-center justify-between h-[50px] cursor-pointer transition-all"
                    onClick={Changestate}
                  >
                    <HiPause
                      className="   transition-all "
                      style={{
                        fontSize: "38px",
                        /* for responsive rm:the margintop and decrease the fontsize*/
                      }}
                    />

                    <p
                      style={{
                        fontSize: "17px",

                        // marginLeft: "10px",
                        /* for responsive rm:the margin-top and margin-left and decrease the fontsize and mak margin:0*/
                      }}
                    >
                      Watch Trailer
                    </p>
                  </div>
                ) : (
                  <div
                    className=" w-[170px] 
                    mt-[30px] pl-[5px] pr-[8px] hover:bg-gray-700  
                    rounded-md bg-gray-900  flex items-center
                      justify-between h-[50px] cursor-pointer transition-all"
                    onClick={Changestate}
                  >
                    <FaPlay
                      className="   transition-all "
                      style={{
                        fontSize: "28px",
                        /* for responsive rm:the margintop and decrease the fontsize*/
                      }}
                    />

                    <p
                      style={{
                        fontSize: "17px",

                        // marginLeft: "20px",
                        /* for responsive rm:the margin-top and margin-left and decrease the fontsize and mak margin:0*/
                      }}
                    >
                      Watch Trailer
                    </p>
                  </div>
                )}
          </div>
          {watchTrailer1 ? (
              // <iframe width="560" height="315" src={`https://www.youtube.com/embed/?controls=0&autoplay=1`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              <iframe className=" z-[-1] relative ml-[50%]"
              
              width="560"
                height="400"
                src={`https://www.youtube.com/embed/VQGCKyvzIM4?controls=0&autoplay=1`}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            ) : (
              
              <img className="max-[480px]:h-[250px]" src="https://image.tmdb.org/t/p/original/5iilESGDr44JUO5as6KzejxkvJd.jpg" alt="" />

              )}
        </a>
      </Wrap >
     
      <Wrap className="">
        <a className="">
          <div className=" absolute  z-[3] ml-[50px] mt-[60px]">
            <div className="flex">

            <h1 className="text-[40px] max-[480px]:hidden text-white/70 tracking-[2px] mt-3">
              Attack on taitan
            </h1>
            <img className="w-[100px] ml-2 h-[100px]" src="https://image.tmdb.org/t/p/original/v5BvSzsYnFjoSesXHL3nR4er6kD.svg"/>
            </div>
            <p className="max-[480px]:hidden text-[18px] text-white/60 mt-1"> 123min &#8226; horror | comedy |  mystery | 2023 &#8226; en &#8226; 7.3&#9733;</p>
            <p className="max-[480px]:hidden w-[60%] text-[16px] text-white/40 tracking-[1.3px] mt-3">
           <ReadMore>

              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              quod, voluptate, quia, voluptates quas voluptatibus quibusdam
              voluptatum quae quidem quos quas voluptatibus quibusdam voluptatum
              quae quidem quos quas voluptatibus quibusdam voluptatum quae quidem
              quos quas voluptatibus quibusdam voluptatum quae quidem quos quas
              voluptatibus quibusdam voluptatum quae quidem quos quas
           </ReadMore>
              </p>
              {watchTrailer ? (
                  <div
                    className=" mt-[30px] pl-[5px] pr-[8px] w-[170px]  
                    rounded-md hover:bg-gray-700 bg-gray-800 backdrop-blur-sm flex items-center justify-between h-[50px] cursor-pointer transition-all"
                    onClick={Changestate}
                  >
                    <HiPause
                      className="   transition-all "
                      style={{
                        fontSize: "38px",
                        /* for responsive rm:the margintop and decrease the fontsize*/
                      }}
                    />

                    <p
                      style={{
                        fontSize: "17px",

                        // marginLeft: "10px",
                        /* for responsive rm:the margin-top and margin-left and decrease the fontsize and mak margin:0*/
                      }}
                    >
                      Watch Trailer
                    </p>
                  </div>
                ) : (
                  <div
                    className=" w-[170px] 
                    mt-[30px] pl-[5px] pr-[8px] hover:bg-gray-700  
                    rounded-md bg-gray-900  flex items-center
                      justify-between h-[50px] cursor-pointer transition-all"
                    onClick={Changestate}
                  >
                    <FaPlay
                      className="   transition-all "
                      style={{
                        fontSize: "28px",
                        /* for responsive rm:the margintop and decrease the fontsize*/
                      }}
                    />

                    <p
                      style={{
                        fontSize: "17px",

                        // marginLeft: "20px",
                        /* for responsive rm:the margin-top and margin-left and decrease the fontsize and mak margin:0*/
                      }}
                    >
                      Watch Trailer
                    </p>
                  </div>
                )}
          </div>
          {watchTrailer1 ? (
              // <iframe width="560" height="315" src={`https://www.youtube.com/embed/?controls=0&autoplay=1`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              <iframe className=" z-[-1] relative ml-[50%]"
              
              width="560"
                height="400"
                src={`https://www.youtube.com/embed/VQGCKyvzIM4?controls=0&autoplay=1`}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            ) : (
              
              <img className="max-[480px]:h-[250px]" src="https://image.tmdb.org/t/p/original/5iilESGDr44JUO5as6KzejxkvJd.jpg" alt="" />

              )}
        </a>
      </Wrap >
     
     
    </Carousel>
  );
};

const Carousel = styled(Slider)`
  margin-top: 20px;

  & > button {
    opacity: 0;
    height: 100%;
    width: 5vw;
    z-index: 1;
    &:hover {
      opacity: 1;
      transition: opacity 0.2s ease 0s;
    }
  }

  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }
  li.slick-active button:before {
    color: white;
  }
  .slick-list {
    overflow: visible;
  }
  .slick-next {
    // left: -75px;
  }
`;

const Wrap = styled.div`

  border-radius: 4px;
    cursor: pointer;
    position: relative;
    
    a {
      // background-color: white;
      // width: 100px;
        border-radius: 5px;
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        cursor: pointer;
        display: block;
        position: relative;
        padding: 4px;
        &::before {
          content: "";
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          background-color: rgba(0, 0, 0, 0.2);
          width: 100%;
          height: 100%;
          box-shadow: 680px 76px 128px #070f1a inset;
          z-index: 1;
          opacity: 1;
          @media (max-width: 480px) {
            // display: none;
          box-shadow: 180px 76px 128px #070f1a inset;      

          }
        }
        img {
          object-fit: contain;
           margin-left: 209px;
            border-radius: 5px;
            width: 100%;
            height: 400px;
            @media (max-width: 480px) {
              // display: none;
            }
        }

    &:hover {
        padding: 0;
        border: 4px solid gray;
        transition-duration:300ms;

    }
    }

`;

export default ImgSlider;

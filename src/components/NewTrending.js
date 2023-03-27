import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { SelectImages } from "../features/APISlice/ApiSlice";
import { SelectCostopDay } from "../features/APISlice/ApiSlice";
import { useState } from "react";
import TopDay from "./TopDay";
import {useEffect} from "react"

const NewTrending = (props) => {
  const ApiImg = useSelector(SelectImages);
  const TodayResults = useSelector(SelectCostopDay);
  const [today, setToday] = useState(()=>{
    const parsedItem=JSON.parse(localStorage.getItem("isSetToday"))
    return parsedItem || "";
    });
  const [week, setWeek] = useState(()=>{
    const parsedItem=JSON.parse(localStorage.getItem("isSetWeek"))
    return parsedItem || "";
    });

  //    console.log(ApiImg[0])

  let settings = {
    // dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          // dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],

  };

  //change the color of the title when set today is true

  const handelToday = () => {
    if (today === true && week === false) {
      setToday(true);
    } else {
      setWeek(false);
      setToday(true);
    }
    console.log("today");
  };
  const handelWeek = () => {
    if (week === true && today === false) {
      setWeek(true);
    } else {
      setToday(false);
      setWeek(true);
    }

    console.log("week");
  };

  useEffect(() => { 
    window.localStorage.setItem("isSetToday", JSON.stringify(today)); 
    },[handelToday]);
    
    useEffect(() => { 
      window.localStorage.setItem("isSetWeek", JSON.stringify(week)); 
      },[handelWeek]);

  return (
    <>
      <p style={{ margin: "45px 0 0 0", fontSize:"28px ",letterSpacing:"1.5px"}}>Trending <span style={{fontWeight:"900"}}>&#8593;</span></p>
      <LineDivider>
        {today ? (
          <NTitle onClick={handelToday}>Today</NTitle>
        ) : (
          <Title onClick={handelToday}>Today</Title>
        )}
        {week ? (
          <NTitle onClick={handelWeek}>Weekely</NTitle>
        ) : (
          <Title onClick={handelWeek}>Weekely</Title>
        )}
      </LineDivider>
      <hr
        style={{
          width: "100%",
          height: "3px",
          backgroundColor: "gray",
          border: "none",
          borderRadius: "10px",
        }}
      />
  {
    today ? (
      <Carousel {...settings}>
        {ApiImg &&
          ApiImg.map((ApiMovie, key) => (
            <Link
              // to={"/detail/" + ApiMovie.id}
              to={"/detail/" + ApiMovie.id+"/"+ApiMovie.media_type}
              onDragStart={(event) => event.preventDefault()}
            >
              <Wrap key={key}>
                <img src={ApiMovie.image} alt={ApiMovie.title} />
                <HoverData>
                  <TitData>
                    <SubTitle className="max-[480px]:text-[20px]">{ApiMovie.name}</SubTitle>
                    <Description className="max-[480px]:text-[15px]">
                      {ApiMovie.FAD} &nbsp; &nbsp; &nbsp; {ApiMovie.rating}
                      <span style={{ fontSize: "20px" }}>&#9733;</span>
                    </Description>
                  </TitData>
                  <AddList>
                    <span />
                    <span />
                  </AddList>
                </HoverData>
              </Wrap>
            </Link>
          ))}
      </Carousel>
    ) : (
    <TopDay />
      
    )
  }
      
    </>
  );
};

const Carousel = styled(Slider)`
  padding: 0 0 26px;
  draggable=false;
  user-drag: none; 
  user-select: none;
  width: 100%;
  margin-top: 30px;
  height: 100%;
  
  .slick-slide {
    margin: 10px;
  }
  .slick-track {
    display: flex !important;
    margin-bottom: 25px;
  }
  & > button {
    opacity: 1;
    height: 100%;
    // width: 5vw;
    top: 40%;
    
    z-index: 1;
    &:hover {
      opacity: 1;
      transition: opacity 0.2s ease 0s;
    }
  }
  `;
const HoverData = styled.div`
  margin-top: -60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  opacity: 0;
  z-index: 3;
`;
const Wrap = styled.div`
  padding-top: 66.25%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 16px 20px -5px,
    rgb(0 0 0 / 73%) 0px 16px 10px -20px;

  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);

  img {
    inset: 0px;
    display: block;
    height: 100%;
    position: absolute;
    object-fit: cover;
    opacity: 1;
    transition: opacity 500ms ease-in-out 0s;
    // z-index: 1;
    width: 100%;
    top: 0;
    z-index: -3;
  }
  &::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.2);
    box-shadow: 0px -60px 50px rgba(0, 0, 0, 0.9) inset;
    width: 100%;
    height: 100%;
    z-index: -2;
    opacity: 1;
  }
  // }

  &:hover {
    ${HoverData} {
      z-index: 3 !important;
      opacity: 1;
      transition: opacity 0.2s ease 0s;
      transition-duration: 1s;
    }
  }
  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 30px -30px,
      rgb(0 0 0 / 72%) 0px 30px 22px -20px;
    transform: scale(1.05);
    border-color: #676869;
  }
`;

const SubTitle = styled.div`
  text-decoration: none;
  color: #d0d0d0;
  text-overflow: clip;
  min-height: 20px;
  @media (max-width: 768px) {
    font-size: 12px;
  }
  z-index: 1;
  width: 200px;
  // font-weight: 600;
  font-size: 20px;
  margin: 0;
  letter-spacing: 0.5px;
  line-height: 1.4;
  opacity: 0.7;
  // text-overflow: clip;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  transition: opacity 0.5s ease 0s;
  transition-duration: 1s;
`;
const Description = styled.div`
  text-decoration: none;
  color: #d0d0d0;
  text-overflow: clip;
  min-height: 20px;
  @media (max-width: 768px) {
    font-size: 12px;
  }
  letter-spacing: 1.5px;
  line-height: 1.4;
  font-size: 14px;
  // padding: 16px 0px;
  opacity: 0.7;
  @media (max-width: 768px) {
    font-size: 8px;
  }
  transition: opacity 0.2s ease 0s;
`;
const AddList = styled.div`
  
  margin-right: 16px;
  height: 34px;
  width: 34px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 50%;
  border: 2px solid white;
  cursor: pointer;
  span {
    background-color: rgb(249, 249, 249);
    display: inline-block;
    &:first-child {
      height: 2px;
      transform: translate(2px, 0px) rotate(0deg);
      width: 12px;
      
    }
    &:nth-child(2) {
      height: 12px;
      transform: translateX(-5px) rotate(0deg);
      width: 2px;
    }
    `;

const TitData = styled.div`
  padding: 0 16px;
`;

const LineDivider = styled.div`
  margin-top: 15px;
  display: flex;
  align-items: center;
  // justify-content: center;
`;

const Title = styled.div`
width:60px
height: 20px;
color: gray;
background-color: #1e2536;
padding: 10px 16px;
border-radius:8px;
margin-right:20px;
margin-bottom:6px;
cursor: pointer;
border: 2px solid  gray;

&:hover{
  background-color: #070f1a;
  color: white;
  transition: all 0.6s ease 0s;
  border: 2px solid gray;
  // transition-duration: 1s;
  transform: scale(1.05);
}
&:active{
  background-color: white;
}
`;
const NTitle = styled.div`
width:60px
height: 20px;
padding: 10px 16px;
border-radius:8px;
margin-right:20px;
margin-bottom:6px;
cursor: pointer;
background-color: #070f1a;
color: white;
transition: all 0.6s ease 0s;
border: 2px solid gray;
// transition-duration: 1s;
transform: scale(1.05);
&:active{
  background-color: white;
}
`;

const Line = styled.div``;

export default NewTrending;

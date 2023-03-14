import React from "react";
import styled from "styled-components";
import { FaPlay } from "react-icons/fa";
import { MdAddCircleOutline } from "react-icons/md";
import { FiShare2 } from "react-icons/fi";
import { GiShare } from "react-icons/gi";

// import styled from "styled-components";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import db from "../firebase";
// import { SelectAllResults, SelectImages } from "../features/APISlice/ApiSlice";
import { SelectImgLinks } from "../features/APISlice/ApiSlice";
// import { mo } from "../features/APISlice/ApiSlice";
import { setResults } from "../features/APISlice/ApiSlice";
import { SelectTopRated } from "../features/APISlice/ApiSlice";
import { GrAdd } from "react-icons/gr";
import { SelectAllResults } from "../features/APISlice/ApiSlice";
import SeasonDetail from "./SeasonDetail";

const NewDetail = () => {
  const { id , type } = useParams();
  const [backImgs1, setBackImgs] = useState(()=>{
    const parsedItem2=JSON.parse(localStorage.getItem(id+"real"));
    return parsedItem2 || "";
  });

  const [detailData, setDetailData] = useState(()=>{
  const parsedItem=JSON.parse(localStorage.getItem(id+"logo"))
  return parsedItem || "";
  });
  const [detailData2, setDetailData2] = useState(()=>{
    const parsedItem1=JSON.parse(localStorage.getItem(id));
    return parsedItem1 || "";
  });
  const [detailData3, setDetailData3] = useState(()=>{
    const parsedItem2=JSON.parse(localStorage.getItem(id+"movieDetails"));
    return parsedItem2 || "";
  });

  const [castData, setCastData] = useState("");

  const dispatch = useDispatch();
  let logo_img = useSelector(SelectImgLinks);
  // console.log(detailData3.name);
  let ApiImg =  useSelector(SelectAllResults);
  let backImgs,real;
  
  
  useEffect(() => {
    for (let i = 0; i < ApiImg.length; i++) {
      if (ApiImg[i].id == id) {
        setDetailData3(ApiImg[i]);
        setBackImgs(ApiImg[i].image);
      }
    }          
    
    const apiImgLogoCall = async () => {
      let url;
      for (let i = 0; i < ApiImg.length; i++) {
        if (ApiImg[i].id == id) {
          backImgs=ApiImg[i].image
          // console.log(backImgs);
          if (ApiImg[i].media_type == "movie") {
            url = `https://api.themoviedb.org/3/movie/${id}/images?api_key=c5ad2827c51f36bcbad41dc821d6d7c1`;
          } else {
            url = `https://api.themoviedb.org/3/tv/${id}/images?api_key=c5ad2827c51f36bcbad41dc821d6d7c1`;
          }
        }
      }
      const response = await fetch(url);
      const data = await response.json();
      // setDetailData(
      //   "https://image.tmdb.org/t/p/w500" + data.logos[20].file_path
      //   );
      console.log(backImgs1);
        if(data.backdrops[3].file_path == null){
          setDetailData2(
          backImgs1
          );
        }else{
          setDetailData2( 
          "https://image.tmdb.org/t/p/w500" + data.backdrops[3].file_path
          );
        }
        console.log(real);
            // real   
          
        };
          console.log("iuse effect called")
          apiImgLogoCall();
        


            
            console.log(detailData);
          },[id]);


          
          useEffect(() => { 
            window.localStorage.setItem(id, JSON.stringify(detailData2)); 
            },[detailData2]);
            useEffect(() => { 
              window.localStorage.setItem(id+"real", JSON.stringify(backImgs1)); 
              },[backImgs1]);

            useEffect(() => {
              window.localStorage.setItem(id+"logo", JSON.stringify(detailData));
            },[detailData]);
            useEffect(() => {
              window.localStorage.setItem(id+"movieDetails", JSON.stringify(detailData3));
            },[detailData3]);


            const getCastDetails= async() => {
              const Castdata=await fetch(`https://api.themoviedb.org/3/${type}/${id}/credits?api_key=c5ad2827c51f36bcbad41dc821d6d7c1`);
              const CastDetail=await Castdata.json();
              setCastData(CastDetail.cast);
              console.log(castData);
            }
            useEffect(() => {
              getCastDetails();
              // console.log(CastDetail);
            },[]);
  return (
    
    
    <>

    <Container>
      <Content>
        <Background>
          <img src={
            detailData2 ? detailData2 : backImgs1
            } alt="" />
          <MetaData>
            <TitleName >{detailData3.name}</TitleName>
            <MovieDis>
              2 hr 1 min &#8226; {detailData3.geners}  {detailData3.FAD} &#8226; {detailData3.or_lan} &#8226; {detailData3.rating}&#9733;
            </MovieDis>
            <TitleDis>
              {detailData3.overview}
            </TitleDis>
            <WatchContainer>
              <FaPlay style={{ fontSize: "28px", marginTop: "40px" /* for responsive rm:the margintop and decrease the fontsize*/}} />
              <p
                style={{
                  fontSize: "17px",
                  marginTop: "40px",
                  marginLeft: "16px",
                  /* for responsive rm:the margin-top and margin-left and decrease the fontsize and mak margin:0*/
                }}
              >
                Watch Trailer
              </p>
              <ShareContainer>
                <MdAddCircleOutline
                  style={{
                    fontSize: "40px",
                    marginTop: "33px",
                    marginLeft: "16px",
                    /* for responsive rm:the margin-top and decrease the fontsize and make margin:0 position absolute*/
                  }}
                />
                {/* <p>WATCHLIST</p> */}
                <GiShare
                  style={{
                    fontSize: "40px",
                    marginTop: "33px",
                    marginLeft: "16px",
                    /* your wish shiva you can make it display none*/
                  }}
                />
              </ShareContainer>
            </WatchContainer>
          </MetaData>
        </Background>
      </Content>
    </Container>
          <SeasonDetail />
      <CastContainer>
        <CastDetail>
          {
           castData && castData.map((cast)=>(

          <CastHolder>
          <CastImg>
            <img src={"https://image.tmdb.org/t/p/w500"+ cast.profile_path} alt="" />
          </CastImg>
          <CastName>
            <p style={{fontSize:"18px",letterSpacing:"0.1px"}}>{cast.name}</p>
            <p style={{margin:"0", color:"gray",fontSize:"14px",letterSpacing:"1.2px"}}>{cast.character}</p>
          </CastName>
          </CastHolder>
           ))
          }
         
        </CastDetail>
      </CastContainer>
      </>
  );
};

export default NewDetail;

const Container = styled.div`
// position: relative;
// min-height: calc(100vh - 250px);
// padding: 0px calc(3.5vw + 5px);
  // overflow: hidden;
  // display: block;
  // top: 72px;
  // display: flex;
  // align-items: center;
  // justify-content: center;
  // z-index: 1;
  &:before {
    background: url("/images/images/home-background.png") center center / cover
    no-repeat fixed;
    content: "";
    position: fixed;
    inset: 0px;
    opacity: 1;
    bottom: 0;
    z-index: -3;
  }
  //  background-color: white;
  margin-top: 20%;
  // background-color: red;
  // height: 100vh;
  // display: flex;
  // justify-content: center;
  // align-items: center;
`;

const Content = styled.div`
// // padding: 30px 30px 30px 30px;
// // padding-top: 30%;
// display: flex;
  // align-items: center;
  // justify-content: center;
  // z-index: 1;
  margin: -148px 0 0 66px; ;


  // responsive: {
  //   add{
  //     margin-top:100px;
  //     width: 100% optional ;
  //     height: 100% optional ;
  //   }
  //   remove{
  //     exsisting margin
  //   }
  // }

`;

const Background = styled.div`
box-shadow: rgb(0 0 0 / 69%) 0px 0px 5px -10px,
rgb(0 0 0 / 73%) 0px 15px 25px -36px;
height: 65%;
width: 90%;
cursor: pointer;
border-radius: 10px;
overflow: hidden;
position: absolute;
transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
// border: 3px solid rgba(249, 249, 249, 0.1);
//   z-index: -2;
&::before {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.2);
  box-shadow: 680px 76px 128px #070f1a inset;
  width: 100%;
  height: 100%;
  z-index: -2;
  opacity: 1;
}

img {
  // background-color: rgba(0, 0, 0, 0.2);
  // box-shadow: 0px -60px 50px rgba(0, 0, 0, 0.9) inset;
  inset: 0px;
  // display: block;
  // height: 100%;
  position: absolute;
  object-fit: cover;
  opacity: 1;
  // transition: opacity 500ms ease-in-out 0s;
    // width: 100%;
    // top: 0;
    z-index: -3;
    width: 100%;
    height: 100%;
    object-fit: contain;
    margin: 0 0 0 20.3%;

    // responsive: {
    //   add{
      // z-index: -1;
      // object-fit: cover;
      // }
    //   remove{
    //     exsisting z-index;
    //     exsisting object-fit;
    //     exsisting margin;
    //   }
  }

  // responsive: {
  //   add{
  //     height: 205px;
  //     width: 100% ;
  //   }
  //   remove{
  //     exsisting height;
  //     exsisting width;
  //   }
  // }
`;

const MetaData = styled.div`
  padding: 70px 0 0 50px;
  //responsive: {
    //add{
      //padding: 70px 0 0 8px;
    //}
  `;
  const TitleName = styled.div`
  font-size: 30.4px;
  // line-height: 3.4;
  margin: 0 0 10px 0;
  `;
  
  const MovieDis = styled.div`
  color:gray;
  font-size: 14.5px;
  margin: 0 0 10px 0;
  `;

const TitleDis = styled.div`
color:gray;  
font-size: 13px;
  line-height: 1.6;
  letter-spacing: 0.3px;
  width: 45%;
  // height: 50px;
  text-overflow: elipsis;
  overflow: hidden;
  // text-align: justify;
  // white-space: nowrap;

  // responsive: {
  //   add{
  //     display: none;
  //   }
  `;

const WatchContainer = styled.div`
  display: flex;
  flex-direction: row;
  // align-items: center;
`;

const ShareContainer = styled.div`
  margin: 0 0 0 15%;
`;

const CastContainer = styled.div`
margin: 38% 0 0 0;
position:absolute; 
// border: 1px solid black;
// overflow: hidden;
top: 100%;
left: 0;
right: 0;
bottom: 0;
width: 100%;
display: flex;
align-items: center;
justify-content: center;


`;

const CastDetail = styled.div`
background-color: #00000030;

width: 90%;
overflow: auto;
  white-space: nowrap;
border-radius: 10px;  
padding: 10px 10px 10px 10px;
// height: 10%;
display: flex;
&::-webkit-scrollbar {
  // height: 4px;              /* height of horizontal scrollbar ← You're missing this */
  // width: 4px;               /* width of vertical scrollbar */
  // border: 1px solid #d5d5d5;
  height: 8px;
  width: 10px;
  border-radius: 10px;
  border: 10px solid #1d212f;
}
// ::-webkit-scrollbar{
//   height: 4px;
//   width: 4px;
//   background: gray;
// }
&::-webkit-scrollbar-thumb:horizontal{
  background: #3a3c44;
  border-radius: 6px;
}

`;

const CastImg = styled.div`
width: 155px;
height: 155px;
opacity: 1;
z-index: 1;
border-radius: 50%;
// background-color: red;
overflow: hidden; 
box-shadow: rgb(0 0 0 / 69%) 0px 0px 5px -10px,
rgb(0 0 0 / 73%) 0px 15px 25px -36px;
border: 3px solid gray;
img {
opacity: 1;

  width: 100%;
  height: 100%;
  object-fit: cover;
  // border-radius: 10%;
}
&:hover{
  transform: scale(1.1);
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  cursor: pointer;
}
`;

const CastName = styled.div`
margin: 0 0 0 0;
// background-color: blue;
//give margin top 10px to the 1st child of p
p{
  margin: 10px 0 0 0;
}
// &:first-child {
//   margin-top: 10px;
// }
`;

const CastHolder = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin: 0 20px 0 0;
padding: 10px;
opacity: 1;

`;
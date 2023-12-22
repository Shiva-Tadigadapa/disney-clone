import React, { useEffect } from 'react'
import styled from 'styled-components'
import { FaPlay } from "react-icons/fa";
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { Link } from 'react-router-dom';
// import { useEffect } from 'react';

const SeasonDetail = () => {
  
  


const [AllSeasons,setSeasons]= useState([]);
const [AllEpisodes,setEpisodes]= useState([]);

const {id,type}= useParams();  
useEffect(()=>{
  const getSeason = async ()=>{
    const url = `https://api.themoviedb.org/3/tv/${id}?api_key=c5ad2827c51f36bcbad41dc821d6d7c1&language=en-US`
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    setSeasons(data.seasons);
    setEpisodes(data);
    console.log("inside"+AllSeasons);
  }
  getSeason();
      // console.log("useEffect"+AllSeasons);

      // console.log("outside"+AllSeasons);
    },[setSeasons])
  return (
    <>
   
   <AllContainer>
     <h2>season</h2>
     <SeasonContainer>
    {
      AllSeasons && AllSeasons.map((season)=>(
        
        
        <Holla>
        <h3>{season.name}</h3>
        <span></span>
        <Link to={`Season/${season.season_number}`}>

        <SeasonHolder>
          <SeasonBackground>
            <img src={"https://image.tmdb.org/t/p/original"+season.poster_path} alt="" />
          </SeasonBackground>
          <SeasonInfo>
            <SeasonTitle>{AllEpisodes.name}</SeasonTitle>
            <SeasonDescription>   {AllEpisodes.vote_average && AllEpisodes.vote_average.toFixed(1)}★    {season.air_date && season.air_date.slice(0,4)} &#8226; 
              
                {
                  AllEpisodes.genres && AllEpisodes.genres[0].name
                  }           
            </SeasonDescription>
            <SeasonEpisodes>
              <SeasonEps>
              <FaPlay style={{ fontSize: "14px",margin:"2px 5px 2px -2px"}} />
                {season.episode_count}</SeasonEps>
            </SeasonEpisodes>
          </SeasonInfo>
        </SeasonHolder>
        </Link>
        </Holla>


      )
      )
    }      
      </SeasonContainer>
    </AllContainer>
    </>
  )
  }
export default SeasonDetail;

const Holla = styled.div`
display: flex;
flex-direction: column;
// align-items: center;
// justify-content: space-between;
h3{
  font-size: 1.3rem;
  font-weight: 600;
  margin: 0 0 8px 15px;

}
span{
  height: 1px;
  width: 50px;
  background-color: #fff;
  margin: -9px 0 15px 15px;

}

`;

const AllContainer = styled.div`
// display: flex;
  h2{
    font-size: 1.5rem;
    font-weight: 600;
    margin: 6% 0 0 7%;
    position: absolute;
    z-index: 1;
      
  }

// height: 100%;  
// margin-top:20%;
position: absolute;


top: 85%;
width: 100%;
// overflow: auto;
`;

const SeasonContainer = styled.div`
overflow: auto;
background-color: #00000030;
border-radius: 10px;
padding: 80px 0 30px 20px;
// position:absolute; 
// margin: 4% 0 0 0;
margin: 4% auto 0 auto;
// border: 1px solid black;
top: 140%;
left: 0;
right: 0;
bottom: 0;
width: 90%;
display: flex;
// flex-direction: row;
align-items: center;
justify-content: start;
&::-webkit-scrollbar {
  // height: 4px;              
  // width: 4px;              
  // border: 1px solid #d5d5d5;
  height: 8px;
  width: 10px;
  border-radius: 10px;
  border: 15px solid #1d212f;
  
}

&::-webkit-scrollbar-thumb:horizontal{
  background: #3a3c44;
  border-radius: 6px;
}
`;

const SeasonHolder = styled.div`
overflow: hidden; 
background-color: #070f1a;
width: 280px;
height: 165px;
border-radius: 10px;
display: flex;
align-items: center;
justify-content: center;
margin: 0 10px 0 10px;
// z-index: 1;
position: relative;
&:hover{
  transform: scale(1.06);
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  
}
`;

const SeasonBackground = styled.div`
height: 100%;
width: 100%;
&::before{
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  // background-color: RGBA(0,0,0,0.5);
  z-index: 1;
}
img{
  height: 100%;
  // width: 100%;
  overflow: hidden;
  object-fit: cover;
  border-radius: 10px 0 0 10px;
  z-index: -1;


}

`;

const SeasonInfo = styled.div`
height:100%;
width:100%;
  // position: absolute;
  display:flex;
  overflow: hidden;
  flex-direction: column;
  // align-items: bottom;
  // justify-content: space-between;
  margin: 0 0 0 -32px;
  padding: 10px 10px 10px 0px;
  // bottom: 0;
  // left: 0;
  // right: 0;
  top: 40%;
  z-index: 2;
`;

const SeasonTitle = styled.div`
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0 0 0 0;
  letter-spacing: 1px;

  line-height: 1.2;

`;

const SeasonDescription = styled.p`
  line-height: 3;
  letter-spacing: 1px;
  overflow: hidden;
    height: 20px;
    white-space: nowrap;
    height:40px !important;
    text-overflow: ellipsis;
    font-size: 12px;
    color: gray;
    margin: 0 0 0 0;
`;

const SeasonEpisodes = styled.div`
 position: absolute;
 top: 70%;
  // line-height: 3;
  letter-spacing: 1px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 0 0 0 0;
  &:hover{
    transform: scale(1.06);
    transition: all 0.2s ease-in-out;

    cursor: pointer;
  }


`;

const SeasonEps = styled.p`
  font-size: 0.8rem;
  margin: 0 0 0 0;
  font-weight: 600;
  color: #fff;
  
  background-color: #262a3a;
  // padding: 2px 5px 2px 5px;
  border-radius: 5px;
  padding: 5px 10px 5px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

import styled from "styled-components";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import db from "../firebase";
import { SelectImages } from "../features/APISlice/ApiSlice";
import { SelectImgLinks } from "../features/APISlice/ApiSlice";
// import { mo } from "../features/APISlice/ApiSlice";
import { setResults } from "../features/APISlice/ApiSlice";

const Detail = (props) => {
  const { id } = useParams();
  const [detailData, setDetailData] = useState([]);
  const [detailData2, setDetailData2] = useState([]);
  const [detailData3, setDetailData3] = useState([]);
  const dispatch = useDispatch();
  let ApiImg = useSelector(SelectImages);
  let logo_img = useSelector(SelectImgLinks);
  console.log(detailData3.name);
  useEffect(() => {
    const apiImgLogoCall = async () => {
      let url;
      for (let i = 0; i < ApiImg.length; i++) {
        if (ApiImg[i].id == id) {
          if (ApiImg[i].media_type == "movie") {
            url = `https://api.themoviedb.org/3/movie/${id}/images?api_key=c5ad2827c51f36bcbad41dc821d6d7c1`;
          } else {
            url = `https://api.themoviedb.org/3/tv/${id}/images?api_key=c5ad2827c51f36bcbad41dc821d6d7c1`;
          }
        }
      }
      const response = await fetch(url);
      const data = await response.json();
      setDetailData(
        "https://image.tmdb.org/t/p/w500" + data.logos[0].file_path
      );
      setDetailData2(
        "https://image.tmdb.org/t/p/w500" + data.backdrops[3].file_path
      );
    };
    apiImgLogoCall();
  }, [id]);

  useEffect(() => {
    for (let i = 0; i < ApiImg.length; i++) {
      if (ApiImg[i].id == id) {
        setDetailData3(ApiImg[i]);
      }
    }
  }, [id]);
  return (
    <Container>
      <Background>
        <img src={detailData2} alt={detailData3.name} />
      </Background>
      <ImageTitle>
        <img src={detailData} alt={detailData3.name} />
      </ImageTitle>
      <h1>{detailData3.name}</h1>
      <ContentMeta>
        <Controls>
          <Player>
            <img src="/images/images/play-icon-black.png" alt="play-icon" />
            <span>Play</span>
          </Player>
          <Trailer>
            <img src="/images/images/play-icon-white.png" alt="play-icon" />
            <span>Trailer</span>
          </Trailer>
          <AddList>
            <span />
            <span />
          </AddList>
          <GroupWatch>
            <div>
              <img src="/images/images/group-icon.png" alt="group-icon" />
            </div>
          </GroupWatch>
        </Controls>
        <SubTitle>{detailData3.name}</SubTitle>
        <Description>{detailData3.overview}</Description>
      </ContentMeta>
    </Container>
  );
};

export default Detail;

const Container = styled.div`
  position: relative;
  min-height: calc(100vh - 250px);
  padding: 0 calc(3.5vw + 5px);
  overflow-x: hidden;
  display: block;
  top: 72px;
`;
const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  opacity: 0.4;
  img {
    width: 100%;
    // height: 100%;
    @media (max-width: 768px) {
      width: initial;
    }
  }
`;
const ImageTitle = styled.div`
  align-items: flex-end;
  display: flex;
  -webkit-box-pack: start;
  justify-content: flex-start;
  margin: 0px auto;
  height: 25vw;
  min-height: 170px;
  padding-bottom: 24px;
  width: 100%;
  img {
    max-width: 400px;
    min-width: 200px;
    width: 35vw;
  }
`;

const ContentMeta = styled.div`
  max-width: 874px;
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
  margin: 24px 0px;
  min-height: 56px;
`;

const Player = styled.button`
  font-size: 15px;
  margin: 0px 22px 0px 0px;
  padding: 0px 24px;
  height: 56px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 1.8px;
  cursor: pointer;
  text-transform: uppercase;
  background: rgb(249, 249, 249);
  border: none;
  color: rgb(0, 0, 0);
  img {
    width: 32px;
  }
  &:hover {
    background: rgb(198, 198, 198);
  }
  @media (max-width: 768px) {
    height: 45px;
    padding: 0px 12px;
    margin: 0px 10px 0px 0px;
    font-size: 12px;
    letter-spacing: 1.5px;
    img {
      width: 25px;
    }
  }
`;

const Trailer = styled(Player)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
  text-transform: uppercase;
`;

const AddList = styled.div`
  margin-right: 16px;
  height: 44px;
  width: 44px;
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
      transform: translate(1px, 0px) rotate(0deg);
      width: 16px;
    }
    &:nth-child(2) {
      height: 16px;
      transform: translateX(-8px) rotate(0deg);
      width: 2px;
    }
  }
  @media (max-width: 768px) {
    height: 40px;
    width: 40px;
    span {
      &:first-child {
        height: 2px;
        transform: translate(1px, 0px) rotate(0deg);
        width: 16px;
      }
      &:nth-child(2) {
        height: 16px;
        transform: translateX(-8px) rotate(0deg);
        width: 2px;
      }
    }
  }
`;

const GroupWatch = styled.div`
  height: 44px;
  width: 44px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: white;
  div {
    height: 40px;
    width: 40px;
    background: rgb(0, 0, 0);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 100%;
    }
  }
  @media (max-width: 768px) {
    height: 40px;
    width: 40px;
    div {
      height: 40px;
      width: 40px;
      img {
        width: 100%;
      }
    }
  }
`;

const SubTitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const Description = styled.div`
  line-height: 1.4;
  font-size: 20px;
  padding: 16px 0px;
  color: rgb(249, 249, 249);
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

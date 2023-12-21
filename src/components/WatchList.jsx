import React from "react";
import { useSelector } from "react-redux";
// import { SelectUserName } from '../features/users/userSlice'
import { SelectWatchList } from "../features/APISlice/ApiSlice";
import { FaPlay } from "react-icons/fa";
import { GiCrossedBones, GiVikingLonghouse } from "react-icons/gi";
import db from "../firebase";
import { useState } from "react";
import firebase from "firebase/compat/app";
import { useEffect } from "react";
import styled from "styled-components";
// import{setWatchListData} from "../features/APISlice/ApiSlice"
import { setResults } from "../features/APISlice/ApiSlice";
import { useDispatch } from "react-redux";
import { SelectUserName } from "../features/users/userSlice";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import {toastContainer} from 'react-toastify';
// import {toast} from 'react-toastify';

const WatchList = () => {
  // const userName = useSelector(SelectUserName);
  // console.log(userName);
  let wids = [];
  let SortedWatch = [];
  const [watch, setWatch] = useState([]);
  const [FinalWatch, setFinalWatch] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [runner, setRunner] = useState([]);
  const [deleted, setDeleted] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector(SelectUserName);
  // console.log(user);

  const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
    setCurrentUser(user.multiFactor.user.uid);
  });

  async function fetchWids() {
    const watchlistRef = firebase
      .firestore()
      .collection(`watchlist2/${currentUser}/watchlist`);
    const querySnapshot = await watchlistRef.get();

    querySnapshot.forEach((doc) => {
      wids.push([doc.data().id, doc.data().type, doc.data().uid]);
    });

    setWatch(wids);

    const moviepromise = wids.map(async (item) => {
      let url = `https://api.themoviedb.org/3/${item[1]}/${item[0]}?api_key=c5ad2827c51f36bcbad41dc821d6d7c1`;
      const response = await fetch(url);
      const data = await response.json();
      return data;
    });
    const movieData = await Promise.all(moviepromise);
    return movieData;
  }
  const del = async(id) => { 
    const id1 = await id.toString();
    const watchlistRef = firebase.firestore().collection(`watchlist2/${currentUser}/watchlist`);
    const querySnapshot = watchlistRef.where("id", "==", id1);
   console.log(querySnapshot)   
   const querySnapshot2 = await querySnapshot.get().then((querySnapshot) => {
    
    querySnapshot.forEach((doc) => {
      doc.ref.delete().then(() => {
        console.log("Document successfully deleted!"+id1);
        // toast.success("Removed from WatchList"); 
        // toast.info("Removed from WatchList");
        // toast.dismiss("djhf"); 
        toast.error("Removed from WatchList");
        // toast.dark("Removed from WatchList");
        // fetchWids();
        setDeleted(!deleted);

        }); 
        });
        })
        .catch((error) => {
          console.error("Error removing document: ", error);
          });
          
          
   
    // watchlistRef  
    //   .doc(id)
    //   .delete()
    //   .then(() => {
    //     console.log("Document successfully deleted!");
    //   })
    //   .catch((error) => {
    //     console.error("Error removing document: ", error);
    //   });
  };


  useEffect(() => {
    async function getData() {
      const singledata = await fetchWids();
      setRunner(singledata);
    }
    getData();
  }, [currentUser,deleted]);
  // console.log(runner);

  return (
    <Main className="mt-[100px]">
      <div className=" absolute">Your WatchList</div>
      <hr className=" absolute mt-[30px] w-[100%] border-[3px] border-gray-600  " />
      
      <div>
        <div
        className="mt-[50px] flex-col transfom-[0.5] flex  items-center   justify-start absolute w-[100%] h-[100%]">
          
          {runner &&
            runner.map((item) => (
              <div  className="  z-[1] rounded-[10px] w-[85%] m-[30px] h-[35%] flex items-center">
                <div className=" rounded-[6px]  w-[170px] h-[240px]">
                  <img
                    className="w-[100%] h-[100%]   transition-all object-cover rounded-[6px] shadow-[0_0_15px_1px_black] hover:scale-[1.08]	 z-[4] shadow-[#00000067] "
                    src={
                      "https://image.tmdb.org/t/p/original" + item.poster_path
                    }
                    alt={item.title}
                  />
                </div>
                <Const className="w-[100%] h-[100%] z-[-1]  hover:scale-[1.01]   transition-all object-cover relative rounded-[10px]">
                  <div className="rounded-[10px]">
                    <h1 className=" absolute pt-[12px] pl-[45px] text-[1.45rem] tracking-[1.5px]">
                      {item.title ||
                        item.name ||
                        item.original_name ||
                        item.original_title ||
                        item.original_name}
                    </h1>
                    <h1 className=" absolute pt-[50px] pl-[50px] text-[0.95rem] text-gray-400 tracking-[1.5px] ">
                      Action,Adventure,Sci-Fi
                      {(item.first_air_date &&
                        item.first_air_date.slice(0, 4)) ||
                        (item.release_date && item.release_date.slice(0, 4))}
                    </h1>
                    <span className=" absolute py-[6px] px-[10px] ml-[55px] text-gray-600 mt-[85px]  tracking-[1px] text-[1.05rem] border-[2.8px]  rounded-[6px] border-gray-800 ">
                      U/A
                    </span>
                    <span className=" absolute py-[6px] px-[10px] ml-[125px] text-gray-600 mt-[85px]  text-[1.05rem]  tracking-[2px]">
                      {item.vote_average.toFixed(1)}
                    </span>
                    <h1 className=" absolute pt-[100px] pl-[25px] mt-[36px] ml-[30px] text-[0.80rem] text-gray-400 tracking-[1px] w-[55%]   overflow-hidden   whitespace-nowrap text-ellipsis  ">
                      {item.overview}
                    </h1>
                    <button className="  hover:text-gray-300 hover:bg-gray-700 hover:transition-all hover:scale-[1.07] hover:border-gray-600 flex justify-center items-center  text-center absolute py-[6px] px-[10px] ml-[55px] text-gray-600 mt-[170px]  text-[1.05rem] border-[2.8px] bg-[#0f172a] rounded-[6px] border-gray-800 ">
                      <FaPlay className="mr-[4px]" />
                      watch
                    </button>
                    <button
                      onClick={() => del(item.id)}
                      className="hover:text-gray-300 hover:bg-gray-700 hover:transition-all hover:scale-[1.07] hover:border-gray-600 flex justify-center items-center  text-center absolute py-[6px] px-[10px] ml-[185px] text-gray-600 mt-[170px]  text-[1.05rem] border-[2.8px]  bg-[#0f172a] rounded-[6px] border-gray-800 "
                    >
                      <GiCrossedBones className="mr-[5px]" />
                      remove{item.id}
                    </button>
                  </div>

                  <img
                    className="w-[395px] h-[100%] z-[-2]     left-[600px] object-contain   absolute  rounded-[20px]"
                    src={
                      "https://image.tmdb.org/t/p/original/" +
                      item.backdrop_path
                    }
                    alt=""
                  />
                </Const>
              </div>
            ))}
        </div>
      </div>
    </Main>
  );
};

export default WatchList;

const Const = styled.div`
  &::before {
    content: "";
    position: absolute;
    // top: 0;
    // bottom: 0;
    // left: 0;
    // right: 0;
    // background-color: rgba(0, 0, 0, 0.2);
    box-shadow: 780px 38px 117px #070f1a inset;
    width: 100%;
    height: 100%;
    animation: animate 1s linear infinite;
    // z-index: -2;
    opacity: 1;
  }
`;

const Main = styled.div`
  &:before {
    // background: url("/images/images/home-background.png") center center / cover
    //   no-repeat fixed;
    // background-color: gray;
    background: rgb(0, 0, 0);
    background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.9836309523809523) 0%,
      rgba(37, 37, 37, 1) 21%,
      rgba(0, 0, 0, 1) 100%
    );

    content: "";
    position: absolute;
    inset: 0px;
    // top: 0;
    height: 100%;
    opacity: 1;
    // bottom: 0;
    // z-index: -1;
  }
`;

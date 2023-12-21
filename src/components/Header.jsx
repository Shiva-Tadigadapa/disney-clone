import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import {
  SelectUserName,
  SelectUserPhoto,
  setUserLoginDetails,
  setSignOutState,
} from "../features/users/userSlice";
import { auth, provider } from "../firebase";
import { BiSearchAlt2 } from "react-icons/bi";

import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
// import { makeStyles } from "@material-ui/core/styles";
import React  from "react";










const Header = (props) => {
  
    const [alignment, setAlignment] = React.useState('movie');
  
    const handleAlignment = (event, newAlignment) => {
      // setAlignment(newAlignment);
      if (alignment === "movie") {
            setAlignment("tv");
      }
      else {
        setAlignment("movie");
      }

    };
  const [isActive, setIsActive] = useState(false);
  const [search, setSearch] = useState(null);
  const dispatch = useDispatch();
  const history = useNavigate();
  const userName = useSelector(SelectUserName);
  const userPhoto = useSelector(SelectUserPhoto);

  function inputVal(e) {
    setSearch(e.target.value);
  }

  function onSubmitHandler(e) {
    if (e.key === "Enter") {
      e.preventDefault();
      history(`/search/${search}/${alignment}`);
      console.log(search);
    }
  }
  function onSubmitHandler2() {
    history(`/search/${search}/${alignment}`);
  }

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
        // history("/home");
      }
    });
  }, [userName]);

  const handelAuth = () => {
    if (!userName) {
      auth
        .signInWithPopup(provider)
        .then((result) => {
          // console.log(result);
          setUser(result.user);
        })
        .catch((error) => {
          alert(error.message);
        });
    } else if (userName) {
      auth
        .signOut()
        .then(() => {
          dispatch(setSignOutState());
          history("/");
        })
        .catch((error) => {
          alert(error.message);
        });
    }
  };
  const setUser = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };
  const handelClick = () => {
    setIsActive(!isActive);
  };

  return (
    <Nav className=" backdrop-blur-[18px]  bg-[#090b13]/60 ">
      <Logo>
        <img className="sm:w-80" src="/images/images/logo.svg" alt="Disney+" />
      </Logo>
      {!userName ? (
        <Login onClick={handelAuth}>Login</Login>
      ) : (
        <>
          <NavMenu className="  max-[480px]:!hidden  ">
            <a href="/home">
              <img src="/images/images/home-icon.svg" alt="HOME" />
              <span>HOME</span>
            </a>
            <a href="/search">
              <img src="/images/images/search-icon.svg" alt="HOME" />
              <span>SEARCH</span>
            </a>
            <a href="/watchList">
              <img src="/images/images/watchlist-icon.svg" alt="HOME" />
              <span>WATCHLIST</span>
            </a>

            <a href="/">
              <img src="/images/images/movie-icon.svg" alt="HOME" />
              <span>MOVIES</span>
            </a>
            <a href="/">
              <img src="/images/images/series-icon.svg" alt="HOME" />
              <span>SERIES</span>
            </a>
          </NavMenu>
          
    <ToggleButtonGroup
      value={alignment}
      color="primary"
      exclusive
      onChange={handleAlignment}
      onClick={onSubmitHandler2}
      aria-label="text alignment"
      
    >
      <ToggleButton onChange={handleAlignment} className=" w-[50px] h-[40px]  bg-gray-600/50" value="tv">Tv</ToggleButton>
  <ToggleButton  onClick={handleAlignment} className="w-[70px] h-[40px]   bg-gray-600/50" value="movie">Movies</ToggleButton>
    </ToggleButtonGroup>
          {isActive ? (
            <SearchBar className="  max-[480px]:!hidden  "
              style={{
                dislpay: "block",
                width: "280px",
                transition: "all 10.5s ease-in-out",
                animation: "fadeIn 2.5s",
              }}
            >
              <input
                onChange={inputVal}
                onKeyPress={onSubmitHandler}
                type="text"
                placeholder="Search Movie"
              />
            </SearchBar>
          ) : (
            <SearchBar  className="  max-[480px]:!hidden  " style={{ display: "none", width: "0" }}>
              <input type="text" placeholder="Search Movie" />
            </SearchBar>
          )}
          <BiSearchAlt2 className="  max-[480px]:!hidden  "
            style={{
              fontSize: "24px",
              color: "gray",
              margin: "10px 80px 0 0",
              cursor: "pointer",
            }}
            onClick={handelClick}
          />
          <SignOut>
            <U>{userName}</U>
            <UserImg src={userPhoto} alt="userName" />
            <DropDown>
              <span onClick={handelAuth}>Sign Out</span>
            </DropDown>
          </SignOut>
        </>
      )}
    </Nav>
  );
};

const SearchBar = styled.div`
  & ${BiSearchAlt2}:hover {
    color: white;
  }
  color: white;
  display: flex;
  align-items: center;
  height: 35px;
  // width: 0;
  // border-radius: 5px;
  // background-color: #f9f9f9;
  padding: 0 10px;
  margin-left: 25px;
  margin-right: 25px;
  border-bottom: 0.5px solid gray;
  background-color: transparent;
  padding: 10px 10px;
  // display: none;
  margin-right: 50px;

  margin: 0;
  input {
    &:hover {
      color: white;
    }
    caret-color: gray;
    place-items: center;
    border: none;
    width: 100%;
    color: gray;
    height: 100%;
    background-color: transparent;
    padding: 110px 10px;
    font-size: 16px;
    letter-spacing: 1.42px;
    line-height: 1.08;
    &:focus {
      outline: none;
    }
  }

  // @media (max-width: 768px) {
  //   display: none;
  // }
`;

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  rigth: 0;
  height: 70px;
  width: 100%;
  // background-color: #090b13;
  // filter: blur(5px);
  // backdrop-filter: blur(5px);
  // z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 4;
`;

const Logo = styled.a`
  padding: 0;
  width: 80px;
  margin-top: 4px;
  max-height: 70px;
  font-size: 0;
  display: inline-block;
  img {
    display: block;
    width: 100%;
  }
`;

const NavMenu = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  height: 100%;
  justify-content: flex-end;
  margin: 0;
  padding: 0;
  margin-right: auto;
  margin-left: 25px;
  z-index: 4;

  a {
    text-decoration: none;
    display: flex;
    align-items: center;
    padding: 0 12px;

    img {
      width: 20px;
      min-width: 20px;
      height: 20px;
      z-index: auto;
    }
    span {
      color: rgb(249, 249, 249);
      font-size: 13px;
      letter-spacing: 1.42px;
      line-height: 1.08;
      padding: 2px 0;
      white-space: nowrap;
      position: relative;
      margin-left: 5px;
      margin-top: 1px;

      &:before {
        content: "";
        background-color: rgb(249, 249, 249);
        border-radius: 0px 0px 4px 4px;
        bottom: -6px;
        height: 2px;
        opacity: 1;
        position: absolute;
        right: 0px;
        left: 0px;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        visibility: hidden;
        width: auto;
      }
    }

    &:hover {
      span:before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
      }
    }
  }

  //   @media (max-width: 768px) {
  //     display: none;
  //   }
`;

const Login = styled.a`
    background-color: rgba(0, 0, 0, 0.6);
    padding: 8px 16px;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    border: 1px solid #f9f9f9;
    border-radius: 4px;
    transition: all 0.2s ease 0s;
    cursor: pointer;
    &:hover {
        background-color: #f9f9f9;
        color: #000;
        border-color: transparent;
    }
    E

`;
const UserImg = styled.img`
  height: 100%;
`;
const DropDown = styled.div`
  position: absolute;
  top: 50px;
  left: -30px;
  text-align: center;
  right: 0px;
  background: rgb(19, 19, 19);
  border: 1px solid rgba(151, 151, 151, 0.34);
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
  padding: 10px;
  font-size: 14px;
  letter-spacing: 3px;
  width: 105px;

  opacity: 0;
`;
const SignOut = styled.div`
  text-align: center;
  position: relative;
  margin-right: 40px;
  height: 48px;
  width: 48px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  ${UserImg} {
    border-radius: 50%;
    width: 100%;
    height: 100%;
    border: 2px solid #f9f9f9;
  }
  &:hover {
    ${DropDown} {
      opacity: 1;
      transition-duration: 1s;
    }
  }
`;

const U = styled.p`
  text-transform: uppercase;
  // margin-left: ;
  margin-right: 10px;
  text-align: center;
  color: #f9f9f9;
  font-size: 14px;
  font-weight: 700;
  line-height: 1.3;
  letter-spacing: 2.5px;
`;

export default Header;

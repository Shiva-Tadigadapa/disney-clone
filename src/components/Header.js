import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import {
  SelectUserName,
  SelectUserPhoto,
  setUserLoginDetails,
  setSignOutState,
} from "../features/users/userSlice";
import { auth, provider } from "../firebase";

const Header = (props) => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const userName = useSelector(SelectUserName);
  const userPhoto = useSelector(SelectUserPhoto);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) { 
        setUser(user);
        // history("/home");
      }
    });
  }, [userName]);

  const handelAuth = () => {
  if(!userName){
     auth
    .signInWithPopup(provider)
    .then((result) => {
      // console.log(result);
      setUser(result.user);
    })
    .catch((error) => {
      alert(error.message);
    });
  }
  else if(userName){
    auth.signOut().then(()=>{
      dispatch(setSignOutState());
      history("/");
    }).catch((error)=>{alert(error.message)})
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

  return (
    <Nav>
      <Logo>
        <img src="/images/images/logo.svg" alt="Disney+" />
      </Logo>
      {
        !userName ? (
        <Login onClick={handelAuth}>Login</Login>
        ) : (
        <>
      <NavMenu>
        <a href="/home">
          <img src="/images/images/home-icon.svg" alt="HOME" />
          <span>HOME</span>
        </a>
        <a href="/">
          <img src="/images/images/search-icon.svg" alt="HOME" />
          <span>SEARCH</span>
        </a>
        <a href="/">
          <img src="/images/images/watchlist-icon.svg" alt="HOME" />
          <span>WATCHLIST</span>
        </a>
        <a href="/">
          <img src="/images/images/original-icon.svg" alt="HOME" />
          <span>ORIGINALS</span>
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

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  rigth: 0;
  height: 70px;
  width: 100%;
  background-color: #090b13;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 3;
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
const SignOut=styled.div`
text-align: center;
position: relative;
margin-right: 40px;
height: 48px;
width: 48px;
display: flex;
cursor: pointer;
align-items: center;
justify-content: center;
${UserImg}{
    border-radius: 50%;
    width: 100%;
    height: 100%;
    border: 2px solid #f9f9f9;

}
&:hover{
    ${DropDown}{
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

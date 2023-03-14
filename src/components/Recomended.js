// import styled from "styled-components";
// import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { selectRecommend } from "../features/movies/movieSlice";
// import { SelectImages } from "../features/APISlice/ApiSlice";

// const Recomended = (props) => {
//     const movies = useSelector(selectRecommend);
//     const ApiImg = useSelector(SelectImages);

//     return(
//         <Container>
//             <h4>hi there</h4>
//             <Content>
//                {ApiImg &&
//                 ApiImg.map((Apimovie,key)=>(
//                     <Wrap key={key}>
//                         {Apimovie.id}
//                         <Link to={"/detail/"+Apimovie.id}>
//                             <img src={Apimovie.image} alt={Apimovie.title}/>
//                         </Link>
//                     </Wrap>
//                 ))}
//             </Content>
//         </Container>
//     );
// };


// const Container = styled.div`
// padding: 0 0 26px;
// overflow: hidden;

// `;

// const Content = styled.div`
// display: grid;
// grid-gap: 25px;
// gap: 25px;
// grid-auto-flow: column;
// grid-auto-columns: 21%;
// overflo-x:auto; ;

// overscroll-behavior-inline: contain;
// // padding: 20px 0px 20px 20px;
// // grid-template-columns: repeat(auto, minmax(4, 3fr));
// max-width: 100%;
// ...
// &::-webkit-scrollbar {
//     display: none;
//     ...


  
//     // -webkit-overflow-scrolling: touch;
 
// @media (max-width: 768px) {
//     grid-template-columns: repeat(2, minmax(0, 1fr));
// }
// `;



// const Wrap = styled.div`
// // overflow-x: scroll; 
// // overflow-y: hidden;
// padding-top: 56.25%;
// border-radius: 10px;
// box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
// rgb(0 0 0 / 73%) 0px 16px 10px -10px;
// cursor: pointer;
// overflow: ;
// position: relative;
// transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
// border: 3px solid rgba(249, 249, 249, 0.1);
// scroll-snap-type: x mandatory; 
//   Wrap > * {

//     scroll-snap-align: start;
//     }
// img{
//     inset: 0px;
//     display: block;
//     height: 100%;
//     overflow: scroll;
//     position: absolute;
//     object-fit: cover;
//     opacity: 1;
//     transition: opacity 500ms ease-in-out 0s;
//     width: 100%;
//     z-index: 1;
//     top: 0;
// }
// &:hover {
//     box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
//     rgb(0 0 0 / 72%) 0px 30px 22px -10px;
//     transform: scale(1.05);
//     border-color: rgba(249, 249, 249, 0.8);
// }
// `;
//     export default Recomended;
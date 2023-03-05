import Styled from "styled-components";

const Login =(props) =>{
    return (
        <Container>
            <Content>
                <CTA>
                    <CTALogoOne src="/images/images/cta-logo-one.svg" alt="dckjnjkd" />
                    <SingUp>GET ALL THERE</SingUp>
                    <Dis>    galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</Dis>
                    <CTALogoTwo src="/images/images/cta-logo-two.png" ></CTALogoTwo>
                </CTA>
                <BgImage />
            </Content>
        </Container>
    )
}
const Container = Styled.section`
overflow: hidden;
display: flex;
flex-direction: column;
text-align: center;
height: 100vh;
`;

const Content = Styled.div`
margin-bottom: 10vw;
width: 100%;
position : relative;
min-height: 100vh;
box-sizing: border-box;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 80px 40px;
color: white;
`;

const BgImage = Styled.div`
height: 100%;
background-position: top;
background-size: cover;
position: absolute;
top: 0;
right: 0;
left: 0;
background-repeat: no-repeat;
background-image: url("/images/images/login-background.jpg");
z-index: -1;
`;

const CTA= Styled.div`
max-width: 550px;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`;
const CTALogoOne = Styled.img`
margin-bottom: 12px;
max-heigth: 600px;
min-width: 1px;
display: block;
width: 100%;
`;
const SingUp = Styled.a`
font-weight: bold;
color: #f9f9f9;
background-color: #0063e5;
margin-bottom: 12px;
width: 100%;
letter-spacing: 1.5px;
font-size: 18px; 
padding: 10px 0;
border: 1px solid transparent;
border-radius: 4px;
cursor: pointer;  
&:hover{
    background-color: #0483ee;
}
`;

const Dis = Styled.p`
color: hsla(0,0%,75.3%,1);
font-size: 11px;
margin: 0 0 24px;
line-height: 1.6;
letter-spacing: 1.5px;
`;

const CTALogoTwo = Styled.img`
max-width: 600px;
margin-bottom: 20px;
display: inline-block;
vertical-align: bottom;
width: 100%;
`;
export default Login;
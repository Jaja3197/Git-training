import React from "react";
import { Header } from "../components";
import logo from "../images/NetflixLogo.png";
import * as ROUTES from "../constants/routes"; 
import background from "../images/background.jpeg";
import { Container } from "../components/emform/styles/emform";

export default function Signin(){

    return (
    <>
  <div style={{ backgroundImage: `url(${background})`, height: "100vh" }}>
  <Header>
            <Header.Logo to={ROUTES.HOME} alt="Netflix" src={logo}/>

            <Header.Frame>
          
            <Header.ButtonLink to={ROUTES.SIGN_IN}>Sign In</Header.ButtonLink>
           
            </Header.Frame>
</Header>
</div>
    </>
)}

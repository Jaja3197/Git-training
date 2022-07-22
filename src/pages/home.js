import React from "react";
import {Feature, EmForm} from "../components";
import { Header } from "../components";
import logo from "../images/NetflixLogo.png";
import * as ROUTES from "../constants/routes"; 
import background from "../images/background.jpeg";
import Signin from "./signin";
import { Container } from "../components/header/styles/header";

export default function Home() {
    return (
        <div style={{ backgroundImage: `url(${background})`, height: "100vh" }}>

        <Header>
            <Header.Logo to={ROUTES.HOME} alt="Netflix" src={logo}/>

            <Header.Frame>
          
            <Header.ButtonLink to={ROUTES.SIGN_IN}>Sign In</Header.ButtonLink>
           
            </Header.Frame>
        </Header>
       

        <Feature>
            <Feature.Title>
            Unlimited movies, <br/> TV shows and more.
            </Feature.Title>

            <Feature.SubTitle>
            Watch anywhere. Cancel anytime
            </Feature.SubTitle>

            <Feature.Info>
            Ready to watch? Enter your email to create or restart your membership.
            </Feature.Info>

            <EmForm>
                <EmForm.Input placeholder="Email adress"/>
                <EmForm.Button> Get Started > </EmForm.Button>
            </EmForm>

        </Feature>
        </div>
    )}

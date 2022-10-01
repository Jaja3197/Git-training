import React from "react";
import {Feature, EmForm} from "../components";
import { Header } from "../components";
import * as ROUTES from "../constants/routes"; 


export default function Home() {
    return (
        <div style={{ backgroundImage: `url(${"/images/background.jpeg"})`, height: "100vh" }}>

        <Header>
            <Header.Logo to={ROUTES.HOME} alt="Netflix" src={"/images/NetflixLogo.png"}/>

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

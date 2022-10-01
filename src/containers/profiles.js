import React from "react";
import * as ROUTES from "../constants/routes";
//import logo from "../images/NetflixLogo.png";
import { Header, Profiles } from "../components";



export function SelectProfileContainer({user, setProfile}){
    return ( 
    <>
    <div style={{ backgroundColor: "black", height: "100vh" }}>
    <Header bg={false}>
    <Header.Logo to={ROUTES.HOME} alt="Netflix" src={"/images/NetflixLogo.png"}/>
    </Header>

    <Profiles>
        <Profiles.Title>Who´s watching?</Profiles.Title>
        <Profiles.List>
    
            <Profiles.User
            onClick={() => setProfile ({
                            displayName: user.displayName,
                            photoURL: user.photoURL,
            })} >
                <Profiles.Picture src={user.photoURL} />
                <Profiles.Name>{user.displayName}</Profiles.Name>
            </Profiles.User>
        </Profiles.List>
    </Profiles>
    </div>
    </>
    );}
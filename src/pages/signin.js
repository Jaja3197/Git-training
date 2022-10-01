import React, {useState, useContext} from "react";
import {FirebaseContext} from "../context/firebase"
import { Header } from "../components";
import * as ROUTES from "../constants/routes"; 
import {Form} from "../components";  
import {useNavigate} from "react-router-dom";
//useNavigate allows to push to different pages on an action


export default function Signin(){
const navigate = useNavigate();
const [emailAddress, setEmailAddress] = useState("");
const [password, setPassword] = useState("");
const [error, setError] = useState("");
const {firebase} = useContext(FirebaseContext)

//Check form input elements are valid
const isInvalid = password === "" || emailAddress ==="";
const handleSignin = (event) => {
    event.preventDefault();

    firebase.auth()
    .signInWithEmailAndPassword(emailAddress, password)
    .then(() => {
        //push to the browse page
    navigate(ROUTES.BROWSE);
    })
    //keby nastane error
    .catch((error)=> {
        //vyprázdni emailovú adresu
        setEmailAddress("");
        setPassword("");
        setError(error.message);
    });
};

//email and password
    return (
    <>
  <div style={{ backgroundImage: `url(${"/images/background.jpeg"})`, height: "100vh" }}>
  <Header>
            <Header.Logo to={ROUTES.HOME} alt="Netflix" src={"/images/NetflixLogo.png"}/>

            <Header.Frame>
          
            <Header.ButtonLink to={ROUTES.SIGN_IN}>Sign In</Header.ButtonLink>
           
            </Header.Frame>
            </Header>
            <Form>
                <Form.Title>Sign In</Form.Title>
    
                {error && <Form.Error>{error}</Form.Error>} 

                <Form.Base onSubmit={handleSignin} method="POST">

                <Form.Input placeholder="Email address" 
                                value={emailAddress} 
                                onChange={({target}) => setEmailAddress(target.value)}   />

                    <Form.Input placeholder="Password" 
                                autoComplete="off"
                                type="password"
                                
                                value={password} 
                                onChange={({target}) => setPassword(target.value)}
                                />    




                  <Form.Submit disabled={isInvalid} type="submit">Sign In</Form.Submit>
                  


                </Form.Base>

                <Form.Text>
                    
                    New to Netflix? <Form.Link to="/signup">Sign up now.</Form.Link>
                    
                </Form.Text>
<Form.TextSmall>
    This page is protected by Google reCAPTCHA to ensure your´re not a bot. Learn more.
</Form.TextSmall>
            </Form>

</div>
    </>
)}

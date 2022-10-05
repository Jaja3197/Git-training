import React, {useState, useContext} from "react";
import {FirebaseContext} from "../context/firebase";
import { Header } from "../components";
import * as ROUTES from "../constants/routes"; 
import {Form} from "../components";  
import {useNavigate} from "react-router-dom";

export default function Signup(){
    const navigate = useNavigate();
    const [emailAddress, setEmailAddress] = useState("");
    const [firstName, setFirstName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const {firebase} = useContext(FirebaseContext);

    //Check form input elements are valid
const isInvalid = firstName === "" || password === "" || emailAddress ==="";


const handleSignup = (event) => {
    event.preventDefault();

    firebase.auth()
    .createUserWithEmailAndPassword(emailAddress, password)
    .then((result) =>
    result.user.updateProfile({displayName: firstName,
                               photoURL: Math.floor(Math.random() *5 ) +1 , 
                                //vyberie náhodný obrázok 1-5
    //ak registrácia prebehla úspešne, ideme na stránku browse
    }).then(() => {
       navigate(ROUTES.BROWSE);
    })
    ).catch((error) => {
        setEmailAddress("");
        setFirstName("");
        setPassword("");
        setError(error.message);
    })
};

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
                <Form.Title>Sign Up</Form.Title>
    
                {error && <Form.Error>{error}</Form.Error>} 

                <Form.Base onSubmit={handleSignup} method="POST">

                <Form.Input placeholder="First name" 
                                value={firstName} 
                                onChange={({target}) => setFirstName(target.value)}   />

                <Form.Input placeholder="Email address" 
                                value={emailAddress} 
                                onChange={({target}) => setEmailAddress(target.value)}   />

                <Form.Input placeholder="Password" 
                                autoComplete="off"
                                type="password"
                                value={password} 
                                onChange={({target}) => setPassword(target.value)}
                                />    

                  <Form.Submit disabled={isInvalid} type="submit">Sign Up</Form.Submit>
                  


                </Form.Base>

                <Form.Text>
                    
                    Already a user? <Form.Link to="/signin">Sign in now.</Form.Link>
                    
                </Form.Text>
<Form.TextSmall>
    This page is protected by Google reCAPTCHA to ensure your´re not a bot. Learn more.
</Form.TextSmall>
            </Form>

</div>
    </>


)}
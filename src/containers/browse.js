import React, {useState, useContext, useEffect} from "react";
import { SelectProfileContainer } from "./profiles";
import { FirebaseContext } from "../context/firebase";
import { Header, Cover} from "../components";
import * as ROUTES from "../constants/routes"; 

export function BrowseContainer ({slides}){

// Set category to either films or series
const [category, setCategory] = useState("series");
// Search by keyword
const [searchTerm, setSearchTerm] = useState("");
// Store current user profile
const [profile, setProfile] = useState({});
const [loading, setLoading] = useState(true);
// Display appropriate content depending on the search term
const [slideRows, setSlideRows] = useState([]);

// Get user from firebase
const { firebase } = useContext(FirebaseContext);
const user = firebase.auth().currentUser || {};


    //if profile.displayname change, do the spinner
     // Remove the loading user effect after 3 seconds
useEffect (() => {
    console.log("profile" , profile);
    setTimeout(() => {
        //after 3 seconds set loading back to false
        setLoading(false);
    }, 3000);
}, [profile.displayName]);

//if we have profile.displayname -> display browse page, if not show select profile container

    return profile.displayName ? (
        <>
   

<div style={{ backgroundImage: `url(${"/images/strangerthings.webp"})`, height: "100vh",  backgroundSize: "100vw"}}>
        <Header>
            
            <Header.Group>
          <Header.Logo to={ROUTES.HOME} alt="Netflix" src={"/images/NetflixLogo.png"}/>
                <Header.TextLink >Series</Header.TextLink>
                <Header.TextLink >Films</Header.TextLink>
         
          </Header.Group>

          <Header.Group>

          <Header.Search
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />

          <Header.Profile>
              <Header.Picture src={user.photoURL} />
              <Header.Dropdown>

                <Header.Group>
                  <Header.Picture src={user.photoURL} />
                  <Header.TextLink>{user.displayName}</Header.TextLink>
                </Header.Group>

                <Header.Group>
                  <Header.TextLink onClick={() => firebase.auth().signOut()}>
                    Sign Out
                  </Header.TextLink>
                </Header.Group>

              </Header.Dropdown>
            </Header.Profile>
          </Header.Group>

        </Header>
        
        <Cover>
         <Cover.Feature>
          <Cover.FeatureCallOut>Watch Stranger Things Now</Cover.FeatureCallOut>
          <Cover.Text>
          Set in March 1986, eight months after the events of the third season. Eddie Munson, the leader of a Dungeons & Dragons group called the Hellfire Club, becomes the prime murder suspect and is hunted down by the Hawkins High School basketball team, led by Jason Carver, who believe that Eddie killed Jason's girlfriend, Chrissy Cunningham, using satanic powers. 
          </Cover.Text>
          <Cover.PlayButton>Play</Cover.PlayButton>
        </Cover.Feature>
        </Cover>
</div>
        </>
    ) : (
    <SelectProfileContainer user={user} setProfile={setProfile} /> 
);}

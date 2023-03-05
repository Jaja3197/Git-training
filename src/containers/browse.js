import React, {useState, useContext, useEffect} from "react";
import { SelectProfileContainer } from "./profiles";
import Fuse from "fuse.js";
import { FirebaseContext } from "../context/firebase";
import { Header, Cover, Card, Player} from "../components";
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


useEffect(() => {
  setSlideRows(slides[category]);
  //if slides change, set slidesRows again, when category change go ahead and rerander
}, [slides, category]);


  // Live search with fuse.js
  useEffect(() => {
    const fuse = new Fuse(slideRows, {
      keys: ["data.title"],
    });
    const results = fuse.search(searchTerm).map(({ item }) => item);

    if (slideRows.length > 0 && searchTerm.length > 3 && results.length > 0) {
      setSlideRows(results);
    } else {
      setSlideRows(slides[category]);
    }
  }, [searchTerm]);


//if we have profile.displayname -> display browse page, if not show select profile container

    return profile.displayName ? (
        <>
   

<div style={{ backgroundImage: `url(${"/images/strangerthings.webp"})`, height: "100vh",  backgroundSize: "100vw"}}>
        <Header>
            
            <Header.Group>
          <Header.Logo to={ROUTES.HOME} alt="Netflix" src={"/images/NetflixLogo.png"}/>
                
            <Header.TextLink active={category === 'series' ? 'true' : 'false'} onClick={() => setCategory('series')}
            //if the category, which is currently set is series, then apply true (font weight 700)
            //on click it set category to series, which will trigger (rerender useffesct)
            >
              Series
            </Header.TextLink>

            <Header.TextLink active={category === 'films' ? 'true' : 'false'} onClick={() => setCategory('films')}>
              Films
            </Header.TextLink>
         
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

<div style={{ background: "black", paddingTop: "150px"}}>
<Card.Group>
        {slideRows.map((slideItem) => (
          // to make unique key  
          <Card key={`${category}-${slideItem.title.toLowerCase()}`}>
            <Card.Title>{slideItem.title}</Card.Title>
      
            <Card.Entities>
              {slideItem.data.map((item) => (
                <Card.Item key={item.docId} item={item}>
                  <Card.Image
                    src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`}
                  />
                  <Card.Meta>
                    <Card.SubTitle>{item.title}</Card.SubTitle>
                    <Card.Text>{item.description}</Card.Text>
                  </Card.Meta>
                </Card.Item>
              ))}
            </Card.Entities>
       
            <Card.Feature category={category}>
             <Player>
                <Player.Button />
                <Player.Video src="images/bunny.mp3" />
              </Player>
            </Card.Feature>
           
          </Card>
        ))}
      </Card.Group>
      </div>
        </>
             
    ) : (
      
    <SelectProfileContainer user={user} setProfile={setProfile} /> 
);}

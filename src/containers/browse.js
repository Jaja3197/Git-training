import React, {useState, useContext, useEffect} from "react";
import { SelectProfileContainer } from "./profiles";
import { FirebaseContext } from "../context/firebase";
import {Loading} from "../components";

export function BrowseContainer ({slides}){
    const [profile, setProfile] = useState({});
    const [loading, setLoading] = useState(true);
    const {firebase} = useContext(FirebaseContext);
    //if user not exist - empty object
    const user = firebase.auth().currentUser || {};

useEffect (() => {
    console.log("profile" , profile);
    setTimeout(() => {
        setLoading(false);
    }, 5000);
}, [profile.displayName]);

//if we have profile.displayname ->display browse page, if not show select profile container

    return profile.displayName ? (
      loading ? <Loading src={user.photoURL}  /> : null)
    : (
    <SelectProfileContainer user={user} setProfile={setProfile} /> 
);}

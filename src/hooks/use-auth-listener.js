import { useContext, useEffect, useState } from "react";
import { FirebaseContext } from "../context/firebase";

// user stay in application (doesnt matter if is sign in/out)

export default function useAuthListener(){
    //check if the user is in local storage
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("authUser")));
    //lisen firebase on autentificatiion state change
    const { firebase } = useContext(FirebaseContext);
// listens on the first hit of the page
    useEffect(() =>{
const listener = firebase.auth().onAuthStateChanged((authUser) => {
    if (authUser) { 
        // uloženie udajoov
        localStorage.setItem("authUser", JSON.stringify(authUser));
        setUser(authUser);
    } else {
        localStorage.removeItem("authUser");
        setUser(null);
    }
});
//cleanup the listener
return () => listener();

    }, []);

return {user};
}
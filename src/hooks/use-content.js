import { useContext, useEffect, useState } from "react";
import { FirebaseContext } from "../context/firebase";

//target will be films and series

export default function useContent(target){
    //target - seriest/films
    const [content, setContent] = useState([]);
    const { firebase } = useContext(FirebaseContext);

    useEffect(() => {
        firebase
        //dáta z firebase
        .firestore()
        //či fil / serial
        .collection(target)
        .get()
        //take snapshot of data
        .then((snapshot) => {

                    const allContent = snapshot.docs.map((contentObj) => ({
                        //spread content obj  
                        ...contentObj.data(),
                        //docId will be unique for each one   
                        docId: contentObj.id, 
                    }));

                    setContent(allContent);
                })
                .catch((error) => { console.log(error.message);});

    }, []);

    return {[target]: content};
    
    }

    

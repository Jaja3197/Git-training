import { render } from "@testing-library/react";
import React from "react";
import {Routes, Route, Navigate} from "react-router-dom";
//When the user is logged in, redierect him to the browse

// Is the user logged in?

/*
export function IsUserRedirect ({user, loggedInPath, children, element, ...rest }){

    return (
        <Routes>
        <Route
        {...rest}
        render = {()=> {
         
            if (!user){
                return children;
            }
//ak je user, redirect them to loggedInPath
            if (user) {
                return (
                    <Navigate to={{
                        pathname: loggedInPath,
                    }} /> 
                );
            }
return null;

        }} 
        /> </Routes>
    )
}
*/
export function IsUserRedirect({ user, loggedInPath, children, ...rest}) {
      //ak nie je user object  => a stlačia SIgn In - children budú componenty pre page Sign In
    if (!user) {
      return children; 
    }
    if (user) {
      return <Navigate to={{ pathname: loggedInPath }} />;
   
    }
    return null;
  }

  // if they are not logged in and try to access browse page -> redirect them to sign in page

export function ProtectedRoute ({user, children, ...rest}){

          if (user ) {
                return children;
            } 
            if (!user) {
                return <Navigate to="/signin"/>;
            }
          
            return null;
          }
        
  //ak je user, return children -> to je v tomto prípade browse page   
import React from 'react';
import * as ROUTES from "./constants/routes";
import {Route, BrowserRouter as Router, Routes, Switch} from "react-router-dom";
import {Home, Browse, Signin, Signup} from "./pages";
import { IsUserRedirect, ProtectedRoute } from './helpers/routes';

export default function App() {

const user = null;

  return (
<Router>

<Routes>
        <Route exact  path={ROUTES.SIGN_IN} element={
            <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_IN} >
              <Signin /> 
            </IsUserRedirect>  } />

        <Route exact path={ROUTES.SIGN_UP} element={
            <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_UP} >
              <Signup /> 
            </IsUserRedirect>  } />

            <Route  path={ROUTES.BROWSE} element={
            <ProtectedRoute user={user} path={ROUTES.BROWSE} >
              <Browse /> 
            </ProtectedRoute>  } />

            <Route  path={ROUTES.HOME} element={
            <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.HOME} >
              <Home/> 
            </IsUserRedirect>  } /> 
</Routes>

</Router>

  );}

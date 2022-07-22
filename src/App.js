import React from 'react';
import * as ROUTES from "./constants/routes";
import {Route, BrowserRouter as Router, Routes, Switch} from "react-router-dom";
import {Home, Browse, Signin, Signup} from "./pages";

export default function App() {
  return (
<Router>
  <Routes>
    <Route exact path='/browse' element={<Browse/>}/>
 </Routes>

 <Routes>
    <Route exact path='/signin' element={<Signin/>}/>
</Routes>

<Routes>
    <Route exact path='/signup' element={<Signup/>}/>
</Routes>

<Routes>
    <Route exact path={ROUTES.HOME} element={<Home/>}/>
    </Routes>
</Router>

  );}

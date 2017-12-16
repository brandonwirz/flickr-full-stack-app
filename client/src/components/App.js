import React from 'react';
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";
import {Switch, Route} from "react-router-dom";
import './index.css';
import Search from "./Search";
import AddPhotos from "./addPhotos";

// import './App.css';
export default function App(props) {
    return (
        <div>

          <Navbar/>
              {/* <Switch> */}
                  <Route exact path="/" component={Search}/>
                  <Route path="/edit" component={AddPhotos}/>
              {/* </Switch> */}
              {/* <h1>Hi!</h1> */}
          <Footer/>
        </div>
    )
}

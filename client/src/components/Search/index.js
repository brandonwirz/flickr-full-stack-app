import axios from "axios"
import React, {Component} from "react";
import {connect} from "react-redux";
import "./search.css"
// import {Search} from "../../redux/pinterest";


export default class Search extends Component {
    constructor() {
        super();
        this.state = {
            img: "",
            pins: "",

        }
    }
    // componentDidMount(){
    //     window.location = ""
    // }

    render(){

        return( <div className="search">
          <input type="text"/><button>search</button>
        </div>
      )
    }
}

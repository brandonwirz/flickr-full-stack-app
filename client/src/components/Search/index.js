import axios from "axios"
import React, {Component} from "react";
import {connect} from "react-redux";
import {addPhotos} from "../../redux/flickr"
import "./search.css"
// import {Search} from "../../redux/flickr;

class Search extends Component {
    constructor(props) {
        super(props);
            this.state = {
                img: this.props.img
        }
    }

    componentDidMount(){
          this.props.addPhotos();
  }

  // const styles = {
  //           width:"150px",
  //           height:"auto"
  // }
    render() {

        return(
          <div className="search">
          <input type="text"
                 value={this.state.img}
                 onChange={event => this.onInputeChange(event.target.value)}/>
          <button>search</button>
          {/* <div>{this.props.photos.perpage}</div> */}
          {/* <button type="button" class="btn btn-primary" id="sq">Square [75X75]</button> */}

        </div>

      );
    }
    onInputChange(img) {
        this.setState({img});
        this.props.onSearchTermChange(img);
    }
  }

  export default connect(state => state, {addPhotos})(Search)

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
  onInputChange(img) {
      this.setState({img});

  }
    render() {
        return(
          <div className="search">
              {/* <form onSubmit={}>
                    <input type="text"
                           placeholder="search"
                           value={this.state.img}
                           onChange={(event) => this.onInputeChange(event.target.value)}/>
                    &nbsp;<button>Flickr search</button>
              </form> */}


              <div className="img-container">
                  <div>{this.props.flickr.galleries.getPhotos}</div>
                  {/* flickr.photos.search */}
              </div>


        </div>
      );
   }
}

  export default connect(state => state, {addPhotos})(Search)

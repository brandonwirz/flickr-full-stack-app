import axios from "axios"
import React, {Component} from "react";
import {connect} from "react-redux";
import {addPhotos} from "../../redux/addFlickrImages"
import "./search.css"
// import {Search} from "../../redux/flickr;

class Search extends Component {
    constructor(props) {
        super(props);
            this.state = {
                img: this.props.img,
                search:''
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
// const filterSearches = this.props.flickr.filter(
//       (search) => {
//         return search.name.indexOf(this.state.search) !== -1;
//   }
// );


       createImageArray() {
           return this.props.flickr.photos.photo.map((image, i) => {
          // return filterSearches.photos.photo.map((image, i) => {
              return <div key={image.name + i}>
                    <img src={`http://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`} alt=""/>
                      <h3>{image.title}</h3>
                      <h3>{image.name}</h3>
                      <h6>{image.id}</h6>
                  <hr/>
              </div>
      });
    }
  // }
// a href="'+myresult_size.url+'" target="_blank"


    render() {
    return(
          <div className="search">
                <form onSubmit={this.state.img}>
                      <input type="text"
                             placeholder="Search"
                             value={this.state.img}
                             onChange={(e) => this.onInputeChange(e.target.value)}/>
                      &nbsp;<button>Flickr search</button>
                </form>


              <div>
                  {this.createImageArray()}
                   {/* <div>{this.props.flickr.galleries}</div> */}
                {/* <h2>{this.props.flickr.photos.photo[0].title}</h2> */}
                {/* <h2>this.props.flickr.photos.photo.title</h2>
                <h2>this.props.flickr.photos.photo.id</h2> */}
              </div>








        </div>
      );
   }
}

  export default connect(state => state, {addPhotos})(Search)

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
                img: this.props.value,
                search:""
        };
          this.onInputChange = this.onInputChange.bind(this)
          this.onSubmit = this.onSubmit.bind(this)
    }

// componentDidMount(){
//       this.props.addPhotos();
// }

onInputChange(event) {
      event.preventDefault();
      this.setState({search: event.target.value.substr(0,40)});//up to 40 characters
      // this.props.addPhotos(event.target.value);
}

onSubmit(event) {
  event.preventDefault()
    // this.setState({search: event.target.value.substr(0,40)});//up to 40 characters
    this.props.addPhotos(this.state.search);
}

// let filterSearches = this.props.flickr.filter((search) => {
//         return search.name.indexOf(this.state.search) !== -1;
//   });



  render() {
      const photos = this.props.flickr.photos.photo.map((image, i) => {
       // return filterSearches.map((image) => {
           let src = `http://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_q.jpg`
           return <div className="imageThumbs" key={image.id}>
                  <img src={src} alt={image.title}/>
                   {/* <h6>{image.id}</h6> */}
     </div>
 });
       return(
          <div className="search">
                  <form onSubmit={this.onSubmit}>
                      <input type="text"
                             placeholder="Search here"
                             value={this.state.value}
                             onChange={this.onInputChange}
                                                           />
                      &nbsp;<button>Flickr search</button>
                  </form>


                       <div>{photos}</div>

          </div>
        );
     }
}

  export default connect(state => state, {addPhotos})(Search)

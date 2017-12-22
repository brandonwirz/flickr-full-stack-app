import axios from "axios"
import React, {Component} from "react";
import {connect} from "react-redux";
import {searchPhotos, savePhoto, addBoards} from "../../redux/addFlickrImages";

// import {SavePhoto} from "../SavePhoto";
import "./search.css"
// import {Search} from "../../redux/flickr;

class Search extends Component {
    constructor(props) {
        super(props);
            this.state = {
                board: "",
                search:"",
        };
        this.onInputChange = this.onInputChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.handleSave = this.handleSave.bind(this)
  }

componentDidMount(){
      this.props.addBoards();
}

onInputChange(event) {
      event.preventDefault();
      this.setState({[event.target.name]: event.target.value.substr(0,40)});//up to 40 characters
}

onSubmit(event) {
  event.preventDefault()
    this.props.searchPhotos(this.state.search);
}

handleSave( photo){
    this.props.savePhoto(this.state.board, photo);
}

// let filterSearches = this.props.flickr.filter((search) => {
//         return search.name.indexOf(this.state.search) !== -1;
//   });

render() {
    const photos = this.props.flickr.photos.map((image, i) => {
         let src = `http://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_q.jpg`
         return <div className="imageThumbs" key={image.id}>
                     <a href={src} key={image.id} target="_blank" className="imageBox">
                     <img src={src} alt={image.title}/>
                     </a>
                     <pre></pre>
                     <button onClick={() => this.handleSave(src)}>save photo</button>

               </div>
            }
        );
       return(
          <div className="search">
                <form onSubmit={this.onSubmit}>
                     <input type="text"
                     placeholder="Search here"
                     value={this.state.value}
                     onChange={this.onInputChange}
                     name="search"/>
                     &nbsp;<button>Flickr search</button>
                     <select name="board" id="" onChange={this.onInputChange}>
                       {this.props.flickr.boards.map((board) => <option value={board._id}>{board.title}</option>)}
                     </select>
                </form>
              <div>{photos}</div>
          </div>
        );
    }
}

export default connect(state => state, {searchPhotos, savePhoto, addBoards})(Search)

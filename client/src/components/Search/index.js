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
                search:""
        };
    this.onInputChange = this.onInputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleSave = this.handleSave.bind(this);
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

handleSave(photo){
    this.props.savePhoto(this.state.board, photo);
}

// updateInputs(e){
//       if(e.target.type === "checkbox"){
//           this.setState({completed: e.target.checked});
//       } else {
//           this.setState({[e.target.name]:e.target.value});
//       }
//   }

render() {
    const photos = this.props.flickr.photos.map((image, i) => {
         let src = `http://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_q.jpg`
         return <div className="imageThumbs" key={image.id}>
                     <a href={src} key={image.id} target="_blank" className="imageBox">
                     <img src={src} alt={image.title}/>
                     </a><br/>
                     <button className="save-button" onClick={() => this.handleSave(src)}>save photo</button>
                     <input id="checkBox" type="checkbox" onChange={this.updateInputs} name="completed"/>
               </div>
            }
        );
    return(
          <div className="search">
                <form className="form" onSubmit={this.onSubmit}>
                     <input className="input-search" type="text"
                     placeholder=" Search"
                     value={this.state.value}
                     onChange={this.onInputChange}
                     name="search"/>
                     <button className="flickr-button">Flickr search</button>&nbsp;
                     <select name="board" id="" onChange={this.onInputChange}>
                     {this.props.flickr.boards.map((board) => <option value={board._id}>{board.title}</option>)}
                     {/* {this.props.flickr.boards.map((board2) => <option value={board2._id}>{board2.title}</option>)} */}
                     </select>
                 </form>
              <div>{ photos }</div>
           </div>
        );
    }
}

export default connect(state => state, {searchPhotos, savePhoto, addBoards})(Search)

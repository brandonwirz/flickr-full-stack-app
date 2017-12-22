import React, {Component} from "react";
import {connect} from "react-redux";
// import {getPhotos} from "../../redux/flickr";
import {searchPhotos, savePhoto, addBoards} from "../../redux/addFlickrImages";
import {Link} from "react-router-dom";
import "./search.css"

class SavePhoto extends Component {
      constructor(props){
          super(props);
          this.state = {
                boards: [],
          }
    }

componentDidMount(){
      this.props.addBoards();
}


render(){
        return (
          <div className="img-container">
              <div name="board">
                 {this.props.flickr.boards.map((board) => {
                   return (
                     <div>
                     <h1 className="title">{board.title}</h1>
                     {board.img.map(photoUrl=>{
                       return (
                         <img className="imageThumbs" src={photoUrl}/>
                       )
                     })}
                   </div>
                 )
                 })}
            </div>
          </div>
        )
    }
}


export default connect(state => state, {savePhoto, addBoards})(SavePhoto)

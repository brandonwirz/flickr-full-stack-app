import React, {Component} from "react";
import {connect} from "react-redux";
// import {getPhotos} from "../../redux/flickr";
import {savePhoto} from "../../redux/addFlickrImages";
import {Link} from "react-router-dom";
import "../Search/search.css"

class SavePhoto extends Component {
      constructor(props){
          super(props);
          this.state = {
                board: "",
                img: this.props.value
          }
          this.handleChange = this.handleChange.bind(this);
          this.handleSubmit = this.handleSubmit.bind(this);
    }


handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
}


// toggleCheckbox = (check) => {
//     if (this.selectedImages.has(check)) {
//       this.selectedImages.delete(check);
//     } else {
//       this.selectedImages.add(check);
//    }
// }

// updateInputs(e){
//     if(e.target.type === "checkbox"){
//         this.setState({completed: e.target.checked});
//     } else {
//         this.setState({[e.target.name]:e.target.value});
//     }
// }

render(){
     const styles = {
            position:"absolute",
            top:"100px",
            left:"50px",
            right:"50px",
            textAlign: "center",
            padding:"50px"
        }
        return (
          <div>
              <div className="imageThumbs"></div>
              <h1>HEllo</h1>

         </div>
        )
    }
}


export default connect(state => state, {savePhoto})(SavePhoto)



// export default connect(null, {})();

import React, {Component} from "react";
import {connect} from "react-redux";
// import {getPhotos} from "../../redux/flickr";
import {savePhoto} from "../../redux/addFlickrImages"
import {Link} from "react-router-dom";


class SavePhoto extends Component {
      constructor(props){
          super(props);
          this.state = {
                board: ""
          }
          this.handleChange = this.handleChange.bind(this);
          this.handleSubmit = this.handleSubmit.bind(this);
    }


handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
}

handleSubmit(e){
    e.preventDefault();
    this.props.savePhoto(this.state);
    this.setState({
            board: ""
    });
}

toggleCheckbox = (check) => {
    if (this.selectedImages.has(check)) {
      this.selectedImages.delete(check);
    } else {
      this.selectedImages.add(check);
   }
}

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
            padding:"10px"
        }
        return (
              <div className=></div>

        )
    }
}


export default connect(state => state, {savePhoto})(SavePhoto)



// export default connect(null, {})();

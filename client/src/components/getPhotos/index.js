import React, {Component} from "react";
import {connect} from "react-redux";
// import {getPhotos} from "../../redux/flickr";
import {Link} from "react-router-dom";


class GetPhotos extends Component {
      constructor(props){
        super(props);
        this.state = {
          title:"",
            img: "",
            pins: "",
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.handleDelete = this.handleDelete.bind(this)
    }


handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
}

handleSubmit(e){
    e.preventDefault();//because page refreshes
    this.props.add(this.state);

    this.setState({
            title:"",
            img: ""
    });
}
handleDelete(e){
    e.preventDefault();
    this.props.deleteImg();
    console.log(this.props.handleDelete());
}

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

          <form style={styles} onSubmit={this.handleSubmit}>

            {/* <nav className="navbar">
                     <Link to="/"><input type="text"value={this.state.term}/>
                     <button>&nbsp;Search</button></Link>
                       {/* <Link to="/Edit">Edit</Link> */}


              <input name="title"
                     placeholder="Title"
                     value= {this.state.title}
                     type ="text"
                     onChange={this.handleChange}/>
                     &nbsp;

              <input name= "img"
                     placeholder="Image URL"
                     value= {this.state.img}
                     type="text"
                     onChange={this.handleChange}/>

              <button>submit</button>
              {/* <button>delete</button> */}

          </form>
        )

     }
}


// export default connect(null, {add, deleteImg})(AddContactForm)



// export default connect(null, {})();

// import React, {Component} from "react";
// import {connect} from "react-redux";
// import {addPhotos} from "../../redux/pinterest";
//
//
// export default class AddPhotos extends Component {
//     constructor() {
//         super();
//         this.state = {
//             img: "",
//             pins: ""
//         }
//     }
// }
//
// handleChange = (e) => {
//     e.persist();
//     this.setState(prevState => {
//         const img = prevState.img;
//         return {
//             [e.target.name]: e.target.value
//         }
//     });
// }
//
// // handleSubmit = (e) => {
// //     e.preventDefault();
// //     this.props.addQuality(this.state);
// // }
//
// render() {
//     return (
//         <form onSubmit={this.handleSubmit}>
//             <input
//                 value={this.state.quality}
//                 onChange={this.handleChange}
//                 name="quality"
//                 type="text"
//                 placeholder="Quality"/>
//
//             <button>Submit</button>
//         </form>
//     )
//
// }
// }
//
// export default connect(null, {addPhotos})(addPhotos);

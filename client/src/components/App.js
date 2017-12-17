import React, {Component} from 'react';
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";
import {Switch, Route} from "react-router-dom";
import './index.css';
import Search from "./Search";
import AddPhotos from "./addPhotos";


//https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_
//key=821a771c6461a139ea575637fea49d22&per_page=10&format=json&nojsoncallback=1
//flickr api key
const API_KEY = "821a771c6461a139ea575637fea49d22";

class App extends Component{
    constructor(props) {
    super(props);
        this.state = {
              images: [],
              selectedImage: null
  };
  // this.imageSearch("");

}

// imageSearch(term) {
//   flickrSearch({key: API_KEY}, (images) => {
//     this.setState({
//       images: images,
//       // selectedImage: images[0]
//     });
//   })
// }

  render() {
      return (
          <div>
              <Navbar/>
                  <Switch>
                      <Route exact path="/" component={Search}/>
                      <Route path="/edit" component={AddPhotos}/>
                  </Switch>
              <Footer/>
          </div>
    )
  }
}


export default App;

import React, {Component} from 'react';
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";
import {Switch, Route} from "react-router-dom";
import './index.css';
import Search from "./Search";
import GetPhotos from "./getPhotos";


//https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_
//key=821a771c6461a139ea575637fea49d22&per_page=10&format=json&nojsoncallback=1
//flickr api key


class App extends Component{
    constructor(props) {
    super(props);
        this.state = {
              photos: []
  };
     this.handleGetPhotos = this.handleGetPhotos.bind(this);
}
handleGetPhotos(photos){
   this.setState({'photos': photos});
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
                      {/* <Route path="/edit" component={AddPhotos}/> */}
                  </Switch>
              <Footer/>
          </div>
    )
  }
}


export default App;

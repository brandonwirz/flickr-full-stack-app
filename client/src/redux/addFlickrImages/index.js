import axios from "axios";

export function searchPhotos(searchWord) {
        return dispatch => {
        let apiKey = '821a771c6461a139ea575637fea49d22';
        axios.get(`https://api.flickr.com/services/rest/?api_key=${apiKey}&method=flickr.photos.search&format=json&nojsoncallback=1&&per_page=50&page=1&text=${searchWord}`)
            .then(response => {
                console.dir(response)
                dispatch({
                      type: "SEARCH_PHOTOS",
                      item: response.data //.flickr.photos.photo
            });
        })
    }
}

export function savePhoto(photo) {
      return dispatch => {
      axios.post(``)
          .then(response => {
              dispatch({
                  type: "SAVE_PHOTO",
                  data: response.data
            });
        })
    }
}

const defaultObject = {
      photos: {
          photo: []
    }
}
//
export default function reducer(prevState = defaultObject, action) {
    switch (action.type) {
        case "SEARCH_PHOTOS":
            return action.item
        case "SAVE_PHOTO":
            return [...prevState, action.data];
        // case "DELETE_QUALITY":
        //     return prevState.filter(item => item._id !== action.data._id);
        default:
            return prevState;
    }
}

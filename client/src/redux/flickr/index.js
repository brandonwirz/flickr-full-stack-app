import axios from "axios";

export function addPhotos(imgId) {
      return dispatch => {
      axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=821a771c6461a139ea575637fea49d22&per_page=10&format=json&nojsoncallback=1${imgId}`)
        .then(response => {
            console.dir(response)
            dispatch({
                  type: "ADD_PHOTOS",
                  item: response.data
            });
        })
    }
}






//
// export function getPhotos(photos) {
//     return dispatch => {
//         axios.post("/photos", photos)
//             .then(response => {
//                 dispatch({
//                     type: "ADD_PHOTOS",
//                     data: response.data
//                 });
//             });
//     }
// }
//
// export function deletePhoto(id) {
//     return dispatch => {
//         axios.delete(`/photos/${id}`)
//             .then(response => {
//                 dispatch({
//                     type: "DELETE_PHOTO",
//                     data: response.data
//                 });
//             });
//     }
// }

// const defaultObject = {
//   currently: {
//     apparentTemperature: ""
//   }
//
// }
const defaultObject = {
      photos: {
          photo: []
    }
}
//
export default function reducer(prevState = defaultObject, action) {
    switch (action.type) {
        case "ADD_PHOTOS":
            return action.item
        // case "GET_PHOTOS":
        //     return [...prevState, action.item];
        // case "DELETE_PHOTOS":
        //     return action.data;
        default:
            return prevState;
    }
}

// export default function reducer(prevState = defaultObject ,action) {
//       switch(action.type) {
//           case "GET_LOCAL_FORCAST":
//              return action.item;
//           default:
//              return prevState
//       }
// }

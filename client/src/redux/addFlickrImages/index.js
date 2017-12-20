import axios from "axios";

export function addPhotos(searchWord) {
      return dispatch => {
        let apiKey = '821a771c6461a139ea575637fea49d22';
        axios.get(`https://api.flickr.com/services/rest/?api_key=${apiKey}&method=flickr.photos.search&format=json&nojsoncallback=1&&per_page=50&page=1&text=${searchWord}`)
            .then(response => {
                console.dir(response)
                dispatch({
                      type: "ADD_PHOTOS",
                      item: response.data //.flickr.photos.photo
            });
        })
    }
}






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

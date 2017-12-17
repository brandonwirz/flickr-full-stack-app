import axios from "axios";

export function addPhotos(item) {
      return dispatch => {
      axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=821a771c6461a139ea575637fea49d22&per_page=10&format=json&nojsoncallback=1`)
        .then(response => {
            console.dir(response)
            dispatch({
                  type: "ADD_PHOTOS",
                  item//:response.data
            });
        })
    }
}






//
// export function addPhotos(photos) {
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
          perpage: ""
    }
}
//
export default function reducer(prevState = defaultObject, action) {
    switch (action.type) {
        case "ADD_PHOTOS":
            return action.data;
        // case "GET_PHOTOS":
        //     return [...prevState, action.item];
        // case "DELETE_PHOTOS":
        //     return action.data;
        default:
            return prevState;
    }
}
// export function getLocalForcast(lat, long){
//       return (dispatch) => {
//         axios.get(`http://cors.vschool.io?url=https://api.darksky.net/forecast/33722c235dde0e1f98b2c0963306637e/${lat},${long}`)
//         .then(response =>{
//           console.dir(response)
//           dispatch({
//             type: "GET_LOCAL_FORCAST",
//             item: response.data
//
//           })
//       })
//    }
// }
//
// const defaultObject = {
//   currently: {
//     apparentTemperature: ""
//   },
//   daily: {
//     summary: ""
//   }
//
// }
//
// export default function reducer(prevState = defaultObject ,action) {
//       switch(action.type) {
//           case "GET_LOCAL_FORCAST":
//              return action.item;
//           default:
//              return prevState
//       }
// }

import axios from "axios";

export function getPhotos() {
    return dispatch => {
        axios.get("/photos")
            .then(response => {
                dispatch({
                    type: "GET_PHOTOS",
                    item: response.data
                });
            });
    }
}

export function addPhotos(photos) {
    return dispatch => {
        axios.post("/photos", photos)
            .then(response => {
                dispatch({
                    type: "ADD_PHOTOS",
                    data: response.data
                });
            });
    }
}
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
export default function reducer(prevState = [], action) {
    switch (action.type) {
        case "GET_PHOTOS":
            return action.data;
        case "ADD_PHOTOS":
            return [...prevState, action.item];
        case "DELETE_PHOTOS":
            return action.data;
        default:
            return prevState;
    }
}

import axios from "axios";

export function searchPhotos(searchWord) {
      return dispatch => {
      let apiKey = '821a771c6461a139ea575637fea49d22';
      axios.get(`https://api.flickr.com/services/rest/?api_key=${apiKey}&method=flickr.photos.search&format=json&nojsoncallback=1&&per_page=50&page=1&text=${searchWord}`)
          .then(response => {
              console.dir(response)
              dispatch({
                  type: "SEARCH_PHOTOS",
                  item: response.data.photos.photo
            });
        })
    }
}

export function savePhoto(boardId, photo) {
      return (dispatch) => {
      axios.put(`http://localhost:7000/flickr/add-image/${boardId}`, {image: photo})
          .then(response => {
              dispatch({
                  type: "SAVE_PHOTO",
                  data: response.data
            });
        })
    }
}

export function addBoards() {
     return (dispatch) => {
     axios.get(`http://localhost:7000/flickr`)
        .then(response => {
            dispatch({
                type: "GET_BOARDS",
                data: response.data
           });
       })
    }
}

const defaultObject = {
      photos: [],
      boards: []
}


export default function reducer(prevState = defaultObject, action) {
    switch (action.type) {
        case "SEARCH_PHOTOS":
            return {...prevState, photos: action.item}
        case "SAVE_PHOTO":
            return {...prevState, boards: [...prevState.boards, action.data]};
        case "GET_BOARDS":
            return {...prevState, boards: action.data};
        // case "DELETE_QUALITY":
        //     return prevState.filter(item => item._id !== action.data._id);
        default:
            return prevState;
    }
}

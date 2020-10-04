import {getPhotosAPI} from "../api/api";
import {SET_LOADING, SET_PHOTOS_LIST} from "./Constants";

let initialState = {
    photosList: null,
    loading: false
};

export const setPhotosListAC = photosList => ({
    type: SET_PHOTOS_LIST,
    photosList
});
export const setLoading = loading => ({
    type: SET_LOADING,
    loading
});

export const setPhotosListAsync = (page) => {
    return async (dispatch) => {
        let res = await getPhotosAPI.getPhotosAPI(page);
        let data = await res.data;
        dispatch(setPhotosListAC(data));
        //error handling
    }
};

const photosListReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PHOTOS_LIST:
            return {
                ...state,
                photosList: action.photosList,
                loading: false
            }
        case SET_LOADING:
            return {
                ...state,
                loading: action.loading
            }
        default:
            return state
    }
};

export default photosListReducer;

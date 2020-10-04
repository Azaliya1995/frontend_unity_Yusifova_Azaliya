import * as axios from "axios";

export const instance = axios.create({
    baseURL: 'https://api.unsplash.com'
});

export const getPhotosAPI = {
    async getPhotosAPI(page) {
        return instance.get(`photos/?client_id=HGB79C4PnZYJPe7CBKj5MjIyLyu1ihB-tnCLJd8HBTI&page=${page}`)
    }
};

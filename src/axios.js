import axios from "axios";

const instance = axios.create({
    // baseURL: 'http://localhost:5001/clone-80eee/us-central1/api/'  // The API (cloud function) URL
    baseURL: 'https://us-central1-clone-80eee.cloudfunctions.net/api'  // The API (cloud function) URL
})

export default instance;
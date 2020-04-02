import axios from "axios";

const http = axios.create({
    baseURL: "https://cnodejs.org/api/v1"
});

export default http;
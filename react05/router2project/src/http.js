import axios from 'axios';

const HTTP = axios.create({
    baseURL:"https://cnodejs.org/api/v1"
})

export default HTTP;
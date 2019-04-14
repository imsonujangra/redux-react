import axios from 'axios';

const instance = axios.create({
    baseURL : 'https://react-my-burger-51195.firebaseio.com/'
})

export default instance;
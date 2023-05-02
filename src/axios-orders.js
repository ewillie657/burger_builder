import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-1f7a9.firebaseio.com/'
});

export default instance;
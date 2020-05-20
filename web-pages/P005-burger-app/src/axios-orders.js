import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-my-burger-fa6ab.firebaseio.com/'
});

export default instance;
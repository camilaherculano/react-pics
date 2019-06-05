import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID dde42a832df73a9b0fe53dbfdc7ca337afa5e8fa9d7948a6afe36889abd7bfb9'
  }
});

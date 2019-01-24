import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID 67a6a6c8189cd2fc45e4276b7f3216171518ea24ed3296c61c64c5ad00b2c0f2'
  }
});

import axios from "../api_config/axiosClient";

const movie_api = {
  
  async getAll() {
    const response = await axios.get(`/movies`);
    return response;
  },
  async getById(id) {
    const response = await axios.get(`/movies/${id}`);
    return response;
  },
  async createMovie(payload) {
    const response = await axios.post(`/movies`,payload);
    return response;
  },
  
};

export default movie_api;

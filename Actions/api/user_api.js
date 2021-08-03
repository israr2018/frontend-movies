import axios from "../api_config/axiosClient";

const user_api = {
  async registerUser(payload) {
    try {
      const response = await axios.post(
        `/sign-up`,payload
      );
      return response;
    } catch (error) {
      return error;
    }
  },
  async signIn(payload) {
    const response = await axios.post(`/sign-in`, payload);
    return response;
  },
  async updatePassword(payload) {
    const response = await axios.post(`/sign-in`, payload);
    return response;
  },
  async createProfile(payload) {
    const response = await axios.post(`/create-profile`, payload);
    return response;
  },

  async verifyEmail() {
    const response = await axios.get(`/user/send-email-verification`);
    return response;
  },
  async setEmailVarified(token){
    const response = await axios.get(`/user/verify-email/${token}`);
    return response;
  }
};

export default user_api;

import axios from "axios";

const axiosAuthApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export default axiosAuthApi;
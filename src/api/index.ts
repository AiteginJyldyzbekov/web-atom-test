import axios from "axios";

const API_URL = axios.create({
  baseURL: "https://fakestoreapi.com",
});

export default API_URL;

import axios from "axios";

const url = axios.create({
  baseURL: "https://fakestoreapi.com/",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default url;

import axios from "axios";

export const api = axios.create({
  baseURL: "http://192.168.50.212:3333",
  timeout: 700,
});

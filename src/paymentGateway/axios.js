import axios  from "axios";

export const baseURL = axios.create({
  baseURL: "http://localhost:5001/v2-48982/us-central1/api",
});
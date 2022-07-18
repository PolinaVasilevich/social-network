import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:8000" });

const TESTAPI = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/posts",
});

export const getPosts: any = () => TESTAPI.get("/");

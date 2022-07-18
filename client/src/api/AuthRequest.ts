import axios from "axios";

import { ILoginUser, IRegisterUser } from "../types/auth.type";

const API = axios.create({ baseURL: "http://localhost:8000" });

export const logIn = (userData: ILoginUser) =>
  API.post("/auth/login", userData);

export const signUp = (userData: IRegisterUser) =>
  API.post("/auth/register", userData);

import api from "./apiConfig.js";
import { jwtDecode } from "jwt-decode";

export const login = async (credentials) => {
  try {
    const response = await api.post("/auth/login", credentials);
    localStorage.setItem("token", response.data.token);
    const user = jwtDecode(response.data);
    return user;
  } catch (error) {
    console.error("Login error:", error);

    // Transform the error into a user-friendly message or custom error object
    const errorMessage =
      error.response?.data?.message || "Login failed due to unexpected error";
    throw new Error(errorMessage);
  }
};

export const verify = async () => {
  //Error handling
  if (localStorage.getItem("token") === null) {
    throw new Error("No token found");
  }

  //if token we will retrieve it
  const token = localStorage.getItem("token");
  if (token) {
    const response = await api.get("/auth/verify");
    return response.data;
  }
};

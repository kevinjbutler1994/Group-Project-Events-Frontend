import api from "./apiConfig.js";
import { jwtDecode } from "jwt-decode";
export const login = async (credentials) => {
  try {
    const response = await api.post("/auth/login", credentials);
    localStorage.setItem("token", response.data.token);
    const user = jwtDecode(response.data.token);
    return user;
  } catch (error) {
    console.error("Login error:", error);
    // Transform the error into a user-friendly message or custom error object
    const errorMessage =
      error.response?.data?.message || "Login failed due to unexpected error";
    throw new Error(errorMessage);
  }
};
export const signUp = async (credentials) => {
  try {
    //console.log("registering", credentials); //TEST DEBUG
    const response = await api.post("/auth/register", credentials);
    localStorage.setItem("token", response.data.token);
    const user = jwtDecode(response.data.token);
    return user;
  } catch (error) {
    // Log the error for debugging purposes
    console.error("Register error:", error);
    // Transform the error into a user-friendly message or custom error object
    const errorMessage =
      error.response?.data?.message || "Login failed due to unexpected error";
    // Optionally, throw a new error with the transformed message or handle it differently
    throw new Error(errorMessage);
  }
};
export const signOut = async () => {
  //error handling
  if (localStorage.getItem("token") === null) {
    throw new Error("No token found");
  }
  //remove token from local storage
  localStorage.removeItem("token");
  return true;
};

export const deleteUser = async () => {
  try {
    const response = await api.delete("/auth/delete");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const editUser = async (newUserData) => {
  try {
    const response = await api.put("/auth/edit", newUserData);
    return response.data;
  } catch (error) {
    console.error("Error editing User: ", error);
    throw error;
  }
};
export const verify = async () => {
  // //error handling
  // if (localStorage.getItem("token") === null) {
  //   throw new Error("No token found");
  // }
  // //get token from local storage
  // const token = localStorage.getItem("token");
  // if (token) {
  //   const res = await api.get("/auth/verify");
  //   return res.data;
  // }
  //get token from local storage
  const token = localStorage.getItem("token");
  if (token) {
    const res = await api.get("/auth/verify");
    return res.data;
  }
  return false;
};

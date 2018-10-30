//local storage wrapper with convenience methods
import jwtDecode from "jwt-decode";

export const setToken = token => {
  localStorage.setItem("token", token);
};

export const getToken = () => {
  return localStorage.getItem("token");
};

export const destroyToken = () => {
  localStorage.removeItem("token");
};

export const getDecodedToken = () => {
  const token = localStorage.getItem("token");
  if (!token) {
    return null;
  }
  return jwtDecode(token);
};

import axios from "axios";
import jwt_decode from "jwt-decode";
const URL = "http://localhost:8080";
var A = localStorage.getItem("token");

const axiosJwt = axios.create({
  headers: { Authorization: `Bearer ${A}` },
});

axiosJwt.interceptors.request.use(
  async (config) => {
    let date = new Date();
    var tokenJwt = localStorage.getItem("token");
    var decodedJwt = jwt_decode(tokenJwt);

    if (decodedJwt.exp > date.getTime() / 1000) {
      config.headers.Authorization = `Bearer ${tokenJwt}`;

      return config;
    } else {
      const response = await axios.post(`${URL}/refreshToken`);
      localStorage.setItem("token", response.data.accessToken);
      config.headers.Authorization = `Bearer ${response.data.accessToken}`;

      return config;
    }
  },
  function (error) {
    return Promise.reject(error);
  }
);

export const createRegister = (payload) =>
  axios.post(`${URL}/register`, payload);
export const createLogin = (payload) => axios.post(`${URL}/login`, payload);
export const createSchedule = (payload) =>
  axiosJwt.post(`${URL}/schedule`, payload);

export const getSchedule = (payload) =>
  axiosJwt.get(`${URL}/listschedule`, {
    headers: {
      person_id: `${payload}`,
    },
  });

export const refreshToken = (payload) =>
  axios.post(`${URL}/refreshToken`, payload);
export const logout = () =>
  axiosJwt.get(`${URL}/logout`, {
    withCredentials: true,
  });
export const deleteSchedule = (payload) =>
  axiosJwt.delete(`${URL}/delete/${payload}`);

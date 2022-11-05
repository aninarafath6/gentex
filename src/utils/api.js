import axios from "axios";
import storageService from "../service/storageService";
const instance = axios.create({
  baseURL: process.env.API_ENDPOINT,
  headers: {
    "Content-Type": "application/json",
  },
});
instance.interceptors.request.use(
  (config) => {
    const token = storageService.getLocalAccessToken();
    const username = storageService.getUserName();
    if (token) {
      config.headers["Authorization"] = "Bearer " + token;
      config.headers["x-username"] = username;
      // config.headers["x-access-token"] = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
instance.interceptors.response.use(
  (res) => {
    return res;
  },
  async (err) => {
    let originalConfig = err.config;
    if (originalConfig === undefined) originalConfig = { url: "" };
    if (originalConfig.url !== "/auth/login" && err.response) {
      // Access Token was expired
      if (err.response.status === 403 && !originalConfig._retry) {
        originalConfig._retry = true;
        try {
          const rs = await instance.post(
            "/auth/token",
            {
              refreshToken: storageService.getLocalRefreshToken(),
            },
            {
              username: storageService.getUserName(),
            }
          );
          const { accessToken } = rs.data;
          storageService.updateLocalAccessToken(accessToken);
          return instance(originalConfig);
        } catch (_error) {
          return Promise.reject(_error);
        }
      }
    }
    return Promise.reject(err);
  }
);
export default instance;
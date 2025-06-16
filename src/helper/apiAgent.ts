import axios from "axios";

const apiBaseUrl = import.meta.env.VITE_APP_PUBLIC_API_BASE_URL;

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: "https://your-api-base-url.com", // replace with your API base URL
});

// Add a request interceptor to include the token in headers
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Infyra ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const requests = {
  get: (url: string, config?: any) => axiosInstance.get(url, config),
  post: (url: string, body: {}, config?: any) =>
    axiosInstance.post(url, body, config),
  put: (url: string, body: {}, config?: any) =>
    axiosInstance.put(url, body, config),
  patch: (url: string, body: {}, config?: any) =>
    axiosInstance.patch(url, body, config),
  delete: (url: string, config?: any) => axiosInstance.delete(url, config),
};

const apiConstants = {
  apiEndPoint: apiBaseUrl,
  public: apiBaseUrl + "/public",
  api: apiBaseUrl + "/api",
  admin: apiBaseUrl + "/api/admin",
};

export const publicApiRoutes = {
  adminLogin: apiConstants.admin + "/admin-connect",
};

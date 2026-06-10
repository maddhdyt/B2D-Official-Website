import axios from "axios";

// Buat instance axios agar tidak perlu mengulang baseURL
const api = axios.create({
  baseURL: "http://localhost:5000/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor: otomatis tambahkan token jika ada di localStorage
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor: tangani token expired (opsional)
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Jika 401 Unauthorized, mungkin token expired. Bisa di-handle redirect logout di sini
    if (error.response && error.response.status === 401) {
      // localStorage.removeItem("token");
      // window.location.href = "/admin/login";
    }
    return Promise.reject(error);
  }
);

export default api;

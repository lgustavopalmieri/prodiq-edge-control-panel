import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080",
  headers: {
    "Content-Type": "application/json",
    "X-Tenant-ID": "vw-anchieta",
    // "Authorization": `Bearer ${token}` ← when token is ready
  },
});

export default api;

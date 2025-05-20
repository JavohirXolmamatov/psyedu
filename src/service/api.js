import axios from "axios";

const api = axios.create({
  baseURL: "https://testpsyedu.limsa.uz/", // sizga berilgan API url
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;

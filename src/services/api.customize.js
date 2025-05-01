import axios from "axios";
// tạo instance với config mặc định
// Bạn tạo một bản sao riêng của axios, có cấu hình riêng (như baseURL, headers, timeout, v.v), để không cần lặp lại ở từng request.
const instance = axios.create({
   baseURL: import.meta.env.VITE_URL_BACKEND,
});

const instance2 = axios.create({
   baseURL: import.meta.env.VITE_URL_BACKEND2,
});
// Interceptor cho REQUEST
instance.interceptors.request.use(
   function (config) {
      const token = localStorage.getItem("access_token");
      if (token) {
         config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
   },
   function (error) {
      return Promise.reject(error);
   }
);

// Interceptor cho RESPONSE
instance.interceptors.response.use(
   function (response) {
      return response;
   },
   function (error) {
      if (error.response) {
         const { status } = error.response;
         if (status === 401) {
            // token -> hết hạn -> chuyển về login
            window.location.href = "/login";
         }
         return error.response.data;
      }
      return Promise.reject(error);
   }
);

export { instance, instance2 };

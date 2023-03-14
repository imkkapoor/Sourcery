import axios from "axios";

const BASE_URL = "https://sourceryapi.onrender.com/api/";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: {
        token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZmM2ZTgxZDU1YWFlNGI1YjllYjJhYyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NzY1MTY0MywiZXhwIjoxNjc3OTEwODQzfQ.JIfrxVFUHQjThKp4ZgkLw3jj5RNzIsnJ1HxieR4ktp0",
    },
});
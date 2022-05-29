import axios from "axios";

const url = process.env.NEXT_PUBLIC_BACKEND_URL || "https://local-api-url.com/api/";
export const httpClient = axios.create({
    baseURL: url,
});

//TODO: create request interceptor for adding bearer token to Authorization Header
//TODO: create response interceptor for handling error request and notification toast
//TODO: FYI: https://axios-http.com/docs/interceptors
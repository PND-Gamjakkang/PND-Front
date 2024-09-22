import axios from "axios";
// 유저토큰
//const userToken = sessionStorage.getItem('token');

// authInstance가 이미 axios 인스턴스로 정의되어 있다고 가정
export const API = axios.create({
    baseURL: 'http://13.124.4.73:8080/',
    headers: {
        'Content-Type': 'application/json',
        
    },
});
// 요청 전에 인터셉터로 토큰을 동적으로 설정
API.interceptors.request.use((config) => {
    const userToken = sessionStorage.getItem('token');
    if (userToken) {
        config.headers['Authorization'] = `Bearer ${userToken}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

export const MultipartApi = axios.create({
    baseURL: 'http://13.124.4.73:8080/',
    headers: {
        'Content-Type': 'multipart/form-data',
        // 'Authorization': `Bearer ${userToken}`,
    },
});
MultipartApi.interceptors.request.use((config) => {
    const userToken = sessionStorage.getItem('token');
    if (userToken) {
        config.headers['Authorization'] = `Bearer ${userToken}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});
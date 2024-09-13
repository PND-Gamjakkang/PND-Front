import axios from "axios";
// 유저토큰
const userToken = localStorage.getItem('token');

// authInstance가 이미 axios 인스턴스로 정의되어 있다고 가정
export const API = axios.create({
    baseURL: 'http://13.124.4.73:8080/',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${userToken}`,
    },
});

export const MultipartApi = axios.create({
    baseURL: 'http://13.124.4.73:8080/',
    headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${userToken}`,
    },
});

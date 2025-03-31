import axios, { isAxiosError } from 'axios';



const getErrorMessage = (error: unknown) => {
  if (isAxiosError(error)) {
    return error.response?.data?.message || error.message;
  }
  return String(error);
}


const createHttpClient = () => {
  // axios 인스턴스 생성
  const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
      'Content-Type': 'application/json',
    },
    withCredentials: true,
  });
  return instance;
}


// HTTP 메서드 함수들
const httpClient = createHttpClient();


export {
  httpClient,
}
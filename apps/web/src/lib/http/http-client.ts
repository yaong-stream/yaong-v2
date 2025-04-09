import axios from 'axios';

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
export const httpClient = createHttpClient();

import { jwtDecode } from 'jwt-decode';

export const decodeAuthToken = (token: string) => {
  return jwtDecode(token);
};

export const getDecodedUserInfo = () => {
  const token = localStorage.getItem('accessToken');
  if (token) {
    return decodeAuthToken(token);
  }
  return null;
};

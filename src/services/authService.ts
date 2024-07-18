import { login, register } from '@api/authApi';
import { AuthPayload, Credentials, CustomJwtPayload } from '@customTypes/auth';
import { formatUserData } from '@helpers/user.helper';
import { decodeAuthToken } from '@utils/authUtils';

export const loginUser = async (credentials: Credentials) => {
  const data = await login(credentials);
  const userData = formatUserData(decodeAuthToken(data?.data?.token) as CustomJwtPayload);
  localStorage.setItem('accessToken', data?.data?.token);
  localStorage.setItem('userInfo', JSON.stringify(userData));
  return data;
};

export const registerUser = async (payload: AuthPayload) => {
  const data = await register(payload);
  return data;
};

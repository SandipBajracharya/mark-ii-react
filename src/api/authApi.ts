import { AuthPayload, Credentials } from '@customTypes/auth';
import apiClient from '.';

export const login = async (credentials: Credentials) => {
  const response = await apiClient.post('/authentication/login', credentials);
  return response.data;
};

export const register = async (payload: AuthPayload) => {
  const response = await apiClient.post('/authentication/register', payload);
  return response.data;
};

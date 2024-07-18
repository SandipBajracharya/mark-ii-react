import { CreateUserPayload, UpdateUserPayload } from '@customTypes/user';
import apiClient from '.';

export const create = async (payload: CreateUserPayload) => {
  const response = await apiClient.post('/api/users', payload);
  return response.data;
};

export const update = async (payload: UpdateUserPayload, id: number) => {
  const response = await apiClient.patch(`/api/users/${id}`, payload);
  return response.data;
};

export const show = async (id: number) => {
  const response = await apiClient.get(`/api/users/${id}?minimal=true`);
  return response.data;
};

export const list = async () => {
  const response = await apiClient.get('/api/users');
  return response.data;
};

export const destroy = async (id: number) => {
  const response = await apiClient.delete(`/api/users/${id}`);
  return response.data;
};

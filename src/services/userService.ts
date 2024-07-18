import { create, destroy, list, show, update } from '@api/userApi';
import { CreateUserPayload, UpdateUserPayload } from '@customTypes/user';

export const createUserService = async (payload: CreateUserPayload) => {
  return await create(payload);
};

export const updateUserService = async (payload: UpdateUserPayload, id: number) => {
  return await update(payload, id);
};

export const getSingleUserService = async (id: number) => {
  return await show(id);
};

export const getUserListService = async () => {
  return await list();
};

export const deleteUserService = async (id: number) => {
  return await destroy(id);
};

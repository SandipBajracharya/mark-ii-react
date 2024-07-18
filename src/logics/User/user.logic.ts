import { CreateUserPayload, UpdateUserPayload } from '@customTypes/user';
import { formatUserList } from '@helpers/user.helper';
import {
  createUserService,
  getUserListService,
  updateUserService,
  deleteUserService,
  getSingleUserService,
} from '@services/userService';
import axios from 'axios';

const UserLogic = () => {
  const createUser = async (payload: CreateUserPayload) => {
    try {
      const data = await createUserService(payload);
      return data;
    } catch (error) {
      let msg = 'Something went wrong';
      if (axios.isAxiosError(error) && error.response) {
        if (error.response.status === 400) {
          const errorData = error.response.data?.errors || [];
          if (errorData.length) {
            throw errorData;
          } else {
            msg = error.response?.data?.message || msg;
          }
        } else {
          msg = error.response?.data?.message || msg;
        }
      }
      throw new Error(msg);
    }
  };

  const updateUser = async (payload: UpdateUserPayload, id: number) => {
    try {
      const data = await updateUserService(payload, id);
      return data;
    } catch (error) {
      let msg = 'Something went wrong';
      if (axios.isAxiosError(error) && error.response) {
        if (error.response.status === 400) {
          const errorData = error.response.data?.errors || [];
          console.log({ errorData });
          if (errorData.length) {
            msg = 'Validation error';
          } else {
            msg = error.response?.data?.message || msg;
          }
        } else {
          msg = error.response?.data?.message || msg;
        }
      }
      throw new Error(msg);
    }
  };

  const getUserList = async () => {
    try {
      const data = await getUserListService();
      return formatUserList(data);
    } catch (error) {
      console.log({ error });
      let msg = 'Something went wrong';
      if (axios.isAxiosError(error) && error.response) {
        msg = error.response?.data?.message || msg;
      }
      throw new Error(msg);
    }
  };

  const getSingleUser = async (id: number) => {
    try {
      const data = await getSingleUserService(id);
      return data;
    } catch (error) {
      console.log({ error });
      let msg = 'Something went wrong';
      if (axios.isAxiosError(error) && error.response) {
        msg = error.response?.data?.message || msg;
      }
      throw new Error(msg);
    }
  };

  const deleteUser = async (id: number) => {
    try {
      const data = await deleteUserService(id);
      return data;
    } catch (error) {
      let msg = 'Something went wrong';
      if (axios.isAxiosError(error) && error.response) {
        msg = error.response?.data?.message || msg;
      }
      throw new Error(msg);
    }
  };

  return { createUser, updateUser, getSingleUser, getUserList, deleteUser };
};

export default UserLogic;

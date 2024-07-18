import { CustomJwtPayload } from '@customTypes/auth';
import { TableBodyType, User, UserListData } from '@customTypes/user';

export const formatUserData = (user: CustomJwtPayload): User => {
  return {
    id: user.id,
    email: user.email,
    first_name: user.first_name,
    middle_name: user.middle_name,
    last_name: user.last_name,
    exp: user.exp || null,
    role_id: user.role_id,
    email_verified_at: user.email_verified_at,
  };
};

export const formatUserList = (data: UserListData): Array<TableBodyType> => {
  return data.data.map((user) => ({
    id: user.id,
    email: user.email,
    name: user.first_name && user.last_name ? `${user.first_name} ${user.last_name}` : '-',
    email_verified: user.email_verified_at || null,
    phone: user.phone || null,
  }));
};

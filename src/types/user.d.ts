import { SetStateAction } from 'react';

export interface User {
  id: number;
  email: string;
  first_name: string | null;
  middle_name: string | null;
  last_name: string | null;
  exp: number | null;
  role_id: number;
  email_verified_at: string | null;
}

export interface UserContextType {
  user: User | null;
  setUser: SetStateAction;
}

export interface UserProviderProps {
  children: React.ReactNode;
}

export interface CreateUserPayload {
  first_name: string;
  middle_name?: string;
  last_name: string;
  phone?: number;
  email: string;
  password: string;
}

export interface UpdateUserPayload {
  first_name: string;
  middle_name?: string;
  last_name: string;
  phone?: number;
  email: string;
}

export interface TableHeaderType {
  label: string;
}

export interface TableBodyType {
  id: number;
  name: string;
  email: string;
  phone: string | null;
  email_verified: string | null;
}

export interface TableActionType {
  name: string;
  icon: string;
  action: (id: number) => Promise<>;
}

export interface TableType {
  headers: Array<TableHeaderType>;
  records: Array<TableBodyType> | null;
  actions: Array<TableActionType>;
}

export interface UserRecord {
  email: string;
  email_verified_at: string | null;
  first_name: string | null;
  id: number;
  last_name: string | null;
  middle_name: string | null;
  phone: string | null;
  role_id: number;
}

export interface UserListData {
  data: Array<UserRecord>;
}

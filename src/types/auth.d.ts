import { JwtPayload } from 'jwt-decode';
import { User } from './user';

export interface Credentials {
  email: string;
  password: string;
}
export type AuthPayload = {
  email: string;
  password: string;
};

export interface RegisterPayload {
  email: string;
  password: string;
  confirmPassword?: string;
}

export interface AuthProviderProps {
  children: React.ReactNode;
}

export interface CustomJwtPayload extends JwtPayload, User {}

export interface AuthType {
  userInfo?: User | null;
  accessToken?: string | null;
}

export interface AuthContextType {
  auth: AuthType | null;
  setAuth: React.Dispatch<React.SetStateAction<AuthType | null>>;
}

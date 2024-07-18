import { AuthContextType, AuthProviderProps, AuthType } from '@customTypes/auth';
import PropTypes from 'prop-types';
import { createContext, useState } from 'react';

const userInfoString = localStorage.getItem('userInfo');
const userInfo = userInfoString ? JSON.parse(userInfoString) : null;
const accessToken = localStorage.getItem('accessToken');

const initialState: () => AuthType | null = () => {
  if (userInfo && accessToken) {
    return {
      userInfo,
      accessToken,
    };
  } else {
    return null;
  }
};

// Create the AuthContext with an empty initial value
export const AuthContext = createContext<AuthContextType | undefined>({
  auth: {
    userInfo,
    accessToken,
  },
} as AuthContextType);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [auth, setAuth] = useState<AuthType | null>(initialState);

  return <AuthContext.Provider value={{ auth, setAuth }}>{children}</AuthContext.Provider>;
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

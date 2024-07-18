// important: concept of context api using layout format

import { useContext } from 'react';
import { AuthContextType } from '@customTypes/auth';
import { AuthContext } from '@context/AuthProvider';

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

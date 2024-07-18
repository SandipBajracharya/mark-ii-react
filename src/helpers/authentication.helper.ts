import { getDecodedUserInfo } from '@utils/authUtils';

export const isAuthenticated = () => {
  // Implement your authentication check logic here
  const userInfo = getDecodedUserInfo();
  if (userInfo) {
    if (userInfo.exp) {
      const expDate = new Date(userInfo.exp * 1000);
      if (expDate > new Date()) return true;
    }
  }
  return false;
};

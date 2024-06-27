export const isAuthenticated = () => {
  // Implement your authentication check logic here
  return !!localStorage.getItem('authToken');
};

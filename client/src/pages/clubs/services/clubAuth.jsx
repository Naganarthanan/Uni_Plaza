import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000/api';

// Create axios instance for club authentication
const authAPI = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests if available
authAPI.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('clubToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Club Authentication Service
export const clubAuthService = {
  // Login with email and password
  login: async (email, password) => {
    try {
      const response = await authAPI.post('/club/login', { email, password });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Logout
  logout: () => {
    localStorage.removeItem('clubToken');
    localStorage.removeItem('clubData');
    // You can also call an API endpoint to invalidate the token on the server
  },

  // Check if user is authenticated
  isAuthenticated: () => {
    const token = localStorage.getItem('clubToken');
    return !!token;
  },

  // Get current club data
  getCurrentClub: () => {
    const clubData = localStorage.getItem('clubData');
    return clubData ? JSON.parse(clubData) : null;
  },

  // Get stored token
  getToken: () => {
    return localStorage.getItem('clubToken');
  },

  // Refresh token (if you implement token refresh)
  refreshToken: async () => {
    try {
      const response = await authAPI.post('/club/refresh-token');
      const { token } = response.data;
      localStorage.setItem('clubToken', token);
      return token;
    } catch (error) {
      // If refresh fails, logout the user
      clubAuthService.logout();
      throw error;
    }
  },

  // Change password
  changePassword: async (currentPassword, newPassword) => {
    try {
      const response = await authAPI.put('/club/change-password', {
        currentPassword,
        newPassword
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Forgot password
  forgotPassword: async (email) => {
    try {
      const response = await authAPI.post('/club/forgot-password', { email });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Reset password with token
  resetPassword: async (token, newPassword) => {
    try {
      const response = await authAPI.post('/club/reset-password', {
        token,
        newPassword
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }
};

export default clubAuthService;

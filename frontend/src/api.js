import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000',
  headers: {
    'Content-Type': 'application/json'
  }
});

export const scanUrl = async (url) => {
  try {
    const response = await api.post('/scan-url', { url });
    return response.data;
  } catch (error) {
    console.error('Error scanning URL:', error);
    throw error;
  }
};

export const scanMessage = async (message) => {
  try {
    const response = await api.post('/scan-message', { message });
    return response.data;
  } catch (error) {
    console.error('Error scanning message:', error);
    throw error;
  }
};

export default api;

'use client'

import axios from 'axios'
import Cookies from 'js-cookie';

export const api = axios.create({
  baseURL: 'https://engratech11.com/api',
})

const token = Cookies.get('token');
const timeExpiresToken = new Date(new Date().getTime() + 60 * 60 * 1000); // 1 hora

axios.interceptors.request.use(
  async (config) => {
    if (token) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

axios.interceptors.response.use(
  (response) => response,
  async (error) => {
    const config = error?.config;

    if (error?.response?.status === 401 && !config?.sent && token) {
      config.sent = true;

      await api.post('/refresh', { headers: { 'Authorization': `Bearer ${token}` } }).then(response => {
        Cookies.set('token', response.data.access_token, { expires: timeExpiresToken, path: '/' })
        api.defaults.headers.common['Authorization'] = `Bearer ${response.data.access_token}`;
      });

      return axios(config);
    }
    return Promise.reject(error);
  }
);

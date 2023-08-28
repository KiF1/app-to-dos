'use client'

import axios from 'axios'
import Cookies from 'js-cookie';

const isAuthenticated = Cookies.get('token_code');
const value = isAuthenticated?.split('|');
const token = value !== undefined ? value[0] : ''

export const api = axios.create({
  baseURL: 'https://engratech11.com/api',
  headers: {
    Authorization : `Bearer ${token}`
    }
})
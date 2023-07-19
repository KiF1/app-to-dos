import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://64.52.80.144/domain/domain.php',
})
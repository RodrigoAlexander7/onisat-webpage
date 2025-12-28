import axios from 'axios';
import { serverEnv } from '@/config/env';

export const apiClient = axios.create({ 
    baseURL: serverEnv.backendUrl, 
    withCredentials: true,
    timeout: 5000,
});

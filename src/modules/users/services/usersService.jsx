import api from '../../../api';

export const getUserList = () => api.get('users').then(resp => resp.data);

export const  getUserDetails = (id) => api.get(`users/${id}`).then(resp => resp.data);

export const deleteUser = (id) => api.delete(`users/${id}`).then(resp => resp.data);

export const updateUser = (data) => api.put(`users/${data.id}`, JSON.stringify(data)).then(resp => resp.data);

export const addUser = (data) => api.post('users', JSON.stringify(data)).then(resp => resp.data);
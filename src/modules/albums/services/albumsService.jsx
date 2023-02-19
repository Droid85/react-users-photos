import api from '../../../api';

export const getUsersAlbumsList = () => api.get('albums').then(resp => resp.data);

export const getUserAlbumsList = (id) => api.get(`users/${id}/albums`).then(resp => resp.data);

export const  getUserAlbum = (id) => api.get(`albums/${id}`).then(resp => resp.data);

import api from '../../../api';

export const  getUserAlbumDetails = (id) => api.get(`albums/${id}`).then(resp => resp.data);
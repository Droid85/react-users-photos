import api from '../../../api';

export const getAlbumPhotosList = () => api.get(`photos`).then(resp => resp.data);

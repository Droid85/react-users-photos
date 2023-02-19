import {useEffect, useState} from "react";
import {getAlbumPhotosList} from "../services/photosService";

export const usePhotos = (id) => {
    const [list, setList] = useState([]);

    useEffect(() => {
        fetchAlbumsPhotos(id)
    }, []);

    function fetchAlbumsPhotos(id) {
        getAlbumPhotosList().then(data => {
            let photos = data.filter(photo => photo.albumId === +id)
            setList(photos)
        })
    }

    return {list, fetchAlbumsPhotos}
}

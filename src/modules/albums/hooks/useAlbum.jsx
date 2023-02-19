import {useEffect, useState} from "react";
import {getUserAlbumsList} from "../services/albumsService";

export const useAlbum = (id) => {
    const [list, setList] = useState([]);

    useEffect(() => {
        fetchUserAlbums()
    }, []);


    function fetchUserAlbums() {
        getUserAlbumsList(id).then(setList)
    }

    return {list, fetchUserAlbums}
}

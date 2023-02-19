import {useEffect, useState} from "react";
import {getUsersAlbumsList} from "../services/albumsService";

export const useAlbums = () => {
    const [list, setList] = useState([]);

    useEffect(() => {
        fetchUserAlbums()
    }, []);


    function fetchUserAlbums() {
        getUsersAlbumsList().then(setList)
    }

    return {list, fetchUserAlbums}
}

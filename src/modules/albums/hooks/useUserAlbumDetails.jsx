import {useEffect, useState} from "react";
import {getUserAlbumDetails} from "../services/getUserAlbumDetails";

const useUserAlbumDetails = (id) => {
    const [details, setDetails] = useState({});

    useEffect(() => {
        fetchUserAlbum()
    }, [id]);



    function fetchUserAlbum() {
        getUserAlbumDetails(id).then(setDetails)
    }

    return{details}
}

export default useUserAlbumDetails;
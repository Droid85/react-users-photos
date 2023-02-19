import {Navigate, Route, Routes} from "react-router-dom";
import AlbumPhotosList from "./pages/AlbumPhotosList";

const AlbumPhotosModule = () => {

    return (<Routes>
        <Route path='/:id' element={<AlbumPhotosList/>} />
        <Route path='*' element={<Navigate to='/notfound' replace />} />
    </Routes>)
}

export default AlbumPhotosModule;

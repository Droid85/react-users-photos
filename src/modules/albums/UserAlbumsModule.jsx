import {Navigate, Route, Routes} from "react-router-dom";
import UserAlbumsList from "./pages/UserAlbumsList";
import UserAlbumDetailsPage from "./pages/UserAlbumDetailsPage";

const UserAlbumsModule = () => {

    return (<Routes>
        <Route path='/' element={<UserAlbumsList/>} />
        <Route path='*' element={<Navigate to='/notfound' replace />} />
    </Routes>)
}

export default UserAlbumsModule;

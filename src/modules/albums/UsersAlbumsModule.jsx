import {Navigate, Route, Routes} from "react-router-dom";
import UsersAlbumsList from "./pages/UsersAlbumsList";
import UserAlbumDetailsPage from "./pages/UserAlbumDetailsPage";

const UsersAlbumsModule = () => {

    return (<Routes>
        <Route path='/' element={<UsersAlbumsList/>} />
        <Route path='/:id' element={<UserAlbumDetailsPage/>} />
        <Route path='*' element={<Navigate to='/notfound' replace />} />
    </Routes>)
}

export default UsersAlbumsModule;
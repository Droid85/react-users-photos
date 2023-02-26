import {Navigate, Route, Routes} from "react-router-dom";
import UsersListPage from "./pages/UsersListPage";
import UserDetailsPage from "./pages/UserDetailsPage";
import UserEditPage from "./pages/UserEditPage";
import UserAlbumsModule from "../albums/UserAlbumsModule";
import NewUserPage from "./pages/NewUserPage";

const UsersModule = () => {

    return (<Routes>
        <Route path='/' element={<UsersListPage/>} />
        <Route path='/:id' element={<UserDetailsPage/>} />
        <Route path='/:id/edit' element={<UserEditPage/>} />
        <Route path='/:id/albums' element={<UserAlbumsModule/>} />
        <Route path='/add-user' element={<NewUserPage/>} />
        <Route path='*' element={<Navigate to='/notfound' replace />} />
    </Routes>)
}

export default UsersModule;
import {Redirect, Route, Switch} from "react-router-dom";
import UsersAlbumsList from "./pages/UsersAlbumsList";
import UserAlbumDetailsPage from "./pages/UserAlbumDetailsPage";

const UsersAlbumsModule = () => {

    return (<Switch>
        <Route path='/'>
            <UsersAlbumsList />
        </Route>
        <Route path='/:id'>
            <UserAlbumDetailsPage />
        </Route>
        <Route path='*'>
            <Redirect to='/notfound' />
        </Route>
    </Switch>)
}

export default UsersAlbumsModule;
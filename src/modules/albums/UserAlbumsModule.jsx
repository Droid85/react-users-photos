import {Redirect, Route, Switch} from "react-router-dom";
import UserAlbumsList from "./pages/UserAlbumsList";
import UserAlbumDetailsPage from "./pages/UserAlbumDetailsPage";

const UserAlbumsModule = () => {

    return (<Switch>
        <Route path='/users/:id/albums'>
            <UserAlbumsList />
        </Route>
        <Route exact path='*'>
            <Redirect to='/notfound' />
        </Route>
    </Switch>)
}

export default UserAlbumsModule;

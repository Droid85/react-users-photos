import {Route, Redirect, Switch} from "react-router-dom";
import UsersListPage from "./pages/UsersListPage";
import UserDetailsPage from "./pages/UserDetailsPage";
import UserEditPage from "./pages/UserEditPage";
import UserAlbumsModule from "../albums/UserAlbumsModule";
import NewUserPage from "./pages/NewUserPage";

const UsersModule = () => {

    return (<Switch>
        <Route exact path='/users'>
            <UsersListPage />
        </Route>
        <Route exact path='/users/add-user'>
            <NewUserPage />
        </Route>
        <Route exact path='/users/:id'>
            <UserDetailsPage />
        </Route>
        <Route exact path='/users/:id/edit'>
            <UserEditPage />
        </Route>
        <Route exact path='/users/:id/albums'>
            <UserAlbumsModule />
        </Route>
        <Route path='*'>
            <Redirect to='/notfound' />
        </Route>
    </Switch>)
}

export default UsersModule;
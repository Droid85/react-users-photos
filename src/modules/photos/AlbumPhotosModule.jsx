import {Redirect, Route, Switch} from "react-router-dom";
import AlbumPhotosList from "./pages/AlbumPhotosList";

const AlbumPhotosModule = () => {

    return (<Switch>
        <Route path='/photos/:id'>
            <AlbumPhotosList />
        </Route>
        <Route path='*'>
            <Redirect to='/notfound' />
        </Route>
    </Switch>)
}

export default AlbumPhotosModule;

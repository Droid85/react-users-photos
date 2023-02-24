import {BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";
import HomePage from "./modules/about/pages/Homepage";
import NotFoundPage from "./modules/about/pages/NotFoundPage";
import UsersModule from "./modules/users/UsersModule";
import Navigation from "./modules/common/components/Navigation";
import UsersAlbumsModule from "./modules/albums/UsersAlbumsModule";
import AlbumPhotosModule from "./modules/photos/AlbumPhotosModule";
import './App.css';

function App() {
  return (
      <Router>
          <Navigation/>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/users">
              <UsersModule />
            </Route>
            <Route path="/albums">
              <UsersAlbumsModule />
            </Route>
            <Route path="/photos">
              <AlbumPhotosModule />
            </Route>
            <Route path="/notfound">
              <NotFoundPage />
            </Route>
            <Route path='*'>
              <Redirect to='/notfound' />
            </Route>
          </Switch>
      </Router>
  );
}

export default App;
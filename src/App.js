import {BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom";
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
          <Routes>
              <Route path='/' element={<HomePage/>} />
              <Route path='/users/*' element={<UsersModule/>} />
              <Route path='/albums/*' element={<UsersAlbumsModule/>} />
              <Route path='/photos/*' element={<AlbumPhotosModule/>} />
              <Route path='*' element={<Navigate to='/notfound' replace />} />
              <Route path='/notfound' element={<NotFoundPage/>} />
          </Routes>
      </Router>
  );
}

export default App;
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

//import Pages
import Home from './pages/Home';
import Artist from './pages/Artist';
import PlaylistPage from './pages/Playlist';
//import Components
import Footer from './components/Footer';

function App() {
  const name_proyect = import.meta.env.VITE_NAME_PAGE || '';

  return (
    <BrowserRouter>
      <Routes>
        <Route path={`${name_proyect}/home`} element={<Home />} />
        <Route path={`${name_proyect}/artist`} element={<Artist />} />
        <Route path={`${name_proyect}/playlist/:id`} element={<PlaylistPage />} />
        <Route path="*" element={<Navigate to={`${name_proyect}/home`} />} />
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
//import Pages
import Home from './pages/Home';
import Artist from './pages/Artist';
import PlaylistPage from './pages/Playlist';
import Album from './pages/Album';
import TrackPage from './pages/Track';
import ShowPage from './pages/Show';
import EpisodePage from './pages/Episode';
//import Components
import Footer from './components/Footer';
import { Provider } from 'react-redux';
import { store } from './store/store';
import tokenServices from './apis/token';
import LayoutBase from './layout/layoutBase';
function App() {
  const name_proyect = import.meta.env.VITE_NAME_PAGE || '';
  const [tokenExist, settokenExist] = useState(!localStorage.getItem('token') ? false : true);

  const callToken = async () => {
    const res = await tokenServices.getToken();
    if (res) {
      settokenExist(true);
    }
  };

  useEffect(() => {
    // validar si el token es valido
    callToken();
  }, []);

  return !tokenExist ? (
    <div>
      <p className="text-white">Cargando..........</p>
    </div>
  ) : (
    <Provider store={store}>
      <BrowserRouter>
        <LayoutBase>
          <Routes>
            <Route path={`${name_proyect}/home`} element={<Home />} />
            <Route path={`${name_proyect}/artist`} element={<Artist />} />
            <Route path={`${name_proyect}/playlist/:id`} element={<PlaylistPage />} />
            <Route path={`${name_proyect}/track/:id`} element={<TrackPage />} />
            <Route path={`${name_proyect}/show/:id`} element={<ShowPage />} />
            <Route path={`${name_proyect}/episode/:id`} element={<EpisodePage />} />
            <Route path={`${name_proyect}/album/:id`} element={<Album />} />
            <Route path="*" element={<Navigate to={`${name_proyect}/home`} />} />
          </Routes>
        </LayoutBase>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

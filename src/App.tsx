import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

//import Pages
import Home from "./pages/Home";
import Artist from "./pages/Artist";
import PlaylistPage from "./pages/Playlist";
//import Components
import Footer from "./components/Footer";
import { Provider } from "react-redux";
import { store } from "./store/store";
import Album from "./pages/Album";
function App() {
  const name_proyect = import.meta.env.VITE_NAME_PAGE || "";

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path={`${name_proyect}/home`} element={<Home />} />
          <Route path={`${name_proyect}/artist`} element={<Artist />} />
          <Route
            path={`${name_proyect}/playlist/:id`}
            element={<PlaylistPage />}
          />
          <Route path={`${name_proyect}/album`} element={<Album />} />
          <Route path="*" element={<Navigate to={`${name_proyect}/home`} />} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

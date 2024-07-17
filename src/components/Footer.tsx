import React, { useState, useEffect } from 'react';
//import hooks
import { useTrack } from '../hooks/trackHook';

const Footer: React.FC = () => {
  const url_base = 'https://open.spotify.com/embed/';
  const [id, setId] = useState('');
  const [typeTrack, setTypeTrack] = useState('');
  const { idTrack, type } = useTrack();
  //track/43DeSV93pJPT4lCZaWZ6b1 6x5Nva6cG8jSaOyq7isQNQ

  useEffect(() => {
    setId(idTrack);
    setTypeTrack(type);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idTrack]);

  return (
    <div className="min-h-[10vh] max-h-[10vh] bg-gradient-to-r from-[#064BB5] to-[#040c18cd]  overflow-hidden bg-black ">
      <iframe
        className="w-[100.5%] ml-[-6px] "
        title="Reproductor de Spotify"
        src={`${url_base}${typeTrack}/${id}`}
        allow="encrypted-media"
        height={'100vh'}
      ></iframe>
    </div>
  );
};

export default Footer;

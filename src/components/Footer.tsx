/* eslint-disable react-refresh/only-export-components */
import React, { useState, useEffect, memo } from 'react';
//import hooks
import { useTrack } from '../hooks/trackHook';

const Footer: React.FC = () => {
  const url_base = 'https://open.spotify.com/embed/';
  const [id, setId] = useState('');
  const [typeTrack, setTypeTrack] = useState('');
  const { idTrack, type } = useTrack();

  useEffect(() => {
    setId(idTrack);
    setTypeTrack(type);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idTrack]);

  return (
    <div className=" bg-[#162945] h-fit ">
      <iframe
        key={`${typeTrack}-${id}`}
        className="w-[100.5%] ml-[-6px] "
        title="Reproductor de Spotify"
        src={`${url_base}${typeTrack}/${id}`}
        allow="encrypted-media"
        height={'100vh'}
      ></iframe>
    </div>
  );
};

export default memo(Footer);

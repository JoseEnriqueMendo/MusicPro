import React, { useState, useEffect } from 'react';

const Footer: React.FC = () => {
  const url_base = 'https://open.spotify.com/embed/';
  const [id, setId] = useState('');
  const [type, setType] = useState('');
  //track/43DeSV93pJPT4lCZaWZ6b1 6x5Nva6cG8jSaOyq7isQNQ

  useEffect(() => {
    setId('6x5Nva6cG8jSaOyq7isQNQ');
    setType('track');
  }, [type]);

  return (
    <div className="min-h-[10vh] max-h-[10vh] bg-gradient-to-r from-[#064BB5] to-[#040c18cd] h-full overflow-hidden ">
      <iframe
        className="w-full"
        title="Reproductor de Spotify"
        src={`${url_base}${type}/${id}`}
        allow="encrypted-media"
      ></iframe>
    </div>
  );
};

export default Footer;

import React, { useState, useEffect } from 'react';
//import hooks
import musicServices from '../apis/track';
import { Track } from '../interface/track';
import useHover from '../utils/useHover';
import { useTrack } from '../hooks/trackHook';
// import { Episode } from '../interface/episode';
const LeftSide: React.FC = () => {
  //   const [typeTrack, setTypeTrack] = useState('');
  const { idTrack, type } = useTrack();
  const [data, setData] = useState<Track>();

  const { handleMouseEnter, handleMouseLeave, isHovered } = useHover();

  useEffect(() => {
    const callTrack = async (id: string) => {
      const res = await musicServices.get(id);
      setData(res);
    };
    callTrack(idTrack || '');
    // setTypeTrack(type);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idTrack]);

  return (
    <div
      className={
        'w-[20vw] min-h-[90vh] bg-darkPurple overflow-y-auto  overflow-x-hidden custom-scrollbar ' +
        (isHovered ? 'modify' : '')
      }
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="px-4 py-4  w-[90%]   h-full mx-auto  flex flex-col  gap-3">
        <figure className="overflow-hidden w-full flex items-center justify-center rounded-md">
          <img className="object-cover w-full" src={data?.album.images[0].url} />
        </figure>

        <p className="text-white font-openSans text-2xl "> {data?.name}</p>
      </div>
    </div>
  );
};

export default LeftSide;

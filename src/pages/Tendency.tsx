import { useEffect, useState } from 'react';
import LayoutIntern from '../layout/LayoutIntern';
import { useNavigate } from 'react-router-dom';
import Return from '../components/Return';
import { SearchTracksResponse } from '../interface/search';
import searchServices from '../apis/search';
const Tendency = () => {
  const [tendencyArray, setTendencyArray] = useState<SearchTracksResponse>();
  const navigate = useNavigate();
  const name_proyect = import.meta.env.VITE_NAME_PAGE || '';

  const callTendencyTracks = async () => {
    const res = await searchServices.getRecommendedTracks(48);
    setTendencyArray(res);
  };

  useEffect(() => {
    callTendencyTracks();
  }, []);

  return (
    <LayoutIntern idBarside={4}>
      <section className="w-full mt-2 ">
        <div className="flex flex-col justify-between ml-3  gap-2">
          <Return route="none" />
          <p className="text-white font-clashDisplay font-bold text-4xl">Tendencias</p>
        </div>
        <div className="grid grid-cols-4 grid-flow-row gap-5 mt-4">
          {tendencyArray?.tracks.map((item) => {
            return (
              <div
                className=" flex flex-col items-center gap-1 hover:opacity-80 cursor-pointer"
                onClick={() => {
                  navigate(name_proyect + '/track/' + item.id);
                }}
              >
                <img src={item.album.images[0].url} className="w-48 h-48" />
                <p className=" font-bold">{item.name}</p>
              </div>
            );
          })}
        </div>
      </section>
    </LayoutIntern>
  );
};

export default Tendency;

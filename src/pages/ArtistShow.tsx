import { useEffect, useState } from 'react';
import LayoutIntern from '../layout/LayoutIntern';
import { SearchArtistResponse } from '../interface/search';
import searchServices from '../apis/search';
import { useNavigate } from 'react-router-dom';
import Return from '../components/Return';

const ArtistShow = () => {
  const [artistSearchArray, setArtistSearchArray] = useState<SearchArtistResponse>();
  const navigate = useNavigate();
  const name_proyect = import.meta.env.VITE_NAME_PAGE || '';

  const callCategories = async () => {
    const res = await searchServices.getArtistShow(48);
    setArtistSearchArray(res);
  };

  useEffect(() => {
    callCategories();
  }, []);

  return (
    <LayoutIntern idBarside={3}>
      <section className="w-full mt-2 ">
        <div className="flex flex-col justify-between ml-3  gap-2">
          <Return route="none" />
          <p className="text-white font-clashDisplay font-bold text-4xl">Artistas</p>
        </div>
        <div className="grid grid-cols-4 grid-flow-row gap-5 mt-5 max-lg:grid-cols-3 max-sm:grid-cols-2 max-[500px]:grid-cols-1">
          {artistSearchArray?.artists.items.map((item) => {
            return (
              <div
                className=" flex flex-col items-center text-center gap-1 hover:opacity-80 cursor-pointer"
                onClick={() => {
                  navigate(name_proyect + '/artist/' + item.id);
                }}
                key={item.id}
              >
                <img src={item.images[0].url} className="w-48 h-48 rounded-full" />
                <p className=" font-bold truncate w-[80%]">{item.name}</p>
              </div>
            );
          })}
        </div>
      </section>
    </LayoutIntern>
  );
};

export default ArtistShow;

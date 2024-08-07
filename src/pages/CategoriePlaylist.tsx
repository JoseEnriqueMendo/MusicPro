import { useEffect, useState } from 'react';
import LayoutIntern from '../layout/LayoutIntern';
import { useParams } from 'react-router-dom';
import { PlaylistFeatureOrCategory } from '../interface/playlist';
import playlistServices from '../apis/playlist';
import Return from '../components/Return';
import { CardPlaylistBasic } from '../components/Cards';
import { useNavigate } from 'react-router-dom';

const CategoriesPlaylist = () => {
  const [playlistCategory, setPlaylistCategory] = useState<PlaylistFeatureOrCategory>();
  const navigate = useNavigate();
  const { id } = useParams();
  const name_proyect = import.meta.env.VITE_NAME_PAGE || '';
  const callCategoriePlaylist = async () => {
    const res = await playlistServices.getByCategory(id || '');
    setPlaylistCategory(res);
  };

  useEffect(() => {
    callCategoriePlaylist();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = (id: string) => {
    navigate(`${name_proyect}/playlist/${id}`);
  };

  return (
    <LayoutIntern idBarside={-1}>
      <section className="w-full mt-2">
        <div className="flex flex-col justify-between ml-3  gap-2">
          <Return route="none" />
          <p className="text-white font-clashDisplay font-bold text-4xl">
            {`Categoria: ${playlistCategory?.message || '...'}`}
          </p>
        </div>
        <div className="grid grid-cols-4 grid-flow-row gap-5 mt-5 max-lg:grid-cols-3 max-sm:grid-cols-2 max-[500px]:grid-cols-1">
          {playlistCategory?.playlists.items.map((item) => {
            return (
              <CardPlaylistBasic
                handleClick={handleClick}
                id={item.id}
                name={item.name}
                url_img={item.images[0].url}
                key={item.id}
              />
            );
          })}
        </div>
      </section>
    </LayoutIntern>
  );
};

export default CategoriesPlaylist;

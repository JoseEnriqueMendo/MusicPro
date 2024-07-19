import { useState, useEffect } from 'react';
import { BarSide } from '../components/BarSide';
import { useParams } from 'react-router-dom';
import { Show } from '../interface/show';
import Return from '../components/Return';
import { HeadBoarBasic } from '../components/HeadBoard';
import { CardEpisode } from '../components/Cards';
import showServices from '../apis/show';
const ShowPage = () => {
  const { id } = useParams();
  const [show, setShow] = useState<Show>();

  useEffect(() => {
    const callShow = async (id: string) => {
      const res = await showServices.get(id);
      setShow(res);
    };
    callShow(id || '');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className="min-h-[90vh] max-h-[90vh] w-full   flex flex-row  overflow-hidden">
      <BarSide element={-1} />
      <div className="w-[65vw] mt-12 flex flex-col px-10 overflow-y-auto  overflow-x-hidden custom-scrollbar text-white gap-5">
        <Return route="home" />
        <HeadBoarBasic
          img={show?.images[0].url || ''}
          name={show?.name || ''}
          owner_name={show?.publisher || ''}
          type={'Podcast'}
        />

        <div className="w-full flex flex-col gap-2">
          <p className="font-bold text-2xl">Acerca de</p>
          <p className=" opacity-50   text-[14px] font-openSans text-ellipsis line-clamp-3">
            {show?.description || ''}
          </p>
          <p className="font-bold text-2xl">Todos los episodios</p>
          <div className="flex flex-col gap-2">
            {show?.episodes?.items.map((item, index) => {
              return <CardEpisode dataEpisode={item} key={index} />;
            })}
          </div>
        </div>
      </div>
    </main>
  );
};

export default ShowPage;

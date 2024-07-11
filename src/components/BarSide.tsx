import React from 'react';
import { useNavigate } from 'react-router-dom';
//import React Icons
import { PiSquaresFour } from 'react-icons/pi';
import { BsSoundwave } from 'react-icons/bs';
import { GiSoundOn } from 'react-icons/gi';
import { GiPodium } from 'react-icons/gi';
import { GrFavorite } from 'react-icons/gr';
import { VscSettingsGear } from 'react-icons/vsc';
import { IoChatbubblesOutline } from 'react-icons/io5';
import { FaUserFriends } from 'react-icons/fa';
//import Imgs
import logo from '../../public/logo.svg';

export const BarSide: React.FC<{ element: number }> = ({ element }) => {
  const navigate = useNavigate();
  const name_proyect = import.meta.env.VITE_NAME_PAGE || '';

  const goToPage = (link: string, numberItem: number) => {
    if (numberItem === 0) return;
    navigate(`${name_proyect}/${link}`);
  };

  const ItemBarside: React.FC<{
    icon: JSX.Element;
    title: string;
    numberItem: number;
    linkTo: string;
  }> = ({ icon, title, numberItem, linkTo }) => {
    return (
      <li
        className={
          'flex gap-3  w-ful items-center   ' +
          (numberItem !== element ? '' : 'text-greenLime') +
          (numberItem !== 0 ? ' cursor-pointer ' : '')
        }
        onClick={() => {
          goToPage(linkTo, numberItem);
        }}
      >
        <span
          className={
            'h-full bg-greenLime w-1 rounded-e-sm  mr-2 ' +
            (numberItem !== element ? 'opacity-0' : 'opacity-100')
          }
        ></span>
        {icon}
        <p className={numberItem === 0 ? 'text-[14px]' : 'text-[16px]'}>{title}</p>
      </li>
    );
  };

  return (
    <div className="flex flex-col static w-[16vw] max-w-[16vw] h-[90vh] max-h-[90vh] font-openSans text-white bg-darkPurple overflow-hidden">
      <img src={logo} className="w-3/4 mx-auto mt-5" />
      <ul className=" flex flex-col gap-6 mt-10  max-w-[16vw]">
        <ItemBarside icon={<></>} title={'Menú Principal'} numberItem={0} linkTo="" />
        <ItemBarside
          icon={<PiSquaresFour size={'30px'} />}
          title={'Inicio'}
          numberItem={1}
          linkTo=""
        />
        <ItemBarside
          icon={<BsSoundwave size={'30px'} />}
          title={'Albums'}
          numberItem={2}
          linkTo=""
        />
        <ItemBarside
          icon={<GiPodium size={'28px'} />}
          title={'Artistas'}
          numberItem={3}
          linkTo="artist"
        />
        <ItemBarside
          icon={<GiSoundOn size={'30px'} />}
          title={'Tendencias'}
          numberItem={4}
          linkTo=""
        />
        <ItemBarside
          icon={<GrFavorite size={'25px'} />}
          title={'Favoritos'}
          numberItem={5}
          linkTo=""
        />
      </ul>

      <ul className=" flex flex-col gap-6 mt-8 ">
        <ItemBarside icon={<></>} title={'Ayuda'} numberItem={0} linkTo="" />
        <ItemBarside
          icon={<VscSettingsGear size={'26px'} />}
          title={'Configuración'}
          numberItem={6}
          linkTo=""
        />
        <ItemBarside
          icon={<FaUserFriends size={'26px'} />}
          title={'Comunidad'}
          numberItem={7}
          linkTo=""
        />
        <ItemBarside
          icon={<IoChatbubblesOutline size={'26px'} />}
          title={'Ayuda & Soporte'}
          numberItem={8}
          linkTo=""
        />
      </ul>
    </div>
  );
};

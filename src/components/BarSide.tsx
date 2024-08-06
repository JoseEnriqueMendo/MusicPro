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
import logo from '/logo.svg';
import cropped from '/cropped.svg';

export const BarSide: React.FC<{ element: number }> = ({ element }) => {
  const navigate = useNavigate();
  const name_proyect = import.meta.env.VITE_NAME_PAGE || '';

  const goToPage = (link: string, numberItem: number) => {
    if (numberItem === 0 || link === '') return;
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
          'flex gap-3  w-full items-center  max-lg:gap-2 max-md:gap-1  ' +
          (numberItem !== element ? ' ' : 'text-greenLime hover:opacity-100') +
          (numberItem !== 0 ? ' cursor-pointer  hover:opacity-80' : ' ')
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
        <p className={'max-xl:hidden ' + (numberItem === 0 ? 'text-[14px]' : 'text-[16px]')}>
          {title}
        </p>
      </li>
    );
  };

  return (
    <div className="flex flex-col static w-[16vw] max-w-[16vw] max-xl:w-[80px]  h-[90vh] max-h-[90vh] font-openSans text-white bg-darkPurple overflow-hidden border-r-2 border-r-[#1a3050]   ">
      <img
        src={logo}
        onClick={() => navigate(name_proyect + '/home')}
        className="w-3/4 mx-auto mt-5 cursor-pointer hover:opacity-85 max-xl:hidden"
      />
      <img
        src={cropped}
        onClick={() => navigate(name_proyect + '/home')}
        className="w-3/4 mx-auto mt-5 cursor-pointer hover:opacity-85 hidden max-xl:block"
      />

      <ul className=" flex flex-col gap-6 mt-10  max-w-[16vw] ">
        <ItemBarside icon={<></>} title={'Menú Principal'} numberItem={0} linkTo="" />
        <ItemBarside
          icon={<PiSquaresFour size={'30px'} />}
          title={'Inicio'}
          numberItem={1}
          linkTo="home"
        />
        <ItemBarside
          icon={<BsSoundwave size={'30px'} />}
          title={'Categorias'}
          numberItem={2}
          linkTo="categories"
        />
        <ItemBarside
          icon={<GiPodium size={'28px'} />}
          title={'Artistas'}
          numberItem={3}
          linkTo="artists"
        />
        <ItemBarside
          icon={<GiSoundOn size={'30px'} />}
          title={'Tendencias'}
          numberItem={4}
          linkTo="tendency"
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

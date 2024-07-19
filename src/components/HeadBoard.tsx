import React from 'react';
import { PiHeart, PiShareNetworkLight } from 'react-icons/pi';

export const HeadBoardDefault: React.FC<{
  img: string;
  name: string;
  type: string;
  description: string;
  owner_name: string;
  onhandleClick: () => void;
}> = ({ img, type, name, description, owner_name, onhandleClick }) => {
  return (
    <div className="flex gap-6 w-full ">
      <figure
        className={
          'min-w-[150px] min-h-[100px] w-[200px] h-[200px] rounded-lg   ' +
          (!img ? 'animate-loading' : '')
        }
      >
        <img src={img} className={' object-cover   '} />
      </figure>

      <div className="flex flex-col justify-end gap-1 overflow-hidden h-full ">
        <p
          className={
            'font-clashDisplay text-base  w-fit pr-5 py-1 ' + (!type ? 'animate-loading' : '')
          }
        >
          {type}
        </p>
        <p className="font-clashDisplay text-4xl font-bold">{name} </p>
        <p className={' opacity-50   text-[13px] font-openSans  line-clamp-4 text-ellipsis  '}>
          {description}
        </p>
        <p className="font-clashDisplay text-base mb-1">{`Creado por: ${owner_name}`}</p>
      </div>
      <div className="flex items-center justify-end w-1/3 gap-3">
        <button
          className="rounded-md text-darkBlack bg-greenLime px-4 py-3 font-clashDisplay text-[14px] font-semibold hover:bg-lime-400"
          onClick={onhandleClick}
        >
          Reproducir
        </button>
        <PiHeart
          size={'40px'}
          className="border-white rounded-full border p-1.5 cursor-pointer"
        />

        <PiShareNetworkLight
          size={'40px'}
          className="border-white rounded-full border p-1.5 cursor-pointer"
        />
      </div>
    </div>
  );
};

export const HeadBoarBasic: React.FC<{
  img: string;
  name: string;
  type: string;
  owner_name: string;
}> = ({ img, type, name, owner_name }) => {
  return (
    <div className="flex gap-6 w-full ">
      <img
        src={img}
        className={'min-w-[150px] min-h-[100px] w-[200px] h-[200px]  rounded-lg object-cover '}
      />
      <div className="flex flex-col  justify-end  gap-2 overflow-hidden h-full">
        <p className="font-clashDisplay text-base ">{type}</p>
        <p className="font-clashDisplay text-6xl font-bold">{name} </p>
        <p className="font-clashDisplay text-xl mb-1">{`${owner_name}`}</p>
      </div>
    </div>
  );
};

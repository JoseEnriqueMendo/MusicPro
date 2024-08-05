import React from 'react';
import { BarSide } from '../components/BarSide';
import { Input } from '../components/Input';
import useHover from '../utils/useHover';

const LayoutIntern: React.FC<{ children: React.ReactNode; idBarside: number }> = ({
  children,
  idBarside,
}) => {
  const { handleMouseEnter, handleMouseLeave, isHovered } = useHover();

  return (
    <main className="min-h-[90vh] max-h-[90vh] w-full flex flex-row overflow-hidden text-white">
      <BarSide element={idBarside} />
      <div className="bg-transparent w-[67vw] max-xl:w-[80vw]  max-md:w-[100vw]   flex flex-col px-5  ">
        <Input text="Buscar música, álbum, artista..." />

        <div
          className={`overflow-y-auto overflow-x-hidden custom-scrollbar ${
            isHovered ? 'modify' : ''
          }`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          id="childrenIntern"
        >
          {children}
        </div>
      </div>
    </main>
  );
};

export default LayoutIntern;

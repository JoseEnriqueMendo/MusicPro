import React from 'react';
import { IoArrowBack } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
const name_proyect = import.meta.env.VITE_NAME_PAGE || '';

const Return: React.FC<{
  route: string;
}> = ({ route }) => {
  const navigate = useNavigate();
  return (
    <div
      className="w-full text-base text-greenLime font-openSans flex  items-center gap-1 cursor-pointer hover:text-green-500"
      onClick={() => {
        if (route !== 'none') {
          window.history.back();
        }
        navigate(`${name_proyect}/${route}`);
      }}
    >
      <IoArrowBack size={'22px'} className="cursor-pointer hover:text-lime-400" />
      Retroceder
    </div>
  );
};

export default Return;

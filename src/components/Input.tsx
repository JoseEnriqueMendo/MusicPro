import React, { useState, useEffect } from 'react';
import { PiMagnifyingGlass } from 'react-icons/pi';

export const Input: React.FC<{ text: string }> = ({ text }) => {
  const [searchBarVisible, setSearchBarVisible] = useState(false);

  const handleScroll = () => {
    const div = document.getElementById('childrenIntern');
    if (div) setSearchBarVisible(div.scrollTop > 130);
  };

  useEffect(() => {
    const div = document.getElementById('childrenIntern');

    if (div) {
      div.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (div) {
        div.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <div className={' py-5 w-[99%]  sticky' + (searchBarVisible ? 'visible ' : 'invisible ')}>
      <div className="w-full relative text-black">
        <input
          placeholder={text}
          className={
            'w-full rounded-md py-3 px-3 font-openSans font-bold text-opacity-50 text-xs '
          }
        />
        <PiMagnifyingGlass
          className="absolute right-3 font-bold top-2 cursor-pointer text-black hover:text-gray-500"
          size={'25px'}
        />
      </div>
    </div>
  );
};
export const InputSecundary: React.FC<{ text: string }> = ({ text }) => {
  return (
    <div className={' pt-5 '}>
      <input
        placeholder={text}
        className={
          'w-full rounded-md py-3 px-3 font-openSans font-bold text-opacity-50 text-xs '
        }
      />
      <PiMagnifyingGlass
        className="absolute right-3 font-bold top-2 cursor-pointer text-black hover:text-gray-500"
        size={'25px'}
      />
    </div>
  );
};

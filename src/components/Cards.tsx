import React from 'react';

export const CardMusic: React.FC<{
  url_img: string;
  name: string;
  id: string;
  abstract: string;
}> = ({
  url_img = 'https://pbs.twimg.com/profile_images/1701878932176351232/AlNU3WTK_400x400.jpg',
  name,
  id,
  abstract,
}) => {
  const handleClick = () => {
    alert(id);
  };

  return (
    <div
      className=" text-white flex flex-col gap-1 max-h-56 overflow-hidden cursor-pointer hover:bg-[#05208a] px-2 py-01"
      onClick={handleClick}
    >
      <img src={url_img} className="h-3/5 rounded-lg object-cover" />
      <p className="font-bold text-[16px] font-openSans truncate">{name}</p>
      <p className="  opacity-50   text-[13px] font-openSans  line-clamp-2 text-ellipsis ">
        {abstract}
      </p>
    </div>
  );
};

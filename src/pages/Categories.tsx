import { useEffect, useState } from 'react';
import LayoutIntern from '../layout/LayoutIntern';
import { SpotifyCategoriesResponse } from '../interface/categorie';
import categoriesServices from '../apis/categories';
import { useNavigate } from 'react-router-dom';
import Return from '../components/Return';

const Categories = () => {
  const [categoriesArray, setCategoriesArray] = useState<SpotifyCategoriesResponse>();
  const navigate = useNavigate();
  const name_proyect = import.meta.env.VITE_NAME_PAGE || '';

  const callCategories = async () => {
    const res = await categoriesServices.getSeveral(24, 2);
    setCategoriesArray(res);
  };

  useEffect(() => {
    callCategories();
  }, []);

  return (
    <LayoutIntern idBarside={2}>
      <section className="w-full mt-2 ">
        <div className="flex flex-col justify-between ml-3  gap-2">
          <Return route="none" />
          <p className="text-white font-clashDisplay font-bold text-4xl">Categorias</p>
        </div>
        <div className="grid grid-cols-4 grid-flow-row gap-5 mt-4">
          {categoriesArray?.categories.items.map((item) => {
            return (
              <div
                className=" flex flex-col items-center gap-1 hover:opacity-80 cursor-pointer"
                onClick={() => {
                  navigate(name_proyect + '/categorie/' + item.id);
                }}
              >
                <img src={item.icons[0].url} className="w-48 h-48" />
                <p className=" font-bold">{item.name}</p>
              </div>
            );
          })}
        </div>
      </section>
    </LayoutIntern>
  );
};

export default Categories;

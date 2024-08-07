import React from 'react';
import Footer from '../components/Footer';
import LeftSide from '../components/LeftSide';

interface LayoutProps {
  children: React.ReactNode;
}

const LayoutBase: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="w-[100vw] h-[100vh] flex flex-col">
      <div className="flex w-full ">
        <main className="min-h-[90vh] max-h-[90vh] flex flex-row overflow-hidden w-[80vw]  max-[900px]:w-[100vw]">
          {children}
        </main>
        <LeftSide></LeftSide>
      </div>
      <Footer />
    </div>
  );
};

export default LayoutBase;

import React from 'react';
import { ryan, aipeng } from 'public/assets';

const Home = () => {
  return (
    <div className="bg-beige h-screen flex content-center justify-center pt-20">
      {/* <h1 className="font-apparelDisplay text-10xl uppercase">ry</h1>
      <h1 className="font-apparelDisplay text-10xl uppercase">ap</h1> */}
      <div className="flex content-center justify-center">
        <img src={ryan} alt="ryan" className="h-32" />
        <h1 className="font-apparelDisplay pt-6 text-lg uppercase px-8 tracking-widest">
          and
        </h1>
        <img src={aipeng} alt="aipeng" className="h-32" />
      </div>
    </div>
  );
};

export default Home;

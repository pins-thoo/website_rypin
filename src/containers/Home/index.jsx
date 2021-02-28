import React from 'react';
import { Link } from 'react-router-dom';
import { ryan, aipeng, bg01 } from 'public/assets';
import styled from '@emotion/styled';

const Home = () => {
  const StyledDiv = styled.div`
    @media (min-width: 641px) {
      background-image: url(${bg01});
    }
  `;

  // const TransitionDiv = styled.div`
  //   a {
  //     margin: 0;
  //     padding: 0;
  //     position: absolute;
  //     top: 50%;
  //     left: 50%;
  //     transform: translate(-50%, -50%);
  //     color: #fff;
  //   }
  //   a::before {
  //     content: attr(data-content);
  //     position: absolute;
  //     color: #9da58f;
  //     overflow: hidden;
  //     width: 0;
  //     transition: 0.9s;
  //   }
  //   a:hover::before {
  //     width: 100%;
  //   }
  // `;
  return (
    <StyledDiv className="h-screen flex content-center justify-center pt-20 bg-cover bg-center">
      <div className="flex flex-col content-center">
        <div className="flex content-center justify-center">
          <h1 className="font-apparelDisplay text-10xl uppercase text-white">
            ry
          </h1>
          <h1 className="font-rareBird text-10xl text-white pt-5">&</h1>
          <h1 className="font-apparelDisplay text-10xl uppercase text-white">
            ap
          </h1>
        </div>
        <div className="flex flex-col justify-between text-white">
          <Link to="" className="text-center py-1" data-content="ABOUT US">
            ABOUT US
          </Link>
          <Link to="" className="text-center py-1" data-content="INVITATION">
            INVITATION
          </Link>
          <Link to="" className="text-center py-1" data-content="LOCATION">
            LOCATION
          </Link>
          <Link to="" className="text-center py-1" data-content="RSVP">
            RSVP
          </Link>
        </div>
      </div>

      {/* <div className="flex content-center justify-center">
        <img src={ryan} alt="ryan" className="h-32" />
        <h1 className="font-apparelDisplay pt-6 text-lg uppercase px-8 tracking-widest text-white">
          and
        </h1>
        <img src={aipeng} alt="aipeng" className="h-32" />
      </div> */}
    </StyledDiv>
  );
};

export default Home;

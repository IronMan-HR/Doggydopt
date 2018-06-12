import React from 'react';
import {Link} from 'react-router-dom';

const Home = ({findMyMatch}) => (
    <div className='home-pic'>
      <p>Adopt a local rescue dog who fits your lifestyle.</p>
      <Link className='link-main'to={'/matchMe'}>
          <button className='findMyMatch'>Find my match</button>
      </Link>
    </div>
); 

export default Home;
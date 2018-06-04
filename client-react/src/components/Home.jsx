import React from 'react';
import {Link} from 'react-router-dom';

const Home = ({findMyMatch}) => (
    <div className='home-pic'>
      <Link to={'/matchMe'}>
          <form>
              <input className='button' value="Find my match" />
          </form>
      </Link>
    </div>
); 

export default Home;
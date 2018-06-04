import React from 'react';
import {Link} from 'react-router-dom';

const Home = ({findMyMatch}) => (
    <div className='home-pic'>
      <Link to={'/matchMe'}>
          <button className='findMyMatch'>Find my match</button>
      </Link>
    </div>
); 

export default Home;


{/*<form>
              <input className='button' value="Find my match" />
          </form>*/}
import React from 'react';
import {Link} from 'react-router-dom';

const Home = ({findMyMatch}) => (
    <div className='home-pic'>
      <Link className='link-main'to={'/matchMe'}>
                <p>We aim to simplify the dog adoption process by targeting breeds that will pair favorably with your lifestyle, and locating local area dogs in need of a good home.</p>
          <button className='findMyMatch'>Find my match</button>
      </Link>
    </div>
); 

export default Home;


{/*<form>
              <input className='button' value="Find my match" />
          </form>*/}
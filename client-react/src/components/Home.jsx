import React from 'react';

const Home = ({findMyMatch}) => (
    <div className='home-pic'>
        <form onSubmit={findMyMatch}>
            <input className='button' type="submit" value="Find my match" />
        </form>
    </div>
) 

export default Home;
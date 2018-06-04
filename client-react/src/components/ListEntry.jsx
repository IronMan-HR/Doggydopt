import React from 'react';
import {Link} from 'react-router-dom';

const ListEntry = ({breed, clickHandler}) => (
  <Link to={{
    pathname: `adopt/${breed.breed}/10017`
  }}>
    <div className="column is-one-fifth">
      <div>
        <img src={/* breed.img */ 'https://www.australian-shepherd-lovers.com/image-files/fat-dogs.jpg'} alt={`Picture of a ${breed.name}`}/>
        <p>{breed.breed}</p>
      </div>
    </div>
  </Link>
)

export default ListEntry;
import React from 'react';
import {Link} from 'react-router-dom';



const ListEntry = ({breed, clickHandler, addDefaultSrc}) => (
  <Link to={{
    pathname: `adopt/${breed.breed}/10017`  // ZIPCODE CURRENTLY STILL HARDCODED
  }}>
    <div className="list-entry">
      <div className="info-container">
        <div className="cute"><img onError={addDefaultSrc} src={breed.img} alt={`Picture of a ${breed.name}`}/></div>
        <p>{breed.breed}</p>
      </div>
    </div>
    
  </Link>
)


export default ListEntry;
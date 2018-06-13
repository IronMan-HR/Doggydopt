import React from 'react';
import {Link} from 'react-router-dom';



const ListEntry = ({zipCode, breed, clickHandler, addDefaultSrc}) => {
  if (zipCode === undefined) {
    zipCode = 10017;
  }
  return (
    <Link to={{
      pathname: `adopt/${breed.breed}/${zipCode}`,
    }}>
      <div className="list-entry">
        <div className="info-container">
          <div className="cute"><img onError={addDefaultSrc} src={breed.img} alt={`Picture of a ${breed.name}`}/></div>
          <p>{breed.breed}</p>
        </div>
      </div>    
    </Link>
  )
}



export default ListEntry;
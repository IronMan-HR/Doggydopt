import React from 'react';
import {Link} from 'react-router-dom';



const ListEntry = ({zip, breed, clickHandler, addDefaultSrc}) => {
  if (zip === undefined) {
    zip = 10017;
  }
  return (
    <Link to={{
      pathname: `adopt/${breed.breed}/${zip}`,
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
import React from 'react';

const ListEntry = ({breed, clickHandler, addDefaultSrc}) => {
  // var image = breed.img? breed.img : 

  return(
  <div className="list-entry" onClick={() => clickHandler(breed)}>
    <div className="info-container">
      <img onError={addDefaultSrc} src={breed.img} alt={`Picture of a ${breed.name}`}/>
      <p>{breed.breed}</p>
    </div>
  </div>)

}

export default ListEntry;
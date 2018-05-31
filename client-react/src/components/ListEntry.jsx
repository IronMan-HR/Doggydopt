import React from 'react';

const ListEntry = ({breed, clickHandler}) => (
  <div className="column is-one-fifth" onClick={() => clickHandler(breed)}>
    <div>
      <img src={breed.img} alt={`Picture of a ${breed.name}`}/>
      <p>{breed.name}</p>
    </div>
  </div>
)

export default ListEntry;
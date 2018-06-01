import React from 'react';

const ListEntry = ({breed, clickHandler}) => (
  <div className="list-entry" onClick={() => clickHandler(breed)}>
    <div className="info-container">
      <img src={/* breed.img */ 'https://www.australian-shepherd-lovers.com/image-files/fat-dogs.jpg'} alt={`Picture of a ${breed.name}`}/>
      <p>{breed.breed}</p>
    </div>
  </div>
)

export default ListEntry;
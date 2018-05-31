import React from 'react';

const ListEntry = ({breed, clickHandler}) => (
  <div className="column is-one-fifth" onClick={() => clickHandler(breed)}>
    <div>
      <img src={/* breed.img */ 'https://www.australian-shepherd-lovers.com/image-files/fat-dogs.jpg'} alt={`Picture of a ${breed.name}`}/>
      <p>{breed.breed}</p>
    </div>
  </div>
)

export default ListEntry;
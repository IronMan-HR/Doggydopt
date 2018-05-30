import React from 'react';

const ListEntry = ({breed}) => (
  <li>
    <div>
      <img src={breed.img} alt={`Picture of a ${breed.name}`}/>
      <p>{breed.name}</p>
    </div>
  </li>
)

export default ListEntry;
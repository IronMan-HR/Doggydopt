import React from 'react';
import ListEntry from './ListEntry.jsx';

const List = ({breeds}) => (
  <div>
    <ul>
      {breeds.map((breed, i) => {
        return <ListEntry key={i} breed={breed}/>
      })}
    </ul>
  </div>
)


export default List;
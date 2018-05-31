import React from 'react';
import ListEntry from './ListEntry.jsx';

const List = ({breeds, clickHandler}) => (
  <div className="container" style={{width:'100%'}}>
    <div className="columns is-multiline">
        {breeds.map((breed, i) => {
          return <ListEntry key={i} breed={breed} clickHandler={clickHandler}/>
        })}
    </div>
  </div>
)


export default List;
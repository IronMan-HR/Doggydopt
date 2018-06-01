import React from 'react';
import ReactDOM from 'react-dom';


class AdoptList extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    if(this.props.dogs) {
      return (
        <div className="AdoptList flex big-container">
        {this.props.dogs.map((dog, i)=>{
          return(
            <div key={i} className="flex list-item container">
              <img src={dog.photo} width='250' height= '260'/>
                <div className="item-text">
                  <h2>Name: {dog.name}</h2>
                  <p>{dog.description}</p>
                  <div className="flex zip-age">
                  <h4>Age: {dog.age}</h4>
                  <h4>Zip Code: {dog.zip}</h4>
                </div>
              </div>
            </div>
          )
        })}  
        </div>
      )
    } else {
        return null;
    }
  }
}
 
  export default AdoptList;

  ReactDOM.render(<AdoptList />, document.getElementById('app'));

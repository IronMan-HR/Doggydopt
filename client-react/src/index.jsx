import React from 'react';
import ReactDOM from 'react-dom';

class AdoptList extends React.Component {
  constructor(props) {
    super(props)
    this.state ={
        dogs: [1,2,3,4,5]
    }
  }
 render() {
     console.log('this.state.dogList',this.state.dogList)
    return (
        
            <div className="AdoptList flex big-container">
      
      {this.state.dogs.map((dog, i)=>{
      return(
      
                <div key={i} className="flex list-item container">
                    <img src={dog.image} width='250' height= '260'/>
                    <div className="item-text">
                        <h2>Name: {dog.name}</h2>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                        <div className="flex zip-age">
                            <h4>Age: {dog.age}</h4>
                            <h4>1212{dog.zip}</h4>
                        </div>
                    </div>
                </div>
                
      
      )}
      
      )}      
            </div>
    )
  }
}
 
  export default AdoptList;

  ReactDOM.render(<AdoptList />, document.getElementById('app'));
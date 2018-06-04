import React from 'react';
import axios from 'axios';

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      size: [/* 'small', 'medium', 'large' */],
      energy: [/* 'low', 'moderate', 'high' */],
      hair: [/* 'low', 'moderate', 'high' */], //shedding
      familyDog:  [/* 'yes' */], //biddability
      playful: [/* 'low', 'moderate', 'high' */]
    }
    this.onClick = this.onClick.bind(this);
    this.clickSearch = this.clickSearch.bind(this);
    this.triggerButton = this.triggerButton.bind(this);
  }

  onClick(e, trait) {
    e.preventDefault();
    if (e.target.tagName === 'BUTTON') {
      let spec = e.target.innerHTML.toLowerCase();
      let arr = this.state[trait];
      let i = arr.indexOf(spec);
      if (i === -1) {
        arr.push(spec);
      } else {
        arr.splice(i, 1);
      }
      this.setState({
        trait: arr
      })
      this.triggerButton(e.target.id)
    }
   console.log(this.state); 
  }

  clickSearch() {
    this.props.search(this.state);
  }

  triggerButton(id) {
    let buttonId = document.getElementById(id);
    console.log('Before buttonId is ', buttonId)
     buttonId.style.backgroundColor = (buttonId.style.backgroundColor === 'rgb(254, 137, 18)') ? 'white' : 'rgb(254, 137, 18)';
    //  buttonId.style.backgroundColor = (buttonId.style.backgroundColor === 'white') ? 'white' : '#fe8912';
     console.log('After buttonId is ', buttonId)
  }

  render() {
    return (
        <div className="menu">
          <div style={{margin: "25px 0 0 15px"}}>
            <div className="field" onClick={(e) => this.onClick(e, 'size')}>
              <label className="label">Size</label>
              <div className="control">
                <button id='1' className="button is-small">Small</button>
                <button id='2' className="button is-small">Medium</button>
                <button id='3' className="button is-small">Large</button>
              </div>
            </div>

            <div className="field" onClick={(e) => this.onClick(e, 'energy')}>
              <label className="label">Energy</label>
              <div className="control">
                <button id='4' className="button is-small">Low</button>
                <button id='5' className="button is-small">Moderate</button>
                <button id='6' className="button is-small">High</button>
              </div>
            </div>

            <div className="field" onClick={(e) => this.onClick(e, 'hair')}>
              <label className="label">Shedding</label>
              <div className="control">
                <button id='7' className="button is-small">Low</button>
                <button id='8' className="button is-small">Moderate</button>
                <button id='9' className="button is-small">High</button>
              </div>
            </div>

            <div className="field" onClick={(e) => this.onClick(e, 'familyDog')}>
              <label className="label">Family Dog</label>
              <div className="control">
                <button id='10' className="button is-small">Yes</button>
                <button id='11' className="button is-small">No</button>
              </div>
            </div>

            <div className="field" onClick={(e) => this.onClick(e, 'playful')}>
              <label className="label">Playfulness</label>
              <div className="control">
                <button id='12' className="button is-small">Low</button>
                <button id='13' className="button is-small">Moderate</button>
                <button id='14' className="button is-small">High</button>
              </div>
            </div>
          </div>

          <br/>
          <br/>
          <br/>
          <div className="searchButtonWrapper">
            <button className="button is-link" onClick={this.clickSearch}>
              Search
            </button>
          </div>
        </div>
    )
  }
}



export default Search;

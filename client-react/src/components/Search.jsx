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
    }
   console.log(this.state); 
  }

  clickSearch() {
    this.props.search(this.state);
  }

  render() {
    return (
        <div className="menu">
          <div style={{margin: "25px 0 0 15px"}}>
            <div className="field" onClick={(e) => this.onClick(e, 'size')}>
              <label className="label">Size</label>
              <div className="control">
                <button className="button test is-small">Small</button>
                <button className="button is-small">Medium</button>
                <button className="button is-small">Large</button>
              </div>
            </div>

            <div className="field" onClick={(e) => this.onClick(e, 'energy')}>
              <label className="label">Energy</label>
              <div className="control">
                <button className="button is-small">Low</button>
                <button className="button is-small">Moderate</button>
                <button className="button is-small">High</button>
              </div>
            </div>

            <div className="field" onClick={(e) => this.onClick(e, 'hair')}>
              <label className="label">Shedding</label>
              <div className="control">
                <button className="button is-small">Low</button>
                <button className="button is-small">Moderate</button>
                <button className="button is-small">High</button>
              </div>
            </div>

            <div className="field" onClick={(e) => this.onClick(e, 'familyDog')}>
              <label className="label">Family Dog</label>
              <div className="control">
                <button className="button is-small">Yes</button>
              </div>
            </div>

            <div className="field" onClick={(e) => this.onClick(e, 'playful')}>
              <label className="label">Playfulness</label>
              <div className="control">
                <button className="button is-small">Low</button>
                <button className="button is-small">Moderate</button>
                <button className="button is-small">High</button>
              </div>
            </div>
          </div>
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

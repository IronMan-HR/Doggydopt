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
      let spec = e.target.name
      console.log('spec>>,', spec )
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
      this.triggerButton(e.target.id);
      this.props.searchNow(this.state);
    }
   console.log(this.state); 
  }

  clickSearch() {
    this.props.search(this.state);
  }

  triggerButton(id) {
    let buttonId = document.getElementById(id);
    console.log('Before buttonId is ', buttonId)
     //buttonId.style.backgroundColor = (buttonId.style.backgroundColor === 'transparent') ? 'rgb(254, 137, 18)' : 'transparent';
     buttonId.style.backgroundColor = (buttonId.style.backgroundColor === 'rgb(254, 137, 18)') ? 'transparent' : 'rgb(254, 137, 18)';
    //  buttonId.style.backgroundColor = (buttonId.style.backgroundColor === 'white') ? 'white' : '#fe8912';
     console.log('After buttonId is ', buttonId)
  }

  render() {
    return (
        <div className="menu">
        <div className="fixed-menu">
          <div style={{margin: "25px 0 0 15px"}}>
            <div className="field" onClick={(e) => this.onClick(e, 'size')}>
              <label className="label">Size</label>
              <div className="control">
                <div className = 'filter-option'>
                  <button name = 'small' id ='1' className="button small" alt='small'> </button>
                  <p>Small</p>
                </div>
                <div className = 'filter-option'>
                  <button name = 'medium' id ='2' className="button medium" alt='medium'></button>
                  <p>Medium</p>
                </div>
                <div className = 'filter-option'>
                  <button name = 'large' id ='3' className="button large" alt='large'></button>
                  <p>Large</p>
                </div>
              </div>
            </div>

            <div className="field" onClick={(e) => this.onClick(e, 'energy')}>
              <label className="label">Energy</label>
              <div className="control">
                <div className = 'filter-option'>
                  <button name = 'low' id ='4' className="button low-energy" alt='low'></button>
                  <p>Low</p>
                </div>
                <div className = 'filter-option'>
                  <button name = 'moderate' id ='5' className="button moderate-energy" alt='moderate'></button>
                  <p>Moderate</p>
                </div>
                <div className = 'filter-option'>
                  <button name = 'high' id ='6' className="button high-energy" alt='>high'></button>
                  <p>High</p>
                </div>
              </div>
            </div>

            <div className="field" onClick={(e) => this.onClick(e, 'playful')}>
              <label className="label">Playfulness</label>
              <div className="control">
                <div className = 'filter-option'>
                  <button name = 'low' id ='12' className="button low-play" alt='low'></button>
                  <p>Low</p>
                </div>
                <div className = 'filter-option'>
                  <button name = 'moderate' id ='13' className="button moderate-play" alt='moderate'></button>
                  <p>Moderate</p>
                </div>
                <div className = 'filter-option'>
                  <button name = 'high' id ='14' className="button high-play" alt='high'></button>
                  <p>High</p>
                </div>
              </div>
            </div>

            <div className="field" onClick={(e) => this.onClick(e, 'hair')}>
              <label className="label">Shedding</label>
              <div className="control">
                <div className = 'filter-option'>
                  <button name = 'low' id ='7' className="button low-shed" alt='low'></button>
                  <p>Low</p>
                </div>
                <div className = 'filter-option'>
                  <button name = 'moderate' id ='8' className="button moderate-shed" alt='moderate'></button>
                  <p>Moderate</p>
                </div>
                <div className = 'filter-option'>
                  <button name = 'high' id ='9' className="button high-shed" alt='high'></button>
                  <p>High</p>
                </div>
              </div>
            </div>

             <div className="field" onClick={(e) => this.onClick(e, 'familyDog')}>
              <label className="label">Family Dog</label>
              <div className="control">
                <div className = 'filter-option'>
                  <button name = 'yes' id ='10' className="button yes" alt='yes'></button>
                  <p>Yes</p>
                </div>
                <div className = 'filter-option'>
                  <button name = 'no' id ='11' className="button no" alt='no'></button>
                  <p>No</p>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
    )
  }
}



export default Search;

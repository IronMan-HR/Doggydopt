import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      size: [/* 'small', 'medium', 'large' */],
      exercise: [/* 'low', 'moderate', 'high' */],
      biddability: [/* 'low', 'moderate', 'high' */], //shedding
      shedding: [/* 'low', 'moderate', 'high' */],
      barking: [/* 'low', 'moderate', 'high' */],
    }
    this.onClick = this.onClick.bind(this);
    this.triggerButton = this.triggerButton.bind(this);
  }

  onClick(e, trait) {
    e.preventDefault();
    if (e.target.tagName === 'BUTTON') {
      let spec = e.target.name
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
  }

  // componentWillUnmount() {
  //   console.log('unmount triggered');
  //   this.props.resetAdoptables();
  // }

  triggerButton(id) {
    let buttonId = document.getElementById(id);
    buttonId.style.backgroundColor = (buttonId.style.backgroundColor === 'rgb(254, 137, 18)') ? 'transparent' : 'rgb(254, 137, 18)';
  }

  render() {
    return (
      <div className="menu">
            
    {/* <div className="field profile"><Link to={'/profile'}><button id="match-faves-button">SEE ALL YOUR FAVE DOGGOS!</button></Link></div> */}
            
      <div className="fixed-menu">
        <div>
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

          <div className="field" onClick={(e) => this.onClick(e, 'exercise')}>
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

          <div className="field" onClick={(e) => this.onClick(e, 'biddability')}>
            <label className="label">Playfulness</label>
            <div className="control">
              <div className = 'filter-option'>
                <button name = 'low' id ='7' className="button low-play" alt='low'></button>
                <p>Low</p>
              </div>
              <div className = 'filter-option'>
                <button name = 'moderate' id ='8' className="button moderate-play" alt='moderate'></button>
                <p>Moderate</p>
              </div>
              <div className = 'filter-option'>
                <button name = 'high' id ='9' className="button high-play" alt='high'></button>
                <p>High</p>
              </div>
            </div>
          </div>

          <div className="field" onClick={(e) => this.onClick(e, 'shedding')}>
            <label className="label">Shedding</label>
            <div className="control">
              <div className = 'filter-option'>
                <button name = 'low' id ='10' className="button low-shed" alt='low'></button>
                <p>Low</p>
              </div>
              <div className = 'filter-option'>
                <button name = 'moderate' id ='11' className="button moderate-shed" alt='moderate'></button>
                <p>Moderate</p>
              </div>
              <div className = 'filter-option'>
                <button name = 'high' id ='12' className="button high-shed" alt='high'></button>
                <p>High</p>
              </div>
            </div>
          </div>

           <div className="field" onClick={(e) => this.onClick(e, 'barking')}>
            <label className="label">Barking</label>
            <div className="control">
              <div className = 'filter-option'>
                <button name = 'low' id ='13' className="button low-bark" alt='low'></button>
                <p>Low</p>
              </div>
              <div className = 'filter-option'>
                <button name = 'moderate' id ='14' className="button moderate-bark" alt='moderate'></button>
                <p>Moderate</p>
              </div>
              <div className = 'filter-option'>
                <button name = 'high' id ='15' className="button high-bark" alt='high'></button>
                <p>High</p>
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

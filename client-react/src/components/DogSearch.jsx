import React from 'react';

class DogSearch extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      favorite: [/* 'yes', 'no' */],
      sex: [/* 'male', 'female', */],
      age: [/* 'baby', 'youth', 'adult', 'senior' */],
      vaccinated: [/* 'yes', 'no' */],
      pottyTrained:  [/* 'yes', 'no' */],
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
      });
      this.triggerButton(e.target.id);
      this.props.searchDogs(this.state);
    }
  }

  triggerButton(id) {
    let buttonId = document.getElementById(id);
    buttonId.style.backgroundColor = (buttonId.style.backgroundColor === 'rgb(254, 137, 18)') ? 'transparent' : 'rgb(254, 137, 18)';
  }

  render() {
    return (
      <div className="menu">
      <div className="fixed-menu">
        <div>
          <div className="field" onClick={(e) => this.onClick(e, 'favorite')}>
            {/* <label className="label">Favorite Of Mine</label> */}
            <div className="control">
              <div className = 'filter-option'>
                <button name = 'favorite' id ='1' className="button favorite" alt='favorite'></button>
                <p>Favorite Of Mine?</p>
              </div>
            </div>
          </div>

          <div className="field" onClick={(e) => this.onClick(e, 'sex')}>
            <label className="label">Sex</label>
            <div className="control">
              <div className = 'filter-option'>
                <button name = 'M' id ='2' className="button male" alt='M'></button>
                <p>Male</p>
              </div>
              <div className = 'filter-option'>
                <button name = 'F' id ='3' className="button female" alt='F'></button>
                <p>Female</p>
              </div>
            </div>
          </div>

          <div className="field" onClick={(e) => this.onClick(e, 'age')}>
            <label className="label">Age</label>
            <div className="control">
              <div className = 'filter-option'>
                <button name = 'Baby' id ='4' className="button baby" alt='baby'></button>
                <p>Baby</p>
              </div>
              <div className = 'filter-option'>
                <button name = 'Young' id ='5' className="button young" alt='young'></button>
                <p>Young</p>
              </div>
              <div className = 'filter-option'>
                <button name = 'Adult' id ='6' className="button adult" alt='adult'></button>
                <p>Adult</p>
              </div>
              <div className = 'filter-option'>
                <button name = 'Senior' id ='7' className="button senior" alt='senior'></button>
                <p>Senior</p>
              </div>
            </div>
          </div>

          <div className="field" onClick={(e) => this.onClick(e, 'vaccinated')}>
            <label className="label">Vaccinated</label>
            <div className="control">
              <div className = 'filter-option'>
                <button name = 'yes' id ='8' className="button" alt='yes'></button>
                <p>Yes</p>
              </div>
              <div className = 'filter-option'>
                <button name = 'no' id ='9' className="button" alt='no'></button>
                <p>No</p>
              </div>
            </div>
          </div>

            <div className="field" onClick={(e) => this.onClick(e, 'pottyTrained')}>
            <label className="label">Potty Trained</label>
            <div className="control">
              <div className = 'filter-option'>
                <button name = 'yes' id ='10' className="button" alt='yes'></button>
                <p>Yes</p>
              </div>
              <div className = 'filter-option'>
                <button name = 'no' id ='11' className="button" alt='no'></button>
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

export default DogSearch;
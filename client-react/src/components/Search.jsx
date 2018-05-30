import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <form>
        <div className="field">
          <label>Size</label>
          <div className="control">
            <button>Small</button>
            <button>Medium</button>
            <button>Large</button>
          </div>
        </div>

        <div className="field">
          <label>Energy</label>
          <div className="control">
            <button>Low</button>
            <button>Medium</button>
            <button>High</button>
          </div>
        </div>

        <div className="field">
          <label>Hair</label>
          <div className="control">
            <button>Short</button>
            <button>Long</button>
          </div>
        </div>

        <div className="field">
          <label>Family Dog</label>
          <div className="control">
            <button>Yes</button>
          </div>
        </div>
      </form>
    )
  }
}



export default Search;

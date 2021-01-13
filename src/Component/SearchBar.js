import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
  state = { term: '' };

  onFormSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div >
        <form onSubmit={this.onFormSubmit} >
            <input
            className="search"
              type="text"
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
              placeholder={this.props.placeholder}
            />
        </form>
      </div>
    );
  }
}

export default SearchBar;

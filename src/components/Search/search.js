import React, { Component } from "react";
class Search extends Component {
  state = {};
  render() {
    return (
      <div className="search_parent">
        <input
          type="text"
          placeholder={this.props.placeholder}
          onChange={e => this.props.onChangeHandler(e)}
        ></input>
      </div>
    );
  }
}

export default Search;

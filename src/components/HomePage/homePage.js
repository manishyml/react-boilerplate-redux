import React, { Component } from "react";
import { connect } from "react-redux";
import SearchBar from "../Search/search";
import ACTIONS from "../../constants/action-types";
import STRINGS from "../../constants/strings";
import "./homePage.less";

class Home extends Component {
  state = {
    imageUrl: [],
    imageOfSubCategories: []
  };
  handleSearch = e => {
    this.setState({ query: e.target.value }, () => {
      console.log(this.state.query);
    });
  };

  searchPlace = () => {
    this.props.fetchVenues(this.state.query);
  };

  render() {
    return (
      <div className="home_parent">
        <div className="heading_text">
          <div className="placeholder_text">{STRINGS.HOME.LOOKING_TEXT}</div>
          <div className="placeholder_text">{STRINGS.HOME.LOOKING_TEXT2}</div>
        </div>
        <div className="searchbar_parent">
          <SearchBar
            onChangeHandler={this.handleSearch}
            placeholder="Search..."
          />
        </div>
        <div className="explore_btn" onClick={this.searchPlace}>
          Explore
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    testMsg: state.fetchList.testMsg
  };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchVenues: query => {
      dispatch({ type: ACTIONS.SEARCH.LOAD_VENUE_LIST, data: query });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

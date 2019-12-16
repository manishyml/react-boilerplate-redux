import React, { Component } from "react";
import { connect } from "react-redux";
import Landing from "../HomePage/homePage";
import ACTIONS from "../../constants/action-types";
import "./pageList.less";

class PageList extends Component {
  state = {};

  componentDidMount() {
    this.props.getCategories();
  }
  render() {
    return (
      <div className="pagelist_parent">
        <Landing />
        <Landing />
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
    getCategories: () => {
      dispatch({ type: ACTIONS.SEARCH.GET_CATEGORIES });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PageList);

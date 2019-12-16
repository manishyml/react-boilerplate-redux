import ACTIONS from "../constants/action-types";
const initialState = {
  articles: [],
  testMsg: "TEst MESSAGE"
};
function fetchList(state = initialState, action) {
  if (action.type === ACTIONS.SEARCH.ADD_ARTICLE) {
    let tempState = Object.assign({}, state);
    tempState.articles.push(action.payload);
    return tempState;
  }
  return state;
}
export default fetchList;

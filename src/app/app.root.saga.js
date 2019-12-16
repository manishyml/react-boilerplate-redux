import { all, call, put, takeEvery } from "redux-saga/effects";
import ACTIONS from "../constants/action-types";
import { fetchToDoList, fetchCategories } from "../sagas/fetchList.saga";

export default function* rootSaga() {
  yield all([
    yield takeEvery(ACTIONS.SEARCH.LOAD_VENUE_LIST, fetchToDoList),
    yield takeEvery(ACTIONS.SEARCH.GET_CATEGORIES, fetchCategories)
  ]);
}

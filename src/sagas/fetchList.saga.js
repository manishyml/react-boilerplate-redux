import { all, call, put, takeEvery } from "redux-saga/effects";
import { getData } from "../axios/apiCall";
import APIURL from "../axios/apiUrls";

const client_id = "524PR0P3MTDBVP2STYZ5UFHGSBQ5UW2GWDZUAKMPX13Z1WOB";
const client_secret = "KJV1BW0BIG5G1NCTBULEXTIZJ4NSL4OBFTIEUSLMSQLHQAIZ";
const v = "20190425";

function* fetchCategories(action) {}

function* fetchToDoList(action) {
  const URL = APIURL.explore;
  const params = {
    client_id,
    client_secret,
    v,
    near: action.data,
    query: "pub",
    offset: 5,
    limit: 10,
    price: "2,3"
  };
  const result = yield call(getData, URL, params);
  console.log({ result });
}

export { fetchToDoList, fetchCategories };

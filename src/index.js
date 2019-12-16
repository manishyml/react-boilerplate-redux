import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import App from "./app/app";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers/index";
import rootSaga from "./app/app.root.saga";
const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);

if (module.hot) {
  module.hot.accept(App, () => {
    const NextApp = App;
    ReactDOM.render(
      <Provider store={store}>
        <NextApp />
      </Provider>,
      document.querySelector("#root")
    );
  });
}

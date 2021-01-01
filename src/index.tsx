import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { createBrowserHistory } from "history";
import "react-widgets/dist/css/react-widgets.css";
import "semantic-ui-css/semantic.min.css";
import "react-toastify/dist/ReactToastify.min.css";
//import "react-calendar/dist/Calendar";
import "./App.css";
import App from "./app/App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import configureStore from "./app/store/configureStore";
import ScrollToTop from "./app/features/ScrollToTop";
//import { fetchEvents } from "./app/features/events/eventAction";
//import ScrollToTop from './app/layout/ScrollToTop';
//import dateFnsLocalizer from 'react-widgets-date-fns';

//dateFnsLocalizer();

export const history = createBrowserHistory();
const store = configureStore();
//store.dispatch(fetchEvents());
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </Provider>,

  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

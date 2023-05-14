

import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";

// core styles
import "./scss/main.scss";

// vendor styles
import "@fortawesome/fontawesome-free/css/all.css";
import "react-datetime/css/react-datetime.css";
import { Provider } from "react-redux";
import { store, persistor } from "./store";
import HomePage from "./pages/HomePage";
import ScrollToTop from "./components/ScrollToTop";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.render(
  <HashRouter>
    <ScrollToTop />
    <Provider store={store}>
      <PersistGate persistor={persistor }>
        <HomePage />
      </PersistGate>
    </Provider>
  </HashRouter>,
  document.getElementById("root")
);

import React from "react";
import { Provider } from "react-redux";
import Store from "./redux/store/ConfigureStore";
import Routes from "./components/routes/Routes";

import "./App.scss";

export default class App extends React.Component {
  render() {
    return (
      <Provider store={Store}>
        <Routes />
      </Provider>
    );
  }
}

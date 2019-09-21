import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import Routes from "./routes";
import './App.css'

const App = () => (
  <Provider store={store}>
    <div className='App'>
      <Routes />
    </div>
  </Provider>
);

export default App;
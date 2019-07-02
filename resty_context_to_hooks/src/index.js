import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import * as serviceWorker from './serviceWorker';
import AppContext from "./components/app/app-context.js";

class Main extends React.Component {
  render (){
    return (
      <AppContext>
        <App />
      </AppContext>
    )
  }
}

ReactDOM.render(<Main />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

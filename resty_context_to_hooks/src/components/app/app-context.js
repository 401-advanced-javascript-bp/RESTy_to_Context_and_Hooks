import React from 'react';

import superagent from 'superagent';

export const AppContext = React.createContext();

class AppProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      apiData: {},
      method: '',
      handleSubmit: this.handleSubmit,
      handleChange: this.handleChange,
      handleRadioChange: this.handleRadioChange,
    }

  }

  handleSubmit = async event => {
    event.preventDefault();
    //this.state.value represents whatever text the user enters
    let data = await superagent.get(this.state.value);
    //this.props.share is the property share on form in app.js
    //this.state.value is the value provided by the user in the form
    //is invoked when user clicks Go! button
    //this was the shareData function passed from the parent App to be used/invoked by child Form
    this.setState({apiData: data});
  
    // this.props.outputData(this.state.apiData);
    console.log('the go button works!', data);
}

handleChange = (event) => {
    //the event is an object
    //the target is the input (literally the input tag)
    //the value is whatever text is sitting in the input tag
    //cannot manipulate state directly in React
    this.setState({value: event.target.value});
    console.log('this is user input', event.target.value);
}
handleRadioChange = (event) => {
    // let form = [];
    this.setState({method: event.target.value});
    console.log('this is this.state.method', this.state.method);
    console.log('this is event.target.value', event.target.value);
    
}

  render(){
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export default AppProvider;


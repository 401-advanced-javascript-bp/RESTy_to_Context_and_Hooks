import React from 'react';

//make sure reset.css is imported first
import './css/reset.css';
import './css/style.css';
import './css/resty.css';

import Header from './components/header';
import Form from './components/form';
import History from './components/history';
import Output from './components/output';
import Footer from './components/footer';

class App extends React.Component {
  constructor (props){
    super(props);
    this.state = {
      url:[],
      data:{
        headers: {},
        body: {},
      },
    };
  }

  //an arrow function binds to contextual this
  //a normal function will not
  shareData = (userInput, apiData) => {
    
    let arr = this.state.url.concat(userInput);
    this.setState({url: arr});
    this.setState({data: apiData});
    console.log('this is apiData', this.state.data);
    console.log('this is this.state.url', this.state.url);
    
  }

  render() {
    return (
    <>
    <Header/>
    {/*added a share property to the Form component*/}
    <Form share={this.shareData}/>
    <History urlData={this.state.url}/>
    <Output outputData={this.state.data}/>
    <Footer/>
    </>
    );
  }
}

export default App;

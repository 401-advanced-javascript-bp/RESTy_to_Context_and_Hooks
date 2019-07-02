import React from 'react';
import ReactJson from 'react-json-view';

class Output extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return (
          <>
          <ReactJson
            name="Headers"
            enableClipboard={false}
            collapsed={true}
            src={this.props.outputData.headers}
          />
          <ReactJson
            name="Response"
            enableClipboard={false}
            collapsed={false}
            src={this.props.outputData.body}
          />
          </>

        )
    }
}

export default Output;
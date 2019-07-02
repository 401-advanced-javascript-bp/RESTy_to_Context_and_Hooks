import React from 'react';
// import History from './comp'

class History extends React.Component {
    constructor(props) {
        super(props);
    }

    //don't forget to add id="history" to ul when finished
    render(){
        return (
            <ul>
                {this.props.urlData.map((url, idx) => {
                    return (
                        <li key={idx} >
                            <p>GET</p>
                            <p>{url}</p>
                        </li>
                )
            })
            
            
          }
          </ul>
        )
    }
}

export default History;
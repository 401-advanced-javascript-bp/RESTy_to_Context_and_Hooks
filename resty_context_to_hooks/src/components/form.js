import React from 'react';
import superagent from 'superagent';
import { AppContext } from './app/app-context';


class Form extends React.Component {
    static contextType = AppContext;
    render(){
        return(
            <form onSubmit={this.context.handleSubmit}>
                <input type="text" onChange={this.context.handleChange} name="url" placeholder="URL" value={this.context.value} />
                <div>
                    <label>
                        <input type="radio" name="method" value="get" onChange={this.context.handleRadioChange}/>
                        <span>GET</span>
                    </label>
                </div>
                <button type="submit">Go!</button>
            </form>
        )
    }
}
export default Form;





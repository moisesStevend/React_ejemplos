import React,{Component} from 'react';

export default class Buscador extends Component {

    render() {
        return (
            <div className="class-name">
                <input
                  type="text"
                  onChange={this.props.onChange}
                />
            </div>
        );
    }
}

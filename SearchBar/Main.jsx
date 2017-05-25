import React,{Component} from 'react';
import Buscador from './Buscador.jsx'
import Campo2 from './Campo2.jsx'

export default class Main extends Component {
    constructor(props){
      super(props);

    }
    componentDidMount() {

    }
    onChange(e){
      console.log(e.target.value)
    }
    render() {
        return (
            <div className="class-name">
              <Buscador onChange={this.onChange}/>
              <Campo2/>
              <Campo2/>
              {this.nameInput}
            </div>
        );
    }
}

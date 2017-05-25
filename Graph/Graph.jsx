import React,{Component} from 'react';

import Gen_graph from './Gen_graph.jsx'

export default class Graph extends Component {
  constructor(props){
    super(props);
    this.state = {
        valor: 0,
    };
  }
    cambio(e){
      console.log(e.target.value)
      if (e.target.value===''){
        this.setState({
          valor: 0,
        })
      }else{
        this.setState({
          valor:e.target.value,
        })
      }
    }
    render(){
      return(
        <div>
          <input onChange={this.cambio.bind(this)}/>
          <Gen_graph valor={this.state.valor} range={[0,8]}/>
        </div>
      );
    }
}

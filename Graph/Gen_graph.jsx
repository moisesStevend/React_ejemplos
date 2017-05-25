import React,{Component} from 'react';

import Rec_plot from './Rec_plot.jsx'

export default class Gen_graph extends Component {
    constructor(props){
    	super(props);
    	this.state = {
        //  valor: 0,
          value_x: new Array(25).fill(0),
          value_y: new Array(25).fill(new Date().toLocaleTimeString()),
          time: new Date().getTime(),
      };
      this.tick=this.tick.bind(this)
    }
/*    cambio(e){
      console.log(e.target.value)
      if (e.target.value===null){
        this.setState({
          valor: 0,
        })
      }else{
        this.setState({
          valor:e.target.value,
        })
      }
    }*/
    tick(){
      var a=this.state.value_x;
      var b=this.state.value_y;
      //var value=parseFloat(this.state.valor);
      var value=parseFloat(this.props.valor);    

      a.map(function(d,i){
        if(i<a.length-1){
          a[i]=a[i+1]
        }else{
          a[a.length-1]=value
        };
        return 'correcto'
      })

      b.map(function(d,i){
        if(i<b.length-1){
          b[i]=b[i+1]
        }else{
          b[b.length-1]=new Date().toLocaleTimeString()//new Date().getTime()
        };
        return 'correcto'
      })
      console.log(a)
      console.log(b)

      this.setState({
        value_x: a,
        value_y: b,
      })

      this.setState({
        time: new Date().getTime(),
      })
   }
    componentDidMount() {
      this.inter=setInterval(this.tick, 1000);
    }
    componentWillUnmount() {
      clearInterval(this.inter)
    }
    render(){
      return(
        <div>
          <Rec_plot y={this.state.value_x} x={this.state.value_y} range={this.props.range}/>
        </div>
      );
    }
}
//          <input onChange={this.cambio.bind(this)}/>

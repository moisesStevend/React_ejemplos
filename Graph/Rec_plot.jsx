import React,{Component} from 'react';
import createPlotlyComponent from 'react-plotlyjs';

import Plotly from 'plotly.js/dist/plotly-cartesian';
const PlotlyComponent = createPlotlyComponent(Plotly);

export default class Rec_plot extends Component {
/*
  constructor(props){
    super(props);
    this.state = {
      value_x: [0,0,0,0,0,0,0,0,0,0],
      value_y: [0,0,0,0,0,0,0,0,0,0],
    };
    this.gen_graph=this.gen_graph.bind(this)
  }
    componentDidMount() {
      this.inter=setInterval(this.gen_graph(this.props.x, this.props.y), 1000);
    }
    componentWillUnmount() {
      clearInterval(this.inter)
    }
  gen_graph(x,y) {

      var a=this.state.value_x;
      var b=this.state.value_y;

      console.log(a)
      console.log(b)

      a.map(function(d,i){
        if(i<a.length-1){
          a[i]=a[i+1]
        }else{
          a[a.length-1]=parseInt(x)
        };
        //console.log(a[i],i)
        return 'correcto'
      })

      b.map(function(d,i){
        if(i<b.length-1){
          b[i]=b[i+1]
        }else{
          b[b.length-1]=parseInt(y)
        };
        return 'correcto'
      })
      console.log(a)
      console.log(b)

      this.setState({
        value_x: a,
        value_y: b,
      })
      */
  /*  return [{
      x: a,
      y: b,
    }]
    */
    /*
  }
  */
  render() {
      return (
          <div className="class-name">
              <PlotlyComponent
                className="whatever"
                data={
                  [{
                    x: this.props.x,
                    y: this.props.y,
                  }]
                }
                layout={
                  {
                    title: 'Plot SAR',
                    showlegend: false,
                    width: 550,
                    height: 500,
                    autosize: false,
                    yaxis: {range: this.props.range}
                  }
                }
              />
          </div>
      );
  }
}

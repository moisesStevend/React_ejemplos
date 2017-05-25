/*
import React,{Component} from 'react'
import mqtt from 'wt-mqtt'
import Plotear from './Plotear.jsx'

export default class Receiver extends Component{
  constructor(props){
    super(props);
    var settings = {
        username: 'meteor_sar3001',
        clientId: 'meteor_sar3001',
        clean: false,
    }
    this.client = mqtt.connect('ws://10.10.40.185:9001',settings)
  }
  componentWillMount() {

    this.client.subscribe('sar-data',{qos: 2})

    this.client.on('connect', () => {
      console.log('mqtt connected')
    })
//import React
    this.client.on('message', (topic, payload) => {
      //console.log(payload.toString())

      let json = JSON.parse(payload)
      console.log(json)
    })
	}
  render(){
    return(
      <div>
        <Plotear/>
      </div>
    );
  }
}
  //<Plotear/>
*/

import React,{Component} from 'react'
import mqtt from 'wt-mqtt'
import createPlotlyComponent from 'react-plotlyjs';
//See the list of possible plotly bundles at https://github.com/plotly/plotly.js/blob/master/dist/README.md#partial-bundles or roll your own
import Plotly from 'plotly.js/dist/plotly-cartesian';
const PlotlyComponent = createPlotlyComponent(Plotly);

function setFigure(z){
  //console.log(z)
  var mi_data_real=[]
  var mi_data_imag=[]
  var mi_data=[]
  var mi_data2=[]
  var mi_data_ifft=[]

  var real=JSON.parse(z.data_real)
  var imag=JSON.parse(z.data_imag)
  /*
  Object.keys(z).map(function(key,index){
    mi_data.push(z[key])
  })
*/

  for (var i in real) {
    if (real.hasOwnProperty(i)) {
      mi_data_real.push(real[i])
    }
  }
  for (var j in imag) {
    if (imag.hasOwnProperty(j)) {
      mi_data_imag.push(imag[j])
    }
  }
  //console.log("mi real: ")
  //console.log(mi_data_real)
  //console.log("imag: ")
  //console.log(mi_data_imag)
/////////////////absoluto/////////////////////////////////
  mi_data_real[0].forEach(function(e,f){
      mi_data.push(Math.sqrt(Math.pow(e,2))+Math.pow(mi_data_imag[0][f],2))
  })
/////////////////////////////////////////////////////////
//console.log(mi_data)
 mi_data2.push(mi_data)
 //console.log("abs: ")
 //console.log(mi_data2)
/*
 Meteor.call('methods_iftt', mi_data_real, mi_data_imag,function(error,result){
   console.log(result)
   //result.forEach(function(e,f){
  //     mi_data_ifft.push(Math.sqrt(Math.pow(e,2))+Math.pow(mi_data_imag[0][f],2))
   //})
 })
*/
  /*
a.forEach((e,f)=>{console.log(e*b[f])})
  */
  /*
  for(let i in z){
    mi_data.push(z[i])
  }
  */
  //console.log(mi_data.reverse())
//  console.log(typeof(mi_data))
  //return mi_data

  return{
    data: [
      {
        z: mi_data2.reverse(),//mi_data.reverse(),
        type: 'heatmap'
      }
    ],
  }
}
/******************************************************************************************/
function setFigure2(z){
  var mi_data=[]
  var mi_data2=[]
  /*
  Object.keys(z).map(function(key,index){
    mi_data.push(z[key])
  })
*/

  for (var i in z) {
    if (z.hasOwnProperty(i)) {
      mi_data.push(z[i])
    }
  }
  console.log(mi_data)
  /*
  for(let i in z){
    mi_data.push(z[i])
  }
  */
  //console.log(mi_data.reverse())
//  console.log(typeof(mi_data))
  //return mi_data
  mi_data2.push(mi_data)
  return{
    data: [
      {
        //z: mi_data.reverse(),//mi_data.reverse(),
        z: mi_data2.reverse(),
        type: 'heatmap'
      }
    ],
  }
}
//x: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
//y: ["Morning", "Afternoon", "Evening"],
export default class Receiver extends Component{

  constructor(props){
    super(props);
    this.state={
      data: [],
    }

    var settings = {
        username: 'fdatos',
        clientId: 'fdatos',
        clean: false,

    }
    this.client = mqtt.connect("ws://10.10.40.185:9001/mqtt",settings)//mqtt.connect('ws://10.10.40.185:8083',settings)
  }
  componentWillMount() {
    this.client.subscribe('procesados',{qos: 2})
    this.client.on('connect',()=>{
      console.log("mqtt conectado")
    })

    this.client.on('message',(topic,payload)=>{
      let json_payload=JSON.parse(payload)
      //console.log(json_payload)
      //let json_data=json_payload["data"]
      //console.log(json_data)
      //console.log(json_payload["data"])


      let json_data=JSON.parse(json_payload["data"])
      //let json_data=json_payload["data"]
      console.log(json_data)
      /*
      //console.log(json_payload)
      //console.log(json_data)
      //console.log(json_data[0])
      //console.log(typeof(json_data))
      */
      this.setState({
        //data: setFigure(json_payload["data"]),
        data: setFigure2(json_data),
      })
    })
  }//fin del componentWillMount

  render(){
    return(
      <div>
        <Plotear data={this.state.data}/>
      </div>
    );
  }
}
//<Plotear data={this.state.data}/>

class Plotear extends Component{
  render(){
    return(
      <PlotlyComponent className="whatever" data={this.props.data}/>
    );
  }
}

Plotear.defaultProps={
  data: [
    {
      z: [
          [1, 30, 30],
          [20, 1, 60],
          [35, 60, 1]
        ].reverse(),
      type: 'heatmap'
    }
  ],
}

/*
import { Meteor } from 'meteor/meteor';

var mqtt = require('mqtt')
var client  = mqtt.connect('mqtt://10.10.40.185')

client.on('connect', function () {
  client.subscribe('presence')
})

client.on('message', function (topic, payload) {
  let json_payload=JSON.parse(payload)

  console.log(json_payload)

  let json_data=JSON.parse(json_payload.data)
  console.log(json_data)
  console.log(json_data[0])
  console.log(typeof(json_data))
  //client.end()
})


*/

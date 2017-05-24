import React,{Component} from 'react';

export default class DateTimer extends Component {
  constructor(props){
    super(props);
    this.state={
      time: new Date().toLocaleTimeString(),
    }
    this.tick=this.tick.bind(this)
  }
    tick(){
      this.setState({
        time: new Date().toLocaleTimeString(),
      })
   }
    componentDidMount() {
      this.inter=setInterval(this.tick, 1000);
    }
    componentWillUnmount() {
      clearInterval(this.inter)
    }
    render() {
        return (
            <div>
                <h1>Date time</h1>
                <div>
                  <h2>son las: {this.state.time}</h2>
                </div>
            </div>
        );
    }
}

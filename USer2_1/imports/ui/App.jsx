import React,{Component} from 'react';
import { Meteor } from 'meteor/meteor';
import AccountsUIWrapper from './AccountsUIWrapper.jsx';
import {Smartdb} from '../api/smartdb.js'

export default class App extends Component {
  constructor(props){
  	super(props);
  	this.state = {
      datos: 0,
      visu: false,
    };
  }
    clickme(e){
      e.preventDefault();
      this.setState({
        visu: !this.state.visu,
      })
      Smartdb.insert({
            text: this.state.datos,
            createdAt: new Date(), // current time
            owner: Meteor.userId(),           // _id of logged in user
            username: Meteor.user().username,  // username of logged in user
          });

    }
    change(e){
      this.setState({
        datos: e.target.value,
      })
    }
    render() {
        return (
            <div className="class-name">
                <AccountsUIWrapper />
                <input onChange={this.change.bind(this)}/>
                <button onClick={this.clickme.bind(this)}>clickMe</button>
                <p>{this.state.visu ? this.state.datos : ''}</p>
            </div>
        );
    }
}

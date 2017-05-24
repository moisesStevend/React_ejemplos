import React,{Component} from 'react';

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}

export default class Botones extends Component {
    constructor(props){
      super(props);
      this.state={
        isToggleOn: true,
        isLogout: true,
      }
      this.handleClick=this.handleClick.bind(this)
      this.handleLogoutClick=this.handleLogoutClick.bind(this)
    }
    handleClick(e){
      e.preventDefault();

      this.setState({
        isToggleOn: !this.state.isToggleOn,
      })
    }
    handleLogoutClick(e){
      e.preventDefault();
      this.setState({
        isLogout: !this.state.isLogout,
      })
    }
    render() {
        return (
            <div className="class-name">
                <button onClick={this.handleClick}>
                  {this.state.isToggleOn ? 'ON' : 'OFF'}
                </button>
                {this.state.isToggleOn ? (<LogoutButton onClick={this.handleLogoutClick}/>) : (<p>Nada</p>)}

                <p>{this.state.isLogout ? 'true' : 'false'}</p>
            </div>
        );
    }
}

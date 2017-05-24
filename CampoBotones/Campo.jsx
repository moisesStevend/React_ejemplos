import React,{Component} from 'react';
import Button1 from './Button1.jsx'

export default class Campo extends Component {
    constructor(props){
        super(props);
        this.state={
        }

        this.valores=[
          {config: 'Xi', name: 'inicio'},
          {config: 'Xf', name: 'final'}
        ]
    }
    constCampo(){
      return this.valores.map((t)=>(
            <li key={t.name} style={{listStyleType: 'none'}}> <Button1 config={t.config} name={t.name}/></li>

      ))
    }
    render() {
        return (
            <div className="class-name">
              <ul>
                {this.constCampo()}
                </ul>
            </div>
        );
    }
}

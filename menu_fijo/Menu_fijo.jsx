import React,{Component} from 'react';
import $ from "jquery";
import './style/main.css'
import {Text} from './text.js'

export default class Menu_fijo extends Component {
    constructor(props){
    	super(props);
    	this.state = {};
    }
    componentDidMount() {
      var altura = $(".menu").offset().top;
      //alert(altura)
      $(window).on('scroll',function(){
        if($(window).scrollTop() > altura){
          $('.menu').addClass('menu-fixed');
        }else{
          $('.menu').removeClass('menu-fixed');
        }
      })
    }
    render() {
        return (
            <div className="class-name">
                <div>
                  <img alt="true" src="loro.jpg"/>
                </div>

                <nav className="menu">
                  <ul>
                    <li><a href='#'>Menu</a></li>
                    <li><a href='#'>Ayuda</a></li>
                    <li><a href='#'>Conocenos</a></li>
                    <li><a href='#'>Aprende</a></li>
                  </ul>
                </nav>

                <Text/>
            </div>
        );
    }
}

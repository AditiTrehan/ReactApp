import React ,{Component} from "react";
import Footer from './Footer';
import Menu from './Menu';
import MiddleContainer from './MiddleContainer';
import cookie from 'react-cookies';

import './Nugen.css';

class Nugen extends Component{


    constructor(props){
        super(props);
            if(cookie.load('token')== undefined){
                this.props.history.push('/');
            }
        this.state = {
            menus: ["Home","About","Contact","Gallery","Portfolio"]
        };
    }


    render(){
        return(
            <div className="container">
                <Menu menus={this.state.menus}/>
                <MiddleContainer history={this.props.history} baseUrl={this.props.baseUrl}/>
                <Footer txt="Text from parent component"/>
            </div>
        );
    }
}

export default Nugen;
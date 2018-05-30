import React , {Component} from "react";
import './Footer.css';
import Heading from './Heading';

class Footer extends Component{
    render(){
        return(
            <div className="footer">
                <h1>{ this.props.txt }</h1>
                <Heading title="Footer content" author="Aditi" id="2"/>
            </div>
        );
    }
}

export default Footer;
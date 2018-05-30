import React,{Component} from 'react';
import './Dashboard.css';
import Navigation from './Navigation';
import Rightcolumn from './Rightcolumn';
import cookie from 'react-cookies';


class Dashboard extends Component{


    render(){
        return(
            <div className="DWrapper clearfix">
                <div className="DContainer clearfix">
                    <Navigation/>
                    <Rightcolumn history={this.props.history} baseUrl={this.props.baseUrl}/>
                 
                </div>
                
            </div>
        );
    }
}

export default Dashboard;

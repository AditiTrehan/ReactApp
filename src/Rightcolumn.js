import React,{Component} from 'react';
import './Dashboard.css';
import whitebar from './whitebar.svg';
import graph from './graph.svg';
import cart from './cart.svg';
import dollar from './dollar.svg';
import dashboard from './dashboard.svg';
import ContentContainer from './ContentContainer';
import cookie from 'react-cookies';


class Rightcolumn extends Component{

    constructor(props){
        super(props);
            if(cookie.load('token')==undefined){
                this.props.history.push('/login');
            }
    }

    logout=()=>{
        cookie.remove('token');
        this.props.history.push("/");
    }

    render(){
        return(

            <div className="DRightColumn">
            <div className="RightHeader clearfix">
                <div className="BarBox">
                <img src={whitebar} width="40" height="50px"/>
                </div>
                <div className="SearchBox">
                    <input type="text" className="Search" placeholder="Search"/>
                   
                </div>
                <button onClick={this.logout} className="button">LOGOUT</button>
                
            </div>

            <div className="MainContainer clearfix">
                <div className="ContentHeader">
                <div className="Icon-box width">
                    <img src={dashboard} width="25" height="50px"/>
                </div>
                <div className="Text-box"><h2>Dashboard</h2></div>
                </div>
                <div className="StatsRow clearfix">
                    <div className="StatsBox">
                        <div className="StatsIcon">
                        <img src={graph} width="60" height="100px"/>
                        </div>
                        <div className="StatsContent color">
                            <h2>Visitors</h2>
                            <h3>1,2345</h3>
                        </div>
                    </div>
                    <div className="StatsBox">
                    <div className="StatsIcon">
                        <img src={cart} width="60" height="100px"/>
                        </div>
                        <div className="StatsContent color">
                            <h2>Orders</h2>
                            <h3>5670</h3>
                        </div>
                    </div>
                    <div className="StatsBox">
                    <div className="StatsIcon">
                        <img src={dollar} width="60" height="100px"/>
                        </div>
                        <div className="StatsContent color">
                            <h2>Revenue</h2>
                            <h3>78,539</h3>
                        </div>
                    </div>
                </div>
                    
               <ContentContainer/> 
            </div>

               
        </div>
        );
    }
}

export default Rightcolumn;
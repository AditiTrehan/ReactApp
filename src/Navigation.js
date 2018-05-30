import React,{Component} from 'react';
import './Dashboard.css';
import user from './user.svg';
import dashboard from './dashboard.svg';
import file from './file.svg';
import pricing from './pricing.svg';
import heart from './heart.svg';
import newservice from './newservice.svg';
import support from './support.svg';

class Navigation extends Component{
    render(){
        return(
            <div className="DLeftColumn">
                        <div className="LeftHeader clearfix">
                          
                        <h1>Admin</h1>
                        </div>
                        <div className="ProfileImage clearfix">
                            <div className="Profile">
                                <img src={user} width="120" height="146"/>
                            </div>
                        </div>
                        <div className="Content-box clearfix">
                            <div className="Icon-box">
                                <img src={dashboard} width="25" height="50px"/>
                            </div>
                            <div className="Text-box"><h3>Dashboard</h3></div>
                        </div>
                        <div className="Content-box clearfix">
                            <div className="Icon-box">
                            <img src={file} width="25" height="50px"/>
                            </div>
                            <div className="Text-box"><h3>Forms</h3></div>
                        </div>
                        <div className="Content-box clearfix">
                            <div className="Icon-box">
                            <img src={pricing} width="25" height="50px"/>
                            </div>
                            <div className="Text-box"><h3>Pricing</h3></div>
                        </div>
                        <div className="Content-box clearfix">
                            <div className="Icon-box">
                            <img src={heart} width="25" height="50px"/>
                            </div>
                            <div className="Text-box"><h3>Icons</h3></div>
                        </div>
                        <div className="Content-box clearfix">
                            <div className="Icon-box">
                            <img src={newservice} width="25" height="50px"/>
                            </div>
                            <div className="Text-box"><h3>Services</h3></div>
                        </div>
                        <div className="Content-box clearfix">
                            <div className="Icon-box">
                            <img src={support} width="25" height="50px"/>
                            </div>
                            <div className="Text-box"><h3>Support</h3></div>
                        </div>
                    </div>

        );
    }
}

export default Navigation;
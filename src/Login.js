import React , {Component} from 'react';
import Helper from './Helper';
import './Login.css';
import cookie from 'react-cookies';


class Login extends Component{
    constructor(){
        super();
        this.state={
            email:'',
            password:''
        };
    }

    setEmail = (e)=>{
        this.setState({
            email:e.target.value
        });
    }

    setPassword = (e)=>{
        this.setState({
            password:e.target.value
        });
    }

    login=()=>{
        let body= JSON.stringify({
            email:this.state.email,
            password:this.state.password
        });

        let res=Helper("http://vidyapeethclasses.in/api/v1/login",'POST',body);
        res.then((res)=>{
            if(res.access_token !== undefined){
                cookie.save('token',res.access_token);
                this.props.history.push('/dashboard');
            }
            else{
                alert("Wrong username/password");
            }
        });
    }
    render(){
        return(

            <div className="Wrapper clearfix">
                <div className="LoginBox center">
                    <div className="LoginHeader">
                        <h1>User Login</h1>
                    </div>
                    <div className="UsernameBox">
                        <input type="text" className="adjust" placeholder="Username" onKeyUp={this.setEmail}/>
                    </div>
                    <div className="UsernameBox">
                        <input type="password" className="adjust" placeholder="Password" onKeyUp={this.setPassword}/>
                    </div>
                    <div className="LoginFooter">
                        <div className="LoginButton center">
                            <button onClick={this.login} className="style center">
                            <h1>LOGIN</h1>
                            </button>
                        </div>
                    </div>
                </div>                        
            </div>
        );
    }
}

export default Login;
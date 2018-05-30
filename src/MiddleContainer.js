import React ,{ Component } from "react";
import './MiddleContainer.css';
import Eventhandling from './Eventhandling';
import Button from './Button';
import Post from './Post';
import 'whatwg-fetch';
import User from './User';
import {Link} from 'react-router-dom';
import cookie from 'react-cookies';

class MiddleContainer extends Component{

    constructor(props){
        super(props);
        this.state = {
            baseUrl: "http://localhost:3000",
            
            txt:0,
            persons:[],
        };
        console.log(this.props.history);
    }

    logout=()=>{
        cookie.remove('token');
        this.props.history.push("/");
    }

    inctwo=()=>{
        this.setState({
            txt:this.state.txt + 2
        });
    }

    incthree=()=>{
        this.setState({
            txt:this.state.txt + 3
        });
    }

    incfour=()=>{
        this.setState({
            txt:this.state.txt + 4
        });
    }

      
    
 
    addUser=()=>{
        let username = document.getElementById("username").value;
        let userage = document.getElementById("userage").value;
        let user = {
            username:username,
            userage:userage
        };
        let persons = this.state.persons;
        persons.push(user);
        this.setState({
            persons: persons
        });
    }



    render(){
        return(

            <div className="middle-container">
                <Eventhandling clickEvent="testing" keyUpEvent="Working"/>
                
                     {/* this.state.posts.map( */}
                         {/* (post)=>{ */}
                    {/* //         return(
                    //             // <h1>{post.title+'Written by'+ post.author}</h1>
                    //             // <Heading {...post}/>
                    //             <Heading title={post.title} author={post.author} id={post.id}/>
                    //         )
                    //     }
                    // ) */}
                    <div className="task">
                    
                    <button onClick={this.inctwo}>Count 2</button>
                    <button onClick={this.incthree}>Count 3</button>
                    <button onClick={this.incfour}>Count 4</button>

                    <span>
                        {this.state.txt}
                    </span>

                    </div>

                    <div className="textBox">
                        <div className="row">
                            <div className="header">NAME</div>
                            <div className="header">AGE</div>
                        </div>
                        <div id="mainContainer">
                            {
                                this
                                .state
                                .persons
                                .map((p,i)=> {
                                
                                   return(
                                       
                                        <div className ="row">
                                        <div className="header data">
                                        {p.username}
                                        </div>
                                        <div className="header data">{ p.userage }</div>
                                        </div>
                                       
                                     
                                       
                                   );
                                })
                            }
                        </div>
                        <div className="contentBox">
                            Enter Name:
                            <input type="text" id="username"/>
                            Enter Age:
                            <input type="text" id="userage"/>
                            <button onClick={this.addUser}>ADD USER </button>
                        </div>
                    </div>
                   
                 
            <Button/>
            
            <Link to ="/">Go to app component</Link>
            <div style={style.postContainer}>
                            <button onClick={this.logout}>LOGOUT</button>
            <Post baseUrl={this.props.baseUrl}/>

            </div>

            <div style={style.userContainer}>
            <User/>
            </div>
            </div>
            
        );
    }
}


const style={
    	'postContainer': {
    		width:'500px',
    		height: 'auto',
    		background:'#444',
    		display:'inline-block',
    		verticalAlign:'top'
    	},
    	'userContainer': {
    		width:'500px',
    		height: 'auto',
    		background:'#e5e5e5',
    		display:'inline-block',
    		verticalAlign:'top'
    	}
    };

export default MiddleContainer;
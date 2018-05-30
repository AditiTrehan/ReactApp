import React, {Component} from 'react';
import './User.css';
import Helper from './Helper';

class User extends Component{
    constructor(props){
        super(props);
        this.state={
            url:'http://ourcity.mobi/api/v1/users',
            loader:true,
            users:[]
        };
        this.fetchUsers();
    }

    fetchUsers(){
        fetch(this.state.url)
        .then((response)=>{
            return response.json();
        })
        .then((res)=>{
            console.log(res);
            this.setState({
                users:res
            });
            this.setState({
                loader:false
            });

        })

        .catch((err)=>{
            console.log("Error while fetching users from API",err);
        })
    }

    toggleLoader=()=>{
        this.setState({
            loader: !this.setState.loader
        });
    }

    // toggleLoader=()=>{
    //     let newbody=JSON.stringify({
    //         loader: !this.setState.loader,
    //     });

    //     let res=Helper("http://ourcity.mobi/api/v1/users",'POST',newbody);
    //     res.then((res)=>{

    //     })
    // }

    render(){
        return(
            <div className="user-container">
                <div className={this.state.loader === true? 'loader':'hide-loader'}>
                    
                </div>
                <button onClick={this.toggleLoader}>Toggle Loader</button>
                <ul>
                    {
                        this.state.users.map(
                            (user,i)=>{
                                return(
                                    <li key={i}>{user.email}</li>
                                );
                            }
                        )
                    }
                </ul>
            </div>
        );
    }
}


export default User;
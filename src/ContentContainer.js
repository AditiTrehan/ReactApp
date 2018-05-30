import React,{Component} from 'react';
import './Dashboard.css';
import 'whatwg-fetch';
import Helper from './Helper';

class ContentContainer extends Component{
    constructor(props){
        super(props);
        this.state={
            url:'http://ourcity.mobi/api/v1/users',
            users:[],
            loader:true
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
            this.toggleLoader();
        })

        .catch((err)=>{
            console.log("Error while fetching users from API",err);
        })
    }

    toggleLoader=()=>{
        this.setState({
            loader: !this.state.loader
        });
    }
    render(){
        return(
            <div className="ContentContainer clearfix">

                  <div className={this.state.loader === true ? 'loader' :'hide-loader'}>
                    
                    </div>
                    {/* <button onClick={this.toggleLoader}>Toggle Loader</button> */}
                <div>
                    {
                        this.state.users.map(
                            (user,i)=>{
                                return(
                                    <li key={i}>{user.email}</li>
                                );
                            }
                        )
                    }
                </div>
            </div>
        );
    }
}

export default ContentContainer;
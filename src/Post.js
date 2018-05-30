import React,{Component} from "react";
import Heading from './Heading';
import './Post.css';
import Fruit from './Fruit';
import 'whatwg-fetch';
import Helper from './Helper';

class Post extends Component {
    constructor (props){
        super(props);
        this.state = {
            title:'',
            author:'',
            message:'',
            error:'',
            posts:[],
            fruits:[
                {
                    fruit_name:"mango",
                    eaten_by:"qwerty"
                },

                {
                    fruit_name:"apple",
                    eaten_by:"qwerty"
                },

                {
                    fruit_name:"strawberry",
                    eaten_by:"qwerty"
                },

                {
                    fruit_name:"cherry",
                    eaten_by:"qwerty"
                },

                {
                    fruit_name:"grapes",
                    eaten_by:"zxcvb"
                },

                {
                    fruit_name:"guava",
                    eaten_by:"zxcvb"
                },

            ],


            new_fruits:[

                {
                    fruit_name:"mango",
                    eaten_by:"qwerty"
                },

                {
                    fruit_name:"apple",
                    eaten_by:"qwerty"
                },

                {
                    fruit_name:"strawberry",
                    eaten_by:"qwerty"
                },

                {
                    fruit_name:"cherry",
                    eaten_by:"qwerty"
                },

                {
                    fruit_name:"grapes",
                    eaten_by:"zxcvb"
                },

                {
                    fruit_name:"guava",
                    eaten_by:"zxcvb"
                },
            ]
        };
    }


    filterFruits =(e,eaten_by)=>{
        if(eaten_by === "all"){
            this.setState({
                new_fruits:this.state.fruits
            });
        }
        else
        {
            let new_fruits = this.state.fruits.filter((fruit)=>{
                return fruit.eaten_by === eaten_by
            });
            this.setState({
                new_fruits:new_fruits
            });
        }
    }
    componentWillMount(){
        this.fetchPosts();
    }
    handleTitle= (e)=>{
        this.setState({
            title:e.target.value
        });
    }


    handleAuthor= (e)=>{
        this.setState({
            author:e.target.value
        });
    }

    save=()=>{

        let post=JSON.stringify({
            title:this.state.title,
            author:this.state.author
        });
     
        let res=Helper(this.props.baseUrl+"/posts",'POST',post);
        res.then((res)=>{
            if(res.id !== undefined){
                this.setState({
                    message:"Post have been saved successfully"
                });
                this.fetchPosts();
            }
            else{
                this.setState({
                    message:"Error while saving post"
                });
            }
        })
    }
        

    deletePost =(e,id) =>{
        fetch(this.props.baseUrl + "/posts/" +id,{
            method:'DELETE',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({})
        })
        .then((response)=>{
            return response.json;
        })
        .then((res)=>{
            if(res.id === undefined){
                this.setState({
                    message:"Post has been deleted successfully"
                });
                this.fetchPosts();
            }else{
                this.setState({
                    message:"Error while deleting post"
                });
            }
        })
        .catch((err)=>{
            console.log(err);
        }
    )
    }

    fetchPosts(){
        let url=this.props.baseUrl + "/posts";
        let body ={};
        let res= Helper(url,'GET',body);
        res.then((res)=>{
            this.setState({posts:res});
        })
            
       
    }


    render(){
        return(
            <div>
                <h1>{this.state.error !== '' ? this.state.error :this.state.message}</h1>
                Enter title:<input type="text" name="title" onKeyUp={this.handleTitle}/>
                Enter author:<input type="text" name="author" onKeyUp={this.handleAuthor}/>
                <button onClick={this.save}>Save Post</button> <br></br>
                <div className="posts-container">


                    <div>
                        <h1 onClick={(e)=>this.filterFruits(e,'qwerty')}>Eaten by qwerty</h1>
                        <h1 onClick={(e)=>this.filterFruits(e,'zxcvb')}>Eaten by zxcvb</h1>
                        <h1 onClick={(e)=>this.filterFruits(e,'all')}>Eaten by all</h1>

                        {
                            this.state.new_fruits.map(
                                (fruit,i)=>{
                                    return(
                                        // <Heading key={i}{...post} clickHandler={this.deletePost}/>
                                        <Fruit key={i} {...fruit}/>
                                    )
                                }
                            )
                        }
                    </div>
                </div>
            </div>
        );
    }
}


export default Post;
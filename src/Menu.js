import React, {Component} from "react";
import './Menu.css';
import Welcome from './Welcome';

class Menu extends Component{

    constructor(props){
        super(props);

        this.state ={
            menuNumber : 5,
            userName :'Aditi',
            menus: this.props.menus,
            loggedIn:false 
        };

        this.menuFunction();

        // console.log(this.state);
        // console.log("menu component's constructor fired");
    }

    componentWillMOunt(){
        // console.log("menu component's component will mount");
    }

    componentDidMount(){
        // console.log("Component has mounted");

        this.setState({menuNumber:0});
        // this.menuFunction();
    }
    menuFunction = () => {
        // console.log("Menu function called");
    }

    componentDidCatch(){
        // console.log("Error in component");
    }

    changeState=(e) =>{
                        // console.log(e.keyCode);
                        if(e.keyCode === 65){
                            this.setState({

                                menuNumber: this.state.menuNumber + 1
                            });
                        }
                        }

     




    render(){
        return(
            <div className="row">
                <div className="logo-container">
                    <Welcome loggedIn={this.state.loggedIn}/>
                </div>
                <div className="menu-container">
                    {/* <div className="menu">
                        <div>Home</div>
                    </div>
                    <div className="menu">
                        <div>About</div>
                    </div>
                    <div className="menu">
                        <div>Contact</div>
                    </div>
                    <div className="menu">
                        <div>Portfolio</div>
                    </div> 
                 [used for components seperation]
                
                */}

                    {
                        this
                        .state
                        .menus
                        .map((menu,i)=>{
                            return(
                                <div className="menu" key={i}>
                                    <div onClick={this.menuFunction}>
                                        {menu.toUpperCase()}
                                        {this.state.menuNumber}
                                        <input type="text" onKeyDown={(e)=>this.changeState(e)}/>
                                    </div>
                                </div>
                            );
                        })
                    }

                </div>
            </div>
        );
    }
}

export default Menu;
import React, {Component} from "react";

class Eventhandling extends Component{
    // constructor(props){
        // super(props);
        // console.log(this.props);
    // }

    changeStateOfText(e,box){
        // console.log(box);
    }

    showText(){
        // console.log("Button Clicked");
    }

    render(){
        return(
            <div className="testing">
                <input type="text" onKeyUp={(e)=> this.changeStateOfText(e)}/>
                <button onClick={this.showText}>ShowText</button>
            </div>
        );
    }
}

export default Eventhandling;
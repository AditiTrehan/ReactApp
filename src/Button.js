import React, {Component} from 'react';

class Button extends Component{

    constructor(props){
        super(props);
        this.state={
            count:0,
            countButtons: [5,10,15,20]
            
        };
        // this.increementFive=this.increementFive.bind(this);
        // this.increementTen=this.increementTen.bind(this);
        // this.increementFifteen=this.increementFifteen.bind(this);
        // increementFive=()=>{
        //     this.setState({
        //         count:this.state.count+5
        //     });
           
        // }

        // increementTen=()=>{
        //     this.setState({
        //         count:this.state.count+10
        //     });
        // }

        // increementFifteen=()=>{
        //     this.setState({
        //         count:this.state.count+15
        //     });
        // }
    }
        increment=(e)=>{
            this.setState({
                count:this.state.count+ +e.target.value
            });
        }

    

    render(){
        return(
            <div>
                <h1>Count is {this.state.count}</h1>
                {/* <button onClick={this.increementFive}>5</button>
                <button onClick={this.increementTen}>10</button>
                <button onClick={this.increementFifteen}>15</button> */}

                {this.state.countButtons.map((buttonValue,i)=>{
                    return(
                        <ButtonHTML key={i} value={buttonValue} clickHandler={this.increment}/>
                    )
                })}

            </div>
        );
    }
}

const ButtonHTML =(props) =>{
    return(
        <button value={props.value} onClick={props.clickHandler}>{props.value}</button>
    )
}

export default Button;
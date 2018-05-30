import React from "react";

const Heading =(props)=>{
    return(

        <div className="post-row">
                <div>{props.id}</div>
                <div>
                    {props.title  +  ' Written by ' + props.author}
                    <div onClick={(e)=> props.clickHandler(e,props.id)}>DELETE</div>
                </div>
        </div>
    );
}

export default Heading;
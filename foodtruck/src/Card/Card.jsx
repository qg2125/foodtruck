import React from "react";


const Card= (props) => {
    return(
        <div className="Card"> 
            <img className="truck" src = {props.url}></img>
            <h3>{props.name}</h3>
            <h4>{props.country}</h4>
            <a href={props.menu}>
                <button className="button">View Menu</button>
            </a>
        </div>
    )
}

export default Card;
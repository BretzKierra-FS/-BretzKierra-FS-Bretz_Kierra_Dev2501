import React from "react";

const User = props =>{
    return (
        <article>
            <span>{props.firstName}</span>
            <span>{props.lastName}</span>
        </article>
    )
}

export default User;


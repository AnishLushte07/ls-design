import React from 'react';

const Button = (props) => {
    return (
        <button className="ls-btn">{props.children}</button>
    )
}

export default Button;
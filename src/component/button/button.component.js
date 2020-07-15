import React from 'react';
import Progress from 'antd/lib/progress/index';

const Button = (props) => {
    return (
        <button className="ls-btn">{props.children}</button>
    )
}

export default Button;
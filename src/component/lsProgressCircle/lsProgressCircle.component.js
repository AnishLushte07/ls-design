import React from 'react';
// import { Progress } from 'antd';

const LsProgressCircle = (props) => {
    const { width = 80, strokeWidth = 10, percent } = props;
    const strokeColor = props.strokeColor || { '0': '#ed5e1e', '100': '#ff9a5a' };
    const pxWidth = `${width}px`;

    return (
        <div className='ls-progress-circle' style={{ width: pxWidth, height: pxWidth }}>
            {/* <Progress
                type="circle"
                strokeColor={{
                    '0%': strokeColor[0],
                    '100%': strokeColor[100],
                }}
                percent={percent}
                showInfo={false}
                width={width}
                strokeWidth={strokeWidth}
            ></Progress> */}
            <div className="lable">
                {props.children}
            </div>
        </div>
    )
}

export default LsProgressCircle;
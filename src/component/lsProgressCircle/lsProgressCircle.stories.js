import React from 'react';
import { withKnobs, number, object } from "@storybook/addon-knobs";

import LsProgressCircle from './index';

import '../../styles/lsProgressCircle/index.less';
import '../../../node_modules/antd/lib/progress/style/index.less';

export default {
    title: 'Progress Circle',
    decorators: [withKnobs]
};

export const withDefault = () => (
    <LsProgressCircle
        percent={84}
    >
        <h3>84%</h3>
    </LsProgressCircle>
)

export const withCustomValues = () => {
    const width = number('Circle diameter', 100);
    const strokeWidth = number('Stroke widht', 12);
    const percent = number('Percent', 46);
    const strokeColor = object('Stroke gradient', { '0': '#108ee9', '100': '#87d068' })
    return (
        <LsProgressCircle
            width={width}
            strokeWidth={strokeWidth}
            percent={percent}
            strokeColor={strokeColor}
        >
            <h3>{percent}%</h3>
        </LsProgressCircle>
    )
}


import React from 'react';
import { Checkbox } from 'antd';

export const Hello = (props) => (
  <>
    <div className={'Hello ' + props.className}>Hello {props.name}</div>
    <Checkbox defaultChecked={props.check} />
  </>
);

// export const Hello = (props) => React.createElement('div', props, 'Hello');

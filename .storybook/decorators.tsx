import { FC, createElement as h } from 'react';
import { boolean, select, withKnobs } from "@storybook/addon-knobs";
import { BrowserRouter as Router } from 'react-router-dom';

const Root: FC<any> = props => (
  <div id="story-root" {...props} style={{
    backgroundColor: 'white',
    padding: '1em'
  }}>
    <Router>
      {props.children}
    </Router>
  </div>
);

const decorator = storyFn => {
  return h(Root, {}, storyFn());
};

const simpleDecorator = Component => storyFn => h(Component, {}, storyFn());

export const root = decorator;

export default root;

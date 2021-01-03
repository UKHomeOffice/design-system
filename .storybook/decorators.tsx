import { FC, createElement as h } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router } from 'react-router-dom';

const Root: FC<any> = props => (
  <div id="story-root" {...props} style={{
    padding: '1em'
  }}>
    <HelmetProvider>
      <Router>
        {props.children}
      </Router>
    </HelmetProvider>
  </div>
);

const decorator = storyFn => {
  return h(Root, {}, storyFn());
};

export const root = decorator;

export default root;

import { FC, createElement as h } from 'react';
import { boolean, select, withKnobs } from "@storybook/addon-knobs";
import { className } from '@not-govuk/components/src/helpers';
import { BrowserRouter as Router } from 'react-router-dom';
import RawMiddle from '@not-govuk/components/src/components/page/body';
import Main from '@not-govuk/components/src/components/page/main';

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

const Middle: FC<any> = props => (
  <RawMiddle {...props} style={{
    margin: 0,
    padding: 0
  }}>
    {props.children}
  </RawMiddle>
);

const MainInMiddle: FC<any> = props => (
  <Middle {...props}>
    <Main style={{
      margin: 0,
      padding: 0
    }}>
      {props.children}
    </Main>
  </Middle>
);

const decorator = storyFn => {
  const departmentOptions = {
    'None': '',
    'Home Office': 'home-office',
    'HMPO': 'hm-passport-office',
    'HMRC': 'hm-revenue-customs'
  };

  const isInternal = boolean('Internal', false, 'Theme');
  const department = select('Department', departmentOptions, '', 'Theme');

  const props = {
    className: className(isInternal ? 'not-govuk' : '', department),
  };

  return h(Root, props, storyFn());
};

const simpleDecorator = Component => storyFn => h(Component, {}, storyFn());

export const root = decorator;
export const middle = simpleDecorator(Middle);
export const main = simpleDecorator(MainInMiddle);

export default root;

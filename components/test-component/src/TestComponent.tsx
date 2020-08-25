import { FC, createElement as h } from 'react';
import { StandardProps, classBuilder } from '@not-govuk/component-helpers';

import '../assets/TestComponent.scss';

export type TestComponentProps = StandardProps & {
  /** Description for the 'heading' prop */
  heading?: string
};

export const TestComponent: FC<TestComponentProps> = ({ children, classBlock, classModifiers, className, heading, ...attrs }) => {
  const classes = classBuilder('hods-test-component', classBlock, classModifiers, className);
  const title = heading || 'Test component';

  return (
    <div {...attrs} className={classes()}>
      <h1 className={classes('heading')}>{title}</h1>
      {children}
    </div>
  );
};

export default TestComponent;

import { FC, ReactNode, createElement as h } from 'react';
import { StandardProps, classBuilder } from '@not-govuk/component-helpers';

import '../assets/Highlight.scss';

export type HighlightProps = StandardProps & {
  children?: ReactNode
};

export const Highlight: FC<HighlightProps> = ({
  children,
  classBlock,
  classModifiers,
  className,
  ...attrs
}) => {
  const classes = classBuilder('hods-highlight', classBlock, classModifiers, className);

  return (
    <mark {...attrs} className={classes()}>
      <strong>
        {children}
      </strong>
    </mark>
  );
};

export default Highlight;

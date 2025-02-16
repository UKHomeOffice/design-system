import { FC, ReactNode, createElement as h } from 'react';
import { StandardProps, classBuilder } from '@not-govuk/component-helpers';

import '../assets/Subsection.scss';

export type SubsectionProps = StandardProps & {
  children?: ReactNode
  /** Elements to be placed in the side bar */
  side?: ReactNode
  /** The title of the subsection */
  title?: string
};

export const Subsection: FC<SubsectionProps> = ({
  children,
  classBlock,
  classModifiers,
  className,
  side,
  title,
  ...attrs
}) => {
  const classes = classBuilder('hods-ucdm-subsection', classBlock, classModifiers, className);
  const main = (
    <main id="main-content" className={classes('main')} role="main">
      {children}
    </main>
  );

  return ( side ? (
    <div {...attrs} className={classes() + ' govuk-grid-row'}>
      <div className="govuk-grid-column-one-quarter">
        {side}
      </div>
      <div className="govuk-grid-column-three-quarters">
        {main}
      </div>
    </div>
  ) : (
    <div {...attrs} className={classes()}>
      {main}
    </div>
  ) );
};

Subsection.displayName = 'Subsection';

export default Subsection;

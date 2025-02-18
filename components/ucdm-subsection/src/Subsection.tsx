import { FC, Fragment, ReactNode, createElement as h } from 'react';
import { BackLink } from '@not-govuk/back-link';
import { Breadcrumb, Breadcrumbs } from '@not-govuk/breadcrumbs';
import { StandardProps, classBuilder } from '@not-govuk/component-helpers';

import '../assets/Subsection.scss';

export type SubsectionProps = StandardProps & {
  /** Location for the Back link */
  backHref?: string
  /** List of links to parent pages */
  breadcrumbs?: Breadcrumb[]
  children?: ReactNode
  /** ID for the main element */
  mainId?: string
  /** Elements to be placed in the side bar */
  side?: ReactNode
  /** The title of the subsection */
  title?: string
};

export const Subsection: FC<SubsectionProps> = ({
  backHref,
  breadcrumbs,
  children,
  classBlock,
  classModifiers,
  className,
  mainId = 'main-content',
  side,
  title,
  ...attrs
}) => {
  const classes = classBuilder('hods-ucdm-subsection', classBlock, classModifiers, className);
  const main = (
    <Fragment>
      {
        breadcrumbs?.length
          ? (
            <Breadcrumbs id="breadcrumbs" items={breadcrumbs} />
          )
          : (!backHref ? null : (
            <BackLink id="back-link" href={backHref} />
          ))
      }
      <main id={mainId} className={classes('main')} role="main">
        {children}
      </main>
    </Fragment>
  );

  return ( side ? (
    <div {...attrs} className={classes() + ' govuk-grid-row'}>
      <div className="govuk-grid-column-one-quarter">
        <div className={classes('side')}>
          {side}
        </div>
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

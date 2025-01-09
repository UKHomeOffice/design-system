import { FC, ReactNode, createElement as h } from 'react';
import { StandardProps, classBuilder } from '@not-govuk/component-helpers';
import { NavigationMenu, NavigationMenuProps } from '@not-govuk/navigation-menu';

import '../assets/Subsection.scss';

export type SubsectionProps = StandardProps & {
  children?: ReactNode
  /** List of links for the side navigation */
  navigation: Pick<NavigationMenuProps, 'items'>['items']
  /** The title of the subsection */
  title: string
};

export const Subsection: FC<SubsectionProps> = ({
  children,
  classBlock,
  classModifiers,
  className,
  navigation,
  title,
  ...attrs
}) => {
  const classes = classBuilder('hods-ucdm-subsection', classBlock, classModifiers, className);

  return (
    <div {...attrs} className={classes() + ' govuk-grid-row'}>
      <div className="govuk-grid-column-one-quarter">
        <NavigationMenu items={navigation} />
      </div>
      <div className="govuk-grid-column-three-quarters">
        <main id="main-content" className={classes('main')} role="main">
          <span className={classes('caption', undefined, 'govuk-caption-xl')}>{title}</span>
          {children}
        </main>
      </div>
    </div>
  );
};

Subsection.displayName = 'Subsection';

export default Subsection;

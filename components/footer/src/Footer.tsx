import { FC, createElement as h } from 'react';
import { StandardProps, classBuilder } from '@not-govuk/component-helpers';
import { A } from '@not-govuk/link';

import '../assets/Footer.scss';

export type NavigationLink = {
  /** Whether the link is for the current page */
  active?: boolean
  /** Location to link to */
  href: string
  /** Text of the link */
  text: string
  /** Title of the link */
  title?: string
};

export type FooterProps = StandardProps & {
  /** Navigation links */
  navigation?: NavigationLink[]
};

export const Footer: FC<FooterProps> = ({
  children = 'A Home Office Digital, Data and Technology service',
  classBlock,
  classModifiers,
  className,
  navigation,
  ...attrs
}) => {
  const classes = classBuilder('hods-footer', classBlock, classModifiers, className);

  return (
    <footer className={classes()} role="contentinfo">
      <div className={classes('inner')}>
        <div className={classes('container') + ' hods-width-container'}>
          <div className={classes('content')}>
            {children}
          </div>
          { navigation && (
            <div className={classes('navigation')}>
              <ul id="navigation" className={classes('navigation-list')}>
                {navigation.map((v, i) => (
                  <li key={i} className={classes('navigation-item', v.active ? 'active' : undefined)}>
                    <A classBlock={classes('link')} href={v.href} title={v.title}>
                      {v.text}
                    </A>
                  </li>
                ))}
              </ul>
            </div>
          ) }
        </div>
      </div>
    </footer>
  );
};

export default Footer;

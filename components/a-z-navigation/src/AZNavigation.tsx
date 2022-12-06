import { ComponentProps, FC, createElement as h } from 'react';
import { NavigationMenu } from '@not-govuk/navigation-menu';

import '../assets/AZNavigation.scss';

export type AZNavigationProps = Omit<ComponentProps<typeof NavigationMenu>, 'items'>;

const items = [
  {
    href: '#a',
    text: 'A'
  },
  {
    href: '#b',
    text: 'B'
  },
  {
    href: '#c',
    text: 'C'
  },
  {
    href: '#d',
    text: 'D'
  },
  {
    href: '#e',
    text: 'E'
  },
  {
    href: '#f',
    text: 'F'
  },
  {
    href: '#g',
    text: 'G'
  },
  {
    href: '#h',
    text: 'H'
  },
  {
    href: '#i',
    text: 'I'
  },
  {
    href: '#j',
    text: 'J'
  },
  {
    href: '#k',
    text: 'K'
  },
  {
    href: '#l',
    text: 'L'
  },
  {
    href: '#m',
    text: 'M'
  },
  {
    href: '#n',
    text: 'N'
  },
  {
    href: '#o',
    text: 'O'
  },
  {
    href: '#p',
    text: 'P'
  },
  {
    href: '#q',
    text: 'Q'
  },
  {
    href: '#r',
    text: 'R'
  },
  {
    href: '#s',
    text: 'S'
  },
  {
    href: '#t',
    text: 'T'
  },
  {
    href: '#u',
    text: 'U'
  },
  {
    href: '#v',
    text: 'V'
  },
  {
    href: '#w',
    text: 'W'
  },
  {
    href: '#x',
    text: 'X'
  },
  {
    href: '#y',
    text: 'Y'
  },
  {
    href: '#z',
    text: 'Z'
  }
];

export const AZNavigation: FC<AZNavigationProps> = ({ classBlock, ...props }) => (
  <NavigationMenu {...props} classBlock={classBlock || 'hods-a-z-navigation'} items={items} />
);

AZNavigation.displayName = 'AZNavigation';

export default AZNavigation;

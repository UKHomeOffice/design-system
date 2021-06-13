import { FC, Fragment, createElement as h } from 'react';
import { ApplicationProps } from '@not-govuk/app-composer';

export const AppWrap: FC<ApplicationProps> = ({ children }) => h(
  Fragment, {},
  children
);

export default AppWrap;

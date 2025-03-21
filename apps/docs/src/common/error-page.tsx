import { FC, Fragment, createElement as h } from 'react';
import { ErrorPageProps } from '@not-govuk/app-composer';

import { PageWrap } from './pages/';

export const ErrorPage: FC<ErrorPageProps> = ({ title, message }) => (
  <PageWrap>
  <Fragment>
    <h1>{title}</h1>
    <p>{message}</p>
  </Fragment>
  </PageWrap>
);

export default ErrorPage;

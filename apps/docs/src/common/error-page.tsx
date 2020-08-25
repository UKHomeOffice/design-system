import { FC, Fragment, createElement as h } from 'react';
import { ErrorPageProps } from '@not-govuk/app-composer';

export const ErrorPage: FC<ErrorPageProps> = ({ title, message }) => (
  <Fragment>
    <h1>{title}</h1>
    <p>{message}</p>
  </Fragment>
);

export default ErrorPage;

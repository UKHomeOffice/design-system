import { FC, createElement as h } from 'react';
import { ErrorPageProps } from '@not-govuk/app-composer';

export const ErrorPage: FC<ErrorPageProps> = ({ title, message }) => (
  <div className="hods-width-container">
    <main id="main-content">
      <h1>{title}</h1>
      <p>{message}</p>
    </main>
  </div>
);

export default ErrorPage;

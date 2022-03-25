import { FC, Fragment, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A, NavigationMenu } from '@not-govuk/components';

export const menu = (
  <Fragment>
    <NavigationMenu items={[
      {
        href: '/contribute/propose-pattern-component',
        text: 'Propose a pattern or component'
      }
    ]} />
  </Fragment>
);

export const title = 'Contribute';
const description = 'How to get involved and contribute to the Home Office Design System'

const Page: FC<PageProps> = ({ location }) => (
  <div className="govuk-grid-row">
    <Helmet>
      <title>{title} - Home Office Design System</title>
      <meta name="description" content={description} />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={description} />
      <meta name="og:article:section" content={title} />
    </Helmet>
    <div className="govuk-grid-column-one-quarter">
      {menu}
    </div>
    <div className="govuk-grid-column-three-quarters">
    <h1 className="heading-section">Get involved</h1>
      <p>Join discussions about styles, components, and patterns in the Home Office Design System:</p>
      <ol>
        <li>Create a <A href="https://github.com/signup">github account</A>.</li>
        <li>Reply to a <A href="https://github.com/UKHomeOffice/design-system/discussions">discussion</A>.</li>
      </ol>
      <p>Everyone is welcome to contribute, including:</p>
      <ul>
        <li>user researchers</li>
        <li>accessibility experts</li>
        <li>interaction and content designers</li>
        <li>developers</li>
      </ul>
      <p>If you want to discuss something and there’s not already a discussion, create a new discussion.</p>
      <p>If you’re not sure on the best way for you to contribute, email <A href="mailto:design@digital.homeoffice.gov.uk">design@digital.homeoffice.gov.uk</A>, and we’ll get back to you.</p>
    </div>
  </div>
);

export default Page;

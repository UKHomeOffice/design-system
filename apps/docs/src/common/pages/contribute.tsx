import { FC, Fragment, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A, NavigationMenu } from '@not-govuk/components';

export const menu = (
  <Fragment>
    <NavigationMenu items={[]} />
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
    <h1 className="heading-section">Contribute</h1>
      <p>Join discussions about research findings, styles, components and patterns in the Home Office Design System:</p>
      <ol>
        <li>Create a <A href="https://github.com/signup">github account</A>.</li>
        <li>Reply to a <A href="https://github.com/UKHomeOffice/design-system/discussions">discussion</A> or start a <A href="https://github.com/UKHomeOffice/design-system/discussions/new">new discussion</A>.</li>
      </ol>
      <p>If you’re not sure on the best way for you to contribute, email <A href="mailto:design@digital.homeoffice.gov.uk">design@digital.homeoffice.gov.uk</A>, and we’ll get back to you.</p>
    <h2>
      Propose a pattern or component
    </h2>
    <ol>
      <li>Create a <A href="https://github.com/UKHomeOffice/design-system/discussions">github discussion</A>.</li>
      <li>The Design System Working Group assesses your proposal with the <A href="https://design-system.service.gov.uk/community/contribution-criteria/">GOV.UK design system contribution criteria</A>.</li>
      <li>The Design System Working Group creates a <A href="https://github.com/UKHomeOffice/design-system/issues">github issue</A>.</li>
    </ol>
    <p>The github issue is where we discuss the details of:</p>
    <ul>
      <li>what the code will be</li>
      <li>the guidance on when and how to use</li>
    </ul>
  </div>
  </div>

);

export default Page;

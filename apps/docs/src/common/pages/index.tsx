import { FC, Fragment, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A } from '@not-govuk/components';

import Markdown from '../../../../../docs/about.md';

const Page: FC<PageProps> = props => (
  <Fragment>
    <Helmet>
      <title>Home - Home Office Design System</title>
    </Helmet>
    <div className="govuk-grid-row">
      <div className="govuk-grid-column-two-thirds">
        <Markdown />
      </div>
      <div className="govuk-grid-column-one-third">
        <aside>
          <h3 className="govuk-heading-m" style={{ marginTop: '10px', marginBottom: '10px' }}>Updates</h3>
          <p className="govuk-body govuk-!-font-size-16" style={{ color: '#626a6e' }}>Last updated 3 June 2020</p>
          <ul>
            <li><a href="/patterns/find-information-on-a-document">Find information on a document</a></li>
            <li><a href="/get-involved">Getting involved</a></li>
            <li><a href="/styles">Styles and branding</a></li>
          </ul>
        </aside>
      </div>
    </div>
    <div className="govuk-grid-row homepage-sections">
      <div className="govuk-grid-column-one-third">
        <aside>
          <h2>Styles</h2>
          <p>We apply different styles to our services and products depending domain and type of service.</p>
          <A href="/styles">Browse styles</A>
        </aside>
      </div>
      <div className="govuk-grid-column-one-third">
        <aside>
          <h2>Components</h2>
          <p>Components are reusable, ready-made interface elements that can be used in different patterns and layouts.</p>
          <A href="/components">Browse components</A>
        </aside>
      </div>
      <div className="govuk-grid-column-one-third">
        <aside>
          <h2>Patterns</h2>
          <p>Patterns help users complete common tasks, are flexible and don't prescribe exact design solutions.</p>
          <A href="/patterns">Browse patterns</A>
        </aside>
      </div>
    </div>
  </Fragment>
);

export default Page;
export const title = 'Home Office Design System';

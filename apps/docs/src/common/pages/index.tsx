import { ReactNode, FC, Fragment, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A } from '@not-govuk/components';

import { Page as HODSPage } from '@hods/components';

export const PageWrap: FC<{ children?: ReactNode }> = ({ children }) => {
  const navigation = [
    { href: '/get-started', text: 'Get started' },
    { href: '/styles', text: 'Styles' },
    { href: '/components', text: 'Components' },
    { href: '/patterns', text: 'Patterns' },
    { href: '/content-style-guide', text: 'Content style guide' },
    { href: '/accessibility', text: 'Accessibility' },
    { href: '/contribute', text: 'Contribute' }
  ];
  const footerNavigation = [
    { href: 'https://github.com/UKHomeOffice/design-system/', text: 'GitHub' },
    { href: '/accessibility-statement', text: 'Accessibility statement' },
    { href: '/sitemap', text: 'Sitemap' },
    { href: 'https://github.com/UKHomeOffice/design-system/issues/new', text: 'Feedback' },
    { href: 'https://design-system.service.gov.uk/', text: 'GOV.UK Design System' }
  ];

  return (
    <HODSPage
      footerNavigation={footerNavigation}
      navigation={navigation}
      serviceName="Design System"
      title="Home Office Design System"
    >
      {children}
    </HODSPage>
  );
};

export const title = 'Home Office Design System';
const description = 'The UK Home Office\'s Design System, implemented in React';

const Page: FC<PageProps> = props => (
  <PageWrap>
  <Fragment>
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={description} />
    </Helmet>
    <div className="govuk-grid-row">
      <div className="govuk-grid-column-two-thirds">
        <h1>Designing and building Home Office services</h1>
        <p className="govuk-body-l">This design system will help you to design and build internal, as well as public-facing, services that are fit for everyone.</p>
        <p className="govuk-body-l">Find out when to use our own styles, components and patterns and when to use the <A href="https://design-system.service.gov.uk/">GOV.UK Design System</A>. See examples from within existing services.</p>
      </div>
      <div className="govuk-grid-column-one-third">
        <aside>
          <h2>Updates</h2>
          <p className="govuk-body govuk-!-font-size-16" style={{ color: '#626a6e' }}>Last updated 21 March 2025</p>
          <ul className="govuk-!-font-size-16">
            <li>Guidance updated for <A href="/patterns/send-an-email">send users an email</A></li>
            <li>New pattern for  <A href="/patterns/long-lists">help users to choose from a long list</A></li>
          </ul>
        </aside>
        <aside>
          <h2>Content style guide</h2>
          <p className="govuk-body govuk-!-font-size-19">How to write for digital Home Office services.</p>
          <A className="govuk-body govuk-!-font-size-19" href="/content-style-guide">Browse content style guide</A>
        </aside>
      </div>
    </div>
    <div className="govuk-grid-row homepage-sections">
      <div className="govuk-grid-column-one-third">
        <aside>
          <h2>Styles</h2>
          <p className="govuk-body govuk-!-font-size-19">We apply different styles to our services and products depending domain and type of service.</p>
          <A className="govuk-body govuk-!-font-size-19" href="/styles">Browse styles</A>
        </aside>
      </div>
      <div className="govuk-grid-column-one-third">
        <aside>
          <h2>Components</h2>
          <p className="govuk-body govuk-!-font-size-19">Components are reusable, ready-made interface elements that can be used in different patterns and layouts.</p>
          <A className="govuk-body govuk-!-font-size-19" href="/components">Browse components</A>
        </aside>
      </div>
      <div className="govuk-grid-column-one-third">
        <aside>
          <h2>Patterns</h2>
          <p className="govuk-body govuk-!-font-size-19">Patterns help users complete common tasks, are flexible and don't prescribe exact design solutions.</p>
          <A className="govuk-body govuk-!-font-size-19" href="/patterns">Browse patterns</A>
        </aside>
      </div>
    </div>
  </Fragment>
  </PageWrap>
);

export default Page;

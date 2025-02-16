import { ReactNode, FC, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A } from '@not-govuk/components';

import { Section } from '@hods/ucdm-section';

import { PageWrap } from '../ucdm';

export const title = 'Design and content';
const description = 'Interaction and content design in the Home Office';

export const SectionWrap: FC<{ children?: ReactNode }> = ({ children }) => (
  <PageWrap>
    <Section title={title} href="/design-and-content" navigation={[
      { href: '/design-and-content/design-system', text: 'Design system' },
      { href: '/design-and-content/content', text: 'Content' },
      { href: '/design-and-content/professional-standards', text: 'Professional standards and guidance' }
    ]}>
      {children}
    </Section>
  </PageWrap>
);

const Page: FC<PageProps> = props => (
  <SectionWrap>
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
          <p className="govuk-body govuk-!-font-size-16" style={{ color: '#626a6e' }}>Last updated 8 October 2024</p>
          <ul className="govuk-!-font-size-16">
            <li>Guidance updated for <A href="/patterns/add-multiple-things">add multiple things pattern</A></li>
            <li>Added a guide for <A href="/content-style-guide/designing-for-limited-english">designing for people with limited English</A></li>
            <li>Improved accessibility of our <A href="/components?name=Button">secondary buttons</A></li>
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
  </SectionWrap>
);

export default Page;

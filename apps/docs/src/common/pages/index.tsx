import { ReactNode, FC, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A } from '@not-govuk/components';

import { Section } from '@hods/ucdm-section';

export const SectionWrap: FC<{ children?: ReactNode, showBanner?: boolean }> = ({ children, showBanner }) => (
  <Section title="Design and build services that work for everyone" href="#" description="Use the UCD Manual to create consistent services that put users first." showBanner={showBanner}>
    {children}
  </Section>
);

export const title = 'Home Office User-Centred Design Manual';
const description = 'The UK Home Office\'s User-Centred Design Manual';

const Page: FC<PageProps> = props => (
  <SectionWrap showBanner>
  <main id="main-content" >
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={description} />
    </Helmet>
      <div className="govuk-grid-row">
        <div className="govuk-grid-column-one-third">
          <div className="display-panel">
            <h3 className="govuk-heading-m">Design system</h3>
            <p>A library of patterns, styles and components to help you design consistent and accessible digital services.</p>
            <p><A href="/design-system">View more</A></p>
          </div>
        </div>

        <div className="govuk-grid-column-one-third">
          <div className="display-panel">
            <h3 className="govuk-heading-m">Content style guide</h3>
            <p>Find a complete A-Z of words and phrases to help you create consistent content for your service that users can easily understand.</p>
            <p><A href="/design-and-content/content/content-style-guide">View more</A></p>
          </div>
        </div>

        <div className="govuk-grid-column-one-third">
          <div className="display-panel">
            <h3 className="govuk-heading-m">Home Office accessibility standards</h3>
            <p>Our standard closely aligns with the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA.</p>
            <p><A href="/accessibility/resources/standard">View more</A></p>
          </div>
        </div>

      </div>

      <div className="govuk-grid-row">
        <div className="govuk-grid-column-one-third">
          <div className="display-panel">
            <h3 className="govuk-heading-m">User research</h3>
            <p>Understanding our users and their needs is essential when we design services and products. We achieve this through user research.</p>
            <p><A href="/user-research">View more</A></p>
          </div>

        </div>

        <div className="govuk-grid-column-one-third">
          <div className="display-panel">
            <h3 className="govuk-heading-m">Community and contribute</h3>
            <p>Do you want to get involved in our work? Anyone can contribute to the design system. Discuss on GitHub, join our working group or review our backlog.</p>
            <p><A href="/community">View more</A></p>
          </div>

        </div>

        <div className="govuk-grid-column-one-third">
          <div className="display-panel">
            <h3 className="govuk-heading-m">Professional guidance</h3>
            <p>Explore the role guidance, training information and approved tools for our User Centred Design (UCD) community.</p>
            <p><A href="/design-and-content">View more</A></p>
          </div>
        </div>

      </div>
    </main>
  </SectionWrap>
);

export default Page;

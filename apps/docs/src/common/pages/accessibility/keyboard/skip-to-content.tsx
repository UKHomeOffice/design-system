import { FC, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A } from '@not-govuk/components';
import { menu } from '../../accessibility'

export const title = 'Skip to content links';
const description = 'Accessibility guidance for keyboard content';
export const section = 'Accessibility';

const skipImage01 = require('../../../../../assets/images/accessibility/skip-01.png').default;

const Page: FC<PageProps> = ({ location }) => (
  <div className="govuk-grid-row">
    <Helmet>
      <title>{title} - Home Office Design System</title>
      <meta name="description" content={description} />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={description} />
      <meta name="og:article:section" content={section} />
    </Helmet>
    <div className="govuk-grid-column-one-quarter">
      {menu}
    </div>
    <div className="govuk-grid-column-three-quarters">
      <h1>
        <span className="caption">Accessibility</span>
        ‘Skip to content’ links
      </h1>
      <p>For keyboard users, having to repeatedly move through the same navigation menu every time they start a new page can be frustrating.</p>
      <p>This is why ‘skip to content’ links exist. The first tab move you make on each page should show a link at the top of the page that says ‘Skip to content’ (or similar) and moves the user to the main part of the page.</p>

      <div className="example" style={{marginBottom: "2em"}}>
        <p>To view the skip link component tab to this example, or click inside this example and press tab.</p>
        <A href="#" className="govuk-skip-link">Skip to main content</A>
      </div>

      <p>You can test this by pressing enter on the ‘skip to content’ link and then pressing tab. If your next move focuses the first interactive element further down the page in the main content, you know it is working.</p>
      <p>Read more on the WCAG success criteria on <a href="https://www.w3.org/WAI/WCAG21/Understanding/bypass-blocks.html">bypassing blocks of content</a>.</p>

<div className="contact-us">
  <h2 className="govuk-heading-m">Get in touch</h2>
  <p>If you’ve got a question or suggestion share it on the Home Office DDaT Slack channel #ask-accessibility or email <A href="mailto:access@digital.homeoffice.gov.uk">access@digital.homeoffice.gov.uk</A>.</p>
</div>
  </div>
    </div>
);

export default Page;

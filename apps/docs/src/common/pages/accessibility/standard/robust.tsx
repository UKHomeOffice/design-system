import { FC, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A } from '@not-govuk/components';
import { menu } from '../../accessibility'

import { PageWrap } from '../../';

export const title = 'Robust';
const description = 'Robust Accessibility Standard requirements';
export const section = 'Accessibility';

const Page: FC<PageProps> = () => (
  <PageWrap>
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
      Robust
    </h1>
    <p>Content must be robust and compatible with current and future tools and technologies.</p>
    <h2>Index</h2>
    <h3>Compatible</h3>
    <ul className="plain">
      <li><A href="#rr4.1.2">4.1.2 - Name, role, value</A></li>
      <li><A href="#rr4.1.3">4.1.3 - Status messages</A></li>
    </ul>

    <h2>Compatible</h2>

    <h3 id="rr4.1.2">4.1.2 - Name, role, value</h3>
    <p>All interactive components must have an accessible name and role, and the state of the component must be communicated to assistive technologies.</p>
    <p><A href="https://www.w3.org/WAI/WCAG22/Understanding/name-role-value">Understanding Success Criterion 4.1.2: Name, Role, Value</A></p>
    <h4>Implementation guidance</h4>
    <p>All interactive elements and components must:</p>
    <ul>
      <li>have an accessible name and;</li>
      <li>an implicit or explicit role and;</li>
      <li>communicate information about their state</li>
    </ul>
    <p>See guidance for complex components/widget in the <A href="https://www.w3.org/WAI/ARIA/apg/">ARIA Authoring Practices Guide (APG)</A></p>
    <h4>How to test</h4>
    <p>The guidance in the <A href="https://www.w3.org/WAI/ARIA/apg/">ARIA Authoring Practices Guide (APG)</A> includes testing practices for complex components.</p>
    <h4>How to test with JAWS/NVDA</h4>
    <p>Use the arrow keys, Enter key and Spacebar to reach and interact with all the user interface components on the page and check that the screen readers announce all the information necessary to understand the role and current status of the components and how to operate them.</p>

    <h3 id="rr4.1.3">4.1.3 - Status messages</h3>
    <p>There are different situations where a page needs to dynamically display a status message. These messages need to be conveyed to assistive technology users, even when they don’t receive focus. Where possible, you should avoid disturbing the user’s place in a page.</p>
    <p><A href="https://www.w3.org/WAI/WCAG22/Understanding/status-messages">Understanding Success Criterion 4.1.3: Status Messages</A></p>
    <h4>Implementation guidance</h4>
    <p>Status messages or updates which occur visually should be communicated to screen reader users.</p>
    <p>These messages should be non-intrusive and only used when there is a benefit to the user, for example informing them how many search results have been returned, that errors have occurred in their submission or that a form has been successfully submitted.</p>
    <p>Generally, a notification/status message should be implemented using an ARIA live region (see <A href="https://www.w3.org/TR/wai-aria/#aria-live">aria-live property</A> and <A href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions">ARIA live regions</A>).</p>
    <p>Avoid using the assertive setting for ARIA live regions. The polite setting is sufficient in most use cases.</p>
    <h4>How to test with JAWS/NVDA</h4>
    <p>When completing actions that involve a visual status message or information that a user needs to be made aware of, check that the message is announced to screen reader users in a timely manner.</p>
    <p>Note that these messages should not interrupt the screen reader's current activity but should relay the information at a suitable break in the screen reader audio.</p>

    <h2>Get in touch</h2>
    <p>If you’ve got a question or suggestion share it on the UK Home Office Slack channel #ask-accessibility or email <A href="mailto:accessibility@homeoffice.gov.uk">accessibility@homeoffice.gov.uk</A>.</p>

    </div>
  </div>
  </PageWrap>
);

export default Page;

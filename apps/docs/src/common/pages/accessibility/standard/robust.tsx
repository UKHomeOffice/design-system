import { FC, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A, NavigationMenu } from '@not-govuk/components';

export const title = 'Robust';
const description = 'Robust Accessibility Standard requirements';
export const section = 'Accessibility';

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
    <span className="govuk-caption-m" style={{marginBottom: "1em"}}>Page structure</span>
    <NavigationMenu items={[
      {
        href: '/accessibility/headings',
        text: 'Headings'
      },
      {
        href: '/accessibility/links',
        text: 'Links'
      },
      {
        href: '/accessibility/navigation',
        text: 'Navigation'
      },
      {
        href: '/accessibility/tables',
        text: 'Tables'
      }
    ]} />
    <span className="govuk-caption-m" style={{marginBottom: "1em"}}>Interactivity</span>
    <NavigationMenu items={[
      {
        href: '/accessibility/error-messages',
        text: 'Error messages'
      },
      {
        href: '/accessibility/forms',
        text: 'Forms'
      },
      {
        href: '/accessibility/keyboard',
        text: 'Keyboard basics'
      },
      {
        href: '/accessibility/keyboard/tab-navigation',
        text: '- Tab navigation'
      },
      {
        href: '/accessibility/keyboard/focus',
        text: '- Focus'
      },
      {
        href: '/accessibility/keyboard/skip-to-content',
        text: '- Skip to content links'
      },
      {
        href: '/accessibility/keyboard/character-key-shortcuts',
        text: '- Character key shortcuts'
      },
      {
        href: '/accessibility/keyboard/pointer-gestures',
        text: '- Pointer gestures'
      },
      {
        href: '/accessibility/notifications',
        text: 'Notifications'
      },
      {
        href: '/accessibility/forms/keyboard',
        text: '- Keyboard'
      },
      {
        href: '/accessibility/timeouts',
        text: 'Timeouts'
      }
    ]} />
    <span className="govuk-caption-m" style={{marginBottom: "1em"}}>Written content</span>
      <NavigationMenu items={[
        {
          href: '/accessibility/inclusive-language',
          text: 'Inclusive language'
        },
        {
          href: '/accessibility/readability',
          text: 'Readability'
        },
      ]} />
    <span className="govuk-caption-m" style={{marginBottom: "1em"}}>Providing alternatives</span>
      <NavigationMenu items={[
        {
          href: '/accessibility/audio-and-video',
          text: 'Audio and video'
        },
        {
          href: '/accessibility/colour-and-contrast',
          text: 'Colour and contrast'
        },
        {
          href: '/accessibility/images',
          text: 'Images'
        },
        {
          href: '/accessibility/moving-and-flashing-content',
          text: 'Moving and flashing content'
        }
      ]} />
      <span className="govuk-caption-m" style={{marginBottom: "1em"}}>Resources</span>
        <NavigationMenu items={[
          {
            href: '/accessibility/standard',
            text: 'Accessibility Standard'
          },
          {
            href: '/accessibility/standard/perceivable',
            text: '- Perceivable'
          },
          {
            href: '/accessibility/standard/operable',
            text: '- Operable'
          },
          {
            href: '/accessibility/standard/understandable',
            text: '- Understandable'
          },
          {
            href: '/accessibility/standard/robust',
            text: '- Robust'
          },
          {
            href: '/accessibility/standard/meet-user-needs',
            text: '- Meet user needs'
          },
          {
            href: '/accessibility/resources',
            text: 'Guidance, tools and further reading'
          }
        ]} />
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
      <li><a href="#rr4.1.1">4.1.1 - Parsing</a></li>
      <li><a href="#rr4.1.2">4.1.2 - Name, Role, Value</a></li>
      <li><a href="#rr4.1.3">4.1.3 - Status messages</a></li>
    </ul>

    <h2>Compatible</h2>

    <h3 id="rr4.1.1">4.1.1 - Parsing</h3>
    <p>The code of the page must not cause browser or assistive technology conflicts. This ensures that content and functionality is presented in a way that works reliably across all supported browsers and assistive technologies.</p>
    <p><A href="https://www.w3.org/WAI/WCAG21/Understanding/parsing">Understanding Success Criterion 4.1.1: Parsing</A></p>
    <h4>Implementation guidance</h4>
    <p>HTML code must conform to the standard identified in the doctype statement.</p>
    <p>ARIA code must conform to the rules for use with the host language (HTML).</p>
    <p>Not all errors and warnings raised by an HTML validator have an impact on accessibility. We recommend using the bookmarklets in the Non-technical testing section rather than starting with an HTML validator.</p>
    <h4>How to test with a manual check</h4>
    <p>Use the two bookmarklets outlined in the article at <A href="https://www.tpgi.com/wcag-2-0-parsing-error-bookmarklet/">https://www.tpgi.com/wcag-2-0-parsing-error-bookmarklet</A></p>

    <h3 id="rr4.1.2">4.1.2 Name, Role, Value</h3>
    <p>All interactive components must have an accessible name and role, and the state of the component must be communicated to assistive technologies.</p>
    <p><A href="https://www.w3.org/WAI/WCAG21/Understanding/name-role-value">Understanding Success Criterion 4.1.2: Name, Role, Value</A></p>
    <h4>Implementation guidance</h4>
    <p>All interactive elements and components must:</p>
    <ul>
      <li>have an accessible name and;</li>
      <li>an implicit or explicit role and;</li>
      <li>communicate information about their state</li>
    </ul>
    <p>See guidance for complex components/widget at <A href="https://w3c.github.io/aria-practices/">https://w3c.github.io/aria-practices</A></p>
    <h4>How to test</h4>
    <p>The guidance at <A href="https://w3c.github.io/aria-practices/">https://w3c.github.io/aria-practices</A> includes testing practices for complex components.</p>
    <h4>How to test with JAWS/NVDA</h4>
    <p>Use the arrow keys, Enter key and Spacebar to reach and interact with all the user interface components on the page and check that the screen readers announce all the information necessary to understand the role and current status of the components and how to operate them.</p>

    <h3 id="rr4.1.3">4.1.3 Status messages</h3>
    <p>There are different situations where a page needs to dynamically display a status message. These messages need to be conveyed to assistive technology users, even when they don’t receive focus. Where possible, you should avoid disturbing the user’s place in a page.</p>
    <p><A href="https://www.w3.org/WAI/WCAG21/Understanding/status-messages">Understanding Success Criterion 4.1.3: Status Messages</A></p>
    <h4>Implementation guidance</h4>
    <p>Status messages or updates which occur visually should be communicated to screen reader users.</p>
    <p>These messages should be non-intrustive and only used when there is a benefit to the user, for instance informing them how many search results have been returned, that errors have occured in their submission or that a form has been successfully submitted.</p>
    <p>Generally, a notification/status message should be implemented using an ARIA live region (see <A href="https://www.w3.org/TR/wai-aria/#aria-live">https://www.w3.org/TR/wai-aria/#aria-live</A> and <A href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions">https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions</A>).</p>
    <p>Avoid using the assertive setting for aria-live regions. The polite setting is sufficent in most use cases.</p>
    <h4>Testing with JAWS/NVDA</h4>
    <p>When completing actions that involve a visual status message or information that a user needs to be made aware of, check that the message is announced to screereader users in a timely manner.</p>
    <p>Note - these messages should not interupt the screenreaders current activity but should relay the information at a suitable break in the screenreader audio.</p>

<div className="contact-us">
  <h2 className="govuk-heading-m">Get in touch</h2>
  <p>If you’ve got a question or suggestion share it on the Home Office DDaT Slack channel #ask-accessibility or email <A href="mailto:access@digital.homeoffice.gov.uk">access@digital.homeoffice.gov.uk</A>.</p>
</div>

    </div>
  </div>
);

export default Page;

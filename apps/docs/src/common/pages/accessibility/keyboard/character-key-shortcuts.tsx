import { FC, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A, NavigationMenu } from '@not-govuk/components';

const tabImage01 = require('../../../../../assets/images/accessibility/tab-01.png').default;
const tabImage02 = require('../../../../../assets/images/accessibility/tab-02.png').default;

export const title = 'Character key shortcuts';
const description = 'Accessibility guidance for keyboard content';
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
          href: '/accessibility/links',
          text: 'Links'
        },
        {
          href: '/accessibility/tables',
          text: 'Tables'
        },
        {
          href: '/accessibility/headings',
          text: 'Headings'
        }
      ]} />
      <span className="govuk-caption-m" style={{marginBottom: "1em"}}>Interactivity</span>
      <NavigationMenu items={[
        {
          href: '/accessibility/error-messages',
          text: 'Error messages'
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
        ]} />
        <span className="govuk-caption-m" style={{marginBottom: "1em"}}>Providing alternatives</span>
          <NavigationMenu items={[
            {
              href: '/accessibility/audio-and-video',
              text: 'Audio and video'
            },
            {
              href: '/accessibility/images',
              text: 'Images'
            }
          ]} />
        <span className="govuk-caption-m" style={{marginBottom: "1em"}}>Resources</span>
          <NavigationMenu items={[
            {
              href: '/accessibility/resources',
              text: 'Guidance, tools and further reading'
            }
          ]} />
    </div>
    <div className="govuk-grid-column-three-quarters">
      <h1>
        <span className="caption">Accessibility</span>
        Character key shortcuts
      </h1>
      <p>Many websites and services offer character key shortcuts to help users navigate around a page or control page elements more easily.</p>
      <p>For example, some forms may have the character key shortcut Ctrl+S to save the current progress on the form so the user can come back later, or a web page may allow users to quickly open a menu by pressing Alt+F. Though there are reasons why it is beneficial to have these character key shortcuts available to users, these can also cause problems when not implemented correctly.</p>
      <p>Single character key shortcuts can lead to errors, whether this is through mis-clicks or misunderstanding by assistive technology. In the case of those that use speech-to-text software, a word misunderstood by the software could trigger shortcut actions that the user did not want to happen. Because of this it is far better to have character key shortcuts that combine two or more key presses to initiate an action.</p>
      <p>If you have single character key shortcuts enabled on your website or service, you should:</p>
      <ul>
      <li>look into remapping them so that they use two or more concurrent key presses OR</li>
      <li>disable the character key shortcuts if they do not bring value to the content</li>
      </ul>
      <p>Find out more about WCAG success criteria 2.1.4 <a href="https://www.w3.org/WAI/WCAG21/Understanding/character-key-shortcuts.html">character key shortcuts</a>.</p>
      <div className="govuk-grid-row">
      <div className="govuk-grid-column-two-thirds">
      </div>
      </div>
<br />

<div className="contact-us">
  <h2 className="govuk-heading-m">Get in touch</h2>
  <p>If you’ve got a question or suggestion share it on the Home Office DDaT Slack channel #ask-accessibility or email <A href="mailto:access@digital.homeoffice.gov.uk">access@digital.homeoffice.gov.uk</A>.</p>
</div>

    </div>
  </div>
);

export default Page;

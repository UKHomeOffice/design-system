import { FC, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A, NavigationMenu } from '@not-govuk/components';

export const title = 'Meet user needs';
const description = 'Meet user needs Accessibility Standard requirements';
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
      Meet user needs
    </h1>
    <p>You must ensure that you understand and meet user needs.</p>
    <p>When conducting user research you must include users with disabilities.</p>
    <h2>Index</h2>
    <ul className="plain">
      <li><a href="#rr5.1.1">5.1.1 - User Research Participants</a></li>
    </ul>

    <h3 id="rr5.1.1">5.1.1 - User Research Participants</h3>
    <p>When doing user research, make sure to include users with disabilities (at least 1 out of every 5 participants).</p>
    <h4>Implementation guidance</h4>
    <p>During user research activity, at least 1 in 5 participants must have a disability. You should ensure that you include a diverse group of disabled users with a range of disabilities that represents the population you’re researching.</p>
    <h4>How to test</h4>
    <p>You should ensure that you work with the Research Operations team to identify and recruit disabled participants. You should use appropriate research methods as defined by the Head of User Research.</p>

<div className="contact-us">
  <h2 className="govuk-heading-m">Get in touch</h2>
  <p>If you’ve got a question or suggestion share it on the Home Office DDaT Slack channel #ask-accessibility or email <A href="mailto:access@digital.homeoffice.gov.uk">access@digital.homeoffice.gov.uk</A>.</p>
</div>

    </div>
  </div>
);

export default Page;

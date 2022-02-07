import { FC, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A, NavigationMenu } from '@not-govuk/components';

export const title = 'Pointer gestures';
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
        href: '/accessibility/headings',
        text: 'Headings'
      },
      {
        href: '/accessibility/layout-typography',
        text: 'Layout and typography'
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
        }
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
        Pointer gestures
      </h1>
      <p>Pointer gestures or path-based gestures are common elements of a website. You may be familiar with elements such as volume sliders, image carousels and swiping content. Each of these elements are controlled by clicking and dragging the content with a mouse in a given direction or a long a given path.</p>
      <p>These types of elements must also be accessible to keyboard users. If you see pointer gesture elements on a website you should try getting to it with keyboard controls and then see if you can control it by using the arrow keys, or other character controls if required.</p>
      <p>Find out more about WCAG success criteria on <a href="https://www.w3.org/WAI/WCAG21/Understanding/pointer-gestures.html">pointer gestures</a>.</p>

<div className="contact-us">
  <h2 className="govuk-heading-m">Get in touch</h2>
  <p>If you’ve got a question or suggestion share it on the Home Office DDaT Slack channel #ask-accessibility or email <A href="mailto:access@digital.homeoffice.gov.uk">access@digital.homeoffice.gov.uk</A>.</p>
</div>

    </div>
  </div>
);

export default Page;

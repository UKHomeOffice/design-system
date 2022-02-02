import { FC, Fragment, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A, NavigationMenu } from '@not-govuk/components';

export const title = 'Accessibility';
const description = 'Information on how to ensure your service is accessible'

const Page: FC<PageProps> = ({ location }) => (
  <div className="govuk-grid-row">
    <Helmet>
      <title>{title} - Home Office Design System</title>
      <meta name="description" content={description} />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={description} />
      <meta name="og:article:section" content={title} />
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
      <h1>Accessibility</h1>
      <p>Accessibility means making your website, app or service usable by as many people as possible,
      regardless of specific access needs.</p>
      <p>Making something accessible improves everyone’s ability to use a service, which is affected by
      different needs and circumstances such as location, health and equipment.</p>
      <p>Delivering accessible and inclusive services is also in line with government standards and our legal
      responsibilities for equality and accessibility.</p>
      <p>In order to provide consistency for users and product teams, we’ve developed a <A href="/accessibility/standard">Home Office Accessibility Standard</A> that closely aligns to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA but simplifies and focuses on the areas most likely to present challenges for Home Office users.</p>
    </div>
  </div>
);

export default Page;

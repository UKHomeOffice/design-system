import { FC, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A, NavigationMenu } from '@not-govuk/components';

export const title = 'Resources';
const longTitle = 'Accessibility resources';
const description = 'Resources and further guidance for accessibility';
export const section = 'Accessibility';

const Page: FC<PageProps> = ({ location }) => (
  <div className="govuk-grid-row">
    <Helmet>
      <title>{longTitle} - Home Office Design System</title>
      <meta name="description" content={description} />
      <meta name="og:title" content={longTitle} />
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
      Resources
    </h1>
    <h2>
      Guidance
    </h2>
    <ul className="plain">
      <li><A href="https://www.gov.uk/service-manual/helping-people-to-use-your-service">Helping people to use your service</A></li>
      <li><A href="https://www.gov.uk/service-manual/helping-people-to-use-your-service/testing-for-accessibility">Testing for accessibility</A></li>
      <li><A href="https://www.gov.uk/government/publications/understanding-disabilities-and-impairments-user-profiles">User profiles for understanding disabilities and impairments</A></li>
    </ul>
    <h2>Checklists</h2>
    <ul className="plain">
    <li><A href="https://www.w3.org/WAI/test-evaluate/preliminary/">Easy checks – a first review of web accessibility</A></li>
      <li><A href="https://www.a11yproject.com/checklist/">The A11Y Project Checklist</A></li>
    </ul>

    <h2>
      Tools
    </h2>
    <ul className="plain">
    <li>Dos and don'ts for designing accessible services
    <br />- available as <A href="https://ukhomeoffice.github.io/accessibility-posters/">web pages</A> and <A href="https://github.com/UKHomeOffice/posters/tree/master/accessibility/dos-donts">downloadable posters</A></li>
    <li><A href="https://www.tpgi.com/color-contrast-checker/">Colour Contrast Analyser (CCA)</A></li>
    <li><A href="https://www.ssa.gov/accessibility/andi/help/install.html">ANDI - Accessibility Testing Tool</A></li>
    </ul>


    <h2>
      Further reading
    </h2>
    <ul className="plain">
      <li><A href="https://accessibility.blog.gov.uk/">Accessibility in government blog</A></li>
      <li><A href="https://www.digitala11y.com/digital-accessibility-courses-roundup/">Free and paid accessibility courses</A></li>
      <li><A href="https://www.digitala11y.com/digital-accessibility-newsletters-roundup/">Accessibility newsletters</A></li>
      <li><A href="https://www.digitala11y.com/web-accessibility-podcasts-rountup/">Accessibility podcasts</A></li>
      <li><A href="https://www.a11yproject.com/resources/">Other accessibility resources</A></li>
    </ul>

    <div className="contact-us">
      <h2 className="govuk-heading-m">Get in touch</h2>
      <p>If you’ve got a question or suggestion share it on the Home Office DDaT Slack channel #ask-accessibility or email <a href="mailto:access@digital.homeoffice.gov.uk">access@digital.homeoffice.gov.uk</a>.</p>
    </div>

    </div>
  </div>
);

export default Page;

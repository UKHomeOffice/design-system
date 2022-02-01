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
        },
        {
          href: '/accessibility/headings',
          text: 'Headings'
        },
        {
          href: '/accessibility/layout-typography',
          text: 'Layout and typography'
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
          href: '/accessibility/forms',
          text: 'Forms'
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
      Resources
    </h1>
    <h2>
      Guidance
    </h2>
    <ul className="plain">
      <li><A href="https://collaboration.homeoffice.gov.uk/display/A11y/Home+Office+Accessibility+Standard">Home Office Accessibility Standard v1.1 August 2021</A> (Home Office Confluence link)</li>
      <li><A href="https://homeofficegovuk.sharepoint.com/:w:/r/teams/HomeOfficeDigital/User%20Research%20and%20Design/contentdesign/_layouts/15/Doc.aspx?sourcedoc=%7BD88898BB-F961-4636-95E1-5E56F2B1789B%7D&file=Accessibility%20checklist.docx&action=default&mobileredirect=true">Accessibility checklist for designers</A> (Home Office Sharepoint link)</li>
      <li><A href="https://www.w3.org/WAI/test-evaluate/preliminary/">Easy checks – a first review of web accessibility</A></li>
      <li><A href="https://www.gov.uk/service-manual/helping-people-to-use-your-service">Helping people to use your service</A></li>
      <li><A href="https://www.gov.uk/service-manual/helping-people-to-use-your-service/testing-for-accessibility">Testing for accessibility</A></li>
      <li><A href="https://www.gov.uk/government/publications/understanding-disabilities-and-impairments-user-profiles">User profiles for understanding disabilities and impairments</A></li>
    </ul>

    <h2>
      Tools
    </h2>
    <ul className="plain">
    <li>Dos and don'ts for designing accessible services
    <br />- available as <A href="https://ukhomeoffice.github.io/accessibility-posters/">web pages</A> and <A href="https://github.com/UKHomeOffice/posters/tree/master/accessibility/dos-donts">downloadable posters</A></li>
    <li><A href="https://webaim.org/resources/contrastchecker/">Colour contrast checker</A></li>
    <li><A href="https://help.apple.com/voiceover/info/guide/10.12/">Guide for VoiceOver screen reader</A></li>
    <li><A href="https://wave.webaim.org/">WAVE accessibility evaluation tool</A></li>
    </ul>


    <h2>
      Further reading
    </h2>
    <ul className="plain">
      <li><A href="https://gds.blog.gov.uk/2018/06/20/creating-the-uk-governments-accessibility-empathy-lab/">Using the empathy lab at GDS</A></li>
      <li><A href="https://www.digitala11y.com/digital-accessibility-courses-roundup/">Free accessibility courses</A></li>
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

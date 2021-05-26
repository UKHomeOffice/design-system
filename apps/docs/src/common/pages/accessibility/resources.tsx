import { FC, Fragment, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A, NavigationMenu } from '@not-govuk/components';

const Page: FC<PageProps> = ({ location }) => (
  <div className="govuk-grid-row">
    <Helmet>
      <title>Accessibility resources- Home Office Design System</title>
      <meta name="og:article:section" content="Accessibility" />
    </Helmet>
    <div className="govuk-grid-column-one-quarter">
      <NavigationMenu items={[
        {
          href: '/accessibility/audio-and-video',
          text: 'Audio and video'
        },
        {
          href: '/accessibility/resources',
          text: 'Resources'
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
      <li><A href="https://collaboration.homeoffice.gov.uk/display/A11y/Accessibility+Standard">Home Office Accessibility Standard v1.0 Nov 2020</A> (Home Office Confluence link)</li>
      <li><A href="https://homeofficegovuk.sharepoint.com/:w:/s/designops/EeB8PFKt6CNEmzfijRoZAO8BudZ1A8ths4rpx4h8qykZDA?e=Mwm90N">Accessibility checklist for designers</A> (Home Office Sharepoint link)</li>
      <li><A href="https://www.gov.uk/service-manual/helping-people-to-use-your-service">Helping people to use your service</A></li>
      <li><A href="https://www.gov.uk/service-manual/helping-people-to-use-your-service/testing-for-accessibility">Testing for accessibility</A></li>
      <li><A href="https://gds.blog.gov.uk/2018/06/20/creating-the-uk-governments-accessibility-empathy-lab/">Using the empathy lab at GDS</A></li>
      <li><A href="https://www.gov.uk/government/publications/understanding-disabilities-and-impairments-user-profiles">User profiles for understanding disabilities and impairments</A></li>
    </ul>

    <h2>
      Tools
    </h2>
    <ul className="plain">
    <li><A href="https://ukhomeoffice.github.io/accessibility-posters/">Do's and don'ts for designing accessible services</A></li>
    <li><A href="https://github.com/UKHomeOffice/posters/tree/master/accessibility">Access needs poster set</A></li>
    <li><A href="https://webaim.org/resources/contrastchecker/">Colour contrast checker</A></li>
    <li><A href="https://help.apple.com/voiceover/info/guide/10.12/">Guide for VoiceOver screenreader</A></li>
    <li><A href="https://wave.webaim.org/">WAVE accessibility evaluation tool</A></li>
    </ul>


    <h2>
      Further reading
    </h2>
    <ul className="plain">
      <li><A href="https://www.digitala11y.com/digital-accessibility-courses-roundup/">Free accessibility courses</A></li>
      <li><A href="https://www.digitala11y.com/digital-accessibility-newsletters-roundup/">Accessibility newsletters</A></li>
      <li><A href="https://www.digitala11y.com/web-accessibility-podcasts-rountup/">Accessibility podcasts</A></li>
      <li><A href="https://www.a11yproject.com/resources/">Other accessibility resources</A></li>
    </ul>



    </div>
  </div>
);

export default Page;
export const title = 'Resources';

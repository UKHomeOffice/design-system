import { FC, Fragment, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A, NavigationMenu } from '@not-govuk/components';

const Page: FC<PageProps> = ({ location }) => (
  <div className="govuk-grid-row">
    <Helmet>
      <title>Accessibility - Home Office Design System</title>
      <meta name="og:article:section" content="Accessibility" />
    </Helmet>
    <div className="govuk-grid-column-one-quarter">
      <NavigationMenu items={[
        {
          href: '/accessibility/audio-and-video',
          text: 'Audio and video'
        },
        {
          href: '/accessibility/guidance',
          text: 'Guidance'
        },
        {
          href: '/accessibility/tools',
          text: 'Tools'
        },
        {
          href: '/accessibility/further-reading',
          text: 'Further reading'
        }
      ]} />
    </div>
    <div className="govuk-grid-column-three-quarters">
    <h1>
      <span className="caption">Accessibility</span>
      Tools
    </h1>
    <ul className="plain">
    <li><A href="https://ukhomeoffice.github.io/accessibility-posters/">Do's and don'ts for designing accessible services</A></li>
    <li><A href="https://github.com/UKHomeOffice/posters/tree/master/accessibility">Access needs poster set</A></li>
    <li><A href="https://webaim.org/resources/contrastchecker/">Colour contrast checker</A></li>
    <li><A href="https://help.apple.com/voiceover/info/guide/10.12/">Guide for VoiceOver screenreader</A></li>
    <li><A href="https://wave.webaim.org/">WAVE accessibility evaluation tool</A></li>
    </ul>




    </div>
  </div>
);

export default Page;
export const title = 'Accessibility';

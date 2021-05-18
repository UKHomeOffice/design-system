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
      Further reading
    </h1>
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
export const title = 'Accessibility';

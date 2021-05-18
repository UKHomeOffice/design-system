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
      Guidance
    </h1>
    <ul className="plain">
      <li><A href="https://collaboration.homeoffice.gov.uk/display/A11y/Accessibility+Standard">Home Office Accessibility Standard v1.0 Nov 2020</A></li>
      <li><A href="https://homeofficegovuk.sharepoint.com/:w:/s/designops/EeB8PFKt6CNEmzfijRoZAO8BudZ1A8ths4rpx4h8qykZDA?e=Mwm90N">Accessibility checklist for designers</A></li>
      <li><A href="https://www.gov.uk/service-manual/helping-people-to-use-your-service">Helping people to use your service</A></li>
      <li><A href="https://www.gov.uk/service-manual/helping-people-to-use-your-service/testing-for-accessibility">Testing for accessibility</A></li>
      <li><A href="https://gds.blog.gov.uk/2018/06/20/creating-the-uk-governments-accessibility-empathy-lab/">Using the empathy lab at GDS</A></li>
      <li><A href="https://www.gov.uk/government/publications/understanding-disabilities-and-impairments-user-profiles">User profiles for understanding disabilities and impairments</A></li>
    </ul>




    </div>
  </div>
);

export default Page;
export const title = 'Accessibility';

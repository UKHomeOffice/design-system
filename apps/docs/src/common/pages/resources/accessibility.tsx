import { FC, Fragment, createElement as h } from 'react';
import { PageProps } from '@not-govuk/app-composer';
import { A } from '@not-govuk/components';



const Page: FC<PageProps> = ({ location }) => (
  <div className="govuk-grid-row">
    <div className="govuk-grid-column-one-third">
      <aside>
        <h2>Resources</h2>
        <ul className="plain">
          <li className="active"><A href="/resources/accessibility">Accessibility</A></li>
          <li><A href="/resources/government">GOV.UK</A></li>
          <li><A href="/resources/prototyping">Prototyping</A></li>
        </ul>
      </aside>
    </div>
    <div className="govuk-grid-column-two-thirds">
      <h1>
        <span className="caption">Resources</span>
        Accessibility
      </h1>
      <p>Help your service meet its accessibility requirements.</p>
      <h2 className="govuk-heading-m">GOV.UK accessibility guidance</h2>
      <ul className="plain">
        <li><a href="https://www.gov.uk/service-manual/helping-people-to-use-your-service">Helping people to use your service</a></li>
        <li><a href="https://www.gov.uk/service-manual/helping-people-to-use-your-service/testing-for-accessibility">Testing for accessibility</a></li>
        <li><a href="https://gds.blog.gov.uk/2018/06/20/creating-the-uk-governments-accessibility-empathy-lab/">Using the empathy lab at GDS</a></li>
        <li><a href="https://www.gov.uk/government/publications/understanding-disabilities-and-impairments-user-profiles">User profiles for understanding disabilities and impairments</a></li>
      </ul>

      <h2 className="govuk-heading-m">Other tools</h2>
      <ul className="plain">
        <li><a href="https://ukhomeoffice.github.io/accessibility-posters/">Do's and don'ts for designing accessible services</a></li>
        <li><a href="https://github.com/UKHomeOffice/posters/tree/master/accessibility">Access needs poster set</a></li>
        <li><a href="https://webaim.org/resources/contrastchecker/">Colour contrast checker</a></li>
        <li><a href="https://help.apple.com/voiceover/info/guide/10.12/">Guide for VoiceOver screenreader</a></li>
        <li><a href="https://wave.webaim.org/">WAVE accessibility evaluation tool</a></li>
      </ul>
    </div>
  </div>
);

export default Page;
export const title = 'Resources';

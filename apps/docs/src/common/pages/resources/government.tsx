import { FC, Fragment, createElement as h } from 'react';
import { PageProps } from '@not-govuk/app-composer';
import { A } from '@not-govuk/components';



const Page: FC<PageProps> = ({ location }) => (
  <div className="govuk-grid-row">
    <div className="govuk-grid-column-one-third">
      <aside>
        <ul className="plain">
          <li><A href="/resources/accessibility">Accessibility</A></li>
          <li><A href="/resources/government">GOV.UK</A></li>
          <li><A href="/resources/prototyping">Prototyping</A></li>
        </ul>
      </aside>
    </div>
    <div className="govuk-grid-column-two-thirds">
      <h1>
        <span className="caption">Resources</span>
        Guidance on GOV.UK
      </h1>
      <p>Resources available across government.</p>
      <ul className="plain">
        <li><A href="https://design-system.service.gov.uk/">GOV.UK design system</A></li>
        <li><A href="https://www.gov.uk/guidance/government-design-principles">GOV.UK design principles</A></li>
        <li><A href="https://www.gov.uk/guidance/style-guide/a-to-z-of-gov-uk-style">GOV.UK content style guide</A></li>
        <li><A href="https://www.gov.uk/service-manual">GOV.UK service manual</A></li>
      </ul>


    </div>
  </div>
);

export default Page;
export const title = 'Resources';

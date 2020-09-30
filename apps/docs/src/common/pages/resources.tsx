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
      <h1>Resources 1</h1>
      <p>A collection of resources to help teams design and build services in Government.</p>
      <div className="govuk-grid-row">
        <div className="govuk-grid-column-two-thirds">
          <p>Resources cover:</p>
          <ul>
            <li>how to design and build <A href="/resources/accessibility">accessible</A> services</li>
            <li>helpful resources from across <A href="/resources/government">government</A></li>
            <li>tools to help build <A href="/resources/prototyping">prototypes</A></li>
          </ul>
        </div>
      </div>

    </div>
  </div>
);

export default Page;
export const title = 'Resources';

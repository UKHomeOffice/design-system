import { FC, Fragment, createElement as h } from 'react';
import { PageProps } from '@not-govuk/app-composer';
import { A } from '@not-govuk/components';

const applyPassportImage = require('../../../assets/images/apply-passport.png').default;
const ddatEventsImage = require('../../../assets/images/ddat-events.png').default;
const policeImage = require('../../../assets/images/police.png').default;

const Page: FC<PageProps> = ({ location }) => (
  <div className="govuk-grid-row">
    <div className="govuk-grid-column-one-third">
      <aside>
        <h2>Resources</h2>
        <ul className="plain">
          <li><A href="/resources/accessibility">Accessibility</A ></li>
          <li><A href="/resources/government">GOV.UK</A ></li>
          <li><A href="/resources/prototyping">Prototyping</A ></li>
        </ul>
      </aside>
    </div>
    <div className="govuk-grid-column-two-thirds">
      <h1>Resources</h1>
      <p>A collection of resources to help teams design and build services in Government.</p>
      <div className="govuk-grid-row">
        <div className="govuk-grid-column-two-thirds">
          <p>Resources cover:</p>
          <ul>
            <li>how to design and build accessible services</li>
            <li>helpful resources from across government</li>
            <li>tools to help build prototypes</li>
          </ul>
        </div>
      </div>

    </div>
  </div>
);

export default Page;
export const title = 'Resources';

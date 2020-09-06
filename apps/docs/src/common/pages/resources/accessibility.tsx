import { FC, Fragment, createElement as h } from 'react';
import { PageProps } from '@not-govuk/app-composer';
import { A } from '@not-govuk/components';

import '../../../../assets/colour.scss';

const colour = (colour: string, whiteText: boolean = false) => ({
  backgroundColor: colour,
  color: (
    whiteText
    ? 'white'
    : undefined
  ),
  border: '1px solid #CBCBCB'
});

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
      <p>
       Help your service meet it's accessibility requirements.
      </p>

    </div>
  </div>
);

export default Page;
export const title = 'Resources';

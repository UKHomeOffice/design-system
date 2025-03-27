import { FC, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A } from '@not-govuk/components';
import { menu } from '../get-involved';

import { PageWrap } from '../';

export const title = 'Backlog';
const description = 'How to get involved and contribute to the Home Office Design System'
const section = 'Get involved';

const Page: FC<PageProps> = () => (
  <PageWrap>
    <div className="govuk-grid-row">
    <Helmet>
      <title>{title} - Home Office Design System</title>
      <meta name="description" content={description} />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={description} />
      <meta name="og:article:section" content={section} />
    </Helmet>
    <div className="govuk-grid-column-one-quarter">
      {menu}
    </div>
    <div className="govuk-grid-column-three-quarters">
      <h1>
        <span className="caption">{section}</span>
        {title}
      </h1>

        <p>The Design System has an open backlog on <A href="https://github.com/UKHomeOffice/home-office-digital-patterns/projects/1">GitHub</A>. Anyone can propose, develop or contribute to new patterns and components, or improvements to existing ones.</p>

        <p>To contribute, you can create and comment on an <A href="https://github.com/UKHomeOffice/home-office-digital-patterns/issues">issue in GitHub</A>.You don’t need to upload anything to Git to contribute.</p>

        <p>The best place to discuss patterns and components is on Slack. But you can also <A href="mailto:design@digital.homeoffice.gov.uk">email the working group</A> or talk to us in person.</p>

        <p>Here is a list of the components, patterns and updates currently on the Home Office design system GitHub backlog:</p>

        <table className="govuk-table app-table--constrained">
        <caption className="govuk-table__caption">Design system backlog </caption>
  <thead>
    <tr>
      <th className="govuk-table__header">Name</th>
      <th className="govuk-table__header" style={{width: "90px", textAlign: "right"}}>Status</th>
    </tr>
  </thead>
  <tbody>

      <tr>
        <td className="govuk-table__cell">
        <A href="https://github.com/UKHomeOffice/design-system/issues/159">Filtering</A>
        </td>
        <td className="govuk-table__cell govuk-body-s" style={{textAlign: "right"}}>
        In progress
        </td>
      </tr>

      <tr>
        <td className="govuk-table__cell">
        <A href="https://github.com/UKHomeOffice/design-system/issues/154">Graphic for a profile image/avatar</A>
        </td>
        <td className="govuk-table__cell govuk-body-s" style={{textAlign: "right"}}>
        In progress
        </td>
      </tr>

      <tr>
        <td className="govuk-table__cell">
          <A href="https://github.com/UKHomeOffice/design-system/issues/186">Highlighting search matches</A>
        </td>
        <td className="govuk-table__cell govuk-body-s" style={{textAlign: "right"}}>
          In progress
        </td>
      </tr>

      <tr>
        <td className="govuk-table__cell">
        <A href="https://github.com/UKHomeOffice/design-system/issues/155">Icons</A>
        </td>
        <td className="govuk-table__cell govuk-body-s" style={{textAlign: "right"}}>
        In progress
        </td>
      </tr>

  </tbody>
</table>
    </div>
  </div>
  </PageWrap>
);

export default Page;

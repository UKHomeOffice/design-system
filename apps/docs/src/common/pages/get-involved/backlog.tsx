import { FC, Fragment, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A, NavigationMenu } from '@not-govuk/components';

const Page: FC<PageProps> = ({ location }) => (
  <div className="govuk-grid-row">
    <Helmet>
      <title>Backlog - Home Office Design System</title>
      <meta name="og:article:section" content="Get involved" />
    </Helmet>
    <div className="govuk-grid-column-one-third">
      <NavigationMenu items={[
        {
          href: '/get-involved/working',
          text: 'Working group'
        },
        {
          href: '/get-involved/backlog',
          text: 'Backlog'
        },
        {
          href: '/get-involved/suggest',
          text: 'Suggest new ideas'
        },
        {
          href: '/get-involved/githubguide',
          text: 'Using GitHub to propose design system changes'
        },
        {
          href: '/get-involved/proving',
          text: 'Proving ideas work'
        },
        {
          href: '/get-involved/using',
          text: 'Using the system'
        }
      ]} />
    </div>
    <div className="govuk-grid-column-two-thirds">
    <h1 className="govuk-heading-l">Backlog</h1>

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
          <A href="https://github.com/UKHomeOffice/design-system/issues/166">Accessibility on check and confirm details</A>
        </td>
        <td className="govuk-table__cell govuk-body-s" style={{textAlign: "right"}}>
          In progress
          </td>
      </tr>

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

      <tr>
        <td className="govuk-table__cell">
        <A href="https://github.com/UKHomeOffice/design-system/issues/161">Navigation content hidden on narrow viewports</A>
        </td>
        <td className="govuk-table__cell govuk-body-s" style={{textAlign: "right"}}>
            In progress
        </td>
      </tr>

      <tr>
        <td className="govuk-table__cell">
        <A href="https://github.com/UKHomeOffice/design-system/issues/162">Passport details</A>
        </td>
        <td className="govuk-table__cell govuk-body-s" style={{textAlign: "right"}}>
            In progress
        </td>
      </tr>

      <tr>
        <td className="govuk-table__cell">
        <A href="https://github.com/UKHomeOffice/design-system/issues/156">Sign out</A>
        </td>
        <td className="govuk-table__cell govuk-body-s" style={{textAlign: "right"}}>
        In progress
        </td>
      </tr>

      <tr>
        <td className="govuk-table__cell">
        <A href="https://github.com/UKHomeOffice/design-system/issues/157">Status banner</A>
        </td>
        <td className="govuk-table__cell govuk-body-s" style={{textAlign: "right"}}>
        In progress
        </td>
      </tr>

      <tr>
        <td className="govuk-table__cell">
        <A href="https://github.com/UKHomeOffice/design-system/issues/158">Typography</A>
        </td>
        <td className="govuk-table__cell govuk-body-s" style={{textAlign: "right"}}>
        In progress
        </td>
      </tr>

  </tbody>
</table>
    </div>
  </div>
);

export default Page;
export const title = 'Get involved';

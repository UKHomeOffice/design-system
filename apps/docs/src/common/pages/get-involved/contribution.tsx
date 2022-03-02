import { FC, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A } from '@not-govuk/components';
import { menu } from '../get-involved';

export const title = 'Contribution criteria';
const description = 'How to contribute your work to the Home Office design system'
const section = 'Get involved';

const Page: FC<PageProps> = ({ location }) => (
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
      <p>The Home Office follows the <a href="https://design-system.service.gov.uk/community/contribution-criteria/">GOV.UK Design System contribution criteria.</a> The only difference is that contributions will be reviewed by the Home Office’s Design System Working Group.</p>

      <p>The contents of the Design System must be of a high quality and meet user needs. To guarantee this, all components and patterns need to meet certain criteria.</p>

      <h2>New proposals</h2>
      <p>To be successful, proposals need to show that the component or pattern being suggested would be useful and unique.</p>
      <table className="govuk-table app-table--constrained">

        <caption className="govuk-table__caption govuk-visually-hidden">New proposals criteria</caption>


        <thead className="govuk-table__head">
          <tr className="govuk-table__row">

            <th scope="col" className="govuk-table__header">Criteria</th>

            <th scope="col" className="govuk-table__header">Description</th>

          </tr>
        </thead>

        <tbody className="govuk-table__body">


          <tr className="govuk-table__row">



            <th scope="row" className="govuk-table__header">Useful</th>




            <td className="govuk-table__cell"><p> There is evidence that this component or pattern would be useful for many teams or services working on internal facing systems.</p>
              <p className="govuk-!-margin-bottom-0">Evidence could be screenshots or links to versions of it being used in different services.</p></td>


          </tr>



          <tr className="govuk-table__row">



            <th scope="row" className="govuk-table__header">Unique</th>




            <td className="govuk-table__cell"><p> It does not replicate something already in the Design System. </p>
              <p className="govuk-!-margin-bottom-0">If it’s intended to replace an existing component or pattern, there is evidence to show that it’s better than the existing version.</p></td>


          </tr>


        </tbody>
      </table>
      <p>The <a href="/get-involved/working/">Design System Working Group</a> reviews proposals in the <a href="/get-involved/backlog/">community backlog</a> to check they meet these criteria. Proposals that meet the criteria will then be marked ‘to do’, ready to be worked on.</p>

      <h2>Before a component or pattern is published</h2>

      <table className="govuk-table app-table--constrained">

        <caption className="govuk-table__caption govuk-visually-hidden">Before publication criteria</caption>


        <thead className="govuk-table__head">
          <tr className="govuk-table__row">

            <th scope="col" className="govuk-table__header">Criteria</th>

            <th scope="col" className="govuk-table__header">Description</th>

          </tr>
        </thead>

        <tbody className="govuk-table__body">


          <tr className="govuk-table__row">



            <th scope="row" className="govuk-table__header">Usable</th>




            <td className="govuk-table__cell"><p>It has been tested  in user research and shown to work with a representative sample of users, including those with disabilities.</p>

              <p className="govuk-!-margin-bottom-0">Components and patterns which are not proven usable can be published as experimental. But they must be clearly based on relevant user research from other organisations and best practice, and meet the other criteria.</p></td>


          </tr>



          <tr className="govuk-table__row">



            <th scope="row" className="govuk-table__header">Consistent</th>




            <td className="govuk-table__cell"><p>It reuses existing styles and components in the Design System where relevant.</p>

              <p>Both the guidance and any content included in examples must follow the <a href="https://www.gov.uk/guidance/style-guide/a-to-z-of-gov-uk-style">GOV.UK content style guide</a>.</p>


            </td>


          </tr>



          <tr className="govuk-table__row">



            <th scope="row" className="govuk-table__header">Versatile</th>




            <td className="govuk-table__cell"><p>The implementation is versatile enough that the component or pattern can be used in a range of different services that may need it.</p>

              <p>For example, a versatile date input component could be set up to ask for a year only, a month and year only, a precise date, or any other combination you may need.</p>

              <p className="govuk-!-margin-bottom-0">The component or pattern must also have been tested and shown to work with a range of <a href="https://www.gov.uk/service-manual/technology/designing-for-different-browsers-and-devices">browsers, assistive technologies and devices</a>.</p></td>


          </tr>


        </tbody>
      </table>


    </div>
  </div>
);

export default Page;

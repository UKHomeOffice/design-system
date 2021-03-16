import { FC, Fragment, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A, NavigationMenu } from '@not-govuk/components';

const Page: FC<PageProps> = ({ location }) => (
  <div className="govuk-grid-row">
    <Helmet>
      <title>Typography - Home Office Design System</title>
      <meta name="og:article:section" content="Styles" />
    </Helmet>

    <div className="govuk-grid-column-one-quarter">
      <NavigationMenu items={[
        {
          href: '/styles/colour',
          text: 'Colour'
        },
        {
          href: '/styles/images',
          text: 'Images'
        },
        {
          href: '/styles/typography',
          text: 'Typography'
        }
      ]} />
    </div>

    <div className="govuk-grid-column-three-quarters">

      <span className="govuk-caption-xl">Styles</span>
      <h1 className="heading-section">Typography</h1>
      <p className="lede">GDS Transport, the typeface used on GOV.UK, is restricted by license for use on gov.uk domains. Internal services can't use GDS Transport and should instead use the open source <A href="https://rsms.me/inter/">Inter UI</A> typeface.</p>
      <p className="lede">Inter UI is closely related to Helvetica and Arial but is easier to read online, particularly at smaller type sizes.</p>

      <section>
        <h2 className="govuk-heading-l" style={{marginTop: "1.5em"}}>Headings</h2>
        <p>Mark up headings semantically using the appropriate heading level and use a corresponding heading class to apply styling.</p>
        <div className="example example-images details-margin-btm">
          <div className="govuk-grid-row">
            <h1 className="govuk-heading-xl" style={{marginBottom: "30px", marginTop: "0px"}}>Heading xlarge</h1>
            <h2 className="govuk-heading-l" style={{marginBottom: "20px", marginTop: "0px"}}>Heading large</h2>
            <h3 className="govuk-heading-m" style={{marginBottom: "15px", marginTop: "0px"}}>Heading medium</h3>
            <h4 className="govuk-heading-s" style={{marginBottom: "15px", marginTop: "0px"}}>Heading small</h4>
          </div>
        </div>
      </section>

      <section>
        <h2 className="govuk-heading-l" style={{marginTop: "1.5em"}}  >Body content</h2>
        <p>Inter UI has a taller x-height and larger letter-spacing then GDS Transport. The default font size is 18px on large screens and 15px on smaller screens.</p>
        <p>Multi-use caseworking services tend to be more complex and should be optimised for speed. Smaller font sizes are acceptable but the minimum on large screens should be 15px.</p>
      </section>

      <section>
        <h2 className="govuk-heading-l" style={{marginTop: "1.5em"}}>Links</h2>
        <p>Links should be <span style={{color: "#005EA5", textDecoration: "underline"}}>blue and underlined</span>.</p>
      </section>

      <section>
        <h2 className="govuk-heading-l" style={{marginTop: "1.5em"}}>Typographic scale</h2>
        <p>Inter UI has a taller x-height than GDS transport, which affects the typographic scale. The adjustments needed to match the default scale are:</p>
      </section>

      <table className="govuk-table">
        <thead className="govuk-table__head">
          <tr className="govuk-table__row">
            <th className="govuk-table__header" scope="col">Element</th>
            <th className="govuk-table__header" scope="col">Large screen</th>
            <th className="govuk-table__header" scope="col">Small screen</th>
            {/* <th className="govuk-table__header" scope="col">Font weight</th> */}
            <th className="govuk-table__header" scope="col">Line height</th>
          </tr>
        </thead>
        <tbody className="govuk-table__body">
          <tr className="govuk-table__row">
            <th className="govuk-table__cell" scope="row">Heading-xlarge</th>
            <td className="govuk-table__cell" scope="row">40px</td>
            <td className="govuk-table__cell" scope="row">32px</td>
            {/* <td className="govuk-table__cell" scope="row">bold</td> */}
            <td className="govuk-table__cell" scope="row">1.3</td>
          </tr>
          <tr className="govuk-table__row">
            <th className="govuk-table__cell" scope="row">Heading-large</th>
            <td className="govuk-table__cell" scope="row">32px</td>
            <td className="govuk-table__cell" scope="row">24px</td>
            {/* <td className="govuk-table__cell" scope="row">bold</td> */}
            <td className="govuk-table__cell" scope="row">1.3</td>
          </tr>
          <tr className="govuk-table__row">
            <th className="govuk-table__cell" scope="row">Heading-medium</th>
            <td className="govuk-table__cell" scope="row">24px</td>
            <td className="govuk-table__cell" scope="row">20px</td>
            {/* <td className="govuk-table__cell" scope="row">bold</td> */}
            <td className="govuk-table__cell" scope="row">1.3</td>
          </tr>
          <tr className="govuk-table__row">
            <th className="govuk-table__cell" scope="row">Heading-small</th>
            <td className="govuk-table__cell" scope="row">18px</td>
            <td className="govuk-table__cell" scope="row">15px</td>
            {/* <td className="govuk-table__cell" scope="row">bold</td> */}
            <td className="govuk-table__cell" scope="row">1.45</td>
          </tr>
          <tr className="govuk-table__row">
            <th className="govuk-table__cell" scope="row">Body</th>
            <td className="govuk-table__cell" scope="row">18px</td>
            <td className="govuk-table__cell" scope="row">15px</td>
            {/* <td className="govuk-table__cell" scope="row">regular</td> */}
            <td className="govuk-table__cell" scope="row">1.45<br />1.35 (smaller screens)</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>   
);

export default Page;
export const title = 'Colour';

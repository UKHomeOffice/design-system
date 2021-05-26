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
      <p className="lede"><A href="https://design-system.service.gov.uk/styles/typography/">GDS Transport</A>, the typeface used on GOV.UK, is restricted by license for use on gov.uk domains. Internal services can't use GDS Transport and should instead use the open source <A href="https://fonts.google.com/specimen/Roboto#standard-styles">Roboto</A> typeface.</p>
      <p className="lede">Roboto is similar to Helvetica and Arial but is optimised for screens, making it easier to read online.</p>

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
        <p>The default font size is 19px on large screens and 16px on smaller screens.</p>
        <p>Multi-use caseworking services tend to be more complex and should be optimised for speed. Smaller font sizes are acceptable but the minimum on large screens should be 16px.</p>
      </section>

      <section>
        <h2 className="govuk-heading-l" style={{marginTop: "1.5em"}}>Links</h2>
        <p>Links should be <span style={{color: "#005EA5", textDecoration: "underline"}}>blue and underlined</span>.</p>
      </section>



    </div>
  </div>
);

export default Page;
export const title = 'Typography';

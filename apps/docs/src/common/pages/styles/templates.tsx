import { FC, Fragment, createElement as h } from 'react';
import { PageProps } from '@not-govuk/app-composer';
import { A } from '@not-govuk/components';

const Page: FC<PageProps> = ({ location }) => (
  
  <div className="govuk-grid-row">

    <div className="govuk-grid-column-one-third">
      <aside>
        <h2>Styles</h2>
        <ul className="plain">
          <li><A href="/styles/colour">Colour</A></li>
          <li><A href="/styles/images">Images</A></li>
          <li><A href="/styles/templates">Page templates</A></li>
          <li><A href="/styles/typography">Typography</A></li>
        </ul>
      </aside>
    </div>

    <div className="govuk-grid-column-two-thirds">
      <span className="govuk-caption-xl">Styles</span>
      <h1 className="heading-section">Page templates</h1>
      <p>Internal services or admin products sitting on homeoffice.gov.uk domain should use these page templates.</p>
      <p>View the coded examples in the <A href="https://github.com/UKHomeOffice/ho-style-prototype-kit">Home Office prototype kit</A> </p>
      
      <section>
        <div className="example example-images">

          <div className="govuk-grid-row">
            {/* Default header example */}
            <header>
              <div className="wrapper-header">
                <div className="wrapper-header--default">
                  <div className="header-logo--default" style={{marginLeft: "0"}}>
                    {/* {% include "includes/home-office-logo.html" %} */}
                  </div>
                  <div className="header-title--default">
                    <A href="#0" className="header-name">Service name</A>
                  </div>
                </div>
              </div>
            </header>
          </div>

          <div className="govuk-grid-row">
            <h2 className="govuk-heading-m">Default page template</h2>
            <p>The header inspires trust with the department logo, while the service name helps users understand which service they are using.</p>
            <p>The footer includes information about the department with relevant links. White background helps to clearly section the main content area.</p>
          </div>

          {/* Default footer example  */}
          <div className="govuk-grid-row">
            <footer style={{boxShadow: "none"}}>
              <div className="wrapper-footer">
                <div>
                  <p className="footer-message">A Home Office Digital, Data and Technology service</p>
                </div>
                <div className="footer-menu">
                  <ul>
                    <li><A href="#0">Feedback</A></li>
                    <li><A href="#0">Help</A></li>
                    <li><A href="#0">GOV.UK home</A></li>
                  </ul>
                </div>
              </div>
            </footer>
          </div>

        </div>
      </section>

      <section>
        <div className="example example-images">
          
          <div className="govuk-grid-row">
            {/* Header with menu example */}
            <header>
              <div className="wrapper-header">
                <div className="wrapper-header--menu">
                  <div className="header-logo--menu">
                    {/* {% include "includes/home-office-logo.html" */}
                  </div>
                  <div className="header-title--menu">
                    <A href="#0" className="header-name">Service name</A>
                  </div>
                  <div className="header-menu--menu">
                    <ul>
                      <li><A href="#0">User name</A></li>
                      <li><A href="#0">Sign out</A></li>
                    </ul>
                  </div>
                </div>
              </div>
            </header>
          </div>

          <div className="govuk-grid-row"><h2 className="govuk-heading-m">Customised page template with menu</h2>
            <p>Use the header with a menu if you need to include basic navigation, contact or account management links.</p>
          </div>

          {/* Default footer example */}
          <div className="govuk-grid-row">
            <footer style={{boxShadow: "none"}}>
              <div className="wrapper-footer">
                <div>
                  <p className="footer-message">A Home Office Digital, Data and Technology service</p>
                </div>
                <div className="footer-menu">
                  <ul>
                    <li><A href="#0">Feedback</A></li>
                    <li><A href="#0">Help</A></li>
                    <li><A href="#0">GOV.UK home</A></li>
                  </ul>
                </div>
              </div>
            </footer>
          </div>

        </div>
      </section>

      <section>
        <div className="example example-images">
          <div className="govuk-grid-row">
            {/* Header with sub-nav example */}
            <header>
              <div className="wrapper-header">
                <div className="wrapper-header--default">
                  <div className="header-logo--default" style={{marginLeft: "0"}}>
                    {/* {% include "includes/home-office-logo.html" %} */}
                  </div>
                  <div className="header-title--default">
                    <A href="/" className="header-name">Service name</A>
                  </div>
                </div>
              </div>
            </header>
            <div className="header-example-nav wrapper-header-subnav">
              {/* {% include "includes/top_nav.html" %} */}
            </div>
          </div>

          <div className="govuk-grid-row"><h2 className="govuk-heading-m">Customised page template with sub-navigation</h2>
            <p>Use the header with a sub-navigation on services when navigation is more complex, usually on larger services.</p>
          </div>

          {/* Default footer example */}
          <div className="govuk-grid-row">
            <footer style={{boxShadow: "none"}}>
              <div className="wrapper-footer">
                <div>
                  <p className="footer-message">A Home Office Digital, Data and Technology service</p>
                </div>
                <div className="footer-menu">
                  <ul>
                    <li><A href="#0">Feedback</A></li>
                    <li><A href="#0">Help</A></li>
                    <li><A href="#0">GOV.UK home</A></li>
                  </ul>
                </div>
              </div>
            </footer>
          </div>

        </div>
      </section>
    </div>

  </div>   
);

export default Page;
export const title = 'Colour';

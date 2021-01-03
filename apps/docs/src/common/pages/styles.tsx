import { FC, Fragment, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A } from '@not-govuk/components';

const applyPassportImage = require('../../../assets/images/apply-passport.png').default;
const ddatEventsImage = require('../../../assets/images/ddat-events.png').default;
const policeImage = require('../../../assets/images/police.png').default;

const Page: FC<PageProps> = ({ location }) => (
  <div className="govuk-grid-row">
    <Helmet>
      <title>Styles - Home Office Design System</title>
      <meta name="og:article:section" content="Styles" />
    </Helmet>
    <div className="govuk-grid-column-one-third">
      <aside>
        <h2>Styles</h2>
        <ul className="plain">
          <li><A href="/styles/colour">Colour</A></li>
          <li><A href="/styles/images">Images</A></li>
          <li><A href="/styles/typography">Typography</A></li>
        </ul>
      </aside>
    </div>
    <div className="govuk-grid-column-two-thirds">
      <h1>Styles</h1>
      <p>We apply different styles to Home Office services and products depending on what domain they sit in and what kind of service it is.</p>
      <h2 className="govuk-heading-m">Home Office design styles</h2>
      <div className="govuk-grid-row">
        <div className="govuk-grid-column-one-half">
          <p>If your service:</p>
          <ul>
            <li>is internal, such as a caseworking system or admin service, and</li>
            <li>sits on a homeoffice.gov.uk domain</li>
          </ul>
          <p>You should use:</p>
          <ul>
            <li><A href="/styles/templates">Home Office page template</A></li>
            <li><A href="https://rsms.me/inter/">Inter-UI</A> font</li>
            <li><A href="/styles/colour">Home Office colours</A></li>
          </ul>
        </div>
        <div className="govuk-grid-column-one-half">
          <img src={ddatEventsImage} alt="" className="image-examples" />
          <span className="image-caption">Digital, Data and Technolgy (DDaT) Together page on homeoffice.gov.uk</span>
        </div>
      </div>
      <hr className="govuk-section-break govuk-section-break--xl govuk-section-break--visible" />
      <h2 className="govuk-heading-m">GOV.UK design styles</h2>
      <div className="govuk-grid-row">
        <div className="govuk-grid-column-one-half">
          <p>If your service:</p>
          <ul>
            <li>is public-facing and transactional, and</li>
            <li>sits on a gov.uk or service.gov.uk domain</li>
          </ul>
          <p>You should use:</p>
          <ul>
            <li><A href="/styles/page-template/">GOV.UK page template</A></li>
            <li>the crown logo and GDS Transport font</li>
            <li><A href="/styles/colour/">GOV.UK colours</A></li>
          </ul>
          <p>Note: independent branding is used for services that are granted a GOV.UK exemption.</p>
        </div>
        <div className="govuk-grid-column-one-half">
          <img src={applyPassportImage} alt="" className="image-examples" />
          <span className="image-caption"><A href="https://www.passport.service.gov.uk/">www.passport.service.gov.uk</A></span>
        </div>
      </div>
      <hr className="govuk-section-break govuk-section-break--xl govuk-section-break--visible" />
      <h2 className="govuk-heading-m">Independent branding</h2>
      <div className="govuk-grid-row">
        <div className="govuk-grid-column-one-half">
          <p>If your service is one of the following:</p>
          <ul>
            <li>a marketing or informational site</li>
            <li>public-facing and exempt from using GOV.UK styles</li>
            <li>public-facing and on the homeoffice.gov.uk domain</li>
          </ul>
          <p>You may be able to use independent branding.</p>
        </div>
        <div className="govuk-grid-column-one-half">
          <img src={policeImage} alt="" className="image-examples" />
          <span className="image-caption"><A href="https://www.joiningthepolice.co.uk">www.joiningthepolice.co.uk</A></span>
        </div>
      </div>
    </div>
  </div>
);

export default Page;
export const title = 'Styles';

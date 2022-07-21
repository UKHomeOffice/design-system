import { FC, Fragment, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A, NavigationMenu } from '@not-govuk/components';

export const menu = (
  <Fragment>
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
  </Fragment>
);

export const title = 'Styles';
const description = 'Make your service look and feel like a Home Office service';

const applyPassportImage = require('../../../assets/images/apply-passport.png');
const ddatEventsImage = require('../../../assets/images/ddat-events.png');
const policeImage = require('../../../assets/images/police.png');

const Page: FC<PageProps> = ({ location }) => (
  <div className="govuk-grid-row">
    <Helmet>
      <title>{title} - Home Office Design System</title>
      <meta name="description" content={description} />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={description} />
      <meta name="og:article:section" content={title} />
    </Helmet>
    <div className="govuk-grid-column-one-quarter">
      {menu}
    </div>
    <div className="govuk-grid-column-three-quarters">
      <h1>{title}</h1>
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
            <li><A href="/components?name=Page">Home Office page template</A></li>
            <li><A href="https://fonts.google.com/specimen/Roboto#standard-styles">Roboto</A> font</li>
            <li><A href="/styles/colour">Home Office colours</A></li>
          </ul>
        </div>
        <div className="govuk-grid-column-one-half">
          <img src={ddatEventsImage} alt="Screenshot of a Home Office 'Digital, Data and Technology Together' events page" className="image-examples" />
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
            <li><A href="https://design-system.service.gov.uk/styles/page-template/">GOV.UK page template</A></li>
            <li>the crown logo and GDS Transport font</li>
            <li><A href="https://design-system.service.gov.uk/styles/colour/">GOV.UK colours</A></li>
          </ul>
          <p>Note: independent branding is used for services that are granted a GOV.UK exemption.</p>
        </div>
        <div className="govuk-grid-column-one-half">
          <img src={applyPassportImage} alt="Screenshot of a gov.uk 'Apply for a passport' page" className="image-examples" />
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
          <img src={policeImage} alt="Screenshot of a 'Joining the police' page" className="image-examples" />
          <span className="image-caption"><A href="https://www.joiningthepolice.co.uk">www.joiningthepolice.co.uk</A></span>
        </div>
      </div>
    </div>
  </div>
);

export default Page;

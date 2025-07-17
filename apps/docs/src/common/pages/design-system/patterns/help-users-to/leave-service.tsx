import { FC, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A } from '@not-govuk/components';
import config from '../../../../config';

import { SubsectionWrap, title as subsection } from '../';

const siteTitle = config.title;

export const title = 'Leave a service';
const longTitle = title;
const description = 'How to help users to leave a service';
const subsubsection = 'Help users to';

const applyLeaveHeader = require('../../../../../../assets/images/patterns/leave-service-header.svg');
const applyLeaveInline = require('../../../../../../assets/images/patterns/leave-service-inline.svg');

const Page: FC<PageProps> = () => (
  <SubsectionWrap>
    <Helmet>
      <title>{title} - {siteTitle}</title>
      <meta name="description" content={description} />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={description} />
    </Helmet>
    <h1>
      <span className="caption">{subsubsection}</span>
      {longTitle}
    </h1>
    <div style={{marginTop: "-2em"}}>
      <p className="govuk-caption-m" style={{marginBottom: "2em"}}>Also known as: sign out</p>
    </div>

    <p className="govuk-body">Allow users to leave a service at the right time.</p>

    <div className="example example-images" style={{marginTop: "2.5em", marginBottom: "2.5em"}}>
      <div className="govuk-grid-row">
        <div className="govuk-grid-column-one-half">
          <span className="govuk-heading-m">Signing out from the header</span>
          <img src={applyLeaveHeader} alt="Examples of the option to sign out from the header and inline." className="image-examples" />
        </div>
        <div className="govuk-grid-column-one-half">
          <span className="govuk-heading-m">Leaving a service inline</span>
          <img src={applyLeaveInline} alt="Examples of the option to sign out from the header and inline." className="image-examples" />
        </div>
      </div>
    </div>

    <h2 className="govuk-heading-l">Signing out from the header</h2>
    <p>This pattern is more likely to be used on multi-use and caseworking services.
      Signing out of a service is best practice - for example, for internal services where
      users share a workspace.</p>

    <p className="govuk-body">This pattern is used by:</p>
    <ul className="govuk-list govuk-list--bullet">
      <li>Entity search</li>
      <li>Booking returns and movement</li>
    </ul>

    <h2 className="govuk-heading-l">Leaving a service inline</h2>
    <p>This pattern is more likely to be used when a user is working from a public
      space and is inputting sensitive data. </p>
    <p>You should do research to find out at what point a user will need to leave
      your service. An option should be provided with a persistent link through as well
      as the end of the service.</p>

    <p className="govuk-body">This pattern is used by:</p>
    <ul className="govuk-list govuk-list--bullet">
      <li>Apply for the EU settlement scheme</li>
      <li>Update your EU settlement scheme details</li>
      <li>Employer checking service</li>
    </ul>

    <h2 className="govuk-heading-l">How it works</h2>
    <p>For public-facing services it may be better to describe it as leaving a service
      rather then signing out. Users might not feel they have signed in to a service.</p>
    <p>Only give users the option to leave mid-service if they can save progress and
      carry on with the service at another time.</p>
    <p>After leaving the service, take users to a confirmation page that includes:</p>
    <ul className="govuk-list govuk-list--bullet">
      <li>a confirmation that the sign out or leaving a service has been successful</li>
      <li>the option to sign back or return to the service again</li>
    </ul>

    <h2 className="govuk-heading-l">Accessibility</h2>
    <p>If your service uses this pattern, let us know of any insights you have on
      accessibility considerations.</p>

    <h2 className="govuk-heading-l">Research</h2>

    <p>Users are confident in using a 'leave the service' button at the end of a transaction.
      Users mention they want to make sure they leave a service securely.</p>

    <h2 className="govuk-heading-l">Help us improve this pattern</h2>
    <p>This pattern needs improving. We need evidence about:</p>
    <ul>
      <li>how to write for this pattern</li>
    </ul>

    <p className="govuk-body">To contribute, add your thoughts and research findings to our <A href="https://github.com/UKHomeOffice/design-system/discussions/482">GitHub discussion</A>, or follow our <A href="/contribute">contribute guidance</A>.</p>
  </SubsectionWrap>
);

export default Page;

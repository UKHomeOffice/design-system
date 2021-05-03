import { FC, Fragment, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A, NavigationMenu } from '@not-govuk/components';

const applyAuthenticatePersonal = require('../../../../assets/images/patterns/authenticate-personal.svg').default;
const applyAuthenticateReference = require('../../../../assets/images/patterns/authenticate-reference.svg').default;
const applyAuthenticateTwoFa = require('../../../../assets/images/patterns/authenticate-2fa.svg').default;

const Page: FC<PageProps> = ({ location }) => (
<div className="govuk-grid-row">
  <Helmet>
    <title>Access a service - Home Office Design System</title>
    <meta name="og:article:section" content="Patterns" />
  </Helmet>

    <div className="govuk-grid-column-one-quarter">
      <NavigationMenu items={[

        {
          href: '/patterns/access-a-service',
          text: 'Access a service'
        },
        {
          href: '/patterns/add-multiple-things',
          text: 'Add multiple things'
        },
        {
          href: '/patterns/find-information-on-document',
          text: 'Find information on a document'
        },
        {
          href: '/patterns/get-more-details',
          text: 'Get more details'
        },
        {
          href: '/patterns/leave-a-service',
          text: 'Leave a service'
        },
        {
          href: '/patterns/stop-a-service-timing-out',
          text: 'Stop a service timing out'
        }
      ]} />
    </div>

    <div className="govuk-grid-column-three-quarters">
      <span className="govuk-caption-xl">Help users to</span>
      <h1 className="heading-section">Access a service</h1>
      <div style={{marginTop: "-2em"}}>
      <p className="govuk-caption-m" style={{marginBottom: "2em"}}>Also known as: authentication</p>
      </div>

      <p className="govuk-body">Let users access a service in a secure way by authenticating themselves.</p>

      <h2 className="govuk-heading-l">When to use this pattern</h2>
      <p>Most one-time services won't need to authenticate their users. When a service does need to verify
      a user’s identity, it needs to balance ease of access with keeping a service and its user data secure.
      You should think about this early on when designing your service.</p>

      <h2 className="govuk-heading-l">Access a service with identity documents</h2>
      <p>Follow this pattern if you are helping users to access a service by authenticating them with an
      identity document. It could be:</p>
      <ul className="govuk-list govuk-list--bullet">
        <li>the same document they’ve used to apply previously</li>
        <li>the document your service has on record for them</li>
        <li>the document that’s attached to their account</li>
      </ul>
      <div className="example example-images confirmation" style={{marginBottom: "2em"}}>
        <img src={applyAuthenticatePersonal} className="image-examples" alt="An example of a service verifying the user with passport details and date of birth" />
      </div>

      <h2 className="govuk-heading-l">Access a service with security codes</h2>
      <p>You can use security codes or two-factor authentication (often shortened to 2FA) to
      verify a user's identity to let them access a service.</p>
      <p>You can use this method of authentication when a service stores user data and allows
      users to access it. Two-factor helps protect the user and the service.</p>
      <p>There are three types of two-factor authentication:</p>
      <ul className="govuk-list govuk-list--bullet">
        <li>something a user knows (password or pin)</li>
        <li>something a user has (phone or fob)</li>
        <li>a biometric (fingerprint or voice)</li>
      </ul>
      <div className="example example-images confirmation" style={{marginBottom: "2em"}}>
        <img src={applyAuthenticateTwoFa} className="image-examples" alt="An example of a service verifying the user with two-factor authentication" />
      </div>

      <h3 className="govuk-heading-m">Services using these patterns</h3>
      <ul className="govuk-list govuk-list--bullet">
        <li>Access UK</li>
        <li>Apply for the EU settlement scheme</li>
        <li>Employer checking service</li>
      </ul>

      <h2 className="govuk-heading-l">Access a service with reference numbers</h2>
      <p>A reference number is a simple way to let users access a service. For example,
      when a user saves progress and needs to return to complete a service.</p>
      <div className="example example-images confirmation" style={{marginBottom: "2em"}}>
        <img src={applyAuthenticateReference} className="image-examples" alt="An example of a service verifying the user with reference number" />
      </div>

      <h3 className="govuk-heading-m">Services using this pattern</h3>
      <ul className="govuk-list govuk-list--bullet">
        <li>Passport renewals</li>
      </ul>

      <h2 className="govuk-heading-l">Research</h2>
      <p>More research is needed. If your service uses this pattern, get in touch to
      share your user research findings.</p>

      <h2 className="govuk-heading-l">Accessibility</h2>
      <p>If your service uses this pattern, let us know of any insights you have on
      accessibility considerations.</p>

      <div className="contact-us">
        <h2 className="govuk-heading-m">Get in touch</h2>
        <p>If you’ve got a question or suggestion share it on the Slack channel
        #ho-design-system, on <A href="https://github.com/UKHomeOffice/design-system">GitHub</A> or
        email <A href="mailto:design@digital.homeoffice.gov.uk">design@digital.homeoffice.gov.uk</A>.</p>
      </div>

    </div>
</div>


);

export default Page;
export const title = 'Access a service';

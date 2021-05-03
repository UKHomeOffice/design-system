import { FC, Fragment, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A, NavigationMenu } from '@not-govuk/components';

const applyModalWindow = require('../../../../assets/images/patterns/timeout.svg').default;

const Page: FC<PageProps> = ({ location }) => (
<div className="govuk-grid-row">
  <Helmet>
    <title>Stop a service timing out - Home Office Design System</title>
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
      <h1 className="heading-section">Stop a service timing out</h1>
      <div style={{marginTop: "-2em"}}>
      <p className="govuk-caption-m" style={{marginBottom: "2em"}}>Also known as: modal window</p>
      </div>

      <p className="govuk-body">Creating focus on a single interaction.</p>

      <div className="example example-images confirmation" style={{marginBottom: "2em"}}>
        <img src={applyModalWindow} className="image-examples" alt="An example of a modal window warning the service will time out" />
      </div>

      <h2 className="govuk-heading-l">When to use this pattern</h2>
      <p>Modals should be avoided in most cases. They are hard to make accessible and do not
      work well in mobile views.</p>
      <p>Adding content to a new page instead of showing it in a modal should be the default
      approach.</p>
      <p>Modals can be useful when you need to draw a user's attention to something, for example
      timeout warnings. Please discuss with the wider community or email <A href="mailto:design@digital.homeoffice.gov.uk">design@digital.homeoffice.gov.uk</A> before
      using this pattern.</p>

      <h2 className="govuk-heading-l">How it works</h2>
      <p>If the modal is user-triggered, the content that opens the modal window (for example,
        a link or button) should explain to the user what will happen.</p>
      <p>A modal should:</p>
      <ul className="govuk-list govuk-list--bullet">
        <li>focus on a single task</li>
        <li>include a heading</li>
        <li>be accessible</li>
      </ul>

      <h2 className="govuk-heading-l">Services using this pattern</h2>
      <ul className="govuk-list govuk-list--bullet">
        <li>Employer checking service</li>
        <li>Passport renewals</li>
      </ul>

      <h2 className="govuk-heading-l">Research</h2>
      <p className="govuk-body">More research is needed. If your service uses this pattern,
      get in touch to share your user research findings.</p>

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
export const title = 'Stop a service timing out';

import { FC, Fragment, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A, NavigationMenu } from '@not-govuk/components';

const applyAddAnother = require('../../../../assets/images/patterns/add-another.svg').default;

const Page: FC<PageProps> = ({ location }) => (
<div className="govuk-grid-row">
  <Helmet>
    <title>Add multiple things - Home Office Design System</title>
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
      <h1 className="heading-section">Add multiple things</h1>
      <div style={{marginTop: "-2em"}}>
      <p className="govuk-caption-m" style={{marginBottom: "2em"}}>Also known as: add another</p>
      </div>

      <p className="govuk-body">An interaction that allows a user to add multiple
      items of the same thing, check and add more if needed.</p>

      <div className="example example-images confirmation" style={{marginBottom: "2em"}}>
        <img src={applyAddAnother} className="image-examples" alt="An example of an interaction to add multiple addresses" />
      </div>

      <h2 className="govuk-heading-l">When to use this pattern</h2>
      <p>This interaction allows a user to add single or multiple items, check they are correct
      and provide an option to add more. This pattern can be used to add people to an application,
      add items to a list or upload files.</p>
      <p>Follow this pattern:</p>
      <ul className="govuk-list govuk-list--bullet">
        <li>to help confirm an action</li>
        <li>to allow the user to change their minds</li>
        <li>when the action is not easily reversible</li>
        <li>when the completion immediately starts another process</li>
      </ul>

      <h2 className="govuk-heading-l">How it works</h2>
      <p>When adding multiple items of the same thing, the pattern should:</p>
      <ul className="govuk-list govuk-list--bullet">
        <li>remember previous choices</li>
        <li>give clear guidance on the flexibility of choices</li>
      </ul>

      <h2 className="govuk-heading-l">Services using this pattern</h2>
      <ul className="govuk-list govuk-list--bullet">
        <li>Firearms licensing</li>
        <li>Refugee integration loan</li>
      </ul>

      <h2 className="govuk-heading-l">Research</h2>
      <p className="govuk-body">More research is needed. If your service uses this
      pattern, get in touch to share your user research findings.</p>

      <h2 className="govuk-heading-l">Accessibility</h2>
      <p>If your service uses this pattern, let us know of any insights you have
      on accessibility considerations.</p>

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
export const title = 'Add multiple things';

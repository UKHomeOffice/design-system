import { FC, Fragment, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A, NavigationMenu } from '@not-govuk/components';

const applyImageInline = require('../../../../assets/images/patterns/image-guidance-inline.svg').default;
const applyImageRight = require('../../../../assets/images/patterns/image-guidance-right.svg').default;

const Page: FC<PageProps> = ({ location }) => (
<div className="govuk-grid-row">
  <Helmet>
    <title>Find information on a document - Home Office Design System</title>
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
      <h1 className="heading-section">Find information on a document</h1>
      <div style={{marginTop: "-2em"}}>
      <p className="govuk-caption-m" style={{marginBottom: "2em"}}>Also known as: guidance images</p>
      </div>

      <p className="govuk-body">Using guidance images can help users to understand a complex
      message, show a user how to perform an action or guide a user to complete a task.</p>

      <div className="example example-images" style={{marginTop: "2.5em", marginBottom: "2.5em"}}>
        <div className="govuk-grid-row">
        <div className="govuk-grid-column-one-half">
          <span className="govuk-heading-m">Inline guidance image</span>
          <img src={applyImageInline} alt="An example of an illustrated image of a biometric residence permit card in a service." className="image-examples" />
        </div>
          <div className="govuk-grid-column-one-half">
            <span className="govuk-heading-m">Right-aligned guidance image</span>
            <img src={applyImageRight} alt="An example of an illustrated image of where to find a reference number on a letter set on the right side of the page." className="image-examples" />
          </div>
        </div>
      </div>

      <h2 className="govuk-heading-l">When to use this pattern</h2>
      <p>Only use guidance images to enhance the information being conveyed, when research
      indicates a real user need. Used correctly, guidance images can help users understand:</p>
      <ul className="govuk-list govuk-list--bullet">
        <li>complex guidance when completing a task</li>
        <li>how to perform an action</li>
        <li>what information you’re asking from them</li>
        <li>where to find specific contextual information, such as a reference number
        on a document or the relevant side of an identity document</li>
      </ul>

      <h2 className="govuk-heading-l">When not to use this pattern</h2>
      <p>Do not use guidance images:</p>
      <ul className="govuk-list govuk-list--bullet">
        <li>as decoration</li>
        <li>when there is no real user need</li>
      </ul>

      <h2 className="govuk-heading-l">How it works</h2>
      <p>If the image represents something physical, such as a document, you should use
      the aspect ratio of that object. Follow our guidance on the use of <A href="/styles/images">images</A>.</p>
      <p>The examples above have been used in public-facing services.</p>

      <h2 className="govuk-heading-l">Services using this pattern</h2>
        <ul className="govuk-list govuk-list--bullet">
          <li>EU settlement account recovery</li>
          <li>Generic identity verification</li>
          <li>Update your EU settlement scheme details</li>
          <li>Refugee integration loan</li>
          <li>Registered traveller</li>
          <li>Passport renewals</li>
          </ul>

      <h2 className="govuk-heading-l">Research</h2>
      <p className="govuk-body">Research has shown that guidance images can help
      to guide a user through a sequence of steps and clarify what information is
      required from them. It has been shown to work well when representing something
      physical, such as a letter or an ID document, to help point users to a specific
      area of it.</p>

      <h2 className="govuk-heading-l">Accessibility</h2>
      <p>When using an image as guidance, remember to include alternative text
      (alt text). We recommend following the guidance on the use of alt text in
      the <A href="https://design-system.service.gov.uk/styles/images/">GOV.UK
      Design System</A>.</p>

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
export const title = 'Find information on a document';

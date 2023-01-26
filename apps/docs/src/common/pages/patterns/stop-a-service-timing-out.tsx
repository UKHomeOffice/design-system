import { FC, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A } from '@not-govuk/components';
import { menu } from '../patterns';

export const title = 'Stop a service timing out';
const description = 'How to help users to stop a service from timing out';
const section = 'Patterns';
const subsection = 'Help users to';

const applyModalWindow = require('../../../../assets/images/patterns/timeout.svg');

const Page: FC<PageProps> = ({ location }) => (
<div className="govuk-grid-row">
  <Helmet>
    <title>{title} - Home Office Design System</title>
    <meta name="description" content={description} />
    <meta name="og:title" content={title} />
    <meta name="og:description" content={description} />
    <meta name="og:article:section" content={section} />
  </Helmet>

    <div className="govuk-grid-column-one-quarter">
      {menu}
    </div>

    <div className="govuk-grid-column-three-quarters">
      <h1>
        <span className="caption">{subsection}</span>
        {title}
      </h1>
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

      <h2 className="govuk-heading-l">Accessibility</h2>
      <p>When a time limit, like a session timeout, is set ensure a user is informed, especially if this may result in a loss of data. See the <A href="/accessibility/timeouts">timeouts guidance</A> for more information.</p>
      <p>If your service uses this pattern, let us know of any insights you have on accessibility considerations.</p>

      <h2 className="govuk-heading-l">Research</h2>
      <p className="govuk-body">This pattern is used by:</p>
      <ul className="govuk-list govuk-list--bullet">
        <li>Employer checking service</li>
        <li>Passport renewals</li>
      </ul>
      <p className="govuk-body">More research is needed. If your service uses this pattern,
      get in touch to share your user research findings.</p>

      <h2 className="govuk-heading-l">Help us improve this pattern</h2>
      <p>This pattern needs improving. We need evidence about:</p>
      <ul>
        <li>how to write for this pattern</li>
      </ul>

      <p className="govuk-body">To contribute, add your thoughts and research findings to our <A href="https://github.com/UKHomeOffice/design-system/discussions/383">GitHub discussion</A>, or follow our <A href="/contribute">contribute guidance</A>.</p>

    </div>
</div>


);

export default Page;

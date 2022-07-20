import { FC, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A } from '@not-govuk/components';
import { menu } from '../patterns';

export const title = 'Get more details';
const description = 'How to help users to get more details on something';
const section = 'Patterns';
const subsection = 'Help users to';

const applyContextualHelp = require('../../../../assets/images/patterns/contextual-help.svg').default;

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
      <p className="govuk-caption-m" style={{marginBottom: "2em"}}>Also known as: contextual help</p>
      </div>

      <p className="govuk-body">Small overlays containing help content for complex interactions.</p>

      <div className="example example-images confirmation" style={{marginBottom: "2em"}}>
        <img src={applyContextualHelp} className="image-examples" alt="An example of an interaction that shows contextual help" />
      </div>

      <h2 className="govuk-heading-l">When to use this pattern</h2>
      <p>Only use contextual help to explain things like business processes. It shouldn't be relied
      upon to solve design problems - services should always be simple and intuitive.
      See the <A href="https://www.gov.uk/service-manual/service-standard/point-4-make-the-service-simple-to-use">GOV.UK Service Standard</A>.
      Contextual help is more suited to complex internal services.</p>

      <h2 className="govuk-heading-l">How it works</h2>
      <p>Help should be easy to close, move and minimise until the user needs it.</p>
      <p>If contextual help doesn’t answer a user’s question, links to more comprehensive
      help should be easy to find. GDS has <A href="https://www.gov.uk/service-manual/design/designing-good-questions">guidance for
      help content</A> .</p>

      <h2 className="govuk-heading-l">Services using this pattern</h2>
      <ul className="govuk-list govuk-list--bullet">
        <li>Digital applications platform</li>
        <li>Entity search</li>
      </ul>

      <h2 className="govuk-heading-l">Research</h2>
      <p className="govuk-body">Users find side-by-side guidance more helpful and easier
      to use. Small overlay windows offer the smallest interference with the user flow.
      This is a good <A href="https://www.nngroup.com/articles/pop-up-adaptive-help/">article on
      contextual help</A>  from Nielsen Norman.</p>

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

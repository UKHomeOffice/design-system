import { FC, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A, NavigationMenu } from '@not-govuk/components';

 const applySearchNarrow = require('../../../../assets/images/patterns/search-narrow.svg').default;
 const applySearchWide= require('../../../../assets/images/patterns/search-wide.svg').default;

export const title = 'Search for something';
const description = 'How to help users to stop a service from timing out';
const section = 'Patterns';
const subsection = 'Help users to';

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
      <span className="govuk-caption-m" style={{ marginBottom: "1em" }}>Help users to</span>
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
      <h1>
        <span className="caption">{subsection}</span>
        {title}
      </h1>
      <div style={{ marginTop: "-2em" }}>
        <p className="govuk-caption-m" style={{ marginBottom: "2em" }}>Also known as: search</p>
      </div>

      <p className="govuk-body">Searching for records in a system.</p>

      

      <h2 className="govuk-heading-l">When to use this pattern</h2>
      <p>Use this pattern to help users find a person, task, place or another type of record in your system, when navigation alone is not a practical option.</p>

      <h2 className='govuk-heading-l'>When not to use this pattern</h2>
      <p>Do not use this pattern if users only have a simple list to manage. Try and instead allow filtering, or make automatic suggestions and test this with your users.

      </p>

      <p>Make sure you understand who your users are and what they are trying to achieve before coming up with any design solutions.</p>


      <h2 className="govuk-heading-l">Narrow search</h2>

      <p>If your users normally have a single key piece of information to hand to search with, such as a reference number or identifier, allow them to search by that as it will allow for a quicker match. When an exact match is found, surface the match result the same way you would normally (rather than going directing to the record).</p>

      <div className="example example-images confirmation" style={{marginBottom: "2em"}}>
        <img src={applySearchNarrow} className="image-examples" alt="An example of a service allowing search with narrow parameters" />
      </div>

      <h3 className="govuk-heading-m">Research on this pattern</h3>
      <p>Multiple Home Office services use wide search. If you have evidence this also works for your users, <a href="https://github.com/UKHomeOffice/design-system/issues/322">please contribute</a></p>


      <h2 className="govuk-heading-l">Wide search</h2>
      <p>Users may not have a lot of information to hand before starting their search. If this is the case, you should make your search parameters quite wide. For example, if a user is searching for a person, allow them to enter both name and DOB, as well as address and postcode. If this brings up too many results, allow filtering.

      </p>
      <div className="example example-images confirmation" style={{marginBottom: "2em"}}>
        <img src={applySearchWide} className="image-examples" alt="An example of a service allowing search with wide parameters" />
      </div>

      <p>Your users may have different needs, for example:</p>

      <ul className="govuk-list govuk-list--bullet">
        <li>analysts: need a range of search options presented in order to obtain different data types. May also need to add their own search parameters (you should research what these are)</li>
        <li>caseworkers: need context-specific options in order to find the right results</li>
      </ul>
      <p>When presenting multiple options, ensure all entries that are not required are marked as part of the label as (optional).</p>

      <p>Speak with technical members of your team to understand constraints in relation to your database, for instance:</p>

      <ul className="govuk-list govuk-list--bullet">
        <li>what users can search for</li>
        <li>how the data that is brought back will be presented</li>
        <li>how many potential results may be brought back </li>

        <li>response time between searching and the time it will take to surface the results</li>
      </ul>

      <h3 className="govuk-heading-m">Research on this pattern</h3>
      <p>Multiple Home Office services use wide search. If you have evidence this also works for your users, <a href="https://github.com/UKHomeOffice/design-system/issues/322">please contribute</a></p>

      




      <h2 className="govuk-heading-l">Accessibility considerations</h2>
      <p>Ensure you test your search with users with access needs. </p>

      <h3 className="govuk-heading-m">Keyboard navigation</h3>

      <p>Tabbing in a logical way to the interactive elements, being able to see the focus, and being able to interact with it. If not using native HTML elements and creating something custom refer to <a href="https://www.w3.org/TR/wai-aria-practices/wai-aria-practices">https://www.w3.org/TR/wai-aria-practices/wai-aria-practices</a> for expected interaction.</p>

      <h3 className="govuk-heading-l">Screen readers</h3>
      <p>You should make sure</p>
      <ul className="govuk-list govuk-list--bullet">
        <li>fields are labelled programmatically</li>
        <li>all interactive elements have a name, role and value, see WAI-ARIA Authoring Practices 1.1 for expected values</li>
      </ul>


      <h3 className="govuk-heading-l">General</h3>
      <p>You should make sure</p>

      <ul className="govuk-list govuk-list--bullet">
        <li>when presenting data in tables, that this is marked up correctly</li>
        <li>colour is not used as the only way to assign meaning to results</li>
        <li>users can resize text up to 200% and scale up to 400% (tables excluded)</li>
        <li>users can change font spacing. All of these especially important if there is a lot of data</li>
        <li>users can turn off, adjust or extend timeouts</li>
        <li>you do not change results based on filter checkbox selection alone (for example you could provide a submit button)</li>
        <li>if the search generates errors, that screen reader users know what happened and how to fix it</li>
      </ul>

      <div className="contact-us">
        <h2 className="govuk-heading-m">Get in touch</h2>
        <p>If you've got a question or suggestion share it on the Slack channel
          #ho-design-system, on <A href="https://github.com/UKHomeOffice/design-system">GitHub</A> or
          email <a href="mailto:design@digital.homeoffice.gov.uk">design@digital.homeoffice.gov.uk</a>.</p>
      </div>

    </div>
  </div>


);

export default Page;

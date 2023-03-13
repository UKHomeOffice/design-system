import { FC, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A } from '@not-govuk/components';
import { menu } from '../patterns';

export const title = 'Search for something';
const description = 'How to help users to search for something';
const section = 'Patterns';
const subsection = 'Help users to';

const applySearchNarrow = require('../../../../assets/images/patterns/search-narrow.svg');
const applySearchWide= require('../../../../assets/images/patterns/search-wide.svg');

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

      <h2 className='govuk-heading-l'>How it works</h2>
      <h3 className="govuk-heading-m">Narrow search</h3>
      <p>If your users normally have a single key piece of information to hand to search with, such as a reference number or identifier, allow them to search by that as it will allow for a quick match. When an exact match is found, surface the match result on the screen (rather than going directing to the record).</p>

      <div className="example example-images confirmation" style={{marginBottom: "2em"}}>
        <img src={applySearchNarrow} className="image-examples" alt="An example of a service allowing search with narrow parameters" />
      </div>


      <h3 className="govuk-heading-m">Wide search</h3>
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

      <h3 className="govuk-heading-m">Highlight search results</h3>
      <p>You may wish to <a href="/components?name=Highlight">highlight</a> to users why the search results match the search criteria.</p>
      <p>You should:</p>
      <ul className="govuk-list govuk-list--bullet">
        <li>consider other colours on the page, does the highlight conflict with them</li>
        <li>think about which parts of the search results should be highlighted, do not overuse the highlight</li>
        <li>use bold as well as colour to highlight the differences</li>
      </ul>

      <h2 className="govuk-heading-l">Accessibility</h2>
      <p>It must be possible for someone using a keyboard to complete all tasks in a service. See the <A href="/accessibility/keyboard">keyboard guidance</A> for more information.</p>
      <p>All form fields have an associated visible label. Where this isn’t possible a non-visible label must be present. See the <A href="/accessibility/forms">forms guidance</A> for more information.</p>
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

      <p>If your service uses this pattern, let us know of any insights you have on accessibility considerations.</p>

      <h2 className="govuk-heading-l">Research</h2>
      <p className="govuk-body">We conducted usability testing on highlighting search results with 3 external participants with access needs, with varying severities of vision loss. Participants used screen readers and zoom function whilst participating. High level findings included:</p>
      <ul className="govuk-list govuk-list--bullet">
        <li>highlight colours conflicted with other coloured tags in the results causing disorientation</li>
        <li>focus was drawn to the other colours on the screen rather than the highlight</li>
        <li>participants took time to understand what the highlight was for</li>
      </ul>

      <p className="govuk-body">More research is needed. If your service uses this
      pattern, share your user research findings.</p>

      <h2 className="govuk-heading-l">Help us improve this pattern</h2>
      <p>This pattern needs improving. We need evidence about:</p>
      <ul>
        <li>any research findings</li>
        <li>how to write for this pattern</li>
      </ul>

      <p className="govuk-body">To contribute, add your thoughts and research findings to our <A href="https://github.com/UKHomeOffice/design-system/discussions/484">GitHub discussion</A>, or follow our <A href="/contribute">contribute guidance</A>.</p>

    </div>
  </div>


);

export default Page;

import { FC, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A, NavigationMenu } from '@not-govuk/components';
import { Table } from '@not-govuk/components';

const tables = require('../../../../assets/images/accessibility/tables.png').default;

export const title = 'Tables';
const description = 'Accessibility guidance for tables content';
export const section = 'Accessibility';

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
    <span className="govuk-caption-m" style={{marginBottom: "1em"}}>Page structure</span>
      <NavigationMenu items={[
        {
          href: '/accessibility/links',
          text: 'Links'
        },
        {
          href: '/accessibility/tables',
          text: 'Tables'
        },
        {
          href: '/accessibility/headings',
          text: 'Headings'
        }
      ]} />
      <span className="govuk-caption-m" style={{marginBottom: "1em"}}>Interactivity</span>
      <NavigationMenu items={[
        {
          href: '/accessibility/error-messages',
          text: 'Error messages'
        },
        {
          href: '/accessibility/keyboard',
          text: 'Keyboard basics'
        },
        {
          href: '/accessibility/keyboard/tab-navigation',
          text: '- Tab navigation'
        },
        {
          href: '/accessibility/keyboard/focus',
          text: '- Focus'
        },
        {
          href: '/accessibility/keyboard/skip-to-content',
          text: '- Skip to content links'
        },
        {
          href: '/accessibility/keyboard/character-key-shortcuts',
          text: '- Character key shortcuts'
        },
        {
          href: '/accessibility/keyboard/pointer-gestures',
          text: '- Pointer gestures'
        },
        {
          href: '/accessibility/timeouts',
          text: 'Timeouts'
        }
      ]} />
      <span className="govuk-caption-m" style={{marginBottom: "1em"}}>Written content</span>
        <NavigationMenu items={[
          {
            href: '/accessibility/inclusive-language',
            text: 'Inclusive language'
          },
        ]} />
      <span className="govuk-caption-m" style={{marginBottom: "1em"}}>Providing alternatives</span>
        <NavigationMenu items={[
          {
            href: '/accessibility/audio-and-video',
            text: 'Audio and video'
          },
          {
            href: '/accessibility/images',
            text: 'Images'
          }
        ]} />
        <span className="govuk-caption-m" style={{marginBottom: "1em"}}>Resources</span>
          <NavigationMenu items={[
            {
              href: '/accessibility/resources',
              text: 'Guidance, tools and further reading'
            }
          ]} />
    </div>
    <div className="govuk-grid-column-three-quarters">
      <h1>
        <span className="caption">Accessibility</span>
        Tables
      </h1>
      <p>Tables are used to present data in rows and columns. It allows a user to make quick connections between different data.</p>

      <div className="govuk-grid-row">
      <div className="example" style={{marginBottom: "2em"}}>
        <Table
          caption="Dates and amounts"
          keys={["date", "amount"]}
          headings={{
            amount: "Amount",
            date: "Date",
          }}
          data={[
            {
              amount: "£109.80 per week",
              date: "First 6 weeks",
            },
            {
              amount: "£109.80 per week",
              date: "Next 33 weeks",
            },
            {
              amount: "£4,282.20",
              date: "Total estimated pay",
            },
          ]}
        />
      </div>
      </div>

      <p>You must create tables in a way that assistive technology can understand. This means making tables available to screen reader, screen magnification and speech-to-text software users.</p>

      <p>Where possible, you should use semantic HTML to indicate different table cells.</p>

      <p>Tables should not be used to position elements on a web page - for this you should use other CSS layout techniques.</p>


<br />

      <h2>Helping everyone</h2>
      <p>All users will benefit from well-structured and simple tables.</p>

      <h2>The basics</h2>
        <p>Do:</p>
        <ul>
        <li>Present tabular data using semantic HTML markup</li>
        </ul>

        <p>Do not:</p>
        <ul>
        <li>use tables to position text or lay out elements on a page</li>
        <li>create overly complex tables or nest tables within each other</li>
        <li>use <A href="https://www.w3.org/TR/wai-aria-practices-1.1/#table">ARIA roles</A> to replicate the structure of a table unless absolutely necessary</li>
        </ul>

      <table className="govuk-table">
        <caption className="govuk-table__caption govuk-table__caption--l">Examples of users with access needs</caption>
        <thead className="govuk-table__head">
          <tr className="govuk-table__row">
            <th scope="col" className="govuk-table__header">User</th>
            <th scope="col" className="govuk-table__header">Access need</th>
            <th scope="col" className="govuk-table__header">May find helpful</th>
          </tr>
        </thead>
        <tbody className="govuk-table__body">
        <tr className="govuk-table__row">
          <td className="govuk-table__cell">Blind</td>
          <td className="govuk-table__cell">Uses screen reader to understand the structure of the table</td>
          <td className="govuk-table__cell">Correctly marked up table cells</td>
        </tr>

        <tr className="govuk-table__row">
        <td className="govuk-table__cell">Blind or partially sighted</td>
        <td className="govuk-table__cell">Using custom style sheets to adjust how a table looks</td>
        <td className="govuk-table__cell">Correctly marked up table cells that are responsive</td>
        </tr>

        <tr className="govuk-table__row">
        <td className="govuk-table__cell">Cognitive impairment</td>
        <td className="govuk-table__cell">Understanding table layout – associations between data</td>
        <td className="govuk-table__cell">Less complex tables</td>
        </tr>

        </tbody>
      </table>

<h2>Creating good tables</h2>

<p>A correctly implemented table with structural markup means that screen readers will correctly read out the content of cells and users will be able to apply alternative rendering to suit their needs. You should use the tables component in the GOV.UK design system for simple tables.</p>

<p>You should consider whether the information you’re presenting needs a table or whether a different presentation method would be more suitable.</p>

<h3>Table structure</h3>

<p>Tabular data needs to be presented using proper HTML markup.</p>

<ul>
<li>Tables should be implemented using <code>&lt;table&gt;</code> </li>
<li>Table rows should be marked up with <code>&lt;tr&gt;</code>, header cells should be marked up with <code>&lt;th&gt;</code> and data cells should be marked up with <code>&lt;td&gt;</code> </li>
<li>For <A href="https://www.w3.org/WAI/tutorials/tables/two-headers/">tables with headers in the top row and first column</A> use the <code>scope</code> attribute to denote the direction</li>
</ul>

<p>It is worth noting that <code>&lt;thead&gt;</code>, <code>&lt;tfoot&gt;</code>, and <code>&lt;tbody&gt;</code> are not semantic HTML and do not make the table more accessible - they are only used for styling.</p>

<h3>Table caption</h3>

<p>Tables should include a <code>&lt;caption&gt;</code> element which summarises the overall purpose of the table. This is particularly useful for people navigating from table to table. </p>

<p>The <code>&lt;caption&gt;</code> element should be nested within the <code>&lt;table&gt;</code> element, before any other html elements. </p>

<p>You should not use <code>&lt;summary&gt;</code> as this is no longer recommended in HTML5.</p>


<h3>Complex tables</h3>

<p>You should avoid creating complex tables with multiple rows or columns of headings. Creating complex tables impacts navigation and understanding for all users.</p>

<p>For more complex tables, use the <code>scope</code> attribute in the <code>&lt;th&gt;</code> element to associate each header cell with the relevant data cells. The <code>scope</code> attribute can have a number of values, including <code>row</code> and <code>col</code>, and <code>rowgroup</code> and <code>colgroup</code> for header cells spanning multiple rows.</p>

<p>You can also associate <code>&lt;th&gt;</code> elements by assigning an <code>id</code> attribute and referencing this using a headers attribute in a <code>&lt;td&gt;</code> table cell.</p>

<p>For more guidance on more complex tables, such as tables with irregular headers and multi-level headers, see <A href="https://www.w3.org/WAI/tutorials/tables/">Tables concepts</A>.</p>

<p>If you cannot use semantic tables (for instance, if you're working with a complex, highly custom component), ARIA roles can be used to replicate the structure of a table. However, you should avoid this as it adds complexity. If you need to use ARIA, please see the <A href="https://www.w3.org/TR/wai-aria-practices-1.1/#table">Table Design Pattern in WAI-ARIA Authoring Practices 1.1</A>.</p>

<h3>Table text</h3>

<p>Ensure that text within tables can be resized up to 200% and the text spacing adjusted without it being clipped, truncated or obscured.</p>

<div className="contact-us">
  <h2 className="govuk-heading-m">Get in touch</h2>
  <p>If you’ve got a question or suggestion share it on the Home Office DDaT Slack channel #ask-accessibility or email <A href="mailto:access@digital.homeoffice.gov.uk">access@digital.homeoffice.gov.uk</A>.</p>
</div>

    </div>
  </div>
);

export default Page;

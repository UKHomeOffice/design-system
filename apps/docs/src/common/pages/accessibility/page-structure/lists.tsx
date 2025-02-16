import { FC, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A, NavigationMenu } from '@not-govuk/components';
import config from '../../../config';

import { SubsectionWrap, title as subsection } from './';

const siteTitle = config.title;

export const title = 'Lists';
const longTitle = title;
const description = 'Accessibility guidance for lists content';
export const section = 'Accessibility';

const Page: FC<PageProps> = () => (
  <SubsectionWrap>
    <Helmet>
      <title>{title} - {siteTitle}</title>
      <meta name="description" content={description} />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={description} />
    </Helmet>
    <h1>
      <span className="caption">{subsection}</span>
      {longTitle}
    </h1>
    <p>A list is a cluster of related pieces of information, either unordered or sorted by importance or sequence.  They are a good way to break up and shorten large chunks of information making them easier to read and understand. </p>
    <p>Lists are usually visually distinguished from the main body of the text by indentation and numbers or bullet points. Blind users lack these visual cues, so the coding of lists is important for helping them to navigate. For example, screen reader software will often announce the length of a list so users will know how many items to expect. </p>

    <h2>Helping everyone</h2>
    <p>Clear presentation of lists is helpful to all users. If your list is becoming long or unwieldy, consider whether another format might be more appropriate, for example a table or paragraphs separated by headings.</p>
    <p>Word and other text applications will normally add the correct list formatting automatically but take care when using software that doesn’t have this function. </p>

    <h2>The basics</h2>
    <p>Do:</p>
    <ul>
      <li> create lists using correct HTML markup or list function in text applications  </li>
      <li> use unordered (bulleted) lists as standard, and only use numbers/letters when the order or sequence of list items is important  </li>
      <li> make sure that bullets, or other symbols, used to mark the list, are clearly visible. They need to be large enough and have sufficient contrast with the background  </li>
    </ul>

    <p>Do not:</p>
    <ul>
      <li> create the appearance of a list using bullet points or hyphens without correctly marking it up in HTML or using list function in text applications</li>
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
          <td className="govuk-table__cell">Blind or partially sighted screen reader user </td>
          <td className="govuk-table__cell">To understand structure of the document and navigate to a list using L shortcut </td>
          <td className="govuk-table__cell">Correctly marked up lists </td>
        </tr>

        <tr className="govuk-table__row">
          <td className="govuk-table__cell">Cognitive impairment or dyslexia</td>
          <td className="govuk-table__cell">Text that is easy to decode and understand</td>
          <td className="govuk-table__cell"> Information formatted as a list, rather than items separated by commas within a dense paragraph </td>
        </tr>

      </tbody>
    </table>

    <h2>Creating good lists</h2>


    <p>Implementing a list with structural markup means that screen readers will correctly announce it and read out list items. It also means screen reader users can navigate to the lists easily or skip past them.</p>
    <p>Choose the right type of list for your content – numbered lists should only be used for content where the order or sequence is important. </p>



    <h3>List markup in HTML</h3>


    <p>Lists need to be marked up using correct tags. Use <code>&lt;ol&gt;</code> for numbered lists and <code>&lt;ul&gt;</code> for bulleted lists. Mark each list item with the <code>&lt;li&gt;</code> tag.</p>

    <h3>Definition list markup</h3>

    <p>‘Description’ (or ‘definition’) lists are the sort of list you may see in a glossary, with a list of terms and their definitions, or categories and their examples.</p>
    <p>An example of a definition list:</p>

    <div className="example" style={{ marginBottom: "2em" }}>
      <dl className="govuk-summary-list govuk-summary-list--no-border">
        <div className="govuk-summary-list__row">
          <dt className="govuk-summary-list__key">
            Name
          </dt>
          <dd className="govuk-summary-list__value">
            Sarah Philips
          </dd>
        </div>
        <div className="govuk-summary-list__row">
          <dt className="govuk-summary-list__key">
            Date of birth
          </dt>
          <dd className="govuk-summary-list__value">
            5 January 1978
          </dd>
        </div>
        <div className="govuk-summary-list__row">
          <dt className="govuk-summary-list__key">
            Address
          </dt>
          <dd className="govuk-summary-list__value">
            72 Guild Street<br />London<br />SE23 6FH
          </dd>
        </div>
        <div className="govuk-summary-list__row">
          <dt className="govuk-summary-list__key">
            Contact details
          </dt>
          <dd className="govuk-summary-list__value">
            <p className="govuk-body">07700 900457</p>
            <p className="govuk-body">sarah.phillips@example.com</p>
          </dd>
        </div>
      </dl>

    </div>

    <p>For description lists use a <code>&lt;dl&gt;</code> element. Each term needs to be specified within a <code>&lt;dt&gt;</code> tag and each description with <code>&lt;dd&gt;</code>. </p>
    <p>Screen readers differ in how they announce description lists, so think about how content within list items communicates relationships. Consider the benefits of using this type of list against another format that might be more appropriate, such as a table. </p>

    <h3>Lists in documents</h3>

    <p>Use the list function within your text application to format the list the correctly. Use bullet points, or other symbols, as default and numbers or letters for sequential order.</p>

    <p>If your document template has list styles built in, use those, as they will have the correct list functionality already built in. </p>

    <h2>Get in touch</h2>
    <p>If you’ve got a question or suggestion share it on the UK Home Office Slack channel #ask-accessibility or email <A href="mailto:accessibility@homeoffice.gov.uk">accessibility@homeoffice.gov.uk</A>.</p>
  </SubsectionWrap>
);

export default Page;

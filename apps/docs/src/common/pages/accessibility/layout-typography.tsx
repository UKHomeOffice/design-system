import { FC, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A } from '@not-govuk/components';
import { menu } from '../accessibility'

const layoutImage01 = require('../../../../assets/images/accessibility/landmarks1.png');
const layoutImage02 = require('../../../../assets/images/accessibility/landmarks2.png');

export const title = 'Layout and typography';
const description = 'Accessibility guidance for layout and typography';
export const section = 'Accessibility';

const Page: FC<PageProps> = () => (
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
        <span className="caption">Accessibility</span>
        Layout and typography
      </h1>
      <p>Clear layout and fonts help make web pages and documents more readable. Users with low vision may need to adjust text or screen size, and some users may have a device in a fixed orientation, so it’s important that your design can adapt to these user needs. </p>
<br />

      <h2>Helping everyone</h2>
      <p>Having a clear and readable layout is important to all users, as it helps people find the important information quickly. For users with low or no vision, a well-planned page structure will reflect the reading order and any in-page navigation.</p>
<br />
      <h2>The basics</h2>
        <p>Do:</p>
        <ul>
        <li>make sure your design works with a variety of screen sizes and orientations  </li>
        <li>use clear, consistent layouts with plenty of headings and line breaks </li>
        <li>use large, readable fonts </li>
        <li>align your content to the left margin to make reading easier </li>
        <li>use HTML landmark tags on content blocks</li>
        </ul>
        <p>Do not:</p>
        <ul>
        <li>use italics or ALL CAPS for blocks of text </li>
        <li>leave large areas of empty space on your page</li>
        <li>use absolute units like ‘px’ for font sizes and spacing – use relative units like ‘em’ instead </li>
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
          <td className="govuk-table__cell">Dyslexic </td>
          <td className="govuk-table__cell">Finds large blocks of text and unusual letter shapes harder to read  </td>
          <td className="govuk-table__cell">Break up longer paragraphs with line breaks <br />
          <br />Use clear and readable fonts
          <br /><br />Don’t use italics or ALL CAPS  </td>
        </tr>

        <tr className="govuk-table__row">
        <td className="govuk-table__cell">Low vision</td>
        <td className="govuk-table__cell">May use strong magnification and only see a small part of the page <br /><br />
        May adjust font size or letter spacing </td>
        <td className="govuk-table__cell">Consistent page layouts <br /><br />
        Left-aligned content <br /><br />
        No big empty spaces in between content <br /><br />
        Spacing and font sizes with relative units so that they can be adjusted to a user’s needs</td>
        </tr>

        <tr className="govuk-table__row">
        <td className="govuk-table__cell">Blind</td>
        <td className="govuk-table__cell">Uses a screenreader to navigate around the page  </td>
        <td className="govuk-table__cell">Landmarks coded into the html to help with screenreader navigation</td>
        </tr>

        <tr className="govuk-table__row">
        <td className="govuk-table__cell">Mobility impaired </td>
        <td className="govuk-table__cell">May have their device attached to a wheelchair in a fixed orientation </td>
        <td className="govuk-table__cell">A layout that responds to a device’s orientation and doesn’t force either a portrait or landscape format on the user </td>
        </tr>
        </tbody>
      </table>
<br />
<h2>Accessible typography</h2>

<h3>Fonts</h3>

<p>The Home Office and GOV.UK design systems both use fonts chosen for clarity and readability, so use them if you can. In emails, documents, or third-party products that allow limited customisation, choose a font that is open and clear. Because all users have different needs, there’s no such thing as a fully ‘accessible’ font. </p>
<br />
<h3>Styling</h3>

<p>Don’t use italics, as this text can be difficult for dyslexic users to read. ALL CAPS should be used sparingly for similar reasons, and never used for full paragraphs or blocks of text. Bold text is the best option for emphasis within a paragraph.</p>
<br />
<h3>Reflow and resizing</h3>

<p>Many users will resize their screens, zoom in, or use browser settings to adjust the size and spacing of text. Make sure your service is set up to accommodate this. Relative units such as (em) and &#37; will allow your text to reflow and resize to fit user needs, so use these instead of fixed units such as px. </p>

<p>Make sure your design is flexible enough to still work with larger text (inside buttons or table cells, for example) – users should be able to zoom up to 400% without losing page function.</p><p>Your service must work in both landscape (horizontal) and portrait (vertical) orientations, for users who may not have a choice in which orientation they use. For example, a paraplegic user with a device attached to their wheelchair in a fixed orientation.  </p>

<br />
<h2>Creating accessible layouts</h2>
<p>Make sure your content is presented in a logical reading order, which stays consistent even if the page is resized and the text reflowed. </p>
<br />
<h3>Title and headings</h3>

<p>The page title, which appears in the browser tab, is vital for user navigation, and should always be unique. We recommend you use a format of ‘page – service – site’ for title text, for example ‘Enter your address – Apply for a passport – GOV.UK’.  </p>

<p>Clear headings are important to help users find content within a page – see the <A href="/accessibility/headings">headings guidance</A> for more detail. You can also use <A href="/accessibility/keyboard/skip-to-content">skip links</A> to help keyboard users bypass repeated blocks of content.   </p>

<p>Don’t capitalise every word in a title – it's easier for users to read ‘sentence case’, where only the first letter of the sentence is capitalised</p>
<p>As well as headings, screenreader users can also use extra navigation functions such as landmarks to navigate within a page. </p>

<br />
<h3>Landmarks</h3>
<p>Landmarks are HTML5 elements that break up and label blocks of content by their purpose on the page. They’re often used alongside an aria role to make the structure even clearer, especially for users of older browsers. Screenreader users will often rely on these to jump straight to relevant content, rather than navigating through the entire page.</p>

<p>The most common landmarks are: </p>
  <ul>
    <li>header (for page header content) </li>
    <li>nav (for navigation bars) </li>
    <li>main (for the main content on your page) </li>
    <li>aside (for secondary sidebar content such as related links) </li>
    <li>footer (for links to further info about your site)</li>
  </ul>

<p>An example of how to use landmarks in your page layout:  </p>

<div className="govuk-grid-row">
  <div className="govuk-grid-column-two-thirds">
    <img src={layoutImage01} alt="A sample page layout showing regions for banner, nav, main, aside and footer" className="image-examples" />
  </div>
</div>
<br />
<p>Example of how this appears to a screenreader (from the screenreader Voiceover on Mac) </p>
<div className="govuk-grid-row">
  <div className="govuk-grid-column-two-thirds">
    <img src={layoutImage02} alt="Screenshot of the Voiceover menu showing the landmarks on a page" className="image-examples" />
  </div>
</div>
<br />
<h2>Get in touch</h2>
<p>If you’ve got a question or suggestion share it on the UK Home Office Slack channel #ask-accessibility or email <A href="mailto:accessibility@homeoffice.gov.uk">accessibility@homeoffice.gov.uk</A>.</p>

    </div>
  </div>
);

export default Page;

import { FC, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A, NavigationMenu } from '@not-govuk/components';

const headingImage = require('../../../../assets/images/accessibility/heading-hierarchy.png').default;

export const title = 'Headings';
const description = 'Accessibility guidance for headings';
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
        Headings
      </h1>
      <p>Headings are an important navigation tool for all users.</p>

<br />

      <h2>Helping everyone</h2>
      <p>A logical structure can make your content readable and accessible to everyone. Just as sighted users can scan the page and use headings to find the content they’re looking for, people using assistive tech such as screenreaders can use a similar method to find their way around. So it’s important that the coding of headings matches up with their visual appearance. </p>
      <p>Adding a logical heading structure can also help you think more clearly about your content and what it is trying to say. And clear heading text is useful for everyone.</p>

      <h2>The basics</h2>
        <p>Do the following things to make your heading structure clear and accessible:</p>
        <ul>
        <li>write headings in clear, descriptive language </li>
        <li>stick to one main heading (H1) per page or document</li>
        <li>make sure any subheadings follow a logical sequence</li>
        <li>if it’s intended as a heading, make sure it’s coded as one</li>
        <li>do not use heading styles for non-heading purposes (for example: for emphasis, or for pull-out quotes)</li>
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
          <td className="govuk-table__cell">Blind screenreader user </td>
          <td className="govuk-table__cell">Cannot see the visual appearance of headings to help with navigation </td>
          <td className="govuk-table__cell">Semantically-coded headings that screenreader software can recognise </td>
        </tr>

        <tr className="govuk-table__row">
        <td className="govuk-table__cell">Cognitive impairment </td>
        <td className="govuk-table__cell">CStruggles with pages that have dense, unstructured or a lot of text </td>
        <td className="govuk-table__cell">Clear, descriptive headings in Plain English</td>
        </tr>

        </tbody>
      </table>

<h2>Creating good headings</h2>

<h3>Language</h3>

<p>A good heading describes the content beneath it in simple language. Keep headings short and relevant to the content. </p>

<h3>Structure</h3>

<p>Use headings to split up and structure content into clear sections. Users rely on this structure for navigation so keep it straightforward, and try not to use too many sub-sub-subheadings. Most pages or documents shouldn’t need more than four heading levels unless they are very long or complicated.</p>

<p>Consider your heading structure as a table of contents – this reflects how people use them to find the most relevant content for their needs.  </p>

<p>Many types of assistive technology allow users to navigate with headings in a similar way to a sighted user. They can quickly scan a page by its headings, and jump directly to the content they are looking for. </p>

<h3>Nested headings</h3>

<p>An important aspect of structure is how your headings are ‘nested’. Starting with a “Heading 1” (<code>&lt;h1&gt;</code>) for the main page title, subheadings should sit below this in a sequential order.

Headings are defined by using <code>&lt;h&gt;</code> tags which come in the form: </p>
<ul>
<li>&lt;h1&gt;
  <ul>
    <li>&lt;h2&gt;
      <ul>
        <li>&lt;h3&gt;
          <ul>
            <li>&lt;h4&gt;</li>
          </ul>
        </li>
      </ul>
    </li>
  </ul>
</li>
</ul>

<p>Never skip heading levels – if you need a heading to look different, do this with css styles rather than with the html code. </p>

<p>An example of a nested heading structure: </p>
<img src={headingImage} alt="Headings nested in a sequential hierarchy"  width="50%"/>

<h3>Structure is separate from appearance</h3>

<p>Don’t use heading tags for non-heading purposes. For example, if you need a call-out message in large text but it does not function as a heading, then use styling to achieve this visual effect. </p>

<p>As a rule of thumb: if there is nothing or very little that sits underneath to it, it’s probably not a heading. </p>

<p>Similarly, if part of your content works as a heading (for example, to head up content blocks in the footer, or in a sidebar list of related links) then you must use the correct html code as well as any visual styling. If you don’t, a screen reader will not recognise this as a heading and the user may miss it.</p>

<p>Where sections are broken up with visual design alone, it may be worth adding a screenreader-only heading to help non-visual users navigate these parts of the page. You can do this with a <a href="https://www.a11yproject.com/posts/2013-01-11-how-to-hide-content/%5d">'visually hidden’ style in CSS.</a></p>

<div className="contact-us">
  <h2 className="govuk-heading-m">Get in touch</h2>
  <p>If you’ve got a question or suggestion share it on the Home Office DDaT Slack channel #ask-accessibility or email <A href="mailto:access@digital.homeoffice.gov.uk">access@digital.homeoffice.gov.uk</A>.</p>
</div>

    </div>
  </div>
);

export default Page;

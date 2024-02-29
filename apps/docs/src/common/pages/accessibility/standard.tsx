import { FC, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A } from '@not-govuk/components';
import { menu } from '../accessibility'

export const title = 'Accessibility Standard';
const description = 'Accessibility Standard';
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
      {menu}
    </div>
    <div className="govuk-grid-column-three-quarters">

    <h1>
      <span className="caption">Accessibility</span>
      Accessibility Standard
    </h1>
    <p>As a public body, the Home Office has a legal responsibility to ensure that the digital services and systems we control are accessible to the widest possible group of people.</p>
    <p>To provide consistency for users and product teams, we’ve developed a Home Office Accessibility Standard. This closely aligns with the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA but simplifies and focuses on the areas most likely to present challenges for Home Office users.</p>
  <table>
    <thead className="govuk-table__head">
      <tr className="govuk-table__row">
        <th scope="col" className="govuk-table__header">Version number</th>
        <th scope="col" className="govuk-table__header">Date</th>
        <th scope="col" className="govuk-table__header">Description</th>
      </tr>
    </thead>
    <tbody className="govuk-table__body">
    <tr className="govuk-table__row">
      <td className="govuk-table__cell">1</td>
      <td className="govuk-table__cell">01/11/2020</td>
      <td className="govuk-table__cell">First published version</td>
    </tr>
    <tr className="govuk-table__row">
      <td className="govuk-table__cell">1.1</td>
      <td className="govuk-table__cell">01/08/2021</td>
      <td className="govuk-table__cell">Updated based on peer review by TetraLogical</td>
    </tr>
    <tr className="govuk-table__row">
      <td className="govuk-table__cell">1.2</td>
      <td className="govuk-table__cell">23/02/2024</td>
      <td className="govuk-table__cell">Updated to include WCAG 2.2 success criteria</td>
    </tr>
    </tbody>
  </table>

  <h2>Index</h2>
  <h3>Perceivable</h3>

  <table className="govuk-table">

    <thead className="govuk-table__head">
      <tr className="govuk-table__row">
        <th scope="col" className="govuk-table__header">Requirement reference</th>
        <th scope="col" className="govuk-table__header">Requirement</th>
      </tr>
    </thead>
    <tbody className="govuk-table__body">
    <tr className="govuk-table__row">
      <td className="govuk-table__cell">
      <A href="/accessibility/standard/perceivable#rr1.1.1">1.1.1 - Non text content</A>
      </td>
      <td className="govuk-table__cell">
      <p>All non-text content like images, charts, icons and infographics, must have an appropriate text equivalent. This ensures that information conveyed by non-text content is available to people who cannot see it, like screen reader users.</p>
      </td>
    </tr>
    <tr className="govuk-table__row">
      <td className="govuk-table__cell">
      <p><A href="/accessibility/standard/perceivable#rr1.2.x">1.2.x - Alternatives for audio and video</A></p>
      </td>
      <td className="govuk-table__cell">
      <p>Audio and video content has appropriate alternatives to ensure that everyone has a comparable experience when interacting with this content. This may include transcripts, captions and audio description depending on the type of audio or video content.</p>
      </td>
    </tr>
    <tr className="govuk-table__row">
      <td className="govuk-table__cell">
      <p><A href="/accessibility/standard/perceivable#rr1.3.1a">1.3.1a - Info and relationships - Tables</A></p>
      </td>
      <td className="govuk-table__cell">
      <p>When information is visually presented as a table, this structure must be conveyed appropriately to assistive technologies. This ensure that tables are available to screen reader, screen magnification and speech recognition tool users.</p>
      <p>Where possible, you should use semantic HTML to implement content structures.</p>
      </td>
    </tr>
    <tr className="govuk-table__row">
      <td className="govuk-table__cell">
      <p><A href="/accessibility/standard/perceivable#rr1.3.1b">1.3.1b - Info and relationships - Lists</A></p>
      </td>
      <td className="govuk-table__cell">
      <p>When presenting lists of information, you must communicate this list in a way that assistive technology users can understand.</p>
      <p>Where possible, you should use semantic HTML list options which are appropriate to the information being presented.</p>
      </td>
    </tr>
    <tr className="govuk-table__row">
      <td className="govuk-table__cell">
      <p><A href="/accessibility/standard/perceivable#rr1.3.1c">1.3.1c - Info and relationships - Headings</A></p>
      </td>
      <td className="govuk-table__cell">
      <p>Where visual headings are used to communicate the structure of a page, they must also be communicated in a way that supports assistive technology users to access this structure.</p>
      <p>You should use semanatic HTML headings to structure your page. Heads should cascade from H1-H6. Each page must have at least a Level 1 Heading (H1).</p>
      </td>
    </tr>
    <tr className="govuk-table__row">
      <td className="govuk-table__cell">
      <p><A href="/accessibility/standard/perceivable#rr1.3.1d">1.3.1d - Info and relationships - Form fields</A></p>
      </td>
      <td className="govuk-table__cell">
      <p>All form fields have an associated visible label. Where this isn’t possible a non-visible label must be present.</p>
      <p>Sets of radio buttons or checkboxes must be grouped together so that assistive technology users can understand the relationship between these controls.</p>
      <p>Where specific format or input requirements need to be met, hint text linked to the form fields is provided.</p>
      </td>
    </tr>
    <tr className="govuk-table__row">
      <td className="govuk-table__cell">
      <p><A href="/accessibility/standard/perceivable#rr1.3.1e">1.3.1e - Info and relationship - Landmarks</A></p>
      </td>
      <td className="govuk-table__cell">
      <p>Content sections within a page should have an appropriate HTML5 section element or ARIA landmark role defined.</p>
      </td>
    </tr>
    <tr className="govuk-table__row">
      <td className="govuk-table__cell">
      <p><A href="/accessibility/standard/perceivable#rr1.3.2">1.3.2 - Meaningful sequence</A></p>
      </td>
      <td className="govuk-table__cell">
      <p>When the order of content is important, the content order must be preserved no matter how it is presented to the user.</p>
      <p>This ensures that the order of content is meaningful whether someone is looking at it, listening to it with a screen reader, or has stripped out visual styling using a browser plugin.</p>
      </td>
    </tr>
    <tr className="govuk-table__row">
      <td className="govuk-table__cell">
      <p><A href="/accessibility/standard/perceivable#rr1.3.3">1.3.3 - Sensory characteristics</A></p>
      </td>
      <td className="govuk-table__cell">
      <p>Instructions must not depend on sensory characteristics like shape, size, colour, or location. This ensures that instructions can be understood by users who are unable to see or recognise information communicated using sensory characteristics.</p>
      </td>
    </tr>
    <tr className="govuk-table__row">
      <td className="govuk-table__cell">
      <p><A href="/accessibility/standard/perceivable#rr1.3.4">1.3.4 - Orientation</A></p>
      </td>
      <td className="govuk-table__cell">
      <p>A page view must not be locked to either horizontal or vertical views only, unless this is essential.</p>
      <p>There are limited cases where ‘essential’ orientation locking applies.  Check with the A&I team for cases.</p>
      </td>
    </tr>
    <tr className="govuk-table__row">
      <td className="govuk-table__cell">
      <p><A href="/accessibility/standard/perceivable#rr1.3.5">1.3.5 - Identify input purpose</A></p>
      </td>
      <td className="govuk-table__cell">
      <p>In an input  field, the purpose of each input field that collects information about the user can be understood by assistive technologies and browsers by using autocomplete.</p>
      </td>
    </tr>
    <tr className="govuk-table__row">
      <td className="govuk-table__cell">
      <p><A href="/accessibility/standard/perceivable#rr1.4.1">1.4.1 - Use of colour</A></p>
      </td>
      <td className="govuk-table__cell">
      <p>Information conveyed with colour must also be identifiable from context, labelling, or alternative forms.</p>
      </td>
    </tr>
    <tr className="govuk-table__row">
      <td className="govuk-table__cell">
      <p><A href="/accessibility/standard/perceivable#rr1.4.2">1.4.2 - Audio control</A></p>
      </td>
      <td className="govuk-table__cell">
      <p>Audio/video must not play automatically unless the user is pre-warned and can control the audio.</p>
      </td>
    </tr>
    <tr className="govuk-table__row">
      <td className="govuk-table__cell">
      <p><A href="/accessibility/standard/perceivable#rr1.4.3">1.4.3 - Contrast</A></p>
      </td>
      <td className="govuk-table__cell">
      <p>There should be enough difference (contrast) between a background and the foreground content so that user can easily differentiate the two.</p>
      </td>
    </tr>
    <tr className="govuk-table__row">
      <td className="govuk-table__cell">
      <p><A href="/accessibility/standard/perceivable#rr1.4.4">1.4.4 - Resize text</A></p>
      </td>
      <td className="govuk-table__cell">
      <p>Users should be able to resize text up to 200% without any problems with the presentation and structure of the page (for example truncated text, overlaps or missing items).</p>
      </td>
    </tr>
    <tr className="govuk-table__row">
      <td className="govuk-table__cell">
      <p><A href="/accessibility/standard/perceivable#rr1.4.5">1.4.5 - Images of text</A></p>
      </td>
      <td className="govuk-table__cell">
      <p>Meaningful text must not be presented as part of an image because it cannot be resized,  it deteriorates in quality when magnified and is not customisable by the end user.</p>
      <p>Meaningful text is anything which is used to aid understanding for users.</p>
      </td>
    </tr>
    <tr className="govuk-table__row">
      <td className="govuk-table__cell">
      <p><A href="/accessibility/standard/perceivable#rr1.4.10">1.4.10 - Reflow</A></p>
      </td>
      <td className="govuk-table__cell">
      <p>Users should be able to magnify the page up to 400% and content should reflow - move into one column - and not add horizontal scroll bars.</p>
      <p>Content should not be cut off or omitted entirely when magnified.</p>
      </td>
    </tr>
    <tr className="govuk-table__row">
      <td className="govuk-table__cell">
      <p><A href="/accessibility/standard/perceivable#rr1.4.11">1.4.11 - Non text contrast</A></p>
      </td>
      <td className="govuk-table__cell">
      <p>Interactive controls, keyboard focus, icons and content required for understanding e.g. charts and infographics must have enough contrast (at least 3:1) with adjacent colours.</p>
      </td>
    </tr>
    <tr className="govuk-table__row">
      <td className="govuk-table__cell">
      <p><A href="/accessibility/standard/perceivable#rr1.4.12">1.4.12 - Text spacing</A></p>
      </td>
      <td className="govuk-table__cell">
      <p>For regular HTML page content, no loss of content or functionality happens when a user changes line height, letter or word spacing.</p>
      </td>
    </tr>
    <tr className="govuk-table__row">
      <td className="govuk-table__cell">
      <p><A href="/accessibility/standard/perceivable#rr1.4.13">1.4.13 - Content on hover or focus</A></p>
      </td>
      <td className="govuk-table__cell">
      <p>Extra content e.g. tooltips:
      <ul>
        <li>can be viewed easily</li>
        <li>don’t cover up key content</li>
        <li>can be dismissed without moving focus or hover</li>
        <li>can be hovered over (i.e. it doesn’t disappear if you move the mouse)</li>
        <li>is persistent and doesn’t disappear until the user moves focus/hover away</li>
      </ul>
      </p>
      </td>
    </tr>
    </tbody>
  </table>

  <h3>Operable</h3>
  <table className="govuk-table">

    <thead className="govuk-table__head">
      <tr className="govuk-table__row">
        <th scope="col" className="govuk-table__header">Requirement reference</th>
        <th scope="col" className="govuk-table__header">Requirement</th>
      </tr>
    </thead>
    <tbody className="govuk-table__body">
    <tr className="govuk-table__row">
      <td className="govuk-table__cell">
      <A href="/accessibility/standard/operable#rr2.1.1">2.1.1 - Keyboard accessible</A>
      </td>
      <td className="govuk-table__cell">
      <p>It must be possible for someone using a keyboard to complete all tasks in a service.</p>
      <p>This approach will also ensure that users on touch devices that are running assistive technology will also have access to all parts of a service.</p>
      </td>
    </tr>
    <tr className="govuk-table__row">
      <td className="govuk-table__cell">
      <A href="/accessibility/standard/operable#rr2.1.2">2.1.2 - No keyboard trap</A>
      </td>
      <td className="govuk-table__cell">
      <p>No item traps the keyboard focus; upon reaching any item on the page, it is possible to move to the item that precedes or follows it using the keyboard.</p>
      </td>
    </tr>
    <tr className="govuk-table__row">
      <td className="govuk-table__cell">
      <A href="/accessibility/standard/operable#rr2.1.4">2.1.4 - Character key shortcuts</A>
      </td>
      <td className="govuk-table__cell">
      <p>If single character key shortcuts have been set up within a page, the user can switch them off or remap them.</p>
      <p>Character keys should only work where keyboard focus is on the component the key relates to.</p>
      </td>
    </tr>
    <tr className="govuk-table__row">
      <td className="govuk-table__cell">
      <A href="/accessibility/standard/operable#rr2.2.1">2.2.1 - Timing adjustable</A>
      </td>
      <td className="govuk-table__cell">
      <p>When a time limit, like a session timeout, is set ensure a user is informed, especially if this may result in a loss of data.</p> 
      <p>It must be possible for the user to define the length of the timeout (for example in settings), turn it off, delay it, or extend the length of time.</p>
      </td>
    </tr>
    <tr className="govuk-table__row">
      <td className="govuk-table__cell">
      <A href="/accessibility/standard/operable#rr2.2.2">2.2.2 - Pause, stop, hide</A>
      </td>
      <td className="govuk-table__cell">
      <p>Avoid moving or animated content on pages.</p>
      <p>When content moves (is animated, blinks or scrolls) automatically for more than five seconds, or when content automatically updates on the page, it must be possible for users to pause, stop or hide it.</p>
      </td>
    </tr>
    <tr className="govuk-table__row">
      <td className="govuk-table__cell">
      <A href="/accessibility/standard/operable#rr2.3.1">2.3.1 - Three flashes or below</A>
      </td>
      <td className="govuk-table__cell">
      <p>A page must not contain content that flashes more than three times a second.</p>
      </td>
    </tr>
    <tr className="govuk-table__row">
      <td className="govuk-table__cell">
      <A href="/accessibility/standard/operable#rr2.4.1">2.4.1 - Bypass blocks</A>
      </td>
      <td className="govuk-table__cell">
      <p>When there is repeated content (like a header) at the top of the page, there must be a way for keyboard users to move focus directly to the start of the main content area of the page.</p>
      <p>Consider including shortcuts to allow the user to jump between other parts of the content on long pages</p>
      </td>
    </tr>
    <tr className="govuk-table__row">
      <td className="govuk-table__cell">
      <A href="/accessibility/standard/operable#rr2.4.2">2.4.2 - Page title</A>
      </td>
      <td className="govuk-table__cell">
      <p>Each page must have a unique title that indicates its topic or purpose.</p>
      </td>
    </tr>
    <tr className="govuk-table__row">
      <td className="govuk-table__cell">
      <A href="/accessibility/standard/operable#rr2.4.3">2.4.3 - Focus order</A>
      </td>
      <td className="govuk-table__cell">
      <p>It must be possible to navigate through content in a way that makes sense.</p>
      </td>
    </tr>
    <tr className="govuk-table__row">
      <td className="govuk-table__cell">
      <A href="/accessibility/standard/operable#rr2.4.4">2.4.4 - Link purpose in context</A>
      </td>
      <td className="govuk-table__cell">
      <p>Link text should make it clear what the link is i.e. where the links goes. Links should make sense out of context e.g. when using a links list.</p>
      </td>
    </tr>
    <tr className="govuk-table__row">
      <td className="govuk-table__cell">
      <A href="/accessibility/standard/operable#rr2.4.5">2.4.5 - Multiple ways</A>
      </td>
      <td className="govuk-table__cell">
      <p>Unless the service is a series of steps, there must be different ways for people to locate and navigate content.</p>
      </td>
    </tr>
    <tr className="govuk-table__row">
      <td className="govuk-table__cell">
      <A href="/accessibility/standard/operable#rr2.4.6">2.4.6 - Headings and labels</A>
      </td>
      <td className="govuk-table__cell">
      <p>Headings must indicate the topic or purpose of the content in that section of the page, and labels must indicate the purpose of the field they relate to.</p>
      </td>
    </tr>
    <tr className="govuk-table__row">
      <td className="govuk-table__cell">
      <A href="/accessibility/standard/operable#rr2.4.7">2.4.7 - Focus visible</A>
      </td>
      <td className="govuk-table__cell">
      <p>It must be easy to tell which element has keyboard focus.</p>
      </td>
    </tr>
    <tr className="govuk-table__row">
      <td className="govuk-table__cell">
      <A href="/accessibility/standard/operable#rr2.4.11">2.4.11 - Focus not obscured</A>
      </td>
      <td className="govuk-table__cell">
      <p>When an element receives keyboard focus, the focus indicator is easy to see (not entirely hidden behind other elements).</p>
      </td>
    </tr>
    <tr className="govuk-table__row">
      <td className="govuk-table__cell">
      <A href="/accessibility/standard/operable#rr2.5.1">2.5.1 - Pointer gestures</A>
      </td>
      <td className="govuk-table__cell">
      <p>Any functionality which requires a multipoint or path based gestures has an alternative single pointer, non path-based gesture.</p>
      </td>
    </tr>
    <tr className="govuk-table__row">
      <td className="govuk-table__cell">
      <A href="/accessibility/standard/operable#rr2.5.2">2.5.2 - Pointer cancellation</A>
      </td>
      <td className="govuk-table__cell">
      <p>Any script triggering must be done on the ‘up’ event – not the ‘down’ event.</p>
      </td>
    </tr>
    <tr className="govuk-table__row">
      <td className="govuk-table__cell">
      <A href="/accessibility/standard/operable#rr2.5.3">2.5.3 - Label in name</A>
      </td>
      <td className="govuk-table__cell">
      <p>For user interface components with labels that include text or images of text, the Accessible name contains the text that is presented visually.</p>
      </td>
    </tr>
    <tr className="govuk-table__row">
      <td className="govuk-table__cell">
      <A href="/accessibility/standard/operable#rr2.5.4">2.5.4 - Motion actuation</A>
      </td>
      <td className="govuk-table__cell">
      <p>Any functionality that is initiated by tilting or shaking (etc) a device, must be able to be initiated by a button, or other control.</p>
      <p>Users must be able to switch off motion actuation.</p>
      </td>
    </tr>
    <tr className="govuk-table__row">
      <td className="govuk-table__cell">
      <A href="/accessibility/standard/operable#rr2.5.7">2.5.7 - Dragging movements</A>
      </td>
      <td className="govuk-table__cell">
      <p>Any functionality that requires dragging or swiping must be able to be initiated by a button, or other control.</p>
      </td>
    </tr>
    <tr className="govuk-table__row">
      <td className="govuk-table__cell">
      <A href="/accessibility/standard/operable#rr2.5.8">2.5.8 - Target size</A>
      </td>
      <td className="govuk-table__cell">
      <p>The interactive area of a component must be at least 24 by 24 CSS pixels or have sufficient spacing around it.</p>
      </td>
    </tr>
    </tbody>
  </table>

    <h3>Understandable</h3>
    <table className="govuk-table">

      <thead className="govuk-table__head">
        <tr className="govuk-table__row">
          <th scope="col" className="govuk-table__header">Requirement reference</th>
          <th scope="col" className="govuk-table__header">Requirement</th>
        </tr>
      </thead>
      <tbody className="govuk-table__body">
      <tr className="govuk-table__row">
        <td className="govuk-table__cell">
        <A href="/accessibility/standard/understandable#rr3.1.x">3.1.x - Language of page and parts</A>
        </td>
        <td className="govuk-table__cell">
        <p>The written language of the page must be identified in the code of the web page.</p>
        <p>Where multiple written languages are included on a single page, the individual written language must be identified in the code of the web page.</p>
        </td>
      </tr>
      <tr className="govuk-table__row">
        <td className="govuk-table__cell">
        <A href="/accessibility/standard/understandable#rr3.2.1">3.2.1 - On focus</A>
        </td>
        <td className="govuk-table__cell">
        <p>When a keyboard user focuses on a control it must not cause a change of context, such as loading a new page/tab.</p>
        </td>
      </tr>
      <tr className="govuk-table__row">
        <td className="govuk-table__cell">
        <A href="/accessibility/standard/understandable#rr3.2.2">3.2.2 - On input</A>
        </td>
        <td className="govuk-table__cell">
        <p>Changing the setting of any user interface component does not automatically cause a change of context unless the user has been advised of the behaviour before using the component.</p>
        </td>
      </tr>
      <tr className="govuk-table__row">
        <td className="govuk-table__cell">
        <A href="/accessibility/standard/understandable#rr3.2.3">3.2.3 - Consistent navigation</A>
        </td>
        <td className="govuk-table__cell">
        <p>When ways to navigate content are repeated on multiple pages, they must be presented in a consistent manner.</p>
        </td>
      </tr>
      <tr className="govuk-table__row">
        <td className="govuk-table__cell">
        <A href="/accessibility/standard/understandable#rr3.2.4">3.2.4 - Consistent identification</A>
        </td>
        <td className="govuk-table__cell">
        <p>When features with the same functionality are used in multiple places, they must be identified in a consistent way.</p>
        </td>
      </tr>
      <tr className="govuk-table__row">
        <td className="govuk-table__cell">
        <A href="/accessibility/standard/understandable#rr3.2.6">3.2.6 - Consistent help</A>
        </td>
        <td className="govuk-table__cell">
        <p>If present, help is located in the same place relative to other content across multiple related pages.</p>
        </td>
      </tr>
      <tr className="govuk-table__row">
        <td className="govuk-table__cell">
        <A href="/accessibility/standard/understandable#rr3.3.1">3.3.1 - Error identification</A>
        </td>
        <td className="govuk-table__cell">
        <p>When an error occurs the user is informed what caused the error, and the error is described in text in an accessible way.</p>
        </td>
      </tr>
      <tr className="govuk-table__row">
        <td className="govuk-table__cell">
        <A href="/accessibility/standard/understandable#rr3.3.2">3.3.2 - Labels or instructions</A>
        </td>
        <td className="govuk-table__cell">
        <p>When data must be entered in a specific format or in a particular way, clear instructions must be associated with the form field. Password fields should allow a user to view and check the entry.</p>
        </td>
      </tr>
      <tr className="govuk-table__row">
        <td className="govuk-table__cell">
        <A href="/accessibility/standard/understandable#rr3.3.3">3.3.3 - Error suggestions</A>
        </td>
        <td className="govuk-table__cell">
        <p>When data must be entered in a specific format or in a particular way, clear instructions must be associated with the form field. Password fields should allow a user to view and check the entry.</p>
        </td>
      </tr>
      <tr className="govuk-table__row">
        <td className="govuk-table__cell">
        <A href="/accessibility/standard/understandable#rr3.3.4">3.3.4 - Error prevention</A>
        </td>
        <td className="govuk-table__cell">
        <p>All transactions should be reversible, or confirmation must be required before submission.</p>
        </td>
      </tr>
      <tr className="govuk-table__row">
        <td className="govuk-table__cell">
        <A href="/accessibility/standard/understandable#rr3.3.7">3.3.7 - Redundant entry</A>
        </td>
        <td className="govuk-table__cell">
        <p>The user must not be required to provide the same information multiple times during one session.</p>
        </td>
      </tr>
      <tr className="govuk-table__row">
        <td className="govuk-table__cell">
        <A href="/accessibility/standard/understandable#rr3.3.8">3.3.8 - Accessible authentication</A>
        </td>
        <td className="govuk-table__cell">
        <p>Do not require the user to solve a puzzle, recall information or transcribe anything to register, log in, or authenticate a session.</p>
        </td>
      </tr>
      </tbody>
    </table>

    <h3>Robust</h3>
    <table className="govuk-table">

      <thead className="govuk-table__head">
        <tr className="govuk-table__row">
          <th scope="col" className="govuk-table__header">Requirement reference</th>
          <th scope="col" className="govuk-table__header">Requirement</th>
        </tr>
      </thead>
      <tbody className="govuk-table__body">
      <tr className="govuk-table__row">
        <td className="govuk-table__cell">
        <A href="/accessibility/standard/robust#rr4.1.2">4.1.2 - Name, role, value</A>
        </td>
        <td className="govuk-table__cell">
        <p>All interactive components must have an accessible name and role, and the state of the component must be communicated to assistive technologies.</p>
        </td>
      </tr>
      <tr className="govuk-table__row">
        <td className="govuk-table__cell">
        <A href="/accessibility/standard/robust#rr4.1.3">4.1.3 - Status messages</A>
        </td>
        <td className="govuk-table__cell">
        <p>There are different situations where a page needs to dynamically display a status message. These messages need to be conveyed to assistive technology users, even when they don’t receive focus. Where possible, you should avoid disturbing the user’s place in a page.</p>
        </td>
      </tr>
      </tbody>
    </table>

    <h3>Meet user needs</h3>
    <table className="govuk-table">

      <thead className="govuk-table__head">
        <tr className="govuk-table__row">
          <th scope="col" className="govuk-table__header">Requirement reference</th>
          <th scope="col" className="govuk-table__header">Requirement</th>
        </tr>
      </thead>
      <tbody className="govuk-table__body">
      <tr className="govuk-table__row">
        <td className="govuk-table__cell">
        <A href="/accessibility/standard/meet-user-needs#rr5.1.1">5.1.1 - User research participants</A>
        </td>
        <td className="govuk-table__cell">
        <p>When doing user research, make sure to include users with disabilities (at least 1 out of every 5 participants).</p>
        </td>
      </tr>
      <tr className="govuk-table__row">
        <td className="govuk-table__cell">
        <A href="/accessibility/standard/meet-user-needs#rr5.1.2">5.1.2 - Accessibility statement</A>
        </td>
        <td className="govuk-table__cell">
        <p>Ensure that you publish an accessibility statement and keep it updated.</p>
        </td>
      </tr>
      <tr className="govuk-table__row">
        <td className="govuk-table__cell">
        <A href="/accessibility/standard/meet-user-needs#rr5.1.3">5.1.3 - Testing methodology</A>
        </td>
        <td className="govuk-table__cell">
        <p>Ensure that you have a comprehensive testing strategy in place that focuses on user needs and utilises automated, manual and assistive technology testing across a range of browsers and devices.</p>
        </td>
      </tr>
      </tbody>
    </table>

<div className="contact-us">
  <h2 className="govuk-heading-m">Get in touch</h2>
  <p>If you’ve got a question or suggestion share it on the Home Office DDaT Slack channel #ask-accessibility or email <A href="mailto:access@digital.homeoffice.gov.uk">access@digital.homeoffice.gov.uk</A>.</p>
</div>

    </div>
  </div>
);

export default Page;

import { FC, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A, NavigationMenu } from '@not-govuk/components';

const linksImage02 = require('../../../../assets/images/accessibility/links02.png').default;
const linksImage03 = require('../../../../assets/images/accessibility/links03.png').default;
const linksImage04 = require('../../../../assets/images/accessibility/links04.png').default;
const linksImage05 = require('../../../../assets/images/accessibility/links05.png').default;

export const title = 'Links';
const description = 'Accessibility guidance for links content';
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
        Links
      </h1>
      <p>Links normally look like underlined text, or an icon/button which takes you to another page when you click it.</p>
      <p>Presenting links in the right way is important for accessibility and inclusion.</p>


      <h2>Helping everyone</h2>
      <p>All users will benefit if your link text is clear and you can easily identify a link among its surrounding text.
      It’s also important to everyone to know where a link will take them before they click it.</p>

      <h2>The basics</h2>
        <p>Do:</p>
        <ul>
        <li>use clear and concise link text that describe the destination <br /> (for example <span style={{color: "#005EA5", textDecoration: "underline"}}>Learn how to get financial help if you’re disabled</span>)</li>
        <li>ensure links look different from surrounding text with at least two of the following:<br /> colour, size, bold, underlined</li>
        <li>make sure the links work, with keyboard as well as mouse, using the tab and enter keys</li>
        <li>make sure links take you to where you’d expect</li>
        </ul>

        <p>Do not:</p>
        <ul>
        <li>have links that show the full URL</li>
        <li>have links that are not clear on destination such as “click here” or “read more”</li>
        <li>set links to open in new tab or new window, unless this is necessary for the service (such as separate
          guidance content that the user may want to check against as they go through the service) and you tell users
          that a new tab will open</li>
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
          <td className="govuk-table__cell">Blind or partially sighted</td>
          <td className="govuk-table__cell">A screen reader may read links separately from their surrounding text</td>
          <td className="govuk-table__cell">Unique link text that describes the destination</td>
        </tr>

        <tr className="govuk-table__row">
          <td className="govuk-table__cell">Blind</td>
          <td className="govuk-table__cell">Opening a new tab without warning can be confusing</td>
          <td className="govuk-table__cell">Warn users if a link will open in a new tab</td>
        </tr>

        <tr className="govuk-table__row">
          <td className="govuk-table__cell">Colour blind or partially sighted</td>
          <td className="govuk-table__cell">Cannot see links that are only a different colour from the surrounding text</td>
          <td className="govuk-table__cell">Underlining links</td>
        </tr>

        <tr className="govuk-table__row">
          <td className="govuk-table__cell">Motor impairment</td>
          <td className="govuk-table__cell">Cannot use a mouse</td>
          <td className="govuk-table__cell">Links that can be seen and activated using a keyboard</td>
        </tr>

        <tr className="govuk-table__row">
          <td className="govuk-table__cell">Motor impairment or dyslexia</td>
          <td className="govuk-table__cell">Uses voice controls instead of mouse or keyboard</td>
          <td className="govuk-table__cell">Links that are clearly visible</td>
        </tr>
        </tbody>
      </table>

<h2>Creating good links</h2>

<h3>Make them descriptive</h3>

<p>Link text needs to clearly show which page it will open when clicked.</p>

<p>It should always make sense by itself and should not rely on surrounding content to be clear on where it goes
to. This means that link text should say things like 'contact us page' or 'article on Home Office accessibility'.
Each of the three links in the example below clearly explains the action they lead off to.</p>

<div className="govuk-grid-row">
<div className="govuk-grid-column-one-half">
  <img src={linksImage02} alt="Screenshot from gov.uk site with black text on white background, except the links 'Passport advice and complaints', 'Passport services if you're disabled' and 'Passport Check and Send service' which are blue and underlined" className="image-examples" />
</div>
</div>
<br />
<p>Link text should not be a URL directly on the page. The only exception to this is when adding links to emails,
because it’s important that email users know and trust the destination before clicking.</p>

<p>Links should not say things like 'click here’ or 'read more'.</p>

<div className="govuk-grid-row">
<div className="govuk-grid-column-one-half">
  <img src={linksImage03} alt="Screenshot from Adobe's privacy policy with black text on white background, except the link 'see here' which is blue and hyperlinked" className="image-examples" />
</div>
</div>
<br />
<p>Links can also sometimes look like buttons, icons, or pictures that users can click. An example of this is using a
logo image at the top of your website as a link to the home page. In these cases, the alt text of the image should describe
the link destination, not the image itself.</p>

<div className="govuk-grid-row">
<div className="govuk-grid-column-one-half">
  <img src={linksImage04} alt="Screenshot of the gov.uk logo indicating that it links to www.gov.uk homepage" className="image-examples" />
</div>
</div>
<br />
<h3>Make them visible</h3>

<p>Links should be easy to spot on a page and be clearly different from the surrounding text.</p>

<p>You should always use at least two differences when deciding how links will look. Most often this will be colour and underlining.</p>

<p>Make sure that links are very clearly a different colour to the surrounding text.</p>

<p>Good example:</p>
<div className="govuk-grid-row">
<div className="govuk-grid-column-one-half">
  <img src={linksImage05} alt="Screenshot of a blue underlined hyperlink on the words 'apply for a passport urgently' amid black text" className="image-examples" />
</div>
</div>
<br />
<p>Bad example:</p>
<div className="govuk-grid-row">
<div className="govuk-grid-column-one-half">
  <img src={linksImage03} alt="Screenshot from Adobe's privacy policy with black text on white background, except the link 'see here' which is blue and hyperlinked" className="image-examples" />
</div>
</div>
<br />
<p>Using underlines is also important, because using colour alone may be hard to see for some colour-blind users or those with visual impairments.</p>

<h3>Make them unsurprising</h3>

<p>Does the link do what the user expects when they click it?</p>

<p>It's important that, along with clear link text, a link takes the user to where they expect to go and does not do anything unexpected.</p>

<p>Normally a user expects a link to take them to a new page within the current browser window or tab that they're in.</p>

<p>An example of doing something unexpected is if content opens in a new browser tab or window. If you have to do this you should tell users that this will happen in the link text or with a clearly defined icon.</p>


<div className="contact-us">
  <h2 className="govuk-heading-m">Get in touch</h2>
  <p>If you’ve got a question or suggestion share it on the Home Office DDaT Slack channel #ask-accessibility or email <A href="mailto:access@digital.homeoffice.gov.uk">access@digital.homeoffice.gov.uk</A>.</p>
</div>

    </div>
  </div>
);

export default Page;

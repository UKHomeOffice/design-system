import { FC, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A, NavigationMenu } from '@not-govuk/components';

const focusImage01 = require('../../../../../assets/images/accessibility/focus-01.png').default;
const focusImage02 = require('../../../../../assets/images/accessibility/focus-02.png').default;
const focusImage03 = require('../../../../../assets/images/accessibility/focus-03.png').default;
const focusImage04 = require('../../../../../assets/images/accessibility/focus-04.png').default;
const focusImage05 = require('../../../../../assets/images/accessibility/focus-05.png').default;

export const title = 'Focus';
const description = 'Accessibility guidance for keyboard content';
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
        Focus
      </h1>
      <p>All users need to know where they are as they navigate their way through a document or web page, whether this is via keyboard or a mouse.</p>
      <h2>Focus indication</h2>
      <p>Keyboard users need to know where they are on the page, just as the mouse cursor does for mouse users. The way to show this is by ‘focus indication’. When you press the tab key and move through a page, you should see a highlighted box surrounding the element you're currently focused on.</p>
      <div className="govuk-grid-row">
      <div className="govuk-grid-column-one-half">
        <img src={focusImage01} alt="Image of focus indication on link text on GOV.UK" className="image-examples" />
      </div>
      </div>
      <br />
      <p>In the example here you can see which of the links is selected because it's surrounded by a bright yellow box that looks very different to the content around it.</p>
      <div className="govuk-grid-row">
      <div className="govuk-grid-column-two-thirds">
      </div>
      </div>
<br />
      <h3>Visability and contrast</h3>
      <p>Make sure that focus indication is easily visible and clear to follow for all users. Aim for a contrast ratio of 3:1 between the focus indication box and:</p>
      <ul>
      <li>the surrounding content</li>
      <li>what the selected content looked like previously</li>
      </ul>
      <div className="govuk-grid-row">
      <div className="govuk-grid-column-one-quarter">
        <img src={focusImage02} alt="Image of logout button without focus indication" className="image-examples" />
        <img src={focusImage03} alt="Image of logout button with focus indication" className="image-examples" />
      </div>
      </div>
      <br />
      <p>This logout example shows bad focus indication. A thin blue line surrounds the selected button. This can be hard to tell apart from the already blue button, especially if the element is small.</p>
      <p>A user would not immediately be able to pick this out as the focused element on a busy page.</p>
      <p>When developing a service, setting a highly visible focus style effects many users. The default browser style is not sufficient to meet <a href="https://www.w3.org/WAI/WCAG21/Understanding/focus-visible.html">WCAG requirements for focus visibility</a>.</p>

      <h2>Focus order</h2>
      <p>Keyboard users move through a page using a set range of navigation orders. It is not as easy to freely move about the page as it is with a mouse.</p>
      <p>This means your content should be in a sensible order - normally left to right, top to bottom.</p>
      <p>When you're testing with the tab key, make sure that all interactive elements are selected and that you're moving through the page in what you think is a sensible order. Your focus should not be jumping around the page.</p>
      <p>When implementing <a href="https://www.w3.org/TR/wai-aria-practices-1.1/examples/dialog-modal/dialog.html">modal dialogs</a>, the focus order should be contained within the window until the user closes or dismisses it.</p>

      <h3>Good example</h3>
      <div className="govuk-grid-row">
      <div className="govuk-grid-column-three-quarters">
        <img src={focusImage04} alt="Screenshot of website with good tab order" className="image-examples" />
      </div>
      </div>
      <br />
      <p>This good example shows the tab moves of a user. It sensibly moves through the search and popular sections before moving through the alphabetised columns of navigation items.</p>

      <h3>Bad example</h3>
      <div className="govuk-grid-row">
      <div className="govuk-grid-column-three-quarters">
      <img src={focusImage05} alt="Screenshot of website with bad tab order" className="image-examples" />
      </div>
      </div>
      <br />
      <p>This bad example shows irregular tab moves. The focus does not move in a left to right, top to bottom order - instead it jumps back up the page and from right to left. It also does not tab to all interactive elements in each section.</p>
      <p>Find out more about WCAG success criteria 2.4.3 <a href="https://www.w3.org/WAI/WCAG21/Understanding/focus-order.html">focus order</a></p>
<div className="contact-us">
  <h2 className="govuk-heading-m">Get in touch</h2>
  <p>If you’ve got a question or suggestion share it on the Home Office DDaT Slack channel #ask-accessibility or email <A href="mailto:access@digital.homeoffice.gov.uk">access@digital.homeoffice.gov.uk</A>.</p>
</div>

    </div>
  </div>
);

export default Page;

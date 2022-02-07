import { FC, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A, NavigationMenu } from '@not-govuk/components';

const notificationsImage = require('../../../../assets/images/accessibility/notifications.png').default;

export const title = 'Notifications';
const description = 'Accessibility guidance for notifications';
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
        href: '/accessibility/headings',
        text: 'Headings'
      },
      {
        href: '/accessibility/links',
        text: 'Links'
      },
      {
        href: '/accessibility/navigation',
        text: 'Navigation'
      },
      {
        href: '/accessibility/tables',
        text: 'Tables'
      }
    ]} />
    <span className="govuk-caption-m" style={{marginBottom: "1em"}}>Interactivity</span>
    <NavigationMenu items={[
      {
        href: '/accessibility/error-messages',
        text: 'Error messages'
      },
      {
        href: '/accessibility/forms',
        text: 'Forms'
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
        href: '/accessibility/notifications',
        text: 'Notifications'
      },
      {
        href: '/accessibility/forms/keyboard',
        text: '- Keyboard'
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
        {
          href: '/accessibility/readability',
          text: 'Readability'
        },
      ]} />
    <span className="govuk-caption-m" style={{marginBottom: "1em"}}>Providing alternatives</span>
      <NavigationMenu items={[
        {
          href: '/accessibility/audio-and-video',
          text: 'Audio and video'
        },
        {
          href: '/accessibility/colour-and-contrast',
          text: 'Colour and contrast'
        },
        {
          href: '/accessibility/images',
          text: 'Images'
        },
        {
          href: '/accessibility/moving-and-flashing-content',
          text: 'Moving and flashing content'
        }
      ]} />
      <span className="govuk-caption-m" style={{marginBottom: "1em"}}>Resources</span>
        <NavigationMenu items={[
          {
            href: '/accessibility/standard',
            text: 'Accessibility Standard'
          },
          {
            href: '/accessibility/standard/perceivable',
            text: '- Perceivable'
          },
          {
            href: '/accessibility/standard/operable',
            text: '- Operable'
          },
          {
            href: '/accessibility/standard/understandable',
            text: '- Understandable'
          },
          {
            href: '/accessibility/standard/robust',
            text: '- Robust'
          },
          {
            href: '/accessibility/standard/meet-user-needs',
            text: '- Meet user needs'
          },
          {
            href: '/accessibility/resources',
            text: 'Guidance, tools and further reading'
          }
        ]} />
    </div>
    <div className="govuk-grid-column-three-quarters">

    <h1>
      <span className="caption">Accessibility</span>
      Notifications
    </h1>
    <p>Sometimes a page needs to dynamically display a status message.</p>
    <p>These messages need to be communicated to assistive technology users, even when they don’t receive keyboard focus.</p>
    <p>The following in an example of a notification presented to the user upon saving the text taken from the <A href="https://www.w3.org/TR/wai-aria-practices-1.1/examples/dialog-modal/alertdialog.html">W3C WAI-ARIA Authoring Practices 1.1 Alert Dialog Example</A>.</p>

    <div className="govuk-grid-row">
    <div className="govuk-grid-column-three-quarters">
      <img src={notificationsImage} alt="Alert Dialog Example with the following text. This is an example text box, which unsurprisingly contains text. The user is given the option to save this text - which triggers a basic alert - or to discard the text - which triggers an alert dialog that prompts the user for confirmation" className="image-examples"/>
    </div>
    </div>
    <br />

    <p>See the impact that <A href="https://www.w3.org/WAI/perspective-videos/notifications/">notifications and feedback</A> have on user interaction.</p>

    <h2>Helping everyone</h2>
    <p>All users benefit from clear, visible notification messages which are presented in a consistent, predictable way.</p>
    <p>Notification messages are especially important for screen reader users who may not be able to perceive the information visually.</p>

    <h2>The basics</h2>
      <p>Do:</p>
      <ul>
        <li>use <A href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions">ARIA live regions</A> to communicate status messages or updates to screen reader users</li>
        <li>use the polite setting (see more under ‘Announcements’) to avoid interrupting other screen reader announcements</li>
        <li>keep visual and keyboard focus in the same place on the page</li>
        <li>give people enough time to read the notification message</li>
      </ul>

      <p>Do not:</p>
      <ul>
        <li>use visually intrusive notifications</li>
        <li>overuse alerts in a way that causes frequent interruptions</li>
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
          <td className="govuk-table__cell">Blind and partially sighted</td>
          <td className="govuk-table__cell">Cannot see the visual elements of a notifications message</td>
          <td className="govuk-table__cell">ARIA live regions that announce notifications to screen readers</td>
        </tr>
        <tr className="govuk-table__row">
          <td className="govuk-table__cell">Partially sighted</td>
          <td className="govuk-table__cell">Can be unaware of or not find notifications before they disappear if focused, perhaps using magnification software on other parts of the screen</td>
          <td className="govuk-table__cell">Easy to locate notifications<br /><br />Consistent placement on the page</td>
        </tr>
        <tr className="govuk-table__row">
          <td className="govuk-table__cell">Cognitive, language and learning disability</td>
          <td className="govuk-table__cell">May be easily confused by unexpected changes of focus</td>
          <td className="govuk-table__cell">Visual and keyboard focus remaining unchanged<br /><br />Unobtrusive notifications</td>
        </tr>
        <tr className="govuk-table__row">
          <td className="govuk-table__cell">People with low digital literacy</td>
          <td className="govuk-table__cell">May not be able to locate the notification message once it’s closed</td>
          <td className="govuk-table__cell">Consistent placement on the page</td>
        </tr>
        <tr className="govuk-table__row">
          <td className="govuk-table__cell">Lower reading age<br /><br />Non-native English speaker</td>
          <td className="govuk-table__cell">May have limited vocabulary or be using translation software</td>
          <td className="govuk-table__cell">Clear, descriptive language in notifications<br /><br />Enough time to read the notification</td>
        </tr>
        </tbody>
      </table>

      <h2>Creating good notifications</h2>
      <p>Notification messages do not typically ask a user to do something. If user interaction is needed you would most typically do this using a <A href="https://github.com/alphagov/govuk-design-system-backlog/issues/30">modal dialogue</A>.</p>

      <h3>Announcement</h3>
      <p>Notification should give general information and update users. Status messages or updates which occur visually should also be communicated to screen reader users.</p>
      <p>Notification and status messages should be implemented using an <A href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions">ARIA live region</A>. Only screen reader users will  benefit from ARIA live regions.</p>
      <p>Use the polite setting, which prompts the screen reader to announce the change when the user is idle to avoid interrupting them. Avoid using the assertive setting for ARIA live regions unless this is communicating something time-sensitive or critical.</p>
      <p>Setting role="status" aria-live="polite" ensures compatibility across browsers.</p>
      <code>&lt;div id="notification" role="status" aria-live="polite"&gt;&lt;/div&gt;</code>
      <p>Use a script to insert text into the live region to notify a screen reader.</p>
      <p>See <A href="https://www.w3.org/WAI/WCAG21/working-examples/aria-role-status-searchresults/">Using role=status to Provide Status Message on Search Results</A> and <A href="https://www.w3.org/WAI/WCAG21/working-examples/aria-role-status-shoppingcart/">Using role=status to Provide Status Message on Shopping Cart</A> for working examples on how to implement role="status".</p>
      <p>Where a notification is  visual rather than textual, provide some visually hidden text describing the interface response. If success is communicated via a green tick for example, provide that response as visually hidden text.</p>

      <h3>Appearance</h3>
      <p>Notifications should be non-intrusive and only used when there is a benefit to the user, for instance informing them how many search results have been returned, that errors have occurred in their submission, or that a form has been successfully submitted.</p>
      <p>Ensure that notifications are visible for long enough to allow people to successfully locate and read the message. See <A href="https://sheribyrnehaber.medium.com/designing-toast-messages-for-accessibility-fb610ac364be">Designing Toast Messages for Accessibility</A> for a calculation of the minimum amount of time that these should be displayed. Ensure that notification messages are located in a consistent location and that these do not overlap critical content.</p>
      <p>The message should be clear, concise, and easy to understand. See our <A href="/accessibility/readability">readability guidance</A> for information on how to make your language easier to understand.</p>
      <p>Ensure that text and icons have sufficient colour contrast and that meaning is not conveyed by colour alone. See our <A href="/accessibility/colour-and-contrast">colour and contrast guidance</A> for information on how to ensure that text meets minimum contrast requirements.</p>
      <p>Notification text should respond to user adjustments such as:</p>
      <ul>
        <li>resizing up to 400%</li>
        <li>changing style properties, for example line height and letter spacing</li>
      </ul>
      <p>Limit the number of notifications to reduce visual distraction, as well as auditory distraction from screen reader announcements and any notification sounds.</p>

      <h3>Interactivity</h3>
      <p>Where notifications do not close automatically, present a way to close them using either the ESC key or using a dedicated close button.</p>

      <h3>Focus</h3>
      <p>Where possible, avoid moving the visual or keyboard focus.</p>

<div className="contact-us">
  <h2 className="govuk-heading-m">Get in touch</h2>
  <p>If you’ve got a question or suggestion share it on the Home Office DDaT Slack channel #ask-accessibility or email <A href="mailto:access@digital.homeoffice.gov.uk">access@digital.homeoffice.gov.uk</A>.</p>
</div>

    </div>
  </div>
);

export default Page;

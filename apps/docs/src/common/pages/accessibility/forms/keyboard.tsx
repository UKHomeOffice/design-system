import { FC, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A, NavigationMenu } from '@not-govuk/components';

const formskeyboardImage = require('../../../../../assets/images/accessibility/forms-keyboard.png').default;

export const title = 'Keyboard';
const description = 'Accessibility guidance for forms';
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
        href: '/accessibility/navigation',
        text: 'Navigation'
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
        href: '/accessibility/notifications',
        text: 'Notifications'
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
        href: '/accessibility/forms',
        text: 'Forms'
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
      Keyboard
    </h1>
    <p>Users must be able to use any input device, including the keyboard, to fill in forms.</p>

    <h2>Helping everyone</h2>
    <p>Making sure forms work with the keyboard helps disabled keyboard users and users of alternative input devices such as switches. Some expert users can also benefit as keyboard entry can be faster than using the mouse when filling out multiple forms.</p>

    <h2>The basics</h2>
      <p>Do:</p>
      <ul>
      <li>use native components or components from the design system wherever possible as they come with expected keyboard functionality built-in</li>
      <li>test that your component works as expected</li>
      <li>use hint text to explain how complex controls work</li>
      <li>make sure <a href="/../accessibility/keyboard/focus">focus is visible and in the correct order</a></li>
      </ul>

      <p>Do not:</p>
      <ul>
      <li>use custom form components without checking they work with the keyboard as well as the mouse</li>
      </ul>

    <table className="govuk-table">
      <caption className="govuk-table__caption govuk-table__caption--l">Examples of users with access needs</caption>
      <thead className="govuk-table__head">
        <tr className="govuk-table__row">
          <th scope="col" className="govuk-table__header">User</th>
          <th scope="col" className="govuk-table__header">Access need</th>
        </tr>
      </thead>
      <tbody className="govuk-table__body">
      <tr className="govuk-table__row">
        <td className="govuk-table__cell">Blind or partially sighted</td>
        <td className="govuk-table__cell">People with low vision often can’t see mouse cursors and may need to use a keyboard, perhaps with a screen reader or magnifier</td>
      </tr>

      <tr className="govuk-table__row">
      <td className="govuk-table__cell">Cognitive, language and learning disability, people with low digital literacy</td>
      <td className="govuk-table__cell">Cannot use a mouse so need to use a keyboard or an input device that emulates a keyboard</td>
      </tr>

      </tbody>
    </table>

    <h2>How to test forms with the keyboard</h2>

    <p>Make sure you can move from one field to another and back again, in the same order as the visual layout of the page. Do not skip fields or go backwards when tabbing forwards. Make sure to check that focus indication is right.</p>

    <div className="govuk-grid-row">
      <div className="govuk-grid-column-one-half">
        <img src={formskeyboardImage} alt="" className="image-examples" />
      </div>
    </div>
    <br />

    <ul>
      <li>Tab: Go to the next focusable element, these are link, button or form field elements</li>
      <li>Shift-tab: Go back to the previous focusable element</li>
      <li>Checkboxes: Tab moves to the next checkbox, shift tab goes one back</li>
      <li>Radio buttons: Tab to the first radio and then use the arrow keys to move between them</li>
      <li>Select or dropdown: Space to open the options, arrow keys to move to the one you want and space or enter to choose the right option</li>
      <li>Buttons: Enter or space to activate </li>
      <li>Links: Enter or space to activate</li>
    </ul>

    <h2>Other considerations</h2>

    <p>If your form control is more complex than a text field or dropdown, consider giving users help with how to use the control via hint text. You should also offer an alternative, for example allowing users to type in a date field as well as having a date picker.</p>
    <p>Using keyboard, switch or other input devices can be tiring for people with motor impairments so make sure users don’t have to use Tab more than they need to. Things like typeahead fields, the <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete">autocomplete attribute</a> and considering field number and order can help make your form easier to use.</p>

<div className="contact-us">
  <h2 className="govuk-heading-m">Get in touch</h2>
  <p>If you’ve got a question or suggestion share it on the Home Office DDaT Slack channel #ask-accessibility or email <A href="mailto:access@digital.homeoffice.gov.uk">access@digital.homeoffice.gov.uk</A>.</p>
</div>

    </div>
  </div>
);

export default Page;

import { FC, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A } from '@not-govuk/components';
import { menu } from '../../accessibility'

export const title = 'Keyboard';
const description = 'Accessibility guidance for forms';
export const section = 'Accessibility';

const formskeyboardImage = require('../../../../../assets/images/accessibility/forms-keyboard.png');

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
      Keyboard
    </h1>
    <p>Users must be able to use any input device, including the keyboard, to fill in forms.</p>
    <p>Making sure forms work with the keyboard helps disabled keyboard users and users of alternative input devices such as switches. Some expert users can also benefit as keyboard entry can be faster than using the mouse when filling out multiple forms.</p>
    <p>Blind or partially sighted people often cannot see mouse cursors and may need to use a keyboard, perhaps with a screen reader or magnifier.</p>
    <p>People with a motor impairment may not be able to use a mouse, so need to use a keyboard or an input device that emulates a keyboard.</p>

    <h2>The basics</h2>
      <p>Do:</p>
      <ul>
      <li>use native components or components from the GOV.UK or Home Office design systems wherever possible as they come with expected keyboard functionality built-in</li>
      <li>test that your component works as expected</li>
      <li>use hint text to explain how complex controls work</li>
      <li>make sure <A href="/../accessibility/keyboard/focus">focus is visible and in the correct order</A></li>
      </ul>

      <p>Do not:</p>
      <ul>
      <li>use custom form components without checking they work with the keyboard as well as the mouse</li>
      </ul>

    <h2>How to test forms with the keyboard</h2>

    <p>Make sure you can move from one field to another and back again, in the same order as the visual layout of the page. Do not skip fields or go backwards when tabbing forwards. Make sure to check that focus indication is right.</p>

    <div className="govuk-grid-row">
      <div className="govuk-grid-column-one-half">
        <img src={formskeyboardImage} alt="" className="image-examples" />
      </div>
    </div>
    <br />

    <h3>Commands</h3>
    <ul>
      <li>Tab: Go to the next focusable element, these are link, button or form field elements</li>
      <li>Shift-tab: Go back to the previous focusable element</li>
    </ul>

    <h3>For different field types</h3>
    <ul>
      <li>Checkboxes: Tab moves to the next checkbox, shift tab goes one back</li>
      <li>Radio buttons: Tab to the first radio and then use the arrow keys to move between them</li>
      <li>Select or dropdown: Space to open the options, arrow keys to move to the one you want and space or enter to choose the right option</li>
      <li>Buttons: Enter or space to activate </li>
      <li>Links: Enter or space to activate</li>
    </ul>

    <h2>Other considerations</h2>

    <p>If your form control is more complex than a text field or dropdown, consider giving users help with how to use the control via hint text. You should also offer an alternative, for example allowing users to type in a date field as well as having a date picker.</p>
    <p>Using keyboard, switch or other input devices can be tiring for people with motor impairments so make sure users don’t have to use Tab more than they need to. Things like typeahead fields, the <A href="https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete">autocomplete attribute</A> and considering field number and order can help make your form easier to use.</p>

<div className="contact-us">
  <h2 className="govuk-heading-m">Get in touch</h2>
  <p>If you’ve got a question or suggestion share it on the Home Office DDaT Slack channel #ask-accessibility or email <A href="mailto:access@digital.homeoffice.gov.uk">access@digital.homeoffice.gov.uk</A>.</p>
</div>

    </div>
  </div>
);

export default Page;

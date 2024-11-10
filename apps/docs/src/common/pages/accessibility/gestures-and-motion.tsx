import { FC, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A } from '@not-govuk/components';
import { menu } from '../accessibility'

const mapImage = require('../../../../assets/images/accessibility/gestures-and-motion.png');

export const title = 'Gestures and motion';
const description = 'Accessibility guidance for gestures and motion';
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
        Gestures and motion
      </h1>
      <p>Some ways of interacting with content and functionality across desktop and mobile are complex and can cause accessibility issues.</p>
      <p>These include:</p>
      <ul>
        <li>path-based gestures - gestures where the start, intermediate and end points all matter, for example swiping, sliders and carousels requiring interaction</li>
        <li>multi-point gestures - gestures that need more than one point of contact, such as pinch to zoom used on a map component, or two or three finger tap</li>
        <li>device motion - used to trigger an action, such as shaking or tilting</li>
      </ul>
      <p>Where these are present, users must be made aware that an alternative exists and be able to use this functionality with a keyboard or single-point gesture. User research should inform any assumptions about how this functionality should be presented.</p>
      <p>For example, when a map view supports a pinch gesture to zoom content, that functionality should also be made available as buttons.</p>
      <img src={mapImage} alt="Map zoom interface used as part of an interactive map"   width="75%" />
      <br /><br />
      <p>If a user has mistakenly pressed down on the mouse button or touched the screen on an interactive component such as a button or link, they should be able to stop the action by moving the cursor or touch away before releasing.</p>

      <h2>Helping everyone</h2>
      <p>Providing alternative controls	 benefits everyone by presenting all functionality as easily actionable interface elements which do not need complicated interactions.</p>
      <p>Allowing users to cancel an action by moving the cursor away before releasing makes it easier for all users to recover from mistakes.</p>

      <h2>The basics</h2>
        <p>Do:</p>
        <ul>
          <li>for any functionality which needs a path-based or multi-point gesture, provide an alternative way to trigger the functionality using a single pointer</li>
          <li>inform users of all the ways that they can use certain functionality</li>
          <li>provide a button or other control for any functionality that is initiated by motion, such as tilting or shaking a device</li>
          <li>ensure users are able to switch off the need to use device motion for functionality</li>
          <li>activate functionality only when the control is released by the user, by lifting a finger from the screen or releasing the mouse button</li>
          <li>provide buttons and controls that are large enough for users to easily activate</li>
        </ul>
        <p>Do not:</p>
        <ul>
          <li>include functionality that needs a multipoint or path-based gestures, or device motion such as shaking or tilting, without providing an alternative</li>
          <li>trigger functionality when a user first clicks on a component</li>
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
          <td className="govuk-table__cell">Partially sighted</td>
          <td className="govuk-table__cell">A way to avoid activating a control by accident</td>
          <td className="govuk-table__cell">Ability to move away from the control to cancel action</td>
        </tr>
        <tr className="govuk-table__row">
          <td className="govuk-table__cell">Motor impairments such as tremors</td>
          <td className="govuk-table__cell">Cannot perform complex path-based or multi point gestures<br /><br />A way to avoid activating a control pressed by accident<br /><br />A way to avoid accidentally triggering controls via device motion<br /><br />A way to activate controls that does not rely on precise movement</td>
          <td className="govuk-table__cell">Alternative controls<br /><br />Ability to move away from the control to cancel action<br /><br />Ability to turn off motion controls<br /><br />Large buttons and controls for easy interaction</td>
        </tr>
        <tr className="govuk-table__row">
          <td className="govuk-table__cell">Mobility impaired or unable to move device</td>
          <td className="govuk-table__cell">Unable to perform motions such as tilting or shaking</td>
          <td className="govuk-table__cell">Alternative controls</td>
        </tr>
        <tr className="govuk-table__row">
          <td className="govuk-table__cell">Cognitive and learning disability, people with low digital literacy</td>
          <td className="govuk-table__cell">May be unaware of complex pointer gestures<br /><br />A way to avoid activating a control  by accident</td>
          <td className="govuk-table__cell">Simple user interface elements for functionality<br /><br />Ability to move away from the control to cancel action</td>
        </tr>
        </tbody>
      </table>
<br />
<h2>Creating good interaction with functionality</h2>
<h3>Alternative controls for path-based and multi-point gestures</h3>

<p>If you are using gesture controls like drag-and-drop or pinch zoom, provide a single pointer equivalent that doesn't need path-based and directional gestures.</p>
<p>Users must be aware that the alternative exists and be able to activate it with keyboard or single pointer operation.</p>
<p>For example, with slider controls you could provide buttons, or allow a user to type in a number, to increase or decrease the value. For pinch to zoom controls, you could provide the magnification options as buttons.</p>
<p>Ensure that gestures available on a mobile device have an accessible alternative which is communicated to all users.</p>
<p>Any buttons and controls used should be large enough for users to easily activate. See the benefits that <A href="https://www.w3.org/WAI/perspective-videos/controls/">large links, buttons, and controls</A> have for people with motor and mobility impairments.</p>

<h3>Alternative controls for motion operation</h3>
<p>On mobile applications, where something happens when the user tilts or shakes the device, provide and tell all users about an alternative way of performing the action that does not rely on motion.</p>
<p>Tell all users how to switch off motion controls in site settings altogether, as this may result in a user accidentally triggering functionality.</p>

<h3>Action on up-event</h3>
<p>Activation of any function should occur on the up-event - lifting a finger from the screen or mouse button. Using the click event by default will only trigger the action on release.</p>
<p>After clicking the mouse or touching the screen, users must be able to cancel the action that would be executed on releasing the mouse button or touch input. This means that if a user selects a control but moves the mouse away from the control before releasing it, the functionality should not be triggered.</p>

<div className="contact-us">
  <h2 className="govuk-heading-m">Get in touch</h2>
  <p>If you’ve got a question or suggestion share it on the Home Office DDaT Slack channel #ask-accessibility or email <A href="mailto:access@digital.homeoffice.gov.uk">access@digital.homeoffice.gov.uk</A>.</p>
</div>

    </div>
  </div>
);

export default Page;

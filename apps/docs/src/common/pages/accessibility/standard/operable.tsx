import { FC, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A } from '@not-govuk/components';
import { menu } from '../../accessibility'

export const title = 'Operable';
const description = 'Operable Accessibility Standard requirements';
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
      Operable
    </h1>
    <p>All interactive components and page navigations must be operable via different input modalities.</p>
    <p>Users should be able to easily navigate around the site and have enough time to interact with the content without discomfort or physical reactions.</p>
    <h2>Index</h2>
    <h3>Keyboard Accessible</h3>
    <ul className="plain">
      <li><a href="#rr2.1.1">2.1.1 - Keyboard accessible</a></li>
      <li><a href="#rr2.1.2">2.1.2 - No keyboard trap</a></li>
      <li><a href="#rr2.1.4">2.1.4 - Character key shortcuts</a></li>
    </ul>
    <h3>Enough time</h3>
    <ul className="plain">
      <li><a href="#rr2.2.1">2.2.1 - Timing adjustable</a></li>
      <li><a href="#rr2.2.2">2.2.2 - Pause, stop, hide</a></li>
    </ul>
    <h3>Seizures and physical reactions</h3>
    <ul className="plain">
      <li><a href="#rr2.3.1">2.3.1 - Three flashes or below</a></li>
    </ul>
    <h3>Navigable</h3>
    <ul className="plain">
      <li><a href="#rr2.4.1">2.4.1 - Bypass blocks</a></li>
      <li><a href="#rr2.4.2">2.4.2 - Page title</a></li>
      <li><a href="#rr2.4.3">2.4.3 - Focus order</a></li>
      <li><a href="#rr2.4.4">2.4.4 - Link purpose in context</a></li>
      <li><a href="#rr2.4.5">2.4.5 - Mulitple ways</a></li>
      <li><a href="#rr2.4.6">2.4.6 - Headings and labels</a></li>
      <li><a href="#rr2.4.7">2.4.7 - Focus visible</a></li>
    </ul>
    <h3>Input Modalities</h3>
    <ul className="plain">
      <li><a href="#rr2.5.1">2.5.1 - Pointer gestures</a></li>
      <li><a href="#rr2.5.2">2.5.2 - Pointer cancellation</a></li>
      <li><a href="#rr2.5.3">2.5.3 - Label in name</a></li>
      <li><a href="#rr2.5.4">2.5.4 - Motion actuation</a></li>
    </ul>

    <h2>Keyboard Accessible</h2>
    <h3 id="rr2.1.1">2.1.1 - Keyboard accessible</h3>
    <p>It must be possible for someone using a keyboard to complete all tasks in a service.</p>
    <p>This approach will also ensure that users on touch devices that are running assistive technology will also have access to all parts of a service.</p>
    <p><A href="https://www.w3.org/WAI/WCAG21/Understanding/keyboard">Understanding Success Criterion 2.1.1: Keyboard</A></p>
    <h4>Implementation guidance</h4>
    <p>Users must be able to access all interaction and functionality with the keyboard.</p>
    <ul>
      <li>Do not set the focus order of a page. Use tabindex="0" to add to the inherited tabbing order of the page.</li>
      <li>Only interactive elements should recieve keyboard focus. Do not add keyboard focus to headings or other non-interactive content.</li>
      <li>Review 2.4.3 Focus Order and follow the recommendations.</li>
    </ul>
    <h4>How to test with a keyboard</h4>
    <p>Use the keyboard to navigate the page and check that you can reach all actionable items (e.g. links, buttons, form fields, tabs, sliders, menus) using the Tab or arrow keys, that you can activate all items by pressing the Enter key or Spacebar, and that you can move backward to the top of the page using Shift+Tab</p>
    <h4>Helpful links</h4>
    <p><A href="/accessibility/keyboard">Home Office Design System - Keyboard basics</A></p>

    <h3 id="rr2.1.2">2.1.2 - No keyboard trap</h3>
    <p>No item traps the keyboard focus; upon reaching any item on the page, it is possible to move to the item that precedes or follows it using the keyboard.</p>
    <p><A href="https://www.w3.org/WAI/WCAG21/Understanding/no-keyboard-trap">Understanding Success Criterion 2.1.2: No Keyboard Trap</A></p>
    <h4>Implementation guidance</h4>
    <p>Users must be able to move keyboard focus to an element and away again.</p>
    <p>Components which need to contain focus until dismissed, for example dialogue boxes and ‘hamburger’ menus, must provide a close button or other way to exit.</p>
    <p>Check that plugins and iframes are compatible with keyboard focus.</p>
    <h4>How to test with a keyboard</h4>
    <ul>
      <li>Using the Keyboard, navigate the page and ensure that focus is not trapped by any component.</li>
      <li>Where components exist that are required to contain the focus until users dismiss the component, check that there is a suitable dismiss option e.g. a close button or the escape key.</li>
    </ul>

    <h3 id="rr2.1.4">2.1.4 - Character key shortcuts</h3>
    <p>If single character key shortcuts have been set up within a page, the user can switch them off or remap them.</p>
    <p>Character keys should only work where keyboard focus is on the component the key relates to.</p>
    <p><A href="https://www.w3.org/WAI/WCAG21/Understanding/character-key-shortcuts">Understanding Success Criterion 2.1.4: Character Key Shortcuts</A></p>
    <h4>Implementation guidance</h4>
    <p>Make sure users have a way to turn off single-key shortcuts. This could be in a preference section of your site.</p>
    <p>Alternatively, allow users to change character-key shortcuts to more complex or chorded shortcuts, for example changing from ‘A’ to CTRL+A.</p>
    <h4>How to test with a manual check & keyboard</h4>
    <p>If single character key shortcuts exist, you should test:</p>
    <ul>
      <li>that the shortcut keys perform the function expected</li>
      <li>do not clash with any browser or Operating System level shortcut keys</li>
    </ul>
    <p>You should also test that either of the following is true:</p>
    <ul>
      <li>Ensure that remapping options work including remapping to more complex or chorded shortcuts</li>
    </ul>
    <p>OR</p>
    <ul>
      <li>Ensure that the shortcut keys can be switched off.</li>
    </ul>
    <h4>Helpful links</h4>
    <p><A href="/accessibility/keyboard/character-key-shortcuts">Home Office Design System - Character key shortcuts</A></p>

    <h2>Enough time</h2>

    <h3 id="rr2.2.1">2.2.1 - Timing adjustable</h3>
    <p>When a time limit, like a session timeout, is set ensure a user is informed, especially if this may result in a loss of data.</p>
    <p>It must be possible for the user to define the length of the timeout (e.g. in settings),  turn it off, delay it, or extend the length of time.</p>
    <p><A href="https://www.w3.org/WAI/WCAG21/Understanding/timing-adjustable">Understanding Success Criterion 2.2.1: Timing Adjustable</A></p>
    <h4>Implementation guidance</h4>
    <p>Where timeouts are implemented:</p>
    <ul>
      <li>tell users about the timeout, and what the timeout limit is, at the start of the process</li>
      <li>alert users when they are about to reach the timeout limit, giving them enough time(at least 60 seconds) to opt to extend it</li>
      <li>provide functionality to allow time limits to be extended</li>
      <li>provide functionality that allows users to set a timeout limit before they encounter a timeout, for example in settings</li>
    </ul>
    <p>When a user experiences a timeout, provide a way to get back to where they were.</p>
    <h4>How to test with a visual check</h4>
    <p>If timeouts exist, conduct the following checks:</p>
    <ul>
      <li>when a timeout occurs while you are interacting with the pages, check that a warning message is displayed before the timeout occurs and that an option to extend the session is offered</li>
      <li>when a timeout occurs as a result of user inactivity, check that you are informed of the length of inactivity that would generate a timeout at the beginning of the process</li>
      <li>check if there is an option available for the user to adjust the timeout before they encounter it e.g. in settings</li>
    </ul>
    <p>In addition, you should check that:</p>
    <ul>
      <li>If the timeout occurs, that users are provided with a way to get back to where they were</li>
    </ul>
    <h4>How to test with JAWS and NVDA</h4>
    <p>Where a timeout exists, check:</p>
    <ul>
      <li>that the timeout warning message is communicated to the screenreader</li>
      <li>that on timeout, a screenreader user is alerted that the timeout has occurred</li>
    </ul>
    <h4>Helpful links</h4>
    <p><A href="/accessibility/timeouts">Home Office Design System - Timeouts</A></p>

    <h3 id="rr2.2.2">2.2.2 - Pause, stop, hide</h3>
    <p>Avoid moving or animated content on pages.</p>
    <p>When content moves (is animated, blinks or scrolls) automatically for more than five seconds, or when content automatically updates on the page, it must be possible for users to pause, stop or hide it.</p>
    <p><A href="https://www.w3.org/WAI/WCAG21/Understanding/pause-stop-hide">Understanding Success Criterion 2.2.2: Pause, Stop, Hide</A></p>
    <h4>Implementation guidance</h4>
    <p>Do not display moving content automatically if you can avoid it.</p>
    <p>If the content has to animate automatically, make sure that the animation lasts 5 seconds at most. Otherwise, provide an option for users to pause, stop or hide this content.</p>
    <p>Ideally, content should not update automatically (this applies to frequent changes that would be distracting to users). If the content has to update, provide an option for users to pause, stop or hide this content.</p>
    <h4>How to test with a visual check</h4>
    <p>If the page contains animated content, check that the animation stops after 5 seconds.</p>
    <p>If the animation lasts longer than 5 seconds, check that a pause, stop or hide button is available.</p>
    <p>Check that content does not update automatically. If it does, check if an option for users to pause, stop or hide this content exists.</p>

    <h2>Seizures and physical reactions</h2>

    <h3 id="rr2.3.1">2.3.1 - Three flashes or below</h3>
    <p>A page must not contain content that flashes more than three times a second.</p>
    <p><A href="https://www.w3.org/WAI/WCAG21/Understanding/three-flashes-or-below-threshold">Understanding Success Criterion 2.3.1: Three Flashes or Below Threshold</A></p>
    <h4>Implementation guidance</h4>
    <p>Content must not flash more than three times a second.</p>
    <h4>How to test with a visual check</h4>
    <p>Ensure any flashing or blinking content isdoes not flash more than three times a second.</p>
    <h4>Helpful links</h4>
    <p><A href="https://trace.umd.edu/peat">Trace Research & Development Center - Photosensitive Epilepsy Analysis Tool (PEAT)</A></p>

    <h2>Navigable</h2>

    <h3 id="rr2.4.1">2.4.1 - Bypass blocks</h3>
    <p>When there is repeated content (like a header) at the top of the page, there must be a way for keyboard users to move focus directly to the start of the main content area of the page.</p>
    <p>Consider including shortcuts to allow the user to jump between other parts of the content on long pages</p>
    <p><A href="https://www.w3.org/WAI/WCAG21/Understanding/bypass-blocks">Understanding Success Criterion 2.4.1: Bypass Blocks</A></p>
    <h4>Implementation guidance</h4>
    <p>Provide a ‘Skip to main content’ link close to the start of the page.</p>
    <p>This link moves the visual and keyboard focus to the main content area, skipping the navigation.</p>
    <h4>How to test with a keyboard</h4>
    <p>Use the Tab key to navigate the page and check that a skip link (e.g. ‘skip to main content’) appears near the beginning of the tab order.</p>
    <p>Verify that activiating the link moves the visual and keyboard focus to the start of the main content.</p>
    <h4>Helpful links</h4>
    <p><A href="/accessibility/keyboard/skip-to-content">Home Office Design System - Skip to content links</A></p>

    <h3 id="rr2.4.2">2.4.2 - Page title</h3>
    <p>Each page must have a unique title that indicates its topic or purpose.</p>
    <p><A href="https://www.w3.org/WAI/WCAG21/Understanding/page-titled">Understanding Success Criterion 2.4.2: Page Titled</A></p>
    <h4>Implementation guidance</h4>
    <p>Each page title must be unique within the service and shows the stage of the journey the user has reached.</p>
    <p>The title must indicates the page topic or purpose.</p>
    <p>Suggested format : Step title - Service name - Platform (if applicable).</p>
    <p>For example (external): Do you live in the UK? - Apply for a passport - GOV.UK</p>
    <p>For example (internal): Personal details - Metis HR</p>
    <p>Avoid symbols, which may not be read correctly by a screen reader</p>
    <h4>How to test with a visual check</h4>
    <p>Read the title on the browser tab and check that it accurately describes the page content.</p>
    <p>Check that the page title changes through a user journey to reflect the stage of the process. If the content on a page changes without a page refresh, check that the page title updates.</p>
    <h4>How to test with JAWS and NVDA</h4>
    <p>Check the title tag is read out and is clear.  Use Insert + T to read current window title</p>

    <h3 id="rr2.4.3">2.4.3 - Focus order</h3>
    <p>It must be possible to navigate through content in a way that makes sense.</p>
    <p><A href="https://www.w3.org/WAI/WCAG21/Understanding/focus-order">Understanding Success Criterion 2.4.3: Focus Order</A></p>
    <h4>Implementation guidance</h4>
    <p>The visible focus order matches the logical order of navigation and interaction on the page.</p>
    <p>The easiest way to do this is to ensure the Document Object Model (DOM) follows the visual layout of the page, so your code has the same layout as your onscreen content.</p>
    <p>Only content which is interactive should appear in the focus order. Non-interactive content, for instance headings and paragraphs, should not get focus.</p>
    <p>Standard HTML components inherit the keyboard focus using the ordering of components in the code.</p>
    <p>Add keyboard support when you use non-standard HTML components, as these are not inherited.</p>
    <p>In general, the focus order should move across and down the screen in a ‘Z’ shape.</p>
    <p>If users move the focus dynamically, for example by opening a modal dialog, you must ensure that you programmatically manage the focus to the modal. Similarly, when a modal is closed, you should manage the focus back to the most logical location in the original document - usually the control which opens the modal. With modals, you should ensure that it remains within the modal and doesn’t stray into the document below.</p>
    <p>Dynamic controls should not reset or lose the focus.</p>
    <h4>How to test with a keyboard</h4>
    <p>Use the Tab key to navigate the page and check that the actionable items (e.g. links, buttons, form fields) receive the focus in a logical order (i.e. the focus does not jump around the page).</p>
    <p>Check that any non-standard components have correct focus ordering.</p>
    <p>Check that focus is managed when interacting with modal dialogs.</p>
    <p>Check that the focus is not reset or moved to the top of the page by dynamic controls.</p>
    <h4>Helpful links</h4>
    <p><A href="/accessibility/keyboard/tab-navigation">Home Office Design System - Tab navigation</A></p>

    <h3 id="rr2.4.4">2.4.4 - Link purpose in contex</h3>
    <p>Link text should make it clear what the link is i.e. where the links goes.  Links should make sense out of context e.g. when using a links list.</p>
    <p><A href="https://www.w3.org/WAI/WCAG21/Understanding/link-purpose-in-context">Understanding Success Criterion 2.4.4: Link Purpose (In Context)</A></p>
    <h4>Implementation guidance</h4>
    <p>Link text must clearly show what will happen when the link is clicked.</p>
    <p>Descriptive link text for documents should include the document type.</p>
    <p>The link text should indicate if links open new browser windows or tabs.</p>
    <p>Links that point to the same destination must all have the same link text.</p>
    <p>Link names must be accessible.</p>
    <h4>How to test with a visual check</h4>
    <p>Read all links on the page and check that they clearly and accurately describe their destination content (i.e. what page are they going to load?).</p>
    <p>Activate the links and, if they open a new browser tab/window or content other than a web page (e.g. a PDF document), check that this is clear from their text.</p>
    <h4>How to test with JAWS and NVDA</h4>
    <p>Use the JAWS/NVDA key + F7 to show the elements list that should show you all the links available on the page. Review this to check that the links make sense out of context.</p>
    <p><A href="/accessibility/links">Home Office Design System - Links</A></p>

    <h3 id="rr2.4.5">2.4.5 - Multiple ways</h3>
    <p>Unless the service is a series of steps, there must be different ways for people to locate and navigate content.</p>
    <p><A href="https://www.w3.org/WAI/WCAG21/Understanding/multiple-ways">Understanding Success Criterion 2.4.5: Multiple Ways</A></p>
    <h4>Implementation guidance</h4>
    <p>In additional to general navigation, your site should include at least one of the following:</p>
    <ul>
      <li>a site search available on every page</li>
      <li>a link to a site map, normally in the footer</li>
      <li>a link to an A-Z index of pages</li>
    </ul>
    <p>Exceptions to this are services which are made up of a series of steps or which have the primary purpose of looking up information.</p>
    <p>Site search should be able to deal with spelling errors and differing terminology.</p>
    <h4>How to test with a visual check</h4>
    <p>If the page is part of a website containing different sections of content (as opposed to be a step in a process, for example), check that it contains a Site Search functionality or a link to a site map or to an A-Z index of pages.</p>

    <h3 id="rr2.4.6">2.4.6 - Headings and labels</h3>
    <p>Headings must indicate the topic or purpose of the content in that section of the page, and labels must indicate the purpose of the field they relate to.</p>
    <p><A href="https://www.w3.org/WAI/WCAG21/Understanding/headings-and-labels">Understanding Success Criterion 2.4.6: Headings and Labels</A></p>
    <h4>Implementation guidance</h4>
    <p>Headings within your content must describe the purpose or topic of the content that follows.</p>
    <p>Organise content into short sections.</p>
    <p>Headings of the same level should have content between them, for example two H2s must be separated by content.</p>
    <p>Labels for fields should indicate the purpose or requirement of the field they relate to.</p>
    <h4>How to test with a visual check</h4>
    <ul>
      <li>read the page and check that its content is organised in short sections and that each section is preceded by a unique, descriptive heading.</li>
      <li>check that heading of the same level have content between them</li>
      <li>check that labels for fields indicate their purpose</li>
    </ul>
    <h4>How to test with JAWS</h4>
    <p>Use the JAWS key + F6 to list Headings.. Review this to check that headings are descriptive.</p>
    <p>Use the JAWS key + F5 to list form fields. Review this to check that everything is labelled.</p>
    <h4>How to test with NVDA</h4>
    <p>Use the NVDA key + F7 to show you a list of the form elements on the page. Review this to check that everything is labelled.</p>
    <p>Use the NVDA key + F7 to show the elements list that should show you all the headings available on the page. Review this to check that headings are descriptive.</p>
    <h4>Helpful links</h4>
    <p><A href="/accessibility/headings">Home Office Design System - Headings</A></p>

    <h3 id="rr2.4.7">2.4.7 - Focus visible</h3>
    <p>It must be easy to tell which element has keyboard focus.</p>
    <p><A href="https://www.w3.org/WAI/WCAG21/Understanding/focus-visible">Understanding Success Criterion 2.4.7: Focus Visible</A></p>
    <h4>Implementation guidance</h4>
    <p>Interactive elements, like links, buttons and form fields, must have a visible focus indicator.</p>
    <p>You must set the visible focus rather than relying on browser default settings.</p>
    <p>Elements which are visually hidden should not receive visual focus, as this will cause the focus to vanish from the page.</p>
    <p>The focus indiciation must meet 1.4.11 Non text  Contrast requirements.</p>
    <h4>How to test with a keyboard</h4>
    <p>Use the Tab and arrow keys to reach all actionable components on the page and check that you can see where the focus is at all times.</p>
    <p>Check that browser default visible focus has been overriden and aligns to the style of the rest of the site.</p>
    <h4>Helpful links</h4>
    <p><A href="/accessibility/keyboard/focus">Home Office Design System - Keyboard focus</A></p>

    <h2>Input Modalities</h2>

    <h3 id="rr2.5.1">2.5.1 - Pointer gestures</h3>
    <p>Any functionality which requires a multipoint or path based gestures has an alternative single pointer, non path-based gesture.</p>
    <p><A href="https://www.w3.org/WAI/WCAG21/Understanding/pointer-gestures">Understanding Success Criterion 2.5.1: Pointer Gestures</A></p>
    <h4>Implementation guidance</h4>
    <p>If you are using gesture controls like drag-and-drop or pinch zoom, provide a single pointer equivalent that doesn’t require path/directional gestures.</p>
    <p>Users must be aware that the alternative exists and be able to complete with keyboard or single click operation.</p>
    <p>If you are using multipoint gestures (like pinch/zoom) or path based gestures (like slider controls, drag and drop) exist, you need to provide an alternative that can be achieved with a single pointer, non path based gesture.</p>
    <p>For example, with slider controls you could provide buttons to increase or decrease the value. For pinch/zoom controls, you could provide increase/decrease zoom options.</p>
    <h4>How to test with a visual check</h4>
    <ul>
      <li>identify controls or content which requires gestures e.g. drag-and-drop, pinch zoom or sliders</li>
      <li>Check if alternatives exist e.g. drag-and-drop can be done by assigning an ordering, pinch zoom can be done using zoom in/out buttons and sliders can be moved using +/- buttons or value inputs</li>
    </ul>
    <h4>How to test with a mobile device</h4>
    <p>Ensure that gestures available on a mobile device have an accessible alternative which is communciated to screen reader users.</p>
    <h4>Helpful links</h4>
    <p><A href="/accessibility/keyboard/pointer-gestures">Home Office Design System - Pointer gestures</A></p>

    <h3 id="rr2.5.2">2.5.2 - Pointer cancellation</h3>
    <p>Any script triggering must be done on the ‘up’ event – not the ‘down’ event.</p>
    <p><A href="https://www.w3.org/WAI/WCAG21/Understanding/pointer-cancellation">Understanding Success Criterion 2.5.2: Pointer Cancellation</A></p>
    <h4>Implementation guidance</h4>
    <p>Activation of any function should occur on the up-event. This is where the control is released by the user, for example by using a finger or a mouse. Using the click event by default will only trigger the event on release.</p>
    <p>After a down-key event, users must be able to cancel the action that will be executed on the up-key event. This means that if a user selects a control but moves the mouse away from the control before the up-key event, the functionality should not be triggered.</p>
    <p>There are some limited exceptions to this requirement where a down-key event is part of the expected behaviour. However, we don’t anticipate acceptable uses in the Home Office. If you have a requirement for down-key events, please discuss with the Accessibility and Digital Inclusion team.</p>
    <h4>How to test with a visual check</h4>
    <p>Using the mouse move over an item and left click and hold. Ensure that no action was triggered.</p>
    <p>Move the cursor away from the item and release the left mouse button. Ensure that no action was triggered.</p>

    <h3 id="rr2.5.3">2.5.3 - Label in name</h3>
    <p>For user interface components with labels that include text or images of text, the Accessible name contains the text that is presented visually.</p>
    <p><A href="https://www.w3.org/WAI/WCAG21/Understanding/label-in-name">Understanding Success Criterion 2.5.3: Label in Name</A></p>
    <h4>Implementation guidance</h4>
    <p>The accessible name can be the ‘label’ used on a form input. This can be provided by the label element in HTML or by an aria-label or similar.</p>
    <p>The accessible name and visible label of a control must match.</p>
    <p>The accessible name can include additional text but the visible name must remain present and unbroken. This means you can prepend or append additional text, but not insert extra words between the visible words.</p>
    <h4>How to test with a visual check</h4>
    <p>Where a visual label is used on a control check that the HTML uses the same label. This ensures speech recognition users can say the name of an item?</p>
    <h4>How to test with JAWS/NVDA</h4>
    <p>Move to control or form field.  The readout for the screen reader should match the visual label if there is one</p>
    <p>For example a button visually showing submit should read this, not continue.</p>

    <h3 id="rr2.5.4">2.5.4 - Motion actuation</h3>
    <p>Any functionality that is initiated by tilting or shaking (etc) a device, must be able to be intiated by a button, or other control.</p>
    <p>Users must be able to switch off motion acutation.</p>
    <p><A href="https://www.w3.org/WAI/WCAG21/Understanding/motion-actuation">Understanding Success Criterion 2.5.4: Motion Actuation</A></p>
    <h4>Implementation guidance</h4>
    <p>On mobile applications, where functionality is performed when the user tilts or shakes the device, provide an alternative way of performing the functionality that does not rely on motion.</p>
    <p>Provide a way to switch off motion actuation in settings.</p>
    <h4>How to test with a visual check</h4>
    <p>Identify any functionality which requires motion. Check if an alternative option is available.</p>
    <p>Check that controls exist to allow users to switch off motion actuation.</p>

<div className="contact-us">
  <h2 className="govuk-heading-m">Get in touch</h2>
  <p>If you’ve got a question or suggestion share it on the Home Office DDaT Slack channel #ask-accessibility or email <A href="mailto:access@digital.homeoffice.gov.uk">access@digital.homeoffice.gov.uk</A>.</p>
</div>

    </div>
  </div>
);

export default Page;

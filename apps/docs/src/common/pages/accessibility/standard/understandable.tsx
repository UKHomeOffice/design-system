import { FC, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A } from '@not-govuk/components';
import { menu } from '../../accessibility'

export const title = 'Understandable';
const description = 'Understandable Accessibility Standard requirements';
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
      Understandable
    </h1>
    <p>Users must be able to understand the content.</p>
    <p>Content must be understandable by a broad audience, must appear and operate in predictable ways and users should be helped to correct mistakes.</p>
    <h2>Index</h2>
    <h3>Readable</h3>
    <ul className="plain">
      <li><a href="#rr3.1.x">3.1.x - Language of page and parts</a></li>
    </ul>
    <h3>Predictable</h3>
    <ul className="plain">
      <li><a href="#rr3.2.1">3.2.1 - On Focus</a></li>
      <li><a href="#rr3.2.2">3.2.2 - On Input</a></li>
      <li><a href="#rr3.2.3">3.2.3 - Consistent navigation</a></li>
      <li><a href="#rr3.2.4">3.2.4 - Consistent identification</a></li>
    </ul>
    <h3>Input assistance</h3>
    <ul className="plain">
      <li><a href="#rr3.3.1">3.3.1 - Error identification</a></li>
      <li><a href="#rr3.3.2">3.3.2 - Labels or instructions</a></li>
      <li><a href="#rr3.3.3">3.3.3 - Error Suggestions</a></li>
      <li><a href="#rr3.3.4">3.3.4 - Error prevention</a></li>
    </ul>

    <h2>Readable</h2>

    <h3 id="rr3.1.x">3.1.x - Language of page and parts</h3>
    <p>The written language of the page must be identified in the code of the web page.</p>
    <p>Where multiple written languages are included on a single page, the individual written language must be indentified in the code of the web page.</p>
    <ul>
      <li><A href="https://www.w3.org/WAI/WCAG21/Understanding/language-of-page">Understanding Success Criterion 3.1.1: Language of Page</A></li>
      <li><A href="https://www.w3.org/WAI/WCAG21/Understanding/language-of-parts">Understanding Success Criterion 3.1.2: Language of Parts</A></li>
    </ul>
    <h4>Implementation guidance</h4>
    <p>Set the main language of the page in the &lt;HTML&gt; definition using the LANG attribute and the appropriate language code, for example en-GB.</p>
    <p>If the page uses more than one language, set the primary language here and the secondary languages at content level.</p>
    <h4>Testing with a manual code check</h4>
    <ul>
      <li>view the source code of the page, navigate to the HTML tag at the top of the source code and check that the LANG attribute is set to the correct language code</li>
      <li>if the page contains any blocks of content in a different language, right-click on that content with the mouse, select ‘Inspect’ and check that a lang attribute with the correct language value is included in the HTML element used to code the block of content</li>
    </ul>

    <h2>Predictable</h2>

    <h3 id="rr3.2.1">3.2.1 On Focus</h3>
    <p>When a keyboard user focuses on a control it must not cause a change of context, such as loading a new page/tab.</p>
    <p><A href="https://www.w3.org/WAI/WCAG21/Understanding/on-focus">Understanding Success Criterion 3.2.1: On Focus</A></p>
    <h4>Implementation guidance</h4>
    <p>Do not use focus events for navigation or form submission.</p>
    <p>Make sure components that respond to focus do not initiate a ‘focus trap’, where it is impossible or unclear how to navigate out of the component using the keyboard.</p>
    <h4>How to test with a manual check</h4>
    <ul>
      <li>ensure dropdown menus don’t trigger navigation as the user tabs between options</li>
      <li>check Javascript doesn’t trigger navigation when a user is merely leaving a form control</li>
      <li>check focus isn’t moved by script in unexpected ways when a user moves to a control</li>
    </ul>

    <h3 id="rr3.2.2">3.2.2 On Input</h3>
    <p>Changing the setting of any user interface component does not automatically cause a change of context unless the user has been advised of the behaviour before using the component</p>
    <p><A href="https://www.w3.org/WAI/WCAG21/Understanding/on-input">Understanding Success Criterion 3.2.2: On Input</A></p>
    <h4>Implementation guidance</h4>
    <p>Do not change the context automatically when a radio button or checkbox is checked/unchecked or an option in a &lt;select&gt; is chosen. Provide an explicit submit/go option.</p>
    <p>This also applies to custom controls like toggle buttons and similar controls.</p>
    <h4>How to test with a manual check</h4>
    <p>Ensure that no components trigger a change of context as a result of its settings being altered.</p>

    <h3 id="rr3.2.3">3.2.3 Consistent navigation</h3>
    <p>When ways to navigate content are repeated on multiple pages, they must be presented in a consistent manner.</p>
    <p><A href="https://www.w3.org/WAI/WCAG21/Understanding/consistent-navigation">Understanding Success Criterion 3.2.3: Consistent Navigation</A></p>
    <h4>Implementation guidance</h4>
    <p>Present repeated navigation components in a consistent manner. This includes:</p>
    <ul>
      <li>primary, secondary and footer navigation where used</li>
      <li>search functionality across an application</li>
      <li>skip links and their functionality (see 2.4.1)</li>
    </ul>
    <h4>How to test with a visual check</h4>
    <ul>
      <li>when testing multiple pages, check that navigational items are placed in the same location (e.g. the Search field  is located consistently in the top right of the site)</li>
      <li>check that navigation menus, secondary navigation and footer navigation is consistent across the site</li>
    </ul>

    <h3 id="rr3.2.4">3.2.4 Consistent identification</h3>
    <p>When features with the same functionality are used in multiple places, they must be identified in a consistent way.</p>
    <p><A href="https://www.w3.org/WAI/WCAG21/Understanding/consistent-identification">Understanding Success Criterion 3.2.4: Consistent Identification</A></p>
    <h4>Implementation guidance</h4>
    <p>Give icons the same alternative text every time you use them.</p>
    <p>Use consistent labelling for ‘Next’, ‘Previous’, and ‘Continue’ buttons, and for form fields with the same purpose.</p>
    <h4>How to test with a visual check</h4>
    <p>When testing multiple pages of a website, check that functional components such as navigation buttons, search fields and icons are consistently identified across the site for example, icons for document types are consistently labelled, search fields are labelled using ‘Search’</p>

    <h2>Input assistance</h2>

    <h3 id="rr3.3.1">3.3.1 Error identification</h3>
    <p>When an error occurs the user is informed what caused the error, and the error is described in text in an accessible way.</p>
    <p><A href="https://www.w3.org/WAI/WCAG21/Understanding/error-identification">Understanding Success Criterion 3.3.1: Error Identification</A></p>
    <h4>Implementation guidance</h4>
    <p>When errors are generated on form submission, an Error Summary should appear at the top of the form. Place keyboard and visual focus at the summary and alert screen reader users to the errors.</p>
    <p>You should also display errors inline with the form field, if possible between the form element label and the form element. Inline errors must be linked to the field they relate to using aria-describedby.</p>
    <p>Do not use colour by itself to identify errors.</p>
    <p>Errors should be user friendly and explain what has caused the error.</p>
    <h4>How to test with a visual check</h4>
    <p>Enter incorrect data into a form and check that error messages are displayed on the screen (either on the go or after submitting the form), and that they clearly describe the errors and provide suggestions on how to fix them.</p>
    <p>Ensure that an Error Summary is provided for ‘on submission’ errors.</p>
    <p>Check that it is easy to identify the fields in error in the form (note that the fields in error cannot be identified via colour alone).</p>
    <h4>How to test with JAWS/NVDA</h4>
    <p>Generate an error on a field with validation. When error messages displayed on submit, check that the screen reader is alerted to the error.</p>
    <p>Navigate to the field with an error and check that the inline message is read out by the screenreader</p>
    <h4>Helpful links</h4>
    <p><A href="/accessibility/error-messages">Home Office Design System - Error messages</A></p>

    <h3 id="rr3.3.2">3.3.2 Labels or instructions</h3>
    <p>When data must be entered in a specific format or in a particular way, clear instructions must be associated with the form field.</p>
    <p>Password fields should allow a user to view and check the entry.</p>
    <p><A href="https://www.w3.org/WAI/WCAG21/Understanding/labels-or-instructions">Understanding Success Criterion 3.3.2: Labels or Instructions</A></p>
    <h4>Implementation guidance</h4>
    <p>All form fields that expect user input/interaction must have a label.</p>
    <p>Do not rely on placeholder text as a label, as this disappears.</p>
    <p>Provide instructions for fields that require data to be entered in a specific format.</p>
    <p>Make sure instructions are properly associated with the relevant form field.</p>
    <h4>How to test with a visual check</h4>
    <p>Verify that all form fields/controls have a label, and that they don’t rely on placeholder text only to act as a label.</p>
    <p>If the page contains form fields, check that it is clear from their label what information is required from the users, including the expected format, and whether the field is mandatory.</p>

    <h3 id="rr3.3.3">3.3.3 Error Suggestions</h3>
    <p>When an error is detected, suggestions for correcting the issue must be provided unless the suggestion compromises security.</p>
    <p><A href="https://www.w3.org/WAI/WCAG21/Understanding/error-suggestion">Understanding Success Criterion 3.3.3: Error Suggestion</A></p>
    <h4>Implementation guidance</h4>
    <p>Error messages should include how to recover from the error. For example, if an incorrect date format has been used, the error message should include the correct format.</p>
    <p>Provide clear and contextual error messages to help users to recover from the error.</p>
    <p>A content designer should always write your error messages.</p>
    <h4>How to test with a manual code check</h4>
    <ul>
      <li>Force the error messages for fields to appear</li>
      <li>Check that the error messages support the user to input the right type of data and recover from the error.</li>
    </ul>

    <h3 id="rr3.3.4">3.3.4 Error prevention</h3>
    <p>All transactions should be reversible, or confirmation must be required before submission.</p>
    <p><A href="https://www.w3.org/WAI/WCAG21/Understanding/error-prevention-legal-financial-data">Understanding Success Criterion 3.3.4: Error Prevention (Legal, Financial, Data)</A></p>
    <h4>Implementation guidance</h4>
    <p>When data is submitted leading to a legal commitment, financial transaction, or an update to personal data, provide an interim page, alert or status message so the user can review, correct, and confirm the information they have entered.</p>
    <p>A ‘Check you answers’ pattern that allows users to review and verify the data they’ve entered before submission is recommended.</p>
    <p>Failing that, it must be possible to revert/cancel a submission or transaction.</p>
    <h4>How to test with a visual check</h4>
    <p>Check that you are given an option to review and modify any data you have entered, before submitting the form.</p>
    <p>If this isn’t available, check that it is possible to revert/cancel a submission or transaction.</p>

<div className="contact-us">
  <h2 className="govuk-heading-m">Get in touch</h2>
  <p>If you’ve got a question or suggestion share it on the Home Office DDaT Slack channel #ask-accessibility or email <A href="mailto:access@digital.homeoffice.gov.uk">access@digital.homeoffice.gov.uk</A>.</p>
</div>

    </div>
  </div>
);

export default Page;

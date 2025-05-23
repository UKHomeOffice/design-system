import { FC, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A } from '@not-govuk/components';
import config from '../../../../config';

import { SubsectionWrap, title as subsection } from '../';

const siteTitle = config.title;

export const title = 'Forms';
const longTitle = title;
const description = 'Accessibility guidance for forms';

const Page: FC<PageProps> = () => (
  <SubsectionWrap>
    <Helmet>
      <title>{title} - {siteTitle}</title>
      <meta name="description" content={description} />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={description} />
    </Helmet>
    <h1>
      <span className="caption">{subsection}</span>
      {longTitle}
    </h1>
    <p>Forms are one of the main ways that we gather information from users</p>
    <p>This can be anything from applying for an immigration product to entering details into a caseworking system.</p>

    <h2>Helping everyone</h2>
    <p>Good labelling and correctly implemented input fields help people fill out a form correctly and easily. This reduces errors which can cost money to address.</p>

    <h2>The basics</h2>
    <p>Do:</p>
    <ul>
      <li>make sure each field has a label</li>
      <li>include autocomplete on fields requesting information about the user</li>
      <li>add hint text to help people know what to put such as ‘31 03 1984’ for a date of birth field</li>
      <li>use fieldsets to group related fields such as checkboxes or radio buttons</li>
    </ul>

    <p>Do not:</p>
    <ul>
      <li>use placeholders</li>
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
          <td className="govuk-table__cell">Screen reader users need to know where they are in a form</td>
          <td className="govuk-table__cell">Correctly coded labels</td>
        </tr>

        <tr className="govuk-table__row">
          <td className="govuk-table__cell">Cognitive, language and learning disability, people with low digital literacy</td>
          <td className="govuk-table__cell">Can find giving answers in specific formats difficult</td>
          <td className="govuk-table__cell">Give information and example of expected formatting</td>
        </tr>

        <tr className="govuk-table__row">
          <td className="govuk-table__cell">Cognitive impairment or memory loss</td>
          <td className="govuk-table__cell">May find remembering information difficult</td>
          <td className="govuk-table__cell">Input fields are automatically filled in based on previous entry</td>
        </tr>

        <tr className="govuk-table__row">
          <td className="govuk-table__cell">Motor impaired</td>
          <td className="govuk-table__cell">Clicking or tapping on form fields can be difficult</td>
          <td className="govuk-table__cell">Good spacing between fields and correctly associated labels</td>
        </tr>

        <tr className="govuk-table__row">
          <td className="govuk-table__cell">Mobility impaired</td>
          <td className="govuk-table__cell">May find repeated manual input difficult</td>
          <td className="govuk-table__cell">Input fields are automatically filled in based on previous entry</td>
        </tr>

      </tbody>
    </table>

    <h2>Creating good form labels</h2>

    <h3>Attach the label to the form field</h3>

    <p>Labels need to be associated with their fields. They should always sit above the field and be spaced so that there is a visible connection. The label also needs to be attached to the form input in the HTML by using the <code>for</code> attribute on the label.</p>


    <pre><code>
      &lt;div class="govuk-form-group"&gt;<br />
      &lt;label class="govuk-label" for="event-name"&gt; What is the name of the event?&lt;/label&gt;<br />
      &lt;input class="govuk-input" id="event-name" name="event-name" type="text"&gt;<br />
      &lt;/div&gt;
    </code></pre>

    <p>This allows screen readers to read out the label when the field is focused and provide a larger click/tap area for users with motor impairments.</p>
    <p>Find out more about labelling controls in <A href="https://www.w3.org/WAI/tutorials/forms/labels/">WAI Web Accessibility Tutorials</A>.</p>

    <h3>Use autocomplete</h3>
    <p>Autocomplete allows the purpose of each input field that collects information about the user to be understood by browsers and assistive technologies. This allows for the required information to be filled in automatically.</p>
    <p>If a form field relates to the user’s personal information (from the set of input purposes listed at <A href="https://www.w3.org/TR/WCAG/#input-purposes">W3C Input Purposes for User Interface Components</A>), include an explicit autocomplete attribute with the relevant value.</p>

    <h3>Avoid using placeholders</h3>
    <p>Do not use placeholders that disappear when the field is being used - this makes it harder for people with memory issues and are not always read out by a screen reader. Using them instead of a label can make it hard for users to double check their answers. </p>

    <h3>Use hint text to help users</h3>
    <p>Hint text is additional information that helps users know what information to put in a field. Make sure it is short and to the point with examples of expected formats. Use <code>aria-describedby</code> to link the hint text to the field so that it is read out by screen readers. Do not add links to hint text as screen readers won’t pick this up. It is also important to make sure that the hint text passes colour contrast.</p>
    <p>There is more advice about good hint text in the <A href="https://design-system.service.gov.uk/components/text-input/#hint-text">GOV.UK Design System</A>.</p>

    <div className="example" style={{ marginBottom: "2em" }}>
      <div className="govuk-form-group">
        <label className="govuk-label" htmlFor="national-insurance-number">
          National Insurance number
        </label>
        <div id="national-insurance-number-hint" className="govuk-hint">
          It’s on your National Insurance card, benefit letter, payslip or P60. For example, ‘QQ 12 34 56 C’.
        </div>
        <input className="govuk-input govuk-input--width-10" id="national-insurance-number" name="national-insurance-number" type="text" spellCheck="false" aria-describedby="national-insurance-number-hint" />
      </div>
    </div>

    <h3>Group related fields together</h3>
    <p>When using a group of check boxes, radio buttons or related fields like an address, you should use a <code>fieldset</code> and <code>legend</code>. The <code>legend</code> serves as the label for the group, usually the question being asked. This makes sure that screen reader users hear both the label for the field and for the group.</p>
    <div className="example" style={{ marginBottom: "2em" }}>
      <div className="govuk-form-group">
        <fieldset className="govuk-fieldset">
          <legend className="govuk-fieldset__legend govuk-fieldset__legend--l">
            <h1 className="govuk-fieldset__heading">
              Where do you live?
            </h1>
          </legend>
          <div className="govuk-radios">
            <div className="govuk-radios__item">
              <input className="govuk-radios__input" id="where-do-you-live" name="where-do-you-live" type="radio" value="england" />
              <label className="govuk-label govuk-radios__label" htmlFor="where-do-you-live">
                England
              </label>
            </div>
            <div className="govuk-radios__item">
              <input className="govuk-radios__input" id="where-do-you-live-2" name="where-do-you-live" type="radio" value="scotland" />
              <label className="govuk-label govuk-radios__label" htmlFor="where-do-you-live-2">
                Scotland
              </label>
            </div>
            <div className="govuk-radios__item">
              <input className="govuk-radios__input" id="where-do-you-live-3" name="where-do-you-live" type="radio" value="wales" />
              <label className="govuk-label govuk-radios__label" htmlFor="where-do-you-live-3">
                Wales
              </label>
            </div>
            <div className="govuk-radios__item">
              <input className="govuk-radios__input" id="where-do-you-live-4" name="where-do-you-live" type="radio" value="northern-ireland" />
              <label className="govuk-label govuk-radios__label" htmlFor="where-do-you-live-4">
                Northern Ireland
              </label>
            </div>
          </div>

        </fieldset>
      </div>
    </div>

    <h2>Get in touch</h2>
    <p>If you’ve got a question or suggestion share it on the UK Home Office Slack channel #ask-accessibility or email <A href="mailto:accessibility@homeoffice.gov.uk">accessibility@homeoffice.gov.uk</A>.</p>
  </SubsectionWrap>
);

export default Page;

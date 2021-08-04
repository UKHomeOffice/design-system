import { FC, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A, NavigationMenu } from '@not-govuk/components';

const errorImage01 = require('../../../../assets/images/accessibility/error-message.png').default;
const errorImage02 = require('../../../../assets/images/accessibility/error-summary.png').default;

export const title = 'Error messages';
const description = 'Accessibility guidance for error messages';
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
        Error messages
      </h1>
      <p>When a user gets something wrong on a page, it's important they know about it so they can fix it.</p>
      <p>See the impact that <A href="https://www.w3.org/WAI/perspective-videos/notifications/"> notifications and feedback</A> have on user interaction.</p>


      <h2>Helping everyone</h2>
      <p>All users benefit from clear, descriptive error messages that are used consistently.</p>
      <p>Good error messages can stop people from breaking the law or missing a necesssary financial transaction -
      things that can have serious consequences.</p>
      <p>People are often stressed when they make an error, so using clear language and design for your error
      messaging is essential.</p>

      <h2>The basics</h2>
        <p>Do:</p>
        <ul>
        <li>provide an example of the format - input required when there are specific requirements </li>
        <li>allow the user to review, correct, and confirm the information they have entered </li>
        <li>present any error messages in text </li>
        <li>tell the user where the error occurred and what caused the error </li>
        <li>tell users how they can fix the error  </li>
        </ul>

        <p>Do not:</p>
        <ul>
        <li> use colour alone to show an error </li>
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
          <td className="govuk-table__cell">Blind</td>
          <td className="govuk-table__cell">Cannot see the visual elements of an error message</td>
          <td className="govuk-table__cell">Presenting errors in text, which will be announced by screen readers</td>
        </tr>

        <tr className="govuk-table__row">
        <td className="govuk-table__cell">Partially sighted</td>
        <td className="govuk-table__cell">Views the site with magnification software </td>
        <td className="govuk-table__cell">Making sure that error messages are close to the input field</td>
        </tr>

        <tr className="govuk-table__row">
        <td className="govuk-table__cell">Cognitive, language and learning disability </td>
        <td className="govuk-table__cell">May have difficulty understanding the meaning of icons and visual cues</td>
        <td className="govuk-table__cell">Presenting errors in text</td>
        </tr>

        <tr className="govuk-table__row">
        <td className="govuk-table__cell">Cognitive, language and learning disability, people with low digital literacy</td>
        <td className="govuk-table__cell">May be easily confused by unexpected things happening when there's an error</td>
        <td className="govuk-table__cell">Clear, descriptive error messages that work in a consistent way</td>
        </tr>

        <tr className="govuk-table__row">
        <td className="govuk-table__cell">Motor impairment</td>
        <td className="govuk-table__cell">Difficulty or cannot use a mouse so cannot put information in lots of times</td>
        <td className="govuk-table__cell">Provide input format requirements to avoid errors, allow users to pick from restricted values</td>
        </tr>

        <tr className="govuk-table__row">
        <td className="govuk-table__cell">People who may be more likely to make mistakes. People with lower digital literacy, non-English speakers</td>
        <td className="govuk-table__cell">Avoiding serious consequences</td>
        <td className="govuk-table__cell">Provide a way to review, correct, and confirm the information entered, provide guidance and support</td>
        </tr>
        </tbody>
      </table>

      <h2>Preventing errors in the first place</h2>

      <p>If the user needs to follow specific format input requirements, you should provide hint text by the form fields.</p>

      <p>These requirements include:</p>
      <ul>
      <li>not being empty </li>
      <li>minimum and maximum length</li>
      <li>characters that are required or prohibited</li>
      <li>if input must be a number, and if it must be a whole number</li>
      <li>range of numbers accepted</li>
      </ul>

      <p>You must allow a user to correct any financial or personal data they put in. One way of doing this is to ask them to review, correct and confirm before submitting their information.</p>
      <p>There is a <A href="https://design-system.service.gov.uk/patterns/check-answers/">check answers</A> pattern that allows users to do this.</p>
      <p>You must also allow the user to cancel a submission or transaction entirely.</p>

      <h2>Writing good error messages</h2>

<p>Think about error messages as early on as possible to allow interaction and content designers to take into account all accessibility requirements.</p>

<p>A content designer should always be involved in writing your error messages.</p>


<h3>Say what's gone wrong</h3>

<p>You should use simple language to explain the error and what has caused it.</p>

<div className="govuk-grid-row">
<div className="govuk-grid-column-two-thirds">
  <img src={errorImage01} alt="Screenshot highlighting an error message where details have not been submitted" className="image-examples" />
</div>
</div>
<br />

<p>The GOV.UK design system has an <A href="https://design-system.service.gov.uk/components/error-message/">error message</A> component and specific error patterns for asking users for things such as their National Insurance number.</p>
<p>Do not use colour alone to identify an error.</p>

<h3>Suggest how to fix it</h3>

<p>You must give suggestions for correcting the error, unless the suggestion would compromise security.</p>

<p>For example, if the user has put in an incorrect date format, you should include the correct format in the error message to help them. Do not simply repeat the hint text - you should provide additional guidance to supplement this.</p>

<p>Do not mix client -side and server -side validation as the two may conflict and cause issues. Inline validation that takes place on when a user moves away from the field may cause issues as people may prefer to fill fields out in a different order.</p>
<p>To check, generate some error messages by incorrectly filling in a form and check that these support the user to input the right type of data and recover from the error.</p>

<h3>Put your error messages in an obvious place </h3>

<p>If errors occur when the user submits a form, make sure an <A href="https://design-system.service.gov.uk/components/error-summary/">error summary</A> appears at the top of the form.
You should place keyboard and visual focus at the summary to alert screen reader users to the errors.</p>

<div className="govuk-grid-row">
<div className="govuk-grid-column-two-thirds">
  <img src={errorImage02} alt="Screenshot highlighting an error summary where details have not been submitted" className="image-examples" />
</div>
</div>
<br />

<p>You should also make the page title element change to include the word ‘error’ to highlight to a user that an error has occurred.</p>
<p>If possible you should also display errors in line with the form field, between the label and the form element. Ensure that the error message is programmatically associated with the input field so that the error is announced when a screen reader user navigates through fields with the tab key.</p>

<div className="govuk-grid-row">
<div className="govuk-grid-column-two-thirds">
  <img src={errorImage01} alt="Screenshot highlighting an error message where details have not been submitted" className="image-examples" />
</div>
</div>
<br />

<div className="contact-us">
  <h2 className="govuk-heading-m">Get in touch</h2>
  <p>If you’ve got a question or suggestion share it on the Home Office DDaT Slack channel #ask-accessibility or email <A href="mailto:access@digital.homeoffice.gov.uk">access@digital.homeoffice.gov.uk</A>.</p>
</div>

    </div>
  </div>
);

export default Page;

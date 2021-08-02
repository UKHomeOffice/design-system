import { FC, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A, NavigationMenu } from '@not-govuk/components';

export const title = 'Timeouts';
const description = 'Accessibility guidance for timeouts';
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
        <span className="govuk-caption-m" style={{marginBottom: "1em"}}>Providing alternatives</span>
          <NavigationMenu items={[
            {
              href: '/accessibility/audio-and-video',
              text: 'Audio and video'
            },
            {
              href: '/accessibility/images',
              text: 'Images'
            },
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
        Timeouts
      </h1>
      <p>Some interactions require the user to read content or complete an action within a certain time limit.</p>
      <p>Different people will take different lengths of time to complete a task and may not be able to do so if the option to turn off, adjust or extend the time limit is not available.</p>
      <p>Animated, moving or scrolling content that automatically advances or updates will also have an impact on certain people’s ability to read it.</p>

      <h2>Helping everyone</h2>
      <p>All users will benefit from knowing how long they have to complete an action. </p>
      <p>All users will benefit from being able to turn off, adjust or extend time limits, for instance if they need to double-check or find extra information to complete their task.
 </p>
 <h2>The basics</h2>
   <p>Do:</p>
   <ul>
   <li>inform the user of any time limits before they start, how these work, and what happens to data when there is a timeout</li>
   <li>allow the user to change the length of the timeout in the site settings</li>
   <li>allow the user to turn off, delay or extend the length of time available</li>
   <li>provide a way for the user to get back to where they were if they experience a timeout</li>
   <li>communicate timeout messages to all users in an accessible way</li>
   </ul>

   <p>Do not:</p>
   <ul>
   <li>redirect or refresh the page without telling the user</li>
   <li>implement a timeout that cannot be turned off, delayed or extended</li>
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
     <td className="govuk-table__cell">Need more time to understand page layouts, find information and operate controls<br /><br />May not be able to see timeout warning message</td>
     <td className="govuk-table__cell">More time when using a screen reader to navigate the page<br /><br />Accessible timeout messages</td>
   </tr>

   <tr className="govuk-table__row">
   <td className="govuk-table__cell">Partially sighted</td>
   <td className="govuk-table__cell">Need more time to locate and read information<br /><br />May not be able to see timeout warning message</td>
   <td className="govuk-table__cell">More time to explore the page and read content<br /><br />Accessible timeout messages</td>
   </tr>

   <tr className="govuk-table__row">
   <td className="govuk-table__cell">Motor impairment</td>
   <td className="govuk-table__cell">Need more time to react, type and interact with forms</td>
   <td className="govuk-table__cell">More time to interact with the page</td>
   </tr>

   <tr className="govuk-table__row">
   <td className="govuk-table__cell">Cognitive, language and learning disability</td>
   <td className="govuk-table__cell">Need more time to read and understand text</td>
   <td className="govuk-table__cell">More time to read and process the page</td>
   </tr>

   <tr className="govuk-table__row">
   <td className="govuk-table__cell">Deaf or has a hearing impairment</td>
   <td className="govuk-table__cell">Need more time to process auditory information in alternative formats, including via a sign language interpreter</td>
   <td className="govuk-table__cell">More time to process auditory information</td>
   </tr>

   <tr className="govuk-table__row">
   <td className="govuk-table__cell">Deaf sign language users, non-English speakers</td>
   <td className="govuk-table__cell">More time to read and understand text as English may not be primary way of communicating</td>
   <td className="govuk-table__cell">More time to read the page</td>
   </tr>
   </tbody>
 </table>

 <h2>Creating timeouts</h2>

<p>Consider whether a time limit is really necessary or whether the desired outcome can be achieved in another way.</p>
 <h3>Inform the user</h3>

 <p>Tell users about the timeout, and what the timeout limit is, at the start of the process.</p>
 <h3>Turn off, delay or extend the length of time available</h3>
 <p>Any process that happens after a certain amount of time without specific user interaction is a time limit.</p>

<p>You must make it possible for the user to turn the timeout off or delay it (either by putting it off for now or by extending by a specified amount of time) especially if this may result in a loss of data.</p>
<p>There is an exception for processes where extending the time limit would invalidate the activity -such as an exam or auction.</p>
<p>In cases where extending the time limit would invalidate the activity, it may be appropriate to give extra time as part of a reasonable adjustment. You should provide a way for an admin to allow a specific user to have extra time.</p>
<p>Where timeouts are implemented you should:</p>
<ul>
<li>inform the user of any time limits before they start, how these work, and what happens to data when there is a timeout</li>
<li>alert users when they are about to reach the timeout limit, preferably several minutes before</li>
<li>allow time limits to be extended, giving users at least 60 seconds to extend it</li>
<li>communicate any timeout warning messages to all users, and that a screen reader is alerted if a timeout has occurred</li>
</ul>

 <h3>Provide a way for the user to get back to where they were</h3>
 <p>When a user experiences a timeout, provide a way for them to return back to where they were before the timeout occurred. This may not be possible without the user having to re-enter data, though this should be minimised.</p>


<div className="contact-us">
  <h2 className="govuk-heading-m">Get in touch</h2>
  <p>If you’ve got a question or suggestion share it on the Home Office DDaT Slack channel #ask-accessibility or email <A href="mailto:access@digital.homeoffice.gov.uk">access@digital.homeoffice.gov.uk</A>.</p>
</div>

    </div>
  </div>
);

export default Page;

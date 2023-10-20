import { FC, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A, DateInput, Details, TextInput, Select } from '@not-govuk/components';
import { menu } from '../patterns';

export const title = 'Stop a service timing out';
const description = 'How to help users to stop a service from timing out';
const section = 'Patterns';
const subsection = 'Help users to';
const applyModalWindow = require('../../../../assets/images/patterns/time-out.png');

const Page: FC<PageProps> = ({ location }) => (
<div className="govuk-grid-row">
  <Helmet>
    <title>{subsection} {title.toLowerCase()} - Home Office Design System</title>
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
        <span className="caption">{subsection}</span>
        {title}
      </h1>

      <p className="govuk-body">Warn users that they are about to be timed out of a service and explain what happens after they are timed out.</p>
      <img src={applyModalWindow} className="image-examples" alt="An example of a modal dialog which warns users the service will time out." />
    
      <h2 className="govuk-heading-l"></h2>
      <h2 className="govuk-heading-l">When to use this pattern</h2>
      <p className="govuk-body">Use this pattern if your service automatically ends the user’s session after a period of inactivity.</p>
      <p className="govuk-body">Investigate the most appropriate session length for your service, based on the needs of users and security requirements.  </p>
      
      <h2 className="govuk-heading-l">When not to use this pattern</h2>
      <p className="govuk-body">Our research showed that modal dialogs (also known as pop-up windows) work well for timeout warnings.</p>
      <p className="govuk-body">However, avoid modal dialogs other than for timeouts, as they can be difficult to make accessible. Add the content to a new page instead. </p>
      
      
      
      <h2 className="govuk-heading-l">How it works</h2>

     
      
      

      <p className="govuk-body">Show the timeout warning to users when they have at least 2 minutes to take action before their session time runs out. This should be shown in a modal dialog.</p>
      <p className="govuk-body">The primary action button allows the user to continue with the journey. You can offer a secondary action if it is suitable for your service, such as signing out. </p>
      <p className="govuk-body">If the user does not take action within the time limit, redirect them to a 'you have been timed out' page which explains what has happened and gives options for how to continue.  </p>
      
  


      
      <p className="govuk-body">The timeout warning modal should:</p>
      <ul className="govuk-list govuk-list--bullet">
        <li>have a heading level 2</li>
        <li>tell the user whether their information or progress will be saved </li>
        <li>allow the user to close the modal and reset the session time by selecting the primary action button, using ‘Esc’ on the keyboard or using the browser back button</li>
      </ul>

      <h3 className="govuk-heading-m">If the user chooses to continue</h3>
      <p className="govuk-body">When a user selects to stay signed in:</p>
<ul className="govuk-list govuk-list--bullet">
  <li>close the warning and allow the user access to the page they were on </li>
  <li>return the keyboard focus to where it was before the warning appeared </li>
  <li>refresh the user’s session - you should not limit the number of times users can extend their session </li>

</ul>

<h3 className="govuk-heading-m">If the user runs out of time</h3>
<p className="govuk-body">When a user is timed out:</p>
<ul className="govuk-list govuk-list--bullet">
  <li>redirect the user to a timeout page  </li>
  <li>give them the option to sign back into the service  </li>
  <li>if they choose to sign back in and it makes sense to do so, take them back to the home page or journey they were on </li>

</ul>

<h3 className="govuk-heading-m">If the user chooses to sign out</h3>
<p className="govuk-body">When a user decides to sign out: </p>
<ul className="govuk-list govuk-list--bullet">
  <li>take the user to a confirmation page</li>
  <li>give them the option to sign back in </li>
</ul>


<h3 className="govuk-heading-m">The warning countdown </h3>     

<p className="govuk-body">As an example, the timeout warning could be triggered by 25 minutes of inactivity and show a 5-minute countdown.</p>
<p className="govuk-body">The time should count down in minutes until the last minute, when it should change to 20-second intervals, both on the modal and for screen reader alerts. </p>
<p className="govuk-body">Use <code>aria-live="polite"</code> for the countdown message so it will be announced as the timer is updated. For a screen reader to announce content updates, the content must be inserted into a live region element. </p>

<h3 className="govuk-heading-m">When the user is not signed into a service</h3>     
<p className="govuk-body">If a user is not signed in, tell them their progress will not be saved if the time runs out. </p>
<p className="govuk-body">If the user is timed out, consider the onwards journey.  </p>
<h3 className="govuk-heading-m"></h3>
<div className="app-example">
      <h2 className="govuk-heading-l">Your page will time out soon</h2>
        

        <p className="govuk-body">To protect your information, this page will time out in <strong>5 minutes.</strong></p>
        <p className="govuk-body">If that happens, your progress will not be saved.</p>

        <button className="govuk-button" data-module="govuk-button">
  Stay on this page
</button> 
      </div>
  
      
      <h2 className="govuk-heading-l">Accessibility</h2>
<p className="govuk-body">Give users an appropriate time to react to a timeout - use the <A href="https://design.homeoffice.gov.uk/accessibility/timeouts">accessibility timeouts and time limits guidance</A>.</p>
<p className="govuk-body">Ensure screen readers announce the remaining time - use <code>aria-live="polite"</code> so the hidden countdown does not interrupt other content being read out.</p>
  
  

<p className="govuk-body">When the modal dialog opens:</p>
<ul className="govuk-list govuk-list--bullet">
  <li>prevent the user from scrolling and interacting with the underlying page  </li>
  <li>add an overlay to the underlying page content to show users that they cannot interact with it </li>
  <li>consider the keyboard accessibility of interactive elements, <A href="https://design.homeoffice.gov.uk/accessibility/forms/keyboard">more guidance on keyboard accessibility</A></li>

</ul>

<p className="govuk-body">For a screen reader:</p>
<ul className="govuk-list govuk-list--bullet">
  <li>announce that a dialogue has opened</li>
  <li>read the modal content, including action buttons</li>
  <li>periodically announce how long user has left</li>
  <li>prevent screen reading software from reading out the underlying page</li>

</ul>


<p className="govuk-body">We followed the <A href="https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/examples/dialog/">W3C guidance on modals</A>.</p>
<p className="govuk-body">If your service uses this pattern, let us know of any insights you have on accessibility. </p>

      <h2 className="govuk-heading-l">Research</h2>
      <p className="govuk-body">This pattern is used by an internal reporting service for operational Border Force officers.</p>
      <ul className="govuk-list govuk-list--bullet">
        
       
      </ul>

      <h3 className="govuk-heading-m">Research findings</h3>
      <p className="govuk-body">We found that:</p>
      <ul className="govuk-list govuk-list--bullet">
        <li>users have high awareness of timeouts and timeout warnings as they are widely used </li>
        <li>users understand that timeouts are triggered by inactivity or a session time limit, and that the timeout is for security reasons  </li>
        <li>users know that they need to take action to extend their time and will usually quickly close the warning using the primary action button without reading the content </li>
        <li>warning users in advance that the service will time them out after a period of inactivity caused confusion and anxiety – generally they misunderstood it as having a time limit to complete the task</li>
        <li>even if timed out, users hoped any information they had input would be saved </li>
        <li>users expected to be taken back to the page they had been timed out from when they signed back in</li>
      </ul>


      <h3 className="govuk-heading-m">Accessibility research findings </h3>

      <p className="govuk-body">We conducted A/B research on a modal dialog and a warning page with 8 participants using assistive technology. The users were visually impaired or had dyslexia. We found that:</p>
      

      <ul className="govuk-list govuk-list--bullet">
        <li>on balance, users of assistive technology were alerted more quickly to the timeout on the modal dialog than the warning page </li>
        <li>users were clear how to remain signed in and that they would be signed out if they took no action </li>
        <li>on the warning page some screen readers read out the standard page elements before the timeout warning message, meaning it was not immediately clear users had received a timeout</li>
        <li>when the modal dialog was triggered on mobile devices, screen readers focused on the primary action button before reading the rest of the warning content - however, this was not a blocker for users </li>
        <li>counting down by minutes, and then 20 second intervals in the final minute, worked best for both sighted and non-sighted users </li>
        <li>having a secondary action (sign out) did not impact users’ understanding</li>
      </ul>

      <p className="govuk-body"> </p>


      <h2 className="govuk-heading-l">Help us improve this pattern</h2>
      <p className="govuk-body">This pattern needs improving. We need evidence about:</p>
      <ul className="govuk-list govuk-list--bullet">
        <li>how screen reader users experience modal dialogs on mobile devices </li>
        <li>how users with lower digital literacy navigate this pattern </li>
        <li>whether users expect to be able to close the modal any other way, for example clicking outside it</li>
      </ul>

      <p className="govuk-body">We need evidence from web analytics about how users interact with the modal, including: </p>
      <ul className="govuk-list govuk-list--bullet">
        <li>how many often the timeout modal dialog appears and at which point in the user journey</li>
        <li>how quickly it is closed </li>
        <li>methods of closing the modal (using ‘Esc’ on the keyboard or primary action button) </li>
        <li>what actions users take when the timeout appears (continue, sign out or do nothing)  </li>
        <li>how often users are timed out</li>
        <li>user behaviour after timing out or signing out</li>
      </ul>

      <p className="govuk-body">To contribute, add your thoughts and research findings to our <A href="https://github.com/UKHomeOffice/design-system/discussions/544">GitHub discussion</A>, or follow our <A href="/contribute">contribute guidance</A>.</p>

    

    </div>


</div>

);

export default Page;

import { FC, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A } from '@not-govuk/components';
import { menu } from '../accessibility'

const movingImage01 = require('../../../../assets/images/accessibility/moving-and-flashing-01.png');

export const title = 'Moving and flashing content';
const description = 'Accessibility guidance for moving and flashing content';
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
      Moving and flashing content
    </h1>
    <p>Moving, flashing, blinking, auto-scrolling or auto-updating content is used to increase visual interest or draw and maintain attention. However, these are not generally as accessible as static content.</p>

    <p>The following is an image of a carousel from the <A href="https://ukcop26.org/">COP26 website</A>.</p>

    <div className="govuk-grid-row">
    <div className="govuk-grid-column-three-quarters">
      <img src={movingImage01} alt="A carousel on the COP26 website" className="image-examples"/>
    </div>
    </div>
    <br />

    <p>Auto-scrolling and auto-updating content is content that changes based on pre-set time intervals and includes news, stock price updates and social media feeds.</p>
    <p>Blinking and flashing content is less common but may form part of videos or other animated content.</p>

    <h2>Helping everyone</h2>
    <p>Websites without moving, auto-updating or flashing content are easier for everyone to see and use, meaning that it is easier to concentrate on and interact with other parts of the page.</p>

    <h2>The basics</h2>
      <p>Do:</p>
      <ul>
        <li>avoid moving and auto-updating content if possible</li>
        <li>limit animations to five seconds</li>
        <li>provide a way to pause, stop or hide animated content, or control the frequency of updates</li>
      </ul>

      <p>Do not:</p>
      <ul>
        <li>use content that flashes more than three times a second</li>
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
          <td className="govuk-table__cell">Changes in auto-updating content may not be read out<br /><br />Changes may be announced too frequently, interrupting a screen reader user</td>
          <td className="govuk-table__cell">Correctly implemented auto-updating content using ARIA live regions<br /><br />Static context<br /><br />A way to pause, stop or hide auto-updating content, or control the frequency of updates</td>
        </tr>
        <tr className="govuk-table__row">
          <td className="govuk-table__cell">Cognitive, language and learning disability, dyslexic, attention deficit hyperactivity disorder (ADHD)</td>
          <td className="govuk-table__cell">Static content to be easy to read and not be a distraction</td>
          <td className="govuk-table__cell">Static content<br /><br />A way to pause, stop or hide animated and auto-updated content, or control the frequency of updates<br /><br />A warning if upcoming pages contain movement</td>
        </tr>
        <tr className="govuk-table__row">
          <td className="govuk-table__cell">Epilepsy</td>
          <td className="govuk-table__cell">Content that does not cause seizures</td>
          <td className="govuk-table__cell">Static content<br /><br />Content that does not flash more than three times a second</td>
        </tr>
        </tbody>
      </table>

      <h2>Using moving and auto-updating content</h2>
      <p>Consider whether moving, blinking, scrolling, auto-updating or flashing content is  necessary or whether the desired outcome can be achieved in another way.</p>
      <p>Moving content may be necessary if removing it changes the meaning or functionality of the content and when this cannot be achieved in any other way.</p>

      <h3>Moving content</h3>
      <p>If the content moves automatically, make sure that the movement lasts a maximum of 5 seconds. Otherwise, provide an option for users to pause, stop or hide this content. Make sure that the user is able to restart and unhide the content if desired.</p>
      <p>Content that is paused should resume where it was stopped, unless doing so would present misleading information when it is restarted.</p>
      <p>Ensure that pausing the content does not prevent the use of the rest of the page.</p>

      <h3>Auto-updating content</h3>
      <p>Ideally, content should not update automatically, as frequent changes may be distracting.</p>
      <p>If the content has to update, provide an option for users to pause, stop or hide this content, or control the frequency of the updating content.</p>

      <h3>Flashing content</h3>
      <p>Content must not flash more than three times a second.</p>

<div className="contact-us">
  <h2 className="govuk-heading-m">Get in touch</h2>
  <p>If you’ve got a question or suggestion share it on the Home Office DDaT Slack channel #ask-accessibility or email <A href="mailto:access@digital.homeoffice.gov.uk">access@digital.homeoffice.gov.uk</A>.</p>
</div>

    </div>
  </div>
);

export default Page;

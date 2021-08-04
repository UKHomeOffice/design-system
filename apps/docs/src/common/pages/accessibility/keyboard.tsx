import { FC, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A, NavigationMenu } from '@not-govuk/components';

export const title = 'Keyboard';
const description = 'Accessibility guidance for keyboard content';
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
        Keyboard basics
      </h1>
      <p>Most users navigate websites using a mouse to scroll through content and click on elements of a page. Some users are not able to use a mouse (for instance, due to mobility or visual impairments) or just prefer to use a keyboard.</p>

      <div className="govuk-grid-row">
      <div className="govuk-grid-column-two-thirds">
      </div>
      </div>
<br />

      <h2>Helping everyone</h2>
      <p>Keyboard navigation allows many people to navigate a page without the use of a mouse. They can still ‘click’ on things, scroll through content and interact with pages if they are built correctly.</p>
      <p>Some people just prefer to use keyboard controls because they can move through pages quicker that way. Making sure pages work with keyboard improves user journeys overall by making the interactive elements work for everyone.</p>

      <h2>The basics</h2>
        <p>Do:</p>
        <ul>
        <li>make sure all interactive elements can be reached by pressing the tab key</li>
        <li>make sure all interactive elements indicate clear focus when selected</li>
        <li>make sure a ‘skip to content’ link appears in one of the first few tab moves</li>
        <li>check that all interactive elements are focused in the order that you expect</li>
        <li>check that all interactive elements can be activated by keyboard</li>
        </ul>

        <p>Do not:</p>
        <ul>
        <li>disable focus indication</li>
        <li>trap keyboard users in content that stops them moving around the rest of the page</li>
        <li>use single character key shortcuts</li>
        </ul>
        <p>See more in <a href="https://www.w3.org/WAI/test-evaluate/preliminary/#interaction">WCAG basics easy keyboard checks</a>.</p>
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
          <td className="govuk-table__cell">Cannot see to use a mouse<br /><br />Keyboard controls and uses screen reader</td>
          <td className="govuk-table__cell">Skip to content links<br /><br />Character key shortcuts<br /><br /> Alternatives to pointer gestures</td>
        </tr>

        <tr className="govuk-table__row">
        <td className="govuk-table__cell">Partially sighted or low vision</td>
        <td className="govuk-table__cell">Cannot see content clearly at all times</td>
        <td className="govuk-table__cell">Clear focus indication for a user to see where they are on page<br /><br /> Character key shortcuts</td>
        </tr>

        <tr className="govuk-table__row">
        <td className="govuk-table__cell">Motor impaired</td>
        <td className="govuk-table__cell">Some fine motor control, not enough to use a mouse</td>
        <td className="govuk-table__cell">Clear focus indication for a user to see where they are on the page<br /><br />Alternatives to pointer gestures</td>
        </tr>

        <tr className="govuk-table__row">
        <td className="govuk-table__cell">Mobility impaired</td>
        <td className="govuk-table__cell">Uses speech-to-text controls such as Dragon</td>
        <td className="govuk-table__cell">Correct keyboard structure<br /><br />Alternatives to pointer gestures</td>
        </tr>

        </tbody>
      </table>

<h2>Creating good keyboard accessibility</h2>

<h3></h3>

<p>To create good accessibility via keyboard, you need to consider the following:</p>
<ul>
<li><a href="/accessibility/keyboard/tab-navigation">tab navigation</a></li>
<li><a href="/accessibility/keyboard/focus">focus</a></li>
<li><a href="/accessibility/keyboard/skip-to-content">‘skip to content’ links</a></li>
<li><a href="/accessibility/keyboard/character-key-shortcuts">character key shortcuts</a></li>
<li><a href="/accessibility/keyboard/pointer-gestures">pointer gestures</a></li>
</ul>


<div className="contact-us">
  <h2 className="govuk-heading-m">Get in touch</h2>
  <p>If you’ve got a question or suggestion share it on the Home Office DDaT Slack channel #ask-accessibility or email <A href="mailto:access@digital.homeoffice.gov.uk">access@digital.homeoffice.gov.uk</A>.</p>
</div>

    </div>
  </div>
);

export default Page;

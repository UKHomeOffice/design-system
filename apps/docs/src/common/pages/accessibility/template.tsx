import { FC, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A, NavigationMenu } from '@not-govuk/components';

const linksImage01 = require('../../../../assets/images/accessibility/links01.png').default;

export const title = 'xxx';
const description = 'Accessibility guidance for xxx content';
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
          href: '/accessibility/#',
          text: 'Headings - TBD'
        },
        {
          href: '/accessibility/links',
          text: 'Links'
        },
        {
          href: '/accessibility/#',
          text: 'Navigation - TBD'
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
            href: '/accessibility/#',
            text: 'Dynamic content - TBD'
          },
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
            href: '/accessibility/#',
            text: 'Forms - TBD'
          },
          {
            href: '/accessibility/#',
            text: 'Surprises - TBD'
          },
          {
            href: '/accessibility/#',
            text: 'Timeouts - TBD'
          }
        ]} />
      <span className="govuk-caption-m" style={{marginBottom: "1em"}}>Written content</span>
        <NavigationMenu items={[
          {
            href: '/accessibility/#',
            text: 'Inclusive language'
          },
          {
            href: '/accessibility/#',
            text: 'Readability - TBD'
          },
          {
            href: '/accessibility/#',
            text: 'Text and zoom - TBD'
          }
        ]} />
        <span className="govuk-caption-m" style={{marginBottom: "1em"}}>Providing alternatives</span>
          <NavigationMenu items={[
            {
              href: '/accessibility/audio-and-video',
              text: 'Audio and video'
            },
            {
              href: '/accessibility/#',
              text: 'Colour and contrast - TBD'
            },
            {
              href: '/accessibility/images',
              text: 'Images'
            },
            {
              href: '/accessibility/#',
              text: 'Moving content - TBD'
            }
          ]} />
          <span className="govuk-caption-m" style={{marginBottom: "1em"}}>Legal obligations</span>
            <NavigationMenu items={[
              {
                href: '/accessibility/#',
                text: 'Accessibility statement - TBD'
              },
              {
                href: '/accessibility/#',
                text: 'Disproportionate burden - TBD'
              },
              {
                href: '/accessibility/#',
                text: 'Equality act / PSED - TBD'
              },
              {
                href: '/accessibility/#',
                text: 'PSBAR - TBD'
              }
            ]} />
            <span className="govuk-caption-m" style={{marginBottom: "1em"}}>Accessible documents</span>
              <NavigationMenu items={[
                {
                  href: '/accessibility/#',
                  text: 'Accessible PDFs - TBD'
                },
                {
                  href: '/accessibility/#',
                  text: 'Emails - TBD'
                },
                {
                  href: '/accessibility/#',
                  text: 'Sharepoint - TBD'
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
        [Guidance title]
      </h1>
      <p>Body text.</p>

      <div className="govuk-grid-row">
      <div className="govuk-grid-column-two-thirds">
        <img src={linksImage01} alt="Screenshot from gov.uk site with black text on white background, except the link 'government departments' which is blue and underlined" className="image-examples" />
      </div>
      </div>
<br />

      <h2>Helping everyone</h2>
      <p>Body text.</p>

      <h2>The basics</h2>
        <p>Do:</p>
        <ul>
        <li> text </li>
        <li> text </li>
        <li> text </li>
        </ul>

        <p>Do not:</p>
        <ul>
        <li> text </li>
        <li> text </li>
        <li> text </li>
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
          <td className="govuk-table__cell">User content 1</td>
          <td className="govuk-table__cell">Access need content 1</td>
          <td className="govuk-table__cell">May find helpful content 1</td>
        </tr>

        <tr className="govuk-table__row">
        <td className="govuk-table__cell">User content 2</td>
        <td className="govuk-table__cell">Access need content 2</td>
        <td className="govuk-table__cell">May find helpful content 2</td>
        </tr>

        <tr className="govuk-table__row">
        <td className="govuk-table__cell">User content 3</td>
        <td className="govuk-table__cell">Access need content 3</td>
        <td className="govuk-table__cell">May find helpful content 3</td>
        </tr>

        <tr className="govuk-table__row">
        <td className="govuk-table__cell">User content 4</td>
        <td className="govuk-table__cell">Access need content 4</td>
        <td className="govuk-table__cell">May find helpful content 4</td>
        </tr>

        <tr className="govuk-table__row">
        <td className="govuk-table__cell">User content 5</td>
        <td className="govuk-table__cell">Access need content 5</td>
        <td className="govuk-table__cell">May find helpful content 5</td>
        </tr>
        </tbody>
      </table>

<h2>Creating good _____</h2>

<h3></h3>

<p>Link text needs to clearly show which page it will open when clicked.</p>



<h3>Make them visible</h3>

<p>Links should be easy to spot on a page and be clearly different from the surrounding text.</p>

<p>You should always use at least two differences when deciding how links will look. Most often this will be colour and underlining.</p>


<h3>Make them unsurprising</h3>

<p>Does the link do what the user expects when they click it?</p>

<p>It's important that, along with clear link text, a link takes the user to where they expect to go and does not do anything unexpected.</p>

<p>Normally a user expects a link to take them to a new page within the current browser window or tab that they're in.</p>


<div className="contact-us">
  <h2 className="govuk-heading-m">Get in touch</h2>
  <p>If you’ve got a question or suggestion share it on the Home Office DDaT Slack channel #ask-accessibility or email <A href="mailto:access@digital.homeoffice.gov.uk">access@digital.homeoffice.gov.uk</A>.</p>
</div>

    </div>
  </div>
);

export default Page;

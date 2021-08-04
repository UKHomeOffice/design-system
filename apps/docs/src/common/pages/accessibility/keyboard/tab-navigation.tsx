import { FC, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A, NavigationMenu } from '@not-govuk/components';

const tabImage01 = require('../../../../../assets/images/accessibility/tab-01.png').default;
const tabImage02 = require('../../../../../assets/images/accessibility/tab-02.png').default;

export const title = 'Tab navigation';
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
        Tab navigation
      </h1>
      <p>A quick and easy way to test a common use of keyboard navigation is to use the tab key on your keyboard.</p>
      <p>WebAIM has a useful list of <a href="https://webaim.org/techniques/keyboard/">common keyboard controls.</a></p>
      <div className="govuk-grid-row">
      <div className="govuk-grid-column-one-quarter">
        <img src={tabImage01} alt="Image of tab key" className="image-examples" />
      </div>
      </div>
      <br />
      <p>By pressing this key, a user moves down the page to the next interactive element. In reverse, pressing ‘Shift+Tab’ the user moves backwards up the page to the previous interactive element.</p>
      <div className="govuk-grid-row">
      <div className="govuk-grid-column-two-thirds">
      </div>
      </div>
<br />

      <h2>Interactive elements</h2>
      <p>Interactive elements are anything on the page that a user can interact with. This could be a link or button, an image to be expanded, a form input field, calendar or any number of other things.</p>
      <p>It's important that every interactive element on a page is accessible by keyboard. You can check this by looking out for the focus indication, or if focus indication is not present you can also try and confirm if an element is accessible by the keyboard by looking in the bottom left of your screen.</p>
      <div className="govuk-grid-row">
      <div className="govuk-grid-column-three-quarters">
        <img src={tabImage02} alt="Screenshot of GOV.UK - https://www.gov.uk/guidance/travel-advice-novel-coronavirus" className="image-examples" />
      </div>
      </div>
      <br />
      <p>The link information found in the bottom left corner can give you an idea of whether the element is selected – for instance in this image of GOV.UK, you can see where the link would take you to.</p>
      <p>Focusing on an interactive elements should not initiate a change such as submitting a form or changing focus to another interactive component.</p>
      <p>Interacting with an element should not automatically move a user to another page or open a popup, unless the user has been informed beforehand. Instead provide a submit to perform an action.</p>
      <p>Sometimes you can get stuck in elements such as carousel content or social media widgets. When this happens and you cannot move out of an element with tab, first try using the esc key. If you continue to be stuck, this is a fault and is known as getting caught in a <a href="https://www.w3.org/WAI/WCAG21/Understanding/no-keyboard-trap.html">keyboard trap</a>.</p>



<div className="contact-us">
  <h2 className="govuk-heading-m">Get in touch</h2>
  <p>If you’ve got a question or suggestion share it on the Home Office DDaT Slack channel #ask-accessibility or email <A href="mailto:access@digital.homeoffice.gov.uk">access@digital.homeoffice.gov.uk</A>.</p>
</div>

    </div>
  </div>
);

export default Page;

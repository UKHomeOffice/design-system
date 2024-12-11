import { FC, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A } from '@not-govuk/components';
import { menu } from '../../accessibility'

export const title = 'Tab navigation';
const description = 'Accessibility guidance for keyboard content';
export const section = 'Accessibility';

const tabImage01 = require('../../../../../assets/images/accessibility/tab-01.png');
const tabImage02 = require('../../../../../assets/images/accessibility/tab-02.png');

const Page: FC<PageProps> = () => (
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
        Tab navigation
      </h1>
      <p>A quick and easy way to test a common use of keyboard navigation is to use the tab key on your keyboard.</p>
      <p>WebAIM has a useful list of <A href="https://webaim.org/techniques/keyboard/">common keyboard controls</A>.</p>
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
      <p>It’s important that every interactive element on a page is accessible by keyboard. You can check this by looking out for the focus indication, or if focus indication is not present you can also try and confirm if an element is accessible by the keyboard by looking in the bottom left of your screen.</p>
      <div className="govuk-grid-row">
      <div className="govuk-grid-column-three-quarters">
        <img src={tabImage02} alt="Screenshot of GOV.UK - https://www.gov.uk/guidance/travel-advice-novel-coronavirus" className="image-examples" />
      </div>
      </div>
      <br />
      <p>The link information found in the bottom left corner can give you an idea of whether the element is selected – for instance in this image of GOV.UK, you can see where the link would take you to.</p>
      <p>Focusing on an interactive elements should not initiate a change such as submitting a form or changing focus to another interactive component.</p>
      <p>Interacting with an element should not automatically move a user to another page or open a popup, unless the user has been informed beforehand. Instead provide a submit to perform an action.</p>
      <p>Sometimes you can get stuck in elements such as carousel content or social media widgets. When this happens and you cannot move out of an element with tab, first try using the esc key. If you continue to be stuck, this is a fault and is known as getting caught in a <A href="https://www.w3.org/WAI/WCAG21/Understanding/no-keyboard-trap.html">keyboard trap</A>.</p>

      <h2>Get in touch</h2>
      <p>If you’ve got a question or suggestion share it on the UK Home Office Slack channel #ask-accessibility or email <A href="mailto:accessibility@homeoffice.gov.uk">accessibility@homeoffice.gov.uk</A>.</p>

    </div>
  </div>
);

export default Page;

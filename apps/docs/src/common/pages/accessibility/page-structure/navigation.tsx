import { FC, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A } from '@not-govuk/components';
import config from '../../../config';

import { SubsectionWrap, title as subsection } from './';

const siteTitle = config.title;

export const title = 'Navigation';
const longTitle = title;
const description = 'Accessibility guidance for page navigation';
export const section = 'Accessibility';

const navigationImage01 = require('../../../../../assets/images/accessibility/navigation-01.png');
const navigationImage03 = require('../../../../../assets/images/accessibility/navigation-03.png');

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
    <p>‘Navigation’ describes all the ways a user can find their way around a page or a service, from top menus, to footers, to clear structure and headings.</p>
    <p>Even if a user reaches your site through a search engine, they will usually rely on internal navigation to:</p>
    <ul>
      <li>find the exact content they’re looking for</li>
      <li>understand where they are within their journey</li>
    </ul>

    <div className="govuk-grid-row">
      <div className="govuk-grid-column-two-thirds">
        <img src={navigationImage01} alt="Welcome to GOV.UK homepage showing main navigation" className="image-examples" />
      </div>
    </div>
    <br />

    <h2>Helping everyone</h2>
    <p>Clear signposting makes the user’s journey through a service much smoother for everyone - and the more complicated a service is, the more important this is.</p>
    <p>With multiple ways to navigate, users are free to choose the way that works best for them, whether this is through a standard navigation menu, a search option, or some of the built-in screen reader functions that help users find their way around a page.</p>

    <h2>The basics</h2>
    <p>Do:</p>
    <ul>
      <li>provide multiple navigation options where possible</li>
      <li>make sure all link text is clear </li>
      <li>be consistent with the navigation elements from page to page, both in terms of order and placement</li>
    </ul>

    <p>Do not:</p>
    <ul>
      <li>assume that your users will all navigate the site in the same way</li>
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
          <td className="govuk-table__cell">Partially sighted</td>
          <td className="govuk-table__cell">Can only see a small part of the page at a time, because of zoom application or visual disturbance</td>
          <td className="govuk-table__cell">Controls that are easy to find when high magnification only shows a small part of a page</td>
        </tr>

        <tr className="govuk-table__row">
          <td className="govuk-table__cell">Motor impaired</td>
          <td className="govuk-table__cell">Interacts by voice and minimises use of keyboard or mouse</td>
          <td className="govuk-table__cell">A search function that is easier than tabbing through a long navigation menu</td>
        </tr>

        <tr className="govuk-table__row">
          <td className="govuk-table__cell">Cognitive or emotional issues, or vulnerable demographic</td>
          <td className="govuk-table__cell">May be anxious when filling out official forms</td>
          <td className="govuk-table__cell">Clear indicators of where they are in a journey and how many steps are left</td>
        </tr>

      </tbody>
    </table>

    <h2>Creating good navigation</h2>
    <h3>Multiple ways to navigate</h3>
    <p>Everyone has their own favourite method for navigating around a site. For example, some users prefer a search function, while others prefer navigation links, breadcrumbs or a site map. So, it’s important to provide at least two of these options to help users navigate your site in a way that’s most comfortable for them.</p>

    <h3>Be consistent</h3>
    <p>Users with some visual or cognitive issues can become very confused if your navigation looks different from one page to another. Keep your navigation elements in the same place across your site and use the same wording for navigation links (such as ‘Continue’ or ‘Next’).</p>

    <h3>Let users know where they are</h3>
    <p>A <A href="https://design-system.service.gov.uk/components/breadcrumbs/">breadcrumb trail</A> can help users orient themselves within a site and increase their confidence that they are accessing the right information.</p>

    <div className="example" style={{ marginBottom: "2em" }}>
      <div className="govuk-breadcrumbs">
        <ol className="govuk-breadcrumbs__list">
          <li className="govuk-breadcrumbs__list-item">
            <A className="govuk-breadcrumbs__link" href="#">Home</A>
          </li>
          <li className="govuk-breadcrumbs__list-item">
            <A className="govuk-breadcrumbs__link" href="#">Passports, travel and living abroad</A>
          </li>
          <li className="govuk-breadcrumbs__list-item">
            <A className="govuk-breadcrumbs__link" href="#">Travel abroad</A>
          </li>
        </ol>
      </div>
    </div>

    <p>For a linear journey, it’s good practice to show a step indicator or progress bar, so a user can gauge how far they are through the process. Make sure that this is also intelligible to screen readers – in the below example, the screen reader reads the list and announces ‘Current step’ for the step the user is on.</p>
    <div className="govuk-grid-row">
      <div className="govuk-grid-column-three-quarters">
        <img src={navigationImage03} alt="An example of a progress indicator - the steps are listed and the current step is highlighted" className="image-examples" />
      </div>
    </div>
    <br />
    <p>If your service has a linear journey that must be completed in a certain order, you don’t need to provide an extra navigation method to reach the later steps – though it’s still good practice to let users step backwards to review screens they’ve already completed.</p>
    <h3>Dynamic menu controls</h3>
    <p>Dropdown menus can sometimes be hard for users to navigate. If you need to use these, be careful that they can be opened and closed without a mouse (for example, they don’t only expand on mouse-hover, and you can access all the content or dismiss the menu with keyboard controls).</p>
    <p>Never use navigation links that operate ‘on focus’ – keyboard-only users will tab through a list of links to find the one they need, and on-focus operation (which takes them to a new page at every tab stop) will prevent them from using your navigation altogether.
      The more content in your main navigation, the more important it is to include a <A href="https://design.homeoffice.gov.uk/accessibility/keyboard/skip-to-content">skip link</A> that lets users quickly move past it if they need to.</p>

    <h2>Get in touch</h2>
    <p>If you’ve got a question or suggestion share it on the UK Home Office Slack channel #ask-accessibility or email <A href="mailto:accessibility@homeoffice.gov.uk">accessibility@homeoffice.gov.uk</A>.</p>
  </SubsectionWrap>
);

export default Page;

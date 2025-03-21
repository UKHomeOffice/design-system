import { FC, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A } from '@not-govuk/components';
import config from '../../../config';

import { SubsectionWrap, title as subsection } from './';

const siteTitle = config.title;

export const title = 'Colour and contrast';
const longTitle = title;
const description = 'Accessibility guidance for colour and contrast';
export const section = 'Accessibility';

const linksImage01 = require('../../../../../assets/images/accessibility/colour-contrast.png');

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
    <p>Many users rely on colour and contrast being clearly visible to consume content or move through our services.</p>
    <p>It is important contrast is clear, though there also should be alternatives for those who cannot see clearly.</p>
    <div className="govuk-grid-row">
      <div className="govuk-grid-column-one-half">
        <div className="colour-swatch">
          <span className="app-swatch" style={{ backgroundColor: "#0b0c0c" }}>
            <span style={{ color: "#ffffff" }}>A</span>
          </span>
          <div className="colour-info">
            Background: #0b0c0c<br />
            Foreground: #ffffff
          </div>
        </div>
        <div className="colour-swatch">
          <span className="app-swatch" style={{ backgroundColor: "#ffffff", border: "1px solid #cbcbcb" }}>
            <span style={{ color: "#0b0c0c" }}>A</span>
          </span>
          <div className="colour-info">
            Background: #ffffff<br />
            Foreground: #0b0c0c
          </div>
        </div>
      </div>
    </div>
    <br />
    <p>See the <A href="https://design.homeoffice.gov.uk/styles/colour">colour page</A> for the full list of accessible text and background combinations.</p>
    <p>See the impact that <A href="https://www.w3.org/WAI/perspective-videos/contrast/">colours with good contrast</A> have on user interaction, or read about <A href="https://www.w3.org/WAI/people-use-web/user-stories/#shopper">Lee, an online shopper with color blindness</A>.</p>

    <h2>Helping everyone</h2>
    <p>When designing websites, it is important that you use sensible colours that make text, focus indication and other parts of your website easy to see.</p>
    <p>The colours you choose for your websites can affect a number of users and make content hard for them to consume or move through.</p>
    <p>If websites do not have clear contrast, it can make them completely unusable for some users with visual impairments or colour blindness. It can also introduce eye strain or other issues in other users.</p>
    <p>While tools exist for users to change the contrast on their own, sometimes these don’t work. This could be because we have forcibly set the colour, or there may be other compatibility issues. Because of this it is always best to use approved <A href="https://design.homeoffice.gov.uk/styles/colour"> colours</A> as standard.</p>

    <h2>The basics</h2>
    <p>Do:</p>
    <ul>
      <li>check your website colour scheme for contrast standards (standard text 4.5:1, everything else 3:1)</li>
      <li>make sure your website works in Windows high-contrast mode</li>
      <li>check that you can clearly see where focus indication is on a screen at a glance</li>
      <li>ensure that users can change colours with Operating System (OS) or browser settings</li>
      <li>use standard GOV.UK components</li>
    </ul>

    <p>Do not:</p>
    <ul>
      <li>use only colour to demonstrate information</li>
      <li>use only faded or other colours for greyed out (non-active) content without other identifiers</li>
      <li>use text colours that are hard to see against a background</li>
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
          <td className="govuk-table__cell">Blind </td>
          <td className="govuk-table__cell">Alternative instructions to visual content</td>
          <td className="govuk-table__cell">Not using colour only to provide information<br /><br />Text-based instructions</td>
        </tr>

        <tr className="govuk-table__row">
          <td className="govuk-table__cell">Colour-blind or partially sighted</td>
          <td className="govuk-table__cell">Colour selections can make text difficult to see or cause eye strain or migraines</td>
          <td className="govuk-table__cell">High-contrast mode<br /><br />Adjustable colour settings<br /><br />Clearly visible elements including text and focus indication  </td>
        </tr>
      </tbody>
    </table>

    <h2>Creating good content with colours and contrast</h2>

    <h3>Measuring contrast</h3>
    <p>We measure how visually distinct a colour is by looking at the contrast ratio with surrounding elements.</p>
    <p>For example, text would have the contrast ratio measured against the background colour.</p>

    <h3>Text contrast</h3>
    <p>The contrast requirement for text is 4.5:1 against the surrounding background colour.</p>
    <p>For most GOV.UK services we use black text against a white background. This combination has a contrast ratio of 21:1, easily meeting the requirements.</p>
    <p>Alternatively, bad contrast may be something like the following.</p>
    <div className="example" style={{ marginBottom: "2em" }}>
      <p style={{ color: "yellow" }}>Bad example text in yellow. Have you ever seen slides in a presentation where the speaker has yellow text on a white background? It makes it almost impossible to see for many users.</p>
    </div>
    <p>For large text (above 18pt font size), or non-text elements such as focus indication or icons, the contrast requirement is 3:1.</p>

    <h3>How users can change their contrast settings</h3>
    <p>There are tools which allow users to change the colour settings on their computer to make things easier to read.</p>
    <p>One such set of tools that can help you test what users are seeing are the ‘colour filters’ and ‘high contrast’ options within the <A href="https://support.microsoft.com/en-us/windows/make-your-pc-easier-to-use-1c313f8f-8bc3-4e1c-c1c8-efe173a94845">Windows Ease of Access Centre</A>. These controls are often used by those with colour blindness, visual impairments or eye strain issues to make content easier to see.</p>

    <h4>Colour filters</h4>
    <p>Colour filters are a great range of options that allow users to tailor the colours they see on their screen. This can address issues related to colour blindness, such as turning everything greyscale, or address specific issues such as red-green colour blindness.</p>

    <h4>High contrast</h4>
    <p>High-contrast modes are a more significant visual change which often invert text and background colour – for instance, changing black text on a white background to white text on a black background with different distinct colours for links and other elements.</p>
    <p>This not only makes text more readable for many but the switch to a ‘dark theme’ also reduces brightness, which can reduce stress on the eye.</p>

    <h3>Checking your colour contrast</h3>
    <p>The <A href="https://webaim.org/resources/contrastchecker/">WebAIM contrast checker</A> is a web page where you can input two colours that you are planning to use and it will tell you the contrast ratio.</p>

    <div className="govuk-grid-row">
      <div className="govuk-grid-column-two-thirds">
        <img src={linksImage01} alt="Screenshot from the WebAIM Contrast Checker tool" className="image-examples" />
      </div>
    </div>
    <br />

    <p>Most automated testing tools such as Microsoft <A href="https://accessibilityinsights.io/">Accessibility Insights</A> check for contrast issues. These can be useful for quick checks on a page, but do not only rely on automated tools – you should manually check contrast ratios as well.</p>

    <h2>Get in touch</h2>
    <p>If you’ve got a question or suggestion share it on the UK Home Office Slack channel #ask-accessibility or email <A href="mailto:accessibility@homeoffice.gov.uk">accessibility@homeoffice.gov.uk</A>.</p>
  </SubsectionWrap>
);

export default Page;

import { FC, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A } from '@not-govuk/components';
import config from '../../../../config';

import { SubsectionWrap, title as subsection } from '../';
import { title as subsubsection } from './';

const siteTitle = config.title;

export const title = 'Character key shortcuts';
const longTitle = title;
const description = 'Accessibility guidance for keyboard content';

const Page: FC<PageProps> = () => (
  <SubsectionWrap>
    <Helmet>
      <title>{title} - {siteTitle}</title>
      <meta name="description" content={description} />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={description} />
    </Helmet>
    <h1>
      <span className="caption">{subsubsection}</span>
      {longTitle}
    </h1>
    <p>Many websites and services offer character key shortcuts to help users navigate around a page or control page elements more easily.</p>
    <p>For example, some forms may have the character key shortcut Ctrl+S to save the current progress on the form so the user can come back later, or a web page may allow users to quickly open a menu by pressing Alt+F. Though there are reasons why it is beneficial to have these character key shortcuts available to users, these can also cause problems when not implemented correctly.</p>
    <p>Single character key shortcuts can lead to errors, whether this is through mis-clicks or misunderstanding by assistive technology. In the case of those that use speech-to-text software, a word misunderstood by the software could trigger shortcut actions that the user did not want to happen. Because of this it is far better to have character key shortcuts that combine two or more key presses to initiate an action.</p>
    <p>If you have single character key shortcuts enabled on your website or service, you should:</p>
    <ul>
      <li>look into remapping them so that they use two or more concurrent key presses OR</li>
      <li>disable the character key shortcuts if they do not bring value to the content</li>
    </ul>
    <p>Find out more about WCAG success criteria on <A href="https://www.w3.org/WAI/WCAG21/Understanding/character-key-shortcuts.html">character key shortcuts</A>.</p>

    <h2>Get in touch</h2>
    <p>If you’ve got a question or suggestion share it on the UK Home Office Slack channel #ask-accessibility or email <A href="mailto:accessibility@homeoffice.gov.uk">accessibility@homeoffice.gov.uk</A>.</p>
  </SubsectionWrap>
);

export default Page;

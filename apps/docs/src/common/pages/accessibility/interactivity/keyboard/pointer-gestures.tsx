import { FC, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A } from '@not-govuk/components';
import config from '../../../../config';

import { SubsectionWrap, title as subsection } from '../';
import { title as subsubsection } from './';

const siteTitle = config.title;

export const title = 'Pointer gestures';
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
    <p>Pointer gestures or path-based gestures are common elements of a website. You may be familiar with elements such as volume sliders, image carousels and swiping content. Each of these elements are controlled by clicking and dragging the content with a mouse in a given direction or a long a given path.</p>
    <p>These types of elements must also be accessible to keyboard users. If you see pointer gesture elements on a website you should try getting to it with keyboard controls and then see if you can control it by using the arrow keys, or other character controls if required.</p>
    <p>Find out more about WCAG success criteria on <A href="https://www.w3.org/WAI/WCAG21/Understanding/pointer-gestures.html">pointer gestures</A>.</p>

    <h2>Get in touch</h2>
    <p>If you’ve got a question or suggestion share it on the UK Home Office Slack channel #ask-accessibility or email <A href="mailto:accessibility@homeoffice.gov.uk">accessibility@homeoffice.gov.uk</A>.</p>
  </SubsectionWrap>
);

export default Page;

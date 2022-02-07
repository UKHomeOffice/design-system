import { FC, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A } from '@not-govuk/components';
import { menu } from '../../accessibility'

export const title = 'Pointer gestures';
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
      {menu}
    </div>
    <div className="govuk-grid-column-three-quarters">
      <h1>
        <span className="caption">Accessibility</span>
        Pointer gestures
      </h1>
      <p>Pointer gestures or path-based gestures are common elements of a website. You may be familiar with elements such as volume sliders, image carousels and swiping content. Each of these elements are controlled by clicking and dragging the content with a mouse in a given direction or a long a given path.</p>
      <p>These types of elements must also be accessible to keyboard users. If you see pointer gesture elements on a website you should try getting to it with keyboard controls and then see if you can control it by using the arrow keys, or other character controls if required.</p>
      <p>Find out more about WCAG success criteria on <a href="https://www.w3.org/WAI/WCAG21/Understanding/pointer-gestures.html">pointer gestures</a>.</p>

<div className="contact-us">
  <h2 className="govuk-heading-m">Get in touch</h2>
  <p>If you’ve got a question or suggestion share it on the Home Office DDaT Slack channel #ask-accessibility or email <A href="mailto:access@digital.homeoffice.gov.uk">access@digital.homeoffice.gov.uk</A>.</p>
</div>

    </div>
  </div>
);

export default Page;

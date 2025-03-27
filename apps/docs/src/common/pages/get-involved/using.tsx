import { FC, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A } from '@not-govuk/components';
import { menu } from '../get-involved';

import { PageWrap } from '../';

export const title = 'Using the design system';
const description = 'How to use the Home Office Design System'
const section = 'Get involved';

const Page: FC<PageProps> = () => (
  <PageWrap>
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
        <span className="caption">{section}</span>
        {title}
      </h1>

          <p>Components and some patterns come with code to make it easy for you to use them in your project. We currently provide code snippets for both old versions of the prototype kit (versions 6 and older) and new versions (versions 7.0 and newer).</p>
          <p>We also provide a <A href="https://github.com/UKHomeOffice/ho-style-prototype-kit">version of the prototype kit with the Home Office design language</A> for Home Office teams working on services for government users.</p>

          <h2 className="govuk-heading-m">Using components in the prototype kit</h2>
          <p>Use the HTML we provide to use components in your prototypes. Simple copy the snippets into your prototype pages. Some components also need CSS and JavaScript to make them work. If this is the case, we also provide the code.</p>


          <h2 className="govuk-heading-m">Using Figma to create prototypes</h2>
          <p>If you are using Figma to design, we provide a <A href="https://www.figma.com/file/4uhWNtmvpZq7NF8mLlsXFS/Home-Office-Design-Library?node-id=4%3A76">Figma file</A> with all our patterns and components included. Please consider feeding back any developments or changes you make to the <A href="/get-involved/working">working group.</A></p>

    </div>
  </div>
  </PageWrap>
);

export default Page;

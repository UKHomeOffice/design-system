import { FC, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A } from '@not-govuk/components';
import { menu } from '../contribute';

export const title = 'Propose a pattern or component';
const description = 'How to suggest new patterns or components to be added to the Home Office design system'
const section = 'Contribute';

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
        <span className="caption">{section}</span>
        {title}
      </h1>
      <p>Before a pattern or component is proposed, there must be a <A href="https://github.com/UKHomeOffice/design-system/discussions">github discussion</A> and it must be:</p>
      <ul>
        <li>useful</li>
        <li>unique</li>
        <li>usable</li>
        <li>consistent</li>
        <li>versatile</li>
      </ul>

      <p>Then, the Design System Working Group creates a <A href="https://github.com/UKHomeOffice/design-system/issues">github issue</A>.</p>

      <p>The issue is where we discuss the details of the:</p>
      <ul>
        <li>code in the implementation</li>
        <li>guidance of when and how to use</li>
      </ul>
    </div>
  </div>
);

export default Page;

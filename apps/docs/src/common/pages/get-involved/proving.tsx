import { FC, Fragment, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A, NavigationMenu } from '@not-govuk/components';

export const title = 'Proving a pattern or component works';
const description = 'The process a new pattern or component must go through.'
const section = 'Get involved';

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
      <NavigationMenu items={[
        {
          href: '/get-involved/working',
          text: 'Working group'
        },
        {
          href: '/get-involved/backlog',
          text: 'Backlog'
        },
        {
          href: '/get-involved/suggest',
          text: 'Suggest new ideas'
        },
        {
          href: '/get-involved/githubguide',
          text: 'Using GitHub to propose design system changes'
        },
        {
          href: '/get-involved/proving',
          text: 'Proving ideas work'
        },
        {
          href: '/get-involved/using',
          text: 'Using the system'
        }
      ]} />
    </div>
    <div className="govuk-grid-column-three-quarters">

      <h1>
        <span className="caption">{section}</span>
        {title}
      </h1>
          <p>The working group review new contributions. They may decide that something else meets the need better. If the working group agree that a pattern or component is needed, it will move through the following stages:</p>

          <h2 className="govuk-heading-m">Experimental</h2>
          <p>We've seen this problem in an area and it's being peer reviewed by the team and iterated upon. It may change a lot in Experimental. Teams are free to use it in their own prototypes. Please report back any research findings. It should not be used in production.</p>
          <p>Components and patterns in Experimental will be regularly reviewed by the working group.</p>

          <h2 className="govuk-heading-m">Recommended</h2>
          <p>We've seen this pattern or component work consistently in testing and are recommending its use. There will also be evidence of user research to support this.</p>
          <p>If you've found a user need and this pattern or component meets it, use this version. On occasion we may recommend a pattern or component due to the need for consistency.</p>
    </div>
  </div>
);

export default Page;

import { FC, Fragment, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A, NavigationMenu } from '@not-govuk/components';

export const menu = (
  <Fragment>
    <NavigationMenu items={[
          {
            href: '/contribute',
            text: 'Make a suggestion'
          },
          {
            href: '/contribute/discuss-on-github',
            text: 'Discuss on github'
          },
          {
            href: '/contribute/design-system-working-group',
            text: 'Join the working group'
          }
        ]} />
  </Fragment>
);

export const title = 'Contribute';
const description = 'How to get involved and contribute to the Home Office Design System'

const Page: FC<PageProps> = ({ location }) => (
  <div className="govuk-grid-row">
    <Helmet>
      <title>{title} - Home Office Design System</title>
      <meta name="description" content={description} />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={description} />
      <meta name="og:article:section" content={title} />
    </Helmet>
    <div className="govuk-grid-column-one-quarter">
      {menu}
    </div>
    <div className="govuk-grid-column-three-quarters">
    <h1 className="heading-section">How to make a suggestion or amend an existing pattern</h1>
    <p>Anyone can propose, develop or contribute to new patterns and components, or suggest improvements to existing ones.</p>
    <p>For example, you can:</p>
    <ul>
      <li>ask questions about a style, component or pattern</li>
      <li>answer questions from others</li>
      <li>share examples or demos of a component or pattern</li>
      <li>share research relating to a style, compontent or pattern</li>
    </ul>
    <h2>1. Check if there's already a discussion</h2>
    <p>If there's already a <a href="https://github.com/UKHomeOffice/design-system/discussions">github discussion</a>, you can:</p>
    <ul>
      <li>comment your thoughts and ideas</li>
      <li>add design screenshots</li>
      <li>provide high level research findings</li>
    </ul>
    <h2>2. Create a new discussion</h2>
    <p>If there isn't a discussion, <a href="https://github.com/UKHomeOffice/design-system/discussions/new">create a new github discussion</a>.</p>
    <p>For help, use our <a href="/contribute/discuss-on-github">github guide</a> or ask the <a href="/contribute/design-system-working-group">working group</a>.</p>
    <p>When discussing a proposal for a new component, try to explain why it should be included in our design system. If you can include screenshots and research findings.</p>
    <h2>3. Share the discussion</h2>
    <p>Talk about the pattern or compontent to the community.</p>
    <p>Share your discussion through slack, show and tells and community meetups.</p>
    <h2>4. Progress your discussion</h2>
    <p>The <a href="/contribute/design-system-working-group">design system working group</a> regularly assess discussions against the <a href="https://design-system.service.gov.uk/community/contribution-criteria/">GOV.UK design system contribute criteria</a>.</p>
    <p>Contact us <a href="mailto:design@digital.homeoffice.gov.uk">design@digital.homeoffice.gov.uk</a> if you'd like feedback on your discussion.</p>
  </div>
  </div>

);

export default Page;

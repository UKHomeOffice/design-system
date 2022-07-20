import { FC, Fragment, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A, NavigationMenu } from '@not-govuk/components';

export const menu = (
  <Fragment>
    <NavigationMenu items={[
          {
            href: '/contribute/discuss-on-github',
            text: 'Discuss on GitHub'
          },
          {
            href: '/contribute/design-system-working-group',
            text: 'Design system working group'
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
    <h1 className="heading-section">Contribute to the design system</h1>
    <p>Anyone can propose, develop or contribute to new patterns and components, or suggest improvements to existing ones.</p>
    <p>For example, you can:</p>
    <ul>
      <li>ask questions about a style, component or pattern</li>
      <li>answer questions from others</li>
      <li>share examples or demos of a component or pattern</li>
      <li>share research relating to a style, component or pattern</li>
    </ul>
    <h2>Make a suggestion</h2>
    <h3>1. Check if there's already a discussion</h3>
    <p><A href="https://github.com/UKHomeOffice/design-system/discussions">Check if there are any open discussions</A> about your suggestion on the design system GitHub.</p>
    <h3>2. Create a new discussion</h3>
    <p>If there is not a discussion, <A href="https://github.com/UKHomeOffice/design-system/discussions/new">start a new discussion</A> on GitHub. Select ‘ideas’ from the ‘select category’ list when starting to create the discussion.</p>
    <p>For help, use our <A href="/contribute/discuss-on-github">GitHub guide</A> or ask the <A href="/contribute/design-system-working-group">working group</A>.</p>
    <p>When discussing a proposal for a new component, try to explain why it should be included in our design system. If you can, include screenshots and research findings.</p>
    <h3>3. Share the discussion</h3>
    <p>Let the user-centred design and accessibility community know that you have posted a new discussion and ask their comments.</p>
    <p>Share your discussion through Slack, show and tells and community meetups.</p>
    <p>Consider giving your discussion topic a deadline of a few weeks.</p>
    <h3>4. Summarise the discussion</h3>
    <p>Use the comments to make a suggestion for an improvement or a new entry.</p>
    <p>Contact <A href="mailto:design@digital.homeoffice.gov.uk">design@digital.homeoffice.gov.uk</A> if you'd like feedback on your discussion or for the design system working group to review it.</p>
    <h3>5. Updating the design system</h3>
    <p>The <A href="/contribute/design-system-working-group">design system working group</A> regularly assess discussions using the <A href="https://design-system.service.gov.uk/community/contribution-criteria/">GOV.UK design system contribute criteria</A>.</p>
    <p>If the pattern or component is  ready to be published, the working group will then raise an issue and progress this work further.</p>
    <p>The working group will share updates in the user-centred design community email about proposal decisions and changes to the Home Office design system.</p>
  </div>
  </div>

);

export default Page;

import { FC, ReactNode, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A, NavigationMenu } from '@not-govuk/components';

import { Subsection } from '@hods/ucdm-subsection';
import config from '../../../config';

import { SectionWrap, title as section } from '../';

const siteTitle = config.title;

export const title = 'Contribute';
const longTitle = 'Contribute to the design system';
const description = 'How to get involved and contribute to the Home Office Design System'

export const SubsectionWrap: FC<{ children?: ReactNode }> = ({ children }) => (
  <SectionWrap>
    <Subsection title={title} side={
      <NavigationMenu items={[
        { href: '/design-system/contribute/discuss-on-github', text: 'Discuss on GitHub' },
        { href: '/design-system/contribute/working-group', text: 'Design system working group' }
      ]} />
    }>
      {children}
    </Subsection>
  </SectionWrap>
);

const Page: FC<PageProps> = () => (
  <SubsectionWrap>
    <Helmet>
      <title>{title} - {siteTitle}</title>
      <meta name="description" content={description} />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={description} />
    </Helmet>
    <h1>
      <span className="caption">{section}</span>
      {longTitle}
    </h1>
    <p>Anyone can contribute to the design system. For example, you can:</p>
    <ul>
      <li>ask questions about a style, component or pattern</li>
      <li>answer questions from others</li>
      <li>share an example use of a component or pattern</li>
      <li>share research relating to a style, component or pattern</li>
      <li>request an addition or improvement to the content style guide</li>
      <li>propose a new style, component or pattern</li>
    </ul>
    <h2>Make a suggestion</h2>
    <h3>1. Check if there's already a discussion</h3>
    <p><A href="https://github.com/UKHomeOffice/design-system/discussions">Check if there are any open discussions</A> about your suggestion on the design system GitHub.</p>
    <h3>2. Create a new discussion</h3>
    <p>If there is not a discussion, <A href="https://github.com/UKHomeOffice/design-system/discussions/new">start a new discussion</A> on GitHub. Select ‘ideas’ from the ‘select category’ list when starting to create the discussion.</p>
    <p>For help, use our <A href="./discuss-on-github">GitHub guide</A> or ask the <A href="./design-system-working-group">working group</A>.</p>
    <p>When discussing a proposal for a new component, try to explain why it should be included in our design system. If you can, include screenshots and research findings.</p>
    <h3>3. Share the discussion</h3>
    <p>Let the user-centred design and accessibility community know that you have posted a new discussion and ask their comments.</p>
    <p>Share your discussion through Slack, show and tells and community meetups.</p>
    <p>Consider giving your discussion topic a deadline of a few weeks.</p>
    <h3>4. Summarise the discussion</h3>
    <p>Use the comments to make a suggestion for an improvement or a new entry.</p>
    <p>Contact <A href="mailto:ucdops@homeoffice.gov.uk">ucdops@homeoffice.gov.uk</A> if you'd like feedback on your discussion or for the design system working group to review it.</p>
    <h3>5. Updating the design system</h3>
    <p>The <A href="./design-system-working-group">design system working group</A> regularly assess discussions using the <A href="https://design-system.service.gov.uk/community/contribution-criteria/">GOV.UK design system contribute criteria</A>.</p>
    <p>If the pattern or component is  ready to be published, the working group will then raise an issue and progress this work further.</p>
    <p>The working group will share updates in the user-centred design community email about proposal decisions and changes to the Home Office design system.</p>
  </SubsectionWrap>
);

export default Page;

import { FC, Fragment, ReactNode, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A, NavigationMenu } from '@not-govuk/components';

import { Subsection } from '@hods/ucdm-subsection';
import config from '../../../config';

import { SectionWrap, title as section } from '../';
import { componentLinksNew } from '../../../stories';

export const SubsectionWrap: FC<{ children?: ReactNode }> = ({ children }) => (
  <SectionWrap>
    <Subsection title="Design system" side={
      <Fragment>
        <NavigationMenu items={[
          { href: '/design-and-content/design-system/get-started', text: 'Getting started' }
        ]} />
        <span className="govuk-caption-m" style={{ marginBottom: "1em" }}>Home Office plugin for GOV.UK prototype</span>
        <NavigationMenu items={[
          {
            href: '/design-and-content/design-system/get-started/home-office-plugin',
            text: '- Add Home Office plugin to GOV.UK prototype'
          }
        ]} />
        <span className="govuk-caption-m" style={{ marginBottom: "1em" }}>Home Office React prototype</span>
        <NavigationMenu items={[

          {
            href: '/design-and-content/design-system/get-started/start-prototype',
            text: '- Set up your prototype'
          },
          {
            href: '/design-and-content/design-system/get-started/use-prototype',
            text: '- Build your protoype'
          }
        ]} />
        <span className="govuk-caption-m" style={{ marginBottom: "1em" }}>Community resources</span>
        <NavigationMenu items={[
          {
            href: '/design-and-content/design-system/get-started/design-assets',
            text: '- Design assets'
          }
        ]} />
        <NavigationMenu items={[
          { href: '/design-and-content/design-system/styles', text: 'Styles' },
          { href: '/design-and-content/design-system/styles/colour', text: '- Colour' },
          { href: '/design-and-content/design-system/styles/images', text: '- Images' },
          { href: '/design-and-content/design-system/styles/typography', text: '- Typography' },
          { href: '/design-and-content/design-system/components', text: 'Components' },
          ...(componentLinksNew.map(({ text, ...rest }) => ({ ...rest, text: '- ' + text }))),
          { href: '/design-and-content/design-system/patterns', text: 'Patterns' }
        ]} />
        <span className="govuk-caption-m" style={{marginBottom: "1em"}}>Ask users for</span>
        <NavigationMenu items={[
          {
            href: '/design-and-content/design-system/patterns/ask-users-for/declarations',
            text: '- Declarations'
          },
          {
            href: '/design-and-content/design-system/patterns/ask-users-for/information-document',
            text: '- Information on a document'
          },
          {
            href: '/design-and-content/design-system/patterns/ask-users-for/passport-details',
            text: '- Passport details'
          },
          {
            href: '/design-and-content/design-system/patterns/ask-users-for/passport-details/scan-chip',
            text: '- - Scan the chip'
          },
          {
            href: '/design-and-content/design-system/patterns/ask-users-for/passport-details/upload-photo',
            text: '- - Take or upload photo'
          },
          {
            href: '/design-and-content/design-system/patterns/ask-users-for/passport-details/enter-details',
            text: '- - Manually enter details'
          },
          {
            href: '/design-and-content/design-system/patterns/ask-users-for/sex-gender',
            text: '- Their sex or gender'
          }
        ]} />
        <span className="govuk-caption-m" style={{marginBottom: "1em"}}>Help users to</span>
        <NavigationMenu items={[

          {
            href: '/design-and-content/design-system/patterns/help-users-to/access-service',
            text: '- Access a service'
          },
          {
            href: '/design-and-content/design-system/patterns/help-users-to/add-multiple-things',
            text: '- Add multiple things'
          },
          {
            href: '/design-and-content/design-system/patterns/help-users-to/compare-information',
            text: '- Compare information'
          },
          {
            href: '/design-and-content/design-system/patterns/help-users-to/get-more-details',
            text: '- Get more details'
          },
          {
            href: '/design-and-content/design-system/patterns/help-users-to/leave-service',
            text: '- Leave a service'
          },
          {
            href: '/design-and-content/design-system/patterns/help-users-to/search-for-something',
            text: '- Search for something'
          },
          {
            href: '/design-and-content/design-system/patterns/help-users-to/stop-service-timing-out',
            text: '- Stop a service timing out'
          }
        ]} />
        <span className="govuk-caption-m" style={{marginBottom: "1em"}}>Send users</span>
        <NavigationMenu items={[
          {
            href: '/design-and-content/design-system/patterns/send-users/letter',
            text: '- A letter'
          }
        ]} />
        <NavigationMenu items={[
          { href: '/design-and-content/design-system/contribute', text: 'Contribute' },
          { href: '/design-and-content/design-system/contribute/discuss-on-github', text: '- Discuss on GitHub' },
          { href: '/design-and-content/design-system/contribute/working-group', text: '- Design system working group' }
        ]} />
      </Fragment>
    }>
      {children}
    </Subsection>
  </SectionWrap>
);

const siteTitle = config.title;

export const title = 'Design System';
const longTitle = 'Home Office Design System';
const description = 'The UK Home Office\'s Design System, implemented in React';

const Page: FC<PageProps> = () => (
  <SubsectionWrap>
    <Helmet>
      <title>{title} - {siteTitle}</title>
      <meta name="description" content={description} />
      <meta name="og:title" content={longTitle} />
      <meta name="og:description" content={description} />
    </Helmet>
    <h1>
      <span className="caption">{section}</span>
      {longTitle}
    </h1>
    <p>Design system home.</p>
  </SubsectionWrap>
);

export default Page;

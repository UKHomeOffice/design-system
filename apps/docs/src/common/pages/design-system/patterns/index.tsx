import { FC, Fragment, ReactNode, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A, NavigationMenu } from '@not-govuk/components';

import { Subsection } from '@hods/ucdm-subsection';
import config from '../../../config';

import { SectionWrap, title as section } from '../';

const siteTitle = config.title;

export const title = 'Patterns';
const longTitle = title;
const description = 'Patterns are best practice design solutions for specific user-focused tasks and page types';

export const SubsectionWrap: FC<{ children?: ReactNode }> = ({ children }) => (
  <SectionWrap>
    <Subsection title={title} side={
      <Fragment>
        <span className="govuk-caption-m" style={{marginBottom: "1em"}}>Ask users for</span>
        <NavigationMenu items={[
          {
            href: '/design-system/patterns/ask-users-for/declarations',
            text: 'Declarations'
          },
          {
            href: '/design-system/patterns/ask-users-for/information-document',
            text: 'Information on a document'
          },
          {
            href: '/design-system/patterns/ask-users-for/passport-details',
            text: 'Passport details',
            items: [
              {
                href: '/design-system/patterns/ask-users-for/passport-details/scan-chip',
                text: 'Scan the chip'
              },
              {
                href: '/design-system/patterns/ask-users-for/passport-details/upload-photo',
                text: 'Take or upload photo'
              },
              {
                href: '/design-system/patterns/ask-users-for/passport-details/enter-details',
                text: 'Manually enter details'
              },
            ]
          },
          {
            href: '/design-system/patterns/ask-users-for/sex-gender',
            text: 'Their sex or gender'
          }
        ]} />
        <span className="govuk-caption-m" style={{marginBottom: "1em"}}>Help users to</span>
        <NavigationMenu items={[

          {
            href: '/design-system/patterns/help-users-to/access-service',
            text: 'Access a service'
          },
          {
            href: '/design-system/patterns/help-users-to/add-multiple-things',
            text: 'Add multiple things'
          },
          {
            href: '/design-system/patterns/help-users-to/compare-information',
            text: 'Compare information'
          },
          {
            href: '/design-system/patterns/help-users-to/get-more-details',
            text: 'Get more details'
          },
          {
            href: '/design-system/patterns/help-users-to/long-lists',
            text: 'Choose from a long list'
          },
          {
            href: '/design-system/patterns/help-users-to/leave-service',
            text: 'Leave a service'
          },
          {
            href: '/design-system/patterns/help-users-to/search-for-something',
            text: 'Search for something'
          },
          {
            href: '/design-system/patterns/help-users-to/manage-service-timing-out',
            text: 'Manage a service timing out'
          }
        ]} />
        <span className="govuk-caption-m" style={{marginBottom: "1em"}}>Send users</span>
        <NavigationMenu items={[
          {
            href: '/design-system/patterns/send-users/letter',
            text: 'A letter'
          },
          {
            href: '/design-system/patterns/send-users/email',
            text: 'An email'
          }
        ]} />
      </Fragment>
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
    <p>
      Patterns are guidance on how to solve certain types of problems. They
      include examples of successful approaches but are flexible and don’t
      prescribe exact design solutions.
    </p>
    <p>
      These patterns extend those used across government in the
      <A href="https://design-system.service.gov.uk/">GOV.UK design system</A>.
      As our patterns mature, we will look to contribute them to the GOV.UK
      system so they can be used more widely.
    </p>
  </SubsectionWrap>
);

export default Page;

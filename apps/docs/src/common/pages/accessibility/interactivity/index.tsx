import { FC, ReactNode, createElement as h } from 'react';

import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A, NavigationMenu } from '@not-govuk/components';

import { Subsection } from '@hods/ucdm-subsection';
import config from '../../../config';

import { SectionWrap, title as section } from '../';

export const title = 'Interactivity';
const longTitle = title;
const description = 'How to ensure good accessibility when designing interactive elements.';
const siteTitle = config.title;

export const SubsectionWrap: FC<{ children?: ReactNode }> = ({ children }) => (
  <SectionWrap>
    <Subsection title={title} side={
      <NavigationMenu items={[
        {
          href: '/accessibility/interactivity/error-messages',
          text: 'Error messages'
        },
        {
          href: '/accessibility/interactivity/forms',
          text: 'Forms',
          items: [
            {
              href: '/accessibility/interactivity/forms/keyboard',
              text: 'Keyboard'
            }
          ]
        },
        {
          href: '/accessibility/interactivity/keyboard',
          text: 'Keyboard basics',
          items: [
            {
              href: '/accessibility/interactivity/keyboard/tab-navigation',
              text: 'Tab navigation'
            },
            {
              href: '/accessibility/interactivity/keyboard/focus',
              text: 'Focus'
            },
            {
              href: '/accessibility/interactivity/keyboard/skip-to-content',
              text: 'Skip to content links'
            },
            {
              href: '/accessibility/interactivity/keyboard/character-key-shortcuts',
              text: 'Character key shortcuts'
            },
            {
              href: '/accessibility/interactivity/keyboard/pointer-gestures',
              text: 'Pointer gestures'
            }
          ]
        },
        {
          href: '/accessibility/interactivity/gestures-and-motion',
          text: 'Gestures and motion'
        },
        {
          href: '/accessibility/interactivity/notifications',
          text: 'Notifications'
        },
        {
          href: '/accessibility/interactivity/timeouts',
          text: 'Timeouts'
        }
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
    <p>Learn how to design accessible digital interactions by ensuring clear error messages, user-friendly forms, correct keyboard navigation, inclusive gestures, timely notifications, and considerate timeouts that support all users.</p>
  </SubsectionWrap>
);

export default Page;

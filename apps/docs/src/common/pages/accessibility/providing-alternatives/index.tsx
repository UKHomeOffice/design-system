import { FC, ReactNode, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A, NavigationMenu } from '@not-govuk/components';

import { Subsection } from '@hods/ucdm-subsection';
import config from '../../../config';

import { SectionWrap, title as section } from '../';

export const title = 'Providing alternatives';
const longTitle = title;
const description = 'When you should provide accessible alternatives';
const siteTitle = config.title;

export const SubsectionWrap: FC<{ children?: ReactNode }> = ({ children }) => (
  <SectionWrap>
    <Subsection title={title} side={
      <NavigationMenu items={[
        {
          href: '/accessibility/providing-alternatives/audio-and-video',
          text: 'Audio and video'
        },
        {
          href: '/accessibility/providing-alternatives/colour-and-contrast',
          text: 'Colour and contrast'
        },
        {
          href: '/accessibility/providing-alternatives/images',
          text: 'Images'
        },
        {
          href: '/accessibility/providing-alternatives/moving-and-flashing-content',
          text: 'Moving and flashing content'
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
    <p>Learn how to make digital content accessible by providing effective alternatives for audio and video, ensuring sufficient colour contrast, using meaningful image descriptions, and avoiding moving and flashing elements.</p>
  </SubsectionWrap>
);

export default Page;

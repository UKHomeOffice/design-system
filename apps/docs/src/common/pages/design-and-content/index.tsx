import { ReactNode, FC, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A } from '@not-govuk/components';

import { Section } from '@hods/ucdm-section';

import Markdown from '../../../../../../docs/design-and-content/README.md';

export const title = 'Design and content';
const description = 'Interaction and content design in the Home Office';

export const SectionWrap: FC<{ children?: ReactNode, showBanner?: boolean }> = ({ children, showBanner }) => (
  <Section title={title} href="/design-and-content" showBanner={showBanner} navigation={[
    { href: '/design-and-content/content', text: 'Content' },
    { href: '/design-and-content/professional-standards', text: 'Professional standards and guidance' }
  ]}>
    {children}
  </Section>
);

const Page: FC<PageProps> = props => (
  <SectionWrap showBanner={false}>
    <main id="main-content" >
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="og:title" content={title} />
        <meta name="og:description" content={description} />
      </Helmet>
      <Markdown />
    </main>
  </SectionWrap>
);

export default Page;

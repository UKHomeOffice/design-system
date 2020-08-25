import { FC, Fragment, createElement as h } from 'react';
import { PageProps } from '@not-govuk/app-composer';

import Markdown from '../../../../../docs/about.md';

const Page: FC<PageProps> = props => (
  <Markdown />
);

export default Page;
export const title = 'About NotGovUK';

import { FC, Fragment, createElement as h } from 'react';
import { PageProps } from '@not-govuk/app-composer';

import Markdown from '../../../../../docs/get-started.md';

const Page: FC<PageProps> = props => (
  <Markdown />
);

export default Page;
export const title = 'Get started';

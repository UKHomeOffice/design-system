import { FC, Fragment, createElement as h } from 'react';
import { PageProps } from '@not-govuk/app-composer';

import Markdown from '../../../../../docs/working-on-your-project.md';

const Page: FC<PageProps> = props => (
  <Fragment>
    <span className="govuk-caption-xl">Get started</span>
    <Markdown />
  </Fragment>
);

export default Page;
export const title = 'Working on your project';

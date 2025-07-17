import { FC, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A } from '@not-govuk/components';
import config from '../../../config';

import { SubsectionWrap, title as subsection } from './';

const siteTitle = config.title;

export const title = 'Discuss on GitHub';
const longTitle = title;
const description = 'Contribute your ideas, thoughts and evidence';

const Page: FC<PageProps> = () => (
  <SubsectionWrap>
    <Helmet>
      <title>{title} - {siteTitle}</title>
      <meta name="description" content={description} />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={description} />
    </Helmet>
    <h1>
      <span className="caption">{subsection}</span>
      {longTitle}
    </h1>
    <p>Our <A href="https://github.com/UKHomeOffice/design-system/discussions">GitHub repository discussions</A> is where our designs are discussed and problems explored.</p>
    <h2>Create an account</h2>
    <p><A href="https://github.com/signup?return_to=https%3A%2F%2Fgithub.com%2FUKHomeOffice%2Fdesign-system%2Fdiscussions&source=login">Create a GitHub account</A> with any email address, including your Home Office email addresses.</p>
    <h2>Join a discussion</h2>
    <p>If there's an existing discussion, you can:</p>
    <ul>
      <li>ask questions about a style, component or pattern</li>
      <li>answer questions from others</li>
      <li>share an example use of a component or pattern</li>
      <li>share research relating to a style, component or pattern</li>
      <li>request an addition or improvement to the content style guide</li>
    </ul>
    <h2>Create a new discussion</h2>
    <p>Your new discussion can be as simple as a thought you've had, or more well-formed research findings.</p>
    <ol>
      <li>Create a <A href="https://github.com/UKHomeOffice/design-system/discussions/new">new discussion</A>.</li>
      <li>Select the 'ideas' category.</li>
      <li>Summarise your idea or problem in the title.</li>
      <li>Write your question or idea - write as much as you need, some are short others a bit longer.</li>
    </ol>
  </SubsectionWrap>
);

export default Page;

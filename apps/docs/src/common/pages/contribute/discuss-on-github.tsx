import { FC, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A } from '@not-govuk/components';
import { menu } from '../contribute';

export const title = 'Discuss on github';
const description = 'Contribute your ideas, thoughts and evidence';
const section = 'Contribute';

const Page: FC<PageProps> = ({ location }) => (
  <div className="govuk-grid-row">
    <Helmet>
      <title>{title} - Home Office Design System</title>
      <meta name="description" content={description} />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={description} />
      <meta name="og:article:section" content={section} />
    </Helmet>
    <div className="govuk-grid-column-one-quarter">
      {menu}
    </div>
    <div className="govuk-grid-column-three-quarters">
      <h1>
        <span className="caption">{section}</span>
        {title}
      </h1>
      <p>Our <a href="https://github.com/UKHomeOffice/design-system/discussions">github repository discussions</a> is where our designs are discussed and problems explored.</p>
      <h2>Create an account</h2>
      <p><a href="https://github.com/signup?return_to=https%3A%2F%2Fgithub.com%2FUKHomeOffice%2Fdesign-system%2Fdiscussions&source=login">Create a github account</a> with any email address, including your Home Office email addresses.</p>
      <h2>Join a discussion</h2>
      <p>If there's an existing discussion, you can:</p>
      <ul>
        <li>ask questions about a style, component or pattern</li>
        <li>answer questions from others</li>
        <li>share examples or demos of a component or pattern</li>
        <li>share research relating to a style, compontent or pattern</li>
      </ul>
      <h2>Create a new discussion</h2>
      <p>Your new discussion can be as simple as a thought you've had, or more well-formed research findings.</p>
      <ol>
        <li>Create a <a href="https://github.com/UKHomeOffice/design-system/discussions/new">new discussion</a>.</li>
        <li>Select the 'ideas' category.</li>
        <li>Summarise your idea or problem in the title.</li>
        <li>Write your question or idea - write as much as you need, some are short others a bit longer.</li>
      </ol>
    </div>
  </div>
);

export default Page;

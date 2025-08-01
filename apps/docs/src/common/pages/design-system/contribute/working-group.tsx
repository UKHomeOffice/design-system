import { FC, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A } from '@not-govuk/components';
import config from '../../../config';

import { SubsectionWrap, title as subsection } from './';

const siteTitle = config.title;

export const title = 'Design system working group';
const longTitle = title;
const description = 'The governance of the design system';

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
    <p>The Home Office design system working group is a cross-functional team. It’s made up of interaction and content design, user research, accessibility, and front-end development. </p>
    <p>They meet every 2 weeks where they will:</p>
    <ul>
      <li>review new discussions and whether something else better meets the need</li>
      <li>check how discussions are progressing and if it needs support from the group</li>
      <li>decide when a discussion is ready to become a pattern or component in the design system</li>
      <li>identify any discussions that are covered by the GOV.UK design system and raise it with them</li>
    </ul>
    <p>The working group will also:</p>
    <ul>
      <li>move discussions to <A href="https://github.com/UKHomeOffice/design-system/issues">issues to be worked on by the working group</A></li>
      <li>publish and update the Home Office design system</li>
      <li>share updates about the Home Office design system and encourage the user-centred design community to get involved</li>
    </ul>
    <p>If you have a question or idea, you can contact the working group:</p>
    <ul>
      <li>on the Home Office #ho-design-system Slack channel</li>
      <li>by email at <A href="mailto:ucdops@homeoffice.gov.uk">ucdops@homeoffice.gov.uk</A></li>
    </ul>
  </SubsectionWrap>
);

export default Page;

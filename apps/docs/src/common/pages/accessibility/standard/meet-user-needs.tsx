import { FC, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A } from '@not-govuk/components';
import { menu } from '../../accessibility'

export const title = 'Meet user needs';
const description = 'Meet user needs Accessibility Standard requirements';
export const section = 'Accessibility';

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
      <span className="caption">Accessibility</span>
      Meet user needs
    </h1>
    <p>You must ensure that you understand and meet user needs.</p>
    <p>When conducting user research you must include users with disabilities.</p>
    <h2>Index</h2>
    <ul className="plain">
      <li><a href="#rr5.1.1">5.1.1 - User Research Participants</a></li>
    </ul>

    <h3 id="rr5.1.1">5.1.1 - User Research Participants</h3>
    <p>When doing user research, make sure to include users with disabilities (at least 1 out of every 5 participants).</p>
    <h4>Implementation guidance</h4>
    <p>During user research activity, at least 1 in 5 participants must have a disability. You should ensure that you include a diverse group of disabled users with a range of disabilities that represents the population you’re researching.</p>
    <h4>How to test</h4>
    <p>You should ensure that you work with the Research Operations team to identify and recruit disabled participants. You should use appropriate research methods as defined by the Head of User Research.</p>

<div className="contact-us">
  <h2 className="govuk-heading-m">Get in touch</h2>
  <p>If you’ve got a question or suggestion share it on the Home Office DDaT Slack channel #ask-accessibility or email <A href="mailto:access@digital.homeoffice.gov.uk">access@digital.homeoffice.gov.uk</A>.</p>
</div>

    </div>
  </div>
);

export default Page;

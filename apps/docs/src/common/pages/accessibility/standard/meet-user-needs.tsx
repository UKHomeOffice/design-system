import { FC, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A } from '@not-govuk/components';
import config from '../../../config';

import { SubsectionWrap, title as subsection } from './';

const siteTitle = config.title;

export const title = 'Meet user needs';
const longTitle = title;
const description = 'Meet user needs Accessibility Standard requirements';

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
<p>You must ensure that you understand and meet user needs.</p>
    <p>When conducting user research you must include users with disabilities.</p>
    <h2>Index</h2>
    <ul className="plain">
      <li><A href="#rr5.1.1">5.1.1 - User research participants</A></li>
      <li><A href="#rr5.1.2">5.1.2 - Accessibility statement</A></li>
      <li><A href="#rr5.1.3">5.1.3 - Testing methodology</A></li>
    </ul>

    <h3 id="rr5.1.1">5.1.1 - User research participants</h3>
    <p>When doing user research, make sure to include users with disabilities (at least 1 out of every 5 participants).</p>
    <h4>Implementation guidance</h4>
    <p>During user research activity, at least 1 in 5 participants must have a disability. You should ensure that you include a diverse group of disabled users with a range of disabilities that represents the population you’re researching.</p>
    <h4>How to test</h4>
    <p>You may be able to get support with working with disabled participants from the User Centred Design Operations team. You should use appropriate research methods as defined by the Head of User Research.</p>

    <h3 id="rr5.1.2">5.1.2 - Accessibility statement</h3>
    <p>Ensure that you publish an accessibility statement and keep it updated.</p>
    <h4>Implementation guidance</h4>
    <p>An accessibility statement must be easily available for users to better understand any accessibility issues and timescales for fixes.</p>
    <p>The accessibility statement must provide suitable contact information to allow users to easily request information in an alternative format or report an accessibility issue.</p>
    <p>The statement will need to be reviewed and updated whenever there are significant changes to the product or its level of accessibility, at least once a year.</p>
    <h4>How to test</h4>
    <p>Ensure that a link to an accessibility statement is kept up to date and is located in a prominent place on every page of the website. Ensure that there are no references to past dates in the future tense.</p>
    <p>Ensure that the accessibility statement:</p>
    <ul>
      <li>follows the legal established format and wording</li>
      <li>lists current accessibility issues, explains how they impact the user and expected timescales for fixes</li>
      <li>available workarounds for known issues</li>
      <li>how people can get alternatives to content that’s not accessible to them</li>
      <li>how people can contact the team to report accessibility problems</li>
    </ul>

    <h3 id="rr5.1.3">5.1.3 - Testing methodology</h3>
    <p>Ensure that you have a comprehensive testing strategy in place that focuses on user needs and utilises automated, manual and assistive technology testing across a range of browsers and devices.</p>
    <h4>Implementation guidance</h4>
    <p>Testing must take into account the expected user journeys through a system and the tasks that users are likely to complete.</p>
    <p>Testing must be conducted with a mixture of automated and manual tools. Make sure that you are also testing with screen readers, screen magnifiers and speech recognition software.</p>
    <p>Test with the range of browsers and devices you anticipate the target audience using.</p>
    <h4>How to test</h4>
    <p>Ensure that any testing takes into account the expected key user journeys through a system, and highlights any blockers to completing expected tasks.</p>
    <p>Do not rely only on automated tools for accessibility testing. Ensure you use manual techniques and optionally automated tools.</p>
    <p>Check that you are testing across as many browsers and devices as appropriate for the service. The full list of currently supported browsers can be found in the <A href="https://www.gov.uk/service-manual/technology/designing-for-different-browsers-and-devices#browsers-to-test-in-from-june-2022">Designing for different browsers and devices</A> guidance</p>
    <h4>How to test with assistive technology</h4>
    <p>To meet the Service Standard, check that you are testing using:</p>
    <ul>
      <li>screen readers</li>
      <li>screen magnifiers</li>
      <li>speech recognition software</li>
    </ul>
    <p>as appropriate for the service audience and environment.</p>
    <p>The full combinations of assistive technologies and browsers you should test with can be found in the <A href="https://www.gov.uk/service-manual/technology/testing-with-assistive-technologies">Testing with assistive technologies</A> guidance</p>

    <h2>Get in touch</h2>
    <p>If you’ve got a question or suggestion share it on the UK Home Office Slack channel #ask-accessibility or email <A href="mailto:accessibility@homeoffice.gov.uk">accessibility@homeoffice.gov.uk</A>.</p>
  </SubsectionWrap>
);

export default Page;

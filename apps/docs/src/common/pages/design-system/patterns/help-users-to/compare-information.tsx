import { FC, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A } from '@not-govuk/components';
import { Highlight } from '@hods/components'
import config from '../../../../config';

import { SubsectionWrap, title as subsection } from '../';

const siteTitle = config.title;

export const title = 'Compare information';
const longTitle = title;
const description = 'How to help users to compare information';
const subsubsection = 'Help users to';

const Page: FC<PageProps> = () => (
  <SubsectionWrap>
    <Helmet>
      <title>{title} - {siteTitle}</title>
      <meta name="description" content={description} />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={description} />
    </Helmet>
    <h1>
      <span className="caption">{subsubsection}</span>
      {longTitle}
    </h1>
    <p className="govuk-body">Use the <A href="/components?name=Highlight">highlight component</A> to show differences.</p>


    <h2 className="govuk-heading-l">When to use this pattern</h2>
    <p>Use with repeat users who will become familiar.</p>


    <h2 className='govuk-heading-l'>How it works</h2>
    <p>Show both sets of information and highlight the differences.</p>
    <div className="govuk-grid-column-one-half">
      <dl className="govuk-summary-list">
        <div className="govuk-summary-list__row">
          <dt className="govuk-summary-list__key">
            Name
          </dt>
          <dd className="govuk-summary-list__value">
            Sarah Philips
          </dd>
        </div>
        <div className="govuk-summary-list__row">
          <dt className="govuk-summary-list__key">
            Date of birth
          </dt>
          <dd className="govuk-summary-list__value">
            <Highlight>5 January 1978</Highlight>
          </dd>
        </div>
        <div className="govuk-summary-list__row">
          <dt className="govuk-summary-list__key">
            Address
          </dt>
          <dd className="govuk-summary-list__value">
            72 Guild Street<br/>London<br/>SE23 6FH
          </dd>
        </div>
        <div className="govuk-summary-list__row">
          <dt className="govuk-summary-list__key">
            Contact details
          </dt>
          <dd className="govuk-summary-list__value">
            <p className="govuk-body">07700 900457</p>
            <p className="govuk-body">sarah.phillips@example.com</p>
          </dd>
        </div>
      </dl>
    </div>

    <div className="govuk-grid-column-one-half">
      <dl className="govuk-summary-list">
        <div className="govuk-summary-list__row">
          <dt className="govuk-summary-list__key">
            Name
          </dt>
          <dd className="govuk-summary-list__value">
            Sarah Philips
          </dd>
        </div>
        <div className="govuk-summary-list__row">
          <dt className="govuk-summary-list__key">
            Date of birth
          </dt>
          <dd className="govuk-summary-list__value">
            <Highlight>6 January 1978</Highlight>
          </dd>
        </div>
        <div className="govuk-summary-list__row">
          <dt className="govuk-summary-list__key">
            Address
          </dt>
          <dd className="govuk-summary-list__value">
            72 Guild Street<br/>London<br/>SE23 6FH
          </dd>
        </div>
        <div className="govuk-summary-list__row">
          <dt className="govuk-summary-list__key">
            Contact details
          </dt>
          <dd className="govuk-summary-list__value">
            <p className="govuk-body">07700 900457</p>
            <p className="govuk-body">sarah.phillips@example.com</p>
          </dd>
        </div>
      </dl>
    </div>

    <h2 className='govuk-heading-l'>Writing for this pattern</h2>
    <p>Explain the purpose of the highlight, especially if there are different use cases within a service. It takes users time to work out what the highlight is showing.</p>

    <h2 className="govuk-heading-l">Accessibility</h2>
    <p>Use bold with the highlight.</p>
    <p>Consider how the highlight interacts with other colour used on the page.</p>
    <p>Use in moderation. Overuse reduces efficacy of the highlight and can cause unnecessary mental load for people using screen readers.</p>

    <h2 className="govuk-heading-l">Research</h2>
    <p className="govuk-body">We did usability testing with 3 external participants with access needs, with varying severities of vision loss. Participants used screen readers and zoom function whilst participating. High level findings included: </p>
    <ul className="govuk-list govuk-list--bullet">
      <li>the colour of the highlight was disorientating for some partially sighted users</li>
      <li>comparing highlighted information with a screen reader would be difficult without other applications</li>
      <li>participants preferred when a highlighted piece of information was also in bold format</li>
      <li>participants took time to understand the purpose of the highlight</li>
    </ul>

    <h2 className="govuk-heading-l">Help us improve this pattern</h2>
    <p>This pattern needs improving. We need evidence about:</p>
    <ul>
      <li>any research findings</li>
    </ul>

    <p className="govuk-body">To contribute, add your thoughts and research findings to our <A href="https://github.com/UKHomeOffice/design-system/discussions/484">GitHub discussion</A>, or follow our <A href="/contribute">contribute guidance</A>.</p>
  </SubsectionWrap>
);

export default Page;

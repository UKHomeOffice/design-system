import { FC, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A } from '@not-govuk/components';
import config from '../../../../../../config';

import { SubsectionWrap, title as subsection } from '../../../';

const siteTitle = config.title;

export const title = 'Passport details';
const longTitle = title;
const description = 'How to ask users for passport details';
const subsubsection = 'Ask users for';

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
    <p className="govuk-body">You can ask for passport details in 3 ways. Users can:</p>
    <ul className="govuk-list govuk-list--bullet">
      <li><A href="./scan-passport-chip">scan the chip</A></li>
      <li><A href="./take-upload-photo">take or upload a photo</A></li>
      <li><A href="./manually-enter-details">manually enter the details</A></li>
    </ul>
    <p className="govuk-body">Use the <A href="https://www.consilium.europa.eu/prado/en/search-by-document-country.html">public register of identity documents</A> to see the similarities and differences between passports from around the world.</p>

    <h2 className="govuk-heading-l">When to use this pattern</h2>
    <p className="govuk-body">This is for both internal staff members and members of the public providing their passport details.</p>
    <p className="govuk-body">You may find that your particular use case or user needs means you need to adjust the guidance based on your research.</p>

    <h2 className="govuk-heading-l">How it works</h2>
    <p className="govuk-body">In all the methods, you should make it clear to the user which passport details to enter, because a person may have several.</p>
    <p className="govuk-body">Consider how the information is used, are there internal processes that need to handle incorrect information being entered?</p>

    <h2 className="govuk-heading-l">Accessibility</h2>
    <p className="govuk-body">Consider that users may need more than one method for capturing the information. What do they do if they hit a barrier?</p>

    <h2 className="govuk-heading-l">Help us improve these patterns</h2>
    <p className="govuk-body">Entering passport details needs improving. We need evidence about:</p>
    <ul className="govuk-list govuk-list--bullet">
      <li>asking for information from emergency passports</li>
      <li>asking for information from other identity documents, such as national identity cards, UK residence card, biometric residence card, biometric residence permit </li>
      <li>how the search for nationality should work, do better matches appear closer to the top, what about alternative country names so ‘Britain’</li>
      <li>if nationality or country of nationality is clearer to users, particularly observed confusion over the options being mostly countries</li>
      <li>if country of issue causes a barrier for entering passports issued by an organisation (say the European Union) rather than a country</li>
      <li>the hint text for country of issue, how do users interpret the first page of the passport</li>
    </ul>

    <p className="govuk-body">To contribute, add your thoughts and research findings to our <A href="https://github.com/UKHomeOffice/design-system/discussions/449">GitHub discussion</A>, or follow our <A href="/contribute">contribute guidance</A>.</p>
  </SubsectionWrap>
);

export default Page;

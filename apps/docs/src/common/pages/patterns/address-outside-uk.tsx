import { FC, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A, DateInput, Details, Radios, TextInput, Select } from '@not-govuk/components';
import { menu } from '../patterns';

export const title = 'Address outside the UK';
const description = 'How to ask users for their address outside the UK';
const section = 'Patterns';
const subsection = 'Ask users for';

const Page: FC<PageProps> = ({ location }) => (
<div className="govuk-grid-row">
  <Helmet>
    <title>{subsection} {title.toLowerCase()} - Home Office Design System</title>
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
        <span className="caption">{subsection}</span>
        {title}
      </h1>
      <p className="govuk-body">Ask for an address in different ways depending on what the user needs to do. They might need to enter an address:</p>
      <ul className="govuk-list govuk-list--bullet">
        <li><A href="/patterns/address-not-uk/valuable-delivery">for something valuable to be delivered to</A></li>
        <li><A href="/patterns/address-not-uk/familiar-address">where they live, have lived, or are otherwise familiar with</A></li>
        <li><A href="/patterns/address-not-uk/record-given-address">they have been given</A></li>
      </ul>

      <p className="govuk-body">The <A href="/patterns/address-not-uk/country-index">country index</A> has specific information about addresses in certain countries.</p>

      <h2 className="govuk-heading-l">When to use this pattern</h2>
      <p className="govuk-body">This is for both internal staff members and members of the public providing addresses.</p>

      <h2 className="govuk-heading-l">How it works</h2>
      <p className="govuk-body">Explain why you are asking for this address. This helps users understand why they need to enter it.</p>
      <p className="govuk-body">Consider:</p>
      <ul className="govuk-list govuk-list--bullet">
        <li>how the address is used</li>
        <li>how reliable the address needs to be</li>
        <li>if there are internal processes that can correct or validate addresses</li>
      </ul>
      
      <h2 className="govuk-heading-l">Accessibility</h2>
      <p className="govuk-body">Consider that users need more than one method for entering their address.</p>

      <h2 className="govuk-heading-l">Help us improve these patterns</h2>
      <p className="govuk-body">Asking for addresses outside the UK needs improving. We need evidence about:</p>
      <ul className="govuk-list govuk-list--bullet">
        <li>standard address formats in different countries</li>
        <li>the barriers users with low English confidence face</li>
        <li>if images or visual information helps users to enter their address</li>
      </ul>

      <p className="govuk-body">To contribute, add your thoughts and research findings to our <A href="https://github.com/UKHomeOffice/design-system/discussions/580">GitHub discussion</A>, or follow our <A href="/contribute">contribute guidance</A>.</p>
    </div>
</div>

);

export default Page;

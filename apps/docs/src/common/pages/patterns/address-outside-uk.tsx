import { FC, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A, Fieldset, Radios, TextInput, Select } from '@not-govuk/components';
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
      <p className="govuk-body">Ask for an address outside the UK.</p>

      <p className="govuk-body">The <A href="/patterns/address-outside-uk/country-list">country list</A> has specific information about addresses in certain countries.</p>

      <h2 className="govuk-heading-l">When to use this pattern</h2>
      <p className="govuk-body">This pattern is for services where there is either:</p>
      <ul className="govuk-list govuk-list--bullet">
        <li>little impact on the user for the address being incorrect or not recognised by another system</li>
        <li>other validation before the address is used</li>
      </ul>

      <p className="govuk-body">There are more specific patterns when users need to enter an address:</p>
      <ul className="govuk-list govuk-list--bullet">
        <li><A href="/patterns/address-outside-uk/delivery-address">for something valuable to be delivered to</A></li>
        <li><A href="/patterns/address-outside-uk/record-given-address">they have been given</A></li>
      </ul>

      <h2 className="govuk-heading-l">How it works</h2>

      <p className="govuk-body">If you do not already know the country, ask for the country that you are collecting the address in.</p>

      <p className="govuk-body">Ask for country first because the manual address format can be adjusted for particular countries. For example your research may show for users in particular countries find entering an address easier if:</p>
      <ul className="govuk-list govuk-list--bullet">
        <li>there are extra lines for 'state' or 'province'</li>
        <li>'zip code' is used instead of 'postal code'</li>
      </ul>

      <p className="govuk-body">Check the <A href="country-list">country list</A> for variations found helpful in other Home Office services.</p>

      <h3 className="govuk-heading-m">Country</h3>
      
      <p className="govuk-body">Consider the list of countries you allow users to select from. There are territories, such as Puerto Rico, that are not recognised as separate by the <A href="https://www.gov.uk/government/publications/geographical-names-and-information">FCDO geographical names index</A>. Some of these have specific address needs that may be different from the internationally recognised ‘country’.</p>

      <p className="govuk-body">If asking for previous addresses, consider whether users can select countries that no longer exist.</p>

      <p className="govuk-body">Do not include the 3 letter country code, unless there is evidence your users understand them.</p>

      <p className="govuk-body">Consider providing users with an option if they cannot find the country in the list. Depending on the user needs this could be:</p>
      <ul className="govuk-list govuk-list--bullet">
        <li>manually entering the country</li>
        <li>guidance about what do if the country cannot be found</li>
      </ul>

      <div className="app-example">
        <Select
          label="Which country or territory do you currently live in?"
          name="country-or-territory"
          options={[
            {
              value: "France",
              label: "France"
            },
            {
              value: "United Kingdom",
              label: "United Kingdom"
            }
          ]}
        />
        <p className="govuk-body"><A href="#">I cannot find the country in the list</A></p>
      </div>

      <p className="govuk-body">If there is a particular country your users are more likely to live in, ask with a conditional radio button:</p>

      <div className="app-example">
        <Radios
          label="Do you currently live in ((country name))?"
          name="country-or-territory"
          options={[
            {
              value: "yes",
              label: "Yes"
            },
            {
              value: "no",
              label: "No",
              conditional: (
                <Select
                  label="Which country or territory do you currently live in?"
                  name="country-or-territory"
                  options={[
                    {
                      value: "France",
                      label: "France"
                    },
                    {
                      value: "United Kingdom",
                      label: "United Kingdom"
                    }
                  ]}
                />
              )
            }
          ]}
        />
        <p className="govuk-body"><A href="#manual-entry">I cannot find the country in the list</A></p>
      </div>

      <h3 className="govuk-heading-m">Manual entry</h3>

      <p className="govuk-body">Use the <A href="/patterns/address-outside-uk/country-list">country list</A> to customise the manual address entry to each specific country.</p>

      <p className="govuk-body">From your service, you may know which addresses users find most difficult to enter, prioritise these for customisation.</p>

      <div className="app-example">
        <Fieldset
          legend={
            <h1 className="govuk-heading-l">
              What is your address?
            </h1>
          }
          className="govuk-!-width-two-thirds">
          <TextInput
            label="Address line 1"
            name="address-line-1"
          />
          <TextInput
            label="Address line 2 (optional)"
            name="address-line-2"
          />
          <TextInput
            label="Town or city"
            name="town-city"
            className="govuk-!-width-two-thirds"
          />
          <TextInput
            label="Postal code"
            name="postal-code"
            width={10}
          />
        </Fieldset>
        <h2 className="govuk-heading-m">Country</h2>
        <p className="govuk-body">Saint Pierre and Miquelon <A href="#country">Change <span className="govuk-visually-hidden">country</span></A></p>
      </div>

      <p className="govuk-body">For address lines 1, 2 and town or city allow:</p>
      <ul className="govuk-list govuk-list--bullet">
        <li>free text inputs</li>
        <li>letters a to z, lowercase, and uppercase, including accents (extended latin character set)</li>
        <li>punctuation, such as full stops, commas, apostrophes, hypens, exclamation marks</li>
        <li>numbers</li>
        <li>up to 255 characters</li>
        <li>a blank address line 2</li>
      </ul>

      <p className="govuk-body">For postal code allow:</p>
      <ul className="govuk-list govuk-list--bullet">
        <li>free text inputs</li>
        <li>numbers (0 to 9)</li>
        <li>letters A to Z (unaccented)</li>
        <li>spaces</li>
        <li>hyphens</li>
        <li>up to 10 letters and numbers</li>
      </ul>

      <h2 className="govuk-heading-l">Research</h2>
      <p className="govuk-body">Address address outside the UK is used by:</p>
      <ul className="govuk-list govuk-list--bullet">
        <li></li>
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

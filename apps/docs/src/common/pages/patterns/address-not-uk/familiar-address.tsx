import { FC, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A, DateInput, Details, Radios, TextInput, Select } from '@not-govuk/components';
import { menu } from '../../patterns';

export const title = 'Familiar address';
const description = 'How to ask users for a familiar address not in the UK';
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

      <p className="govuk-body">Ask users to provide a familiar address not in the UK. This could be somewhere they live or have lived.</p>

      <h2 className="govuk-heading-l">When to use this pattern</h2>
      <p className="govuk-body">This pattern is for services where there is little impact on the user for the address being incorrect or not recognised by another system.</p>

      <h2 className="govuk-heading-l">How it works</h2>

      <h3 className="govuk-heading-m">Country</h3>
      <p className="govuk-body">If you do not already know the country, ask for the country that you are collecting the address in. This enables future improvements for users by reducing the effort to tweaking how addresses are collected for each country.</p>

      <p className="govuk-body">Consider the list of countries you allow users to select from. There are territories, such as Puerto Rico, that are not recognised as separate by the <A href="https://www.gov.uk/government/publications/geographical-names-and-information">FCDO geographical names index</A>. Some of these have specific address needs that may be different from the internationally recognised ‘country’.</p>

      <p className="govuk-body">Do not include the 3 letter country code, unless there is evidence your users understand them.</p>

      <p className="govuk-body">Consider providing users an option if they cannot find the country in the list.</p>

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

      <p className="govuk-body">If there is a particular country your users are more likely to live in, ask with a radio button first:</p>

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
      <div className="app-example">
        <h1 className="govuk-heading-l">Enter your home address</h1>

        <TextInput
          label={
            <span className="govuk-label govuk-label--s">Address line 1</span>
          }
          name="address-line-1"
        />
        <TextInput
          label="Address line 2 (optional)"
          name="address-line-2"
        />
        <TextInput
          label="Town or city"
          name="town-city"
        />
        <TextInput
          label="Postal code"
          name="postal-code"
          width={10}
        />
        <h2 className="govuk-heading-m">Country</h2>
        <p className="govuk-body">St Pierre & Miquelon <A href="#country">Change <span className="govuk-visually-hidden">country</span></A></p>
      </div>

      <p className="govuk-body">For address lines 1, 2 and town or city allow:</p>
      <ul className="govuk-list govuk-list--bullet">
        <li>free text inputs</li>
        <li>accented characters</li>
        <li>punctuation, such as full stops, commas, apostrophes, hypens, exclamation marks</li>
        <li>up to 255 characters</li>
        <li>a blank address line 2</li>
      </ul>

      <p className="govuk-body">For postal code allow:</p>
      <ul className="govuk-list govuk-list--bullet">
        <li>free text inputs</li>
        <li>up to 10 characters</li>
      </ul>

      <h2 className="govuk-heading-l">Accessibility</h2>
      <p className="govuk-body">Consider that users may need more than one method for capturing the information. What do they do if they hit a barrier?</p>

      <h2 className="govuk-heading-l">Research</h2>
      <p className="govuk-body">Familiar address not in the UK is used by:</p>
      <ul className="govuk-list govuk-list--bullet">
        <li></li>
      </ul>

      <h2 className="govuk-heading-l">Help us improve this pattern</h2>
      <p className="govuk-body">This pattern needs improving. We need evidence about:</p>
      <ul className="govuk-list govuk-list--bullet">
        <li></li>
      </ul>

      <p className="govuk-body">To contribute, add your thoughts and research findings to our <A href="https://github.com/UKHomeOffice/design-system/discussions/580">GitHub discussion</A>, or follow our <A href="/contribute">contribute guidance</A>.</p>
    </div>
</div>

);

export default Page;

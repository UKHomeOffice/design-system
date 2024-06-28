import { FC, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A, DateInput, Details, Radios, TextInput, Select, Textarea, Fieldset } from '@not-govuk/components';
import { menu } from '../../patterns';

export const title = 'Record given address';
const description = 'How to ask users for a given address outside the UK';
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

      <p className="govuk-body">Ask users to enter an address that they have been given.</p>

      <h2 className="govuk-heading-l">When to use this pattern</h2>
      <p className="govuk-body">This pattern is for internal services where staff are given addresses to record.</p>

      <h2 className="govuk-heading-l">How it works</h2>

      <p className="govuk-body">Check whether there is a need to record the data in a structured format. For example:</p>
      <ul className="govuk-list govuk-list--bullet">
        <li>the address may be recorded in a database that requires a particular format</li>
        <li>another part of the service may require another user to read the address</li>
      </ul>

      <h3 className="govuk-heading-m">Structured address</h3>

      <p className="govuk-body">This structured format can be used to send letters with GOV.UK Notify. This is the maximum number of address lines GOV.UK Notify accepts.</p>
      
      <p className="govuk-body">Ensure there is a process to handle with undeliverable letters.</p>

      <div className="app-example">
        <Fieldset
            legend={
              <h1 className="govuk-heading-l">
                What is their home address?
              </h1>
            }>
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
            label="Address line 3 (optional)"
            name="address-line-3"
          />
          <TextInput
            label="Address line 4 (optional)"
            name="address-line-4"
          />
          <TextInput
            label="Address line 5 (optional)"
            name="address-line-5"
          />
        </Fieldset>
        <h2 className="govuk-heading-m">Country</h2>
        <p className="govuk-body">St Pierre & Miquelon <A href="#country">Change <span className="govuk-visually-hidden">country</span></A></p>
      </div>

      <h3 className="govuk-heading-m">Not structured</h3>

      <p className="govuk-body">If there is no need for structured information, consider recording the address in an unstructured format:</p>

      <div className="app-example">
        <Textarea
          label="What is their home address?"
          name="unstructured-address"
          rows={5}
        />
        <h2 className="govuk-heading-m">Country</h2>
        <p className="govuk-body">St Pierre & Miquelon <A href="#country">Change <span className="govuk-visually-hidden">country</span></A></p>
      </div>

      <p className="govuk-body">If you need to limit:</p>
      <ul className="govuk-list govuk-list--bullet">
        <li>the number of characters, use character count to show that.</li>
        <li>the number of lines of characters, show an error message if there are too many lines</li>
      </ul>

      <p className="govuk-body">Allow:</p>
      <ul className="govuk-list govuk-list--bullet">
       <li>letters a to z, lowercase, and uppercase, including accents (extended latin character set)</li>
        <li>punctuation, such as full stops, commas, apostrophes, hypens, exclamation marks</li>
        <li>numbers</li>
      </ul>
  
      <h2 className="govuk-heading-l">Accessibility</h2>
      <p className="govuk-body">Consider that users may need more than one method for capturing the information. What do they do if they hit a barrier?</p>

      <h2 className="govuk-heading-l">Research</h2>
      <p className="govuk-body">Record a given address outside the UK is used by:</p>
      <ul className="govuk-list govuk-list--bullet">
        <li>an internal reporting service for operational Border Force officers</li>
      </ul>

      <p className="govuk-body">We found that:</p>
      <ul className="govuk-list govuk-list--bullet">
        <li>staff did not know whether a line in an address was a 'town or city' or not</li>
      </ul>

      <h2 className="govuk-heading-l">Help us improve this pattern</h2>
      <p className="govuk-body">This pattern needs improving. We need evidence about:</p>
      <ul className="govuk-list govuk-list--bullet">
        <li>providing a list of addresses to choose from</li>
        <li>the character limit for an unstructured address</li>
        <li>any services using an unstructured address format</li>
      </ul>

      <p className="govuk-body">To contribute, add your thoughts and research findings to our <A href="https://github.com/UKHomeOffice/design-system/discussions/580">GitHub discussion</A>, or follow our <A href="/contribute">contribute guidance</A>.</p>
    </div>
</div>

);

export default Page;

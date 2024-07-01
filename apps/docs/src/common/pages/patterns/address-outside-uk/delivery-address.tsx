import { FC, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A, DateInput, Details, Radios, TextInput, Select, Fieldset } from '@not-govuk/components';
import { menu } from '../../patterns';

export const title = 'Delivery address outside the UK';
const description = 'How to ask users for a delivery address outside the UK';
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

      <p className="govuk-body">Ask users to provide reliable addresses to deliver something valuable.</p>

      <h2 className="govuk-heading-l">When to use this pattern</h2>
      <p className="govuk-body">This pattern is for services where the user will receive a delivery some something valuable to this address.</p>
      <p className="govuk-body">This pattern is more complicated for the user to complete, and should only be used if a wrong address has a significant negative impact on the user.</p>
      <p className="govuk-body">Consider if a process to correct the address after the user has entered it would resolve this barrier.</p>

      <h2 className="govuk-heading-l">How it works</h2>
      <p className="govuk-body">Explain why you are asking for this address. This helps users understand why they need to provide it and why in this way.</p>

      <h3 className="govuk-heading-m">Country</h3>
      <p className="govuk-body">If you do not already know the country, ask for the country that you are collecting the address in - use the <A href="/patterns/address-outside-uk">address outside the UK</A> pattern.</p>

      <h3 className="govuk-heading-m" id="postal-code">Postal code</h3>

      <p className="govuk-body">Only ask for a postal code if you know the country uses them.</p>

      <p className="govuk-body">Include an option for users to enter their address manually.</p>

      <p className="govuk-body">If possible, use the country specific word for the postal code, such as 'postcode', 'zipcode', or 'Eircode'. If not, use 'postal code'. Check the <A href="/patterns/address-outside-uk/country-list">country list</A>.</p>

      <div className="app-example">
        <TextInput
          label="Postal code"
          name="postal-code"
          width={10}
        />
        <p className="govuk-body"><A href="#manual-entry">Enter address manually</A></p>
      </div>

      <h4 className="govuk-heading-s">Use the postal code to get possible towns</h4>

      <p className="govuk-body">Some delivery companies have a defined list of towns or city for each postal code or country.</p>

      <p className="govuk-body">Only use if the spelling of the town or city impacts the user.</p>

      <p className="govuk-body">Allow users to:</p>
      <ul className="govuk-list govuk-list--bullet">
        <li>change the postal code</li>
        <li>enter the full address manually.</li>
      </ul>

      <p className="govuk-body">For address lines 1 and 2 allow:</p>
      <ul className="govuk-list govuk-list--bullet">
        <li>free text inputs</li>
        <li>letters a to z, lowercase, and uppercase, including accents (extended latin character set)</li>
        <li>punctuation, such as full stops, commas, apostrophes, hypens, exclamation marks</li>
        <li>a blank address line 2</li>
      </ul>

      <p className="govuk-body">If there is only one town or city:</p>

      <div className="app-example">
        <h1 className="govuk-heading-l">What is your address?</h1>
        <h2 className="govuk-heading-m">Postal code</h2>
        <p className="govuk-body">9007 <A href="#postal-code" className="govuk-link">Change</A></p>
        <Fieldset
          legend={
            <h2 className="govuk-heading-m">
              Address
            </h2>
          }
          className="govuk-!-width-two-thirds"
        >
          <TextInput
            label="Address line 1"
            name="address-line-1"
          />
          <TextInput
            label="Address line 2 (optional)"
            name="address-line-2"
          />
        </Fieldset>
        <h2 className="govuk-heading-m">Town or city</h2>
        <p className="govuk-body">Oslo</p>
        <Details summary="This is not the correct town or city">
          Check your postal code or <A href="#manual-entry" className="govuk-link">enter your address manually</A>.
        </Details>
        <h2 className="govuk-heading-m">Country</h2>
        <p className="govuk-body">Norway</p>
      </div>

      <p className="govuk-body">If there are 2 to 10 towns or cities, use the Select component to allow the town or city to be selected. Show how many towns or cities are in the list.</p>

      <div className="app-example">
        <h1 className="govuk-heading-l">What is your address?</h1>
        <h2 className="govuk-heading-m">Postal code</h2>
        <p className="govuk-body">9007 <A href="#postal-code" className="govuk-link">Change</A></p>
        <Fieldset
          legend={
            <h2 className="govuk-heading-m">Address</h2>
          }
          className="govuk-!-width-two-thirds"
        >
          <TextInput
            label="Address line 1"
            name="address-line-1"
          />
          <TextInput
            label="Address line 2 (optional)"
            name="address-line-2"
          />
          <Select
            label="Town or city"
            name="town-city"
            options={[
              {
                value: "3 towns or cities found",
                label: "3 towns or cities found",
                selected: true
              },
              {
                value: "Bodo",
                label: "Bodo",
              },
              {
                value: "Oslo",
                label: "Oslo",
              },
              {
                value: "Tromso",
                label: "Tromso",
              }
            ]}
          />
          <Details summary="I cannot find my town or city">
            Check your postal code or <A href="#manual-entry" className="govuk-link">enter your address manually</A>.
          </Details>
        </Fieldset>
        <h2 className="govuk-heading-m">Country</h2>
        <p className="govuk-body">Norway</p>
      </div>

      <p className="govuk-body">If there are more than 10 towns or cities, use autosuggest to allow the town or city to be selected:</p>

      <div className="app-example">
        <h1 className="govuk-heading-l">What is your address?</h1>
        <h2 className="govuk-heading-m">Postal code</h2>
        <p className="govuk-body">9007 <A href="#postal-code" className="govuk-link">Change</A></p>
        <Fieldset
          legend={
            <h2 className="govuk-heading-m">Address</h2>
          }
          className="govuk-!-width-two-thirds"
        >
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
        <Details summary="I cannot find my town or city">
          Check your postal code or <A href="#manual-entry" className="govuk-link">enter your address manually</A>.
        </Details>
        </Fieldset>
        <h2 className="govuk-heading-m">Country</h2>
        <p className="govuk-body">Norway</p>
      </div>

      <h4 className="govuk-heading-s">Use the postal code to get possible addresses</h4>
      <p className="govuk-body">Sometimes there is a defined list of addresses for each postal code in a country.</p>
      <p className="govuk-body">Use when users are familiar with this use of postal code.</p>
      <p className="govuk-body">Allow users to:</p>
      <ul className="govuk-list govuk-list--bullet">
        <li>select the address from an autosuggest</li>
        <li>change the postal code</li>
        <li>enter their address manually</li>
      </ul>

      <div className="app-example">
        <Select
          label={
            <h1 className="govuk-heading-l">What is your address?</h1>
          }
          name="address"
          options={[
            {
              value: "12 addresses found",
              label: "12 addresses found",
              selected: true
            }
          ]}
        />
        <h2 className="govuk-heading-m">Postal code</h2>
        <p className="govuk-body">A65 F4E2 <A href="#postal-code" className="govuk-link">Change</A></p>
        <h2 className="govuk-heading-m">Country</h2>
        <p className="govuk-body">Ireland</p>
        <p className="govuk-body"><A href="#manual-entry" className="govuk-link">I cannot find my address in the list</A></p>
      </div>
      
      <p className="govuk-body">If there are no addresses for the postal code, allow the user to change the postal code or enter their address manually. For example:</p>

      <div className="app-example">
        <h1 className="govuk-heading-l">No addresses found</h1>
        <h2 className="govuk-heading-m">Postal code</h2>
        <p className="govuk-body">A65 F4E2 <A href="#postal-code" className="govuk-link">Change</A></p>
        <h2 className="govuk-heading-m">Country</h2>
        <p className="govuk-body">Ireland</p>
        <p className="govuk-body"><A href="#manual-entry" className="govuk-link">Enter address manually</A></p>
      </div>

      <h3 className="govuk-heading-m">No postal code</h3>

      <p className="govuk-body">If there are no postal codes, consider using a complete list of towns or cities in that country. Without a list, small villages or regions may be entered.</p>

      <p className="govuk-body">Balance the need of the user to receive their delivery with the barrier of interaction.</p>

      <div className="app-example">
        <h1 className="govuk-heading-l">What is your address?</h1>
        <h2 className="govuk-heading-m">Postal code</h2>
        <p className="govuk-body">9007 <A href="#postal-code" className="govuk-link">Change</A></p>
        <Fieldset
          legend={
            <h2 className="govuk-heading-m">Address</h2>
          }
          className="govuk-!-width-two-thirds"
        >
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
        </Fieldset>
        <p className="govuk-body"><A href="#manual-entry" className="govuk-link">I cannot find my town or city</A>.</p>
        <h2 className="govuk-heading-m">Country</h2>
        <p className="govuk-body">Norway</p>
      </div>

      <p className="govuk-body">In some places, like Bermuda, users expect a postal code field, even though some delivery companies do not accept them. In this case, ask for the postal code optionally, and do not share it with the delivery company.</p>

      <h3 className="govuk-heading-m" id="manual-entry">Manual entry</h3>

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
        <p className="govuk-body">Saint Pierre and Miquelon</p>
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
        <li>up to 10 characters</li>
      </ul>

      <h2 className="govuk-heading-l">Accessibility</h2>
      <p className="govuk-body">Consider that users may need more than one method for capturing the information. What do they do if they hit a barrier?</p>

      <h2 className="govuk-heading-l">Research</h2>
      <p className="govuk-body">Delivery address outside the UK is used by:</p>
      <ul className="govuk-list govuk-list--bullet">
        <li>Apply for a passport</li>
      </ul>

      <h2 className="govuk-heading-l">Help us improve this pattern</h2>
      <p className="govuk-body">This pattern needs improving. We need evidence about:</p>
      <ul className="govuk-list govuk-list--bullet">
        <li>limiting to the latin-based character set, would allowing other alphabets characters remove barriers</li>
        <li>how an autosuggest should behave</li>
        <li>different structures of addresses, such as ones in the reverse order</li>
      </ul>

      <p className="govuk-body">To contribute, add your thoughts and research findings to our <A href="https://github.com/UKHomeOffice/design-system/discussions/580">GitHub discussion</A>, or follow our <A href="/contribute">contribute guidance</A>.</p>
    </div>
</div>

);

export default Page;

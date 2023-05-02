import { FC, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A, DateInput, Details, Radios, TextInput, Select } from '@not-govuk/components';
import { menu } from '../../patterns';

export const title = 'Take or upload photo of passport';
const description = 'How to ask users for passport details';
const section = 'Patterns';
const subsection = 'Help users to';

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

      <p className="govuk-body">Use optical character recognition to read the machine-readable zone of the passport.</p>

      <h2 className="govuk-heading-l">When to use this pattern</h2>
      <p className="govuk-body">If users take or upload a photo, the system should use optical character recognition (OCR) to read the machine-readable zone (MRZ) at the bottom of the passport page. Consider which pieces of data in the MRZ you actually need to capture.</p>

      <p className="govuk-body">This method is less trustworthy than reading directly from the chip, but more trustworthy than manual data entry.</p>

      <p className="govuk-body">You may ask users to take or upload a photo, in order to <A href="/patterns/enter-passport-details/scan-passport-chip">scan the chip</A>.</p>

      <h2 className="govuk-heading-l">How it works</h2>
      <p className="govuk-body">You should explain why they need to take a picture of their passport, and provide some helpful tips. Consider providing in-camera guidance, indicating when the passport is lined up and readable.</p>

      <div className="app-example">
        <p className="govuk-body">The photo or scan must show:</p>
        <ul className="govuk-list govuk-list--bullet">
          <li>all 4 corners of the personal details page</li>
          <li>your personal details, including the photo of you</li>
          <li>the machine-readable zone (MRZ)</li>
        </ul>

        <p className="govuk-body">The MRZ is 2 lines of letters, symbols and numbers at the bottom of the personal details page on your passport:</p>
        <p className="monospace">
          P&gt;GBRSMITH&gt;&gt;ANGELA&gt;ZOE&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;<br/>
          9990727768GBR7308196F2807041&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;02
        </p>

        <p className="govuk-body">The photo or scan must be:</p>
        <ul className="govuk-list govuk-list--bullet">
          <li>clear and in focus</li>
          <li>without glare or reflections </li>
        </ul>
      </div>

      <p className="govuk-body">Consider what users can do if they hit a barrier. For example, if they cannot take a good enough photo, can they enter data manually.</p>

      <p className="govuk-body">Consider automated checks to check the quality, such as orientation, shadows, 4 corners in the frame. You should consider the error messages and feedback to help users take a better photo.</p>

      <h3 className="govuk-heading-m">Check the information</h3>
      <p className="govuk-body">There is a small chance that the computer misreads the characters.</p>
      <p className="govuk-body">Use check your answers so that users can check that the information has been read correctly. You’ll need to explain that the information may look different, due to transliteration, translation, truncation or formatting. Only show the information that you’re storing and need to use in the check answers. For example, if you’re not storing or using their sex, then don’t show it.</p>

      <p className="govuk-body">Consider the format of the data when asking users to check. The format of dates does not make a huge different to understanding. Make sure you clearly explain what format the dates are in.</p>
     
      <h3 className="govuk-heading-m">Names</h3>
      <p className="govuk-body">Consider if you need to collect their name from the passport, and whether you need the name in the machine-readable zone or on the visual display.</p>
      <p className="govuk-body">The names stored on the chip may be truncated. The names are identical to those in the machine-readable zone. They may appear different in the visual display of the passport, it may be:</p>
      <ul className="govuk-list govuk-list--bullet">
        <li>truncated to 39 characters</li>
        <li>transliterated into the 26 character Latin alphabet </li>
        <li>diacritics are removed</li>
      </ul>

      <p className="govuk-body">Consider how to explain to users that their name might look different to their name on the page.</p>

      <h3 className="govuk-heading-m">Date of birth century</h3>
      <p className="govuk-body">The date of birth stored on the chip only has 2 digits for the year. You may need to ask users for the century to confirm whether the year is 1920 or 2020, if it’s not obvious from context.</p>

      <div className="app-example">
        <Radios
          label="Confirm your date of birth"
          hint="Select your date of birth YYYY-MM-DD"
          name="select-date-of-birth"
          options={[
            {
              value: "2016-03-21",
              label: "2016-03-21"
            },
            {
              value: "1916-03-21",
              label: "1916-03-21"
            }
          ]}
        />
      </div>

      <h3 className="govuk-heading-m">Nationality</h3>
      <p className="govuk-body">The nationality in the machine-readable zone is stored as a 3-letter code. These mostly relate to countries. Consider whether to show the 3-letter code or the associated country name.</p>
      <p className="govuk-body">The nationality is the visual part of the passport will not always match the 3-letter code or the associated country name.</p>

      <h3 className="govuk-heading-m">Additional MRZ information</h3>
      <p className="govuk-body">The MRZ may contain additional information that some countries use. You should ignore these optional pieces of data.</p>

      <h2 className="govuk-heading-l">Accessibility</h2>
      <p className="govuk-body">Consider that users may need more than one method for capturing the information. What do they do if they hit a barrier?</p>

      <h2 className="govuk-heading-l">Research</h2>
      <p className="govuk-body">This pattern is used by:</p>
      <ul className="govuk-list govuk-list--bullet">
        <li>an electronic visa waiver scheme</li>
        <li>Apply for a visa</li>
        <li>Confirm your identity (Generic identity verification)</li>
        <li>Update your UKVI account details</li>
      </ul>

      <h2 className="govuk-heading-l">Help us improve this pattern</h2>
      <p className="govuk-body">This pattern needs improving. We need evidence about:</p>
      <ul className="govuk-list govuk-list--bullet">
        <li>asking for information from emergency passports</li>
        <li>asking for information from other identity documents, such as national identity cards, UK residence card, biometric residence card, biometric residence permit </li>
        <li>whether to label nationality as country of nationality when showing users the information read from the photo</li>
      </ul>

      <p className="govuk-body">To contribute, add your thoughts and research findings to our <A href="https://github.com/UKHomeOffice/design-system/discussions/449">GitHub discussion</A>, or follow our <A href="/contribute">contribute guidance</A>.</p>
    </div>
</div>

);

export default Page;

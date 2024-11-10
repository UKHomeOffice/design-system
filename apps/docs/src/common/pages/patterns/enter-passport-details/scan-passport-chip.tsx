import { FC, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A, DateInput, Details, Radios, TextInput, Select } from '@not-govuk/components';
import { menu } from '../../patterns';

export const title = 'Scan the passport chip';
const description = 'How to ask users to scan the chip of their passport';
const section = 'Patterns';
const subsection = 'Ask users to';

const ePassportLogo = require('../../../../../assets/images/patterns/EPassport_logo.svg');

const Page: FC<PageProps> = () => (
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

      <p className="govuk-body">Scan the passport chip to get the information from the passport.</p>

      <h2 className="govuk-heading-l">When to use this pattern</h2>
      <p className="govuk-body">This pattern is for services where members of the public scan their passport.</p>
      <p className="govuk-body">You may find that your particular use case or user needs means you need to adjust the guidance based on your research.</p>

      <p className="govuk-body">You should make it clear which passport the user needs to scan, because a person may have several.</p>

      <h2 className="govuk-heading-l">How it works</h2>
      <p className="govuk-body">Users can only scan the chip in their passport, if they are using a device with a near field communication (NFC) chip. Phones that can make contactless payments have an NFC chip.</p>
      <p className="govuk-body">For external users, this normally means they need to be using a mobile phone app.</p>

      <p className="govuk-body">To scan the chip, you need the information in the machine-readable zone (MRZ) of the passport. Users should <A href="/patterns/enter-passport-details/take-upload-photo">take or upload a photo</A>.</p>

      <p className="govuk-body">Scanning the chip in a passport has the highest level of trust. It also collects the largest amount of data, the chip contains:</p>
      <ul className="govuk-list govuk-list--bullet">
        <li>the data in the machine-readable zone (MRZ)</li>
        <li>at least one or more facial biometric encoding</li>
        <li>zero or more finger biometric encodings</li>
      </ul>

      <p className="govuk-body">However not all passports have chips, so you’ll need to ask the user whether their passport has a chip or not. You might already know from the context that the passport must have a chip, for example it’s a UK passport from after 2006. To determine whether the passport has a chip, ask the user if the chip symbol is on the front cover (it may be a different colour).</p>

      <p className="govuk-body">Some users with some passports may not be able to tell that their passport has a chip. You should provide an alternative method, such as <A href="/patterns/enter-passport-details/manually-enter-details">manual entry</A>.</p>

      <div className="app-example">
        <img src={ePassportLogo} />
        <Radios
          label="Does your passport have a biometric chip?"
          hint="Look for this symbol usually on the cover of a passport"
          name="passport-has-biometric-chip"
          options={[
            {
              value: "yes",
              label: "Yes"
            },
            {
              value: "no",
              label: "No"
            }
          ]}
        />
      </div>

      <p className="govuk-body">You should explain why they need to scan their passport, and provide some helpful tips:</p>
      <ul className="govuk-list govuk-list--bullet">
        <li>close your passport</li>
        <li>remove any phone cases</li>
        <li>remove any passport cases</li>
        <li>put the top of your phone halfway down your passport</li>
        <li>your phone is touching your passport</li>
      </ul>

      <p className="govuk-body">Provide visual guidance to assist users who find it hard to read English.</p>

      <p className="govuk-body">You should investigate if there is a limit to the number of times that the chip can be scanned. This should be clearly communicated to the user at the beginning of the process.</p>

      <p className="govuk-body">You should provide pictures, sounds and vibrations as feedback to users while scanning the chip.</p>

      <p className="govuk-body">If the chip scan fails then show the helpful tips again, before asking the user to try again.</p>

      <p className="govuk-body">Consider what users can do if they hit a barrier:</p>
      <ul className="govuk-list govuk-list--bullet">
        <li>if they don’t have a compatible phone, can they go to a physical location to get their passport scanned, or should they try another method</li>
        <li>if the scanning of the chip completely fails, what do they do next</li>
      </ul>

      <p className="govuk-body">Once a chip is successfully scanned, there are background checks on the data. You should consider what happens if these fail.</p>

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

      <h3 className="govuk-heading-m">Names</h3>
      <p className="govuk-body">The names stored on the chip may be truncated. The names are identical to those in the machine-readable zone. They may appear different to in the visual display of the passport, it may be:</p>
      <ul className="govuk-list govuk-list--bullet">
        <li>truncated to 39 characters</li>
        <li>transliterated into the 26 character Latin alphabet </li>
        <li>diacritics are removed</li>
      </ul>

      <p className="govuk-body">You should present the important information back to the user. You should not allow them to change the answers. You should provide guidance on what to do if the information is incorrect.</p>

      <h2 className="govuk-heading-l">Accessibility</h2>
      <p className="govuk-body">Consider that users may need more than one method for capturing the information. What do they do if they hit a barrier?</p>
      <p className="govuk-body">Some users with some passports may not be able to tell that their passport has a chip. You should provide an alternative method, such as <A href="/patterns/enter-passport-details/manually-enter-details">manual entry</A>.</p>

      <h2 className="govuk-heading-l">Research</h2>
      <p className="govuk-body">Scanning the chip is used by:</p>
      <ul className="govuk-list govuk-list--bullet">
        <li><A href="https://play.google.com/store/apps/details?id=uk.gov.HomeOffice.ho2&hl=en_GB&gl=US">UK Immigration: ID check app</A></li>
        <li><A href="https://play.google.com/store/apps/details?id=uk.gov.HomeOffice.ho1&hl=en_GB&gl=US">EU Exit: ID document check</A></li>
      </ul>

      <h2 className="govuk-heading-l">Help us improve this pattern</h2>
      <p className="govuk-body">This pattern needs improving. We need evidence about:</p>
      <ul className="govuk-list govuk-list--bullet">
        <li>scanning passport chips in internal systems</li>
        <li>asking for information from other identity documents, such as national identity cards, UK residence card, biometric residence card, biometric residence permit </li>
        <li>whether to label nationality as country of nationality when showing users the information scanned in the chip</li>
      </ul>

      <p className="govuk-body">To contribute, add your thoughts and research findings to our <A href="https://github.com/UKHomeOffice/design-system/discussions/449">GitHub discussion</A>, or follow our <A href="/contribute">contribute guidance</A>.</p>
    </div>
</div>

);

export default Page;

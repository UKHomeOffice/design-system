import { FC, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A, DateInput, Details, Radios, TextInput, Select } from '@not-govuk/components';
import { menu } from '../patterns';

export const title = 'Enter passport details';
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
      <p className="govuk-body">You can ask for passport details in 3 ways. Users can:</p>
      <ul className="govuk-list govuk-list--bullet">
        <li><A href="#scan-the-chip">scan the chip</A> in their passport</li>
        <li><A href="#take-upload-photo-scan">take and upload a photo or scan</A> of the passport</li>
        <li><A href="#manually-enter">manually enter</A> the details</li>
      </ul>
      <p className="govuk-body">Use the <A href="https://www.consilium.europa.eu/prado/en/search-by-document-country.html">public register of identity documents</A> to see the similarities and differences between passports from around the world.</p>

      <h2 className="govuk-heading-l">When to use this pattern</h2>
      <p className="govuk-body">This is for both internal staff members and members of the public providing their passport details.</p>
      <p className="govuk-body">You may find that your particular use case or user needs means you need to adjust the guidance based on your research.</p>

      <h2 className="govuk-heading-l">How it works</h2>
      <p className="govuk-body">In all the methods, you should make it clear which passport the user needs to scan, an individual may have several.</p>
      
      <h3 className="govuk-heading-m" id="scan-the-chip">Scan the chip</h3>
      <p className="govuk-body">Users can only scan the chip in their passport, if they are using a device with a near field communication (NFC) chip. Phones that can make contactless payments have an NFC chip.</p>
      <p className="govuk-body">For external users, this normally means they need to be using a mobile phone app. For internal users, this could be a chip scanner, such as at the border.</p>

      <p className="govuk-body">Scanning the chip in a passport has the highest level of trust. It also collects the largest amount of data, the chip contains:</p>
      <ul className="govuk-list govuk-list--bullet">
        <li>the data in the machine-readable zone (MRZ)</li>
        <li>at least one or more facial biometric encoding</li>
        <li>zero or more finger biometric encodings</li>
      </ul>

      <p className="govuk-body">However not all passports have chips, so you’ll need to ask the user whether their passport has a chip or not. You might already know from the context that the passport must have a chip, for example it’s a UK passport from after 2006. To determine whether the passport has a chip, ask the user if the chip symbol is on the front cover (it may be a different colour).</p>

      <div className="app-example">
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
        <li>if they don’t have a compatible phone, can they go to a physical location to get their passport scanned, or should they try another method </li>
        <li>if the scanning of the chip completely fails, what do they do next </li>
      </ul>

      <h4 className="govuk-heading-s">Date of birth century</h4>
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

      <p className="govuk-body">The names stored on the chip may be truncated. The names are identical to those in the machine-readable zone. They may appear different to in the visual display of the passport, it may be:</p>
      <ul className="govuk-list govuk-list--bullet">
        <li>truncated to 39 characters</li>
        <li>transliterated into the 26 character Latin alphabet </li>
        <li>diacritics are removed</li>
      </ul>

      <p className="govuk-body">You should present the important information back to the user. You should not allow them to change the answers. You should provide guidance on what to do if the information is incorrect.</p>

      <p className="govuk-body">Scanning the chip is used by:</p>
      <ul className="govuk-list govuk-list--bullet">
        <li><A href="https://play.google.com/store/apps/details?id=uk.gov.HomeOffice.ho2&hl=en_GB&gl=US">UK Immigration: ID check app</A></li>
        <li><A href="https://play.google.com/store/apps/details?id=uk.gov.HomeOffice.ho1&hl=en_GB&gl=US">EU Exit: ID document check</A></li>
      </ul>

      <h3 className="govuk-heading-m" id="take-upload-photo-scan">Take and upload a photo or scan of the passport</h3>

      <p className="govuk-body">If users take and upload a photo, the system should use optical character recognition (OCR) to read the machine readable zone (MRZ) at the bottom of the passport page. Consider which pieces of data in the MRZ you actually need to capture.</p>

      <p className="govuk-body">This method is less trustworthy than reading directly from the chip, but more trustworthy than manual data entry. </p>

      <p className="govuk-body">You should explain why they need to take a picture of their passport, and provide some helpful tips. Consider providing in-camera guidance, indicating when the passport is lined up and readable.</p>

      <div className="app-example">
        <p className="govuk-body">The photo or scan must show:</p>
        <ul className="govuk-list govuk-list--bullet">
          <li>all 4 corners of the personal details page</li>
          <li>your personal details, including the photo of you</li>
          <li>the machine-readable zone (MRZ)</li>
        </ul>

        <p className="govuk-body">The MRZ is 2 or 3 lines of letters, symbols and numbers at the bottom of the personal details page on your passport:</p>
        <p className="govuk-body">
          P&gt;GBRSMITH&gt;&gt;ANGELA&gt;ZOE&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;<br/>
          9990727768GBR7308196F2807041&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;02
        </p>

        <p className="govuk-body">The photo or scan must be:</p>
        <ul className="govuk-list govuk-list--bullet">
          <li>clear and in focus</li>
          <li>without glare or reflections </li>
        </ul>
      </div>

      <p className="govuk-body">Consider what users can do if they hit a barrier:</p>
      <ul className="govuk-list govuk-list--bullet">
        <li>if they can’t take a good enough photo, can they enter the data manually</li>
      </ul>

      <p className="govuk-body">There is a small chance that the computer misreads the characters. Use check your answers so that users can check that the information has been read correctly. You’ll need to explain that the information may look different, due to transliteration, translation, truncation or formatting. Only show the information that you’re storing and need to use in the check answers. For example, if you’re not storing or using their sex, then don’t show it.</p>

      <p className="govuk-body">Consider the format of the data when asking users to check. The format of dates does not make a huge different to understanding. Make sure you clearly explain what format the dates are in.</p>

      <p className="govuk-body">The names stored on the chip may be truncated. The names are identical to those in the machine-readable zone. They may appear different to in the visual display of the passport, it may be:</p>
      <ul className="govuk-list govuk-list--bullet">
        <li>truncated to 39 characters</li>
        <li>transliterated into the 26 character Latin alphabet </li>
        <li>diacritics are removed</li>
      </ul>

      <h4 className="govuk-heading-s">Date of birth century</h4>
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

      <h4 className="govuk-heading-s">Nationality</h4>
      <p className="govuk-body">The nationality in the machine-readable zone is stored as a 3-letter code. These mostly relate to countries. Consider whether to show the 3-letter code or the associated country name.</p>
      <p className="govuk-body">The nationality is the visual part of the passport will not always match the 3-letter code or the associated country name.</p>

      <p className="govuk-body">The MRZ may contain additional information that some countries use. You should ignore these optional pieces of data.</p>

      <h3 className="govuk-heading-m" id="manually-enter">Manually enter passport details</h3>
      <p className="govuk-body">Manually entering passport details is the most prone to human error, and therefore the least trustworthy. It is technically the simplest, but we should be doing the <A href="https://www.gov.uk/guidance/government-design-principles#do-the-hard-work-to-make-it-simple">hard work to make it simple</A>.</p>

      <p className="govuk-body">Consider whether you need all the information, or just a small amount of it, such as the passport number. Depending on your users or journey, you may find evidence for separating over multiple pages or for including on one page.</p>

      <p className="govuk-body">You may have also collected some of this information already, such as sex, name and date of birth. When you collect this information, consider explaining in the question or in hint text that it should match their passport.</p>

      <p className="govuk-body">The captions for the fields in a passport must be translated into English, French or Spanish.</p>
      
      <h4 className="govuk-heading-s">Passport number</h4>
      <div className="app-example">
        <TextInput
          label="Passport number"
          hint="For example, 1208297A"
          name="passport-number"
        />
      </div>

      <p className="govuk-body">If more than 9 characters are entered, show: Passport number must be 9 characters or less.</p>
      <p className="govuk-body">If characters that are not letters or numbers are entered, show Passport number must only include numbers and letters a to z.</p>
      
      <h4 className="govuk-heading-s">Nationality</h4>
      <div className="app-example">
        <Select
          label="Nationality"
          hint="If you have more than one, use the nationality in the passport you are going to apply with. Use the English spelling or the country code."
          name="nationality"
          options={[
            {
              value: "uk",
              label: "United Kingdom of Great Britain and Northern Ireland",
            },
            {
              value: "comments",
              label: "France",
            },
          ]}
        />
      </div>
      
      <p className="govuk-body">The nationality may be shown on the page in full or as a 3 letter code. In the MRZ, nationality is a 3 letter code.</p>

      <Details summary="Values for nationality">
        <p className="govuk-body">The valid values for nationality are the <A href="https://www.iso.org/obp/ui/#search/code/">ISO-3166-1 country codes</A> plus:</p>
        <ul className="govuk-list govuk-list--bullet">
          <li>GBD – British Overseas Territories Citizen</li>
          <li>GBN – British National (Overseas)</li>
        </ul>

        <p className="govuk-body">Source: <A href="https://www.icao.int/publications/pages/publication.aspx?docnum=9303">ICAO, Doc 9303</A>, Part 3, Section 5.</p>

        <p className="govuk-body">You should replace ‘GBR - United Kingdom of Great Britain and Northern Ireland’ with ‘GBR - British Citizen’. This is because ‘British Citizen’ is displayed on passports with the GBR code in the MRZ and chip.</p>
        <p className="govuk-body">If you already know some are options are impossible, you can remove them. If you are using a nationality field to check eligibility, you should keep all options and explain to the user on the next page why they are not eligible.</p>
      </Details>

      <p className="govuk-body">You may label the field as ‘Country of nationality’ instead of ‘Nationality’. There may be advantages and disadvantages to this. You should consider whether or not they are relevant to your service.</p>

      <p className="govuk-body">The advantages are:</p>
      <ul className="govuk-list govuk-list--bullet">
        <li>the options are mostly countries, such as ‘Sweden’ instead of ‘Swedish’</li>
      </ul>

      <p className="govuk-body">The disadvantages are:</p>
      <ul className="govuk-list govuk-list--bullet">
        <li>not all the options are countries, such as ‘EUE - European Union’</li>
        <li>it's different to what appears on most passports, which is either Nationality (English), Nationalité (French), Nacionalidad (Spanish) </li>
      </ul>

      <p className="govuk-body">We don’t know whether ‘Country of nationality’ or ‘Nationality’ is easier to understand for people without English as their first language.</p>

      <p className="govuk-body">If your users are not British or from the international organisations that issue travel and identity documents, we recommend using ‘Country of nationality’. This is because all the options will be countries.</p>

      <div className="app-example">
        <Select
          label="Country of issue"
          hint="This is usually shown on the first page of your passport, at the top. Use the English spelling or the country code. "
          name="country-of-issue"
          options={[
            {
              value: "uk",
              label: "United Kingdom of Great Britain and Northern Ireland",
            },
            {
              value: "comments",
              label: "France",
            },
          ]}
        />
      </div>

      <p className="govuk-body">The issuing authority is a separate mandatory field, which refers to some organisation within the country of issue. You should ensure you don’t confuse users by referring to ‘authority’ or ‘issuing authority’, when you need the country of issue.</p>

      <Details summary="Values for country of issue">
        <p className="govuk-body">The valid values for country of issue are the <A href="https://www.iso.org/obp/ui/#search/code/">ISO-3166-1 country codes</A> plus:</p>
        <ul className="govuk-list govuk-list--bullet">
          <li>GBD – British Overseas Territories Citizen</li>
          <li>GBN – British National (Overseas)</li>
          <li>Plus more</li>
        </ul>

        <p className="govuk-body">Source: <A href="https://www.icao.int/publications/pages/publication.aspx?docnum=9303">ICAO, Doc 9303</A>, Part 3, Section 5.</p>
      </Details>
      
      <h4 className="govuk-heading-s">Country of issue</h4>
      <p className="govuk-body">The country of issue field is referred to as the Issuing state or organisation in <A href="https://www.icao.int/publications/pages/publication.aspx?docnum=9303">ICAO, Doc 9303</A>. The standards say that it must be:</p>
      <ul className="govuk-list govuk-list--bullet">
        <li>written in out in full at the top of the passport page in English, French or Spanish</li>
        <li>shown as a 3 letter code under Code or Country code (in English, French or Spanish)</li>
      </ul>

      <div className="app-example">
        <Select
          label="Country of issue"
          hint="This is usually shown on the first page of your passport, at the top. Use the English spelling or the country code. "
          name="country-of-issue"
          options={[
            {
              value: "uk",
              label: "United Kingdom of Great Britain and Northern Ireland",
            },
            {
              value: "comments",
              label: "France",
            },
          ]}
        />
      </div>
      <h4 className="govuk-heading-s">Issue date</h4>
      <div className="app-example">
        <DateInput
          label="Issue date"
          name="passport-issue-date"
          hint="For example, 31 3 2022"
        />
      </div>

      <p className="govuk-body">The issue date should be validated to be in the past.</p>
        
      <h4 className="govuk-heading-s">Expiry date</h4>
      <div className="app-example">
        <DateInput
          label="Expiry date"
          name="passport-expiry-date"
          hint="For example, 31 7 2032"
        />
      </div>

      <p className="govuk-body">If you’re capturing current valid passports, then the expiry date should be validated to be in the future. All passports must have an expiry date.</p>
      <p className="govuk-body">Not all countries have a standard 10 year length of passport validity. You may know more about expiry dates from your context, such as if you are collecting UK passport details.</p>
      <p className="govuk-body">Allow users to check their answers after manually entering passport details. </p>

      <h2 className="govuk-heading-l">Accessibility</h2>
      <p className="govuk-body">Consider that users may need more than one method for capturing the information. What do they do if they hit a barrier?</p>

      <h2 className="govuk-heading-l">Research</h2>
      <p className="govuk-body">The insights that informed this model came from multiple services across the Home Office including:</p>
      <ul className="govuk-list govuk-list--bullet">
        <li>Refugee Integration Loans</li>
        <li>Penalty notices</li>
        <li>Atlas caseworking system</li>
        <li>EU Settlement Scheme</li>
        <li>Home Office HR system</li>
      </ul>

      <h2 className="govuk-heading-l">Help us improve this pattern</h2>
      <p className="govuk-body">This pattern needs improving. We need evidence about:</p>
      <ul className="govuk-list govuk-list--bullet">
        <li>asking for information from emergency passports </li>
        <li>asking for information from other identity documents, such as national identity cards, UK residence card, biometric residence card, biometric residence permit </li>
        <li>how the search for nationality should work, do better matches appear closer to the top, what about alternative country names so ‘Britain’</li>
        <li>if nationality or country of nationality is clearer to users, particularly observed confusion over the options being mostly countries</li>
        <li>if country of issue causes a barrier for entering passports issued by an organisation (say the European Union) rather than a country</li>
        <li>the hint text for country of issue, how do users interpret the first page of the passport</li>
      </ul>

      <p className="govuk-body">To contribute, add your thoughts and research findings to our <A href="https://github.com/UKHomeOffice/design-system/discussions/449">GitHub discussion</A>, or follow our <A href="/contribute">contribute guidance</A>.</p>
    </div>
</div>

);

export default Page;

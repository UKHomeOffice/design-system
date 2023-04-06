import { FC, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A, DateInput, Details, TextInput, Select } from '@not-govuk/components';
import { menu } from '../../patterns';

export const title = 'Manually enter passport details';
const description = 'How to ask users to manually enter passport details';
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

      <p className="govuk-body">Users enter passport details in response to a series of questions.</p>

      <h2 className="govuk-heading-l">When to use this pattern</h2>
      <p className="govuk-body">Entering passport details manually can be a source of error. If you need more trust in the data, you could <A href="take-upload-photo">take and upload photo</A> or <A href="scan-passport-chip">scan the chip</A>.</p>

      <p className="govuk-body">Consider whether you need all the information, or just a small amount of it, such as the passport number. Depending on your users or journey, you may find evidence for separating over multiple pages or for including on one page.</p>

      <p className="govuk-body">You may have also collected some of this information already, such as sex, name and date of birth. You can either:</p>
      <ul className="govuk-list govuk-list--bullet">
        <li>when you ask for the information, explain that it should match their passport</li>
        <li>ask for the information again, if you think it could be different from their passport</li> 
      </ul>
      
      <p className="govuk-body">This pattern could be used as an alternative option if the other patterns do not work for a user.</p>

      <p className="govuk-body">The captions for the fields in a passport must be translated into English, French or Spanish.</p>

      <p className="govuk-body">You should make it clear which passport the user needs to enter the information from, because a person may have several.</p>

      <p className="govuk-body">Allow users to check their answers after manually entering passport details.</p>
      
      <h2 className="govuk-heading-l">How it works</h2>
      <h3 className="govuk-heading-m">Passport number</h3>
      <div className="app-example">
        <TextInput
          label="Passport number"
          hint="For example, 1208297A"
          name="passport-number"
        />
      </div>

      <p className="govuk-body">If more than 9 characters are entered, show: Passport number must be 9 characters or less.</p>
      <p className="govuk-body">If characters that are not letters or numbers are entered, show Passport number must only include numbers and letters a to z.</p>
      
      <h3 className="govuk-heading-m">Nationality</h3>
      <div className="app-example">
        <Select
          label="Nationality"
          hint="If you have more than one, use the nationality in the passport you are going to apply with. Use the English spelling or the country code."
          name="nationality"
          options={[
            {
              value: "france",
              label: "FRA - France"
            },
            {
              value: "uk",
              label: "GBR - British Citizen"
            }
          ]}
        />
      </div>
      
      <p className="govuk-body">The nationality may be shown on the page in full or as a 3 letter code. In the MRZ, nationality is a 3 letter code.</p>

      <Details summary="Values for nationality">
        <p className="govuk-body">The valid values for nationality are the <A href="https://www.iso.org/obp/ui/#search/code/">ISO-3166-1 country codes</A> plus:</p>
        <ul className="govuk-list govuk-list--bullet">
          <li>GBD - British Overseas Territories Citizen</li>
          <li>GBN - British National (Overseas)</li>
          <li>GBO - British Overseas Citizen</li>
          <li>GBP - British Protected Person</li>
          <li>GBS - British Subject</li>
          <li>RKS - Republic of Kosovo</li>
          <li>EUE - European Union</li>
          <li>UNO - United Nations Organization</li>
          <li>UNA - United Nations specialized agencey</li>
          <li>UNK - Resident of Kosovo to whom a travel document has been issued by the United Nations Interim Administration Mission in Kosovo</li>
          <li>XBA - African Development Bank</li>
          <li>XIM - African Export-Import Bank</li>
          <li>XCC - Carribean Community or one of its emmisaries</li>
          <li>XCE - Council of Europe</li>
          <li>XCO - Common Market for Eastern and Southern Africe</li>
          <li>XEC - Economic Community of West African States</li>
          <li>XPO - International Criminal Police Organization</li>
          <li>XES - Organization of Eastern Carribean States</li>
          <li>XMP - Parliamentary Assembly of the Mediterranean</li>
          <li>XOM - Sovereign Military Order of Malta or one of its emissaries</li>
          <li>XDC - Southern African Development Community</li>
          <li>XXA - Stateless person</li>
          <li>XXB - Refugee as defined in Article 1 of the 1951 Convention Relating to the Status of Refugees</li>
          <li>XXC - Refugee, other than as defined in XXB</li>
          <li>XXX - Person of unspecified nationality</li>
        </ul>

        <p className="govuk-body">Source: <A href="https://www.icao.int/publications/pages/publication.aspx?docnum=9303">ICAO, Doc 9303</A>, Part 3, Section 5.</p>

        <p className="govuk-body">You should replace ‘GBR - United Kingdom of Great Britain and Northern Ireland’ with ‘GBR - British Citizen’. This is because ‘British Citizen’ is displayed on passports with the GBR code in the MRZ and chip.</p>
        <p className="govuk-body">If you already know some are options are impossible, you can remove them. If you are using a nationality field to check eligibility, you should keep all options and explain to the user on the next page why they are not eligible.</p>
      </Details>

      <h4 className="govuk-heading-s">Country of nationality</h4>

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
      
      <h3 className="govuk-heading-m">Country of issue</h3>
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
              value: "france",
              label: "FRA - France"
            },
            {
              value: "uk",
              label: "GBR - United Kingdom of Great Britain and Northern Ireland"
            }
          ]}
        />
      </div>

      <p className="govuk-body">The issuing authority is a separate mandatory field, which refers to some organisation within the country of issue. You should ensure you don’t confuse users by referring to ‘authority’ or ‘issuing authority’, when you need the country of issue.</p>

      <Details summary="Values for country of issue">
        <p className="govuk-body">The valid values for country of issue are the <A href="https://www.iso.org/obp/ui/#search/code/">ISO-3166-1 country codes</A> plus:</p>
        <ul className="govuk-list govuk-list--bullet">
          <li>GBD - British Overseas Territories Citizen</li>
          <li>GBN - British National (Overseas)</li>
          <li>GBO - British Overseas Citizen</li>
          <li>GBP - British Protected Person</li>
          <li>GBS - British Subject</li>
          <li>RKS - Republic of Kosovo</li>
          <li>EUE - European Union</li>
          <li>UNO - United Nations Organization</li>
          <li>UNA - United Nations specialized agencey</li>
          <li>UNK - Resident of Kosovo to whom a travel document has been issued by the United Nations Interim Administration Mission in Kosovo</li>
          <li>XBA - African Development Bank</li>
          <li>XIM - African Export-Import Bank</li>
          <li>XCC - Carribean Community or one of its emmisaries</li>
          <li>XCE - Council of Europe</li>
          <li>XCO - Common Market for Eastern and Southern Africe</li>
          <li>XEC - Economic Community of West African States</li>
          <li>XPO - International Criminal Police Organization</li>
          <li>XES - Organization of Eastern Carribean States</li>
          <li>XMP - Parliamentary Assembly of the Mediterranean</li>
          <li>XOM - Sovereign Military Order of Malta or one of its emissaries</li>
          <li>XDC - Southern African Development Community</li>
          <li>XXA - Stateless person</li>
          <li>XXB - Refugee as defined in Article 1 of the 1951 Convention Relating to the Status of Refugees</li>
          <li>XXC - Refugee, other than as defined in XXB</li>
          <li>XXX - Person of unspecified nationality</li>
        </ul>

        <p className="govuk-body">Source: <A href="https://www.icao.int/publications/pages/publication.aspx?docnum=9303">ICAO, Doc 9303</A>, Part 3, Section 5.</p>
      </Details>

      <h3 className="govuk-heading-m">Issue date</h3>
      <div className="app-example">
        <DateInput
          label="Issue date"
          name="passport-issue-date"
          hint="For example, 31 3 2022"
        />
      </div>

      <p className="govuk-body">The issue date should be validated to be in the past.</p>
        
      <h3 className="govuk-heading-m">Expiry date</h3>
      <div className="app-example">
        <DateInput
          label="Expiry date"
          name="passport-expiry-date"
          hint="For example, 31 7 2032"
        />
      </div>

      <p className="govuk-body">If you’re capturing current valid passports, then the expiry date should be validated to be in the future. All passports must have an expiry date.</p>
      <p className="govuk-body">Not all countries have a standard 10 year length of passport validity. You may know more about expiry dates from your context, such as if you are collecting UK passport details.</p>

      <h2 className="govuk-heading-l">Accessibility</h2>
      <p className="govuk-body">Consider that users may need more than one method for capturing the information. What do they do if they hit a barrier?</p>

      <p className="govuk-body">Allow users to check their answers after manually entering passport details. </p>

      <h2 className="govuk-heading-l">Research</h2>
      <p className="govuk-body">This pattern is used by:</p>
      <ul className="govuk-list govuk-list--bullet">
        <li>Apply for a visa</li>
        <li>Central operations platform</li>
      </ul>

      <h2 className="govuk-heading-l">Help us improve this pattern</h2>
      <p className="govuk-body">This pattern needs improving. We need evidence about:</p>
      <ul className="govuk-list govuk-list--bullet">
        <li>asking for information from emergency passports </li>
        <li>asking for information from other identity documents, such as national identity cards, UK residence card, biometric residence card, biometric residence permit</li>
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

import { FC, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A } from '@not-govuk/components';
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
        <li>take and upload a photo or scan of the passport</li>
        <li>manually enter the details</li>
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

      <h3 className="govuk-heading-m">Main page content</h3>
      <ol className="govuk-list app-letter-model">
        <li className="app-annotate-block">
          <span className="app-annotate-block__label">block: header</span>
          <div className="govuk-grid-row">
            <div className="govuk-grid-column-one-half">
              <ol className ="govuk-list">
                <li className="app-annotate-block">
                  <span className="app-annotate-block__label">left element: logo</span>
                </li>
                <li className="app-annotate-block">
                  <span className="app-annotate-block__label">left element: recipient address</span>
                </li>
                <li className="app-annotate-block">
                  <span className="app-annotate-block__label">left element: date</span>
                </li>
              </ol>
            </div>
            <div className="govuk-grid-column-one-half govuk-!-width-one-half">
              <ol className="govuk-list">
                <li className="app-annotate-block">
                  <span className="app-annotate-block__label">right element: contact or return details</span>
                </li>
              </ol>
            </div>
          </div>
        </li>
        <li className="app-annotate-block">
          <span className="app-annotate-block__label">block: main message</span>
          <ol className="govuk-list">
            <li className="app-annotate-block">
              <span className="app-annotate-block__label">element: main header</span>
              <h1 className="govuk-heading-l">Main header summarising outcome or action</h1>
            </li>
            <li className="app-annotate-block">
              <span className="app-annotate-block__label">element: reference number</span>
              <p className="govuk-body">Include when and how to use the reference number</p>
            </li>
            <li className="app-annotate-block">
              <span className="app-annotate-block__label">element: recipient name</span>
              <p className="govuk-body">Dear first name and last name,</p>
            </li>
            <li className="app-annotate-block">
              <span className="app-annotate-block__label">element: summary</span>
              <p className="govuk-body">Summarise the outcome or action.</p>
              <ul className="govuk-list govuk-list--bullet">
                <li>Lists can help make multiple outcomes or actions more readable</li>
              </ul>
            </li>
          </ol>
        </li>
        <li className="app-annotate-block">
          <span className="app-annotate-block__label">block: next steps</span>
          <ol className="govuk-list">
            <li className="app-annotate-block">
              <span className="app-annotate-block__label">element: next steps header</span>
              <h2 className="govuk-heading-l">Header summarising next steps</h2>
            </li>
            <li className="app-annotate-block">
              <span className="app-annotate-block__label">element: next steps description</span>
              <p className="govuk-body">Concise description of what the user needs to do or where to go for ongoing support or advice.</p>
              <ul className="govuk-list govuk-list--bullet">
                <li>Lists can help make multiple outcomes or actions more readable</li>
              </ul>
            </li>
          </ol>
        </li>
        <li className="app-annotate-block">
          <span className="app-annotate-block__label">block: signature</span>
          <p className="govuk-body">Yours sincerely,</p>
          <p className="govuk-body">Sender</p>
        </li>
        <li className="app-annotate-block">
          <span className="app-annotate-block__label">block: page number</span>
          <p className="govuk-body">Page number or 'End of letter'</p>
        </li>
      </ol>

      <h3 className="govuk-heading-m">Additional letter content</h3>
      <p className="govuk-body">Include extra information on additional pages.</p>
      <ol className="govuk-list app-letter-model">
        <li className="app-annotate-block">
          <span className="app-annotate-block__label">block: standard content</span>
          <p className="govuk-body">Standard paragraphs not directly relevant to task, such as:</p>
          <ul className="govuk-list govuk-list--bullet">
            <li>data protection</li>
            <li>legal rights</li>
          </ul>
        </li>
        <li className="app-annotate-block">
          <span className="app-annotate-block__label">block: page number</span>
          <p className="govuk-body">Page number or 'End of letter'</p>
        </li>
      </ol>

      <h2 className="govuk-heading-l">Accessibility</h2>
      <p className="govuk-body">Some of our users will not speak English as a first language and literacy levels may vary.
        The content should be written to be clear and understandable for all and avoid jargon or over-complicated legal text.</p>

      <p className="govuk-body">Make sure you ask users whether they want to receive a letter or whether an alternative type of communication, like an email, would be better.</p>

      <p className="govuk-body">The letter should:</p>
      <ul className="govuk-list govuk-list--bullet">
        <li>use Arial font, or another sans-serif font</li>
        <li>use font size at least 12</li>
        <li>left-align English text, and other left to right languages</li>
        <li>right-align text that is read right to left</li>
        <li>not use italics</li>
        <li>use sentence case and not block capitals</li>
      </ul>

      <p className="govuk-body">If your service uses this pattern, let us know of any insights you have on accessibility considerations.</p>

      <h2 className="govuk-heading-l">Research</h2>
      <p className="govuk-body">The insights that informed this model came from multiple services across the Home Office including:</p>
      <ul className="govuk-list govuk-list--bullet">
        <li>Refugee Integration Loans</li>
        <li>Penalty notices</li>
        <li>Atlas caseworking system</li>
        <li>EU Settlement Scheme</li>
        <li>Home Office HR system</li>
      </ul>
      <p className="govuk-body">If you have evidence this also works for your users, you can contribute to our backlog.</p>

      <h2 className="govuk-heading-l">Help us improve this pattern</h2>
      <p>This pattern needs improving. We need evidence about:</p>
      <ul>
        <li>how you've used this template to design a letter</li>
        <li>any other accessibility considerations</li>
        <li>design differences if the letter is sent by email</li>
      </ul>

      <p className="govuk-body">To contribute, add your thoughts and research findings to our <A href="https://github.com/UKHomeOffice/design-system/discussions/377">GitHub discussion</A>, or follow our <A href="/contribute">contribute guidance</A>.</p>
    </div>
</div>

);

export default Page;

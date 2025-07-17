import { FC, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A } from '@not-govuk/components';
import config from '../../../../../config';

import { SubsectionWrap, title as subsection } from '../../';

const siteTitle = config.title;
const subsubsection = 'Send users';

export const title = subsubsection + ' a letter';
const longTitle = 'A letter';
const description = 'How to send users effective letters';

const Page: FC<PageProps> = () => (
  <SubsectionWrap>
    <Helmet>
      <title>{title} - {siteTitle}</title>
      <meta name="description" content={description} />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={description} />
    </Helmet>
    <h1>
      <span className="caption">{subsubsection}</span>
      {longTitle}
    </h1>
    <p className="govuk-body">The Home Office sends printed letters in the post to tell users:</p>
    <ul className="govuk-list govuk-list--bullet">
      <li>what is happening with their claim or application</li>
      <li>what they need to do next</li>
    </ul>
    <p className="govuk-body">All letters should be clear and easy to act on.</p>

    <h2 className="govuk-heading-l">When to use this pattern</h2>
    <p className="govuk-body">Use this pattern to tell users what has happened with their claim or application.</p>
    <p className="govuk-body">Use <A href="https://www.notifications.service.gov.uk/">GOV.UK Notify</A> to send letters in the post where possible.</p>

    <h2 className="govuk-heading-l">When not to use this pattern</h2>
    <p className="govuk-body">Do not use this pattern for letters that are:</p>
    <ul className="govuk-list govuk-list--bullet">
      <li>not part of a service - such as official letters from ministers</li>
      <li>attached to emails</li>
    </ul>
    <p className="govuk-body">Make sure you understand what letters are used for and who usually writes and approves them.
      Speak to your policy contact if you are not sure.</p>

    <h2 className="govuk-heading-l">What to include in a letter</h2>
    <p className="govuk-body">Each letter should have:</p>
    <ul className="govuk-list govuk-list--bullet">
      <li>a clear sender with an official logo, contact address and signature</li>
      <li>a reference number and details of when and how to use it</li>
      <li>the full name of the recipient so they trust it is authentic</li>
      <li>a main header summarising the outcome or action</li>
      <li>a concise description of the outcome or action - use lists to break up content</li>
      <li>a header summarising next steps</li>
      <li>a concise description of next steps - again, lists may help break up actions if there are several</li>
      <li>page numbers or 'end of letter' in the footer so they know they have read everything</li>
      <li>any standard paragraphs below the signature so they do not distract from the main message of the letter</li>
    </ul>

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

    <h3 className="govuk-heading-m">Improvements to the notice of intended prosecution letter</h3>
    <p className="govuk-body">In 2024, the Home Office redesigned a letter sent by police forces and tested it through a national trial.</p>
    <p className="govuk-body">For the new letter, the team:</p>
    <ul className="govuk-list govuk-list--bullet">
      <li>drew the users attention to important information, such as the offence and the action needed</li>
      <li>made the content more concise and clear</li>
      <li>simplified the layout</li>
      <li>made deadlines clear so users could plan their response</li>
      <li>used persuasive language that reinforced values and described what others are doing and would expect the user to do</li>
    </ul>
    <p className="govuk-body">The research and national trial found that by redesigning the letter to be easy, attractive, simple and timely:</p>
    <ul className="govuk-list govuk-list--bullet">
      <li>one police force saw an 85% decrease in related phone calls</li>
      <li>across the trial, an average of 62% of responses were returned within 14 days (up from 48%)</li>
    </ul>

    <h2 className="govuk-heading-l">Help us improve this pattern</h2>
    <p>This pattern needs improving. We need evidence about:</p>
    <ul>
      <li>how you've used this template to design a letter</li>
      <li>any other accessibility considerations</li>
      <li>design differences if the letter is sent by email</li>
    </ul>

    <p className="govuk-body">To contribute, add your thoughts and research findings to our <A href="https://github.com/UKHomeOffice/design-system/discussions/377">GitHub discussion</A>, or follow our <A href="/contribute">contribute guidance</A>.</p>
  </SubsectionWrap>
);

export default Page;

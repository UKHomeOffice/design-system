import { FC, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A } from '@not-govuk/components';
import config from '../../../config';

import { SubsectionWrap, title as subsection } from './';

const siteTitle = config.title;

export const title = 'Readability';
const longTitle = title;
const description = 'Accessibility guidance for readability';

const linksImage01 = require('../../../../../assets/images/accessibility/readability-score.png');

const Page: FC<PageProps> = () => (
  <SubsectionWrap>
    <Helmet>
      <title>{title} - {siteTitle}</title>
      <meta name="description" content={description} />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={description} />
    </Helmet>
    <h1>
      <span className="caption">{subsection}</span>
      {longTitle}
    </h1>
    <p>Keeping language clear and simple will make sure your service is understandable to all your users.</p>
    <p>Complicated words and long sentences can be a barrier, particularly for the following:</p>
    <ul>
      <li>users with learning disabilities or cognitive issues</li>
      <li>users with lower reading ability</li>
      <li>users whose first language is not English. This includes sign-language (BSL) speakers</li>
    </ul>
    <p>Sometimes you may need to publish content in languages other than English. It’s important to code this correctly as it will affect how some assistive technology interacts with the page – for example, it will read out text using the pronunciation rules of the coded language. All web pages should have the main language specified in the code.</p>
    <p>See the impact that <A href="https://www.w3.org/WAI/perspective-videos/understandable/">understandable content</A> has on user interaction.</p>

    <h2>Helping everyone</h2>
    <p>Simple language doesn’t mean dumbing down – short, clear sentences are easier to understand for everyone.</p>
    <p>Getting the coding right for both English and non-English content will help automatic translation software and search engines, as well as users of assistive technology.</p>
    <p>This guidance is about making your language accessible to all users. We also have guidance about ensuring your language is <A href="https://design.homeoffice.gov.uk/accessibility/inclusive-language">inclusive</A>.</p>

    <h2>The basics</h2>
    <p>Do:</p>
    <ul>
      <li>write clearly and simply</li>
      <li>use acronyms sparingly, and define the ones you do use</li>
      <li>set the language of every page</li>
      <li>set the language of any content that is in a different language to the rest of the page</li>
      <li>publish an easy-read version if your users need it</li>
    </ul>

    <p>Do not:</p>
    <ul>
      <li>use jargon or undefined acronyms</li>
      <li>write long or complicated sentences</li>
      <li>use idioms or figures of speech</li>
      <li>use ampersands or other text symbols in place of words</li>
    </ul>

    <table className="govuk-table">
      <caption className="govuk-table__caption govuk-table__caption--l">Examples of users with access needs</caption>
      <thead className="govuk-table__head">
        <tr className="govuk-table__row">
          <th scope="col" className="govuk-table__header">User</th>
          <th scope="col" className="govuk-table__header">Access need</th>
          <th scope="col" className="govuk-table__header">May find helpful</th>
        </tr>
      </thead>
      <tbody className="govuk-table__body">
        <tr className="govuk-table__row">
          <td className="govuk-table__cell">Blind or partially sighted</td>
          <td className="govuk-table__cell">Uses a screen reader or Braille translation software</td>
          <td className="govuk-table__cell">Language codes that will help the screen reader pronounce words correctly, or translate them accurately into Braille</td>
        </tr>

        <tr className="govuk-table__row">
          <td className="govuk-table__cell">Lower reading age</td>
          <td className="govuk-table__cell">Has a lower vocabulary and can’t confidently read longer words</td>
          <td className="govuk-table__cell">Clear and simple language</td>
        </tr>

        <tr className="govuk-table__row">
          <td className="govuk-table__cell">Dyslexic</td>
          <td className="govuk-table__cell">May struggle with longer paragraphs or more complicated sentences; may be using text-to-speech software</td>
          <td className="govuk-table__cell">Short, simple sentences, broken up with clear headings<br /><br />Language codes to help the software pronounce words correctly</td>
        </tr>

        <tr className="govuk-table__row">
          <td className="govuk-table__cell">Non-native English speaker</td>
          <td className="govuk-table__cell">May have limited vocabulary or be using translation software<br /><br />May be a BSL speaker</td>
          <td className="govuk-table__cell">Clear and simple language<br /><br />Language codes to aid translation software<br /><br />BSL video versions</td>
        </tr>

        <tr className="govuk-table__row">
          <td className="govuk-table__cell">Autistic Spectrum Disorder</td>
          <td className="govuk-table__cell">Finds idioms hard to understand</td>
          <td className="govuk-table__cell">Clear and simple language</td>
        </tr>
      </tbody>
    </table>

    <h2>Using language well</h2>

    <h3>Keep it simple</h3>

    <p>Follow the <A href="https://www.gov.uk/guidance/content-design/writing-for-gov-uk">GOV.UK best practice guidance</A> for writing content. Usually we recommend writing for a maximum reading age of 9, even if you are writing for a specialist audience. </p>
    <p>Microsoft Word has a reading-age checker within the spellcheck function (see following image) – there will be a score at the end of the checker, which you can interpret with a <A href="https://readable.com/readability/flesch-reading-ease-flesch-kincaid-grade-level/">conversion table</A>. See more <A href="#tools">readability tools</A> below.</p>

    <div className="govuk-grid-row">
      <div className="govuk-grid-column-two-thirds">
        <img src={linksImage01} alt="Screenshot of Microsoft Word reading-age checker within the spellcheck function" className="image-examples" />
      </div>
    </div>
    <br />

    <h3>Abbreviations</h3>
    <p>If you need to use abbreviations, define them on their first use, at the start of a page or the start of a journey. But it’s best to avoid them if you can – for example, it may be better to shorten ‘Immigration health surcharge’ to simply ‘healthcare surcharge’ rather than ‘IHS’.</p>

    <h3>Coding the language</h3>
    <p>Each web page must have the language set in the html code. This should be an attribute in the first line of html code, in the format <code>&lt;html lang="en"&gt;</code>. If the primary language of the page is not English, adjust this language code to match. </p>
    <p><A href="https://r12a.github.io/app-subtags/">List of language codes</A></p>
    <p>For any content within a page that is a different language, you’ll need to set the language on those words directly. Again, use a language attribute in a tag – for example <code>&lt;span lang="cy"&gt;</code> for a Welsh word or sentence on your page.</p>

    <h3 id="tools">Readability tools</h3>
    <ul>
      <li><A href="https://govspeak-preview.herokuapp.com">Govspeak preview</A> – use is a simplified ‘markup‘ language based on Markdown, to help format content for GOV.UK</li>
      <li><A href="https://www.grammarly.com">Grammarly</A> – writing assistant</li>
      <li><A href="https://www.webfx.com/tools/read-able/">Readablel (webfx.com)</A> – readability test tool </li>
      <li><A href="https://rewordify.com/">Rewordify.com</A> -  online software that improves reading, learning, and teaching </li>
      <li><A href="https://hemingwayapp.com">Hemingway Editor (hemingwayapp.com)</A> - highlights lengthy, complex sentences and common errors</li>
    </ul>

    <h2>Get in touch</h2>
    <p>If you’ve got a question or suggestion share it on the UK Home Office Slack channel #ask-accessibility or email <A href="mailto:accessibility@homeoffice.gov.uk">accessibility@homeoffice.gov.uk</A>.</p>
  </SubsectionWrap>
);

export default Page;

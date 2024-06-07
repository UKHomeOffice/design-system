import { FC, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A } from '@not-govuk/components';
import { menu } from '../accessibility'

export const title = 'Limited English';
const description = 'Designing for people with limited English';
export const section = 'Accessibility';

const biometricsSign = require('../../../../assets/images/content-style-guide/Biometrics sign.png');

const Page: FC<PageProps> = ({ location }) => (
  <div className="govuk-grid-row">
    <Helmet>
      <title>{title} - Home Office Design System</title>
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
        <span className="caption">Content style guide</span>
          Designing for people with limited English
      </h1>
      <p>People who depend on Home Office services, such as visas, passports and asylum, are often not fluent in English.</p> 
      <p>This means important information in application forms, guidance pages and other tasks may be difficult to understand.</p> 
      <p>We have identified 10 evidence-based principles to follow when designing for people with limited English: </p>
        <ul>
        <li><a href="#use-clear-language">use clear language</a></li>
          <li><a href="#check-how-it-translates">check how it translates</a></li>
          <li><a href="#test-language-with-users">test language with users</a></li>
        <li><a href="#avoid-idioms">avoid idioms, like ‘wear and tear’</a></li>
        <li><a href="#avoid-phrasal-verbs">avoid phrasal verbs, like ‘look up’ or ‘carry out’</a></li>
           <li><a href="#use-simple-tenses">use simple tenses</a></li>
        <li><a href="#write-acronyms-in-full">write acronyms in full</a></li>
        <li><a href="#avoid-all-contractions">avoid all contractions</a></li>        
        <li><a href="#consider-images-or-videos">consider images or videos</a></li>
        <li><a href="#consider-translation-services">consider translation services</a></li>
        </ul>
      <p>Most of these principles will also make your content accessible and inclusive for everyone.</p> 

        
        <h2 id="user-clear-language">Use clear language</h2>
      <p>People with limited English need to read every word, unlike fluent speakers who often skim read. They may need to stop regularly to translate something. Reading this way takes a lot longer and can make information harder to remember.</p>  
      <p>Words you think are clear language may not be clear to people with limited English. Home Office researchers found that words like 'identity', 'dialect' and 'immediate family' were not always well understood. The 'Home Office' ministerial department is sometimes confused with a spare room or home office.</p>
        <p>Research has found that technical language and long documents make people with limited English anxious. If you need to use technical language, provide a clear language explanation. For example, 'biometrics (your fingerprints and photo)'.</p> 
        <p>When designing for people with limited English, try to: </p>
        <ul>
          <li>match your writing to your users’ language levels</li>
          <li>keep sentences short and <A href="https://contentdesign.london/blog/the-case-for-clear-language">on average 15 words</A></li>
          <li>use the active voice</li>
          </ul>

          <p>For more advice, read the <A href="https://www.gov.uk/guidance/content-design/writing-for-gov-uk">GOV.UK guidance on using plain English</A>.</p>

       <h2 id="check-how-it-translates">Check how it translates</h2>
        <p>People with limited English often use online translators, like Google Translate, DeepL, Bing Translator or a native phone app. Use a translation tool to translate your text into some of the languages used by your main user groups. Then translate it back into English using a different translator to sense check it. You may find that some words translate better than others.  </p> 
        <p>Examples of words that may not translate well into the languages of your main user groups: </p>
        <ul>
          <li>deadline</li>
          <li>get in touch</li>
          <li>ethnicity</li>
          <li>dependant</li>
          </ul>

          <p>Content designers working on visa application forms have been using ‘money’ instead of ‘maintenance’ or ‘financial support’ because it translates better in some of the languages used by their users. </p>
          <p>Use online translators for guidance purposes only. These are external websites which can change at any time. While they are improving, they are far from perfect. Do not put sensitive information into online translators because that information can be stored and you have no control over how it is used. </p>
     

      <h2 id="test-language-with-users">Test language with users</h2>
        <p>Guidance cannot replace the insight gained from testing your content with low-fluency English speakers. Content designers creating an asylum application form found that ‘medicine’ tested better than ‘medication’. The NHS style guide also advises using medicine.   </p> 
        <p>Test all important content in your service, including, but not limited to:</p>
        <ul>
          <li>headings</li>
          <li>labels</li>
          <li>hint text</li>
          <li>buttons</li>
          <li>guidance text </li>
          <li>error messages</li>
          <li>alt text</li>
          <li>conditional reveals </li>
          </ul>
      <p>Recruit participants with limited fluency and choose the most appropriate method for testing your content. For example, if some users need an interpreter to use your service, consider testing the service with an interpreter alongside a user.   </p>
      <p></p>
          
  <h2 id="avoid-idioms">Avoid idioms</h2>
        <p>The English language has many idioms. We use them to make our services more conversational. Common expressions like 'by the book', 'red tape' or 'touch base' are not always clear to people with limited English and do not always translate well using translation tools like Google Translate or Bing Translator. </p> 
        <p>Designers working on the passport application service found that users with limited English did not recognise 'wear and tear' as an expression to mean damage. Instead, they translated these words individually and mistakenly thought the statement did not apply to their passports as they were not torn.  </p>

 <h2 id="avoid-phrasal-verbs">Avoid phrasal verbs</h2>
       <p>A phrasal verb is where you combine a verb with other words to make it mean something different, such as ‘carry out’, ‘get over’ or ‘look after’. English is full of them. But their meaning is not always clear until you have learned them.  </p>
       <p>There is nearly always a one-word alternative to a phrasal verb that is easier to translate.  </p>
      <table className="govuk-table">
  <thead className="govuk-table__head">
    <tr className="govuk-table__row">
      <th scope="col" className="govuk-table__header">Instead of</th>
      <th scope="col" className="govuk-table__header">Use</th>
    </tr>
  </thead>
  <tbody className="govuk-table__body">
    <tr className="govuk-table__row">
      <th scope="row" className="govuk-table__cell">carry out </th>
      <td className="govuk-table__cell">do, implement </td>
    </tr>
    <tr className="govuk-table__row">
      <th scope="row" className="govuk-table__cell">fill in </th>
      <td className="govuk-table__cell">complete</td>
    </tr>
    <tr className="govuk-table__row">
      <th scope="row" className="govuk-table__cell">call off</th>
      <td className="govuk-table__cell">cancel</td>
    </tr>
    <tr className="govuk-table__row">
      <th scope="row" className="govuk-table__cell">get over </th>
      <td className="govuk-table__cell">do, implement </td>
    </tr>
    <tr className="govuk-table__row">
      <th scope="row" className="govuk-table__cell">look into </th>
      <td className="govuk-table__cell">research, investigate </td>
    </tr>
    <tr className="govuk-table__row">
      <th scope="row" className="govuk-table__cell">look up </th>
      <td className="govuk-table__cell">search </td>
    </tr>
    <tr className="govuk-table__row">
      <th scope="row" className="govuk-table__cell">look after </th>
      <td className="govuk-table__cell">care for, be responsible for </td>
    </tr>
    <tr className="govuk-table__row">
      <th scope="row" className="govuk-table__cell">turn down </th>
      <td className="govuk-table__cell">reject </td>
    </tr>
    <tr className="govuk-table__row">
      <th scope="row" className="govuk-table__cell">make out</th>
      <td className="govuk-table__cell">understand</td>
    </tr>
    <tr className="govuk-table__row">
      <th scope="row" className="govuk-table__cell">sort out </th>
      <td className="govuk-table__cell">solve</td>
    </tr>
    <tr className="govuk-table__row">
      <th scope="row" className="govuk-table__cell">point out</th>
      <td className="govuk-table__cell">show</td>
    </tr>
    <tr className="govuk-table__row">
      <th scope="row" className="govuk-table__cell">come up with</th>
      <td className="govuk-table__cell">suggest</td>
    </tr>
    <tr className="govuk-table__row">
      <th scope="row" className="govuk-table__cell">go over </th>
      <td className="govuk-table__cell">check, examine</td>
    </tr>
    <tr className="govuk-table__row">
      <th scope="row" className="govuk-table__cell">come across</th>
      <td className="govuk-table__cell">find</td>
    </tr>
    <tr className="govuk-table__row">
      <th scope="row" className="govuk-table__cell">stick to</th>
      <td className="govuk-table__cell">follow, maintain</td>
    </tr>
  </tbody>
</table>
<p>Use clear language whenever possible but if the alternative word translates better, consider using that instead. </p>

       <h2 id="use-simple-tenses">Use simple tenses</h2>
        <p>The present and past tenses are the easiest to understand. Avoid sentences with complex tenses like ‘it will have worked’. </p> 
        <p>You will often have to use the future tense. But you can sometimes avoid it by writing in the active voice. For example, ‘how your information will be used’ may be easier to understand written in the present tense: 'how we use your information'. </p>
        <p>To make your content more direct, use the present tense instead of 'should have' or 'would have'. </p>
        <p>For example, instead of: </p>      
      <ul>
          <li>Before submitting this form, you should have completed the following steps.</li></ul>
      <p>Use</p>
          <ul><li>Before you submit this form, complete the next steps. </li></ul>
      
      <h2 id="write-acronyms-in-full">Write acronyms in full</h2>
      <p>Research has found that some users struggle to remember the meaning of an acronym they saw on a previous screen. Write an acronym in full the first time you use it on a new page or screen, unless it is well known to 80% of your users, like UK, US or NHS. For example, write 'biometric residence permit (BRP)' on each screen of your service at first mention and use 'BRP' if it appears again on the same screen. </p>
      <p>Translation tools do not translate acronyms. For example, 'National Health Service (NHS)' translates to 'Serviço Nacional de Saúde (NHS)' in Portuguese. Users may not recognise 'NHS' on a later screen. </p>
      <p>If available, use a tooltip, like acronym Markdown, to make the acronym appear in full as hover text.  </p>
      <p>See more guidance on abbreviations and acronyms in the GOV.UK style guide. </p>

      <h2 id="avoid-all-contractions">Avoid all contractions</h2>
      <p>Avoid all contractions, including positive contractions like 'we'll', 'you've' or 'they're', if your users have limited English. Research suggests that contractions make content difficult to understand for people with limited fluency. See general guidance on contractions in the <A href="https://www.gov.uk/guidance/style-guide/a-to-z-of-gov-uk-style">GOV.UK style guide</A>. </p>
       
      

      <h2 id="consider-images-or-videos">Consider images or video</h2>
      <p>In some cases, an image, diagram or video can communicate information more clearly. Research at UK arrival centres found that some people had difficulty finding their way using the text-only signage. To address this issue, designers produced a new signage system using text supported by images.</p>
       
      <img src={biometricsSign} alt="Sign showing camera and fingerprint icons to explain in different languages how biometric information is taken." className="image-examples" />
      
      <p>Make sure you include text alternatives for users with visual access needs. </p>

      

<h2 id="consider-translation-services">Consider translation services</h2>
        <p>Could your service benefit from having professional translation and interpretation support to make it more accessible? </p> 
        <p>If you identify a need to translate your content, consider:</p>
        <ul>
          <li>the number of alternative languages needed </li>
          <li>if responses need to be translated</li>
          <li>if content will be translated by a human or a machine</li>
          <li>how translated content will be kept up to date </li>
          <li>how to assure the quality of translated content  </li>
          <li>error messages</li>
          <li>what happens when funding for translation ends </li>
          </ul>
      
      <p>Work with your team and stakeholders to understand the benefits and costs of hiring translation services. This isn’t just about business pressures. There may be risks if a service is only partially translated or something has been mistranslated. </p>
      
      <h2>Help improve this guidance</h2>
      <p>To contribute, join the <A href="https://github.com/UKHomeOffice/design-system/discussions/470">GitHub discussion</A>.</p>
    </div>
  </div>
);

export default Page;

import { FC, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A } from '@not-govuk/components';
import { menu } from '../patterns';

import { PageWrap } from '../';

export const title = 'An email';
const description = 'How to send users effective emails';
const section = 'Patterns';
const subsection = 'Send users';

const Page: FC<PageProps> = () => (
<PageWrap>
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
      <h2 className="govuk-heading-l">Behavioural insights</h2>
      <p className="govuk-body">Users are more likely to do something if:</p>
      <ul className="govuk-list govuk-list--bullet">
        <li>given a prompt at the right time</li>
        <li>they have a clear deadline</li>
        <li>the prompt uses their name, is personalised to their situation, and focuses on positive actions</li>  
        <li>they feel respected by the service and trust the information they are given</li>
        <li>complex tasks are broken down into smaller chunks – for example, a checklist</li>
       </ul>

      <h2 className="govuk-heading-l">Sending emails</h2>
      <p>The Home Office sends emails to tell users:</p>
      <ul className="govuk-list govuk-list--bullet">
        <li>what is happening with their claim, application, case or request</li>
        <li>what actions they have completed</li>
        <li>what they need to do next</li>
        <li>where they can find help and support if they need it</li>
    </ul>
    <p>Use <a href ='https://www.notifications.service.gov.uk/'>GOV.UK Notify</a> to send emails where possible.</p>
    <p>Users may not read the whole email. To help the user trust and engage with your email, it should:</p>
    <ul className="govuk-list govuk-list--bullet">
        <li>use the official branding</li>
        <li>be consistent with other communications</li>
        <li>immediately tell the user why they are receiving it</li>
        <li>state any actions the reader needs to take</li>
        <li>be easy to understand</li>
        <li>use active voice</li>
        <li>avoid using contractions</li>
        <li>follow content design good practice – refer to <a href='https://www.gov.uk/guidance/content-design/writing-for-gov-uk'> Planning, writing and managing content (GOV.UK)</a></li>
    </ul>
    <p>Remember that limited internet access and digital literacy may affect your users’ ability to receive and understand your email.</p>
    <h2 className="govuk-heading-l">Do</h2>
    <p>Use:</p>
    <ul className="govuk-list govuk-list--bullet">
        <li>an easily recognisable sender name and email address that matches the system it was sent from</li>
        <li>a concise subject line with the most important information first</li>
        <li>a personalised greeting with the user’s full name</li>
        <li>a reference number and how to use it</li>
        <li>tracking codes in links (if possible) to monitor which links prompt user action</li>
        <li>team (not individual) contact details</li>
        <li>a formal sign-off</li>
        <li>a no-reply statement if the sender inbox is not monitored</li>
        <li>an official logo with an appropriate text alternative</li>
        </ul>
      <p>Follow existing guidance, such as:</p>
      <ul className="govuk-list govuk-list--bullet">
        <li>the <a href='https://design.homeoffice.gov.uk/content-style-guide/voice-and-tone'>Voice and tone guidance (Home Office Design System)</a></li>
        <li>the style guide for your service (if applicable), the <a href='https://design.homeoffice.gov.uk/content-style-guide'>Home Office style guide</a> and the <a href='https://www.gov.uk/guidance/style-guide'>GOV.UK style guide</a>.</li>
        <li><a href='https://www.gov.uk/service-manual/design/sending-emails-and-text-messages'>How to write emails (GOV.UK)</a></li>
        <li><a href='https://www.notifications.service.gov.uk/using-notify/links-and-URLs'>Links and URLs (GOV.UK Notify)</a></li>
        <li><a href='https://www.notifications.service.gov.uk/features/security#email-security'>Email security (GOV.UK Notify)</a></li>
        </ul>
        <p>To avoid email delivery problems, use guidance from providers such as <a href='https://support.google.com/a/answer/81126?hl=en&ref_topic=7279058&sjid=2530153580586895364-EU#zippy=%2Crequirements-for-sending-or-more-messages-per-day'>Google</a> and <a href='https://support.apple.com/en-us/102322'>iCloud</a>.</p>
        <p>Consider displayed text (indented or differently styled paragraphs) to emphasise information which is especially important for the user. This is available in <a href ='https://www.notifications.service.gov.uk/'>GOV.UK Notify</a> and other publishing systems.</p>
        <p>If your service offers alternative formats, such as Braille, large print or translations into other languages, tell your user how to ask for them.</p>
        <p>Provide plain text and HTML versions where possible.</p>
    
    <h2 className="govuk-heading-l">Do not</h2>
    <ul className="govuk-list govuk-list--bullet">
   <li>imply urgent action is needed if it is not – for example, in tone or displayed text</li>
        <li>add extra HTML styling to the default template as it may not display properly</li>
        <li>use the email to give detailed instructions on how to use your service</li>
        <li>assume users will read all the email – only include essential information</li>
        <li>assume users will read a no-reply statement – consider sending automatic replies which signpost users to help and support</li>
    </ul>

    <h2 className="govuk-heading-l">Accessibility</h2>
    <p>Ensure emails are accessible for all users.</p>
    <p>Do:</p>
    <ul className="govuk-list govuk-list--bullet">
      <li>use heading structures where possible</li>
      <li>left-align text</li>
      <li>use lists where possible – bullets for information and numbering for sequences or steps</li>
      <li>use meaningful link text that makes sense without the surrounding text</li>
      <li>have appropriate alternative text for all images</li>
    </ul>
    <p>Do not use:</p>
    <ul className="govuk-list govuk-list--bullet">
      <li>coloured text – use black by default</li>
      <li>bold text as it is not emphasised by all assistive technology</li>
      <li>italics</li>
      <li>contractions</li>
      <li>acronyms, initialisms or abbreviations</li>
      <li>images for decorative purposes</li>
      <li>screenshots of text</li>
    </ul>
    <p>If your service sends authorisation codes before the user can sign in, make the code easy to copy and paste by:</p>
    <ul className="govuk-list govuk-list--bullet">
      <li>using a large font</li>
      <li>separating it from other text – for example, in its own paragraph</li>
    </ul>
    <p>To improve the accessibility of your emails, test them with screen readers and other assistive technology before sending.</p>
    <p>Refer to <a href='https://design.homeoffice.gov.uk/accessibility'>Accessibility (Home Office Design System)</a>.</p>

    
    <h2 className="govuk-heading-l">Email pattern</h2>
    <p>Components in this pattern can be used for system-generated notifications. Use them flexibly.</p>
    <p>You may need to create your own components based on the needs of your service users.</p>
    

    <h3 className="govuk-heading-m">Main email content</h3>
       <ol className="govuk-list app-letter-model">
          <li className="app-annotate-block">
            <span className="app-annotate-block__label">block: email details</span>
              <ol className ="govuk-list">
                 <li className="app-annotate-block">
                   <span className="app-annotate-block__label">element: sender name and email address</span>
                 </li>
                 <li className="app-annotate-block">
                   <span className="app-annotate-block__label">element: recipient email address</span>
                 </li>
                 <li className="app-annotate-block">
                   <span className="app-annotate-block__label">element: subject line</span>
                 </li>
              </ol>
          </li>

          <li className="app-annotate-block">
            <span className="app-annotate-block__label">block: main message</span>
              <ol className="govuk-list">
                <li className="app-annotate-block">
                  <span className="app-annotate-block__label">element: logo</span>
                </li>
                <li className="app-annotate-block">
                  <span className="app-annotate-block__label">element: main header</span>
                  <h1 className="govuk-heading-l">Main header summarising outcome or action</h1>
                </li>
                <li className="app-annotate-block">
                  <span className="app-annotate-block__label">element: recipient name</span>
                  <p className="govuk-body">Dear [first name] [last name],</p>
                </li>
                <li className="app-annotate-block">
                  <span className="app-annotate-block__label">element: reference number</span>
                  <p className="govuk-body">Include when and how to use the reference number</p>
                </li>
                <li className="app-annotate-block">
                  <span className="app-annotate-block__label">element: summary</span>
                  <p className="govuk-body">Summarise the actions or outcome</p>
                   <ul className="govuk-list govuk-list--bullet">
                     <li>Use lists for multiple actions or outcomes</li>
                  </ul>
                </li>
              </ol>
          </li>
        
          <li className="app-annotate-block">
            <span className="app-annotate-block__label">block: next steps</span>
            <ol className="govuk-list">
                <li className="app-annotate-block">
                <span className="app-annotate-block__label">element: next steps header</span>
                <h2 className="govuk-heading-l">Header about next steps</h2>
               </li>
            <li className="app-annotate-block">
              <span className="app-annotate-block__label">element: next steps description</span>
                <p className="govuk-body">State the next steps and required actions</p>
                  <ul className="govuk-list govuk-list--bullet">
                    <li>Use lists for multiple steps or actions</li>
                    <li>Separate the user's actions from what the service will do</li>
                    <li>Include key dates or deadlines</li>
                  </ul>
            </li>
            </ol>
            <li className="app-annotate-block">
             <span className="app-annotate-block__label">element: links</span>
               <p className="govuk-body">Include links to the service if relevant</p>
            </li>
          </li>


          <li className="app-annotate-block">
              <span className="app-annotate-block__label">block: help and support</span>
                <ol className="govuk-list">
                <li className="app-annotate-block">
                <span className="app-annotate-block__label">element: help and support header</span>         
                <h1 className="govuk-heading-l">Header for how to get help and support</h1>
                </li>
                <li className="app-annotate-block">
                <span className="app-annotate-block__label">element: help and support details</span>
                <p className="govuk-body">Provide at least one way to get help and support</p>
                 <ul className="govuk-list govuk-list--bullet">
                  <li>Include details of how to get the help and support</li>
                  <li>Include links if relevant</li>
                </ul>
                </li>
                </ol>
          </li>

            <li className="app-annotate-block">
              <span className="app-annotate-block__label">block: sign off statement</span>
              <ol className="govuk-list">
              <li className="app-annotate-block">
               <span className="app-annotate-block__label">element: sign-off statement</span>
                <p className="govuk-body">[Regards or other sign-off]</p>
                <p className="govuk-body">[Name of service]</p>
              </li>
              </ol>
          </li>
        </ol>

      <h3 className="govuk-heading-m">Additional email content</h3>
      <p className="govuk-body">Include extra information if applicable to your service</p>
        <ol className="govuk-list app-letter-model">
         <li className="app-annotate-block">
          <span className="app-annotate-block__label">block: no-reply statement</span>
          <p className="govuk-body">No-reply statement if using a no-reply mailbox</p>
         </li>
        <li className="app-annotate-block">
          <span className="app-annotate-block__label">block: unsubscribe or stop option</span>
          <p className="govuk-body">Unsubscribe or stop option if applicable</p>
        </li>
        <li className="app-annotate-block">
          <span className="app-annotate-block__label">block: alternative formats</span>
          <p className="govuk-body">Explain how users can request alternative formats if available</p>
        </li>
      </ol>


      <h2 className="govuk-heading-l">Help us improve this pattern</h2>
      <p>This pattern needs improving. We need evidence about:</p>
      <ul>
        <li>how you have used this pattern to design an email</li>
        <li>any other accessibility considerations</li>
        <li>using UTM codes for incoming links to government services, including any challenges faced</li>
      </ul>

      <p className="govuk-body">To contribute, add your thoughts and research findings to our <A href="https://github.com/UKHomeOffice/design-system/discussions/377">GitHub discussion</A>, or follow our <A href="/contribute">contribute guidance</A>.</p>
</div>
</div>
</PageWrap>

);

export default Page;

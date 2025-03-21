import { FC, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A, DateInput, Details, Radios, TextInput, Select } from '@not-govuk/components';
import { menu } from '../patterns';

import { PageWrap } from '../';

export const title = 'Their sex or gender';
const description = 'How to ask users for their sex or gender';
const section = 'Patterns';
const subsection = 'Ask users for';

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

      <p className="govuk-body">Ask users for data about their sex or gender.</p>
      <div className="app-example">
  
        <Radios
   
    
   label={
    <h1 className="govuk-heading-l">
      What is your sex?
    </h1>
  }
          hint="This is the sex that is on your passport, travel document or identity document"
          name="select-sex"
          options={[
            {
              value: "Female",
              label: "Female"
            },
            {
              value: "Male",
              label: "Male"
            },
            {
              value: "X or other",
              label: "X or other"
            }
          ]}
         
        />
         <Details summary="Why we ask this question">
  We need this information to check that your identity matches the document details you have provided. 
</Details>
      </div>
      <h2 className="govuk-heading-l">When to use this pattern</h2>

      <h3 className="govuk-heading-m">Ask users about their sex</h3>

      <p className="govuk-body">You should only ask users what their sex is if you genuinely cannot provide your service without this information. </p>

      <p className="govuk-body">If you need to ask users for this information, use ‘sex’ to collect biological data. For example, if your service needs to verify someone’s identity from the details on their identity document.</p>

      <h3 className="govuk-heading-m">Ask users about their gender</h3>

      <p className="govuk-body">Home Office public-facing services do not ask for gender, but some internal services ask this question in certain circumstances. For example, we record users’ preference to be interviewed by a staff member of a specific gender.</p>

      <p className="govuk-body">Ask this question if your service needs data on how a person self-identifies to handle them or their case appropriately. </p>

      <h3 className="govuk-heading-m">Ask users about their sex and gender</h3>

      <p className="govuk-body">
      There may be scenarios where it is important to capture differences between biological sex and gender identity. If you need to do this, you should ask both a sex and gender question to confirm the users’ identity and follow the <A href="https://design-system.service.gov.uk/patterns/equality-information/">GOV.UK pattern</A>.
      </p>

      <h2 className="govuk-heading-l">How it works</h2>
      <p className="govuk-body">Check the sex options in the document that users of your service will have so the options accurately reflect users’ document data. For example, if the users have non-UK passports, you need to include the 'X or other' option as this appears on some non-UK passports and travel documents.</p>

    

      <h2 className="govuk-heading-l">Writing for this pattern</h2>
      <p className="govuk-body">Use the ‘why we ask this question’ content to explain to users the purpose for collecting their sex data.</p>
     
      <p className="govuk-body">You should outline why it is important for the functioning of the service, in simple language. Do not use technical terms. If you cannot provide these details for users, consider if it is necessary to collect this data at all.</p>

      <h2 className="govuk-heading-l">Accessibility</h2>
      <p className="govuk-body">If your service uses this pattern, let us know of any insights you have on accessibility considerations.</p>

      <h2 className="govuk-heading-l">Research</h2>
      <p className="govuk-body">This pattern is used by:</p>
      <ul className="govuk-list govuk-list--bullet">
        <li>an internal reporting service used by operational Border Force officers</li>
        <li>an internal service to manage appointments</li>
      </ul>
    
      <p className="govuk-body">We conducted usability research with users who are trans or identify as non-binary, to develop this pattern. We found that:</p>
      <ul className="govuk-list govuk-list--bullet">
        <li>asking users about their biological sex is intrusive and can cause distress</li>
        <li>users identify strongly with their gender identity, more so than with their sex. This should be considered, even if sex information is collected</li>
        <li>often documents do not align with a user’s gender identity, which can cause confusion and discomfort when choosing an answer to the sex question</li>
      </ul>
      <p className="govuk-body">In research we identified ways to help to ease negative emotions and minimise user distress around this question, by explaining:</p>
      <ul className="govuk-list govuk-list--bullet">
        <li>why the question is being asked and how the data will be used</li>
        <li>what documentation is required and the distinction between sex and gender, for example in the hint text</li>
        
      </ul>
      <p className="govuk-body">We did not speak to any users with X on their passport or travel document.</p>
      <h2 className="govuk-heading-l">Help us improve this pattern</h2>
      <p className="govuk-body">This pattern needs improving. We need evidence about:</p>
      <ul className="govuk-list govuk-list--bullet">
        <li>any research insights, particularly from users with X on their documents </li>
        <li>how asking users about their sex changes when the identity document type users have is already known</li>
      </ul>

      <p className="govuk-body">To contribute, add your thoughts and research findings to our <A href="https://github.com/UKHomeOffice/design-system/discussions/347">GitHub discussion</A>, or follow our <A href="/contribute">contribute guidance</A>.</p>
    </div>
</div>
</PageWrap>

);

export default Page;

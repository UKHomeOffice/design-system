import { FC, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A } from '@not-govuk/components';
import { menu } from '../patterns';

export const title = 'Make a declaration';
const description = 'A declaration allows users to confirm that they have understood or agreed to something before they submit an online form.';
const section = 'Patterns';
const subsection = 'Help users to';

const applyDeclaration1 = require('../../../../assets/images/patterns/make-a-declaration.png').default;
const applyDeclaration2 = require('../../../../assets/images/patterns/make-a-declaration-privacy-terms-conditions.png').default;

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
        <span className="caption">{subsection}</span>
        {title}
      </h1>
      <div style={{marginTop: "-2em"}}>
      <p className="govuk-caption-m" style={{marginBottom: "2em"}}>Also known as: declarations</p>
      </div>

      <p className="govuk-body">A declaration allows users to confirm that they have understood or agreed to something before they submit an online form.</p>

      <h2 className="govuk-heading-l">Examples</h2>
      <p>The following examples show how declarations are used in Home Office services. Use these examples as a guide only and adapt them for your service.</p>
      <p>You must ask a legal representative to sign off your declaration content.</p>
      <div className="example example-images confirmation" style={{marginBottom: "2em"}}>
        <img src={applyDeclaration1} className="image-examples" alt="An example of how declarations are used in Home Office services" />
      </div>
      <div className="example example-images confirmation" style={{marginBottom: "2em"}}>
        <img src={applyDeclaration2} className="image-examples" alt="An example of how declarations are used in Home Office services" />
      </div>
      <h2 className="govuk-heading-l">When to use this pattern</h2>
      <p>Use this pattern when there are significant consequences if false information is given and the user needs to confirm that:</p>
      <ul className="govuk-list govuk-list--bullet">
        <li>the information they've given is correct</li>
        <li>they understand the consequences of not telling the truth</li>
        <li>they understand the information they have been given</li>
        <li>they need to agree to something</li>
      </ul>

      <h2 className="govuk-heading-l">Writing for this pattern</h2>
      <p>The declaration should be tailored to the service and include information about what will happen if the user makes a false declaration.</p>
      <p>Do:</p>
      <ul className="govuk-list govuk-list--bullet">
        <li>make consequences clear using simple language</li>
        <li>refer to the user as 'you' in the text, but 'I' in the action button</li>
        <li>use 'I confirm that' or 'I understand that'</li>
        <li>link out to terms and conditions and privacy policy if needed</li>
        <li>add a checkbox and ask the user to confirm that they understand and agree</li>
        <li>get the content signed off by legal or policy</li>
      </ul>
      <p>Do not:</p>
      <ul className="govuk-list govuk-list--bullet">
        <li>duplicate terms and conditions or privacy policies</li>
        <li>use the word 'prosecute' unless you are sure this is the case</li>
        <li>use complex legal or policy terms if they can be explained simply</li>
        <li>publish a declaration content that has not been sign off by legal or policy</li>
      </ul>

      <h2 className="govuk-heading-l">When not to use this pattern</h2>
      <p>Do not use this pattern to give users complex or complicated information about policy or legislation.</p>
      <p>If a bullet list is not needed, instead consider using 'Accept and continue' or 'Agree and continue' buttons along with a statement. For example:</p>
      <p>By submitting this application, you are agreeing that the information you have provided is correct.</p>

      <h2 className="govuk-heading-l">Error messages</h2>
      <p>If your service uses this pattern, add the error messages that you have used.</p>

      <h2 className="govuk-heading-l">Services using this pattern</h2>
      <p>This pattern has been used in the following services:</p>
      <ul className="govuk-list govuk-list--bullet">
        <li>Electronic Visa Waiver</li>
        <li>Register to Apply for US Global Entry</li>
        <li>Registered Traveller</li>
      </ul>

      <h2 className="govuk-heading-l">Research</h2>
      <p className="govuk-body">More research is needed. If your service uses this
      pattern, <A href="https://github.com/UKHomeOffice/design-system/discussions/378">get in touch</A> to share your user research findings.</p>

      <h2 className="govuk-heading-l">Accessibility</h2>
      <p>Consider alternative ways a user can submit a declaration offline.</p>
      <p>If your service uses this pattern, let us know of any insights you have
      on accessibility considerations.</p>
      <A href="https://www.w3.org/WAI/WCAG21/Understanding/error-prevention-legal-financial-data.html">Read 'Error Prevention (Legal, Financial, Data)' on the W3c website</A>

      <div className="contact-us">
        <h2 className="govuk-heading-m">Get in touch</h2>
        <p>If you've got a question or suggestion share it on the Slack channel
        #ho-design-system, on <A href="https://github.com/UKHomeOffice/design-system">GitHub</A> or
        email <A href="mailto:design@digital.homeoffice.gov.uk">design@digital.homeoffice.gov.uk</A>.</p>
      </div>

    </div>
</div>


);

export default Page;

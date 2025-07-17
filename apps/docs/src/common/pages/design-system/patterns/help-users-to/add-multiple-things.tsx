import { FC, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A } from '@not-govuk/components';
import config from '../../../../config';

import { SubsectionWrap, title as subsection } from '../';

const siteTitle = config.title;

export const title = 'Add multiple things';
const longTitle = title;
const description = 'How to help users to add multiple things';
const subsubsection = 'Help users to';

const applyAddAnother = require('../../../../../../assets/images/patterns/add-another.svg');
const chooseDocumentType = require('../../../../../../assets/images/patterns/choose-document-type.svg');

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
    <div style={{marginTop: "-2em"}}>
      <p className="govuk-caption-m" style={{marginBottom: "2em"}}>Also known as: add another</p>
    </div>

    <p className="govuk-body">An interaction that allows a user to add multiple
      items of the same thing, check and add more if needed.</p>

    <div className="example example-images confirmation" style={{marginBottom: "2em"}}>
      <img src={applyAddAnother} className="image-examples" alt="An example of an interaction to add multiple addresses" />
    </div>

    <h2 className="govuk-heading-l">When to use this pattern</h2>
    <p>This interaction allows a user to add single or multiple items, check they are correct
      and provide an option to add more.</p>
    <p>This pattern can be used to:</p>
    <ul className="govuk-list govuk-list--bullet">
      <li>add people to an application</li>
      <li>add items to a list</li>
      <li>add multiple files</li>
    </ul>
    <p>Follow this pattern:</p>
    <ul className="govuk-list govuk-list--bullet">
      <li>to help confirm an action</li>
      <li>to allow the user to change their minds</li>
      <li>when the action is not easily reversible</li>
      <li>when the completion immediately starts another process</li>
    </ul>

    <h2 className="govuk-heading-l">How it works</h2>
    <h3>Add multiple items</h3>
    <p>To help users add multiple items of the same thing, the pattern should:</p>
    <ul className="govuk-list govuk-list--bullet">
      <li>remember previous choices</li>
      <li>give clear guidance on the flexibility of choices</li>
    </ul>

    <h3>Add multiple files</h3>
    <p>Allow users to add files one at a time, check the files on a subsequent screen, and add more if required in an add multiple files loop.</p>
    <p>If document categorisation is required, allow the user to select the document type before uploading the file.</p>
    <div className="example example-images confirmation" style={{marginBottom: "2em"}}>
      <img src={chooseDocumentType} className="image-examples" alt="An example of an interaction to select the document type before uploading the file" />
    </div>
    <p>Where possible, split tasks up into shorter flows, with 'Check answers' screens at the end of each mini task, rather than after a long task.</p>

    <h4>Research</h4>
    <p>In four rounds of research with external users, we found:</p>
    <ul className="govuk-list govuk-list--bullet">
      <li>displaying the uploaded documents on a subsequent screen reduces the cognitive load for the user and enabled users to upload multiple documents without encountering issues</li>
      <li>users became familiar with the loop of categorising and adding more documents and were reassured when they could see them being added to the list each time</li>
      <li>asking the user to input additional information relating to the document they are uploading prior to the upload document step worked better</li>
      <li>splitting tasks up avoided issues and confusion because it gave the user more flexibility at each step</li>
    </ul>
    <p>More research is needed with users with access needs.</p>

    <h2 className="govuk-heading-l">Accessibility</h2>
    <p>If your service uses this pattern, let us know of any insights you have
      on accessibility considerations.</p>

    <h2 className="govuk-heading-l">Research</h2>
    <p className="govuk-body">This pattern is used by:</p>
    <ul>
      <li>Firearms licensing</li>
      <li>Refugee integration loan</li>
      <li>Manage asylum claim</li>
    </ul>
    <p className="govuk-body">More research is needed. If your service uses this
      pattern, get in touch to share your user research findings.</p>

    <h2 className="govuk-heading-l">Help us improve this pattern</h2>
    <p>This pattern needs improving. We need evidence about:</p>
    <ul>
      <li>how to write for this pattern</li>
      <li>alterations for internal caseworking systems</li>
      <li>adding detailed information about multiple things in a long task flow or as part of a longer form</li>
      <li>access to needs testing</li>
      <li>how users with access needs respond </li>
    </ul>

    <p className="govuk-body">To contribute, add your thoughts and research findings to our <A href="https://github.com/UKHomeOffice/design-system/discussions/353">GitHub discussion</A>, or follow our <A href="/contribute">contribute guidance</A>.</p>
  </SubsectionWrap>
);

export default Page;

import { FC, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A } from '@not-govuk/components';
import { menu } from '../styles';

export const title = 'Images';
const description = 'Only use images if there’s a real user need';
const section = 'Styles';

const applyImageInline = require('../../../../assets/images/patterns/image-guidance-inline.svg');
const applyExample1 = require('../../../../assets/images/example-1.jpg');
const applyExample2 = require('../../../../assets/images/example-2.jpg');
const applyExample5 = require('../../../../assets/images/example-5.jpg');
const applyExample6 = require('../../../../assets/images/example-6.jpg');

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
        <span className="caption">{section}</span>
        {title}
      </h1>

      <h2 className="govuk-heading-l">Use of images</h2>
      <p className="govuk-body">Avoid unecessary decoration. Only use images when research indicates that it would be helpful to users.</p>

      <p className="govuk-body"><A href="#Illustrations or representative imagery">Illustrations</A> can help users to understand:</p>
      <ul className="govuk-list govuk-list--bullet">
        <li>a new or unfamiliar concept</li>
        <li>complex guidance when completing a task</li>
        <li>how to find a reference number on a document</li>
      </ul>

      <p className="govuk-body"><A href="#Photography">Photography</A> can add visual interest to a page. We use it mostly in internal pages and services.</p>
      <p className="govuk-body">Images must be relevant to the content, help users understand what they need to do and follow our guidance on the use of <A href="/accessibility/images">alternative text</A>.</p>

      <h3 className="govuk-heading-m">Sourcing images</h3>
      <p>Please contact <A href="mailto:ucdops@homeoffice.gov.uk">ucdops@homeoffice.gov.uk</A> for advice on image use and for original source files.</p>

      <h2 id="Illustrations or representative imagery" className="govuk-heading-l">Illustrations or representative imagery</h2>
      <p className="govuk-body">Illustrations must have a consistent style to create trust. This includes print products as well.</p>
      <p className="govuk-body">If your image represents something physical, such as a document, you should use the aspect ratio of that object.</p>


      <div className="example example-images confirmation" style={{marginBottom: "2em"}}>
        <img src={applyImageInline} className="confirm-desktop" alt="An example of an illustrated image of a biometric residence permit card in a service" />
      </div>

      <h3 id="related" className="govuk-heading-m">Related</h3>
      <ul className="govuk-list govuk-list--bullet">
        <li><A href="/patterns/find-information-on-document">Find information on a document</A></li>
      </ul>

      <h2 id="Photography" className="govuk-heading-l">Photography</h2>
      <p className="govuk-body">Photography should be:</p>
      <ul className="govuk-list govuk-list--bullet">
        <li>relevant to the content</li>
        <li>people-focused, inclusive and reflecting the diversity of the people we serve</li>
        <li>accessible (don't place text on top of an image, use text as an image, or add unnecessary filters or effects)</li>
        <li>free from usage restrictions and permissible for use</li>
      </ul>

      <p className="govuk-body">They should not be:</p>
      <ul className="govuk-list govuk-list--bullet">
        <li>used to fill space or as decoration</li>
        <li>clip art or clichéd stock photography</li>
      </ul>

      <h3 className="govuk-heading-m">Photography dos and don'ts</h3>
      <div className="example example-images" style={{marginTop: "1em"}}>
        <div className="govuk-grid-row">
          <div className="govuk-grid-column-one-half">
            <span className="govuk-heading-m">Do</span>
            <img src={applyExample2} alt="People sitting around a table talking. Focus is on the one person who is talking." className="image-examples" />
            <span className="image-caption" style={{marginTop: "1em"}}>Do use images of people that look natural and reflect real life situations.</span>
          </div>
          <div className="govuk-grid-column-one-half">
            <span className="govuk-heading-m">Don't</span>
            <img src={applyExample5} alt="Staged photo of a large group of people in a line." className="image-examples" />
            <span className="image-caption" style={{marginTop: "1em"}}>Don't use clichéd images, for example posed or forced, or in fake situations.</span>
          </div>
        </div>
      </div>

      <div className="example example-images" style={{marginTop: "2.5em", marginBottom: "2.5em"}}>
        <div className="govuk-grid-row">
          <div className="govuk-grid-column-one-half">
            <span className="govuk-heading-m">Do</span>
            <img src={applyExample6} alt="A person leading a group discussion infront of a whiteboard." className="image-examples" />
            <span className="image-caption" style={{marginTop: "1em"}}>Do focus on one key element</span>
          </div>
          <div className="govuk-grid-column-one-half">
            <span className="govuk-heading-m">Don't</span>
            <img src={applyExample1} alt="Two people talking at work. Image has a purple filter." className="image-examples" />
            <span className="image-caption" style={{marginTop: "1em"}}>Don't use filters or effects</span>
          </div>
        </div>
      </div>

      <h2 className="govuk-heading-l">Accessibility</h2>
      <p className="govuk-body">All images must have an alternative text description that describes its meaning. See the <A href="/accessibility/images">images guidance</A> for more information.</p>
      <p>If your service uses images, let us know of any insights you have on accessibility considerations.</p>

      <div className="contact-us">
        <h2 className="govuk-heading-m">Get in touch</h2>
        <p>If you’ve got a question or suggestion share it on the Slack channel #ho-design-system, on <A href="https://github.com/UKHomeOffice/design-system">GitHub</A> or email <A href="mailto:ucdops@homeoffice.gov.uk">ucdops@homeoffice.gov.uk</A>.</p>
      </div>

    </div>
</div>


);

export default Page;

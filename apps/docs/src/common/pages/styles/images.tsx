import { FC, Fragment, createElement as h } from 'react';
import { PageProps } from '@not-govuk/app-composer';
import { A } from '@not-govuk/components';

const applyBrpExample = require('../../../../assets/images/brp-example-2.png').default;
const applyPassportIssue = require('../../../../assets/images/passport-issue-example.png').default;
const applyExample1 = require('../../../../assets/images/example-1.jpg').default;
const applyExample2 = require('../../../../assets/images/example-2.jpg').default;
const applyExample5 = require('../../../../assets/images/example-5.jpg').default;
const applyExample6 = require('../../../../assets/images/example-6.jpg').default;

const Page: FC<PageProps> = ({ location }) => (

<div className="govuk-grid-row">

    <div className="govuk-grid-column-one-third">
      <aside>
        <h2>Styles</h2>
        <ul className="plain">
          <li><A href="/styles/colour">Colour</A> </li>
          <li><A href="/styles/images">Images</A> </li>
          <li><A href="/styles/templates">Page templates</A> </li>
          <li><A href="/styles/typography">Typography</A> </li>
        </ul>
      </aside>
    </div>

    <div className="govuk-grid-column-two-thirds">
      <span className="govuk-caption-xl">Styles</span>
      <h1 className="heading-section">Images</h1>

      <h2 className="govuk-heading-l">Use of images</h2>
      <p className="govuk-body">Avoid unecessary decoration. Only use images when research indicates a real user need.</p>

      <p className="govuk-body"><A href="#Illustrations or representative imagery">Illustrations</A> can help users to understand:</p>
      <ul className="govuk-list govuk-list--bullet">
        <li>a new or unfamiliar concept</li>
        <li>complex guidance when completing a task</li>
        <li>how to find a reference number on a document complex.</li>
      </ul>

      <p className="govuk-body"><A href="#Photography">Photography</A> can add visual interest to a page. We use it mostly in internal pages and services that use independent branding.</p>
      <p className="govuk-body">Images must be relevant to the content, help users understand what they need to do and follow our guidance on the use of <A href="#Alternative text">Alternative text</A>.</p>

      <h3 className="govuk-heading-m">Sourcing images</h3>
      <p>Please contact the design system working group (<A href="mailto:design@digital.homeoffice.gov.uk">design@digital.homeoffice.gov.uk</A>) for advice on image use, for original source files and to commission illustrations.</p>

      <h2 id="Illustrations or representative imagery" className="govuk-heading-l">Illustrations</h2>
      <p className="govuk-body">If your image represents something physical, such as a document, you should use the aspect ratio of that object.</p>
      <p className="govuk-body">Illustrations must have a consistent style to create trust across online and print.</p>

      <div className="example example-images confirmation" style={{marginBottom: "2em"}}>
        <h2 className="govuk-heading-l">Do you have biometric residence card or permit?</h2>
        <img src={applyBrpExample} className="confirm-desktop" alt="An example of an illustrative image of a biometric residence permit card" />
        <span className="image-caption"><A href="https://www.gov.uk/employee-immigration-employment-status">Right to work</A></span>
      </div>

      <div className="example example-images confirmation" style={{marginBottom: "2em"}}>
        <img src={applyPassportIssue} className="confirm-desktop" alt="An example of an illustrative image of a passport and signposting where to find it's issue date." />
        <span className="image-caption"><A href="https://www.gov.uk/apply-renew-passport">Passport renewals</A></span>
      </div>

      <h3 id="related" className="govuk-heading-m">Related</h3>
      <ul className="govuk-list govuk-list--bullet">
        <li><A href="https://design.homeoffice.gov.uk/patterns/find-information-on-a-document">Find information on a document</A></li>
      </ul>

      <h3 className="govuk-heading-m">Research</h3>
      <p className="govuk-body">The examples of illustrations and illustrative imagery have been used in a variety of public-facing services. They’ve been tested in context and not on their own. Their use will vary as a service evolves.</p>
      <p className="govuk-body">Get in touch to <A href="mailto:designops@digital.homeoffice.gov.uk">share research findings</A> if you’ve used these illustrations, if you have another an example to share or want to explore creating a new illustration.</p>

      <h2 id="Photography" className="govuk-heading-l">Photography</h2>
      <p className="govuk-body">Photography should be:</p>
      <ul className="govuk-list govuk-list--bullet">
        <li>relevant to the content</li>
        <li>people-focussed, inclusive and reflecting the diversity of the people we serve</li>
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

      <h3 id="Alternative text" className="govuk-heading-m">Alternative text</h3>
      <p className="govuk-body">Alternative text, or alt text, is read out by screen readers for those with visual impairments. It will also be displayed if an image does not load or if images have been switched off. We recommend following the guidance in the <A href="https://design-system.service.gov.uk/styles/images/">GOV.UK Design System</A> on the use of alt text.</p>

      <div className="contact-us">
        <h2 className="govuk-heading-m">Get in touch</h2>
        <p>If you’ve got a question or suggestion share it on the Slack channel #ho-design-system, on <A href="https://github.com/UKHomeOffice/design-system">GitHub</A> or email the design system working group on <A href="mailto:design@digital.homeoffice.gov.uk">design@digital.homeoffice.gov.uk</A>.</p>
      </div>

    </div>
</div>


);

export default Page;
export const title = 'Images';

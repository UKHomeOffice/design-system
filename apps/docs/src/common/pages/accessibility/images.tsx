import { FC, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A, NavigationMenu } from '@not-govuk/components';

const linksImage01 = require('../../../../assets/images/accessibility/links01.png').default;

export const title = 'Images';
const description = 'Accessibility guidance for images content';
export const section = 'Accessibility';

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
    <span className="govuk-caption-m" style={{marginBottom: "1em"}}>Page structure</span>
      <NavigationMenu items={[
        {
          href: '/accessibility/links',
          text: 'Links'
        },
        {
          href: '/accessibility/tables',
          text: 'Tables'
        },
        {
          href: '/accessibility/headings',
          text: 'Headings'
        }
      ]} />
      <span className="govuk-caption-m" style={{marginBottom: "1em"}}>Interactivity</span>
      <NavigationMenu items={[
        {
          href: '/accessibility/error-messages',
          text: 'Error messages'
        },
        {
          href: '/accessibility/keyboard',
          text: 'Keyboard basics'
        },
        {
          href: '/accessibility/keyboard/tab-navigation',
          text: '- Tab navigation'
        },
        {
          href: '/accessibility/keyboard/focus',
          text: '- Focus'
        },
        {
          href: '/accessibility/keyboard/skip-to-content',
          text: '- Skip to content links'
        },
        {
          href: '/accessibility/keyboard/character-key-shortcuts',
          text: '- Character key shortcuts'
        },
        {
          href: '/accessibility/keyboard/pointer-gestures',
          text: '- Pointer gestures'
        },
        {
          href: '/accessibility/timeouts',
          text: 'Timeouts'
        }
      ]} />
      <span className="govuk-caption-m" style={{marginBottom: "1em"}}>Written content</span>
        <NavigationMenu items={[
          {
            href: '/accessibility/inclusive-language',
            text: 'Inclusive language'
          },
        ]} />
      <span className="govuk-caption-m" style={{marginBottom: "1em"}}>Providing alternatives</span>
        <NavigationMenu items={[
          {
            href: '/accessibility/audio-and-video',
            text: 'Audio and video'
          },
          {
            href: '/accessibility/images',
            text: 'Images'
          }
        ]} />
        <span className="govuk-caption-m" style={{marginBottom: "1em"}}>Resources</span>
          <NavigationMenu items={[
            {
              href: '/accessibility/resources',
              text: 'Guidance, tools and further reading'
            }
          ]} />
    </div>
    <div className="govuk-grid-column-three-quarters">
      <h1>
        <span className="caption">Accessibility</span>
        Images
      </h1>
      <p>Images, charts, icons and infographics on websites have different purposes. These include but are not limited to:</p>
      <ul>
      <li>giving information</li>
      <li>making a webpage more visually attractive</li>
      <li>interactivity, such as buttons and links</li>
      </ul>

      <p>For blind and visually impaired people, missing out on these images can sometime mean missing out on important information or instructions for completing a task.</p>

      <p>It's important to provide alternatives to images that help these users.</p>


<br />

      <h2>Helping everyone</h2>
      <p>Making your images accessible can benefit users with and without a disability.</p>
      <p>For example, if someone switches off images to save bandwidth or if images do not load having alt text is helpful.</p>

      <h2>The basics</h2>
        <p>Do:</p>
        <ul>
        <li>provide alt text for informative images</li>
        <li>provide alt text to describe the functionality of images used as links or buttons</li>
        <li>provide empty alt text for decorative images</li>
        <li>provide longer text descriptions and data for complex images such as charts and diagrams</li>
        </ul>

        <p>Do not:</p>
        <ul>
        <li>include meaningful text as part of an image</li>
        <li>use the longdesc attribute to provide a long description</li>
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
          <td className="govuk-table__cell">Blind or partially sighted </td>
          <td className="govuk-table__cell">Cannot see images</td>
          <td className="govuk-table__cell">Alt text allows assistive technology to read it aloud, present it visually, or convert it to braille</td>
        </tr>

        <tr className="govuk-table__row">
        <td className="govuk-table__cell">Motor impairment</td>
        <td className="govuk-table__cell">Cannot interact with image links and buttons</td>
        <td className="govuk-table__cell">Alt text allows speech-to-text software to select image links and buttons</td>
        </tr>

        <tr className="govuk-table__row">
        <td className="govuk-table__cell">Cognitive impairment</td>
        <td className="govuk-table__cell">May have issues understanding the meaning of images</td>
        <td className="govuk-table__cell">Alt text presents an alternative way to present meaning</td>
        </tr>

        </tbody>
      </table>

<h2>Creating accessible images</h2>

<h3></h3>

<p>You should make your images as accessible as possible as well as providing appropriate alternatives to ensure that everyone has a comparable experience.</p>

<p>The <A href="https://www.w3.org/WAI/tutorials/images/">Image Concepts tutorials</A> provide a great exploration of accessibility considerations.</p>



<h3>Alt text</h3>

<p>All images must have an alternative text (usually called ‘alt text’) description that describes its meaning, not what it is. How you write the alt text depends on the type of image. Refer to the <A href="https://www.w3.org/WAI/tutorials/images/decision-tree/">alt text decision tree</A> if you do not know what your image is.</p>

<p>Here’s what to add to the alt text field for different sorts of image:</p>

<ul>
<li>images that communicate information such as icons and logos: a short text description</li>
<li>editorial images that support the text around them (such as photos in a news article): a short text description</li>
<li>decorative images that don’t add any information: leave the alt text field empty, with no space between the quotations and no other text</li>
<li>functional images that act as a link: describe where the link will take the user</li>
</ul>

<p>To check if an image has the necessary alt text, right click on the image and select ‘Inspect’. Check the image tag to see if there's an alt tag and whether its text description is appropriate for the image.</p>


<h3>Text in images</h3>

<p>Do not include meaningful text as part of an image or people using assistive technology may not be able to read it. Meaningful text is anything that is used to aid understanding for users.</p>

<h3>Complex images</h3>

<p>Sometimes we use graphs or diagrams to explain <A href="https://www.w3.org/WAI/tutorials/images/complex/">complicated topics or data</A>. These can be hard to describe and usually cannot be done so effectively using alt text alone.</p>

<p>Instead, you should think about the information you're trying to convey. Perhaps think about how you would explain the point of the image to people if you were showing it in a presentation and use this as the basis of your description.</p>

<p>With complex images, put a thorough description of the graph or diagram in context in the surrounding text. You should also use alt text to let users know where this description is. Do not use the <code>&lt;longdesc&gt;</code> attribute to provide a longer description as this is no longer recommended.</p>

<p>You should also provide links to any underlying data so users can explore the information directly.</p>

<h3>Scalable Vector Graphic (SVG) images</h3>

<p>When using an SVG in the <code>src</code> attribute of an image, use alt text.</p>

<p>When <A href="https://developer.mozilla.org/en-US/docs/Web/SVG/Element/svg">inserting the SVG image directly</A>, provide the text alternative in a title element.</p>

<h3>Groups of images</h3>

<p>For a group of images conveying a single piece of information, such as a star rating, only one of the images needs to have alt text. The other images in the group can have empty null alt text.</p>

<p>For <A href="https://www.w3.org/WAI/tutorials/images/imagemap/">images with multiple selectable regions</A>, alt text should be provided for all area elements.</p>

<div className="contact-us">
  <h2 className="govuk-heading-m">Get in touch</h2>
  <p>If you’ve got a question or suggestion share it on the Home Office DDaT Slack channel #ask-accessibility or email <A href="mailto:access@digital.homeoffice.gov.uk">access@digital.homeoffice.gov.uk</A>.</p>
</div>

    </div>
  </div>
);

export default Page;

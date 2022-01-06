import { FC, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A, NavigationMenu } from '@not-govuk/components';

export const title = 'Perceivable';
const description = 'Perceivable Accessibility Standard requirements';
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
        href: '/accessibility/navigation',
        text: 'Navigation'
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
        href: '/accessibility/notifications',
        text: 'Notifications'
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
        href: '/accessibility/forms',
        text: 'Forms'
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
        {
          href: '/accessibility/readability',
          text: 'Readability'
        },
      ]} />
    <span className="govuk-caption-m" style={{marginBottom: "1em"}}>Providing alternatives</span>
      <NavigationMenu items={[
        {
          href: '/accessibility/audio-and-video',
          text: 'Audio and video'
        },
        {
          href: '/accessibility/colour-and-contrast',
          text: 'Colour and contrast'
        },
        {
          href: '/accessibility/images',
          text: 'Images'
        },
        {
          href: '/accessibility/moving-and-flashing-content',
          text: 'Moving and flashing content'
        }
      ]} />
      <span className="govuk-caption-m" style={{marginBottom: "1em"}}>Resources</span>
        <NavigationMenu items={[
          {
            href: '/accessibility/standard',
            text: 'Accessibility Standard'
          },
          {
            href: '/accessibility/standard/perceivable',
            text: '- Perceivable'
          },
          {
            href: '/accessibility/standard/operable',
            text: '- Operable'
          },
          {
            href: '/accessibility/standard/understandable',
            text: '- Understandable'
          },
          {
            href: '/accessibility/standard/robust',
            text: '- Robust'
          },
          {
            href: '/accessibility/standard/meet-user-needs',
            text: '- Meet user needs'
          },
          {
            href: '/accessibility/resources',
            text: 'Guidance, tools and further reading'
          }
        ]} />
    </div>
    <div className="govuk-grid-column-three-quarters">

    <h1>
      <span className="caption">Accessibility</span>
      Perceivable
    </h1>
    <p>Users must be able to perceive the content.</p>
    <p>Text alternative for non-text content, captions and other alternatives for multimedia should be provided, and content should be adaptable by the user to fit their requirements.</p>
    <h2>Index</h2>
    <h3>Text Alternatives</h3>
    <p><a href="#rr1.1.1">1.1.1 - Non text content</a></p>

    <h3>Time based media</h3>
    <p><a href="#rr1.2.x">1.2.x - Alternatives for audio and video</a></p>

    <h3>Adaptable</h3>
    <ul className="plain">
      <li><a href="#rr1.3.1a">1.3.1a - Info and relationships - Tables</a></li>
      <li><a href="#rr1.3.1b">1.3.1b - Info and relationships - Lists</a></li>
      <li><a href="#rr1.3.1c">1.3.1c - Info and relationships - Headings</a></li>
      <li><a href="#rr1.3.1d">1.3.1d - Info and relationships - Form fields</a></li>
      <li><a href="#rr1.3.1e">1.3.1e - Info and relationship - Landmarks</a></li>
      <li><a href="#rr1.3.2">1.3.2 - Meaningful sequence</a></li>
      <li><a href="#rr1.3.3">1.3.3 - Sensory Characteristics</a></li>
      <li><a href="#rr1.3.4">1.3.4 - Orientation</a></li>
      <li><a href="#rr1.3.5">1.3.5 - Identify Input Purpose</a></li>
    </ul>

    <h3>Distinguishable</h3>
    <ul className="plain">
      <li><a href="#rr1.4.1">1.4.1 - Use of colour</a></li>
      <li><a href="#rr1.4.2">1.4.2 - Audio control</a></li>
      <li><a href="#rr1.4.3">1.4.3 - Contrast</a></li>
      <li><a href="#rr1.4.4">1.4.4 - Resize text</a></li>
      <li><a href="#rr1.4.5">1.4.5 - Images of text</a></li>
      <li><a href="#rr1.4.10">1.4.10 - Reflow</a></li>
      <li><a href="#rr1.4.11">1.4.11 - Non text contrast</a></li>
      <li><a href="#rr1.4.12">1.4.12 - Text spacing</a></li>
      <li><a href="#rr1.4.13">1.4.13 - Content on hover or focus</a></li>
    </ul>

    <h2>Text Alternatives</h2>

    <h3 id="rr1.1.1">1.1.1 - Non Text content</h3>
    <p>All non-text content like images, charts, icons and infographics, must have an appropriate text equivalent. This ensures that information conveyed by non-text content is available to people who cannot see it, like screen reader users.</p>
    <p><A href="https://www.w3.org/WAI/WCAG21/Understanding/non-text-content">Understanding Success Criterion 1.1.1: Non-text Content</A></p>
    <h4>Implementation guidance</h4>
    <p>All images must have an alternative text description that describes its meaning, not what the image is:</p>
    <ul>
      <li>images that communicate information (for example icons and logos) have short text descriptions</li>
      <li>editoral images that support the text around them have short descriptions</li>
      <li>images that communicate complex information (for example infographics, charts and diagrams) have longer text descriptions within the same page</li>
      <li>decorative images have the null (or empty) alternative description alt="" (no space between the quotations)</li>
    </ul>
    <h4>How to test with a manual code check</h4>
    <ul>
      <li>identify images on the page, right click on them and select ‘Inspect’</li>
      <li>check the image tag to see if the alt attribute exists</li>
      <li>for decorative images, the alt attribute should be alt="" or just alt</li>
      <li>for editoral images and images which communicate information check that the descriptions are appropriate</li>
      <li>for images of complex information, check that the description refers to the availabiltiy of a longer description and that this is present on the page</li>
    </ul>
    <h4>How to test with JAWS</h4>
    <p>Use the ‘G’ key to navigate to the images on the page and check that a meaningful textual description is read out for informative images, and that decorative images are not announced.</p>
    <h4>Helpful links</h4>
    <ul className="plain">
      <li><A href="https://www.w3.org/WAI/tutorials/images/">Web Accessibility Tutorials - Images Concepts</A></li>
      <li><A href="/accessibility/images">Home Office Design System - Images</A></li>
    </ul>

    <h2>Time based media</h2>

    <h3 id="rr1.2.x">1.2.x - Alternatives for audio and video</h3>
    <p>Audio and video content has appropriate alternatives to ensure that everyone has a comparable experience when interacting with this content. This may include transcripts, captions and audio description depending on the type of audio or video content.</p>
    <ul className="plain">
      <li><A href="https://www.w3.org/WAI/WCAG21/Understanding/audio-only-and-video-only-prerecorded">Understanding Success Criterion 1.2.1: Audio-only and Video-only (Prerecorded)</A></li>
      <li><A href="https://www.w3.org/WAI/WCAG21/Understanding/captions-prerecorded">Understanding Success Criterion 1.2.2: Captions (Prerecorded)</A></li>
      <li><A href="https://www.w3.org/WAI/WCAG21/Understanding/audio-description-or-media-alternative-prerecorded">Understanding Success Criterion 1.2.3: Audio Description or Media Alternative (Prerecorded)</A></li>
      <li><A href="https://www.w3.org/WAI/WCAG21/Understanding/captions-live">Understanding Success Criterion 1.2.4: Captions (Live)</A></li>
      <li><A href="https://www.w3.org/WAI/WCAG21/Understanding/audio-description-prerecorded">Understanding Success Criterion 1.2.5: Audio Description (Prerecorded)</A></li>
    </ul>
    <h4>Implementation guidance</h4>
    <p>The alternative required depends on the context of the audio or video, but broadly:</p>
    <ul>
      <li>always provide a transcript</li>
      <li>always provide captions for videos </li>
      <li>if the narration of a video does not include all the detail required, then provide audio description</li>
    </ul>
    <p>Provide accessible transcripts and alternative versions of content next to the original multimedia content.</p>
    <p>Closed Captions (where the captions are separate from the video content) should be used where the video player supports this.  Captions should be checked for accuracy, especially where auto generated.</p>
    <p>For live video content like livestreams of events, captions should be provided which are synchronised with the audio.</p>
    <h4>How to test with a visual check</h4>
    <p>If the page contains multimedia content, check that the required alternative is available.</p>
    <p>The transcipt should be available near to the multimedia content but can be a link to another page.</p>
    <p>If a second version of the content is available with audio description then this must be easily accessible from the non-audio described version.</p>
    <h4>Helpful links</h4>
    <p><A href="http://localhost:8080/accessibility/audio-and-video">Home Office Design System - Audio and Video</A></p>

    <h2>Adaptable</h2>

    <h3 id="rr1.3.1a">1.3.1a - Info and relationships - Tables</h3>
    <p>When information is visually presented as a table, this structure must be conveyed appropriately to assistive technologies. This ensure that tables are available to screen reader, screen magnification and speech recognition tool users.</p>
    <p>Where possible, you should use semantic HTML to implement content structures.</p>
    <p><A href="https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships">Understanding Success Criterion 1.3.1: Info and Relationships</A></p>
    <h4>Implementation guidance</h4>
    <p>Tabular data is presented using proper HTML markup (&lt;table&gt;, &lt;tr&gt;, &lt;th&gt;, and &lt;td&gt; elements).</p>
    <p>Tables include a &lt;caption&gt; element which summarises the overall purpose of the table.</p>
    <p>Avoid creating complex tables (with multiple rows or columns of headings).</p>
    <p>If semantic tables are not possible, as a last resort, use ARIA roles to replicate the structure of a table. This is highly complex and involves a lot of additional coding, so avoid it if you can. See <A href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Table_Role">https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Table_Role</A> for implementation advice.</p>
    <h4>How to test with a manual code check</h4>
    <ul>
      <li>right click on any tables and select the ‘Inspect’ option</li>
      <li>manually review the table structure to identify the presence of the correct mark up</li>
      <li>note - &lt;thead&gt; and &lt;tbody&gt; are not semantic HTML and are used for formatting purposes. The only valid semantic tags are shown</li>
      <li>if there are no semantic tags, check for ARIA roles related to tables. All appropriate roles, descriptions and indexes need to be available to pass this requirement</li>
    </ul>
    <h4>How to test with JAWS/NVDA</h4>
    <p>Use the ‘T’ key to reach the tables on the page, use Ctrl+Alt+arrow keys to navigate the tables and check that the correct row or column headers are announced by the screen readers for each data cell.</p>
    <h4>Helpful links</h4>
    <ul className="plain">
      <li><A href="/accessibility/tables">Home Office Design System - Tables</A></li>
      <li><A href="https://www.w3.org/WAI/tutorials/tables/">Web Accessibility Tutorials - Tables Concepts</A></li>
    </ul>

    <h3 id="rr1.3.1b">1.3.1b - Info and relationships - Lists</h3>
    <p>When presenting lists of information, you must communicate this list in a way that assistive technology users can understand.</p>
    <p>Where possible, you should use semantic HTML list options which are appropriate to the information being presented.</p>
    <p><A href="https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships">Understanding Success Criterion 1.3.1: Info and Relationships</A></p>
    <h4>Implementation guidance</h4>
    <p>Use appropriate and proper HTML markup for lists of items:</p>
    <ul>
      <li>ordered lists for structured data like the steps in a process (&lt;ol&gt; and &lt;li&gt;elements)</li>
      <li>unordered lists for unstructured data like the ID documents required for a process (&lt;ul&gt; and &lt;li&gt;)</li>
      <li>description list/definition list to group a series of key terms and their descriptions/definitions together (&lt;dl&gt;, &lt;dt&gt; and &lt;dd&gt;)</li>
    </ul>
    <p>If semantic options are not available, use the ARIA list and listitem roles to replicate semantic structure. This is a last resort. Note: ARIA lists do not have list types - they are all just lists.</p>
    <h4>How to test with a manual code check</h4>
    <ul>
      <li>right click on any list of information and select the ‘Inspect’ option</li>
      <li>manually review the list to ensure the appropriate list type has been used for the data and that no additional tags exist inside the list tag</li>
      <li>if no semantic tags exist, check for the presence of ARIA roles relating to lists. Note that ARIA lists don’t have different types and are all just ‘lists’</li>
    </ul>
    <h4>How to test with JAWS/NVDA</h4>
    <p>Use the ‘L’ key to reach the lists on the page and check that all content that visually and logically represents a list is announced as ‘list’; that content that does not represent a list is not announced as a list.</p>
    <h4>Helpful links</h4>
      <p><A href="https://www.w3.org/WAI/tutorials/page-structure/content/#lists">Web Accessibility Tutorials - Content Structure - Lists</A></p>

    <h3 id="rr1.3.1c">1.3.1c - Info and relationships - Headings</h3>
    <p>Where visual headings are used to communicate the structure of a page, they must also be communicated in a way that supports assistive technology users to access this structure.</p>
    <p>You should use semanatic HTML headings to structure your page. Heads should cascade from H1-H6. Each page must have at least a Level 1 Heading (H1).</p>
    <p><A href="https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships">Understanding Success Criterion 1.3.1: Info and Relationships</A></p>
    <h4>Implementation guidance</h4>
    <p>Use proper HTML markup for headings (&lt;h1&gt; through &lt;h6&gt; elements).</p>
    <p>Each page should have a H1 which describes the overall purpose of the page.</p>
    <p>This should be similar to the Title of the page (see 2.4.2).</p>
    <p>Do not skip heading levels or use multiple H1s on a page if you can avoid it.</p>
    <p>If you cannot use semantic headings, use the ARIA heading role and aria-level attribute to provide heading structure to the page. This is a last resort.</p>
    <h4>How to test with a manual code check</h4>
    <ul>
      <li>right click on any heading and select the ‘Inspect’ option</li>
      <li>manually review the correct heading structure has been applied to visual headings</li>
      <li>if no semantic tags exist, check for the presence of ARIA heading role and the aria-level attribute</li>
    </ul>
    <h4>How to test with JAWS</h4>
    <p>Use the ‘H’ key to reach the headings on the page and check that all text that visually and logically represents a heading is announced as ‘heading’; that the correct level is announced for each heading; that text that does not represent a heading is not announced as a heading.</p>
    <p>Use the JAWS key + F6 to open the Heading List dialog. Review this to check that the heading structure matches the visual document outline</p>
    <h4>How to test with NVDA</h4>
    <p>Use the ‘H’ key to reach the headings on the page and check that all text that visually and logically represents a heading is announced as ‘heading’; that the correct level is announced for each heading; that text that does not represent a heading is not announced as a heading.</p>
    <p>Use the NVDA key + F7 to show the elements list that should show you all the headings available on the page. Review this to check that the heading structure matches the visual document outline</p>
    <h4>Helpful links</h4>
    <ul className="plain">
      <li><A href="/accessibility/headings">Home Office Design System - Headings</A></li>
      <li><A href="https://webaim.org/techniques/semanticstructure/">WebAIM - Semantic Structure: Regions, Headings, and Lists</A></li>
    </ul>

    <h3 id="rr1.3.1d">1.3.1d - Info and relationships - Form fields</h3>
    <p>All form fields have an associated visible label. Where this isn’t possible a non-visible label must be present.</p>
    <p>Sets of radio buttons or checkboxes must be grouped together so that assistive technology users can understand the relationship between these controls.</p>
    <p>Where specific format or input requirements need to be met, hint text linked to the form fields is provided.</p>
    <p><A href="https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships">Understanding Success Criterion 1.3.1: Info and Relationships</A></p>
    <h4>Implementation guidance</h4>
    <p>If you can, use the &lt;label&gt; tag and ‘for’ attribute to give form field elements visible labels.</p>
    <p>Group sets of radio buttons or checkboxes using the &lt;fieldset&gt; tag and have an appropriate &lt;legend&gt; tag to label the group.</p>
    <p>If you cannot use &lt;fieldset&gt; and &lt;legend&gt;, use the radiogroup and radio ARIA roles and associated attributes for radio buttons. Use the group and checkbox ARIA roles and associated attributes for checkboxes. This is a last resort.</p>
    <p>Use aria-describedby to reference hint text from the form control if specific format or input requirements need to be met by users.</p>
    <p>Ensure information on entry format isn’t given by placeholders alone and that this is available to screen reader users.</p>
    <p>If you cannot use visible labels, follow the requirements of 4.1.2 - Name, Role, Value.</p>
    <h4>How to test with a quick check</h4>
    <p>The following quick check will show you if this requirement has been implemented. It will not necessarily show you if it’s failed. If this check doesn’t work then complete the other manual code checks.</p>
    <ul>
      <li>click on the visible label for the form control you’re testing</li>
      <li>if focus moves to the control or activates it then the control and the label are correctly associated</li>
      <li>if focus doesn’t move or the control is not activated, complete further testing</li>
    </ul>
    <h4>How to test form elements with a manual code check</h4>
    <ul>
      <li>right click on a form element and select the ‘Inspect’ option</li>
      <li>manually review the form element and check that a label has been associated with it</li>
      <li>if there is a visible label start by checking the label. It should be wrapped in a &lt;Label&gt; tag and should have a for attribute which references the ID of the form element it labels</li>
      <li>if there is no visible label or it doesn’t have a for attribute, look for aria-label or aria-labelledby on the form element</li>
      <li>check that any additional hint information is linked using aria-describedby</li>
      <li>check that any additional hint information is not only provided using placeholder text</li>
    </ul>
    <h4>How to test radio buttons or checkboxes with a manual code check</h4>
    <ul>
      <li>right click on a radio button or checkbox group and select the ‘Inspect’ option</li>
      <li>manually review to identify if the group of elements are enclosed within a &lt;fieldset&gt; tag and the question/statement is within a &lt;label&gt; tag.</li>
      <li>if this is missing, check for appropriate ARIA alternatives</li>
      <li>check that any additional hint information is linked using aria-describedby</li>
    </ul>
    <h4>How to test with JAWS</h4>
    <p>Use the ‘F’ key to reach all the form elements on the page and check that they have an associated label and that any hint text is read out.</p>
    <p>Use the JAWS key + F5 to list form fields. Review this to check that everything is labelled.</p>
    <p>Ensure that any additional hint text is announced by the screen reader you’re using.</p>
    <h4>How to test with NVDA</h4>
    <p>Use the ‘F’ key to reach all the form elements on the page and check that they have an associated label and that any hint text is read out.</p>
    <p>Use the NVDA key + F7 to show you a list of the form elements on the page. Review this to check that everything is labelled.</p>
    <p>Ensure that any additional hint text is announced by the screen reader you’re using.</p>
    <h4>Helpful links</h4>
    <p><A href="https://www.w3.org/WAI/tutorials/forms/">Web Accessibility Tutorials - Forms Concepts</A></p>

    <h3 id="rr1.3.1e">1.3.1e - Info and relationship - Landmarks</h3>
    <p>Content sections within a page should have an appropriate HTML5 section element or ARIA landmark role defined.</p>
    <p><A href="https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships">Understanding Success Criterion 1.3.1: Info and Relationships</A></p>
    <h4>Implementation guidance</h4>
    <p>As a minimum, you must include a main landmark (either the HTML 5 &lt;main&gt; or ARIA role="main") on each page.</p>
    <p>Add extra landmarks, for example navigation and footer content, if the page has these areas.</p>
    <p>All the section’s content or functionality must be contained within a landmark.</p>
    <p>Where multiple landmarks of the same type are used e.g. navigation, use aria-label to add a descriptive label to the navigation area e.g. ‘Related Links’ for a secondary navigation area.</p>
    <h4>How to test with a manual code check</h4>
    <ul>
      <li>right click on the page and select the ‘Inspect’ option</li>
      <li>review the code to ensure that the main section of the page either uses the &lt;main&gt; tag or has role="main"</li>
      <li>check that navigation areas have either &lt;nav&gt; or role="navigation"</li>
      <li>check that where multiple areas of navigation exist, they all have a landmark and an appropriate label</li>
    </ul>
    <h4>Testing with JAWS</h4>
    <p>Use the ‘R’ key to get the screen readers to announce all landmarks on the page and check that the right landmark is announced for each page section (e.g. ‘main’ for the main content area).</p>
    <h4>Testing with NVDA</h4>
    <ul>
      <li>use the ‘D’ key to hear all the landmarks on the page and check tha tthe right landmark is announced for each section</li>
      <li>use the NVDA key + F7 to show you the list of landmark elements on the page. Review this to check that all the required landmarks exist and that they are labelled appropriately</li>
    </ul>

    <h3 id="rr1.3.2">1.3.2 - Meaningful sequence</h3>
    <p>When the order of content is important, the content order must be preserved no matter how it is presented to the user.</p>
    <p>This ensures that the order of content is meaningful whether someone is looking at it, listening to it with a screen reader, or has stripped out visual styling using a browser plugin.</p>
    <p><A href="https://www.w3.org/WAI/WCAG21/Understanding/meaningful-sequence">Understanding Success Criterion 1.3.2: Meaningful Sequence</A></p>
    <h4>Implementation guidance</h4>
    <p>The structure of your code should reflect the visual structure of the page.</p>
    <p>This keeps the order of content meaningful for screen reader users, or users who have turned off visual styling.</p>
    <p>The underlying structure must still make sense if it is different to the visual structure.</p>
    <h4>How to test with a visual check</h4>
    <ul>
      <li>to check the reading order of the page, the visual styling needs to be switched off</li>
      <li>you can do this by using a simple bookmarklet like <A href="https://dorward.uk/software/disablecss">https://dorward.uk/software/disablecss</A> or, depending on the browser, using the ‘Reading view’ option in the browser</li>
      <li>you can also manually review the DOM to see how content appears</li>
      <li>regardless of the method, once enabled, you should read through the linerised content to check that the reading order follows the reading order with styles enabled</li>
    </ul>
    <h4>Testing with JAWS/NVDA</h4>
    <p>Use the arrow keys (or Insert + down arrow) to go through the whole page and check that its content is read out in a logical order.</p>

    <h3 id="rr1.3.3">1.3.3 - Sensory Characteristics</h3>
    <p>Instructions must not depend on sensory characteristics like shape, size, colour, or location. This ensures that instructions can be understood by users who are unable to see or recognise information communicated using sensory characteristics.</p>
    <p><A href="https://www.w3.org/WAI/WCAG21/Understanding/sensory-characteristics">Understanding Success Criterion 1.3.3: Sensory Characteristics</A></p>
    <h4>Implementation guidance</h4>
    <p>Do not rely on visual descriptions like ‘green’ or ‘below’ to communicate user instructions. For example, in ‘Press the green ‘Next’ button to continue’, the colour is supplemented by non-sensory information.</p>
    <h4>How to test with a visual check</h4>
    <p>If the page contains any instructions around where to find, or how to interact with, content on the website, check that these instructions do not rely on the ability of users to perceive shape, size, visual location or sound.</p>

    <h3 id="rr1.3.4">1.3.4 - Orientation</h3>
    <p>A page view must not be locked to either horizontal or vertical views only, unless this is essential.</p>
    <p>There are limited cases where ‘essential’ orientation locking applies. Check with the A&I team for cases.</p>
    <p><A href="https://www.w3.org/WAI/WCAG21/Understanding/orientation">Understanding Success Criterion 1.3.4: Orientation</A></p>
    <h4>Implementation gudance</h4>
    <p>Let the user view pages in their preferred orientation.</p>
    <p>Use CSS to allow both landscape and portrait.</p>
    <p>Do not try to force a specific orientation or aspect ratio.</p>
    <p>Do not show a ‘please rotate your device’ screen at particular orientations.</p>
    <p>As best practice, make sure content works appropriately in both landscape and portrait orientation.</p>
    <h4>How to test with a visual check on mobile</h4>
    <p>View the page on a mobile device and change the orientation.</p>
    <h4>How to test with a visual check on desktop</h4>
    <ul>
      <li>right click on the page and select ‘Inspect’</li>
      <li>activate the device toolbar</li>
      <li>select the ‘rotate’ option in the toolbar and observe whether the content moves into the new orientation successfully</li>
      <li>resize the browser window to have a portrait or landscape aspect ration. Observe if a ‘Please rotate your device’ message is shown.</li>
    </ul>

    <h3 id="rr1.3.5">1.3.5 - Identify Input Purpose</h3>
    <p>In an input  field, the purpose of each input field that collects information about the user can be understood by assistive technologies and browsers by using autocomplete.</p>
    <p><A href="https://www.w3.org/WAI/WCAG21/Understanding/identify-input-purpose">Understanding Success Criterion 1.3.5: Identify Input Purpose</A></p>
    <h4>Implementation guidance</h4>
    <p>If a form field relates to the user’s personal information (from the set of input purposes listed at <A href="https://www.w3.org/WAI/WCAG21/Understanding/identify-input-purpose">https://www.w3.org/TR/WCAG/#input-purposes</A>), include an explicit autocomplete attribute with the relevant value.</p>
    <p>This ensures that the purpose of the input can be programmatically determined/understood by user agents and third party tools (such as password managers).</p>
    <h4>How to test with a manual code check</h4>
    <p>Right click on each form field requiring information that can be suggested by the browser, select ‘Inspect’ and check that the autocomplete attribute is included in its source code and that the correct value has been given to this attribute.</p>

    <h2>Distinguishable</h2>

    <h3 id="rr1.4.1">1.4.1 - Use of colour</h3>
    <p>Information conveyed with colour must also be identifiable from context, labelling, or alternative forms</p>
    <p><A href="https://www.w3.org/WAI/WCAG21/Understanding/use-of-color">Understanding Success Criterion 1.4.1: Use of Color</A></p>
    <h4>Implementation guidance</h4>
    <p>When rendered in monochrome, information does not disappear.</p>
    <p>Do not only use colour to indicate important content. Use a visible border and label, underline or other visual effect as well.</p>
    <p>Do not only use colour as a key for information graphics and charts. Use distinctive non-colour differences, like patterns or directly applied labels, as well.</p>
    <p>Underline links instead of relying on colour contrast.</p>
    <h4>How to test with a manual code check</h4>
    <p>If colour is used to convey information or distinguish between items, check that the same information is provided via an alternative means.</p>
    <p>Use of colour also applies to links that aren’t underlined.</p>
    <p>Check that all links within the content (not navigation).</p>

    <h3 id="rr1.4.2">1.4.2 - Audio control</h3>
    <p>Audio/video must not play automatically unless the user is pre-warned and can control the audio</p>
    <p><A href="https://www.w3.org/WAI/WCAG21/Understanding/audio-control">Understanding Success Criterion 1.4.2: Audio Control</A></p>
    <h4>Implementation guidance</h4>
    <p>Audio or video content that plays automatically, for example an alert sound, lasts for three seconds or less.</p>
    <p>Audio or video that plays automatically and lasts for more than three seconds can be paused and/or stopped using on screen controls.</p>
    <h4>How to test with a manual code check</h4>
    <ul>
      <li>listen to the page without any assistive technology running</li>
      <li>ensure that any sounds that play automatically only last for 3 seconds or less</li>
      <li>if a sound lasts for more than 3 seconds, check that audio controls are available</li>
    </ul>

    <h3 id="rr1.4.3">1.4.3 - Contrast</h3>
    <p>There should be enough difference (contrast) between a background and the foreground content so that user can easily differentiate the two.</p>
    <p><A href="https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum">Understanding Success Criterion 1.4.3: Contrast (Minimum)</A></p>
    <h4>Implementation guidance</h4>
    <p>Text, including text in images, must have a contrast ratio of at least 4.5:1 against its background colour.</p>
    <p>Where text crosses different background colours or an image, all of the text must meet the contrast requirement.</p>
    <p>This requirement does not include incidental text in photographs, images or illustrations.</p>
    <p>The Home Office Accessibility standard has removed the ability to have larger text at lower contrast ratios (3:1 for large or bold text). The standard requirement for all text contrast is 4.5:1.</p>
    <h4>How to test with Colour Contrast Analyser</h4>
    <p>Use the Colour Contrast Analyser to check that the contrast ratio between text and background colours is at least 4.5:1 for standard text.</p>
    <h4>How to test with developer tools</h4>
    <ul>
      <li>open developer tools in Chrome</li>
      <li>use the inspector tool to highlight content</li>
      <li>a tooltip will appear with contrast information. Check that it shows as pass</li>
    </ul>
    <h4>How to test with manual code check</h4>
    <ul>
      <li>use an online contrast checker e.g. <A href="https://webaim.org/resources/contrastchecker">https://webaim.org/resources/contrastchecker</A></li>
      <li>identify the HEX values from the CSS for text and background colours</li>
      <li>use the design specification for the site to identify the HEX values and use the site to check these meet or exceed the 4.5:1 requirement</li>
    </ul>

    <h3 id="rr1.4.4">1.4.4 - Resize text</h3>
    <p>Users should be able to resize text up to 200% without any problems with the presentation and structure of the page (for example truncated text, overlaps or missing items).</p>
    <p><A href="https://www.w3.org/WAI/WCAG21/Understanding/resize-text">Understanding Success Criterion 1.4.4: Resize text</A></p>
    <h4>Implementation guidance</h4>
    <p>Avoid setting specific width and height sizes for containers if you can, so they will adapt to the size of the content they contain.</p>
    <p>Avoid using CSS absolute positioning, as these layouts can easily end up overlapping other content or containers.</p>
    <p>Do not disable pinch-zoom functionality on mobile/tablet devices with &lt;meta&gt; tags such as user-scalable=no or maximum-scale=1.</p>
    <p>Use relative text sizing, like percent sizes, em units or named font sizes.</p>
    <h4>How to test with browser zoom</h4>
    <p>Use the Zoom functionality of the browser to enlarge the page to 200% and check that you can access all content without having to scroll horizontally.  Check that changed content structures - ie burger navs can still be reached.</p>
    <p>Common browser sizes should be used when testing. Ideally you should test at 1024x768, 1280x1024 and 1920x1080 to cover the most common layouts for desktop.</p>
    <h4>How to test with browser settings</h4>
    <p>Use the settings within a browser to resize text without zooming</p>
    <h4>How to test on mobile/tablet</h4>
    <p>Check that you can pinch/zoom on a mobile/tablet device.</p>
    <h4>How to test with a manual code check</h4>
    <p>Inspect the page code to see if  &lt;meta name="viewport"&gt; includes code which blocks user pinch/zoom control such as user-scalable=no or maximum-scale=1</p>

    <h3 id="rr1.4.5">1.4.5 - Images of text</h3>
    <p>Meaningful text must not be presented as part of an image because it cannot be resized, it deteriorates in quality when magnified and is not customisable by the end user.</p>
    <p>Meaningful text is anything which is used to aid understanding for users.</p>
    <p><A href="https://www.w3.org/WAI/WCAG21/Understanding/images-of-text">Understanding Success Criterion 1.4.5: Images of Text</A></p>
    <h4>Implementation guidance</h4>
    <p>Do not use images for meaningful text that gives users information. Text in some types of images, like SVGs, can resize without deterioration, but cannot be customised. As a result no images of text are allowable.</p>
    <p>The Home Office standard for images of text is stricter than the WCAG requirements.</p>
    <h4>How to test with browser settings</h4>
    <p>Turn images off and check that no text disappears</p>
    <h4>How to test with a manual code check</h4>
    <p>Select all the text on the page - any images of text will not be selectable</p>


    <h3 id="rr1.4.10">1.4.10 - Reflow</h3>
    <p>Users should be able to magnify the page up to 400% and content should reflow - move into one column - and not add horizontal scroll bars.</p>
    <p>Content should not be cut off or omitted entirely when magnified.</p>
    <p><A href="https://www.w3.org/WAI/WCAG21/Understanding/reflow">Understanding Success Criterion 1.4.10: Reflow</A></p>
    <h4>Implementation guidance</h4>
    <p>Make sure your pages are responsive, so the content will ‘reflow’ to a single column gracefully.</p>
    <p>There are a small number of exemptions for this requirement:</p>
    <ul>
      <li>Maps and diagrams where scrolling is necessary to understand content, or where stacking information would change the meaning</li>
      <li>Complex tables with many columns (although individual cells must not scroll)</li>
    </ul>
    <h4>How to test with browser zoom</h4>
    <p>Use the Zoom functionality of the browser to enlarge the page to 400% and check that you can access all content without having to scroll horizontally.</p>
    <p>Note the exemptions to this requirement in implementation advice.</p>

    <h3 id="rr1.4.11">1.4.11 - Non text contrast</h3>
    <p>Interactive controls, keyboard focus, icons and content required for understanding e.g. charts and infographics must have enough contrast (at least 3:1) with adjacent colours.</p>
    <p><A href="https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast">Understanding Success Criterion 1.4.11: Non-text Contrast</A></p>
    <h4>Implementation guidance</h4>
    <p>Buttons or other inputs and controls must have a contrast ratio of 3:1 or higher in all their states.</p>
    <p>Parts of graphical objects, like icons, that convey information must have a minimum contrast ratio of 3:1 with adjacent colours.</p>
    <p>The keyboard focus must meet colour contrast requirements and be easy to identify.</p>
    <h4>How to test with Colour Contrast Analyser</h4>
    <p>Use the Colour Contrast Analyser to check that</p>
    <ul>
      <li>the contrast ratio between each informative object within icons and its surrounding colours is at least 3:1</li>
      <li>the contrast ratio between the border and focus indicator of form fields and buttons/links and the background colour is at least 3:1</li>
    </ul>
    <h4>How to test with a manual code check</h4>
    <ul>
      <li>Use an online contrast checker e.g. <A href="https://webaim.org/resources/contrastchecker">https://webaim.org/resources/contrastchecker</A></li>
      <li>Identify the HEX values from the CSS for outline styles and states and input these into the colour contrast checker</li>
      <li>Use the design specification for the site to identify the HEX values and use the site to check these meet or exceed the 3:1 requirement</li>
    </ul>

    <h3 id="rr1.4.12">1.4.12 - Text spacing</h3>
    <p>For regular HTML page content, no loss of content or functionality happens when a user changes line height, letter or word spacing.</p>
    <p><A href="https://www.w3.org/WAI/WCAG21/Understanding/text-spacing">Understanding Success Criterion 1.4.12: Text Spacing</A></p>
    <h4>Implementation guidance</h4>
    <p>Make sure your CSS lets users adjust:</p>
    <ul>
      <li>Line height (line spacing) to at least 1.5 times the font size</li>
      <li>Spacing following paragraphs to at least 2 times the font size</li>
      <li>Letter spacing (tracking) to at least 0.12 times the font size</li>
      <li>Word spacing to at least 0.16 times the font size</li>
    </ul>
    <p>Users should be able to adjust text spacing without breaking layouts, overlapping elements or problems seeing content.</p>
    <h4>How to test with a visual check</h4>
    <p>You can use the Text Spacing Bookmarklet (<A href="http://www.html5accessibility.com/tests/tsbookmarklet.html">http://www.html5accessibility.com/tests/tsbookmarklet.html</A>) to modify the content spacing and check that all content adapts and is still visible.</p>

    <h3 id="rr1.4.13">1.4.13 - Content on hover or focus</h3>
    <p>Ensuring that extra content eg tooltips:</p>
    <ul>
      <li>can be viewed easily</li>
      <li>don’t cover up key content</li>
      <li>can be dismissed without moving focus or hover</li>
      <li>can be hovered over (i.e. it doesn’t disappear if you move the mouse)</li>
      <li>is persistent and doesn’t disappear until the user moves focus / hover away</li>
    </ul>
    <p><A href="https://www.w3.org/WAI/WCAG21/Understanding/content-on-hover-or-focus">Understanding Success Criterion 1.4.13: Content on Hover or Focus</A></p>
    <h4>Implementation guidance</h4>
    <p>Position the additional content so that it does not obscure any other content, including the trigger. This does not include white space and purely decorative content, such as a background graphic which provides no information.</p>
    <p>Provide an easy way to dismiss the additional content, such as by pressing Escape or selecting a close button.</p>
    <p>The additional content should stay on screen until dismissed by the user.</p>
    <p>The additional content should stay on screen if the user hovers over it.</p>
    <h4>How to test using a visual check</h4>
    <p>When new content appears on mouse over or on keyboard focus complete the following checks:</p>
    <ul>
      <li>check that you can dismiss the new content by pressing the Esc key or a close button</li>
      <li>check that you can move the mouse pointer to the new content</li>
      <li>check that the new content does not disappear until you move the mouse pointer or keyboard focus to the next item on the page</li>
    </ul>

<div className="contact-us">
  <h2 className="govuk-heading-m">Get in touch</h2>
  <p>If you’ve got a question or suggestion share it on the Home Office DDaT Slack channel #ask-accessibility or email <A href="mailto:access@digital.homeoffice.gov.uk">access@digital.homeoffice.gov.uk</A>.</p>
</div>

    </div>
  </div>
);

export default Page;

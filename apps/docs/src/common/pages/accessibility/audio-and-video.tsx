import { FC, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A, NavigationMenu } from '@not-govuk/components';

export const title = 'Audio and video';
const description = 'Accessibility guidance for audio and video content';
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
        Audio and video
      </h1>
      <p>It's important to consider how people with different access needs will use media content.</p>

      <h2>Helping everyone</h2>
      <p>Making your audio and video content accessible can benefit users with and without a disability.</p>
      <p>For example, any user may choose to quickly read through a transcript instead of watching a video.</p>
      <p>Or they might use captions in loud locations where the audio can’t be heard or in quiet environments where sound can’t be
      used. Captions can also be helpful to people who are not native speakers of the language.</p>

      <h2>The basics</h2>
        <p>Do the following things to start making your video or audio content accessible (this is not a comprehensive list):</p>
        <ul>
        <li>provide a transcript</li>
        <li>use captions for video</li>
        <li>provide an audio description for video that includes important visual information</li>
        <li>make it clear where to find the transcript and audio-described version</li>
        <li>use a media player that meets accessibility considerations such as keyboard accessibility</li>
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
            <td className="govuk-table__cell">Cognitive impairment</td>
            <td className="govuk-table__cell">Difficulty processing auditory information</td>
            <td className="govuk-table__cell">Captions</td>

          </tr>
          <tr className="govuk-table__row">
            <td className="govuk-table__cell">Deaf or has a hearing impairment</td>
            <td className="govuk-table__cell">Cannot hear the audio</td>
            <td className="govuk-table__cell">Captions or a transcript</td>

          </tr>
          <tr className="govuk-table__row">
            <td className="govuk-table__cell">Blind or partially sighted</td>
            <td className="govuk-table__cell">Cannot see the visual elements of a video</td>
            <td className="govuk-table__cell">Text-to-speech software to read a transcript<br /><br />Audio description to describe video content</td>

          </tr>

          <tr className="govuk-table__row">
            <td className="govuk-table__cell">Deafblind</td>
            <td className="govuk-table__cell">Cannot hear audio or see the visual elements</td>
            <td className="govuk-table__cell">Transcript, which can be converted to braille</td>

          </tr>

          <tr className="govuk-table__row">
            <td className="govuk-table__cell">Motor impairment</td>
            <td className="govuk-table__cell">Cannot use a mouse</td>
            <td className="govuk-table__cell">Media player that can be controlled using keyboard or voice input</td>

          </tr>
        </tbody>
      </table>

<h2>Creating good content</h2>

<p>You should make your audio and video content as accessible as possible as well as providing appropriate alternatives
to ensure that everyone has a comparable experience. See <A href="https://tetralogical.com/articles/an-inclusive-approach-to-video-production/">An inclusive approach to video production</A> for one way to do this.</p>

<p>The <A href="https://www.w3.org/WAI/media/av/">Making Audio and Video Media Accessible guide</A> provides a great
exploration of accessibility considerations.</p>

<h3>The video and audio itself</h3>

<p>Your video and audio content needs be as accessible as possible, even before you provide alternatives such as captions
and a transcript. </p>

<p>When creating the video and audio consider the following.</p>

<p>Do: </p>

<ul>
<li>make sure speech can be clearly heard and there's good separation from any background noise </li>

<li>make sure information makes sense to people who cannot see the video by being as descriptive as possible in the main audio </li>

<li>add audio description to convey information that cannot be included in the main audio </li>

<li>try to have the speaker in frame </li>

<li>allow space for a sign language interpreter </li>

<li>make sure text is easy to read and has good colour contrast </li>
</ul>

<p>Do not:</p>

<ul>
<li>use jargon, acronyms or idioms </li>

<li>use flashing content as this may cause seizures </li>
</ul>

<h3>Captions</h3>

<p>You should always provide captions that are synchronised with the audio. Captions are the audio in text form, displayed on the video screen.</p>

<p>When creating captions, make sure you:</p>

<ul>
<li>make it clear who’s speaking </li>

<li>include important sounds as well as speech </li>

<li>check them for accuracy if you’re auto-generating them </li>

<li>use closed captions when the video player supports this </li>
</ul>

<p>Find out more about <A href="https://www.w3.org/WAI/WCAG21/Understanding/captions-prerecorded">pre-recorded captions</A> and <A href="https://www.w3.org/WAI/WCAG21/Understanding/captions-live">live captions</A>.</p>

<h4>Closed and open captions</h4>

<p>Use closed captions rather than open captions. Closed captions can be hidden or shown by the user. </p>

<h3>Transcript</h3>

<p>Provide a transcript for all media content. A transcript is the text of all the content in a video, presented separately from it.</p>

<p>Make sure you:</p>

<ul>
<li>include all the audio and visual information so that users can understand all the content that’s in the video just from the transcript </li>

<li>position the transcript next to the video or clearly link to it </li>

<li>create a transcript that's accessible</li>
</ul>

<h3>Audio description</h3>

<p>An <A href="https://www.w3.org/WAI/WCAG21/Understanding/audio-description-or-media-alternative-prerecorded">audio description</A> describes visual information needed to understand the content of a video.</p>

<p>Make sure you:</p>

<ul>
<li>make it clear where to find the audio-described version (if separate from the main video content) </li>

<li>include all the audio and visual information in the video so that you could understand all the content</li>
</ul>

<p>Alternatively, if your video is narrated, you could incorporate any important visual information into the narration.</p>

<h2>Media player accessibility</h2>

<p>In addition to making the content accessible, the video or audio player must also be fully accessible:</p>

<ul>
<li>do not autoplay video or audio content </li>

<li>ensure that the media player meets all other accessibility considerations, such as keyboard accessibility </li>
</ul>

<h2>Sign language</h2>

<p>Provide sign language interpretation for video that has audio content - when you have identified a need.</p>

<p>You can arrange sign language interpretation services through TheBigWord. Contact <A href="mailto:lauren.brayshaw@thebigword.com">lauren.brayshaw@thebigword.com</A>.</p>

<h2>When you cannot make something accessible</h2>

<p>Tell users when certain accessibility features are not present and why, such as no captions due to the video not having important
auditory information.</p>

<p>Provide dates for fixes and include these in your accessibility statement.</p>


<div className="contact-us">
  <h2 className="govuk-heading-m">Get in touch</h2>
  <p>If you’ve got a question or suggestion share it on the Home Office DDaT Slack channel #ask-accessibility or email <A href="mailto:access@digital.homeoffice.gov.uk">access@digital.homeoffice.gov.uk</A>.</p>
</div>

    </div>
  </div>
);

export default Page;

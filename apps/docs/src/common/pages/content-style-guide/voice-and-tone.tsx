import { FC, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A } from '@not-govuk/components';
import { menu } from '../content-style-guide'

export const title = 'Voice and tone';
const description = 'Voice and tone';
export const section = 'Content style guide';

const Page: FC<PageProps> = () => (
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
      <h2 id="home-office-voice">Home Office voice</h2>
     <p>Our voice is human, empowering, respectful and clear.</p>
      <p>It should be consistent across all our products and services. It is who we are and how we demonstrate our values of courage, compassion, respect and collaboration.</p>
<p>Here are some examples showing what we mean.</p>
 <h3 id="human">Human</h3>
<p>A 'human' voice is empathetic, personal, and natural. It uses words that the audience understands. Varying your sentence length and structure will help to make your content seem less rigid and monotonous. If you reuse templated text, make sure all the content is relevant to the user.</p>
<p>For example: 'You can work and study, and come and go as many times as you want before the permit expires.' rather than 'It allows employment, education and unlimited entry/exit.'</p>
<h3 id="empowering">Empowering</h3>
<p>Using an 'empowering' voice means focussing on what someone can do, rather than what they cannot do or what will be done to them. It provides options, next steps and support. Speak to the reader, use ‘you’ as much as you can, and write in the active voice.</p>
<p>For example: 'You can prove your English language ability by...' rather than 'You will be assessed on your English language ability'.</p>
<h3 id="respectful">Respectful</h3>
<p>A 'respectful' voice is inclusive, considerate and sensitive. It is not accusing or demanding; it fosters an environment where people feel valued and treated with dignity.</p>
<p>For example: 'You may be asked questions about difficult topics but it is important that you explain what has happened to you and your family.' rather than 'Tell the interviewer everything or it can count against you.'</p>
<h3 id="clear">Clear</h3>
<p>Use plain language that the user will understand. Be honest about what we are doing and why, and clarify and explain if needed. Do not hide meaning behind legal or government jargon.</p>
<p>For example: 'give your fingerprints and photo' rather than 'provide biometric information'.</p>

    
<h2 id="tone">Tone</h2>
<p>Tone can change depending on the audience or channel. Like in conversation, this is about being responsive to the person and the context.</p>
<p>Whatever tone we take, it should reflect our voice and values.</p>
<p>For example:</p>
      <ul>
<li>our HR virtual assistant is more chatty, informal and varied in tone than our static HR guidance and policies</li>
<li>our case management systems are direct, clear, professional and active in tone as staff need instructional and straightforward language that reflects their work processes and helps them to complete tasks quickly and accurately</li> 
      </ul>
      
      <h2>Help improve this guidance</h2>
      <p>To contribute, join the <A href="https://github.com/UKHomeOffice/design-system/discussions/600">GitHub discussion</A>.</p>
    </div>
  </div>
);

export default Page;
  



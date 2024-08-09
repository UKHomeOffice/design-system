import { FC, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A } from '@not-govuk/components';
import { menu } from '../content-style-guide'

export const title = 'Voice and tone';
const description = 'Voice and tone';
export const section = 'Content style guide';

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
      <h2 id="home-office-voice">Home Office voice</h2>
      <p>Our voice should be consistent across all our products and services. It is who we are and how we want others to see us.</p>
<p>A consistent voice presents us as trustworthy, confident and organised.</p>
<p>The Home Office voice is:</p>
        <ul>
          <li>human</li>
          <li>empowering</li>
          <li>respectful</li>
          <li>clear</li>
          </ul>
<p>It is based on our core Home Office values of compassion, courage, respect and collaboration.</p>
<p>Here are some examples showing what we mean.</p>
 <h3 id="human">Human</h3>
<p>Be empathetic, natural, and use words that the audience understands. Vary your sentence length and structure. Do not be formulaic or monotonous and try to avoid standard templated text if you can.</p>
<h3 id="empowering">Empowering</h3>
<p>Focus on what someone can do, rather than what they cannot do or what will be done to them. Provide next steps. Speak to the reader, use ‘you’ as much as you can, and write in the active voice.</p>
<h3 id="respectful">Respectful</h3>
<p>Be inclusive, considerate and sensitive. A respectful voice is not accusing or demanding; it fosters an environment where people feel valued and treated with dignity.</p>
<h3 id="clear">Clear</h3>
<p>Use plain and unambiguous language. Write to be understood. Be honest about what we are doing and why, and clarify and explain if needed. Do not hide meaning behind legal or government jargon.</p>

<h2 id="tone">Tone</h2>
<p>Unlike voice, tone can change depending on the audience or channel. Like in conversation, this is about being responsive to the person and the context.</p>
<p>Here are some examples:</p>
      <ul>
<li>Our HR virtual assistant is more chatty, informal and varied in tone than our static HR guidance and policies.</li>
<li>Our case management systems are direct, clear, professional and active in tone as staff need instructional and straightforward language that reflects their work processes and helps them to quickly and accurately complete tasks.</li> 
      </ul>
      
      <h2>Help improve this guidance</h2>
      <p>To contribute, join the <A href="https://github.com/UKHomeOffice/design-system/discussions/">GitHub discussion</A>.</p>
    </div>
  </div>
);

export default Page;
  



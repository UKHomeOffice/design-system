import { FC, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A } from '@not-govuk/components';
import config from '../../../config';

import { SubsectionWrap, title as subsection } from './';

const siteTitle = config.title;

export const title = 'Voice and tone';
const longTitle = title;
const description = longTitle;

const Page: FC<PageProps> = () => (
  <SubsectionWrap>
    <Helmet>
      <title>{title} - {siteTitle}</title>
      <meta name="description" content={description} />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={description} />
    </Helmet>
    <h1>
      <span className="caption">{subsection}</span>
      {longTitle}
    </h1>
    <p>Voice and tone are essential parts of communication. They play a crucial role in building identity and trust.</p>
    <p>Voice is how we show who we are and is consistent across our products and services.</p>
    <p>Tone adapts to the channel and user need.</p>
    <h2 id="home-office-voice">Home Office voice</h2>
    <p>Our voice is:</p>
    <ul className="govuk-list govuk-list--bullet">
      <li>human</li>
      <li>empowering</li>
      <li>respectful</li>
      <li>clear</li>
    </ul>
    <p>Using this voice consistently across our products and services is one of the ways we demonstrate the Home Office values of courage, compassion, respect and collaboration.</p>
    <table className="govuk-table">
      <thead className="govuk-table__head">
        <tr className="govuk-table__row">
          <th scope="col" className="govuk-table__header">Voice</th>
          <th scope="col" className="govuk-table__header">What this means</th>
          <th scope="col" className="govuk-table__header">Example</th>
        </tr>
      </thead>
      <tbody className="govuk-table__body">
        <tr className="govuk-table__row">
          <td>Human</td>
          <td>Use natural language that the audience understands.</td>
          <td>'You can work, study, and travel in and out of the UK with this permit' rather than 'It allows employment, education, and unlimited entry/exit.'</td>
        </tr>
        <tr className="govuk-table__row">
          <td>Empowering</td>
          <td>Emphasise what the user can do, using ‘you’ and the active voice.</td>
          <td>'You can prove your English language ability by...' rather than 'You will be assessed on your English language ability'.</td>
        </tr>
        <tr className="govuk-table__row">
          <td>Respectful</td>
          <td>Be inclusive, considerate, and sensitive, instead of accusing or demanding.</td>
          <td>‘It is important that you explain what has happened to you and your family' rather than 'Tell the interviewer everything or it can count against you'.</td>
        </tr>
        <tr className="govuk-table__row">
          <td>Clear</td>
          <td>Use clear language and avoid hiding meaning behind jargon or legal language.</td>
          <td>'Give your fingerprints and photo' rather than 'Provide biometric information'.</td>
        </tr>
      </tbody>
    </table>
    <h2 id="tone">Tone</h2>
    <p>Unlike voice, tone can change. We adapt it all the time in spoken communication, for example using a softer tone with children or a more formal tone with our manager.</p>
    <p>It will still be recognisable as the Home Office through the use of our voice, but it will suit the user need and channel.</p>
    <p>Here are some examples from our services:</p>
    <ul className="govuk-list govuk-list--bullet">
      <li>For our case management system, we use a direct tone that focuses on tasks and action rather than explanation: for example, ‘You must check the applicant’s documents’.</li>
      <li>For our HR chat tool, we use a conversational but professional tone which is informal (but not over familiar), polite and helpful: for example, ‘Need to find a colleague’s role and team?’</li>
      <li>When inviting neurodiverse participants to research, we use an empathetic and reassuring tone to create psychological safety.</li>
      <li>For users downloading large datasets, we remind them of their data handling responsibilities in a clear and concise tone, using short sentences to minimise the cognitive load.</li>
    </ul>

    <h2>Help improve this guidance</h2>
    <p>To contribute, join the <A href="https://github.com/UKHomeOffice/design-system/discussions/600">GitHub discussion</A>.</p>
  </SubsectionWrap>
);

export default Page;

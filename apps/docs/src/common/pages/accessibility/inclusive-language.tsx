import { FC, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A } from '@not-govuk/components';
import { menu } from '../accessibility'

import { PageWrap } from '../';

export const title = 'Inclusive language';
const description = 'How to use inclusive language on digital services';
export const section = 'Accessibility';

const Page: FC<PageProps> = () => (
  <PageWrap>
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
        <span className="caption">Accessibility</span>
          Inclusive language
      </h1>
      <p>As an organisation and in communications with our users, we should write in a way which is clear, compassionate and respectful.</p>



      <h2>Helping everyone</h2>
      <p>When we build government services, we must ensure they’re accessible and inclusive to everyone who needs to use them.</p>
      <p>Inclusive language builds trust and allows us to communicate effectively with our users.</p>
      <p>This guidance is not comprehensive, but aims to provide principles and specific suggestions for writing and talking about diverse groups of people.</p>
      <h2>Writing inclusive content</h2>
      <h3>Age</h3>
        <p>Do:</p>
        <ul>
        <li>only ask for a person’s age if it is needed - for example, if a person must be over 18 to use a service</li>
        <li>only refer to someone’s age if it’s relevant to what you’re writing about</li>
        </ul>

        <p>Do not:</p>
        <ul>
        <li>use age-related descriptors like ‘young’ or ‘old’ - use specific age ranges, such as ‘18-24’ or ‘over 65’ </li>
        </ul>
        <h3>Disability</h3>
        <p>Follow our <A href="https://ukhomeoffice.github.io/accessibility-posters/">accessible design principles</A> and consider how your language is inclusive to people who face different barriers to accessing services.</p>
          <p>Do:</p>
          <ul>
          <li>clearly signpost users to alternative methods of accessing a service and get support, if needed</li>
          <li>recognise the variety of barriers in society that can make life harder for people</li>
          <li>use positive and person-centred language, when talking about people with disabilities - for example, 'people with health conditions or impairments'</li>
          </ul>

          <p>Do not:</p>
          <ul>
          <li>use language that implies conditions or disability being a barrier - instead focus on removing barriers that they might face in society</li>
          </ul>
          <h3>Sex, gender and sexuality</h3>
            <p>Do:</p>
            <ul>
            <li>only refer to a person’s sex or gender if relevant and there’s a reason why you’re collecting this data</li>
            <li>allow for flexibility around this information, such as asking for both a person’s sex and their gender, to ensure that the data captured accurately represents the individual and their needs</li>
            <li>allow people to self-describe - use language that reflects how a person refers to themselves</li>
            </ul>
            <h4>Sex</h4>
              <p>Do:</p>
              <ul>
              <li>ask for, or refer to, a person’s sex only when it’s relevant for biological data, not when concerning how a person identifies</li>
              <li>refer to the sex someone was registered with at birth</li>
              <li>provide options other than male and female where possible</li>
              <li>allow people to disclose whether their sex registered at birth is different from their sex at present if you need to understand a persons’ current needs</li>
              </ul>
            <div className="govuk-inset-text">
            The UK currently does not use an X marker for sex on identity documents, meaning that identity documents cannot have a sex other than male or female. Current policy states that for Biometric Residence Permit (BRPs) or identity documents, caseworkers will need to contact individuals to ask for a preference for their identity documentation. If relevant to your service, you should inform users of this when providing an ‘other’ option for questions about their sex.
            </div>
            <h4>Gender</h4>
              <p>Do:</p>
              <ul>
              <li>refer to gender when relevant to how a person identifies, rather than when referring to biological characteristics - for example, if you need this data to understand the needs of users for policing, housing or asylum accommodation purposes</li>
              <li>use gender neutral pronouns - for example, ‘Alex Brown has settled status, they have the right to live and work in the UK’</li>
              </ul>
              <p>Do not:</p>
              <ul>
              <li>use language that reinforces harmful stereotypes and assumptions</li>
              </ul>
              <p>Find out more about how to ask users for their sex or gender in <A href="https://design.homeoffice.gov.uk/patterns/ask-sex-or-gender">the sex and gender pattern</A>.</p>
              <h4>Sexuality</h4>
                <p>Do:</p>
                <ul>
                <li>give a reason for asking a person’s sexuality, if you need to ask for it</li>
                <li>always use gender neutral terms when referring to people and their relationships</li>
                </ul>
                <p>Do not:</p>
                <ul>
                <li>give ‘same-sex’ relationships as a different radio option from ‘spouse, partner or cohabitant’ in questions</li>
                <li>use language that makes assumptions about a person’s sexuality </li>
                </ul>
              <h3>Ethnicity, nationality and religion</h3>
                <p>Do:</p>
                <ul>
                <li>only refer to people’s ethnicity or religion if it’s relevant to the content </li>
                <li>ask how people identify themselves, and be aware of complexities within ethnic and religious identities </li>
                <li>recognise the negative impacts of using broad terminology to homogenise diverse communities</li>
                </ul>
                <h4>Ethnicity and nationality</h4>
                <p>Do:</p>
                <ul>
                <li>sense-check your language with ethnic diversity in mind</li>
                <li>capitalise ethnic groups and nationalities when writing about, or asking users for their, ethnicity or nationality</li>
                </ul>
                  <p>Do not:</p>
                  <ul>
                  <li>group diverse geographical regions together - spell out specific nationalities and ethnic groups when relevant</li>
                  <li>use acronyms like 'BAME' or 'BME' - they do not refer to a singular homogeneous ethnic group</li>
                  <li>use language that can be linked to harmful stereotypes and assumptions</li>
                  </ul>
                  <h4>Religion</h4>
                  <p>Do:</p>
                  <ul>
                  <li>always consider the various religious practices and beliefs that people have - and recognise the diverse needs of people from different faiths in your writing</li>

                  </ul>
                    <p>Do not:</p>
                    <ul>
                    <li>use language that may inherently exclude those of different faiths - for example, referring to certain religious celebrations but not others </li>
                    </ul>
                    <h2 id="posters">Posters</h2>
                    <p>Use our quick reference <A href="https://github.com/UKHomeOffice/posters/tree/master/design/Inclusive%20language">inclusive language posters</A> as best practice guidelines while you design and research.</p>
                    <p>Download the posters for your office space and help colleagues think about how to write inclusively.</p>

<h2>Help improve this guidance</h2>
    <p>To contribute, send your request to <A href="mailto:ucdops@homeoffice.gov.uk">ucdops@homeoffice.gov.uk,</A> or add it to the <A href="https://github.com/UKHomeOffice/design-system/discussions/557">GitHub discussion</A>.</p>


    </div>
  </div>
  </PageWrap>
);

export default Page;

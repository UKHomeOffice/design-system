import { FC, Fragment, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A, NavigationMenu } from '@not-govuk/components';

export const menu = (
  <Fragment>
    <NavigationMenu items={[
      {
        href: '#a',
        text: 'A'
      },
      {
        href: '#b',
        text: 'B'
      },
      {
        href: '#c',
        text: 'C'
      },
      {
        href: '#d',
        text: 'D'
      },
      {
        href: '#e',
        text: 'E'
      },
      {
        href: '#f',
        text: 'F'
      },
      {
        href: '#g',
        text: 'G'
      },
      {
        href: '#h',
        text: 'H'
      },
      {
        href: '#i',
        text: 'I'
      },
      {
        href: '#j',
        text: 'J'
      },
      {
        href: '#k',
        text: 'K'
      },
      {
        href: '#l',
        text: 'L'
      },
      {
        href: '#m',
        text: 'M'
      },
      {
        href: '#n',
        text: 'N'
      },
      {
        href: '#o',
        text: 'O'
      },
      {
        href: '#p',
        text: 'P'
      },
      {
        href: '#q',
        text: 'Q'
      },
      {
        href: '#r',
        text: 'R'
      },
      {
        href: '#s',
        text: 'S'
      },
      {
        href: '#t',
        text: 'T'
      },
      {
        href: '#u',
        text: 'U'
      },
      {
        href: '#v',
        text: 'V'
      },
      {
        href: '#w',
        text: 'W'
      },
      {
        href: '#x',
        text: 'X'
      },
      {
        href: '#y',
        text: 'Y'
      },
      {
        href: '#z',
        text: 'Z'
      },
    ]} />
  </Fragment>
);

export const title = 'Content Style Guide';
const description = 'How to write content for Home Office services.';

const Page: FC<PageProps> = ({ location }) => (
  <div className="govuk-grid-row">
    <Helmet>
      <title>{title} - Home Office Design System</title>
      <meta name="description" content={description} />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={description} />
      <meta name="og:article:section" content={title} />
    </Helmet>
    <div className="govuk-grid-column-one-quarter">
      {menu}
    </div>
    <div className="govuk-grid-column-three-quarters">
      <h1>{title}</h1>

      <h2 id="a">A</h2>
      <h3 id="abroad">abroad</h3>
      <p>Use ‘abroad’ rather than ‘overseas’. Overseas may cause confusion because not all countries are separated by sea.</p>
      <h3 id="account">account</h3>
      <p>Say “create an account” rather than “register” or “set up” an account.</p>
      <h3 id="acronyms">acronyms</h3>
      <p>See guidance on abbreviations and acronyms on <A href="https://www.gov.uk/guidance/style-guide/a-to-z-of-gov-uk-style">GOV.UK</A>.</p>
      <h3 id="active voice">active voice</h3>
      <p>Use the active rather than passive voice. This will help us write concise, clear content.</p>
      <h3 id="alter">alter</h3>
      <p>Use "change" rather than "alter" or "modify". </p>
      <h3 id="American and UK English">American and UK English</h3>
      <p>Use UK English spelling and grammar. For example, use ‘visualise’ not ‘visualize’, ‘modelling’ not ‘modeling’, and ‘fill in a form’, not ‘fill out a form’.</p>
      <h3 id="ampersand (&)">ampersand (&)</h3>
      <p>Use ‘and’ rather than ‘&’ unless it’s a department’s logo image or a company’s name as it appears on the <A href="https://beta.companieshouse.gov.uk/">Companies House</A> register.</p>
      <h3 id="annualised hours working">annualised hours working</h3>
      <p>Use ‘working hours’ rather than ‘annualised hours working‘.</p>
      <h3 id="assign">assign</h3>
      <p>Use ‘assign’ rather than ‘allocate’. For example, ‘assign a task’ or ‘assign a group of cases’.</p>
      <h3 id="asylum seeker">asylum seeker</h3>
      <p></p>

      <h2 id="b">B</h2>
      <h3 id="biometrics">biometrics</h3>
      <p>Use ‘biometrics’ in internal services. In external services, use ‘fingerprints and photo’ rather than ‘biometrics’. For example, ‘have your fingerprints and photo taken’.</p>
      <h3 id="biometric residence permit (BRP)">biometric residence permit (BRP)</h3>
      <p>Lower case. You can use the acronym ‘BRP’ after the first full mention.</p>
      <h3 id="biometric residence card (BRC)">biometric residence card (BRC)</h3>
      <p>Lower case. These are no longer in use. Also called a ‘UK residence card’ or ‘EEA biometric residence card’.</p>
      <h3 id="Border Force">Border Force</h3>
      <p>Upper case.</p>
      <h3 id="border control">border control</h3>
      <p>Use ‘border control’ rather than ‘passport control’ or ‘primary control point’.</p>

      <h2 id="c">C</h2>
      <h3 id="capital letters">capital letters</h3>
      <p>See guidance on capitalisation on <A href="https://www.gov.uk/guidance/style-guide/a-to-z-of-gov-uk-style">GOV.UK</A>.</p>
      <h3 id="caseworker">caseworker</h3>
      <p>Not ‘case worker’.</p>
      <h3 id="certificate of sponsorship (COS)">certificate of sponsorship (COS)</h3>
      <p>Lower case. You can use the acronym ‘COS’ after the first full mention.</p>
      <h3 id="check">check</h3>
      <p>We use ‘check’ rather than ‘verify’ or ‘validate’. For example, ‘check how long you’ve lived in the UK’.</p>
      <h3 id="clandestine">clandestine</h3>
      <p>Do not refer to people as ‘a clandestine’. Try to be specific, like ‘a person hidden in a vehicle, ship or plane’. You can use ‘clandestine entrant’ if its use is supported by evidence.</p>
      <h3 id="click">click</h3>
      <p>Use ‘select’ rather than ‘click’ or ‘tap’ because not everyone uses a mouse.</p>
      <h3 id="colons">colons</h3>
      <p>Use colons only after a section that could stand on its own as a complete sentence. For example, ‘Squiggly has one dream: he dreams of becoming a chocolatier’.</p>
      <h3 id="Confirmation of Acceptance for Studies (CAS)">Confirmation of Acceptance for Studies (CAS)</h3>
      <p>Upper case. You can use the acronym ‘CAS’ after the first full mention.</p>
      <h3 id="contractions">Contractions</h3>
      <p>Avoid negative contractions like ‘don’t’. See guidance on contractions on <A href="https://www.gov.uk/guidance/style-guide/a-to-z-of-gov-uk-style">GOV.UK</A>.</p>
      <h3 id="correct">correct</h3>
      <p>We use ‘correct’ rather than ‘right’. For example, ‘Select the correct settlement route’.</p>
      <h3 id="correspondence">correspondence</h3>
      <p>Correspondence is not plain English. Try to be specific such as ‘postal address’, ‘contact address’ or ‘email’. For example, ‘Is this the family’s postal address?’</p>
      <h3 id="criminal justice system">criminal justice system</h3>
      <p>Lower case.</p>
      <h3 id="customer">customer</h3>
      <p>The people who use our services are not ‘customers’. ‘Customer’ implies choice. Our users have no choice but to use our services. Use ‘user’ or try to be specific, like ‘applicant’ or claimant’.</p>
      <h3 id="customs">customs</h3>
      <p>Use ‘customs’ rather than ‘secondary control’. For example, ‘customs regulations’ or ‘customs allowances’.</p>
      <h3 id="customs officer">customs officer</h3>
      <p>Use ‘Border Force officer’ rather than ‘customs officer’ unless you have a specific reason for doing so.</p>

      <h2 id="d">D</h2>
      <h3 id="DBS adult first">DBS adult first</h3>
      <p>Lower case.</p>
      <h3 id="DBS adults barred list">DBS adults barred list</h3>
      <p>Lower case.</p>
      <h3 id="DBS children’s barred list">DBS children’s barred list</h3>
      <p>Lower case.</p>
      <h3 id="DBS certificate">DBS certificate</h3>
      <p>Use ‘DBS certificate’ rather than ‘DBS disclosure’.</p>
      <h3 id="DBS checking service">DBS checking service</h3>
      <p>Use ‘DBS checking service’ rather than ‘DBS disclosure service’.</p>
      <h3 id="dependant">dependant</h3>
      <p>Noun. For example, ‘a dependant’, ‘a child dependant’ or ‘are there any dependants on this application?’.</p>
      <h3 id="dependent">dependent</h3>
      <p>Adjective. For example, ‘dependent child‘, ‘dependent family members’ or ‘I am dependent on the main applicant’.</p>
      <h3 id="disclosure-and-barring-service"> Disclosure and Barring Service (DBS)</h3>
      <p>Upper case. You can use the acronym ‘DBS’ after the first full mention.</p>

      <h2 id="e">E</h2>
      <h3 id="enhanced DBS check">enhanced DBS check</h3>
      <p>Use ‘enhanced DBS check’ rather than ‘enhanced disclosure’.</p>
      <h3 id="EEA biometric residence card">EEA biometric residence card</h3>
      <p>Lower case. These are no longer in use. Also called ‘UK residence card’ or ‘biometric residence card (BRC)’.</p>
      <h3 id="EU Settlement Scheme (EUSS)">EU Settlement Scheme (EUSS)</h3>
      <p>Upper case. You can use the acronym ‘EUSS’ after the first full mention.</p>

      <h2 id="f">F</h2>

      <h2 id="g">G</h2>
      <p>GOV.UK</p>
      <p>All upper case.</p>

      <h2 id="h">H</h2>
      <h3 id="Her Majesty’s Passport Office">Her Majesty’s Passport Office</h3>
      <p>Upper case. You can use ‘HM Passport Office’ after the first full mention. Do not use HMPO.</p>
      <h3 id="Home Office reference number">Home Office reference number</h3>
      <p>Use lower case for ‘reference number’.</p>
      <h3 id="Horizon News">Horizon News</h3>
      <p>Upper case.</p>

      <h2 id="i">I</h2>
      <h3 id="illegal immigrant">illegal immigrant</h3>
      <h3 id="immigration bail">immigration bail</h3>
      <p>Lower case.</p>
      <h3 id="immigration health surcharge">immigration health surcharge (IHS)</h3>
      <p>Lower case. You can use ‘IHS’ after the first full mention. </p>
      <h3 id="immigration officer">immigration officer</h3>
      <p>Use ‘Border Force officer’ rather than ‘immigration officer’. Only use ‘immigration officer’ if you have a specific reason for doing so.</p>
      <h3 id="Immigration Rules">Immigration Rules</h3>
      <p>Upper case.</p>
      <h3 id="inclusive language">inclusive language</h3>
      <p>Read our <A href="https://design.homeoffice.gov.uk/accessibility/inclusive-language">guidance on using inclusive language</A> in the Home Office design system.</p>

      <h2 id="j">J</h2>

      <h2 id="k">K</h2>

      <h2 id="l">L</h2>
      <h3 id="letter">letter</h3>
      <h3 id="Life in the UK Test">Life in the UK Test</h3>
      <p>Upper case L and T. After first mention, you can refer to ‘the test’, using lower case.</p>
      <h3 id="log in">log in</h3>
      <p>We say ‘sign in’ rather than ‘log in’ or ‘login’.</p>

      <h2 id="m">M</h2>
      <h3 id="ministers">ministers</h3>
      <p>See guidance on using titles on <A href="https://www.gov.uk/guidance/style-guide/a-to-z-of-gov-uk-style">GOV.UK</A>.</p>
      <h3 id="migrant">migrant</h3>
      <p>Do not refer to people as ‘migrants’. Try to be specific, such as ‘applicant’, ‘claimant’, ‘employee’ or ‘worker’. If you cannot be specific, use ‘people’.</p>

      <h2 id="n">N</h2>
      <h3 id="notice">notice</h3>

      <h2 id="o">O</h2>

      <h2 id="p">P</h2>
      <h3 id="passport control">passport control</h3>
      <p>Use ‘border control’ rather than ‘passport control’ or ‘primary control point’.</p>
      <h3 id="points-based system">points-based system</h3>
      <p>Lower case and hyphenated.</p>
      <h3 id="people">people</h3>
      <p>We say ‘people’ rather than ‘persons’. </p>
      <h3 id="persons">persons</h3>
      <p>We say ‘people’ rather than ‘persons’. </p>
      <h3 id="please">please</h3>
      <p>Use ‘please’ sparingly. See guidance in <A href="https://www.gov.uk/service-manual/design/writing-for-user-interfaces">Writing for user interfaces</A> on GOV.UK.</p>
      <h3 id="Police National Computer (PNC)">Police National Computer (PNC)</h3>
      <p>Upper case. You can use ‘PNC’ after the first full mention. </p>
      <h3 id="postal">postal</h3>
      <p>Use ‘postal’ instead of ‘correspondence’ if you mean letters or emails. For example, ‘Is this the family’s postal address?’</p>
      <h3 id="primary-control-point">Primary control point</h3>
      <p>Use ‘border control’ rather than ‘passport control’ or ‘primary control point’.</p>
      <h3 id="purdah">purdah</h3>
      <p>Use ‘pre-election period’ rather than ‘purdah’.</p>

      <h2 id="q">Q</h2>
      <h3 id="Queen’s Speech">Queen’s Speech</h3>
      <p>Upper case.</p>
      <h3 id="Quotes and speech marks">Quotes and speech marks</h3>
      <p>Refer to the <A href="https://www.gov.uk/guidance/style-guide/a-to-z-of-gov-uk-style">GOV.UK</A> style guide.</p>

      <h2 id="r">R</h2>
      <h3 id="register">register</h3>
      <p>We say ‘create an account’ rather than ‘register’ or ‘set up’ an account.</p>
      <h3 id="refugee">refugee</h3>
      <h3 id="right">right</h3>
      <p>We use ‘correct’ rather than ‘right’. For example, ‘Select the correct settlement route’.</p>

      <h2 id="s">S</h2>
      <h3 id="senior civil service (SCS)">senior civil service (SCS)</h3>
      <p>Lower case. You can use ‘SCS’ after the first full mention.</p>
      <h3 id="secondary control">secondary control</h3>
      <p>Use ‘customs’ rather than ‘secondary control’. For example, ‘customs regulations’ or ‘customs allowances’.</p>
      <h3 id="select">select</h3>
      <p>Use ‘select’ rather than ‘click’ or ‘tap’ because not everyone uses a mouse.</p>
      <h3 id="set up">set up</h3>
      <p>We say ‘create an account’ rather than ‘register’ or ‘set up’ an account.</p>
      <h3 id="sign in">sign in</h3>
      <p>We say ‘sign in’ rather than ‘log in’ or ‘login’.</p>
      <h3 id="sorry">sorry</h3>
      <p>Use ‘sorry’ sparingly. See guidance in <A href="https://www.gov.uk/service-manual/design/writing-for-user-interfaces">Writing for user interfaces</A> on GOV.UK.</p>
      <h3 id="Sovereign Base Areas">Sovereign Base Areas</h3>
      <p>Upper case. You can use ‘SBA’ after the first full mention.</p>
      <h3 id="subject">subject</h3>
      <p>Do not refer to people as ‘subjects’. Try to be specific, like using ‘applicant’, ‘employee’ or their name. If you cannot be specific, try ‘the user’,  ‘the individual’ or ‘people’.</p>

      <h2 id="t">T</h2>
      <h3 id="time based appeal">time based appeal</h3>
      <p>Not ‘time-based appeal’. See guidance on hyphenation on <A href="https://www.gov.uk/guidance/style-guide/a-to-z-of-gov-uk-style">GOV.UK</A>.</p>
      <h3 id="thank you">thank you</h3>
      <p>Use ‘thank you’ sparingly. See guidance in <A href="https://www.gov.uk/service-manual/design/writing-for-user-interfaces">Writing for user interfaces</A> on GOV.UK.</p>

      <h2 id="u">U</h2>
      <h3 id="UK residence card">UK residence card</h3>
      <p>Lower case. These are no longer in use. Also called a ‘biometric residence card (BRC)’.</p>

      <h2 id="v">V</h2>
      <h3 id="visa">visa</h3>
      <p>Use ‘visa’ rather than technical terms like ‘entry clearance’, ‘leave to enter’ or ‘leave to remain’ when writing for external services.</p>
      <h3 id="visa application centre (VAC)">visa application centre (VAC)</h3>
      <p>Lower case. You can use ‘VAC’ after the first full mention. Do not use ‘visa section’, ‘visa processing post’ or ‘visa issuing office’.</p>

      <h2 id="w">W</h2>

      <h2 id="x">X</h2>

      <h2 id="y">Y</h2>

      <h2 id="z">Z</h2>
    </div>
  </div>
);

export default Page;

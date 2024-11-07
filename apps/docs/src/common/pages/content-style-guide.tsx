import { FC, Fragment, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A, NavigationMenu } from '@not-govuk/components';
import { AZNavigation } from '@hods/components';

export const title = 'Content style guide';
const description = 'How to write content for Home Office services.';

export const menu = (
  <Fragment>
    
    <NavigationMenu items={[
      {
        href: '/accessibility/inclusive-language',
        text: 'Inclusive language'
      },
      {
        href: '/accessibility/readability',
        text: 'Readability'
      },
      {
        href: '/content-style-guide/designing-for-limited-english',
        text: 'Designing for users with limited English'
      },
      {
        href: '/content-style-guide/voice-and-tone',
        text: 'Voice and tone'
      }
    ]} />
  </Fragment>
);

const Page: FC<PageProps> = ({ location }) => (
  <Fragment>
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

    <div className="govuk-grid-row">
      <h1>{title}</h1>
      <p>This style guide is specific to the Home Office to help make our language clear and consistent for all our users. Refer to <A href="https://www.gov.uk/guidance/style-guide/a-to-z">the GDS style guide</A> for style, spelling and grammar conventions across GOV.UK.</p>
      <div className="govuk-grid-column-two-thirds">
        <AZNavigation id="a-z-nav" />
        <h2 className="a-z-header" id="a">A</h2>
        <h3 id="abroad">abroad</h3>
        <p>'Abroad' and 'overseas' can cause confusion. Try to use plain English. For example, 'apply from outside the UK' or 'working in another country'.</p>
        <h3 id="account">account</h3>
        <p>Use 'create' instead of 'register' or 'set up' when you want people to create an account. 'Create an account' tested well in user research and is used by other government departments.</p>
        <h3 id="acronyms">acronyms</h3>
        <p>Write out an acronym in full the first time you use it on a new page or screen, unless it is well known to your users, like UK, US or NHS. Research has found that some users struggle to remember the meaning of an acronym they saw on a previous screen. For example, write 'biometric residence permit (BRP)' on each screen of your service at first mention and use 'BRP' if it appears again on the same screen. If available, use a tooltip like <A href="https://www.gov.uk/guidance/how-to-publish-on-gov-uk/markdown#acronyms">acronym Markdown</A> to make the acronym appear in full as hover text. See more guidance on abbreviations and acronyms in <A href="https://www.gov.uk/guidance/style-guide/a-to-z-of-gov-uk-style">the GOV.UK style guide</A>.</p>
        <h3 id="alter">alter</h3>
        <p>Use 'change' rather than 'alter', 'modify' or 'switch'.</p>
         <h3 id="authorising officer">authorising officer</h3>
        <p>Lower case. You can use the initials 'AO' after the first full mention.</p>
        <h3 id="asylum claimant">asylum claimant</h3>
        <p>You can use either 'asylum claimant' or 'asylum applicant' to describe someone who has applied for asylum in the UK. Do not use both in the same product or service.</p>
        <a className="back-to-top" href="#a-z-nav">Back to top</a>

        <h2 className="a-z-header" id="b">B</h2>
        <h3 id="biometric-passport">biometric passport</h3>
        <p>Use 'passport' if the type of passport does not matter. When referring to passports with a chip, use 'biometric passport' instead of 'ePassport'.</p>
        <h3 id="biometrics">biometrics</h3>
        <p>When using ‘biometrics’ or ‘biometric information’ in public-facing services, explain what it means first. For example, ‘you'll be asked to provide your fingerprints and photo (biometric information)’.</p>
        <h3 id="biometric residence permit">biometric residence permit (BRP)</h3>
        <p>Lower case. You can use the initials ‘BRP’ after the first full mention.</p>
        <h3 id="biometric residence card">biometric residence card (BRC)</h3>
        <p>Lower case. You can use the initials ‘BRC’ after the first full mention. Also called a ‘UK residence card’ or ‘EEA biometric residence card’.</p>
        <h3 id="border force">Border Force</h3>
        <p>Capitalised.</p>
        <h3 id="border control">border control</h3>
        <p>Use 'border control' rather than 'passport control' or 'primary control point'.</p>
        <h3 id="british citizen">British citizen</h3>
        <p>British citizen is one of <A href="https://www.gov.uk/types-of-british-nationality">6 different types of British nationality</A>. Do not use 'UK citizen'.</p>
        <h3 id="british nationality">British nationality</h3>
        <p>There are <A href="https://www.gov.uk/types-of-british-nationality">6 different types of British nationality</A>. These are British citizen, British overseas territories citizen, British overseas citizen, British subject, British national (overseas) and British protected person.</p>
        <h3 id="british national (overseas)">British national (overseas)</h3>
        <p>Use 'British national (overseas)' when referring to people, as in 'she is a British national (overseas)'. When referring to the visa, use 'British National (Overseas) visa', which can be abbreviated to 'BNO visa'. For example, 'apply for a British National (Overseas) visa'.</p>
        <h3 id="british overseas territories">British overseas territories</h3>
        <p>Write 'overseas territories' in lower case.</p>
        <h3 id="british overseas territories citizen">British overseas territories citizen</h3>
        <p>Write 'overseas territories citizen' in lower case.</p>
        <a className="back-to-top" href="#a-z-nav">Back to top</a>

        <h2 className="a-z-header" id="c">C</h2>
        <h3 id="capital letters">capital letters</h3>
        <p>See guidance on capitalisation in the <A href="https://www.gov.uk/guidance/style-guide/a-to-z-of-gov-uk-style">GOV.UK style guide</A>.</p>
        <h3 id="casework">casework</h3>
        <p>Not ‘case work’.</p>
        <h3 id="caseworker">caseworker</h3>
        <p>Not ‘case worker’.</p>
        <h3 id="certificate of sponsorship">certificate of sponsorship (CoS)</h3>
        <p>Lower case. You can use the acronym ‘CoS’ after the first full mention.</p>
        <h3 id="check">check</h3>
        <p>Consider using ‘check’ instead of ‘verify’ if you are asking users to check the accuracy of something. For example, ‘check your answers' or ‘check a passport number'</p>
        <h3 id="clandestine">clandestine</h3>
        <p>Do not refer to people as 'a clandestine' or 'clandestine entrant'. Try to be specific, like 'a person hidden in a vehicle, ship or plane'.</p>
        <h3 id="click">click</h3>
        <p>Use 'select' rather than 'click' or 'tap' because not everyone uses a mouse.</p>
        <h3 id="common travel area">Common Travel Area (CTA)</h3>
        <p>Capitalised. You can use the initials ‘CTA’ after the first full mention.</p>
        <h3 id="confirm">confirm</h3>
        <p>Consider using 'confirm' or 'prove' instead of 'validate' if you are asking users to provide additional evidence. For example, 'confirm your identity' or 'prove your status’.</p>
        <h3 id="confirmation of acceptance for studies">Confirmation of Acceptance for Studies (CAS)</h3>
        <p>Capitalised. You can use the initials ‘CAS’ after the first full mention.</p>
        <h3 id="consignee">consignee</h3>
        <p>Consignee is not plain English. Some users confuse 'consignee' with 'consignor'. If you need to use consignee, use it with 'recipient'. For example, recipient (consignee).</p>
        <h3 id="consignor">consignor</h3>
        <p>Consignor is not plain English. Some users confuse 'consignor' with 'consignee'. If you need to use consignor,  use it with 'sender'. For example, sender (consignor).</p>
        <h3 id="contractions">contractions</h3>
        <p>Avoid all contractions, including positive contractions like 'we'll', 'you've' or 'they're', if your users are not fluent in English. Research shows that contractions make content difficult to understand for people with limited fluency. See general guidance on contractions in <A href="https://www.gov.uk/guidance/style-guide/a-to-z-of-gov-uk-style">the GOV.UK style guide</A>.</p>
        <h3 id="correct">correct</h3>
        <p>Use ‘correct’ rather than ‘right’. For example, ‘select the correct settlement route’.</p>
        <h3 id="correspondence">correspondence</h3>
        <p>Correspondence is not plain English. Try to be specific such as ‘postal address’, ‘contact address’ or ‘email address’. For example, ‘is this the family’s postal address?’</p>
        <h3 id="countersignatory">countersignatory</h3>
        <p>'Countersignatory' is not plain English. Instead, try 'the person who can confirm your identity' or 'you must have your application signed by someone else'.</p>
        <h3 id="criminal justice system">criminal justice system</h3>
        <p>Lower case.</p>
        <h3 id="customer">customer</h3>
        <p>Avoid calling the people who use our services ‘customers’. Keep it simple and use ‘you’. If you need to describe the user, try to be specific, like ‘asylum seeker’, ‘applicant’ or ‘claimant’.</p>
        <h3 id="customs">customs</h3>
        <p>Use 'customs' rather than 'secondary control'. For example, 'customs regulations' or 'customs allowances'.</p>
        <h3 id="customs officer">customs officer</h3>
        <p>Use ‘Border Force officer’ rather than 'customs officer' unless you have a specific reason.</p>
        <a className="back-to-top" href="#a-z-nav">Back to top</a>

        <h2 className="a-z-header" id="d">D</h2>
        <h3 id="dbs adult first">DBS adult first</h3>
        <p>Use lower case for 'adult first'.</p>
        <h3 id="dbs adults barred list">DBS adults barred list</h3>
        <p>Use lower case for 'adults barred list'.</p>
        <h3 id="dbs certificate">DBS certificate</h3>
        <p>Use ‘DBS certificate’ rather than 'DBS disclosure'.</p>
        <h3 id="dbs checking service">DBS checking service</h3>
        <p>Use ‘DBS checking service’ rather than 'DBS disclosure service'.</p>
        <h3 id="dbs children’s barred list">DBS children’s barred list</h3>
        <p>Use lower case for ‘children’s barred list’.</p>
        <h3 id="decision maker">decision maker</h3>
        <p>Lower case.</p>
        <h3 id="decision making unit">decision making unit (DMU)</h3>
        <p>Lower case. You can use the initials 'DMU' after the first full mention.</p>
        <h3 id="dependant">dependant</h3>
        <p>Noun. For example, 'a dependant', 'a child dependant' or 'are there any dependants on this application?'.</p>
        <h3 id="dependent">dependent</h3>
        <p>Adjective. For example, ‘I am dependent on the main applicant’ or ‘dependent children are not required to apply at the same time’.</p>
        <h3 id="deportation">deportation</h3>
        <p>Not a synonym for ‘removal’. ‘Deportation’ is the forced removal of someone for the ‘public good’, usually after being convicted of a criminal offence.</p>
        <h3 id="digital status">digital status</h3>
        <p>Avoid using 'digital status' in public-facing services. Instead use 'eVisa' or 'online immigration status'. For example, 'view and prove your online immigration status (eVisa)'.</p>
        <h3 id="disclosure and barring service">Disclosure and Barring Service (DBS)</h3>
        <p>Capitalised. You can use the initials ‘DBS’ after the first full mention.</p>
        <a className="back-to-top" href="#a-z-nav">Back to top</a>

        <h2 className="a-z-header" id="e">E</h2>
        <h3 id="eea biometric residence card">EEA biometric residence card</h3>
        <p>Lower case. Also called a 'UK residence card' or 'biometric residence card (BRC)'.</p>
        <h3 id="egates">eGates</h3>
        <p>When using 'eGates' with the public, explain what it means the first time you use it. For example, 'you will have the option of using an eGate (electronic passport gate)'.</p>
        <h3 id="electronic travel authorisation">electronic travel authorisation (ETA)</h3>
        <p>Lower case. You can use the initials 'ETA' after the first full mention.</p>
        <h3 id="enhanced dbs check">enhanced DBS check</h3>
        <p>Use 'enhanced DBS check' rather than 'enhanced disclosure'.</p>
        <h3 id="epassport">ePassport</h3>
        <p>Use 'passport' if the type of passport does not matter. When referring to passports with a chip, use 'biometric passport' instead of 'ePassport'.</p>
        <h3 id="eu settlement scheme">EU Settlement Scheme (EUSS)</h3>
        <p>Capitalised. You can use the initials 'EUSS' after the first full mention.</p>
        <h3 id="e-visa">eVisa</h3>
        <p>When using 'eVisa' in public-facing services, explain what it means. For example, 'view and prove your online immigration status (eVisa)'.</p>
        <a className="back-to-top" href="#a-z-nav">Back to top</a>

        <h2 className="a-z-header" id="f">F</h2>
        <h3 id="finger scan">finger scan</h3>
        <p>Not a synonym for 'fingerprint'. Fingers are 'scanned' and the results are called 'fingerprints'.</p>
        <a className="back-to-top" href="#a-z-nav">Back to top</a>

        <h2 className="a-z-header" id="g">G</h2>
        <h3 id="gender">gender</h3>
        <p>Find out how to ask users for their gender in <A href="https://design.homeoffice.gov.uk/patterns/ask-sex-or-gender">the Home Office sex and gender pattern</A>.</p>
        <h3 id="general register office">General Register Office (GRO)</h3>
        <p>Capitalised. It is 'register' not 'registry'. You can use the initials 'GRO' after the first full mention.</p>
        <h3 id="gov.uk">GOV.UK</h3>
        <p>All upper case.</p>
        <a className="back-to-top" href="#a-z-nav">Back to top</a>

        <h2 className="a-z-header" id="h">H</h2>
        <h3 id="his majesty’s">His Majesty’s</h3>
        <p>Use ‘HM’ rather than ‘His Majesty’s’ in front of the name of the relevant public body. For example, 'HM Revenue & Customs'.</p>
        <h3 id="hm passport office">HM Passport Office</h3>
        <p>Capitalised. Do not use ‘HMPO’ in public-facing services.</p>
        <h3 id="home office reference number">Home Office reference number</h3>
        <p>Use lower case for ‘reference number’.</p>
        <a className="back-to-top" href="#a-z-nav">Back to top</a>

        <h2 className="a-z-header" id="i">I</h2>
        <h3 id="immigration adviser">immigration adviser</h3>
        <p>An immigration expert regulated by the <A href="https://www.gov.uk/government/organisations/office-of-the-immigration-services-commissioner/about">OISC</A> who advises on issues like visas, citizenship, employment, asylum and deportation. Some are qualified to represent clients at immigration tribunals and court hearings.</p>
        <h3 id="immigration bail">immigration bail</h3>
        <p>Lower case.</p>
        <h3 id="immigration health surcharge">immigration health surcharge (IHS)</h3>
        <p>Lower case. You can use ‘IHS’ after the first full mention.</p>
        <h3 id="immigration officer">immigration officer</h3>
        <p>Use ‘Border Force officer’ rather than ‘immigration officer’. Only use ‘immigration officer’ if you have a specific reason.</p>
        <h3 id="immigration rules">Immigration Rules</h3>
        <p>Capitalised. After first mention, you can refer to ‘the rules’, using lower case.</p>
        <h3 id="inclusive language">inclusive language</h3>
        <p>Read our <A href="https://design.homeoffice.gov.uk/accessibility/inclusive-language">guidance on using inclusive language</A> in the Home Office design system.</p>
        <h3 id="indefinite leave to enter or remain">indefinite leave to enter or remain</h3>
        <p>'Indefinite leave to enter' and 'indefinite leave to remain' are officially called 'settlement'. For example, 'apply for UK settlement'.</p>
        <a className="back-to-top" href="#a-z-nav">Back to top</a>

        <h2 className="a-z-header" id="j">J</h2>
        <a className="back-to-top" href="#a-z-nav">Back to top</a>

        <h2 className="a-z-header" id="k">K</h2>
        <h3 id="king’s speech">King’s Speech</h3>
        <p>Capitalised.</p>
        <a className="back-to-top" href="#a-z-nav">Back to top</a>

        <h2 className="a-z-header" id="l">L</h2>
        <h3 id="leave to enter">leave to enter</h3>
        <p>Use 'permission to enter' instead of 'leave to enter' or 'limited leave to enter', which are no longer in official use. For example, 'apply for permission to enter the UK'. For 'indefinite leave to enter' see <A href="https://design.homeoffice.gov.uk/content-style-guide#settlement">settlement</A>.</p>
        <h3 id="leave to remain">leave to remain</h3>
        <p>Use 'permission to stay' instead of 'leave to remain' or 'limited leave to remain', which are no longer in official use. For example, 'apply for permission to stay in the UK'. For 'indefinite leave to remain' see <A href="https://design.homeoffice.gov.uk/content-style-guide#settlement">settlement</A>.</p>
        <h3 id="letter of authority">letter of authority</h3>
        <p>Lower case.</p>
        <h3 id="life in the uk test">Life in the UK Test</h3>
        <p>Capitalise the ‘L’ and ‘T’. After first mention, you can refer to ‘the test’, using lower case.</p>
        <h3 id="log in">log in</h3>
        <p>Use 'sign in' rather than 'log in' or 'login'. Use 'sign in to' rather than 'sign into'.</p>
        <a className="back-to-top" href="#a-z-nav">Back to top</a>

        <h2 className="a-z-header" id="m">M</h2>
        <h3 id="migrant">migrant</h3>
        <p>Avoid using 'migrants'. Try to be specific, such as ‘applicant’, ‘claimant’, ‘employee’ or ‘worker’. If you cannot be specific, use ‘people’.</p>
        <h3 id="ministers">ministers</h3>
        <p>See guidance on using titles in the <A href="https://www.gov.uk/guidance/style-guide/a-to-z-of-gov-uk-style">GOV.UK style guide.</A></p>
        <a className="back-to-top" href="#a-z-nav">Back to top</a>

        <h2 className="a-z-header" id="n">N</h2>
        <h3 id="naturalisation">naturalisation</h3>
        <p>Naturalisation is a legal process someone goes through to become a <A href="https://design.homeoffice.gov.uk/content-style-guide#british%20citizen">British citizen</A>. For example, 'apply for a certificate of naturalisation'.</p>
        <h3 id="notification">notification</h3>
        <p>Avoid using 'notification' or 'notify'. Try to be specific about contact, such as, 'we will send you an email' or 'how do you want to be contacted?'.</p>
        <a className="back-to-top" href="#a-z-nav">Back to top</a>

        <h2 className="a-z-header" id="o">O</h2>
        <h3 id="online status">online status</h3>
        <p>Avoid using 'online status' or 'digital status' when referring to someone’s immigration status. Use 'online immigration status' instead.</p>
        <a className="back-to-top" href="#a-z-nav">Back to top</a>

        <h2 className="a-z-header" id="p">P</h2>
        <h3 id="passport control">passport control</h3>
        <p>Use 'passport control' or 'border control' with the general public rather than 'primary control point (PCP)'.</p>
        <h3 id="people">people</h3>
        <p>Use 'people' as a plural of person, rather than 'persons' or 'individuals'.</p>
        <h3 id="permission to enter">permission to enter</h3>
        <p>Use 'permission to enter' instead of 'leave to enter' or 'limited leave to enter', which are no longer in official use. For example, 'apply for permission to enter the UK'. For 'indefinite leave to enter' see <A href="https://design.homeoffice.gov.uk/content-style-guide#settlement">settlement</A>.</p>
        <h3 id="permission to stay">permission to stay</h3>
        <p>Use 'permission to stay' instead of 'leave to remain' or 'limited leave to remain', which are no longer in official use. For example, 'apply for permission to stay in the UK'. For 'indefinite leave to remain' see <A href="https://design.homeoffice.gov.uk/content-style-guide#settlement">settlement</A>.</p>
        <h3 id="persons">persons</h3>
        <p>Use ‘people’ rather than ‘persons’.</p>
        <h3 id="please">please</h3>
        <p>Use 'please' sparingly. See guidance in <A href="https://www.gov.uk/service-manual/design/writing-for-user-interfaces">Writing for user interfaces</A> on GOV.UK.</p>
        <h3 id="points-based system">points-based system</h3>
        <p>Lower case and hyphenate 'points-based'.</p>
        <h3 id="police national computer">Police National Computer (PNC)</h3>
        <p>Upper case. You can use 'PNC' after the first full mention.</p>
        <h3 id="postal">postal</h3>
        <p>Use 'postal address' rather than 'correspondence' if you mean letters. For example, 'is this the family's postal address?'</p>
        <h3 id="primary control point">primary control point (PCP)</h3>
        <p>A term widely used by Border Force to describe the immigration control area where passengers present their travel documents. Do not use 'primary control point' with the general public. Use 'border control' or 'passport control' instead.</p>
        <h3 id="prove">prove</h3>
        <p>Consider using 'confirm' or 'prove' instead of 'validate' if you are asking users to provide additional evidence. For example, 'confirm your identity' or 'prove your status'.</p>
        <h3 id="purdah">purdah</h3>
        <p>Use 'pre-election period' rather than 'purdah'.</p>
        <a className="back-to-top" href="#a-z-nav">Back to top</a>

        <h2 className="a-z-header" id="q">Q</h2>
        <h3 id="quotes and speech marks">quotes and speech marks</h3>
        <p>See guidance on quotes and speech marks in the <A href="https://www.gov.uk/guidance/style-guide/a-to-z-of-gov-uk-style">GOV.UK style guide</A>.</p>
        <a className="back-to-top" href="#a-z-nav">Back to top</a>

        <h2 className="a-z-header" id="r">R</h2>
        <h3 id="refugee">refugee</h3>
        <p>Only use refugee to describe an asylum claimant who has been granted refugee status.</p>
        <h3 id="rank">rank (police and armed forces)</h3>
        <p>Capitalise the rank before the name, as in 'Detective Inspector Joan Smith'. Use lower case when it follows the name, as in 'Joan Smith, a detective inspector'.</p>
        <h3 id="register">register</h3>
        <p>Use 'create' instead of 'register' or 'set up' when you want people to create an account. 'Create an account' tested well in user research and is used by other government departments.</p>
        <h3 id="right">right</h3>
        <p>Use ‘correct’ rather than ‘right’. For example, ‘Select the correct settlement route’.</p>
        <a className="back-to-top" href="#a-z-nav">Back to top</a>

        <h2 className="a-z-header" id="s">S</h2>
        <h3 id="secondary control">secondary control</h3>
        <p>Use ‘customs’ rather than 'secondary control'. For example, 'customs regulations' or 'customs allowances'.</p>
        <h3 id="select">select</h3>
        <p>Use ‘select’ rather than ‘click’ or ‘tap’ because not everyone uses a mouse.</p>
        <h3 id="senior civil service">senior civil service (SCS)</h3>
        <p>Lower case. You can use ‘SCS’ after the first full mention.</p>
        <h3 id="settlement">settlement</h3>
        <p>'Indefinite leave to remain' and 'indefinite leave to enter' are officially called 'settlement'. For example, 'apply for UK settlement'.</p>
        <h3 id="set up">set up</h3>
        <p>Use 'create' instead of 'register' or 'set up' when you want people to create an account. 'Create an account' tested well in user research and is used by other government departments.</p>
        <h3 id="sex">sex</h3>
        <p>Find out how to ask users for their sex in <A href="https://design.homeoffice.gov.uk/patterns/ask-sex-or-gender">the Home Office sex and gender pattern</A>.</p>
        <h3 id="sign in">sign in</h3>
        <p>Use 'sign in’ rather than 'log in' or 'login'. Use 'sign in to' rather than 'sign into'.</p>
        <h3 id="sponsor">sponsor</h3>
        <p>Lower case. A company or person sponsoring an individual to work in the UK and supporting their visa application.</p>
        <h3 id="sponsorship reference number">sponsorship reference number</h3>
        <p>Lower case.</p>
        <h3 id="sorry">sorry</h3>
        <p>Avoid using 'sorry'. See guidance in <A href="https://www.gov.uk/service-manual/design/writing-for-user-interfaces">Writing for user interfaces</A> on GOV.UK.</p>
        <h3 id="sovereign base areas">Sovereign Base Areas</h3>
        <p>Capitalised. You can use 'SBA' after the first full mention.</p>
        <a className="back-to-top" href="#a-z-nav">Back to top</a>

        <h2 className="a-z-header" id="t">T</h2>
        <h3 id="thank you">thank you</h3>
        <p>Use 'thank you' sparingly. See guidance in <A href="https://www.gov.uk/service-manual/design/writing-for-user-interfaces">Writing for user interfaces</A> on GOV.UK.</p>
        <a className="back-to-top" href="#a-z-nav">Back to top</a>

        <h2 className="a-z-header" id="u">U</h2>
        <h3 id="uk residence card">UK residence card</h3>
        <p>Lower case. Also called a 'biometric residence card (BRC)' or 'EEA biometric residence card'.</p>
        <h3 id="uk visa and citizenship application services">UK Visa and Citizenship Application Services (UKVCAS)</h3>
        <p>UKVCAS service points are located in the UK, whereas visa application centres are outside the UK. You can use 'UKVCAS' after the first full mention.</p>
        <h3 id="uk visas and immigration">UK Visas and Immigration (UKVI)</h3>
        <p>Capitalised. Use 'and' not '&'. You can use the initials 'UKVI' after the first full mention.</p>
        <h3 id="unique application number">unique application number (UAN)</h3>
        <p>Lower case. You can use the initials 'UAN' after the first full mention.</p>
        <h3 id="user-centred">user centred</h3>
        <p>Hyphenate when using as an adjective, as in 'user-centred design'. Do not hyphenate when using as a noun, as in 'teams need to be user centred'.</p>
        <a className="back-to-top" href="#a-z-nav">Back to top</a>

        <h2 className="a-z-header" id="v">V</h2>
        <h3 id="validate">validate</h3>
        <p>Consider using 'confirm' or 'prove' instead of 'validate' if you are asking users to provide additional evidence. For example, 'confirm your identity' or 'prove your status'.</p>
        <h3 id="verify">verify</h3>
        <p>Consider using 'check' instead of 'verify' if you are asking users to check the accuracy of something. For example, 'check your answers' or 'check a passport number'.</p>
        <h3 id="visa">visa</h3>
        <p>Use 'visa' rather than terms like 'route'. For example, use 'graduate visa' rather than 'graduate route'.</p>
        <h3 id="visa application centre">visa application centre (VAC)</h3>
        <p>Visa application centres (VAC) are located outside the UK whereas UKVCAS service points are in the UK. Use upper case when referring to UK VACs, as in 'find a UK Visa Application Centre'. Do not use 'visa section', 'visa processing post' or 'visa issuing office'.</p>
        <a className="back-to-top" href="#a-z-nav">Back to top</a>

        <h2 className="a-z-header" id="w">W</h2>
        <h3 id="watchlist">watchlist</h3>
        <p>Lower case and one word.</p>
        <a className="back-to-top" href="#a-z-nav">Back to top</a>

        <h2 className="a-z-header" id="x">X</h2>
        <a className="back-to-top" href="#a-z-nav">Back to top</a>

        <h2 className="a-z-header" id="y">Y</h2>
        <a className="back-to-top" href="#a-z-nav">Back to top</a>

        <h2 className="a-z-header" id="z">Z</h2>
        <a className="back-to-top" href="#a-z-nav">Back to top</a>

        <h2>Help improve this guide</h2>
        <p>To contribute, send your request to <A href="mailto:ucdops@homeoffice.gov.uk">ucdops@homeoffice.gov.uk,</A> or add it to the <A href="https://github.com/UKHomeOffice/design-system/discussions/470">GitHub discussion</A>.</p>
      </div>
    </div>
  </Fragment>
);

export default Page;

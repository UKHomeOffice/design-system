import { FC, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A } from '@not-govuk/components';
import { menu } from '../accessibility'

export const title = 'Leader’s guide to accessibility';
const description = 'Accessibility guidance for leaders';
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
      {menu}
    </div>
    <div className="govuk-grid-column-three-quarters">
      <h1>
        <span className="caption">Accessibility</span>
        Leader’s guide to accessibility
      </h1>
      <h2>Table of Contents</h2>
      <h3>Introduction</h3>
      <ul className="plain">
        <li><A href="#introduction">Introduction</A></li>
        <li><A href="#what-accessibility-means-for-you">What accessibility means for you</A></li>
        <li><A href="#how-to-use-the-guide">How to use the guide</A></li>
      </ul>
      <h3>Accessibility as a team sport</h3>
      <ul className="plain">
        <li><A href="#accessibility-as-a-team-sport">Accessibility as a team sport</A></li>
        <li><A href="#roles-and-responsibilities-delivery-teams">Roles and responsibilities: delivery teams</A></li>
        <li><A href="#roles-and-responsibilities-beyond-your-team">Roles and responsibilities beyond your team</A></li>
        <li><A href="#your-role-as-a-leader">Your role as a leader</A></li>
        <li><A href="#educating-yourself-and-others">Educating yourself and others</A></li>
      </ul>
      <h3>Accessibility and your product</h3>
      <ul className="plain">
        <li><A href="#accessibility-and-your-product">Accessibility and your product</A></li>
        <li><A href="#the-business-case-for-accessibility">The business case for accessibility</A></li>
        <li><A href="#the-risks-of-non-compliance">The risks of non-compliance</A></li>
        <li><A href="#user-research">User research</A></li>
        <li><A href="#accessibility-testing">Accessibility testing</A></li>
        <li><A href="#accessibility-audit-and-accessibility-statement">Accessibility audit and accessibility statement</A></li>
        <li><A href="#product-lifecycle">Product lifecycle</A></li>
      </ul>
      <h3>Accessible procurement</h3>
      <ul className="plain">
        <li><A href="#accessible-procurement">Accessible procurement</A></li>
        <li><A href="#ask-the-right-questions">Ask the right questions</A></li>
        <li><A href="#how-do-you-procure-accessible-services">How do you procure accessible services?</A></li>
        <li><A href="#tips-and-resources">Tips and resources</A></li>
      </ul>
      <h3>Glossary</h3>
      <ul className="plain">
        <li><A href="#glossary">Glossary</A></li>
      </ul>
      <h2 id="introduction">Introduction</h2>
        <div className="govuk-inset-text">
          <p>“The single best thing a leader can do is ask ‘Is it accessible?’ because everything flows from that, for both themselves and their team.”</p>
          <p><strong>James Buller, Senior Accessibility and Inclusion Consultant at Home Office Digital, Data and Technology</strong></p>
        </div>
        <p>This guide is for anyone with responsibility for a digital team, product or service. It will help you work out what role each team member plays in making your service accessible, and what tools and training you and others may need, to help you build accessibility into your product from the start.</p>
        <p>Maybe you’re not sure what we mean by accessibility. Maybe you understand the principles, but you don’t know how to embed them in your team and your product. Maybe you know the basics, but you want to know more.</p>
        <p>This guide covers the basic information you need to know, and links to further resources if you want to increase your knowledge.</p>

      <h2 id="what-accessibility-means-for-you">What accessibility means for you</h2>
        <p>So that everyone can access and use websites, web pages and online services provided or used by your department:</p>
        <ol>
          <li>Use clear, simple design and content to make it as easy as possible for users to do what they need to.</li>
          <li>Make sure the service works with assistive technology. For example, some users might increase the text size so they can read it more easily, use the keyboard instead of a mouse, or use software that reads a web page out loud.</li>
        </ol>

      <h2 id="how-to-use-the-guide">How to use the guide</h2>
      <p>The guide covers the following areas:</p>
      <ul>
        <li><A href="#accessibility-as-a-team-sport">Accessibility as a team sport</A>: The roles and responsibilities within a typical delivery team, and how leaders can help everyone understand what they need to do and get the training they need (accessibility from the top down).</li>
        <li><A href="#accessibility-and-your-product">Accessibility and your product</A>: Where accessibility sits in the product lifecycle, the risks related to accessibility, the business case for accessibility, and the role of the accessibility statement.</li>
        <li><A href="#accessible-procurement">Accessible procurement</A>: The responsibilities of third party suppliers, and how to make sure they’re getting it right.</li>
        <li><A href="#tips-and-resources">Tips and resources</A>: A glossary, links to further reading, courses and contacts, and some small changes you can implement right away to make a measurable difference!</li>
      </ul>

      <h2 id="accessibility-as-a-team-sport">Accessibility as a team sport</h2>
      <p>Accessibility is not something one person, team or specialism should deliver on their own. Delivering accessible services for staff and the public takes effort and a variety of skills.</p>
      <p>Every person in the department has a role to play to ensure that everything we do is accessible whether it’s a policy document, public report, training session, digital service, caseworking system or anything else we deliver.</p>
      <p>In this section, we’ll mainly focus on the roles within a delivery team and the role you as a leader have in making sure your teams are delivering in an accessible way.</p>
      <p>We’ll also touch on some general principles that everyone can adopt to ensure the work they deliver is more accessible.</p>

      <h2 id="roles-and-responsibilities-delivery-teams">Roles and responsibilities: delivery teams</h2>
      <p>These role descriptions are based on the Government Digital and Data Profession Capability Framework. Use them as a guide to help you assign responsibilities. You may not have, or need, all these roles in your own team.</p>
      <h3>Product and delivery roles</h3>
      <h4>Product manager</h4>
      <ul>
        <li>Overall responsibility for the accessibility of their product or service.</li>
        <li>Makes sure everyone else on the team knows the role they play in accessibility.</li>
        <li>Prioritises accessibility – sets a culture of accessibility being important.</li>
        <li>Ensures stakeholders understand why accessibility is being prioritised.</li>
        <li>Understands the risks relating to accessibility of their product or service.</li>
      </ul>
      <h4>Delivery manager</h4>
      <ul>
        <li>Allocates time and budget for iterative accessibility testing, research and fixes in delivery plans.</li>
        <li>Includes accessibility standards in supplier contracts.</li>
        <li>Makes sure:
          <ul>
            <li>accessibility is baked into the definition of done and acceptance criteria for features</li>
            <li>the team understands that accessibility is part of the quality of a delivered service</li>
            <li>any accessibility trade-offs are conscious, documented and reasonable.</li>
          </ul>
        </li>
      </ul>
      <h4>Business analyst</h4>
      <ul>
        <li>Includes accessibility standard and regulations in delivery requirements.</li>
        <li>Includes accessibility testing for all user interface features and content in the definition of done.</li>
      </ul>

      <h3>Software development roles</h3>
      <h4>Developer / Engineer</h4>
      <ul>
        <li>Uses HTML and well documented, accessible components where possible.</li>
        <li>Avoids using ARIA where possible and follows the key principles of ARIA if needed.</li>
        <li>Understands that code libraries, design systems and frameworks are not automatically accessible. Follows accessibility guidance for using them.</li>
        <li>Builds automated and manual accessibility into continuous testing.</li>
      </ul>
      <h4>Tester</h4>
      <ul>
        <li>Builds automated and manual accessibility into continuous testing at every stage of lifecycle.</li>
        <li>Collaborates with the rest of the team to prioritise defects according to impact on users, not output from automated tools or predefined levels based on WCAG success criteria.</li>
        <li>Completes automated, manual and assistive technology compatibility testing.</li>
        <li>Carries out User Acceptance Testing (UAT) with individuals that use assistive technology</li>
        <li>Makes recommendations for further levels of testing or assurance that may be required depending on the current levels of quality, confidence or product risk.</li>
      </ul>

      <h3>User centred design roles</h3>
      <h4>Service designer</h4>
      <ul>
        <li>Ensures group collaboration includes a diverse range of participants.</li>
        <li>Designs services for the widest user need.</li>
        <li>Considers accessibility and digital inclusion when planning end to end service design approaches.</li>
      </ul>
      <h4>User researcher</h4>
      <ul>
        <li>Includes a representative sample of disabled people in research (at least 1 in every 5 users).</li>
        <li>Carries out full rounds of research with disabled people where appropriate, for example highly complex services and services likely to have a high number of disabled users.</li>
      </ul>
      <h4>Interaction designer</h4>
      <ul>
        <li>Designs for the widest user need.</li>
        <li>Reviews designs for accessibility and resolves issues.</li>
        <li>Understands the limitations of design systems.</li>
        <li>Follows accessibility guidance on individual components and accessible design.</li>
        <li>Documents accessibility design decisions so others understand why and how to implement them.</li>
      </ul>
      <h4>Content designer</h4>
      <ul>
        <li>Designs for the widest user need.</li>
        <li>Writes in an accessible and inclusive way using plain language.</li>
        <li>Reviews content for accessibility and resolves issues.</li>
        <li>Makes sure all content meets accessibility requirements, including video, audio and non-HTML documents.</li>
        <li>Avoids using PDFs if possible, and makes sure they are accessible if used.</li>
      </ul>

      <h2 id="roles-and-responsibilities-beyond-your-team">Roles and responsibilities beyond your team</h2>
      <p>These people are often ‘enablers’ for accessible service delivery.</p>
      <h3>Design authority</h3>
        <ul>
          <li>Makes sure technology systems, services and websites submitted for approval are evaluated for accessibility.</li>
        </ul>
      <h3>Spend control and service assessment team</h3>
        <ul>
          <li>Considers accessibility requirements in making spend control decisions.</li>
          <li>Include appropriate challenge relating to accessibility in service assessment.</li>
          <li>Considers evidence of work relating to accessibility when making decisions about service assessments.</li>
        </ul>
      <h3>IT team</h3>
        <ul>
          <li>Makes sure staff have access to appropriate assistive technology.</li>
          <li>Provides training and support for assistive technology.</li>
          <li>Makes sure IT support agents understand assistive technology and that support routes are accessible.</li>
        </ul>
      <h3>DDaT Profession lead (for example Head of User Research)</h3>
        <ul>
          <li>Develops and embeds inclusive, high quality professional standards for accessibility within their specialism.</li>
          <li>Develops accessibility skills, practices and capabilities of their communities.</li>
          <li>Develops appropriate accessibility quality controls for their specialism.</li>
        </ul>
      <h3>Accessibility team</h3>
        <ul>
          <li>Sets, owns and maintains accessibility standards, guidance and governance.</li>
          <li>Provides assurance of accessibility standards across portfolios, functions and professions.</li>
          <li>Supports the adoption of accessibility standards, guidance, governance and toolset.</li>
          <li>Works to ensure a coordinated approach to accessibility.</li>
          <li>Defines accessibility training.</li>
          <li>Supports other professions to develop resources for their communities.</li>
        </ul>
        <h3>Chief Technology Officer (CTO)</h3>
          <ul>
            <li>Makes sure technology systems, services and websites meet accessibility standards and legal requirements</li>
          </ul>
        <h2 id="your-role-as-a-leader">Your role as a leader</h2>
        <p>Leaders have a key role in embedding accessibility in their team’s people, processes and technology. You set an example from the top and help to drive understanding of accessibility principles and why they’re important.</p>
        <p>To achieve this, you’ll need to know:</p>
        <ul>
          <li><strong>what</strong> accessibility is</li>
          <li><strong>why</strong> products and services must be accessible, and</li>
          <li><strong>how</strong> to make sure that they are accessible and will continue to be</li>
        </ul>
        <p>Your responsibilities as a leader are to:</p>
        <ul>
          <li>champion accessibility, raise awareness and sell the importance of making outward facing and internal products and services accessible</li>
          <li>ensure that accessibility is considered in the decision-making process</li>
          <li>champion upwards, so accessibility is considered and included in broader discussions outside your department</li>
          <li>actively participate in accessibility related meetings, sharing knowledge and experience</li>
          <li>make sure appropriate accessibility roles are created, maintained and recruited</li>
          <li>measure accessibility maturity within your organisation, and see that improvement plans are in place and delivered against</li>
          <li>look outwards to partners across government, commercial partners and academia for best practice and sharing opportunities to improve accessibility across other areas of your department and broader government</li>
        </ul>
        <h3 id="educating-yourself-and-others">Educating yourself and others</h3>
        <p>You do not need an in-depth knowledge of accessibility. You have experts in your organisation who can help with the technical work.</p>
        <p>However, it is important that you have a basic understanding of accessibility principles, including the <A href="https://www.legislation.gov.uk/uksi/2018/852/contents/made">Public Sector Bodies Accessibility Regulations (PSBAR)</A> and the <A href="https://www.w3.org/TR/WCAG22/">Web Content Accessibility Guidelines (WCAG)</A>, and how they should be applied, so you can guide and support your team.</p>
        <p>The following resources provide quick and simple guidance on the basics.</p>
        <h4>Short:</h4>
        <ul>
          <li><A href="https://www.w3.org/WAI/videos/standards-and-benefits/">Video introduction to Web Accessibility and W3C Standards (W3C, 4 minutes)</A></li>
          <li><A href="https://gcs.civilservice.gov.uk/webinars/digital-accessibility-best-practice-essentials-2/">Digital accessibility: best practice essentials (Government Communication Service, 17 minutes)</A></li>
        </ul>
        <h4>Longer:</h4>
        <ul>
          <li><A href="https://gcs.civilservice.gov.uk/webinars/digital-accessibility-for-government-communicators/">Digital accessibility for government communicators (Government Communication Service, 27 minutes)</A></li>
          <li><A href="https://gcs.civilservice.gov.uk/webinars/accessibility-essentials-for-government-communicators/">Accessibility essentials for government communicators (Government Communication Service, 56 minutes)</A></li>
        </ul>
        <h4>In-depth:</h4>
        <p><A href="https://www.edx.org/course/web-accessibility-introduction">Web Accessibility Introduction (edX)</A> is a strong foundation in digital accessibility to make your website and apps work well for people with disabilities and meet international standards. (4 weeks, 4 to 5 hours a week, self-paced)</p>
        <h2 id="accessibility-and-your-product">Accessibility and your product</h2>
        <p>Your product must be accessible to comply with <A href="https://www.gov.uk/service-manual/service-standard/point-5-make-sure-everyone-can-use-the-service">point 5 ot the government Service Standard</A>: Make sure everyone can use the service.</p>
        <h3 id="the-business-case-for-accessibility">The business case for accessibility</h3>
        <p>Initial investment in making services, products and documents accessible can save time and money later in development and production.</p>
        <p>The easier your products are for everyone to use, the less time you will spend answering enquiries and providing alternative formats. Using accessible formats and language can reduce the need for helplines and call centres.</p>
        <p>Internal services should be accessible, as well as those used by the public. Many of our colleagues and employees have access needs, including visual and hearing impairments, mobility issues and learning difficulties.</p>
        <p>It is a leader’s responsibility to make sure everyone can use the systems they need to do their job and communicate with colleagues. Accessibility should be an important part of our inclusive working culture.</p>
        <p>If you think you don’t currently have any employees with accessibility needs:</p>
        <ul>
          <li>Are you sure you don’t? Not all disabilities are visible.</li>
          <li>Why don’t you? Are the systems you use a barrier because they have accessibility issues?</li>
          <li>What if you do in the future?</li>
        </ul>
        <h3 id="the-risks-of-non-compliance">The risks of non-compliance</h3>
        <p>There are a number of reasons to include accessibility issues in your risk register.</p>
        <h4>Legal consequences</h4>
        <p>Most people are aware that there are legal requirements around accessibility, though not necessarily what they are. This is sometimes used as the ultimate threat to force compliance.</p>
        <p>The relevant laws are:</p>
        <h4>The Public Sector Bodies (Websites and Mobile Applications) (No. 2) Accessibility Regulations 2018</h4> 
        <p>The Government Digital Service (GDS) is responsible for monitoring public sector website compliance. It has the power to request information and demand access to any public sector organisation’s web content – both intranet and public-facing materials. If a public sector body fails to publish an accessibility statement on their website – or one that is not accurate – the Central Digital and Data Office (CDDO) will publish the organisation’s name. Enforcement falls under the Equality and Human Rights Commission (except in Northern Ireland).</p>
        <h4>Equality Act 2010</h4>
        <p>Legally protects people from discrimination in the workplace and in wider society.</p>
        <p>You might find it useful to refer to the GOV.UK guidance <A href="https://www.gov.uk/guidance/accessibility-requirements-for-public-sector-websites-and-apps">Understanding accessibility requirements for public sector bodies</A>:</p>
        <p>Your website or mobile app will meet legal requirements if you:</p>
        <ul>
          <li>meet the <A href="https://www.w3.org/TR/WCAG22/">international WCAG 2.2 AA accessibility standard</A></li>
          <li>publish an accessibility statement that explains how accessible your website or mobile app is</li>
        </ul>
        <h4>Financial, time and resource costs</h4>
        <p>Bolting on rather than baking in accessibility can mean extra development work is needed to make the service accessible and compliant, costing more money and occupying more developer time. This can mean your project misses deadlines and goes over budget.</p>
        <p>If a service is not accessible to all users, there will be more need for call centre staff, and more time spent assisting users by phone or online.</p>
        <h4>Reputational damage</h4>
        <p>Complaints from users who cannot use the product or find it difficult to use, especially if voiced online or picked up by the media, can damage team morale as well as the reputation of your team, your department and the government.</p>
        <p>Loss of your users’ trust can be hard to fix and may take a long time.</p>
        <h3 id="user-research">User research</h3>
        <p>User research is an important part of developing your product. At least 1 in 5 user research participants should be someone with an access need across a representative range of disabilities.</p>
        <p>Testing with users will give you and your team more insight into how accessible the product is than an audit alone. An accessibility audit checks that the product meets a set standard, but it might not reflect the real world user experience.</p>
        <p>If your team includes user centred design specialists, they will carry out user research. If not, consider contacting a third party agency for assistance.</p>
        <p><A href="https://www.gov.uk/government/publications/understanding-disabilities-and-impairments-user-profiles">Read more about users with access needs</A>.</p>
        <h3 id="accessibility-testing">Accessibility testing</h3>
        <p>Testing for accessibility at each stage of development makes it easier to solve problems than if you leave it till last.</p>
        <p>Remember, accessibility is a team sport and different roles will perform different tests. Developers check their code is accessible. Content designers check that wording is clear and concise.</p>
        <p>Your department’s accessibility and inclusion team, if you have one, can help you with testing, or recommend external companies to test your product, depending on your requirements.</p>
        <p>It is important to understand the difference between a WCAG audit and an accessibility test. Accessibility testing primarily involves manual assessments by real users. It highlights issues that might not be obvious by automated tools alone.</p>
        <p>On the other hand, an accessibility audit systemically examines whether a site or application adheres to the WCAG standard. Audits are normally a combination of automated tools and expert evaluations. They often provide a structured detailed assessment so to meet the legal requirements an audit is required.</p>
        <h3 id="accessibility-audit-and-accessibility-statement">Accessibility audit and accessibility statement</h3>
        <p>Before a service is made publicly available, you’ll need:</p>
        <ul>
          <li>An accessibility audit</li>
          <li>An accessibility statement</li>
        </ul>
        <p>An internal or external tester carries out the audit. They will check that the service meets accessibility standards, and list areas where it fails. They may also make recommendations for fixes and improvements.</p>
        <p><strong>High priority issues</strong> make a service unusable for some people. The product cannot go live until these are fixed.</p>
        <p><strong>Medium and low priority issues</strong> make a service difficult to use for some people. Fix before launch if possible, or as soon as possible afterwards.</p>
        <p>Allow time after the audit and before the product launches to work on accessibility issues and write the accessibility statement.</p>
        <p>The accessibility statement should list:</p>
        <ul>
          <li>any issues that have not been fixed</li>
          <li>how users can work around them</li>
          <li>how you plan to fix them</li>
          <li>when they will be fixed</li>
        </ul>
        <p><A href="https://www.gov.uk/service-manual/helping-people-to-use-your-service/getting-an-accessibility-audit">Read more about accessibility audits</A>, including how to book one.</p>
        <p><A href="https://www.gov.uk/guidance/make-your-website-or-app-accessible-and-publish-an-accessibility-statement#publish-your-accessibility-statement">Read more about accessibility statements</A>. This includes a sample statement to use as a template.</p>
        <h3 id="product-lifecycle">Product lifecycle</h3>
        <p>It’s important to build in accessibility from the start of a project, rather than add it in at the end. This approach will save time and money in the longer term.</p>
        <p>If you are working with a legacy system, it may not be possible to make it accessible from the start of the project. Run an accessibility audit, list any issues in order of priority and include fixes in the improvements you are making.</p>
        <p><strong>Bake in, not bolt on.</strong></p>
        <p>Here are the accessibility actions you need at each stage of design and development. If you work in an agile team, you’ll recognise these project phases, but anyone can use this guide. </p>
        <p>See: <A href="https://www.gov.uk/service-manual/agile-delivery">Agile delivery - Service Manual</A> for more information about project phases.</p>
        <h4>Discovery</h4>
        <p>Understanding the problem you’re trying to solve, and the people who will use your product.</p>
        <ul>
          <li>Include users with accessibility needs in your user research.</li>
          <li>Include the time and resources to make the service accessible in development plans.</li>
        </ul>
        <h4>Alpha</h4>
        <p>Testing and prototyping solutions to the problem.</p>
        <ul>
          <li>Show that you understand accessibility principles.</li>
          <li>Explore ways of meeting access needs</li>
          <li>Include access needs in personas</li>
          <li>Design accessibility into policies, process and interfaces</li>
          <li>Find out what works and what doesn't</li>
          <li>Continue user research, including participants with a range of access needs</li>
        </ul>
        <h4>Beta</h4>
        <p>Building your product and releasing it while you continue to make improvements. A private beta is only open to a limited number of users. A public beta is open to anyone who needs to use the service.</p>
        <ul>
          <li>Design according to <A href="https://www.gov.uk/service-manual/helping-people-to-use-your-service/understanding-wcag">accessibility principles</A>.</li>
          <li><A href="https://www.gov.uk/service-manual/helping-people-to-use-your-service/testing-for-accessibility">Test for accessibility</A> regularly.</li>
          <li>Act on any user feedback about accessibility.</li>
          <li>Prepare an <A href="https://www.gov.uk/guidance/model-accessibility-statement">accessibility statement</A> to go live at launch.</li>
          <li>Carry out an accessibility audit, and resolve any issues, before you move from private to public beta. If there are significant changes, you may need to audit again.</li>
          <li>Continue user research, including participants with a range of access needs.</li>
          <li>Make sure there is additional support and an alternative route available for users who are unable to use the main service.</li>
        </ul>
        <h4>Live</h4>
        <p>Releasing your product to everyone and continuing to support and improve it.</p>
        <ul>
          <li>Invite and act on any user feedback about accessibility.</li>
          <li>Mature provision of adjustments and alternatives for people who cannot access the main service</li>
          <li>Test for accessibility whenever there is a new release or change, and at least once a year.</li>
          <li>Update the accessibility statement when you fix an outstanding issue or discover a new one, and at least once a year.</li>
        </ul>
        <h4>Retirement</h4>
        <p>Closing your product down because it is no longer needed.</p>
        <ul>
          <li>Make sure all users are aware the service is closing, including people who access it by other routes.</li>
          <li>If a new service is replacing yours, make sure it is accessible and all users will be supported to use it.</li>
        </ul>
        <h2 id="accessible-procurement">Accessible procurement</h2>
        <p>Your accessibility responsibilities apply to products sourced from external suppliers too. You are responsible for making sure that suppliers, third parties and subcontractors comply with equality legislation when delivering contracts.</p>
        <p>The exception is content that is not</p>
        <ul>
          <li>funded</li>
          <li>developed</li>
          <li>controlled</li>
        </ul>
        <p>by your organisation, for example an external website that you link to.</p>
        <h3 id="ask-the-right-questions">Ask the right questions</h3>
        <p>Make sure your product meets your accessibility obligations by asking:</p>
        <h4>Do we have a statutory requirement or other mandatory requirement to use this product?</h4>
        <p>If you have to use that product for reasons outside of your control and there are no alternatives, it may not be your responsibility to resolve, or resolving it may be considered a <A href="#glossary">disproportionate burden</A>.</p>
        <h4>Are there alternatives?</h4>
        <p>Can you justify choosing a less accessible product if there are more accessible alternatives?</p>
        <h4>Are we using this on our own website or linking to it on another site?</h4>
        <p>Have you decided to place the content on a platform you control, or are you directing to another platform you do not control?</p>
        <h4>Is this a bespoke product?</h4>
        <p>If you are ordering a custom or non standard product, include accessibility in your requirements.</p>
        <h3 id="how-do-you-procure-accessible-services">How do you procure accessible services?</h3>
        <p>Get your procurement team on board from the beginning.</p>
        <p>Make accessibility a mandatory requirement.</p>
        <p>Make sure your tender and contract documents include meeting the accessibility standard as a requirement.</p>
        <p>Engage with accessibility specialists in your department to get contract requirements correct and ask them to sit in on tender panels before entering into new contracts.</p>
        <p>Create an accessibility policy. Ask suppliers to sign up to the policy to confirm that they can meet the requirements on the legislation. Do not accept exemptions or limitations.</p>
        <h4>Your accessibility policy</h4>
        <ol>
          <li>Make sure your policy asks:</li>
            <ul>
              <li>Does the product meet the accessibility requirements?</li>
              <li>Do they have a process for monitoring the level of accessibility of their product during the development lifecycle and post-development?</li>
              <li>Do those working on the product know how to make accessible systems?</li>
              <li>Can they provide evidence of how accessibility compliance and testing has been embedded?</li>
            </ul>
          <li>Ask for evidence of accessibility, for example:</li>
            <ul>
              <li>Accessibility Conformance Report, also known as VPAT (Voluntary Product Accessibility Template), showing:</li>
              <ul>
                <li>workarounds</li>
                <li>how non-compliant elements will be made compliant</li>
                <li>how any customisation of the system might impact on accessibility - for example, if the product includes a Content Management System (CMS) does this allow for accessible content authoring</li>
              </ul>
              <li>An accessibility statement aligned to the requirements of the Public Sector Bodies Accessibility Regulations that includes information about non-compliant elements, workaround and plans for the future.</li>
              <li>Testing documentation (sometimes called an audit) from an internal or external accessibility specialist aligned to an international standard <A href="https://www.etsi.org/deliver/etsi_en/301500_301599/301549/03.02.01_60/en_301549v030201p.pdf">EN 301 549</A>, or ideally the <A href="https://www.w3.org/TR/WCAG22/">Web Content Accessibility Guidelines 2.2</A>.</li>
              <li>Demonstrated operability with the <A href="https://www.gov.uk/service-manual/technology/testing-with-assistive-technologies">gov.uk list of assistive technologies</A>.</li>
              <li>Results of testing and/or research with people who have access needs.</li>
              <li><strong>Do not rely on a VPAT without other evidence to back it up.</strong></li>
            </ul>
            <li>Plan out how you will manage accessibility throughout the lifetime of the contract or systems lifecycle. Make sure future versions will be more, not less, accessible.</li>
        </ol>
        <h2 id="tips-and-resources">Tips and resources</h2>
        <p>Simple things you can do to improve accessibility in your product and awareness in your team. Pick three, one to do today, one for later in the week, and one for later in the month.</p>
        <ul>
          <li>Discuss accessibility at your next team meeting. What do they think accessibility means? What is each person’s accessibility responsibility?</li>
          <li>Run emails, documents, templates and presentations you’ve written through the inbuilt Microsoft Outlook accessibility checker and encourage your team to do the same.</li>
          <li>Test websites you’re procuring and overseeing with an automated accessibility checker such as <A href="https://wave.webaim.org/">WAVE</A>, <A href="https://www.deque.com/axe/">Axe</A> and/or inspect the HTML code to get a rough idea how accessible they are.</li>
          <li>Ask for an update on accessibility in team meetings.</li>
          <li><A href="https://www.gov.uk/government/publications/sample-accessibility-statement">Read the sample accessibility statement</A> and start to think about how yours might look.</li>
          <li>Sit in on a user research session with a participant who has access needs. If your team doesn’t have a user researcher, ask around—observers and note takers are usually welcome.</li>
          <li>If you have online forums such as Teams, Slack, Viva Engage or Yammer, join an accessibility channel (for example #accessibility in the UK Government Digital Slack workspace). They’ll answer questions and post useful links. There’s also the <A href="https://www.gov.uk/service-manual/communities/accessibility-community#get-involved">Cross-government accessibility community</A>.</li>
          <li>Find out if your organisation has an Accessibility Champions’ Network (or something similar), and attend their meetings whenever possible. If not, consider starting one.</li>
          <li>Make increasing accessibility knowledge a learning objective for yourself or someone you manage (with their agreement!).</li>
          <li>Allocate time and budget for team members to have accessibility training.</li>
          <li>Visit an Accessibility Lab/Hub to familiarise yourself with assistive technology and better understand user needs. Ask cross-government colleagues if you can access their facilities if you do not have an in-house lab.</li>
          <li>Review any outstanding accessibility defects on your service and assess whether they can be fixed now.</li>
          <li>Create a pattern library of reusable elements, for example drop down boxes, that are coded for compliance (and keep it up to date).</li>
          <li>Log inaccessibility as a risk on your department register.</li>
          <li>Appoint a person to lead on accessibility, as dedicated and senior as possible, then grow a team around them.</li>
        </ul>
        <h2 id="glossary">Glossary</h2>
        <h3>A, AA, AAA</h3>
        <p>Levels of accessibility conformance with WCAG. A is the lowest, AAA is the highest. The minimum for public sector bodies is AA.</p>
        <h3>Access need</h3>
        <p>What a user needs to access a product or service. For someone with a visual impairment, this could mean being able to enlarge or change the colour of text so they can read it.</p>
        <h3>Accessibility maturity</h3>
        <p>The level of accessibility in an organisation and its products. An accessibility maturity assessment documents areas in which an organisation is doing well and where accessibility can be improved. Read more about the <A href="https://www.w3.org/TR/maturity-model/">Accessibility Maturity Model (W3C)</A>.</p>
        <h3>ARIA</h3>
        <p>Accessible Rich Internet Applications: specifications for creating accessible website components.</p>
        <h3>Assisted digital</h3>
        <p>Helping users who, for example, do not have access to the internet, or lack confidence in their internet skills, to use an online service. <A href="https://www.gov.uk/service-manual/helping-people-to-use-your-service/assisted-digital-support-introduction">Read more about assisted digital</A>.</p>
        <h3>Assistive technology</h3>
        <p>A product that makes it easier, or possible, for users with disabilities to do what they need or want to. Assistive technology for computer and internet users could be screen reader software or a trackball.</p>
        <h3>CSS</h3>
        <p>Cascading Style Sheets: the code that tells the web browser how it should display different HTML elements, for example the font size and colour of a header.</p>
        <h3>Disproportionate burden</h3>
        <p>Where the time and resources needed to fix an accessibility issue are greater than the benefit of fixing it.</p>
        <h3>ECNI</h3>
        <p>The Equality Commission for Northern Ireland (ECNI): enforces the requirement to make public sector websites and mobile apps accessible (making them perceivable, operable, understandable and robust) in Northern Ireland.</p>
        <h3>EHRC</h3>
        <p>The Equality and Human Rights Commission (EHRC): enforces the requirement to make public sector websites and mobile apps accessible (making them perceivable, operable, understandable and robust) in England, Wales and Scotland.</p>
        <h3>HTML</h3>
        <p>HyperText Markup Language: the code used to define elements of a web page, for example headers, paragraphs and images.</p>
        <h3>PSBAR</h3>
        <p>The Public Sector Bodies (Websites and Mobile Applications) (No. 2) Accessibility Regulations 2018 regulations that set standards for web accessibility.</p>
        <h3>W3C</h3>
        <p>The World Wide Web Consortium: develops standards and guidelines for the web, including accessibility standards.</p>
        <h3>WCAG</h3>
        <p>Web Content Accessibility Guidelines: a set of standards published by the W3C.</p>
        <h3>Widest user need</h3>
        <p>Designing services so as many people as possible, including those with access needs, can use them. </p>

        <h2>Contribute</h2>
        <p>Get involved with <A href="https://github.com/UKHomeOffice/design-system/discussions">GitHub discussions</A> about our styles, components and patterns.</p>

    </div>
  </div>
);

export default Page;

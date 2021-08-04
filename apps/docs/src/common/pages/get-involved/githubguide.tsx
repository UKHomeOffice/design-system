import { FC, Fragment, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A, NavigationMenu } from '@not-govuk/components';

const applyGithub1 = require('../../../../assets/images/Github-guide-screen-1.png').default;
const applyGithub2 = require('../../../../assets/images/Github-guide-screen-2.png').default;
const applyGithub3 = require('../../../../assets/images/Github-guide-screen-3.png').default;
const applyGithub5 = require('../../../../assets/images/Github-guide-screen-5.png').default;
const applyGithub6 = require('../../../../assets/images/Github-guide-screen-6.png').default;

export const title = 'GitHub guide';
const longTitle = 'Using GitHub to propose design system changes';
const description = 'How to use GitHub to propose design system changes';
const section = 'Get involved';

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
      <NavigationMenu items={[
        {
          href: '/get-involved/working',
          text: 'Working group'
        },
        {
          href: '/get-involved/backlog',
          text: 'Backlog'
        },
        {
          href: '/get-involved/suggest',
          text: 'Suggest new ideas'
        },
        {
          href: '/get-involved/contribution',
          text: 'Contribution criteria'
        },
        {
          href: '/get-involved/githubguide',
          text: 'Using GitHub to propose design system changes'
        },
        {
          href: '/get-involved/proving',
          text: 'Proving ideas work'
        },
        {
          href: '/get-involved/using',
          text: 'Using the system'
        }
      ]} />
    </div>
    <div className="govuk-grid-column-three-quarters">
      <h1>
        <span className="caption">{section}</span>
        {longTitle}
      </h1>

          <p>This guide explains how to propose a new pattern or component and edit and comment on existing suggestions.</p>

          <p>The design system working group uses a system called GitHub to help manage and review suggestions of new patterns, components or other design system changes to the Home Office design system.</p>

          <p>You’ll need a GitHub account to make a proposal. If you do not have an account, <A href="https://github.com">you can create one for free.</A></p>

          <h2 className="govuk-heading-m">1. Go to GitHub</h2>

          <p>Go to the Home Office design system GitHub page: <A href="https://github.com/UKHomeOffice/design-system/issues">https://github.com/UKHomeOffice/design-system/issues</A></p>

          <p>The Issues tab presents the list of all proposals – both open and closed. To add your proposal, click on the New Issue button to the right of the list.</p>


          <div className="govuk-grid-row">
        <div className="govuk-grid-column-full">
          <img  src={applyGithub1} className="confirm-desktop" style={{width: "100%", maxHeight: "100%"}} alt="Github issue screen with a highlight around the New issue button"/>
          </div>
        </div>

          <h2 className="govuk-heading-m">2. Add the details of your proposal</h2>

          <p>Give it a descriptive and useful title.</p>

          <p>The text area is prepopulated as a guide to help you format and explain your proposal. Overwrite the text sections with the details of your proposal, providing as much information as you can.</p>

          <p>You can add files, such as screen shots and images, to support your submission.</p>

          <p>The material you provide will help the design working group to make an informed decision on your proposal.</p>

          <div className="govuk-grid-row">
        <div className="govuk-grid-column-full">
              <img  src={applyGithub2} className="confirm-desktop" style={{width: "100%", maxHeight: "100%"}} alt="Showing create a new issue screen in Github with a highlight around add a title input"/>
              </div>
            </div>


          <h2 className="govuk-heading-m">3. Submit your proposal</h2>
          <p>Once you have added the necessary information, select the Submit new issue button at the foot of the page. Your proposal has been added to the list.</p>

          <div className="govuk-grid-row">
        <div className="govuk-grid-column-full">
            <img  src={applyGithub3} className="confirm-desktop" style={{width: "100%", maxHeight: "100%"}} alt="Create a new issue screen focused on the text input area and highlighting the submit new issue button"/>
            </div>
          </div>


          <h2 className="govuk-heading-m">4. Editing and commenting</h2>
          <p>You can edit your own proposal and also comment on others in the list.</p>

          <p>Whether editing or commenting, you can add files (such as screenshots or images) to proposals.</p>

          <p>To edit your issue, click on the title of the issue, select the 3-dot icon in the top right of the text area, and then choose Edit.</p>

          <div className="govuk-grid-row">
        <div className="govuk-grid-column-full">
            <img  src={applyGithub5} className="confirm-desktop" style={{width: "100%", maxHeight: "100%"}} alt="Screen displaying an issue that has been created and highlighting a drop down menu on how to edit the issue"/>
            </div>
          </div>


          <p>To give feedback on other proposals in the Issues list, click on the title to open it and leave a comment in the Write field. Select the Comment button beneath the field to save your text.</p>

          <div className="govuk-grid-row">
        <div className="govuk-grid-column-full">
              <img  src={applyGithub6} className="confirm-desktop" style={{width: "100%", maxHeight: "100%"}} alt="Screen displaying an issue that has been created and highlighting the area where you can add comments and feedback on that issue"/>
              </div>
            </div>


      </div>
   </div>
);

export default Page;

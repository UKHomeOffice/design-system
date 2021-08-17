import { FC, Fragment, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { AnchorList } from '@not-govuk/anchor-list';
import { stories } from '../component-stories';

function removeLinksFromIndex(linksToRemove, indexToRemoveFrom) {
  let strippedIndex = indexToRemoveFrom;
  linksToRemove.forEach(element => {
    for (var i = 0; i < indexToRemoveFrom.length; i++) {
      if(element == indexToRemoveFrom[i].href) {
        strippedIndex.splice(i, 1);
        break;
      }
    }
  });
  return strippedIndex;
}

export const title = 'Sitemap';
const description = 'Overview of the Home Office Design System';

const Page: FC<PageProps> = ({ routes }) => {

  // Create automatic site index
  let miscRoutes = routes.map(e => ({
    href: e.href,
    text: e.title
  }));

  // Create index of Get Started pages
  const getStartedHref = [
    '/get-started',
    '/get-started/prototyping',
    '/get-started/start-prototype',
    '/get-started/use-prototype',
    '/get-started/design-assets',
    '/get-started/deploy-prototype',
    '/get-started/project'
  ];
  const getStartedTitle = [
    'Get Started',
    'Prototyping',
    'Setting up your prototype',
    'Building your prototype',
    'Design assets',
    'Deploy prototype',
    'Prototype'
  ];
  const getStarted = Object.keys(getStartedHref).sort().map(v => ({
    href: getStartedHref[v],
    text: getStartedTitle[v]
  }));
  // Remove Get Started pages from automatic index
  miscRoutes = removeLinksFromIndex(getStartedHref, miscRoutes)

  // Create index of Styles pages
  const stylesHref = [
    '/styles',
    '/styles/colour',
    '/styles/images',
    '/styles/typography'
  ];
  const stylesTitle = [
    'Styles',
    'Colour',
    'Images',
    'Typography'
  ];
  const styles = Object.keys(stylesHref).sort().map(v => ({
    href: stylesHref[v],
    text: stylesTitle[v]
  }));
  // Remove Styles pages from automatic index
  miscRoutes = removeLinksFromIndex(stylesHref, miscRoutes)

  // Group all component pages (not included in automatic index so no need to remove)
  const components = Object.keys(stories).sort().map(v => ({
    href: `/components?name=${encodeURIComponent(stories[v].default.title)}`,
    text: v
  }));

  // Create index of Patterns pages
  const patternsHref = [
    '/patterns',
    '/patterns/access-a-service',
    '/patterns/add-multiple-things',
    '/patterns/find-information-on-document',
    '/patterns/get-more-details',
    '/patterns/leave-a-service',
    '/patterns/stop-a-service-timing-out'
  ];
  const patternsTitle = [
    'Patterns',
    'Access a service',
    'Add multiple things',
    'Find information on a document',
    'Get more details',
    'Leave a service',
    'Stop a service timing out'
  ];
  const patterns = Object.keys(patternsHref).sort().map(v => ({
    href: patternsHref[v],
    text: patternsTitle[v]
  }));
  // Remove Patterns pages from automatic index
  miscRoutes = removeLinksFromIndex(patternsHref, miscRoutes)

  // Create index of Accessibility pages
  const accessibilityHref = [
    '/accessibility',
    '/accessibility-statement',
    '/accessibility/links',
    '/accessibility/tables',
    '/accessibility/headings',
    '/accessibility/error-messages',
    '/accessibility/keyboard',
    '/accessibility/keyboard/tab-navigation',
    '/accessibility/keyboard/focus',
    '/accessibility/keyboard/skip-to-content',
    '/accessibility/keyboard/character-key-shortcuts',
    '/accessibility/keyboard/pointer-gestures',
    '/accessibility/timeouts',
    '/accessibility/inclusive-language',
    '/accessibility/readability',
    '/accessibility/audio-and-video',
    '/accessibility/colour-and-contrast',
    '/accessibility/images',
    '/accessibility/resources'
  ];
  const accessibilityTitle = [
    'Accessibility',
    'Accessibility Statement',
    'Links',
    'Tables',
    'Headings',
    'Error messages',
    'Keyboard basics',
    'Tab navigation',
    'Focus',
    'Skip to content links',
    'Character key shortcuts',
    'Pointer gestures',
    'Timeouts',
    'Inclusive language',
    'Readability',
    'Audio and video',
    'Colour and contrast',
    'Images',
    'Guidance, tools and further reading'
  ];
  const accessibility = Object.keys(accessibilityHref).sort().map(v => ({
    href: accessibilityHref[v],
    text: accessibilityTitle[v]
  }));
  // Remove Accessibility pages from automatic index
  miscRoutes = removeLinksFromIndex(accessibilityHref, miscRoutes)

  // Create index of Get Involved pages
  const getInvolvedHref = [
    '/get-involved',
    '/get-involved/working',
    '/get-involved/backlog',
    '/get-involved/suggest',
    '/get-involved/contribution',
    '/get-involved/githubguide',
    '/get-involved/proving',
    '/get-involved/using'
  ];
  const getInvolvedTitle = [
    'get Involved',
    'Working group',
    'Backlog',
    'Suggest new ideas',
    'Contribution criteria',
    'Using GitHub to propose design system changes',
    'Proving ideas work',
    'Using the system'
  ];
  const getInvolved = Object.keys(getInvolvedHref).sort().map(v => ({
    href: getInvolvedHref[v],
    text: getInvolvedTitle[v]
  }));
  // Remove Get Involved pages from automatic index
  miscRoutes = removeLinksFromIndex(getInvolvedHref, miscRoutes)

  return (
    <Fragment>
      <Helmet>
        <title>{title} - Home Office Design System</title>
        <meta name="description" content={description} />
        <meta name="og:title" content={title} />
        <meta name="og:description" content={description} />
      </Helmet>
      <h1>{title}</h1>
      <h2>Get Started</h2>
      <AnchorList classBlock="govuk-list" items={getStarted} />
      <h2>Styles</h2>
      <AnchorList classBlock="govuk-list" items={styles} />
      <h2>Components</h2>
      <AnchorList classBlock="govuk-list" items={components} />
      <h2>Patterns</h2>
      <AnchorList classBlock="govuk-list" items={patterns} />
      <h2>Accessibility</h2>
      <AnchorList classBlock="govuk-list" items={accessibility} />
      <h2>Get Involved</h2>
      <AnchorList classBlock="govuk-list" items={getInvolved} />
      <h2>Misc</h2>
      <AnchorList classBlock="govuk-list" items={miscRoutes} />
    </Fragment>

  );
};

export default Page;

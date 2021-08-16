import { FC, Fragment, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { AnchorList } from '@not-govuk/anchor-list';
import { stories } from '../component-stories';

// Group get started pages
const getStartedHref = [
  './get-started',
  './get-started/prototyping.tsx',
  './get-started/start-prototype.tsx',
  './get-started/use-prototype.tsx',
  './get-started/design-assets.tsx',
  './get-started/deploy-prototype.tsx',
  './get-started/project.tsx'
];
const getStartedTitle = [
  'Get Started',
  'Prototyping',
  'Setting up your prototype',
  'Building your prototype',
  'Design assets',
  'Deploy prototype',
  'Prototype'
]
const getStarted = Object.keys(getStartedHref).sort().map(v => ({
  href: getStartedHref[v],
  text: getStartedTitle[v]
}));

// Group all styles pages
const stylesHref = [
  './styles',
  './styles/colour.tsx',
  './styles/images.tsx',
  './styles/typography.tsx'
];
const stylesTitle = [
  'Styles',
  'Colour',
  'Images',
  'Typography'
]
const styles = Object.keys(stylesHref).sort().map(v => ({
  href: stylesHref[v],
  text: stylesTitle[v]
}));

// Group all component pages
const components = Object.keys(stories).sort().map(v => ({
  href: `/components?name=${encodeURIComponent(stories[v].default.title)}`,
  text: v
}));

// Group all patterns pages
const patternsHref = [
  './patterns',
  './patterns/access-a-service.tsx',
  './patterns/add-multiple-things.tsx',
  './patterns/find-information-on-document.tsx',
  './patterns/get-more-details.tsx',
  './patterns/leave-a-service.tsx',
  './patterns/stop-a-service-timing-out.tsx'
];
const patternsTitle = [
  'Patterns',
  'Access a service',
  'Add multiple things',
  'Find information on a document',
  'Get more details',
  'Leave a service',
  'Stop a service timing out'
]
const patterns = Object.keys(patternsHref).sort().map(v => ({
  href: patternsHref[v],
  text: patternsTitle[v]
}));

// Group all accessibility pages
const accessibilityHref = [
  './accessibility/',
  './accessibility/links.tsx',
  './accessibility/tables.tsx',
  './accessibility/headings.tsx',
  './accessibility/error-messages.tsx',
  './accessibility/keyboard.tsx',
  './accessibility/keyboard/tab-navigation.tsx',
  './accessibility/keyboard/focus.tsx',
  './accessibility/keyboard/skip-to-content.tsx',
  './accessibility/keyboard/character-key-shortcuts.tsx',
  './accessibility/keyboard/pointer-gestures.tsx',
  './accessibility/timeouts.tsx',
  './accessibility/inclusive-language.tsx',
  './accessibility/readability.tsx',
  './accessibility/audio-and-video.tsx',
  './accessibility/colour-and-contrast.tsx',
  './accessibility/images.tsx',
  './accessibility/resources.tsx'
];
const accessibilityTitle = [
  'Accessibility',
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
]
const accessibility = Object.keys(accessibilityHref).sort().map(v => ({
  href: accessibilityHref[v],
  text: accessibilityTitle[v]
}));

// Group get involved pages
const getInvolvedHref = [
  './get-involved',
  './get-involved/working.tsx',
  './get-involved/backlog.tsx',
  './get-involved/suggest.tsx',
  './get-involved/contribution.tsx',
  './get-involved/githubguide.tsx',
  './get-involved/proving.tsx',
  './get-involved/using.tsx'
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
]
const getInvolved = Object.keys(getInvolvedHref).sort().map(v => ({
  href: getInvolvedHref[v],
  text: getInvolvedTitle[v]
}));


export const title = 'Sitemap';
const description = 'Overview of the Home Office Design System';

const Page: FC<PageProps> = ({ routes }) => {
  const compare = (a, b) => (
    a.href > b.href
           ? 1
           : -1
  );
  const pages = routes
    .map(e => ({
      href: e.href,
      text: e.title
    }))
    .sort(compare);

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
    </Fragment>
  );
};

export default Page;

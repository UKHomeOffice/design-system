import { FC, Fragment, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { NavigationMenu } from '@not-govuk/components';
import { DocsPage } from '@not-govuk/docs-components';

const reduceToLookup = (acc: object, cur) => ({...acc, [cur.default.title]: cur});
const storySources = [
  require('../../../../../components/alert/spec/Alert.stories.mdx'),
  require('../../../../../components/footer/spec/Footer.stories.mdx'),
  require('../../../../../components/header/spec/Header.stories.mdx'),
  require('../../../../../components/page/spec/Page.stories.mdx'),
  require('../../../../../components/status-banner/spec/StatusBanner.stories.mdx'),
  require('../../../../../components/timeline/spec/Timeline.stories.mdx')
];
const subpages = storySources.reduce(reduceToLookup, {})

const Page: FC<PageProps> = ({ location }) => {
  const nameParam = 'name';
  const componentName = location.query[nameParam];
  const stories = subpages[componentName];
  const navItems = Object.keys(subpages).map(v => ({
    href: `/components?${nameParam}=${subpages[v].default.title}`,
    text: v
  }));

  return (
    <div className="govuk-grid-row">
      <Helmet>
        <title>Components - Home Office Design System</title>
        <meta name="og:article:section" content="Components" />
      </Helmet>
      <div className="govuk-grid-column-one-quarter">
        <NavigationMenu items={navItems} />
      </div>
      <div className="govuk-grid-column-three-quarters">
        {
          stories ? (
            <Fragment>
              <span className="govuk-caption-xl">Components</span>
              <DocsPage siteName="Home Office Design System" stories={stories} />
            </Fragment>
          ) : (
            componentName ? (
              null // should be a 404!
            ) : (
              <Fragment>
                <h1>Components</h1>
                <p>
                  Components are reusable parts of the user interface that have been made to support a variety of applications.
                </p>
                <p>
                  Individual components can be used in multiple different patterns and contexts. For example, the text input component can be used to ask for an email address, a National Insurance number or someone’s name.
                </p>
              </Fragment>
            )
          )
        }
      </div>
    </div>
  );
};

export default Page;
export const title = 'Components';

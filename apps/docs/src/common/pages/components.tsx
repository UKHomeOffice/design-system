import { FC, Fragment, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A, NavigationMenu } from '@not-govuk/components';
import { DocsPage } from '@not-govuk/docs-components';

const reduceToLookup = (acc: object, cur) => ({...acc, [cur.default.title]: cur});
const storySources = [
  require('../../../../../components/alert/spec/Alert.stories.mdx'),
  require('../../../../../components/expandable-banner/spec/ExpandableBanner.stories.mdx'),
  require('../../../../../components/footer/spec/Footer.stories.mdx'),
  require('../../../../../components/header/spec/Header.stories.mdx'),
  require('../../../../../components/page/spec/Page.stories.mdx'),
  require('../../../../../components/pagination/spec/Pagination.stories.mdx'),
  require('../../../../../components/status-message/spec/StatusMessage.stories.mdx'),
  require('../../../../../components/timeline/spec/Timeline.stories.mdx')
];
const subpages = storySources.reduce(reduceToLookup, {})

export const title = 'Components';
const description = 'The components provided in NotGovUK';

const Page: FC<PageProps> = ({ location }) => {
  const nameParam = 'name';
  const componentName = location.query[nameParam];
  const stories = subpages[componentName];
  const navItems = Object.keys(subpages).sort().map(v => ({
    href: `/components?${nameParam}=${subpages[v].default.title}`,
    text: v
  }));

  return (
    <div className="govuk-grid-row">
      <Helmet>
        <title>{title} - Home Office Design System</title>
        <meta name="description" content={description} />
        <meta name="og:title" content={title} />
        <meta name="og:description" content={description} />
        <meta name="og:article:section" content={title} />
      </Helmet>
      <div className="govuk-grid-column-one-quarter">
        <NavigationMenu items={navItems} />
      </div>
      <div className="govuk-grid-column-three-quarters">
        {
          stories ? (
            <Fragment>
              <span className="govuk-caption-xl">{title}</span>
              <DocsPage siteName="Home Office Design System" stories={stories} />
            </Fragment>
          ) : (
            componentName ? (
              null // should be a 404!
            ) : (
              <Fragment>
                <h1>{title}</h1>
                <p>
                  Components are reusable parts of the user interface that have been made to support a variety of applications. Individual
                  components can be used in multiple different patterns and contexts. 
                </p>
                <p>
                These components extend those used across Government in the <A href="https://design-system.service.gov.uk/">GOV.UK
                design system</A>. As our components mature, we will look to
                contribute them to the GOV.UK system so they can be used more widely.
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

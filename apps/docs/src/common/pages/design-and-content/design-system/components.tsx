import { FC, Fragment, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A } from '@not-govuk/components';
import { DocsPage } from '@not-govuk/docs-components';
import { useLocation } from '@not-govuk/router';
import { nameParam, components as subpages } from '../../../stories';
import config from '../../../config';

import { SubsectionWrap, title as subsection } from './';

const siteTitle = config.title;

export const title = 'Components';
const longTitle = title;
const description = `The components provided in the ${siteTitle}`;

const Page: FC<PageProps> = () => {
  const location = useLocation();
  const subPageName = location.query[nameParam] as unknown as string;
  const stories = subpages[subPageName];

  return (
    <SubsectionWrap>
      <Helmet>
        <title>{title} - {siteTitle}</title>
        <meta name="description" content={description} />
        <meta name="og:title" content={title} />
        <meta name="og:description" content={description} />
      </Helmet>
      {
        stories ? (
          <DocsPage siteName={siteTitle} stories={stories} />
        ) : (
          subPageName ? (
            null // should be a 404!
          ) : (
            <Fragment>
              <h1>
                <span className="caption">{subsection}</span>
                {longTitle}
              </h1>
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
    </SubsectionWrap>
  );
};

export default Page;

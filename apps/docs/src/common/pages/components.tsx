import { FC, Fragment, createElement as h } from 'react';
import { PageProps } from '@not-govuk/app-composer';
import { A } from '@not-govuk/components';
import { DocsPage } from '@not-govuk/docs-components';

const reduceToLookup = (acc, cur) => ({...acc, [cur.default.title]: cur});
const createSubpageStore = r => (
  r
    .keys()
    .map(r)
    .reduce(reduceToLookup, {})
);
const subpages = createSubpageStore(require.context('../../../../../components/', true, /^\.\/[^\/]+\/spec\/[^\/]+\.stories\.mdx$/));

const Page: FC<PageProps> = ({ location }) => {
  const nameParam = 'name';
  const componentName = location.query[nameParam];
  const stories = subpages[componentName];

  return (
    <div className="govuk-grid-row">
      <div className="govuk-grid-column-one-third">
        <aside>
          <h2>Components</h2>
          <ul className="plain">
            {Object.keys(subpages).map((v, i) => (
              <li key={i}><A href={`/components?${nameParam}=${v}`}>{subpages[v].default.title}</A></li>
            ))}
          </ul>
        </aside>
      </div>
      <div className="govuk-grid-column-two-thirds">
        {
          stories ? (
            <Fragment>
              <span className="govuk-caption-xl">Components</span>
              <DocsPage stories={stories} />
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

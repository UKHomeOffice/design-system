import { FC, createElement as h } from 'react';
import { StandardProps, classBuilder } from '@not-govuk/component-helpers';
import { A } from '@not-govuk/link';
import { queryString } from '@not-govuk/route-utils';

export type NavigationProps = StandardProps & {
  /**The total number of results*/
  results: number
  /**The number of results shown on each page*/
  resultsPerPage: number
  /**The current page being viewed*/
  page: number
  /** Query parameter to use for the page number */
  pageParameter?: string
  /** Query object of the current page, to append to */
  query?: object
};

export const Navigation: FC<NavigationProps> = ({
  children,
  classBlock,
  classModifiers,
  className,
  results,
  resultsPerPage,
  page,
  pageParameter = 'page',
  query = {},
  ...attrs
}) => {
  const classes = classBuilder(
    'hods-pagination-navigation',
    classBlock,
    classModifiers,
    className
  );
  const pageEquals = pageParameter + '=';

  const resultsFrom = (page - 1) * resultsPerPage + 1;
  const maxResults = page * resultsPerPage;
  const additionalPage =
    Math.floor(results / resultsPerPage) * resultsPerPage < results ? 1 : 0;
  const maxPages = Math.floor(results / resultsPerPage) + additionalPage;

  const resultsTo = results < maxResults ? results : maxResults;

  const pages = [page - 2, page - 1, page, page + 1, page + 2];
  const hl = [
    queryString({ ...query, [pageParameter]: pages[0] }),
    queryString({ ...query, [pageParameter]: pages[1] }),
    '',
    queryString({ ...query, [pageParameter]: pages[3] }),
    queryString({ ...query, [pageParameter]: pages[4] })
  ];
  const it = [0, 1, 2, 3, 4];

  return (
    <nav className={classes()} role="navigation" aria-label="Pagination Navigation" {...attrs}>
      <div className={classes('summary')}>
        Showing {resultsFrom} - {resultsTo} of {results} results
      </div>
      <ul className={classes('list-items')}>
        {page > 1 ? (
          <li
            className={classes('item')}
            key="prev"
          >
            <A
              className={classes('link')}
              href={page > 1 ? hl[1] : ''}
              aria-label={`Previous page, go to page ${page - 1}`}
            >
              <span aria-hidden="true" role="presentation">
                &laquo;
              </span>{' '}
              Previous
            </A>
          </li>
        ) : null}
        {it.map((i) => (
          pages[i] < 1 || pages[i] > maxPages ? null : (
            <li className={classes('item')} key={i}>
              <A
                className={classes(
                  'link',
                  pages[i] === page ? 'current' : undefined
                )}
                href={hl[i]}
                aria-current={pages[i] === page ? 'true' : 'false' }
                aria-label={
                  pages[i] === page
                    ? `Current page, page ${page}`
                    : `Go to page ${page}`
                }
              >
                {pages[i]}
              </A>
            </li>
          )
        ))}
        {resultsTo == results ? null : (
          <li
            className={classes('item')}
            key="next"
          >
            <A
              className={classes('link')}
              href={resultsTo == results ? '' : hl[3]}
              aria-label={`Next page, go to page ${page + 1}`}
            >
              Next{' '}
              <span aria-hidden="true" role="presentation">
                &raquo;
              </span>
            </A>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;

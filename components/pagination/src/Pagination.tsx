import React, { FC, createElement as h } from 'react';
import { StandardProps, classBuilder } from '@not-govuk/component-helpers';
import { A } from '@not-govuk/link';

import '../assets/Pagination.scss';

export type PaginationProps = StandardProps & {
  /**The total number of results*/
  results: number
  /**The number of results shown on each page*/
  resultsPerPage: number
  /**The current page being viewed*/
  page: number
};

export const Pagination: FC<PaginationProps> = ({
  children,
  classBlock,
  classModifiers,
  className,
  results,
  resultsPerPage,
  page,
  ...attrs
}) => {
  const classes = classBuilder(
    'hods-pagination',
    classBlock,
    classModifiers,
    className
  );

  page = Number(page); // in case user passes in a string
  results = Number(results);
  resultsPerPage = Number(resultsPerPage);

  const resultsFrom = (page - 1) * resultsPerPage + 1;
  const maxResults = page * resultsPerPage;
  const maxPages = results / resultsPerPage + 1;
  const resultsTo = (
    results < maxResults
    ? results
    : maxResults
  );

  const pages = [page - 2, page - 1, page, page + 1, page + 2];
  const it = [0,1,2,3,4];
  const hl = ["?page=" + pages[0], "?page=" + pages[1], "",
    "?page=" + pages[3], "?page=" + pages[4]];

  return (
      <div className={ classes() }>
        <div className={ classes('summary') }>Showing { resultsFrom } - { resultsTo } of { results } results</div>
        <ul className={ classes('list-items') }>
          { page > 1 ?
            <li className={ classes('item') } id="prevButton" key="prev">
              <A className={ classes('link') } href={hl[1]}>
                <span aria-hidden="true" role="presentation">&laquo;</span> Previous
              </A>
            </li>
          : null }
          { it.map( i => (
            <li className={ classes('item') } key={i}>
              { pages[i] < 1 || pages[i] > maxPages
                ? null
                : pages[i]!==page
                  ? <A className={ classes('link') } href={ hl[i] }>{ pages[i] }</A>
                  : <a className={ classes('link', 'current') }>{ pages[i] }</a>
              }
            </li>
          ))}
          { resultsTo == results ? null :
            <li className={ classes('item') } id="nextButton" key="next">
              <A className={ classes('link') } href={hl[3]}>
                 Next <span aria-hidden="true" role="presentation">&raquo;</span>
              </A>
            </li>
          }
        </ul>
      </div>
  );
};

export default Pagination;

// hods-pagination__link

/*


Expected substring: "href=\"\""
Received string:    "href=\"/\""




{ it.map( i => (
  <li className={ classes('item') } key={i}>
    { pages[i] < 1 || pages[i] > maxPages ? null : <a className={classes('link', pages[i] === page ? 'current' : undefined)} href={hl[i]}>{pages[i]}</a>}
  </li>
))}


return (
    <div className={ classes() }>
      <div className={ classes('summary') }>Showing { resultsFrom } - { resultsTo } of { results } results</div>
      <ul className={ classes('list-items') }>
        { page > 1 ?
          <li className={ classes('item') } id="prevButton" key="prev">
            <A href="#">Previous</A>
          </li>
        : null }
          <li className={ classes('item') }>
            <A href="#" classBlock="hods-pagination__link">1</A>
            <A href="#" classBlock="hods-pagination__link">2</A>
            <A href="#" classBlock="hods-pagination__link hods-pagination__link--current">3</A>
            <A href="#" classBlock="hods-pagination__link">4</A>
            <A href="#" classBlock="hods-pagination__link">5</A>
          </li>
        { resultsTo == results ? null :
          <li className={ classes('item') } id="nextButton" key="next">
            <A href="#">Next</A>
          </li>
        }
      </ul>
    </div>
);
*/

import { Children, FC, createElement as h } from 'react';
import { StandardProps, classBuilder } from '@not-govuk/component-helpers';
import { useLocation } from '@not-govuk/route-utils';
import { Navigation } from './Navigation';

import '../assets/Pagination.scss';

export type PaginationProps = StandardProps & {
  /** Number of items to be shown on each page */
  size?: number
  /** Query parameter to use for the page number */
  pageParameter?: string
};

export const Pagination: FC<PaginationProps> = ({
  children: _children,
  classBlock,
  classModifiers,
  className,
  pageParameter = 'page',
  size = 10,
  ...attrs
}) => {
  const classes = classBuilder(
    'hods-pagination',
    classBlock,
    classModifiers,
    className
  );
  const location = useLocation();
  const currentPage = Number(location?.query[pageParameter]) || 1;

  const items = Children.toArray(_children);
  const start = size * (currentPage - 1);
  const children = items.slice(start, start + size);

  return (
    <div className={classes()} {...attrs}>
      <div className={classes('content')}>
        {children}
      </div>
      <Navigation classBlock={classes('navigation')} pageParameter={pageParameter} page={currentPage} query={location.query} results={items.length} resultsPerPage={size} />
    </div>
  );
};

export default Pagination;

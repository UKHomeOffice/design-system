import { FC, createElement as h } from 'react';
import { StandardProps, classBuilder } from '@not-govuk/component-helpers';
import { ServiceNavigation as _ServiceNavigation, ServiceNavigationProps as _ServiceNavigationProps } from '@not-govuk/service-navigation';

import '../assets/ServiceNavigation.scss';

export type ServiceNavigationProps = StandardProps & _ServiceNavigationProps;

export const ServiceNavigation: FC<ServiceNavigationProps> = ({
  classBlock,
  classModifiers,
  className,
  ...props
}) => {
  const classes = classBuilder('hods-service-navigation', classBlock, classModifiers, className);

  return (
    <_ServiceNavigation {...props} className={classes()} />
  );
};

ServiceNavigation.displayName = 'ServiceNavigation';

export default ServiceNavigation;

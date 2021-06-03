import { FC, Fragment, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A } from '@not-govuk/components';


const Page: FC<PageProps> = props => (
  <Fragment>
    <Helmet>
      <title>Home - Home Office Design System</title>
    </Helmet>
    <div className="govuk-grid-row">
      <div className="govuk-grid-column-two-thirds">
        <h1>Designing and building Home Office services</h1>
        <p className="govuk-body-l">This design system will help you to design and build internal, as well as public-facing, services that are fit for everyone.</p>
        <p className="govuk-body-l">Find out when to use our own styles, components and patterns and when to use the <A href="https://design-system.service.gov.uk/">GOV.UK Design System</A>. See examples from within existing services.</p>
      </div>
      <div className="govuk-grid-column-one-third">
        <aside>
          <h3 className="govuk-heading-m" style={{ marginTop: '10px', marginBottom: '10px' }}>Updates</h3>
          <p className="govuk-body govuk-!-font-size-16" style={{ color: '#626a6e' }}>Last updated 17 May 2021</p>
          <ul className="govuk-!-font-size-16">
            <li>Launched new accessibility section including <a href="/accessibility/audio-and-video">audio and video guidance</a></li>
          </ul>
        </aside>
      </div>
    </div>
    <div className="govuk-grid-row homepage-sections">
      <div className="govuk-grid-column-one-third">
        <aside>
          <h2>Styles</h2>
          <p className="govuk-body govuk-!-font-size-19">We apply different styles to our services and products depending domain and type of service.</p>
          <A className="govuk-body govuk-!-font-size-19" href="/styles">Browse styles</A>
        </aside>
      </div>
      <div className="govuk-grid-column-one-third">
        <aside>
          <h2>Components</h2>
          <p className="govuk-body govuk-!-font-size-19">Components are reusable, ready-made interface elements that can be used in different patterns and layouts.</p>
          <A className="govuk-body govuk-!-font-size-19" href="/components">Browse components</A>
        </aside>
      </div>
      <div className="govuk-grid-column-one-third">
        <aside>
          <h2>Patterns</h2>
          <p className="govuk-body govuk-!-font-size-19">Patterns help users complete common tasks, are flexible and don't prescribe exact design solutions.</p>
          <A className="govuk-body govuk-!-font-size-19" href="/patterns">Browse patterns</A>
        </aside>
      </div>
    </div>
  </Fragment>
);

export default Page;
export const title = 'Home Office Design System';

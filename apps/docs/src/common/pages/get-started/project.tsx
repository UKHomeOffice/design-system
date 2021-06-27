import { FC, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A, NavigationMenu } from '@not-govuk/components';

export const title = 'Production';
const longTitle = 'Starting a new project';
const description = 'How to start a new project';
const section = 'Get started';

const Page: FC<PageProps> = ({ location }) => (
  <div className="govuk-grid-row">
    <Helmet>
      <title>{longTitle} - Home Office Design System</title>
      <meta name="description" content={description} />
      <meta name="og:title" content={longTitle} />
      <meta name="og:description" content={description} />
      <meta name="og:article:section" content={section} />
    </Helmet>
    <div className="govuk-grid-column-one-quarter">
    <span className="govuk-caption-m" style={{marginBottom: "1em"}}>How to guides</span>
      <NavigationMenu items={[
        {
          href: '/get-started/prototyping',
          text: 'Prototyping'
        },
        {
          href: '/get-started/start-prototype',
          text: '- Starting your prototype'
        },
        {
          href: '/get-started/use-prototype',
          text: '- Building your protoype'
        },
        {
          href: '/get-started/deploy-prototype',
          text: '- Deploying your prototype'
        }
      ]} />
      <span className="govuk-caption-m" style={{marginBottom: "1em"}}>Community resources</span>
        <NavigationMenu items={[
          {
            href: '/get-started/design-assets',
            text: 'Design assets'
          }
        ]} />
    </div>
    <div className="govuk-grid-column-three-quarters">
      <h1>
        <span className="caption">{section}</span>
        {longTitle}
      </h1>
      <p>PLACEHOLDER FOR CONTENT</p>



    </div>
  </div>
);

export default Page;

import { FC, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { AZNavigation } from '@hods/components';
import { A } from '@not-govuk/components';
import { menu } from '../../patterns';

export const title = 'Country index';
const description = 'Describes the address differences in different countries';
const section = 'Patterns';
const subsection = 'Ask users for addresses';

const Page: FC<PageProps> = ({ location }) => (
<div className="govuk-grid-row">
  <Helmet>
    <title>{subsection} {title.toLowerCase()} - Home Office Design System</title>
    <meta name="description" content={description} />
    <meta name="og:title" content={title} />
    <meta name="og:description" content={description} />
    <meta name="og:article:section" content={section} />
  </Helmet>

    <div className="govuk-grid-column-one-quarter">
      {menu}
    </div>

    <div className="govuk-grid-column-three-quarters">
      <h1>
        <span className="caption">{subsection}</span>
        {title}
      </h1>

      <AZNavigation id="a-z-nav" />

      <h2 className="a-z-header" id="a">A</h2>
      <p className="govuk-body"><a className="back-to-top" href="#a-z-nav">Back to top</a></p>
      <h2 className="a-z-header" id="b">B</h2>
      <p className="govuk-body"><a className="back-to-top" href="#a-z-nav">Back to top</a></p>
      <h2 className="a-z-header" id="c">C</h2>
      <p className="govuk-body"><a className="back-to-top" href="#a-z-nav">Back to top</a></p>
      <h2 className="a-z-header" id="d">D</h2>
      <p className="govuk-body"><a className="back-to-top" href="#a-z-nav">Back to top</a></p>
      <h2 className="a-z-header" id="e">E</h2>
      <p className="govuk-body"><a className="back-to-top" href="#a-z-nav">Back to top</a></p>
      <h2 className="a-z-header" id="f">F</h2>
      <p className="govuk-body"><a className="back-to-top" href="#a-z-nav">Back to top</a></p>
      <h2 className="a-z-header" id="g">G</h2>
      <p className="govuk-body"><a className="back-to-top" href="#a-z-nav">Back to top</a></p>
      <h2 className="a-z-header" id="h">H</h2>
      <p className="govuk-body"><a className="back-to-top" href="#a-z-nav">Back to top</a></p>
      <h2 className="a-z-header" id="i">I</h2>
      <p className="govuk-body"><a className="back-to-top" href="#a-z-nav">Back to top</a></p>
      <h2 className="a-z-header" id="j">J</h2>
      <p className="govuk-body"><a className="back-to-top" href="#a-z-nav">Back to top</a></p>
      <h2 className="a-z-header" id="k">K</h2>
      <p className="govuk-body"><a className="back-to-top" href="#a-z-nav">Back to top</a></p>
      <h2 className="a-z-header" id="l">L</h2>
      <p className="govuk-body"><a className="back-to-top" href="#a-z-nav">Back to top</a></p>
      <h2 className="a-z-header" id="m">M</h2>
      <p className="govuk-body"><a className="back-to-top" href="#a-z-nav">Back to top</a></p>
      <h2 className="a-z-header" id="n">N</h2>
      <p className="govuk-body"><a className="back-to-top" href="#a-z-nav">Back to top</a></p>
      <h2 className="a-z-header" id="o">O</h2>
      <p className="govuk-body"><a className="back-to-top" href="#a-z-nav">Back to top</a></p>
      <h2 className="a-z-header" id="p">P</h2>
      <p className="govuk-body"><a className="back-to-top" href="#a-z-nav">Back to top</a></p>
      <h2 className="a-z-header" id="q">Q</h2>
      <p className="govuk-body"><a className="back-to-top" href="#a-z-nav">Back to top</a></p>
      <h2 className="a-z-header" id="r">R</h2>
      <p className="govuk-body"><a className="back-to-top" href="#a-z-nav">Back to top</a></p>
      <h2 className="a-z-header" id="s">S</h2>
      <p className="govuk-body"><a className="back-to-top" href="#a-z-nav">Back to top</a></p>
      <h2 className="a-z-header" id="t">T</h2>
      <p className="govuk-body"><a className="back-to-top" href="#a-z-nav">Back to top</a></p>
      <h2 className="a-z-header" id="u">U</h2>
      <p className="govuk-body"><a className="back-to-top" href="#a-z-nav">Back to top</a></p>
      <h2 className="a-z-header" id="v">V</h2>
      <p className="govuk-body"><a className="back-to-top" href="#a-z-nav">Back to top</a></p>
      <h2 className="a-z-header" id="w">W</h2>
      <p className="govuk-body"><a className="back-to-top" href="#a-z-nav">Back to top</a></p>
      <h2 className="a-z-header" id="x">X</h2>
      <p className="govuk-body"><a className="back-to-top" href="#a-z-nav">Back to top</a></p>
      <h2 className="a-z-header" id="y">Y</h2>
      <p className="govuk-body"><a className="back-to-top" href="#a-z-nav">Back to top</a></p>
      <h2 className="a-z-header" id="z">Z</h2>
      <p className="govuk-body"><a className="back-to-top" href="#a-z-nav">Back to top</a></p>

      <h2 className="govuk-heading-l">Research</h2>
      <p className="govuk-body">This evidence is from the apply for a passport service.</p>

      <h2 className="govuk-heading-l">Help us improve this pattern</h2>
      <p className="govuk-body">This pattern needs improving. We need evidence about:</p>
      <ul className="govuk-list govuk-list--bullet">
        <li>the countries not listed</li>
        <li>how to keep this information current</li>
      </ul>

      <p className="govuk-body">To contribute, add your thoughts and research findings to our <A href="https://github.com/UKHomeOffice/design-system/discussions/580">GitHub discussion</A>, or follow our <A href="/contribute">contribute guidance</A>.</p>
    </div>
</div>

);

export default Page;


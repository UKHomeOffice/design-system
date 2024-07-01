import { FC, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { AZNavigation } from '@hods/components';
import { A } from '@not-govuk/components';
import { menu } from '../../patterns';

export const title = 'Country list';
const description = 'Describes the address differences in different countries';
const section = 'Patterns';
const subsection = 'Ask users for an address outside the UK';

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

      <p className="govuk-body">The address needs of some territories may be different from the <a href="https://www.gov.uk/government/publications/geographical-names-and-information">FCDO country list</a> or delivery company data.</p>

      <AZNavigation id="a-z-nav" />

      <h2 className="a-z-header" id="a">A</h2>
      <p className="govuk-body"><a className="back-to-top" href="#a-z-nav">Back to top</a></p>
      <h2 className="a-z-header" id="b">B</h2>
      <h3 id="bermuda">Bermuda</h3>
      <p className="govuk-body">Sovereign state: United Kingdom</p>
      <p className="govuk-body">Bermuda has postal codes, which are encouraged to be used.</p>
      <p className="govuk-body">Some delivery companies do not accept addresses in Bermuda with postal codes.</p>
      <h3 id="bonaire">Bonaire, Sint Eustatius and Saba</h3>
      <p className="govuk-body">Sovereign state: the Netherlands in the FCDO country list</p>
      <p className="govuk-body">Some delivery companies use a different country code for the Netherlands and each of:</p>
      <ul className="govuk-list govuk-list--bullet">
        <li>Bonaire</li>
        <li>Sint Eustatius</li>
        <li>Saba</li>
      </ul>
      <p className="govuk-body"><a className="back-to-top" href="#a-z-nav">Back to top</a></p>
      <h2 className="a-z-header" id="c">C</h2>
      <h3 id="canary-islands">Canary Islands</h3>
      <p className="govuk-body">Sovereign state: Spain in the FCDO country list.</p>
      <p className="govuk-body">Some delivery companies use a different country code for Spain and the Canary Islands.</p>
      <h3 id="commonwealth-of-the-northern-mariana-islands">Commonwealth of the Northern Mariana Isalnds</h3>
      <p className="govuk-body">Sovereign state: the United States of America in the FCDO country list.</p>
      <p className="govuk-body">Also known as: Northern Mariana Islands</p>
      <p className="govuk-body">Some delivery companies use a different country code for the USA and the Northern Mariana Islands</p>
      <p className="govuk-body">Zip code range: 96950 to 96952</p>
      <h3 id="cook-islands">Cook Islands</h3>
      <p className="govuk-body">Sovereign state: New Zealand in the FCDO country list.</p>
      <p className="govuk-body">The Cook Islands do not use postal codes, but New Zealand does.</p>
      <h3 id="curacao">Curacao</h3>
      <p className="govuk-body">Sovereign state: the Netherlands in the FCDO country list.</p>
      <p className="govuk-body">Some delivery copmanies use a different country code for the Netherlands and Curacao.</p>
      <p className="govuk-body"><a className="back-to-top" href="#a-z-nav">Back to top</a></p>
      <h2 className="a-z-header" id="d">D</h2>
      <p className="govuk-body"><a className="back-to-top" href="#a-z-nav">Back to top</a></p>
      <h2 className="a-z-header" id="e">E</h2>
      <p className="govuk-body"><a className="back-to-top" href="#a-z-nav">Back to top</a></p>
      <h2 className="a-z-header" id="f">F</h2>
      <h3 id="faroe-islands">Faroe Islands</h3>
      <p className="govuk-body">Sovereign state: Denmark in the FCDO country list.</p>
      <p className="govuk-body">Faroe Islands postal codes start 'FO', followed by 3 digits. This is a different format to Denmark postal codes.</p>
      <p className="govuk-body"><a className="back-to-top" href="#a-z-nav">Back to top</a></p>
      <h2 className="a-z-header" id="g">G</h2>
      <h3 id="greenland">Greenland</h3>
      <p className="govuk-body">Sovereign state: Denmark in the FCDO country list.</p>
      <p className="govuk-body">Greenland postal codes start 'GL-39', followed by 2 digits. This is consistent with Denmark postal codes.</p>
      <h3 id="guam">Guam</h3>
      <p className="govuk-body">Sovereign state: the United States in the FCDO country list.</p>
      <p className="govuk-body">Some delivery companies use a different country code for the United States and Guam.</p>
      <p className="govuk-body">Zip code range: 96910 to 96932</p>
      <p className="govuk-body"><a className="back-to-top" href="#a-z-nav">Back to top</a></p>
      <h2 className="a-z-header" id="h">H</h2>
      <p className="govuk-body"><a className="back-to-top" href="#a-z-nav">Back to top</a></p>
      <h2 className="a-z-header" id="i">I</h2>
      <p className="govuk-body"><a className="back-to-top" href="#a-z-nav">Back to top</a></p>
      <h2 className="a-z-header" id="j">J</h2>
      <p className="govuk-body"><a className="back-to-top" href="#a-z-nav">Back to top</a></p>
      <h2 className="a-z-header" id="k">K</h2>
      <h3 id="kosovo">Kosovo</h3>
      <p className="govuk-body">In the FCDO country list.</p>
      <p className="govuk-body">Some delivery companies use a different country code from the one in the FCDO country list.</p>
      <p className="govuk-body"><a className="back-to-top" href="#a-z-nav">Back to top</a></p>
      <h2 className="a-z-header" id="l">L</h2>
      <p className="govuk-body"><a className="back-to-top" href="#a-z-nav">Back to top</a></p>
      <h2 className="a-z-header" id="m">M</h2>
      <p className="govuk-body"><a className="back-to-top" href="#a-z-nav">Back to top</a></p>
      <h2 className="a-z-header" id="n">N</h2>
      <h3 id="niue">Niue</h3>
      <p className="govuk-body">Sovereign state: New Zealand in the FCDO country list.</p>
      <p className="govuk-body">Niue has one postal code for the whole island, 9974. This is consistent with the New Zealand postal code format.</p>
      <p className="govuk-body">Some delivery companies do not recogonise the Niue postal code.</p>
      <p className="govuk-body"><a className="back-to-top" href="#a-z-nav">Back to top</a></p>
      <h2 className="a-z-header" id="o">O</h2>
      <p className="govuk-body"><a className="back-to-top" href="#a-z-nav">Back to top</a></p>
      <h2 className="a-z-header" id="p">P</h2>
      <h3 id="puerto-rico">Puerto Rico</h3>
      <p className="govuk-body">Sovereign state: the United States in the FCDO country list.</p>
      <p className="govuk-body">Some deilvery companies use a different country code for the United States and Puerto Rico</p>
      <p className="govuk-body">Zip code range: 00600 to 00799 and 0900 to 00999.</p>
      <p className="govuk-body"><a className="back-to-top" href="#a-z-nav">Back to top</a></p>
      <h2 className="a-z-header" id="q">Q</h2>
      <p className="govuk-body"><a className="back-to-top" href="#a-z-nav">Back to top</a></p>
      <h2 className="a-z-header" id="r">R</h2>
      <p className="govuk-body"><a className="back-to-top" href="#a-z-nav">Back to top</a></p>
      <h2 className="a-z-header" id="s">S</h2>
      <h3 id='saint-barthelemy'>Saint Barthélemy</h3>
      <p className="govuk-body">Sovereign state: France in the FCDO country list.</p>
      <p className="govuk-body">Some delivery companies use a different country code for France and Saint Barthélemy.</p>
      <h3 id="saint-pierre-and-miquelon">Saint Pierre and Miquelon</h3>
      <p className="govuk-body">Sovereign state: France in the FCDO country list.</p>
      <p className="govuk-body">Some delivery companies do not use a separate country code.</p>
      <h3 id="sint-maarten">Saint Martin</h3>
      <p className="govuk-body">Sovereign state: France in the FCDO country list.</p>
      <p className="govuk-body">It is the northern part of an island, where the southern part is <a href="#sint-maarten">Sint Maarten</a>.</p>
      <p className="govuk-body">Some delivery companies use the same country code for both Sint Maarten and Saint Martin. They may also only use one of Sint Maarten or Saint Martin.</p>
      <p className="govuk-body">Saint Martin has one postal code: 97150.</p>
      <h3 id="sint-maarten">Sint Maarten</h3>
      <p className="govuk-body">Sovereign state: the Netherlands in the FCDO country list.</p>
      <p className="govuk-body">It is the southern part of an island, where the northern part is <a href="#saint-martin">Saint Martin</a>.</p>
      <p className="govuk-body">Some delivery companies use the same country code for both Sint Maarten and Saint Martin. They may also only use one of Sint Maarten or Saint Martin.</p>
      <h3 id="saint-kitts-and-nevis">Saint Kitts and Nevis</h3>
      <p className="govuk-body">In the FCDO country list.</p>
      <p className="govuk-body">This country is two islands. Some delivery companies may use a country code for Saint Kitts, and another for Saint Nevis.</p>
      <p className="govuk-body"><a className="back-to-top" href="#a-z-nav">Back to top</a></p>
      <h2 className="a-z-header" id="t">T</h2>
      <p className="govuk-body"><a className="back-to-top" href="#a-z-nav">Back to top</a></p>
      <h2 className="a-z-header" id="u">U</h2>
      <p className="govuk-body"><a className="back-to-top" href="#a-z-nav">Back to top</a></p>
      <h2 className="a-z-header" id="v">V</h2>
      <h3 id="virgin-islands-of-the-united-states">Virgin islands of the United States</h3>
      <p className="govuk-body">Sovereign state: the United States in the FCDO country list.</p>
      <p className="govuk-body">Some delivery companies may use a different country code for the Unites States and the Virgin Islands of the United States.</p>
      <p className="govuk-body"><a className="back-to-top" href="#a-z-nav">Back to top</a></p>
      <h2 className="a-z-header" id="w">W</h2>
      <h3 id="wallis-and-futuna">Wallis and Futuna</h3>
      <p className="govuk-body">Sovereign state: France in the FCDO country list.</p>
      <p className="govuk-body">Some delivery companies may use a different country code for France and Wallis and Futuna.</p>
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


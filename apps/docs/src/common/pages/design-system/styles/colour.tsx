import { FC, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A } from '@not-govuk/components';
import config from '../../../config';

import { SubsectionWrap, title as subsection } from './';

const siteTitle = config.title;

export const title = 'Colour';
const longTitle = title;
const description = 'Always use the Home Office colour palette';

import '../../../../../assets/colour.scss';

const colour = (colour: string, whiteText: boolean = false) => ({
  backgroundColor: colour,
  color: (
    whiteText
    ? 'white'
    : undefined
  ),
  border: '1px solid #CBCBCB'
});

const Page: FC<PageProps> = ({}) => (
  <SubsectionWrap>
    <Helmet>
      <title>{title} - {siteTitle}</title>
      <meta name="description" content={description} />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={description} />
    </Helmet>
    <h1>
      <span className="caption">{subsection}</span>
      {longTitle}
    </h1>

    <p className="govuk-body">Always use the Home Office colour palette when you are designing and building internal services and products. For public facing and transactional sites use the <A href="https://design-system.service.gov.uk/styles/colour/">GOV.UK colour palette</A>.</p>
    <p className="govuk-body">Ask <A href="mailto:ucdops@homeoffice.gov.uk">ucdops@homeoffice.gov.uk</A> if you have any questions.</p>

    {/* PRIMARY  */}

    <section className="colour-swatch-wrapper">
      <h2 className="govuk-heading-l" style={{ marginTop: "1.5em" }}>Main colours</h2>

      <h3 className="govuk-heading-m" style={{ marginTop: "1.5em", marginBottom: "0.5em" }} >Brand colour</h3>
      <div className="colour-swatch">
        <span className="app-swatch hods-colour-purple"></span>
        <div className="hex">
          #732282
        </div>
        <div className="colour-info">
          <p>Purple is the Home Office's brand colour. This doesn't mean you should use it as the dominant colour in a digital interface.</p>

          <p>Overusing the purple can make content hard to read on screen, particularly on services that are designed to be used for long periods of time.</p>

          <p>Home Office purple works best in digital interfaces when it's just used for the Home Office logo and sparingly used as a keyline or accent.</p>
        </div>
      </div>

      <h3 className="govuk-heading-m" style={{ marginTop: "1.5em", marginBottom: "0.5em" }}>Page background</h3>
      <div className="colour-swatch">
        <span className="app-swatch" style={{ backgroundColor: "#f5f5f5", border: "1px solid #CBCBCB" }}></span>
        <div className="hex">
          #f5f5f5
        </div>
        <div className="colour-info">
          <p>
            Use light grey as the page background colour on internal services to minimise eye strain caused by high-contrast user interfaces. It's also better for readability for those with dyslexia.
          </p>
        </div>
      </div>

      <h3 className="govuk-heading-m" style={{ marginTop: "1.5em", marginBottom: "0.5em" }}>Border</h3>
      <div className="colour-swatch">
        <span className="app-swatch" style={{ backgroundColor: "#cbcbcb", border: "1px solid #f1f1f1" }}></span>
        <div className="hex">
          #cbcbcb
        </div>
        <div className="colour-info">
          <p>
            Use mid-grey for borders and to help define elements where needed.
          </p>
        </div>
      </div>

      <h3 className="govuk-heading-m" style={{ marginTop: "1.5em", marginBottom: "0.5em" }}>Text and links</h3>
      <p className="govuk-body">Use the <A href="https://design-system.service.gov.uk/styles/colour/">GOV.UK colours</A> for text and links as these are accessible with the Home Office page background.</p>
    </section>

    {/* SECONDARY */}

    <section className="colour-swatch-wrapper">
      <h2 className="govuk-heading-l" style={{ marginTop: "2em" }}>Extra colours</h2>
      <p>You can use the <A href="https://design-system.service.gov.uk/styles/colour/">GOV.UK colour palette</A> alongside the main Home Office colours. Use them to create graphs and supporting materials. If you need to use tints of the palette, use either 25% or 50%.</p>
    </section>

    <h2 className="govuk-heading-l" style={{ marginTop: "2em" }}>Accessibility</h2>
    <p>There should be enough difference (contrast) between a background and the foreground content so that user can easily differentiate the two. See the <A href="/accessibility/colour-and-contrast">colour and contrast guidance</A> for more information.</p>
    <p>If your service uses colour, let us know of any insights you have on accessibility considerations.</p>

    {/* BACKGROUND COMBINATIONS */}

    <section className="colour-swatch-wrapper">
      <h3 className="govuk-heading-m" style={{ marginTop: "1.5em", marginBottom: "0.5em" }}>Accessible text and background combinations</h3>
      <p>Below are the colour combinations that pass.</p>


      <div className="govuk-grid-row">

        <div className="govuk-grid-column-one-half">

          <div className="colour-swatch">
            <span className="app-swatch" style={{ backgroundColor: "#0b0c0c" }}>
              <span style={{ color: "#ffffff" }}>A</span>
            </span>
            <div className="colour-info">
              Background: #0b0c0c<br />
              Foreground: #ffffff
            </div>
          </div>

          <div className="colour-swatch">
            <span className="app-swatch" style={{ backgroundColor: "#ffffff", border: "1px solid #cbcbcb" }}>
              <span style={{ color: "#0b0c0c" }}>A</span>
            </span>
            <div className="colour-info">
              Background: #ffffff<br />
              Foreground: #0b0c0c
            </div>
          </div>

          <div className="colour-swatch">
            <span className="app-swatch" style={{ backgroundColor: "#cbcbcb", border: "1px solid #cbcbcb" }}>
              <span style={{ color: "#0b0c0c" }}>A</span>
            </span>
            <div className="colour-info">
              Background: #cbcbcb<br />
              Foreground: #0b0c0c
            </div>
          </div>

          <div className="colour-swatch">
            <span className="app-swatch" style={{ backgroundColor: "#00703c" }}>
              <span style={{ color: "#ffffff" }}>A</span>
            </span>
            <div className="colour-info">
              Background: #00703c<br />
              Foreground: #ffffff
            </div>
          </div>

          <div className="colour-swatch">
            <span className="app-swatch" style={{ backgroundColor: "#1d70b8" }}>
              <span style={{ color: "#ffffff" }}>A</span>
            </span>
            <div className="colour-info">
              Background: #1d70b8<br />
              Foreground: #ffffff
            </div>
          </div>
        </div>
      </div>
    </section>
  </SubsectionWrap>
);

export default Page;

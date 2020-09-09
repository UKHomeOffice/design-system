import { FC, Fragment, createElement as h } from 'react';
import { PageProps } from '@not-govuk/app-composer';
import { A } from '@not-govuk/components';

import '../../../../assets/colour.scss';

const colour = (colour: string, whiteText: boolean = false) => ({
  backgroundColor: colour,
  color: (
    whiteText
    ? 'white'
    : undefined
  ),
  border: '1px solid #CBCBCB'
});

const Page: FC<PageProps> = ({ location }) => (
  <div className="govuk-grid-row">
    <div className="govuk-grid-column-one-third">
      <aside>
        <h2>Styles</h2>
        <ul className="plain">
          <li><A href="/styles/colour">Colour</A></li>
          <li><A href="/styles/images">Images</A></li>
          <li><A href="/styles/templates">Page templates</A></li>
          <li><A href="/styles/typography">Typography</A></li>
        </ul>
      </aside>
    </div>
    <div className="govuk-grid-column-two-thirds">
      <h1>
        <span className="caption">Styles</span>
        Colour
      </h1>
      <p>
       Colour is a powerful means of drawing a user’s attention or giving focus to an element. Colour must be used with care and discretion, backed up by usability and accessibility testing. In the Home Office design system we use colour to draw attention to actions, links and to the Home Office design style. It is never used for ‘decoration’.
      </p>
      <p>Always ask the central design team (<A href="mailto:designops@digital.homeoffice.gov.uk">designops@digital.homeoffice.gov.uk</A>) for advice.</p>
      <section className="colour-swatch-wrapper">
        <h2 className="govuk-heading-m">Primary colours</h2>

        <div className="colour-swatch">
          <span className="app-swatch" style={colour('#8F23B3')}></span>
          <div className="hex">
            #8F23B3
          </div>
          <div className="colour-info">
            Purple is the Home Office’s brand colour. This doesn’t mean it should be used as the dominant colour in a digital interface. Overuse of the purple can make content hard to read on screen, particularly on services that are designed to be used for long periods of time. Home Office purple works best in digital interfaces when reserved for the Home Office logo and sparingly used as a keyline or accent.
          </div>
        </div>

        <div className="colour-swatch">
          <span className="app-swatch" style={colour('#0b0c0c')}></span>
          <div className="hex">
            #0B0C0C
          </div>
          <div className="colour-info">
            Black is used for headings and body content.
          </div>
        </div>

        <div className="colour-swatch">
          <span className="app-swatch" style={colour('#F1F1F1')}></span>
          <div className="hex">
            #F1F1F1
          </div>
          <div className="colour-info">
            Light grey is used as the content background colour on internal services to minimise eye strain caused by high contrast user interfaces. It is also supports readability for those who have dyslexia.
          </div>
        </div>

        <div className="colour-swatch">
          <span className="app-swatch" style={colour('#CBCBCB')}></span>
          <div className="hex">
            #CBCBCB
          </div>
          <div className="colour-info">
            Border colour is used for borders and to help define elements where needed.
          </div>
        </div>
      </section>

      <section>
        <h2 className="govuk-heading-m">Secondary colours</h2>
        <p>Guidance on the use of our secondary colours is in development. In the meantime, check with the central design team (<A href="mailto:designops@digital.homeoffice.gov.uk">designops@digital.homeoffice.gov.uk</A>) for advice.</p>
      </section>

      <section className="colour-swatch-wrapper">
        <h2 className="govuk-heading-m">Accessibility</h2>
        <p>Text and background colors need to meet the minimum contrast ratios specified by <A href="https://www.w3.org/TR/WCAG21/#contrast-enhanced">Web Content Accessibility Guidelines (WCAG) 2.1</A>.</p>

        <h3 className=" heading-small" style={{ marginTop: '30px' }}>Accessible text and background combinations</h3>

        <div className="colour-swatch">
          <span className="app-swatch" style={colour('#0B0C0C', true)}>A</span>
          <div className="colour-info">
            Background: #0B0C0C<br />
            Foreground: #FFF
          </div>
        </div>

        <div className="colour-swatch">
          <span className="app-swatch" style={colour('#F1F1F1')}>A</span>
          <div className="colour-info">
            Background: #F1F1F1<br />
            Foreground: #0B0C0C
          </div>
        </div>

        <div className="colour-swatch">
          <span className="app-swatch" style={colour('#00823B', true)}>A</span>
          <div className="colour-info">
            Background: #00823B<br />
            Foreground: #FFF
          </div>
        </div>

        <div className="colour-swatch">
          <span className="app-swatch" style={colour('#005EA5', true)}>A</span>
          <div className="colour-info">
            Background: #005EA5<br />
            Foreground: #FFF
          </div>
        </div>

        <div className="colour-swatch">
          <span className="app-swatch" style={colour('#3B3B3B', true)}>A</span>
          <div className="colour-info">
            Background: #3B3B3B<br />
            Foreground: #FFF
          </div>
        </div>

        <div className="colour-swatch">
          <span className="app-swatch" style={colour('#CBCBCB')}>A</span>
          <div className="colour-info">
            Background: #CBCBCB<br />
            Foreground: #0B0C0C
          </div>
        </div>

      </section>

      <section>
        <h2 className="govuk-heading-m">Example usage of Home Office purple</h2>
        <p>Purple can be used sparingly in keylines and separators.</p>

        <div className="example example-images">
          <h3 className="visually-hidden">Card components</h3>
          <div className="govuk-grid-row">

            <div className="govuk-grid-column-one-third">
              <div className="govuk-card govuk-card--contained">
                <div className="govuk-card__content">
                  <h3 className="govuk-heading-s">Card heading</h3>
                  <p>An overview of the content that exists behind this card. For example a full page detailing the card summary.</p>
                  <div className="govuk-card__actions">
                    <A href="#0">Perform this action</A>
                  </div>
                </div>
              </div>
            </div>

            <div className="govuk-grid-column-one-third">
              <div className="govuk-card govuk-card--contained">
                <div className="govuk-card__content">
                  <h3 className="govuk-heading-s">Card heading</h3>
                  <p>An overview of the content that exists behind this card. For example a full page detailing the card summary.</p>
                  <div className="govuk-card__actions">
                    <A href="#0">Perform this action</A>
                  </div>
                </div>
              </div>
            </div>

            <div className="govuk-grid-column-one-third">
              <div className="govuk-card govuk-card--contained">
                <div className="govuk-card__content">
                  <h3 className="govuk-heading-s">Card heading</h3>
                  <p>An overview of the content that exists behind this card. For example a full page detailing the card summary.</p>
                  <div className="govuk-card__actions">
                    <A href="#0">Perform this action</A>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="example example-images">
          <h3 className="visually-hidden">Example content page with grid</h3>
          <div className="grid-row" >
            <div className="govuk-grid-column-two-thirds">
              <h2 className="govuk-heading-m" style={{ marginTop: 0, marginBottom: '20px' }}>Casework service</h2>
              <p>Example content exaplaining what the internal service is.</p>
              <p>More details about the service. A short overview of the content that exists in this service. For example a full page detailing the service.</p>
            </div>

            <div className="govuk-grid-column-one-third">
              <aside>
                <h4 className="heading-small" style={{ marginTop: '10px', marginBottom: '10px' }}>Related content</h4>
                <ul style={{ fontSize: '15px' }}>
                  <li style={{ paddingBottom: '6px' }}><A href="#0">Help using the service</A></li>
                  <li style={{ paddingBottom: '6px' }}><A href="#0">Messages</A></li>
                  <li style={{ paddingBottom: '6px' }}><A href="#0">Recent activity</A></li>
                </ul>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
);

export default Page;
export const title = 'Styles';

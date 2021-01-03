import { FC, Fragment, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
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
    <Helmet>
      <title>Colour - Home Office Design System</title>
      <meta name="og:article:section" content="Styles" />
    </Helmet>
    <div className="govuk-grid-column-one-third">
      <aside>
        <h2>Styles</h2>
        <ul className="plain">
          <li><A href="/styles/colour">Colour</A></li>
          <li><A href="/styles/images">Images</A></li>
          <li><A href="/styles/typography">Typography</A></li>
        </ul>
      </aside>
    </div>

    <div className="govuk-grid-column-two-thirds">

      <span className="govuk-caption-xl">Styles</span>
      <h1 className="heading-section">Colour</h1>

      <p className="govuk-body">Colour is a powerful means of drawing a user’s attention or giving focus to an element. Colour must be used with care and discretion, backed up by usability and accessibility testing. In the Home Office design system we use colour to draw attention to actions, links and to the Home Office design style. It is never used for ‘decoration’.</p>
      <p className="govuk-body">Always ask the central design team (<A href="mailto:designops@digital.homeoffice.gov.uk">designops@digital.homeoffice.gov.uk</A>) for advice.</p>

      {/* PRIMARY  */}

      <section className="colour-swatch-wrapper">
        <h2 className="govuk-heading-l" style={{marginTop: "1.5em"}}>Primary colours</h2>

        <h3 className="govuk-heading-m" style={{marginTop: "1.5em", marginBottom: "0.5em"}} >Text</h3>  
        <div className="colour-swatch">
          <span className="app-swatch" style={{backgroundColor: "#0b0c0c"}}></span>
          <div className="hex">
            #0B0C0C
          </div>
          <div className="colour-info">
            Black is used for headings and body content
          </div>
        </div>

        <div className="colour-swatch">
            <span className="app-swatch" style={{backgroundColor: "#4E5455"}}></span>
            <div className="hex">
              #4E5455
            </div>
            <div className="colour-info">
              Secondary text colour
            </div>
        </div>

        <h3 className="govuk-heading-m" style={{marginTop: "1.5em", marginBottom: "0.5em"}}>Links</h3> 
        <div className="colour-swatch">
            <span className="app-swatch" style={{backgroundColor: "#1D70B8"}}></span>
            <div className="hex">
              #1D70B8
            </div>
            <div className="colour-info">
              Link colour
            </div>
        </div>

        <div className="colour-swatch">
            <span className="app-swatch" style={{backgroundColor: "#003078"}}></span>
            <div className="hex">
              #003078
            </div>
            <div className="colour-info">
              Link hover colour
            </div>
        </div>

        <div className="colour-swatch">
            <span className="app-swatch" style={{backgroundColor: "#4C2C92"}}></span>
            <div className="hex">
              #4C2C92
            </div>
            <div className="colour-info">
              Link visited colour
            </div>
        </div>

        <div className="colour-swatch">
            <span className="app-swatch" style={{backgroundColor: "#0B0C0C"}}></span>
            <div className="hex">
              #0B0C0C
            </div>
            <div className="colour-info">
              Link active colour
            </div>
        </div>

        <h3 className="govuk-heading-m" style={{marginTop: "1.5em", marginBottom: "0.5em"}}>Content background</h3> 
        <div className="colour-swatch">
          <span className="app-swatch" style={{backgroundColor: "#F1F1F1", border: "1px solid #CBCBCB"}}></span>
          <div className="hex">
            #F1F1F1
          </div>
          <div className="colour-info">
            Light grey is used as the content background colour on internal services to minimise eye strain caused by high contrast user interfaces. It also supports readability for those who have dyslexia. Only the primary text and link colours can be used on this background
          </div>
        </div>

        <h3 className="govuk-heading-m" style={{marginTop: "1.5em", marginBottom: "0.5em"}}>Border</h3> 
        <div className="colour-swatch">
          <span className="app-swatch" style={{backgroundColor: "#CBCBCB", border: "1px solid #F1F1F1"}}></span>
          <div className="hex">
            #CBCBCB
          </div>
          <div className="colour-info">
            This colour is used for borders and to help define elements where needed.
          </div>
        </div>

        <div className="colour-swatch">
            <span className="app-swatch" style={{backgroundColor: "#0B0C0C"}}></span>
            <div className="hex">
              #0B0C0C
            </div>
            <div className="colour-info">
              Input border colour
            </div>
          </div>

        <h3 className="govuk-heading-m" style={{marginTop: "1.5em", marginBottom: "0.5em"}}>Focus state</h3> 
        <div className="colour-swatch">
          <span className="app-swatch" style={{backgroundColor: "#FFDD00"}}></span>
          <div className="hex">
            #FFDD00
          </div>
          <div className="colour-info">
            Focus colour    
          </div>
        </div>

        <div className="colour-swatch">
            <span className="app-swatch" style={{backgroundColor: "#0B0C0C"}}></span>
            <div className="hex">
              #0B0C0C
            </div>
            <div className="colour-info">
              Focus text colour    
            </div>
          </div>

        <h3 className="govuk-heading-m" style={{marginTop: "1.5em", marginBottom: "0.5em"}}>Error state</h3> 
        <div className="colour-swatch">
          <span className="app-swatch" style={{backgroundColor: "#D4351C"}}></span>
          <div className="hex">
            #D4351C
          </div>
          <div className="colour-info">
            Error colour          
          </div>
        </div>

        <h3 className="govuk-heading-m" style={{marginTop: "1.5em", marginBottom: "0.5em"}}>Brand colour</h3> 
        <div className="colour-swatch">
          <span className="app-swatch" style={{backgroundColor: "#8F23B3"}}></span>
          <div className="hex">
            #8F23B3
          </div>
          <div className="colour-info">
            Purple is the Home Office’s brand colour. This doesn’t mean it should be used as the dominant colour in a digital interface. Overuse of the purple can make contenthard to read on screen, particularly on services that are designed to be used for long periods of time. Home Office purple works best when reserved for the Home Office logo or sparingly used as a keyline or accent. 
          </div>
        </div>
      </section>

      {/* SECONDARY */}

      <section className="colour-swatch-wrapper">
        <h2 className="govuk-heading-l" style={{marginTop: "2em"}}>Secondary colours</h2>
        <p>Use these colours for graphs and supporting material. Check with the central design team (designops@digital.homeoffice.gov.uk) for advice. If you need to use tints of this palette, use either 25% or 50%.</p>
      
        <div className="colour-swatch">
          <span className="app-swatch" style={{backgroundColor: "#882345"}}></span>
          <div className="hex">
            #882345
          </div>
          <div className="colour-info">
            Maroon
          </div>
        </div>

        <div className="colour-swatch">
            <span className="app-swatch" style={{backgroundColor: "#D4351C"}}></span>
            <div className="hex">
              #D4351C
            </div>
            <div className="colour-info">
              Red
            </div>
        </div>

        <div className="colour-swatch">
            <span className="app-swatch" style={{backgroundColor: "#EA5B5D"}}></span>
            <div className="hex">
              #EA5B5D
            </div>
            <div className="colour-info">
              Pink
            </div>
        </div>

        <div className="colour-swatch">
            <span className="app-swatch" style={{backgroundColor: "#F39728"}}></span>
            <div className="hex">
              #EE763B
            </div>
            <div className="colour-info">
              Orange
            </div>
        </div>

        <div className="colour-swatch">
            <span className="app-swatch" style={{backgroundColor: "#FCEA1D"}}></span>
            <div className="hex">
              #FCEA1D0
            </div>
            <div className="colour-info">
              Yellow
            </div>
        </div>

        <div className="colour-swatch">
            <span className="app-swatch" style={{backgroundColor: "#3FA435"}}></span>
            <div className="hex">
              #3FA435
            </div>
            <div className="colour-info">
              Green
            </div>
        </div>

        <div className="colour-swatch">
            <span className="app-swatch" style={{backgroundColor: "#9A9D1F"}}></span>
            <div className="hex">
              #9A9D1F
            </div>
            <div className="colour-info">
              Olive
            </div>
        </div>

        <div className="colour-swatch">
            <span className="app-swatch" style={{backgroundColor: "#00747A"}}></span>
            <div className="hex">
              #00747A
            </div>
            <div className="colour-info">
              Teal
            </div>
        </div>

        <div className="colour-swatch">
            <span className="app-swatch" style={{backgroundColor: "#002664"}}></span>
            <div className="hex">
              #002664
            </div>
            <div className="colour-info">
              Dark blue
            </div>
        </div>

        <div className="colour-swatch">
            <span className="app-swatch" style={{backgroundColor: "#045EA4"}}></span>
            <div className="hex">
              #045EA4
            </div>
            <div className="colour-info">
              Blue
            </div>
        </div>

        <div className="colour-swatch">
            <span className="app-swatch" style={{backgroundColor: "#1EB8D7"}}></span>
            <div className="hex">
              #1EB8D7
            </div>
            <div className="colour-info">
              Light blue
            </div>
        </div>

        <div className="colour-swatch">
            <span className="app-swatch" style={{backgroundColor: "#858585"}}></span>
            <div className="hex">
              #858585
            </div>
            <div className="colour-info">
              Dark grey
            </div>
        </div>

        <div className="colour-swatch">
            <span className="app-swatch" style={{backgroundColor: "#B5B6B6"}}></span>
            <div className="hex">
              #B5B6B6
            </div>
            <div className="colour-info">
              Grey
            </div>
        </div>

        <div className="colour-swatch">
            <span className="app-swatch" style={{backgroundColor: "#E6E6E6"}}></span>
            <div className="hex">
              #E6E6E6
            </div>
            <div className="colour-info">
              Light grey
            </div>
        </div>

        <div className="colour-swatch">
            <span className="app-swatch" style={{backgroundColor: "#F8F8F7", border: "1px solid #CBCBCB"}}></span>
            <div className="hex">
              #F8F8F7
            </div>
            <div className="colour-info">
              Off white
            </div>
        </div>      
      </section>

      {/* ACCESSIBILITY */}

      <section className="colour-swatch-wrapper">
        <h2 className="govuk-heading-l" style={{marginTop: "2em"}}>Accessibility</h2>
        <p>Text and background colours need to meet the minimum AA contrast ratios specified by <A href="https://www.w3.org/TR/WCAG21/#contrast-enhanced">Web Content Accessibility Guidelines (WCAG) 2.1</A>.</p>
        <p>All of our secondary colours were assessed in a tool built to test colour contrast compliance with the WCAG. These are the colours combinations that passed.</p>
      </section>

      {/* BACKGROUND COMBINATIONS */}
      
      <section className="colour-swatch-wrapper">
        <h2 className=" heading-small" style={{marginTop: "2em"}}>Accessible text and background combinations</h2>
        <p>Colour alone should never be used to convey information. You must also describe the information you are trying to convey.</p>
        
        
        <div className="govuk-grid-row">

          <div className="govuk-grid-column-one-half">

            <div className="colour-swatch">
              <span className="app-swatch" style={{backgroundColor: "#FCEA1D"}}>
                <span style={{color: "#0B0C0C"}}>A</span>
              </span>
              <div className="colour-info">
                Background: #FCEA1D<br />
                Foreground: #0B0C0C
              </div>
            </div>

            <div className="colour-swatch">
              <span className="app-swatch" style={{backgroundColor: "#F8F8F7", border: "1px solid #CBCBCB"}}>
                <span style={{color: "#0B0C0C"}}>A</span>
              </span>
              <div className="colour-info">
                Background: #F8F8F7<br />
                Foreground: #0B0C0C
              </div>
            </div>

            <div className="colour-swatch">
              <span className="app-swatch" style={{backgroundColor: "#E6E6E6", border: "1px solid #CBCBCB"}}>
                <span style={{color: "#0B0C0C"}}>A</span>
              </span>
              <div className="colour-info">
                Background: #E6E6E6<br />
                Foreground: #0B0C0C
              </div>
            </div>

            <div className="colour-swatch">
              <span className="app-swatch" style={{backgroundColor: "#3FA435"}}>
                <span style={{color: "#FFFFFF"}}>A</span>
              </span>
              <div className="colour-info">
                Background: #3FA435<br />
                Foreground: #FFFFFF
              </div>
            </div>

            <div className="colour-swatch">
              <span className="app-swatch" style={{backgroundColor: "#00747A"}}>
                <span style={{color: "#FFFFFF"}}>A</span>
              </span>
              <div className="colour-info">
                Background: #00747A<br />
                Foreground: #FFFFFF
              </div>
            </div>
          </div>

          <div className="govuk-grid-column-one-half">
            <div className="colour-swatch">
                <span className="app-swatch" style={{backgroundColor: "#1D70B8"}}>
                  <span style={{color: "#FFFFFF"}}>A</span>
                </span>
                <div className="colour-info">
                  Background: #1D70B8<br />
                  Foreground: #FFFFFF
                </div>
              </div>
      
              <div className="colour-swatch">
                <span className="app-swatch" style={{backgroundColor: "#0B0C0C"}}>
                  <span style={{color: "#FFFFFF"}}>A</span>
                </span>
                <div className="colour-info">
                  Background: #0B0C0C<br />
                  Foreground: #FFFFFF
                </div>
              </div>
      
              <div className="colour-swatch">
                <span className="app-swatch" style={{backgroundColor: "#882345"}}>
                  <span style={{color: "#FFFFFF"}}>A</span>
                </span>
                <div className="colour-info">
                  Background: #882345<br />
                  Foreground: #FFFFFF
                </div>
              </div>
      
              <div className="colour-swatch">
                <span className="app-swatch" style={{backgroundColor: "#002664"}}>
                  <span style={{color: "#FFFFFF"}}>A</span>
                </span>
                <div className="colour-info">
                  Background: #002664<br />
                  Foreground: #FFFFFF
                </div>
              </div>
      
              <div className="colour-swatch">
                <span className="app-swatch" style={{backgroundColor: "#858585"}}>
                  <span style={{color: "#FFFFFF"}}>A</span>
                </span>
                <div className="colour-info">
                  Background: #858585<br />
                  Foreground: #FFFFFF
                </div>
              </div>
          </div>

        </div>
      </section>


    </div>
  </div>
);

export default Page;
export const title = 'Colour';

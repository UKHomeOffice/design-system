import { FC, Fragment, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A, Table, Radios, Button } from '@not-govuk/components';

const interUI = (
  <A href="https://rsms.me/inter/">InterUI</A>
);
const cloudflare = (
  <A href="https://support.cloudflare.com/hc/en-us/articles/200170156-What-does-the-Cloudflare-cfduid-cookie-do-">Cloudflare</A>
);

const Page: FC<PageProps> = props => (
  <div className="hods-width-container">
    <main id="main-content">
      <Helmet>
        <title>Cookies - Home Office Design System</title>
      </Helmet>
      <h1>Cookies</h1>
      <p>The <a href='https://design.homeoffice.gov.uk/'>Home Office User-Centred Design Manual</a> puts small files (known as ‘cookies’) on to your computer.</p>
      <p>We use cookies to:</p>
      <ul>
        <li>record the notifications you’ve seen so we do not show them again</li>
        <li>measure how you use the website so it can be updated and improved based on your activity</li>
      </ul>
      <p>These cookies are not used to identify you personally.</p>
      <p>We only set cookies when JavaScript is running in your browser and you’ve accepted them. If you choose not to run Javascript, the information on this page will not apply to you.
</p>
      <p><A href="https://ico.org.uk/your-data-matters/online/cookies/">Find out how to manage cookies.</A></p>
      <h3>Essential cookies (strictly necessary)</h3>
      <p>We use an essential cookie to remember when you accept or reject cookies on our website.</p>
      <Table
        keys={['name', 'purpose', 'expires']}
        headings={{
          name: 'Name',
          purpose: 'Purpose',
          expires: 'Expires'
        }}
        data={[
          {
            name: 'design_system_consent_cookie',
            purpose: 'Saves your cookie consent settings',
            expires: '1 year'
          }
        ]}
      />
      <h3>Analytics cookies (optional)</h3>
      <p>We use Google Analytics software to collect information about how you use the Home Office User-Centred Design Manual. We do this to help make sure the site is meeting the needs of its users and to help us make improvements.</p>
      <p>We do not collect or store your personal information (for example your name or address) so this information cannot be used to identify who you are.</p>
      <p>We do not allow Google to use or share our analytics data.</p>

      <p>Google Analytics stores information about:</p>
      <ul>
        <li>the pages you visit</li>
        <li>how long you spend on each page</li>
        <li>how you got to the site</li>
        <li>what you click on while you visit the site</li>
        <li>the device and browser that you use</li>
      </ul>
      
      <p>Google Analytics sets the following cookies:</p>
      <Table
        keys={['name', 'purpose', 'expires']}
        headings={{
          name: 'Name',
          purpose: 'Purpose',
          expires: 'Expires'
        }}
        data={[
          {
            name: '_ga',
            purpose: 'Helps us count how many people visit the Home Office User-Centred Design Manual by telling us if you’ve visited before.',
            expires: '2 years'
          },
          
        ]}
      />
      <Radios
             label={
          <h3 className="govuk-heading-s">
                         Do you accept optional analytics cookies?
          </h3>
        }
             name="cookie-consent"
             options={[
               {
                 value: "yes",
                 label: "Yes"
               },
               {
                 value: "no",
                 label: "No"
               }
             ]}
           />
           <Button>Save cookie settings</Button>
    </main>
  </div>
);

export default Page;
export const title = 'Cookies';

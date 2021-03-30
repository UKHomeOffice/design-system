import { FC, Fragment, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { Table } from '@not-govuk/components';

const interUI = (
  <a href="https://rsms.me/inter/">InterUI</a>
);
const cloudflare = (
  <a href="https://support.cloudflare.com/hc/en-us/articles/200170156-What-does-the-Cloudflare-cfduid-cookie-do-">Cloudflare</a>
);

const Page: FC<PageProps> = props => (
  <Fragment>
    <Helmet>
      <title>Cookie - Home Office Design System</title>
    </Helmet>
    <h1>Cookies</h1>
    <p>The Home Office Design System puts small files (known as ‘cookies’) on to your computer.</p>
    <p>We use cookies to:</p>
    <ul>
      <li>record the notifications you’ve seen so we do not show them again</li>
      <li>measure how you use the website so it can be updated and improved based on your activity</li>
    </ul>
    <p>These cookies are not used to identify you personally.</p>
    <p>You’ll see a message on the site before we store a cookie on your computer.</p>
    <p><a href="https://ico.org.uk/your-data-matters/online/cookies/">Find out how to manage cookies.</a></p>
    <h3>Our cookie message</h3>
    <p>You will see a message about cookies when you first visit the Home Office Design System. We’ll store a cookie so that your computer knows you’ve seen it and knows not to show it again.</p>
    <Table
      keys={[ 'name', 'purpose', 'expires' ]}
      headings={{
        name: 'Name',
        purpose: 'Purpose',
        expires: 'Expires'
      }}
      data={[
        {
          name: 'seen_cookie_message',
          purpose: 'Saves a message to let us know that you have seen our cookie message',
          expires: '28 days'
        }
      ]}
    />
    <h3>Measuring website usage with Google Analytics</h3>
    <p>We use Google Analytics software to collect information about how you use the Home Office Design System. We do this to help make sure the site is meeting the needs of its users and to help us make improvements.</p>
    <p>Google Analytics stores information about:</p>
    <ul>
      <li>the pages you visit</li>
      <li>how long you spend on each page</li>
      <li>how you got to the site</li>
      <li>what you click on while you’re visiting the site</li>
    </ul>
    <p>We do not collect or store your personal information, so this data cannot be used to identify who you are.</p>
    <p>We do not allow Google to use or share our analytics data.</p>
    <p>Google Analytics sets the following cookies:</p>
    <Table
      keys={[ 'name', 'purpose', 'expires' ]}
      headings={{
        name: 'Name',
        purpose: 'Purpose',
        expires: 'Expires'
      }}
      data={[
        {
          name: '_ga',
          purpose: 'This helps us count how many people visit the Home Office Design System site by tracking if you’ve visited before',
          expires: '2 years'
        },
        {
          name: '_gid',
          purpose: 'This helps us count how many people visit the Home Office Design System site by tracking if you’ve visited before',
          expires: '24 hours'
        },
        {
          name: '_gat',
          purpose: 'This is used to limit the rate at which page view requests are recorded by Google',
          expires: '1 minute'
        }
      ]}
    />
    <h3>Other cookies</h3>
    <Table
      keys={[ 'name', 'purpose', 'expires' ]}
      headings={{
        name: 'Name',
        purpose: 'Purpose',
        expires: 'Expires'
      }}
      data={[
        {
          name: '_govuk-prototype-kit',
          purpose: 'This helps the makers of the GOV.UK prototype kit count how many times the kit is used',
          expires: '24 hours'
        },
        {
          name: '_ga',
          purpose: (
            <Fragment>
              We use an open source font {interUI} which uses Google Analytics to help count how many times the font is used'
            </Fragment>
          ),
          expires: '2 years'
        },
        {
          name: '_cfduid',
          purpose: (
            <Fragment>
              We use an open source font {interUI} which uses {cloudflare}
            </Fragment>
          ),
          expires: '6 months'
        }
      ]}
    />
  </Fragment>
);

export default Page;
export const title = 'Cookies';

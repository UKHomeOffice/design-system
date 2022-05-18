import { FC, Fragment, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A } from '@not-govuk/components';
import { menu } from '../get-started';

import { CodeSnippet } from '../../../../../../components/code-snippet/src/CodeSnippet'

import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneLight } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

import { CopyToClipboard } from 'react-copy-to-clipboard'

export const title = 'Today and other dates';
const description = 'Use dynamic dates in your prototype';
const section = 'Get started using GOV.UK prototype kit';

const Page: FC<PageProps> = ({ location }) => (
  <div className="govuk-grid-row">
    <Helmet>
      <title>{title} - Home Office Design System</title>
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
        <span className="caption">{section}</span>
        {title}
      </h1>

      <p>These code examples are for prototyping only. Do not use in production code.</p>

      <h2>1. Add to the routes.js file</h2>

      <CodeSnippet>{`router.get(\'*\', function (req, res, next) {

        // These functions are available on all pages of the prototype.
        // Use function inside curly brackets, such as {{ example_function() }}

        // Examples of date
        //
        // {{ date() }} shows todays date in the format 5 May 2022
        // {{ date({day: 'numeric', month: 'numeric', year: 'numeric'}) }} is todays date
        //    in the format 05/05/2022
        // {{ date({day: 'numeric'}) }} shows the just the date of date 5
        // {{ date({day: 'numeric'}, {'day': -1}) }} shows just the date of yesterday
        res.locals.date = function (
          format = {day: 'numeric', month: 'long', year: 'numeric'},
          diff = {'year': 0, 'month': 0, 'day': 0})
          {
            var date = new Date();
            if ('day' in diff) {
              date.setDate(date.getDate() + diff.day)
            }
            if ('month' in diff) {
              date.setMonth(date.getMonth() + diff.month)
            }
            if ('year' in diff) {
              date.setYear(date.getFullYear() + diff.year)
            }
            const formattedDate = new Intl.DateTimeFormat('en-GB', format).format(date);
            return \`\${formattedDate}\`
          }

        // Examples of today
        //
        // Useful for pre-populating date fields
        //
        // {{ today().day }} shows just todays day
        // {{ today().month }} shows just todays month as a number
        // {{ today().year }} shows just todays year as a number
        res.locals.today = () => (
          {"day": res.locals.date({'day': 'numeric'}),
                 "month": res.locals.date({'month': 'numeric'}),
                 "year": res.locals.date({'year': 'numeric'})}
        )

        // Examples of yesterday
        //
        // Useful for pre-populating date fields
        //
        // {{ yesterday().day }} shows just todays day
        // {{ yesterday().month }} shows just todays month as a number
        // {{ yesterday().year }} shows just todays year as a number
        res.locals.yesterday = () => (
          {"day": res.locals.date({'day': 'numeric'}, diff = {'day': -1}),
                  "month": res.locals.date({'month': 'numeric'}, diff = {'day': -1}),
                  "year": res.locals.date({'year': 'numeric'}, diff = {'day': -1})}
         )

        next()
      })`}</CodeSnippet>

      <h2>2. In your templates you can now use</h2>

      <h3>Today's date</h3>
      <CodeSnippet>{`{{ date() }}`}</CodeSnippet>

      <h3>Yesterday's date</h3>
      <CodeSnippet>{`{{ date({'day': 'numeric', 'month': 'long', 'year': 'numeric'}, {'day': -1}) }}`}</CodeSnippet>

      <h3>Current year</h3>
      <CodeSnippet>{`{{ date({'year': 'numeric'}) }}`}</CodeSnippet>

      <h3>Today's date short format</h3>
      <CodeSnippet>{`{{ date({'day': 'numeric', 'month': 'numeric', 'year': 'numeric'}) }}`}</CodeSnippet>

      <h3>Today's date only</h3>
      <CodeSnippet>{`{{ today().day }}`}</CodeSnippet>

    </div>
  </div>
);

export default Page;

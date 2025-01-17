import { FC, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A } from '@not-govuk/components';
import { menu } from '../patterns';

export const title = 'Choose from a long list';
const description = 'How to help users choose from a long list ';
const section = 'Patterns';
const subsection = 'Help users to';

const autocomplete = require('../../../../assets/images/patterns/list-only-autocomplete.png');
const inlineautocomplete = require('../../../../assets/images/patterns/inline-autocomplete.png');
const bothlist = require('../../../../assets/images/patterns/bothlists2.png');
const divide = require('../../../../assets/images/patterns/divide-lists.png');
const questions = require('../../../../assets/images/patterns/structured-questions2.png');


const Page: FC<PageProps> = () => (
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
        <span className="caption">{subsection}</span>
        {title}
      </h1>
      

      <p className="govuk-body">Patterns and components to help users choose from long lists.</p>

     

      <h2 className="govuk-heading-l">When to use this pattern</h2>
      <p>Follow this pattern when users need to choose one or more options from a list.</p>
      <p>What makes a long list will depend on the service. Some services might have thousands of options, while for other services 30 options may be a long list.</p>
      <p>Use this pattern when</p>
      <ul className="govuk-list govuk-list--bullet">
        <li>a user needs to choose from a list of options</li>
        <li>there are so many options that they you cannot show them all at the same time</li>
        <li>the user may not be familiar with the options in the list</li>
      </ul>
     
      <h2 className="govuk-heading-l">When not to use this pattern</h2>
      <p>Do not use this pattern for filtering a table, as tables present multiple pieces of related information.</p>


      <h2 className="govuk-heading-l">How it works</h2>
      <p>When designing with long lists, consider:</p>
      <ul className="govuk-list govuk-list--bullet">
        <li>who your users are </li>
        <li>how familiar the users are with the options in the list </li>
        <li>whether users know what option they’re looking for, for example nationality</li>
        <li>how you can help the user reduce their options</li>
        <li>the risks if the user choses the wrong option</li>
        <li>how many options users can select</li>
        <li>hwhether the list can be pre-filtered by a user's location, role or user type</li>
        <li>how to order the options to help users find what they’re looking for, for example most common first or alphabetised</li>
      </ul>

      <p>To optimise data in long lists: </p>
      <ul className="govuk-list govuk-list--bullet">
        <li>reduce the number of options as much as possible</li>
        <li>keep the name of each option short</li>
        <li>avoid multiple options starting with the same word or phrase</li>
        <li>format the options in a clear and consistent way </li>
        <li>use familiar language </li>
        <li>add synonym matches, if research findings support this</li>
        <li>use analytics to understand where lists could be improved <A href="https://becoming-a-teacher.design-history.education.gov.uk/register-trainee-teachers/autocomplete-analytics/">(this example of using analytics to improve autocomplete)</A></li>
      </ul>

      <h3>Autocomplete</h3>
      <p>Autocompletes (also called ‘typeahead’) are a text inputs that suggest options to the user as they type. Results are presented in a dropdown list which users can select from.</p>
    
      <p>The most common types of autocomplete used in the Home Office are:</p>
      <p>list with inline autocomplete</p>
      <div className="govuk-grid-row">
      <div className="govuk-grid-column-one-half">
      <img src={autocomplete} className="image-examples" alt="The letters B, E, L have been typed into the search field. The autocomplete has completed the word to spell Belarus. All countries starting with B, E, L appear alphabetically in the dropdown: Belarus and Belgium."/></div>
   </div>
      <p>list only autocomplete (also called ‘autosuggests’)</p>
      <div className="govuk-grid-row">
      <div className="govuk-grid-column-one-half">
      <img src={inlineautocomplete} className="image-examples" alt="The letters B and E have been typed into the search field. A drop-down displays the countries that start with B, E in an alphabetical list: Belarus, Belize, Belgium, Benin, Bermuda."/></div>
   </div>

      <p>Autocompletes work better when the user knows exactly what entry they are looking for in the list.</p>
      <p>This component can help by:  </p>
      <ul className="govuk-list govuk-list--bullet">
        <li>speeding up user input </li>
        <li>reducing the number of options displayed</li>
        <li>finding a combination of letters anywhere in the option, not just the start </li>
      </ul>

      <p>When using an autocomplete, consider:</p>
      <ul className="govuk-list govuk-list--bullet">
        <li>whether your service will find a combination of letters anywhere in an entry</li>
        <li>the order in which you will present options</li>
        <li>doing research with your users to find out whether you need to allow synonyms, for example when choosing a language from a list, entering ‘Deutsch’ or ‘Germany’ will bring up ‘German’ </li>
        <li>telling the user how many matches have been found</li>
        <li>what happens if there are no results found</li>
        <li>how to show users that they can see the complete list, for example a select arrow</li>
        <li>how users can easily clear what they have entered to see the full list again</li>
        <li>a plan for how you will maintain the accuracy of the list over time</li>
      </ul>

      <p>See this Department of Education design history <A href="https://becoming-a-teacher.design-history.education.gov.uk/register-trainee-teachers/autocomplete-improvements/">blog on improving autocompletes.</A> </p>
      <p>For accessibility:</p>
      <ul className="govuk-list govuk-list--bullet">
        <li>if a user presses ‘Space’, ‘Enter’ or ‘Tab’ key, the option is set</li>
        <li>if a user presses ‘Esc’ the current option is retained</li>
      </ul>

      <p>See this summary about<A href="https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-autocomplete-list/">autocompletes from the Web Accessibility Initiative (W3C).</A> </p>

      <h3>Divide the list into categories</h3>
      <p>The second list is conditionally revealed when option in first list is selected</p>

      <div className="govuk-grid-row">
      <div className="govuk-grid-column-full">
      <img src={divide} className="image-examples" alt="Two images show how a second list is conditionally revealed when an option in the first list is selected. The first image offers a dropdown to select a country. On the second image, United Kingdom of Great Britain and Northern Ireland has been selected in the country dropdown and a second dropdown has appeared below that, showing options for different UK ports."/></div>
   </div>



      <p>Both lists are shown when screen loads</p>

      <div className="govuk-grid-row">
      <div className="govuk-grid-column-one-half">
      <img src={bothlist} className="image-examples" alt="This image shows how both lists are presented when the screen loads. Two dropdowns are shown, the first for selecting a country and the second for choosing a port."/></div>
   </div>


      <p>In the second example, the options displayed in the second list are filtered depending on what is selected in the first list. If no option is chosen in the first list, the user can select from the unfiltered range of options in the second list. </p>
      <p>Divide the data into categories so when users select a category, they are shown only relevant options in the next field.</p>
      <p>This approach can:</p>
      <ul className="govuk-list govuk-list--bullet">
        <li>prevent mistakes, especially if there are legal consequences to choosing the wrong option </li>
        <li>make the final list shorter </li>
        <li>reduce the loading time of the screen as shorter data lists will be loaded</li>
        <li>break down the decision-making process and help guide the user to the correct option</li>
      </ul>

      <p>Consider:</p>
      <ul className="govuk-list govuk-list--bullet">
        <li>what should happen if the selection in one of the previous fields is changed or removed </li>
        <li>the relationship between the fields and the order if all inputs are showing when screen loads</li>
        <li>using a conditionally revealed input when order of input is important, to ensure a shorter final list </li>
      </ul>

      <h3>Structured questions</h3>

      <div className="govuk-grid-row">
      <div className="govuk-grid-column-full">
      <img src={questions} className="image-examples" alt="Numbered boxes with arrows leading to the next one show how questions 1, 2 and 3 are asked consecutively. The questions filter down the options to a shorter list, or even just one option."/></div>
      
   </div>
      <p>Ask a series of questions to guide the user to the best option. </p>

      <p>Use this pattern when:</p>
      <ul className="govuk-list govuk-list--bullet">
        <li>the user is not familiar with the options in the list</li>
        <li>you need to guide the user through complex options</li>
        <li>you can eliminate a lot of options quickly</li>
      </ul>   

      <p>However, if users are familiar with the list and know which option they need, structured questions could slow down the user. </p>   


      <h2 className="govuk-heading-l">Accessibility</h2>

      <p>When using autocompletes: </p>
      <ul className="govuk-list govuk-list--bullet">
        <li>inform the screen reader user that autocomplete is available</li>
        <li>inform the screen reader user that content has been expanded</li>
        <li>ensure the first line has the number of results as the user types</li>
        <li>do not use aria live region </li>
        <li>inform the user as the number of matches changes</li>
        <li>collapse list and return focus to the editable field when a selected match is confirmed</li>
      </ul> 

      <p>If your service uses this pattern, let us know of any insights you have
      on accessibility considerations.</p>

      <h2 className="govuk-heading-l">Research</h2>
     
      <p className="govuk-body">More research is needed. If your service uses this
      pattern, get in touch to share your user research findings.</p>

      <h2 className="govuk-heading-l">Help us improve this pattern</h2>
      <p>This pattern needs improving. We need evidence about:</p>
      <ul>
        <li>how to help users choose multiple options and how you will display the options chosen and allow these to be changed or deleted </li>
        <li>how teams are using autosuggest in their service</li>
        <li>how to make users more confident about their choice</li>
        <li>the usability of autocompletes on mobile devices</li>
        <li>other patterns that have been successful in services to display long lists to users</li>
        <li>using the optgroup element for grouping options</li>
      </ul>

      <p className="govuk-body">To contribute, add your thoughts and research findings to our <A href="https://github.com/UKHomeOffice/design-system/discussions/401">GitHub discussion</A>, or follow our <A href="/contribute">contribute guidance</A>.</p>

    </div>
</div>


);

export default Page;

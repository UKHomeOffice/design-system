import { FC, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A } from '@not-govuk/components';
import { menu } from '../patterns';

import { PageWrap } from '../';

export const title = 'Choose from a long list';
const description = 'How to help users choose from a long list ';
const section = 'Patterns';
const subsection = 'Help users to';

const autocomplete = require('../../../../assets/images/patterns/list-only-autocomplete.png');
const inlineautocomplete = require('../../../../assets/images/patterns/inline-autocomplete.png');
const bothlist = require('../../../../assets/images/patterns/bothlists2.png');
const divide = require('../../../../assets/images/patterns/divide-lists.png');
const questions = require('../../../../assets/images/patterns/structure-questions2.png');

const Page: FC<PageProps> = () => (
<PageWrap>
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
      

      <p className="govuk-body">Help users narrow down their options in a long list</p>

     

      <h2 className="govuk-heading-l">When to use this pattern</h2>
      <p>Use this pattern when:</p>
      <ul className="govuk-list govuk-list--bullet">
        <li>a user needs to choose from a list of options</li>
        <li>there are so many options that you cannot show them all at the same time</li>
        <li>the user may not be familiar with the options in the list</li>
      </ul>
      
      <p>What makes a long list will depend on the service. Some services might have thousands of options, while for other services 30 options may be a long list.</p>
   
     
      <h2 className="govuk-heading-l">When not to use this pattern</h2>
      <p>Do not use this pattern for filtering a table, as tables present multiple pieces of related information.</p>


      <h2 className="govuk-heading-l">How it works</h2>
      <p>When designing with long lists, consider:</p>
      <ul className="govuk-list govuk-list--bullet">
        <li>who your users are </li>
        <li>how familiar the users are with the options in the list </li>
        <li>whether users know what option they’re looking for, for example nationality</li>
        <li>how you can help the user reduce their options</li>
        <li>the risks if the user chooses the wrong option</li>
        <li>how many options users can select</li>
        <li>whether the list can be pre-filtered by a user's location, role or user type</li>
        <li>how to order the options to help users find what they’re looking for, for example most common first or alphabetised</li>
      </ul>

      <p>To improve data in long lists: </p>
      <ul className="govuk-list govuk-list--bullet">
        <li>reduce the number of options as much as possible</li>
        <li>keep the name of each option short</li>
        <li>avoid multiple options starting with the same word or phrase</li>
        <li>format the options in a clear and consistent way </li>
        <li>use familiar language </li>
        <li>add synonym matches, if research findings support this</li>
        <li>use analytics to understand where lists could be improved (see this example of <A href="https://becoming-a-teacher.design-history.education.gov.uk/register-trainee-teachers/autocomplete-analytics/"> using analytics to improve autocompletes)</A></li>
      </ul>

      <h3>Autocomplete</h3>
      <p>Autocompletes (also called ‘typeaheads’) are text inputs that suggest options to the user as they type. Results are presented in a dropdown list which users can select from.</p>

      <p>Autocompletes work better when the user knows exactly what option they are looking for in the list.</p>
      <p>This component can help by:  </p>
      <ul className="govuk-list govuk-list--bullet">
        <li>speeding up user input </li>
        <li>reducing the number of options displayed</li>
        <li>finding a combination of letters anywhere in the option, not just the start </li>
      </ul>

      <p>When using an autocomplete, consider:</p>
      <ul className="govuk-list govuk-list--bullet">
        <li>whether your service will find a combination of letters anywhere in an option</li>
        <li>the order in which you will present options</li>
        <li>doing research with your users to find out whether you need to allow synonyms, for example, ‘Deutsch’ or ‘Germany’ could bring up ‘German.’</li>
        <li>doing research with your users to understand if codes or numbers should be added to help identify the options in the list </li>
        <li>telling the user how many matches have been found</li>
        <li>what happens if there are no results found</li>
        <li>how to show users that they can see the complete list, for example an arrow icon within the autocomplete</li>
        <li>how users can easily clear what they have entered to see the full list again</li>
        <li>a plan for how you will maintain the accuracy of the list over time</li>
        <li>how the number of options displayed to the user impacts loading time</li>
      </ul>

      <p>See this Department of Education <A href="https://becoming-a-teacher.design-history.education.gov.uk/register-trainee-teachers/autocomplete-improvements/">design history blog on improving autocompletes</A>.</p>


      <h4 className="govuk-heading-s">List only autocomplete (also called ‘autosuggests’)</h4>
      <p>When letters are typed into the input field, the dropdown list displays options that start with those letters. The user selects from the list to complete the field.  </p>
      <div className="govuk-grid-row">
      <div className="govuk-grid-column-one-half">
      <img src={autocomplete} className="image-examples" alt="Example of list only autocomplete."/></div>
   </div>
   
  <br></br>
<br></br>
     
      
      <h3>Divide the list into categories</h3>
      <p>Divide the data into categories so when users select a category, they are shown only relevant options in the next field.</p>
      <p>There are 2 ways of doing this: showing all lists when the screen loads or only revealing the next list when a choice has been made</p>
      <h4 className="govuk-heading-s">Both lists are shown when screen loads</h4>
  <p>In this case, the options displayed in the second list are filtered depending on what is selected from the first list. If no option is chosen in the first list, the user can select from the unfiltered range of options in the second list.</p>

<div className="govuk-grid-row">
<div className="govuk-grid-column-one-half">
<img src={bothlist} className="image-examples" alt="Two dropdowns are shown onscreen, the first for selecting a country and the second for choosing a port."/></div>
</div>

<h4 className="govuk-heading-s">Second list is conditionally revealed  </h4>
<p>Show the second list when a user selects an option in the first list.</p>
<p>In this example, the user selects a country – United Kingdom of Great Britain and Northern Ireland – from a dropdown. A second dropdown then appears below the first, showing options for different UK ports. </p>

      <div className="govuk-grid-row">
      <div className="govuk-grid-column-full">
      <img src={divide} className="image-examples" alt=" Example of the interaction where the second list conditionally revealed."/></div>
   </div>

     
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
      <p>Ask a series of questions to guide the user to the best option. </p>
<p>Numbered screens show how questions 1, 2 and 3 are asked consecutively. Answering the questions filters down the list to a single option or shorter list.  </p>
      <div className="govuk-grid-row">
      <div className="govuk-grid-column-full">
      <img src={questions} className="image-examples" alt="Example of the structured questions interaction."/></div>
      
   </div>

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
        <li>inform the screen reader user that the autocomplete is available</li>
        <li>inform the screen reader user when the content has been expanded</li>
        <li>it may be helpful to include the number of options in the first line as the user types and inform the user as the number of matches changes</li>
        <li>do not use 'aria live region' </li>
        <li>collapse the list and return the focus to the editable field when a selected match is confirmed</li>
        <li>the option in focus in the list is set if a user presses the ‘Space’, ‘Enter’ or ‘Tab’ key</li>
        <li>if a user presses ‘Esc’, the option in focus is not selected and the dropdown list is closed</li>
      </ul>

      <p>See this summary about <A href="https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-autocomplete-list/">autocompletes from the Web Accessibility Initiative (W3C)</A>.</p>
    

  
      <p>When using conditionally revealed lists, make sure the second list is next in the tabbing order. </p>

      <p>If your service uses this pattern, let us know of any insights you have
      on accessibility considerations.</p>
      <br></br>

      <h2 className="govuk-heading-l">Research</h2>
     
      <p className="govuk-body">More research is needed. If your service uses this
      pattern, get in touch to share your user research findings.</p>

      <h2 className="govuk-heading-l">Help us improve this pattern</h2>
      <p>This pattern needs improving. We need evidence about:</p>
      <ul>
        <li>how to help users choose multiple options and how you display the options chosen and allow these to be changed or deleted </li>
        <li>how teams are using autosuggest in their service</li>
        <li>how to make users more confident about their choice</li>
        <li>the usability of autocompletes on mobile devices</li>
        <li>other patterns that have been successful in services to display long lists to users</li>
        <li>using the 'optgroup' element for grouping options</li>
        
      </ul>

      <p className="govuk-body">To contribute, add your thoughts and research findings to our <A href="https://github.com/UKHomeOffice/design-system/discussions/401">GitHub discussion</A>, or follow our <A href="/contribute">contribute guidance</A>.</p>

    </div>
</div>
</PageWrap>
);

export default Page;

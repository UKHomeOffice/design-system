import { FC, Fragment, createElement as h } from 'react';
import { PageProps } from '@not-govuk/app-composer';
import { A } from '@not-govuk/components';

const Page: FC<PageProps> = ({ location }) => (

<div className="govuk-grid-row">

    <div className="govuk-grid-column-one-third">
      <aside>
        <h2>Styles</h2>
        <ul className="plain">
          <li><A href="/styles/colour">Colour</A> </li>
          <li><A href="/styles/images">Images</A> </li>
          <li><A href="/styles/templates">Page templates</A> </li>
          <li><A href="/styles/typography">Typography</A> </li>
        </ul>
      </aside>
    </div>

    <div className="govuk-grid-column-two-thirds">
        
    </div>
    

</div>


);

export default Page;
export const title = 'Images';

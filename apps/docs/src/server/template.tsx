import { FC, createElement as h } from 'react';
import { TemplateProps } from '@not-govuk/server-renderer';

export const Template: FC<TemplateProps> = props => {
  const title = `${props.appProps.pageTitle} - NotGovUK`;
  const charSet = props.charSet || 'UTF-8';

  return (
    <html>
      <head>
        <meta charSet={charSet} />
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#0b0c0c" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        {props.stylesheets && props.stylesheets.map(
          v => (
            <link key={v} href={`${props.assetsPath}${v}`} rel="stylesheet" />
          )
        )}
        {props && <script dangerouslySetInnerHTML={{__html: `window.hydrationId = '${props.rootId}'; window.hydrationProps = ${JSON.stringify(props.appProps).replace(/</g, '\\u003c')};`}} />}
      </head>
      <body>
        <div id={props.rootId} dangerouslySetInnerHTML={{__html: props.appRender as string}} />
        {!props.appProps.err && props.scripts && props.scripts.map(
           v => (
             <script key={v} src={`${props.assetsPath}${v}`}></script>
           )
        )}
      </body>
    </html>
  );
};

export default Template;

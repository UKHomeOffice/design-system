import { FC, createElement as h, useState } from 'react';
import { StandardProps, classBuilder } from '@not-govuk/component-helpers';
import { InsetText } from '@not-govuk/inset-text';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneLight } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

import { CopyToClipboard } from 'react-copy-to-clipboard'

import '../assets/CodeSnippet.scss';

export type CodeSnippetProps = StandardProps & {
  /** extra code snip props */
};

export const CodeSnippet: FC<CodeSnippetProps> = ({
  children,
  classBlock,
  classModifiers,
  className,
  ...attrs
}) => {
  const classes = classBuilder('hods-code-container', classBlock, classModifiers, className);
  const [copyState, setCopyState] = useState(false)

  return (
      <div {...attrs} className={classes()}>
        <CopyToClipboard text={children} onCopy={() => {
          setCopyState(true);
          setTimeout(() => setCopyState(false), 5000);
        }}>
          <button className="hods-copy-code-button">{copyState ? "Code copied" : "Copy code"}</button>
        </CopyToClipboard>

        <SyntaxHighlighter language="javascript" style={atomOneLight}>
          {children}
        </SyntaxHighlighter>
      </div>
  );
};

export default CodeSnippet;

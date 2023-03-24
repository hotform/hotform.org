import React from 'react';

/* Emotion */
import { useTheme } from '@emotion/react';

/* Sandpack */
import {
  SandpackCodeEditor,
  SandpackLayout,
  SandpackProvider,
  SandpackProviderProps
} from '@codesandbox/sandpack-react';

/* Shared Styles */
import { sandpackLayoutBase } from '@components/sandpack/shared/styles';

/* Shared Utils */
import { getSandpackFiles } from '@components/sandpack/shared/utils';

export interface CodeBlockProps extends React.PropsWithChildren{
  showLineNumbers?: boolean;
  template?: SandpackProviderProps['template'];
}

const CodeBlock: React.FC<CodeBlockProps> = ({
  children,
  showLineNumbers = true,
  template = 'react'
}) => {
  const { sandpackTheme } = useTheme();
  return (
    <SandpackProvider
      files={ getSandpackFiles(children) }
      suppressHydrationWarning
      template={ template }
      theme={ sandpackTheme }
    >
      <SandpackLayout css={ theme => ({
        ...sandpackLayoutBase(theme),
        '--sp-layout-height': 'auto',
        ...(!showLineNumbers && {
          '.sp-code-editor': {
            padding: 0
          }
        })
      }) }>
        <SandpackCodeEditor
          readOnly
          showLineNumbers={ showLineNumbers }
          showReadOnly={ false }
        />
      </SandpackLayout>
    </SandpackProvider>
  );
}

export default CodeBlock;
import React from 'react';

/* Emotion */
import { useTheme } from '@emotion/react';

/* Sandpack */
import { SandpackLogLevel } from '@codesandbox/sandpack-client';
import {
  SandpackCodeEditor,
  SandpackLayout,
  SandpackPreview,
  SandpackProvider,
  SandpackProviderProps
} from '@codesandbox/sandpack-react';

/* Shared Styles */
import { sandpackLayoutBase } from '@components/sandpack/shared/styles';

/* Shared Utils */
import { getSandpackFiles } from '@components/sandpack/shared/utils';

export interface CodeEditorProps extends React.PropsWithChildren{
  autorun?: boolean;
  dependencies?: Record<string, string>;
  devDependencies?: Record<string, string>;
  template?: SandpackProviderProps['template'];
}

const CodeEditor: React.FC<CodeEditorProps> = ({
  autorun = true,
  children,
  dependencies = {},
  devDependencies = {},
  template = 'react'
}) => {
  const { sandpackTheme } = useTheme();
  return (
    <SandpackProvider
      customSetup={ {
        dependencies,
        devDependencies
      } }
      files={ getSandpackFiles(children) }
      options={ {
        autorun,
        initMode: 'user-visible',
        logLevel: SandpackLogLevel.None
      } }
      template={ template }
      theme={ sandpackTheme }
    >
      <SandpackLayout css={ theme => ({
        ...sandpackLayoutBase(theme),
        [theme.breakpoints.down('lg')]: {
          [[
            '.sp-editor',
            '.sp-preview'
          ].join()]: {
            minWidth: '100%'
          }
        }
      }) }>
        <SandpackCodeEditor showLineNumbers/>
        <SandpackPreview/>
      </SandpackLayout>
    </SandpackProvider>
  );
}

export default CodeEditor;
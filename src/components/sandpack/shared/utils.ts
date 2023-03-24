import React from 'react';

/* Sandpack */
import { SandpackFiles } from '@codesandbox/sandpack-react';

export interface CodeBlockChildrenProps{
  children: string;
  className: string;
  meta?: string;
}

export const getSandpackFiles = (children: React.ReactNode): SandpackFiles => {
  const codeSnippets = React.Children.toArray(children) as Array<React.ReactElement>;
  
  const files = codeSnippets.reduce((sandpackFiles, codeSnippet) => {
    if(codeSnippet.type === 'pre'){
      const codeBlockChildrenProps: CodeBlockChildrenProps = codeSnippet.props.children.props;
      let filePath: string;
      let fileActive: boolean = false;
      let fileHidden: boolean = false;
      
      if(!codeBlockChildrenProps.meta){
        throw new Error(`Code block is missing a filename: ${codeBlockChildrenProps.children}`);
      }
      
      const [ filename, ...params ] = codeBlockChildrenProps.meta.split(' ');
      filePath = '/' + filename;
      fileActive = params.includes('active');
      fileHidden = params.includes('hidden');
      
      if(sandpackFiles[filePath]){
        throw new Error(`File ${filePath} was defined multiple times. Each file snippet should have a unique path name`);
      }
      
      sandpackFiles[filePath] = {
        active: fileActive,
        code: codeBlockChildrenProps.children?.trimEnd() || '',
        hidden: fileHidden
      };
    }
    return sandpackFiles;
  }, {} as SandpackFiles);
  
  return files;
}
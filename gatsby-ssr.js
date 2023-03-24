/* Config */
import config from './src/config';

/* Sandpack */
import { getSandpackCssText } from '@codesandbox/sandpack-react';

export const onRenderBody = ({
  setHeadComponents,
  setHtmlAttributes
}) => {
  setHeadComponents([
    <style
      id="sandpack"
      key="sandpack-css"
      dangerouslySetInnerHTML={ { __html: getSandpackCssText() } }
    />
  ]);
  setHtmlAttributes({
    lang: config.language,
    translate: 'no'
  });
}
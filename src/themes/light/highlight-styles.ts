/* Config */
import config from '@config';

/* Emotion */
import { CSSObject } from '@emotion/react';

const prefix: string = config.classNamePrefix;

const highlightStyles: CSSObject = {
  code: {
    padding: '0.2em 0.4em',
    fontSize: '90%',
    background: '#eaeaea'
  },
  [`pre code.${prefix}`]: {
    display: 'block',
    overflowX: 'auto',
    padding: '1em'
  },
  [`code.${prefix}`]: {
    padding: '3px 5px'
  },
  [`.${prefix}`]: {
    color: '#24292e',
    background: '#f5f5f5'
  },
  [[
    `.${prefix}-doctag`,
    `.${prefix}-keyword`,
    `.${prefix}-meta .${prefix}-keyword`,
    `.${prefix}-template-tag`,
    `.${prefix}-template-variable`,
    `.${prefix}-type`,
    `.${prefix}-variable.language_`
  ].join()]: {
    color: '#d73a49'
  },
  [[
    `.${prefix}-title`,
    `.${prefix}-title.class_`,
    `.${prefix}-title.class_.inherited__`,
    `.${prefix}-title.function_`
  ].join()]: {
    color: '#6f42c1'
  },
  [[
    `.${prefix}-attr`,
    `.${prefix}-attribute`,
    `.${prefix}-literal`,
    `.${prefix}-meta`,
    `.${prefix}-number`,
    `.${prefix}-operator`,
    `.${prefix}-selector-attr`,
    `.${prefix}-selector-class`,
    `.${prefix}-selector-id`,
    `.${prefix}-variable`
  ].join()]: {
    color: '#005cc5'
  },
  [[
    `.${prefix}-meta .${prefix}-string`,
    `.${prefix}-regexp`,
    `.${prefix}-string`
  ].join()]: {
    color: '#032f62'
  },
  [[
    `.${prefix}-built_in`,
    `.${prefix}-symbol`
  ].join()]: {
    color: '#e36209'
  },
  [[
    `.${prefix}-code`,
    `.${prefix}-comment`,
    `.${prefix}-formula`
  ].join()]: {
    color: '#6a737d'
  },
  [[
    `.${prefix}-name`,
    `.${prefix}-quote`,
    `.${prefix}-selector-pseudo`,
    `.${prefix}-selector-tag`
  ].join()]: {
    color: '#22863a'
  },
  [`.${prefix}-subst`]: {
    color: '#24292e'
  },
  [`.${prefix}-section`]: {
    color: '#005cc5',
    fontWeight: 700
  },
  [`.${prefix}-bullet`]: {
    color: '#735c0f'
  },
  [`.${prefix}-emphasis`]: {
    color: '#24292e',
    fontStyle: 'italic'
  },
  [`.${prefix}-strong`]: {
    color: '#24292e',
    fontWeight: 700
  },
  [`.${prefix}-addition`]: {
    color: '#22863a',
    backgroundColor: '#f0fff4'
  },
  [`.${prefix}-deletion`]: {
    color: '#b31d28',
    backgroundColor: '#ffeef0'
  }
};

export default highlightStyles;
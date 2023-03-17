export default {
  classNamePrefix: process.env.GATSBY_APP_CLASS_NAME_PREFIX ?? 'prefix',
  language: process.env.GATSBY_LANGUAGE ?? 'en',
  name: process.env.GATSBY_APP_NAME ?? '...',
  socialMedia: [
    {
      label: 'GitHub',
      to: 'https://github.com/hotform/hotform'
    }
  ],
  repositoryURL: 'https://github.com/hotform/hotform.org'
};
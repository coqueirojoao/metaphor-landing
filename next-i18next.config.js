module.exports = {
  i18n: {
    defaultLocale: 'pt',
    locales: ['pt', 'en'],
    localeDetection: false
  },
  reloadOnPrerender: process.env.NODE_ENV === 'development'
};

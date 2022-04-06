module.exports = {
  pluginOptions: {
    electronBuilder: {
      nodeIntegration: true,
      builderOptions: {
        appId: 'com.desktop.tasky',
        productName: 'Desktop Tasky',
        copyright: 'Copyright © 2022 MartinsOnuoha',
        mac: {
          category: 'public.app-category.productivity',
          target: 'dmg',
          icon: 'src/assets/logo.png',
        },
      },
    },
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: true,
      includeLocales: false,
      enableBridge: true,
    },
  },
};

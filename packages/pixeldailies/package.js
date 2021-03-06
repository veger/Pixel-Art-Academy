Package.describe({
  name: 'pixeldailies',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Npm.depends({
  twit: '2.1.1',
  'twitter-text': '1.13.2'
});

Package.onUse(function(api) {
  api.use('pixelartacademy');

  api.export('PixelArtAcademy');

  api.addFiles('pixeldailies.coffee');

  // Immediately add the server file because it rewrites the PixelDailies class.
  api.addFiles('server.coffee', 'server');

  api.addFiles('theme/theme.coffee');
  api.addFiles('theme/subscriptions.coffee', 'server');

  api.addFiles('calendar/themesprovider.coffee');

  api.addFiles('calendar/themecomponent.html');
  api.addFiles('calendar/themecomponent.coffee');
  api.addFiles('calendar/themecomponent.styl');
});

Package.describe({
  name: 'domgolonka:lz4',
  version: '0.10.0',
  summary: 'Wrapper for the Package Node-Lz4',
  git: 'https://github.com/domgolonka/meteor-lz4',
  documentation: 'README.md'
});
Npm.depends({
  lz4: "0.4.0"
});
Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles(['lib/lz4.js'],['server']);
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('domgolonka:lz4');
  api.addFiles('lz4-tests.js');
});

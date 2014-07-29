Package.describe({
  summary: "Super-smooth CSS3 transformations and transitions for jQuery"
});

Package.on_use(function (api) {
  api.add_files('jquery.transit/jquery.transit.js', 'client')
  api.add_files('alias.js', 'client');
});

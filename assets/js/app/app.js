requirejs.config({
  baseUrl: "js/",
  paths: {
    jquery: 'jquery',
    db:'app/modules/db',
    lodash:'lodash.min',
    framework:'app/modules/framework',
    person:"app/modules/person",
    sweetalert:"sweetalert.min",
    thumbnail:"app/modules/thumbnail"
  },
  shim: {

  }
});

requirejs(["app/main"]);

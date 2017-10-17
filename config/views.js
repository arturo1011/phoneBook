/**
 * View Engine Configuration
 * (sails.config.views)
 *
 * Server-sent views are a classic and effective way to get your app up
 * and running. Views are normally served from controllers.  Below, you can
 * configure your templating language/framework of choice and configure
 * Sails' layout support.
 *
 * For details on available options for configuring server-side views, check out:
 * https://sailsjs.com/config/views
 *
 * For more background information on views and partials in Sails, check out:
 * https://sailsjs.com/docs/concepts/views
 */

module.exports.views = {

  /***************************************************************************
  *                                                                          *
  * Extension to use for your views. When calling `res.view()` in an action, *
  * you can leave this extension off. For example, calling                   *
  * `res.view('homepage')` will (using default settings) look for a          *
  * `views/homepage.handlebars` file.                                               *
  *                                                                          *
  ***************************************************************************/

   extension: 'handlebars',
    layout      : false,
   getRenderFn: function() {
    // Import `handlebars`.
    var cons = require('consolidate');
    var handlebars=require('handlebars');

     handlebars.registerHelper('resolveUrl', function(action,controller) {
       return  sails.getRouteFor(controller+'.'+action).url;
     });
    // Return the rendering function for HandleBars.
     cons.requires.handlebars = handlebars;

    return cons.handlebars;
  }

  /***************************************************************************
  *                                                                          *
  * The path (relative to the views directory, and without extension) to the *
  * default layout file to use, or `false` to disable layouts entirely.      *
  *                                                                          *
  * Note that layouts only work with the built-in view engine!               *
  *                                                                          *
  ***************************************************************************/

  // layout: 'layout'

};

/**
 * HomeController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  index:function(req,res){
    var message=req.session.message;
    Person.find().sort('FullName').exec(function (err, people){
      if (err) return res.serverError(err);
      req.session.message =null;

      return res.view({
        partials:
          {
            PersonList:'../Person/_PersonList',
            PersonCreate:'../Person/_PersonCreate',
            _JavascriptResources:'../Shared/_JavascriptResources',

          },
        people: people,
        message:message
      });

    });

  }
};


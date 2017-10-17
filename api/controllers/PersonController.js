/**
 * PersonController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

var AWS = require('aws-sdk'),
  s3 ;

module.exports = {

  create:function(req,res)
   {
     var bucketName = 'digitalsupport';
     var newPerson={
       FullName:req.param("FullName"),
       Phone:req.param("Phone"),
       Email:req.param("Email")
     };

     req.file('Avatar')
       .upload({
         adapter: require('skipper-s3'),
         key: 'AKIAITEHC3NSP4TRPJPQ',
         secret: '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',
         bucket: bucketName
       }, function whenDone(err, uploadedFiles) {
         if (err) {
           return res.serverError(err);
         }
         var fileUploaded=uploadedFiles[0];
         newPerson.PhotoUrl=fileUploaded.extra.Location;

         Person.create(newPerson)
           .meta({fetch: true})
           .exec(function (err,createdPerson){
             if (err) {
               return res.serverError(err);
             }
             sails.log('Id is:', createdPerson.id);
             req.session.message="The item has been created successfully";
             return res.redirect("/");
       });

       });
   },
};


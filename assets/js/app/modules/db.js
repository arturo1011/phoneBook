define(["jquery"],
  function ($) {

    return {
      GetPersonDetail:function(idPerson)
      {
        var dfd = $.Deferred();

        $.get(CommonUrls.Person+idPerson).
        done(function (data) {
          dfd.resolve(data);
        });

        return dfd.promise();
      },
      DeletePerson:function(idPerson)
      {
        var dfd = $.Deferred();

        $.ajax({
          url: CommonUrls.Person+idPerson,
          type: "DELETE",
          contentType: 'json',
          data: {},
          cache: false,
          processData: false,
          success: function(data) {
            dfd.resolve(data);
          }
        });

        return dfd.promise();

      },
      UpdatePerson:function(person)
      {
        var dfd = $.Deferred();

        $.ajax({
          url: CommonUrls.Person+person.id,
          type: "PATCH",
          contentType: 'application/json; charset=utf-8',
          data: JSON.stringify(person),
          cache: false,
          processData: false,
          success: function(data) {
            dfd.resolve(data);
          }
        });


        return dfd.promise();
      }
    }
  });

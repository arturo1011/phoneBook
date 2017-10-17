define(["jquery","lodash"],
  function ($,_) {

    return {
      FillFormWithData:function(form,data)
      {
        _.forOwn(data, function(value, key) {

          if($(form).find("[name='"+key+"']").length>0)
            $(form).find("[name='"+key+"']").val(value);
        });
      },
      ClearAll:function(container)
      {
        $(".fileinput").removeClass("fileinput-exists").addClass("fileinput-new");
        $(".thumbnail").empty();
        $("#titleDetail").text("Add new");

        var inputs=$(container).find("input");
        $.each(inputs,function(index,input){
          $(input).val("");
        });

      },
      FillObjectFromForm:function(object,form)
      {
        var inputs=$(form).find("input");
        $.each(inputs,function(index,element){

          if($(element).is('[name]') && typeof(element) !="undefined")

            if(object.hasOwnProperty($(element).attr("name")))
            {
              object[$(element).attr("name")]=$(element).val();
            }

        });

      }
    }
  });

define(["jquery","lodash"],
  function ($,_) {

    return function Thumbnail()
    {

      this.update=function(url) {
        var image=$("<img>",{"src":url});
        $(".thumbnail").empty();
        $(".thumbnail").append(image);
        $(".loader").hide();
        $(".btn-file").hide();
      }

    }});

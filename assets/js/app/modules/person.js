define(["jquery","lodash"],
  function ($,_) {

  return function Person(context)
  {
    this.context=context;
    this.FullName="";
    this.Phone="";
    this.Email="";

    this.setFullNameLabel=function(text)
    {
      $(this.self).find("#FullNameLabel").text(text);
    }

    this.init=function() {
      this.self = this.context.closest(".person");
      this.id = $(this.self).data("id");
    },

    this.delete=function()
    {
      $(this.self).remove();
    }
    this.init();

  }});

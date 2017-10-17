
require(["db","framework","jquery","person","sweetalert",
"thumbnail"], function (db,framework,$,Person,swal,Thumbnail) {

 var personToUpdate=null;

  $(".person").on("click",function(evt)
  {
    var id=$(this).data("id");
    $("#titleDetail").text("Detail");
    $(".loader").show();
    personToUpdate=new Person($(this));

    $.when(db.GetPersonDetail(id)).then(function(data)
    {
      var thumbnail=new Thumbnail();
      thumbnail.update(data.PhotoUrl);
      framework.FillFormWithData("[name='personForm']",data);

    });

  });

  $("#clearAll").on("click",function (){
    framework.ClearAll($("[name='personForm']"))
    $(".btn-file").show();
  });

  $("#btnSavePerson").on("click",function(evt)
  {
    if(personToUpdate!=null){
      evt.preventDefault();

      framework.FillObjectFromForm(personToUpdate,$("[name='personForm']"));
      console.log(personToUpdate);

      $(".loader").show();
      $.when(db.UpdatePerson(personToUpdate)).then(function(data)
      {
        if(data!=null)
        {
          framework.ClearAll($("[name='personForm']"));
          swal("Success!", "The item has been updated!", "success");
          $(".loader").hide();
        }else
        {
          swal("Error!", "Something went wrong!", "error");
        }
        personToUpdate.setFullNameLabel(personToUpdate.FullName);
        personToUpdate=null;
      });

    }else{
      if($("[name='Avatar']").get(0).files.length>0)
      {
        $(".loader").show();
      }else{
        swal("Error!", "You must select an avatar!", "error");
        evt.preventDefault();
      }
    }

  });

  $("button.close").on("click",function(evt){
    evt.stopPropagation();
    var personSelected=new Person($(this));

    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover the item!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then(function(willDelete){
      if (willDelete) {
        $(".loader").show();
        $.when(db.DeletePerson(personSelected.id)).then(function(data)
        {
          if(data!=null)
          {
            personSelected.delete();
            framework.ClearAll($("[name='personForm']"));
            swal("Success!", "The item has been deleted!", "success");
            $(".loader").hide();
          }else
          {
            swal("Error!", "Something went wrong!", "error");
          }
        });

      }
  })

  });

});

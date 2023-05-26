$(document).ready(function(){
  //  alert('halo ini jquery');

  //let endpoint = 'https://api.goapi.id/v1/regional/provinsi'
  let endpoint ='http://dev.farizdotid.com/api/daerahindonesia/provinsi';
  let apiKey = 'TVOj4Md0E4zHVvvu85J7Al0As0KuWy'

$.ajax({
  url: endpoint,
 // headers: { "x-api-key": apiKey },
  contentType: "application/json",
  dataType: 'json',
  success: function(result){
      debugger;
      console.log(result);
  }
});

    $("#btnaja").click(function(){
        //Swal.fire('simple sweet alert')

    
    })

    
  

});
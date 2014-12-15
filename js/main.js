var fsq = 'https://api.foursquare.com/v2/venues/explore?client_id= GNPQME4WJXXAHQIRSIMCVLOOLS05DXJWYJZD3GESHMQX2NVO  &client_secret= VKZOUFXSD4M5CF3UH1E4M0RL2YQL111HTCZH1DD0S5T5FQ3I&v=20130815 &ll=40.7,-74 &query=coffee'



$.getJSON( fsq, function( data ) {
  var items = [];
  $.each( data, function( key, val ) {
    items.push( "<li id='" + key + "'>" + val + "</li>" );
    console.log(["venue.name"])
  });
 
  $( "<ul/>", {
    "class": "my-new-list",
    html: items.join( "" )
  }).appendTo( "body" );
});

//console.log(["foursquare.refinements"]);

/*
;(function(){
  'use strict';

  function getVenues (id, cb)
    $http.get(fsq(id))
    .sucess(function(data){
      cb(data);
    })
    .error(function(err){
      console.log(err)
    });


}());
*/

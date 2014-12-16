
function getLocation (fsq) {

  if (window.navigator.geolocation) {
    var failure, success;
    success = function() {
      console.log(position.coords.latitude);
     var lat = position.coords.latitude;
     var lng = position.coords.longitude;
    };
    failure = function(message) {
      alert('Cannot retrieve location!');
    };
    navigator.geolocation.getCurrentPosition(success, failure, {
      maximumAge: Infinity,
      timeout: 5000

    });

     var fsq = "https://api.foursquare.com/v2/venues/explore?ll="+lat+","+lng+"&client_id=GNPQME4WJXXAHQIRSIMCVLOOLS05DXJWYJZD3GESHMQX2NVO&client_secret=VKZOUFXSD4M5CF3UH1E4M0RL2YQL111HTCZH1DD0S5T5FQ3I&v=20130619&query="+$("#query").val()+"";
  
  $.getJSON(fsq, function( data ) {
    console.log(data)
    data = (data.response.groups[0].items)
   var items = [];
    $.each( data, function( key) {
    var stores = (data[key].venue.name)
    items.push( "<li id='" + "'>" + stores + "</li>" );
  });
 
  $( "<ul/>", {
    "class": "my-new-list",
    html: items.join( "" )
  }).appendTo( "body" );
  
  }
  }

  
});




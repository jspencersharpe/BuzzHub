;(function(){

  angular.module('buzzHub')

var lat, lng;

if (window.navigator.geolocation) {
    var failure, success;
        success = function(position) {
           lat = position.coords.latitude;
           lng = position.coords.longitude;
      console.log(position.coords.latitude, position.coords.longitude);
      var fsq = "https://api.foursquare.com/v2/venues/explore?ll="+lat+","+lng+"&client_id=GNPQME4WJXXAHQIRSIMCVLOOLS05DXJWYJZD3GESHMQX2NVO&client_secret=VKZOUFXSD4M5CF3UH1E4M0RL2YQL111HTCZH1DD0S5T5FQ3I&v=20130619&query=coffee"; 

      getData(fsq);
      };
    failure = function(message) {
      alert('Cannot retrieve location!');
    };
    navigator.geolocation.getCurrentPosition(success, failure, {
      maximumAge: Infinity,
      timeout: 5000
     });     
    }

function getData(fsq){
$.getJSON(fsq, function( data ) {
    console.log(data)
    data = (data.response.groups[0].items)
    var items = [];
    $.each( data, function( key) {
    var stores = (data[key].venue.name)
    items.push( "<li id= " + stores + ">" + stores + "</li>" );
  });
 
  $( "<ul/>", {
    "class": "shops-found",
    html: items.join( "" )
  }).appendTo( "div.shops-list" );
    $( 'li' ).click(function() {
      var shop = $( this ).text();
      $( "#current-shop" ).val( this.innerHTML );
    })

  });
}
}());






 

   



  




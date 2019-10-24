function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: {lat: 52.520008, lng: 13.404954}
  });

  setMarkers(map);
}

 var locations = [
        ['130', 52.520008, 13.404954, 130], //berlin
        ['90', 51.507351, -0.127758, 90], // london
        ['130', 52.370216, 4.895168, 130], //amsterdam
        ['50', 53.349804, -6.260310, 50], //dublin
        ['40', 53.480759, -2.242631, 40], //manchester
        ['240', 48.856613, 2.352222, 240], //paris
        ['130', 41.385063, 2.173404, 130], //barcelona
        ['180', 40.416775, -3.703790, 180], //madrid
        ['230', 59.913868, 10.752245, 230], //oslo
        ['50', 54.597286, -5.930120, 50], //belfast
      ];

function setMarkers(map) {
  // Adds markers to the map.

  // Marker sizes are expressed as a Size of X,Y where the origin of the image
  // (0,0) is located in the top left of the image.

  // Origins, anchor positions and coordinates of the marker increase in the X
  // direction to the right and in the Y direction down.
  var image = {
    url: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
    // This marker is 20 pixels wide by 32 pixels high.
    size: new google.maps.Size(20, 32),
    // The origin for this image is (0, 0).
    origin: new google.maps.Point(0, 0),
    // The anchor for this image is the base of the flagpole at (0, 32).
    anchor: new google.maps.Point(0, 32)
  };
  // Shapes define the clickable region of the icon. The type defines an HTML
  // <area> element 'poly' which traces out a polygon as a series of X,Y points.
  // The final coordinate closes the poly by connecting to the first coordinate.

  for (var i = 0; i < locations.length; i++) {
    var location = locations[i];
    var marker = new google.maps.Marker({
      position: {lat: location[1], lng: location[2]},
      map: map,
      icon: image,
      title: location[0],
    });
  }
}



/*
 function initMap() {

        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 5,
          center: {lat: 49.815273, lng: 6.129583}
        });

          var request = {
          placeId: 'place_id',
          fields: ['name', 'formatted_address', 'place_id', 'geometry']
        };


        var infowindow = new google.maps.InfoWindow();
        var service = new google.maps.places.PlacesService(map);

          service.getDetails(request, function(place, status) {
          if (status === google.maps.places.PlacesServiceStatus.OK) {
            var marker = new google.maps.Marker({
              map: map,
              position: place.geometry.location
            });
            google.maps.event.addListener(marker, 'click', function() {
              infowindow.setContent('<div><strong>' + place.name + '</strong><br>' +
                'Place ID: ' + place.place_id + '<br>' +
                place.formatted_address + '</div>');
              infowindow.open(map, this);
            });
          }
        });


        // Create an array of the cities used to label the markers.
        var cityNames = ["Berlin", "London", "Amsterdam", "Dublin", "Manchester", "Paris", "Barcelona", "Madrid", "Oslo", "Belfast"];

        // Add some markers to the map.
        // Note: The code uses the JavaScript Array.prototype.map() method to
        // create an array of markers based on a given "locations" array.
        // The map() method here has nothing to do with the Google Maps API.
        var markers = locations.map(function(location, i) {
          return new google.maps.Marker({
            position: location,
            label: cityNames[i % cityNames.length]
          });
        });
        

        // Add a marker clusterer to manage the markers.
       // var markerCluster = new MarkerClusterer(map, markers,
            //{imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
            setMarkers(map);
     }
*/    

/*
      var locations = [
        {lat: 52.520008, lng: 13.404954, cost: 130}, //berlin
        {lat: 51.507351, lng: -0.127758, cost: 90}, // london
        {lat: 52.370216, lng: 4.895168, cost: 130}, //amsterdam
        {lat: 53.349804, lng: -6.260310, cost: 50}, //dublin
        {lat: 53.480759, lng: -2.242631, cost: 40}, //manchester
        {lat: 48.856613, lng: 2.352222, cost: 240}, //paris
        {lat: 41.385063, lng: 2.173404, cost: 130}, //barcelona
        {lat: 40.416775, lng: -3.703790, cost: 180}, //madrid
        {lat: 59.913868, lng: 10.752245, cost: 230}, //oslo
        {lat: 54.597286, lng: -5.930120, cost: 50}, //belfast
      ];
  */
  /*    
      let budget = locations.filter(function(price){
        if (price <= 100) {
          return price.cost <=100;
        } else if (price > 100 && price <= 200) {
          return price.cost > 100 && <= 200;
        } else {
          return price.cost;
        }
      });
      
      console.log(budget);
      */
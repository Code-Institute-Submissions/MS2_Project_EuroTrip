
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
        var markerCluster = new MarkerClusterer(map, markers,
            {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
     }
    


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
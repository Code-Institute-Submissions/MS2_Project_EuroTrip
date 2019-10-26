function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: {lat: 52.520008, lng: 13.404954}
  });

  setMarkers(map);
  
google.maps.event.addListener(map,'click', function() {
  $('places').text("test");
  $('#places').addClass('placesTest');
});

}

var locations = [
        ['130', 52.520008, 13.404954, 130, 'berlin'], //berlin
        ['90', 51.507351, -0.127758, 90, 'london'], // london
        ['130', 52.370216, 4.895168, 130, 'amsterdam'], //amsterdam
        ['50', 53.349804, -6.260310, 50, 'dublin'], //dublin
        ['40', 53.480759, -2.242631, 40, 'manchester'], //manchester
        ['240', 48.856613, 2.352222, 240, 'paris'], //paris
        ['130', 41.385063, 2.173404, 130, 'barcelona'], //barcelona
        ['180', 40.416775, -3.703790, 180, 'madrid'], //madrid
        ['230', 59.913868, 10.752245, 230, 'oslo'], //oslo
        ['50', 54.597286, -5.930120, 50, "belfast"], //belfast
      ];

var locationz = [
        {lat: 52.520008, lng: 13.404954, cost: 130, name: 'berlin'}, //berlin
        {lat: 51.507351, lng: -0.127758, cost: 90, name: 'london'}, // london
        {lat: 52.370216, lng: 4.895168, cost: 130, name: 'amsterdam'}, //amsterdam
        {lat: 53.349804, lng: -6.260310, cost: 50, name: 'dublin'}, //dublin
        {lat: 53.480759, lng: -2.242631, cost: 40, name: 'manchester'}, //manchester
        {lat: 48.856613, lng: 2.352222, cost: 240, name: 'paris'}, //paris
        {lat: 41.385063, lng: 2.173404, cost: 130, name: 'barcelona'}, //barcelona
        {lat: 40.416775, lng: -3.703790, cost: 180, name: 'madrid'}, //madrid
        {lat: 59.913868, lng: 10.752245, cost: 230, name: 'oslo'}, //oslo
        {lat: 54.597286, lng: -5.930120, cost: 50, name: 'belfast'}, //belfast
      ];

function setMarkers(map) {
  // Adds markers to the map.

  for (var i = 0; i < locationz.length; i++) {
    var location = locationz[i];
    var marker = new google.maps.Marker({
     // position: {lat: location[1], lng: location[2]},
      position: {lat: location.lat, lng: location.lng},
      map: map,
      title: `${location.name} : €${location.cost}`
      //label: location[3]  - might try add lable to icons
      //icon: 'might add a new marke in here'
    });
    
    
  }
}

/* testing out jquery, to be used to add places info to the places section when a marker is clicked
$('#submitButton').click(function(){
  $('#places').addClass('placesTest');
});

 marker.addListener('click', function() {
   $('#places').addClass('placesTest');
*/
google.maps.event.addListener(marker,'click', function() {
  $('places').text("test");
   $('#places').addClass('placesTest');
});




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

*/



let newLocations;

function getSearchValue() {

let searchValue = document.getElementById("locationsGenerator").value;

let newLocations = locationz.filter(function(place) {
  return place.cost <= searchValue;
});
console.log(newLocations);
};



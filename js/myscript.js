function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: {lat: 52.520008, lng: 13.404954}
  });

  setMarkers(map);
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

function setMarkers(map) {
  // Adds markers to the map.

  for (var i = 0; i < locations.length; i++) {
    var location = locations[i];
    var marker = new google.maps.Marker({
      position: {lat: location[1], lng: location[2]},
      map: map,
      title: location[0],
      //label: location[3]  - might try add lable to icons
    });
  }
}

/* testing out jquery, to be used to add places info to the places section when a marker is clicked
$('#submitButton').click(function(){
  $('#places').addClass('placesTest');
});

 marker.addListener('click', function() {
   $('#places').addClass('placesTest');
});*/


//filter function for search bar


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
      let budgetInput = locations.filter(function(price){
        if (price <= 100) {
          return price.cost <=100;
        } else if (price > 100 && price <= 200) {
          return price.cost > 100 && <= 200;
        } else {
          return price.cost;    <-i want to return the locations that are available for that price
        }
      });
      
      console.log(budget);
      
      
      

      function checkPrice(price) {
        return age >= 18;
      }
      
      function myFunction() {
        document.getElementById("trending").innerHTML = locations[3].filter(checkAdult);
      }
      */
      
      //testing how to access array data
    //  for (var i = 0; i < locations.length; i++) {
    //  console.log(locations[i][3], locations[i][1]);}
 
 testValue = [12, 14, 16, 19, 20, 30];     
      
  //function getSearchValue() {
  
//  var locatFilter = locations.filter(function(price){
  
/*  for (var i = 0; i < locations.length; i++) {
    
    if (searchValue < 100) {
      alert("less than 100");
      return price[i][3] < 100;
      //return loactions = locations.filter(number => number < 100);  // return the places in the array less than 100
    } else if (searchValue >= 100 && searchValue < 200){
      alert("between 100 and 200");
      return price[i][3] >= 100 && price[i][3] < 200;
      //var locations = locations[i][3] >= 100;
      //return locations = locations.filter(number => number >= 100 && < 200); return the places in the array in between 100 and 200
    } else {
      alert("over 200");
      return price[i][3] >= 200;
      //return locations = locations.filter(number => number >= 200); return the places in the array over 200
    }
    }
  });
  console.log(locatFilter);
 // }
 
 var ages = [32, 33, 12, 40];
*/

var searchValue = document.getElementById("locationsGenerator").value;
var newLocations = [];



for (var i = 0; i < locations.length; i++) {
  console.log(locations[i][3] <100);
  
}
  /*
  newLocations.push(locations[i]);
  console.log(newLocations[i]);
} if (searchValue <100) {
  
  newLocations.push(locations[i]);
  console.log(newLocations[i]);
}


  if (searchValue <100) {
    newLocations.push(locations[i][3] <100);
    //var newLocations = (locations[i][3] <100)
    console.log(newLocations);
  } else if (searchValue >= 100 && searchValue < 200) {
   
    var newLocations = ((locations[i][3] <100) && (locations[i][3] <=200))
    console.log(newLocations);
  } else {
    
    var newLocations = (locations[i][3] > 200)
    console.log(newLocations);
  }
  }*/





 var map, places, infoWindow;
      var markers = [];
      var autocomplete;
      var MARKER_PATH = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
      var hostnameRegexp = new RegExp('^https?://.+?/');

      var countries = {

        'br': {
          center: {lat: -14.2, lng: -51.9},
          zoom: 3
        },

        'fr': {
          center: {lat: 46.2, lng: 2.2},
          zoom: 5
        },
        'de': {
          center: {lat: 51.2, lng: 10.4},
          zoom: 5
        },

        'it': {
          center: {lat: 41.9, lng: 12.6},
          zoom: 5
        },

        'es': {
          center: {lat: 40.5, lng: -3.7},
          zoom: 5
        },
        'pt': {
          center: {lat: 39.4, lng: -8.2},
          zoom: 6
        },

        'uk': {
          center: {lat: 54.8, lng: -4.6},
          zoom: 5
        }
      };

      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: {lat: 52.520008, lng: 13.404954},
          mapTypeControl: false,
          panControl: false,
          zoomControl: false,
          streetViewControl: false
        });

        infoWindow = new google.maps.InfoWindow({
          content: document.getElementById('info-content')
        });
keeping the selected country as the restriction for the city to search., 
        // 
        autocomplete = new google.maps.places.Autocomplete(
            /** @type {!HTMLInputElement} */ (
                document.getElementById('autocomplete')), {
              types: ['(cities)'],
            });
        places = new google.maps.places.PlacesService(map);

        autocomplete.addListener('place_changed', onPlaceChanged);

        document.getElementById('country').addEventListener(
            'change', setAutocompleteCountry);
      }


  
     function onPlaceChanged() {
        var place = autocomplete.getPlace();
        if (place.geometry) {
          map.panTo(place.geometry.location);
          map.setZoom(12);
          search();
        } else {
          document.getElementById('autocomplete').placeholder = 'Enter a city';
        }
      }


      var search = {
          bounds: map.getBounds(),
          types: ['tourist_attraction']
        };


       places.nearbySearch(search, function(results, status) {
          if (status === google.maps.places.PlacesServiceStatus.OK) {
            clearResults();
            clearMarkers();

            for (var i = 0; i < results.length; i++) {
              var markerLetter = String.fromCharCode('A'.charCodeAt(0) + (i % 26));
              var markerIcon = MARKER_PATH + markerLetter + '.png';

              markers[i] = new google.maps.Marker({
                position: results[i].geometry.location,
                animation: google.maps.Animation.DROP,
                icon: markerIcon
              });

              markers[i].placeResult = results[i];
              google.maps.event.addListener(markers[i], 'click', showInfoWindow);
              setTimeout(dropMarker(i), i * 100);
              addResult(results[i], i);
            }
          }
        });















/*function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: {lat: 52.520008, lng: 13.404954}
  });

  setMarkers(map);


}

let newLocations;

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
        {lat: 52.520008, lng: 13.404954, cost: 130, name: 'Berlin'}, //berlin
        {lat: 51.507351, lng: -0.127758, cost: 90, name: 'London'}, // london
        {lat: 52.370216, lng: 4.895168, cost: 130, name: 'Amsterdam'}, //amsterdam
        {lat: 53.349804, lng: -6.260310, cost: 50, name: 'Dublin'}, //dublin
        {lat: 53.480759, lng: -2.242631, cost: 40, name: 'Manchester'}, //manchester
        {lat: 48.856613, lng: 2.352222, cost: 240, name: 'Paris'}, //paris
        {lat: 41.385063, lng: 2.173404, cost: 130, name: 'Barcelona'}, //barcelona
        {lat: 40.416775, lng: -3.703790, cost: 180, name: 'Madrid'}, //madrid
        {lat: 59.913868, lng: 10.752245, cost: 230, name: 'Oslo'}, //oslo
        {lat: 54.597286, lng: -5.930120, cost: 50, name: 'Belfast'},
        {lat: 41.157944, lng: -8.629105, cost: 120, name: 'Porto'},
        {lat: 28.291565, lng: -16.629129, cost: 220, name: 'Tenerife'},
        {lat: 47.376888, lng: 8.541694, cost: 280, name: 'Zurich'},
        {lat: 50.937531, lng: 6.960279, cost: 230, name: 'Cologne'},
        {lat: 48.135124, lng: 11.581981, cost: 320, name: 'Munich'},
        {lat: 37.983810, lng: 23.727539, cost: 380, name: 'Athens'},
        {lat: 50.850346, lng: 4.351721, cost: 70, name: 'Brussels'},
        {lat: 43.738419, lng: 7.424616, cost: 250, name: 'Monaco'},
        {lat: 55.755825, lng: 37.617298, cost: 380, name: 'Moscow'},
        {lat: 50.075539, lng: 14.437800, cost: 170, name: 'Prague'},
        {lat: 64.126518, lng: -21.817438, cost: 245, name: 'Reykjavik'},
        {lat: 59.329323, lng: 18.068581, cost: 260, name: 'Stockholm'},
        {lat: 59.913868, lng: 12.453389, cost: 320, name: 'Vatican City'},
        {lat: 48.208176, lng: 16.373819, cost: 235, name: 'Vienna'},
        {lat: 52.229675, lng: 21.012230, cost: 215, name: 'Warsaw'},
        {lat: 50.064651, lng: 19.944981, cost: 175, name: 'Krakow'},
        {lat: 41.902782, lng: 12.496365, cost: 225, name: 'Rome'},
        {lat: 53.551086, lng: 9.993682, cost: 290, name: 'Hamburg'},
        {lat: 55.953251, lng: -3.188267, cost: 60, name: 'Edinburgh'},
        {lat: 45.440845, lng: 12.315515, cost: 330, name: 'Venice'},
        {lat: 45.464203, lng: 9.189982, cost: 360, name: 'Milan'},
        {lat: 42.650661, lng: 18.094423, cost: 230, name: 'Dubrovnik'},
        {lat: 45.440845, lng: 12.315515, cost: 340, name: 'Venice'}
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
    
    google.maps.event.addListener(marker,'click', function() {
    $('#places').text("${location.name}");
    $('#places').addClass('placesTest');
    });
    
  }
}
/*
document.getElementById('getApi').addEventListener('click', function(){
  
  fetch('https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=Museum%20of%20Contemporary%20Art%20Australia&inputtype=textquery&fields=photos,formatted_address,name,rating,opening_hours,geometry&key=AIzaSyAOCcH27nQCw7DGXAs_NpFTMSsiDgF1oTk', {
    headers: {
    Authentication: 'secret',
    Access-Control-Allow-Origin: '*'
  }
  })
    .then((res) => res.json())
    .then((data) => {
    document.getElementById('trending').innerHTML = data;
    });
})
/*

      
  /*    
      
      
 testing out jquery, to be used to add places info to the places section when a marker is clicked

 marker.addListener('click', function() {
   $('#places').addClass('placesTest');
*/


// Create an array of the cities used to label the markers.
var cityNames = ["Berlin", "London", "Amsterdam", "Dublin", "Manchester", "Paris", "Barcelona", "Madrid", "Oslo", "Belfast"];

function getSearchValue() {

let searchValue = document.getElementById("locationsGenerator").value;

let newLocations = locationz.filter(function(place) {
  return place.cost <= searchValue;
});
console.log(newLocations);
};


/*  kayak ap to be embedded to book flights
KAYAK.embed({
container: document.getElementById('kayak'),
hostname: "www.kayak.com",
autoPosition: true,
defaultProduct: "hotels",
enabledProducts: ["hotels", "flights"],
startDate: "2018-10-02",
endDate: "2018-10-28",
origin: "New York, NY",
destination: "Boston, MA",
ssl: true,
affiliateId: "acme_corp",
isInternalLoad: false,
lc: "en",
cc: "us",
mc: "EUR"
});
*/
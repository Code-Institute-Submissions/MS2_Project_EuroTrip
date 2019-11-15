//Declaring variable to be used in the JS

let map, places, infoWindow;
let markers = [];
let autocomplete;
let MARKER_PATH = 'https://developers.google.com/maps/documentation/javascript/images/marker_green';
let hostnameRegexp = new RegExp('^https?://.+?/');

let countries = {

  'br': {
    center: {lat: -14.2, lng: -51.9},
    zoom: 4
  },
  'fr': {
    center: {lat: 46.2, lng: 2.2},
    zoom: 6
  },
  'de': {
    center: {lat: 51.2, lng: 10.4},
    zoom: 6
  },
  'it': {
    center: {lat: 41.9, lng: 12.6},
    zoom: 6
  },
  'es': {
    center: {lat: 40.5, lng: -3.7},
    zoom: 6
  },
  'pt': {
    center: {lat: 39.4, lng: -8.2},
    zoom: 7
  },
  'uk': {
    center: {lat: 54.8, lng: -4.6},
    zoom: 6
  },
  'hu': {
    center: {lat: 47.1625, lng: 19.5033},
    zoom: 7
  },
  'no': {
    center: {lat: 60.4720, lng: 8.4689},
    zoom: 5
  },
  'gr': {
    center: {lat: 39.0742, lng: 21.8243},
    zoom: 8
  },
  'pl': {
    center: {lat: 51.9194, lng: 19.1451},
    zoom: 7
  },
  'hr': {
    center: {lat: 45.1000, lng: 15.2},
    zoom: 8
  }
};

let locationz = [
  {lat: 52.520008, lng: 13.404954, cost: 130, name: 'Berlin'},
  {lat: 51.507351, lng: -0.127758, cost: 90, name: 'London'},
  {lat: 52.370216, lng: 4.895168, cost: 130, name: 'Amsterdam'},
  {lat: 53.349804, lng: -6.260310, cost: 50, name: 'Dublin'},
  {lat: 53.480759, lng: -2.242631, cost: 40, name: 'Manchester'},
  {lat: 48.856613, lng: 2.352222, cost: 240, name: 'Paris'},
  {lat: 41.385063, lng: 2.173404, cost: 130, name: 'Barcelona'},
  {lat: 40.416775, lng: -3.703790, cost: 180, name: 'Madrid'}, 
  {lat: 59.913868, lng: 10.752245, cost: 230, name: 'Oslo'}, 
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
];

/**
 * @initMap
 * This function calls the map into the div and initialises it
 */
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
zoom: 4,
center: {lat: 52.520008, lng: 13.404954},
    mapTypeControl: true,
    panControl: true,
    zoomControl: true,
    streetViewControl: true
  });

  infoWindow = new google.maps.InfoWindow({
    content: document.getElementById('info-content')
  });

  //calls autocpmlete and assocaites it to the input value
  autocomplete = new google.maps.places.Autocomplete(
    //restricts to selected country and cities type
       (document.getElementById('autocomplete')), {
        types: ['(cities)'],
        componentRestrictions: countryRestrict
      });
  places = new google.maps.places.PlacesService(map);

  autocomplete.addListener('place_changed', onPlaceChanged);

  //listener for when a countries selected
  document.getElementById('country').addEventListener(
      'change', setAutocompleteCountry);
}

/**
 * @onPlaceChanged
 * returns place detials for city and zooms in on map
 */
function onPlaceChanged() {
  let place = autocomplete.getPlace();
  if (place.geometry) {
    map.panTo(place.geometry.location);
    map.setZoom(12);
    search();
  } else {
    document.getElementById('autocomplete').placeholder = 'Enter a city';
  }
}

/**
 * @search
 * searches for tourist attractions within the map's viewport
 */
function search() {
  let search = {
    bounds: map.getBounds(),
    types: ['tourist_attraction']
  };

  places.nearbySearch(search, function(results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      clearResults();
      clearMarkers();

      //setting the markers with letters of alphabet as titles
      for (let i = 0; i < results.length; i++) {
        let markerLetter = String.fromCharCode('A'.charCodeAt(0) + (i % 26));
        let markerIcon = MARKER_PATH + markerLetter + '.png';
        
        //animated to drop markers one at a time in delayed fashion
        markers[i] = new google.maps.Marker({
          position: results[i].geometry.location,
          animation: google.maps.Animation.DROP,
          icon: markerIcon
        });
        //info window appears when a marer is clicked
        markers[i].placeResult = results[i];
        google.maps.event.addListener(markers[i], 'click', showInfoWindow);
        setTimeout(dropMarker(i), i * 100);
        addResult(results[i], i);
      }
    }
  });
}

/**
 * @clearMarkers
 * to clear the markers when another city is search or country slected form dropdown
 */
function clearMarkers() {
  for (let i = 0; i < markers.length; i++) {
    if (markers[i]) {
      markers[i].setMap(null);
    }
  }
  markers = [];
}

/**
 * @setAutocompleteCountry
 * sets country restriction to one that is selected and then zooms to that country
 */
function setAutocompleteCountry() {
  let country = document.getElementById('country').value;
  if (country == 'all') {
    autocomplete.setComponentRestrictions({'country': []});
    map.setCenter({lat: 52.520008, lng: 13.404954});
    map.setZoom(4);
  } else {
    autocomplete.setComponentRestrictions({'country': country});
    map.setCenter(countries[country].center);
    map.setZoom(countries[country].zoom);
  }
  clearResults();
  clearMarkers();
}

function dropMarker(i) {
  return function() {
    markers[i].setMap(map);
  };
}


/**
 * @addResult
 * adds reult names to a section beside the map
 */
function addResult(result, i) {
  let results = document.getElementById('results');
  let markerLetter = String.fromCharCode('A'.charCodeAt(0) + (i % 26));
  let markerIcon = MARKER_PATH + markerLetter + '.png';

  let tr = document.createElement('tr');
  tr.style.backgroundColor = (i % 2 === 0 ? '#F0F0F0' : '#FFFFFF');
  tr.onclick = function() {
    google.maps.event.trigger(markers[i], 'click');
  };

  let iconTd = document.createElement('td');
  let nameTd = document.createElement('td');
  let icon = document.createElement('img');
  icon.src = markerIcon;
  icon.setAttribute('class', 'placeIcon');
  icon.setAttribute('className', 'placeIcon');
  let name = document.createTextNode(result.name);
  iconTd.appendChild(icon);
  nameTd.appendChild(name);
  tr.appendChild(iconTd);
  tr.appendChild(nameTd);
  results.appendChild(tr);
}

function clearResults() {
  let results = document.getElementById('results');
  while (results.childNodes[0]) {
    results.removeChild(results.childNodes[0]);
  }
}

/**
 * @showInfoWindow
 * gets the details for the attraction selected and shows in info window
 */
function showInfoWindow() {
  let marker = this;
  places.getDetails({placeId: marker.placeResult.place_id},
      function(place, status) {
        if (status !== google.maps.places.PlacesServiceStatus.OK) {
          return;
        }
        infoWindow.open(map, marker);
        buildIWContent(place);
      });
}

/**
 * @buildIWContent
 * loads the info gathered in infowindow function and puts it into HTML elements
 */
function buildIWContent(place) {
  document.getElementById('iw-icon').innerHTML = '<img class="cityIcon" ' +
      'src="' + place.icon + '"/>';
  document.getElementById('iw-url').innerHTML = '<b><a href="' + place.url +
      '">' + place.name + '</a></b>';
  document.getElementById('iw-address').textContent = place.vicinity;

  if (place.formatted_phone_number) {
    document.getElementById('iw-phone-row').style.display = '';
    document.getElementById('iw-phone').textContent =
        place.formatted_phone_number;
  } else {
    document.getElementById('iw-phone-row').style.display = 'none';
  }

  if (place.rating) {
    let ratingHtml = '';
    for (let i = 0; i < 5; i++) {
      if (place.rating < (i + 0.5)) {
        ratingHtml += '&#10025;';
      } else {
        ratingHtml += '&#10029;';
      }
    document.getElementById('iw-rating-row').style.display = '';
    document.getElementById('iw-rating').innerHTML = ratingHtml;
    }
  } else {
    document.getElementById('iw-rating-row').style.display = 'none';
  }

  if (place.website) {
    let fullUrl = place.website;
    let website = hostnameRegexp.exec(place.website);
    if (website === null) {
      website = 'http://' + place.website + '/';
      fullUrl = website;
    }
    document.getElementById('iw-website-row').style.display = '';
    document.getElementById('iw-website').textContent = website;
  } else {
    document.getElementById('iw-website-row').style.display = 'none';
  }
}

/**
 * @filterArrayByCost
 * add html content to a div below search bar, or an alert depending on input,
 * eligible cities retuned in the div
 */
function filterArrayByCost(givenArray, cost) {
  return givenArray.filter(function(place) {
    return place.cost <= cost;
  });
}

function getSearchValue() {

let searchValue = document.getElementById("locationsGenerator").value;
let el = document.getElementById("cityInBudget");
el.innerHTML = "";

if (searchValue < 1) {
  alert("Nice try, we aren't paying for your holiday! :)");
}else if (searchValue < 40) {
  alert("Nothing within budget I'm afraid, try again");
}else {

let newLocations = filterArrayByCost(locationz, searchValue);

newLocations.map(function(obj) {

el.innerHTML += 

`
<div class="container d-none d-sm-block pt-4">
    <div class="row pb-3">
        <div class="col-3 col-sm-3 mx-auto filtered-city-name">${obj.name}
        </div>
        <div class="col-2 col-sm-2 mx-auto">
            <a class="btn btn btn-success filtered-city-button" href="https://www.kayak.com/" role="button" title="kayak" target="_blank" rel="noopener"> Book </a>
        </div>
        <div class="col-3 col-sm-2 explore-button mx-auto">
            <a class="btn btn btn-success filtered-city-button" href="#searchMap" role="button">Explore</a>
        </div>
    </div>
</div>
<div class="container d-block d-sm-none pt-4">
    <div class="row pb-3">
        <div class="col-4 filtered-city-name">${obj.name}
        </div>
    </div>
    <div class="row pb-3">
        <div class="col-3">
            <a class="btn btn-primary filtered-city-button" href="https://www.kayak.com/" role="button" title="kayak" target="_blank" rel="noopener" aria-label="kayak"> Book </a>
        </div>
    </div>
</div>
`;})
;}
}

/* Seperate Event Listners Section */


/*   Carousel section      */ 

//apends card to end depending wheter user clicks left or right
$('#carouselExample').on('slide.bs.carousel', function (e) {

    let $e = $(e.relatedTarget);
    let index = $e.index();
    let numOfCards = 3;
    let totalCards = $('.carousel-item').length;
    
    if (index >= totalCards-(numOfCards-1)) {
        let cardsTurn = numOfCards - (totalCards - index);
        for (let i=0; i<cardsTurn; i++) {
            if (e.direction=="left") {
                $('.carousel-item').eq(i).appendTo('.carousel-inner');
            }
            else {
                $('.carousel-item').eq(0).appendTo('.carousel-inner');
            }
        }
    }
});


/* to open up the maps div when explore button and search is clicked */ 


$('#exploreMaps').on('click', function() {
  $('#searchMap').removeClass('d-none');
});


$('#submitButton').on('click', function() {
  $('#searchMap').removeClass('d-none');
  
  //adding scroll class to hidden div so user knows when to scroll 
  $('#cityInBudget').addClass('scroll-on-click');
  getSearchValue();
});

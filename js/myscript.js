function initMap() {
  // The location of Uluru
  var uluru = {lat: -25.344, lng: 131.036};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 4, center: {lat: 49.610933, lng: 6.131580}}); 
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: {lat: 49.610933, lng: 6.131580}, map: map});
}


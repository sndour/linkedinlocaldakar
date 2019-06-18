
L.mapbox.accessToken = 'pk.eyJ1Ijoid2VibWFzdGVybWFuaSIsImEiOiJjanBpaW1ma3IwMDdyM3ZwOTZsODQ0bXI0In0.JRdXPrNLSg-1P_gPnC0wqQ';
/*
var map = L.mapbox.map('map')
  .setView([40, -74.50], 9)
  .addLayer(L.mapbox.styleLayer('mapbox://styles/mapbox/streets-v11'));
*/

var map = L.mapbox.map('map', 'mapbox.streets')
  .setView([14.695693, -17.473218], 15)
  .addLayer(L.mapbox.styleLayer('mapbox://styles/mapbox/streets-v11'));
L.marker([14.695693, -17.473218]).addTo(map);



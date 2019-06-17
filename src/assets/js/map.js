L.mapbox.accessToken = 'pk.eyJ1Ijoic292ZXJlaWduc3R1ZGlvIiwiYSI6ImNqdW4xeDhhcDB1MGMzem1xdXV0YmxxbTMifQ.q9dGyFw0yNaxZLiuJ2oq6Q';
/*
var map = L.mapbox.map('map')
  .setView([40, -74.50], 9)
  .addLayer(L.mapbox.styleLayer('mapbox://styles/mapbox/streets-v11'));
*/

var map = L.mapbox.map('map', 'mapbox.streets')
  .setView([14.695693, -17.473218], 15)
  .addLayer(L.mapbox.styleLayer('mapbox://styles/mapbox/streets-v11'));
L.marker([14.695693, -17.473218]).addTo(map);



document.addEventListener("DOMContentLoaded", function() {
var MarkerIcon = L.Icon.extend({
    options: {
        iconSize:     [30, 30],
        iconAnchor:   [15, 15]
    }
});

var boltIcon = new MarkerIcon({iconUrl: 'img/coloured_bolt.png'});
var mymap = L.map('map').setView([53.96, -3.22], 5);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  id: 'mapbox/streets-v11',
  tileSize: 512,
  zoomOffset: -1,
  accessToken: 'pk.eyJ1IjoiZW5lcmd5dmlzIiwiYSI6ImNrbjR2aWo4azBsaHEycHM5dHByZzFnZW8ifQ.MyLCIQqHnNHQFWJQqs-j4w'
}).addTo(mymap);

var geojsonFeature = {'type': 'FeatureCollection', 'features': [{'type': 'Feature', 'properties': {'description': 'We are aware of a fault in your area. If you require more information please call us on: \nCentral and Southern Scotland:  0800 092 9290 . \n Cheshire, Merseyside, North Wales and North Shropshire: 0800 001 5400.', 'dno': 'sp', 'estimated_restored_time': '2021-04-10 22:30', 'incident_id': 'INCD-562579-s', 'incident_url': 'https://www.spenergynetworks.co.uk/pages/power_cuts_map.aspx?incRef=INCD-562579-s', 'postcodes_impacted': ['KY157TN', 'KY77TN'], 'received_time': '2021-04-10 22:25'}, 'geometry': {'type': 'Point', 'coordinates': [-3.100015605811672, 56.25866063387814]}}, {'type': 'Feature', 'properties': {'description': 'There is a power cut in the G72 postcode area of Cambuslang. We had no advance warning of this and only became aware of it at 8:55pm. Our emergency response team have arrived at the Sommervell Street substation and the team will work to get your power back on as quickly and as safely as possible by midnight. We apologise for the inconvenience and thank you for your patience. This message was updated at 9:32pm on Saturday, 10 April 2021', 'dno': 'sp', 'estimated_restored_time': '2021-04-10 23:03', 'incident_id': 'INCD-504057-f', 'incident_url': 'https://www.spenergynetworks.co.uk/pages/power_cuts_map.aspx?incRef=INCD-504057-f', 'postcodes_impacted': ['G721AA', 'G727EG', 'G727EL', 'G727EN', 'G728AA', 'G728AB', 'G728AS', 'G728AT', 'G728BP', 'G728BU', 'G781SR'], 'received_time': '2021-04-10 21:03'}, 'geometry': {'type': 'Point', 'coordinates': [-4.193129877488637, 55.81734783321683]}}, {'type': 'Feature', 'properties': {'description': 'There is a power cut in the CA6, DG11, DG14, DG16 postcode areas of Carlisle, Lockerbie, Canonbie and Gretna. We had no advance warning of this and only became aware of it at 6:55pm. Our team has managed to restore power to a number of properties in the area and are still working to repair damaged electrical equipment near to Gretna primary substation affecting the rest of our customers without power. We now expect all power to be back on as quickly and as safely as possible by 1:00am. We will update this message if this information changes. We apologise for the inconvenience and thank you for your patience. This message was updated at 8:50pm on Saturday, 10th April 2021', 'dno': 'sp', 'estimated_restored_time': '2021-04-11 00:00', 'incident_id': 'INCD-1807682-i', 'incident_url': 'https://www.spenergynetworks.co.uk/pages/power_cuts_map.aspx?incRef=INCD-1807682-i', 'postcodes_impacted': ['CA6', 'CA61AA', 'DG140TQ', 'DG164EH', 'DG165AA', 'DG165AJ', 'DG165AX', 'DG165BN', 'DG165DD', 'DG165DP', 'DG165DR', 'DG165DT', 'DG165DU', 'DG165DX', 'DG165DY', 'DG165DZ', 'DG165EA', 'DG165EB', 'DG165ED', 'DG165EE', 'DG165EF', 'DG165EG', 'DG165EH', 'DG165EJ', 'DG165EL', 'DG165EN', 'DG165EP', 'DG165EQ', 'DG165ER', 'DG165EW', 'DG165FA', 'DG165FD', 'DG165GG', 'DG165HH', 'DG165HS', 'DG165HY', 'DG165JD', 'DG165JN', 'DG165JU', 'DG165LF', 'DG165LQ', 'DG165ZZ', 'DG166EH'], 'received_time': '2021-04-10 18:55'}, 'geometry': {'type': 'Point', 'coordinates': [-3.0594675120911234, 55.00229615335087]}}, {'type': 'Feature', 'properties': {'description': 'There is an unplanned power cut affecting the SY17 postcode areas of Caersws, affecting properties in Llanwnog and surrounding areas. It was necessary for our engineers to carry out an emergency shutdown at 8:00PM due to a fault on the overhead line network. Our team will be carrying out repair work safely on the overhead line network and this may affect the supply to your property. We will work to get your power back on as quickly and as safely as possible, and we expect the power to be restored by 11:00PM. We will update this message if this information changes. We apologise for the inconvenience and thank you for your patience. This message was updated at 8:16PM on 10th April 2021.', 'dno': 'sp', 'estimated_restored_time': '2021-04-10 22:00', 'incident_id': 'INCD-1807676-i', 'incident_url': 'https://www.spenergynetworks.co.uk/pages/power_cuts_map.aspx?incRef=INCD-1807676-i', 'postcodes_impacted': ['SY175JG', 'SY175JL', 'SY175LA', 'SY175NY', 'SY175NZ', 'SY175PA'], 'received_time': '2021-04-10 17:39'}, 'geometry': {'type': 'Point', 'coordinates': [-3.438060281282415, 52.53670305683182]}}]}

var geoJson = new L.geoJSON(geojsonFeature, {
  onEachFeature: function (feature, layer) {
    layer.bindPopup('<p>'+feature.properties.description+'</p><p>Received time: '+feature.properties.received_time+'</p><p>Estimated restored time: '+feature.properties.estimated_restored_time+'</p><p><a href="'+feature.properties.incident_url+'" target="_blank">Further details</p>');
    layer.setIcon(boltIcon);
  }
}).addTo(mymap);
});
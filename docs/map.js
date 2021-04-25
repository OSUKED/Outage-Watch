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

var geojsonFeature = {'type': 'FeatureCollection', 'features': [{'type': 'Feature', 'properties': {'description': 'A fault occurred on an underground electricity cable affecting the local area.', 'dno': 'ukpn', 'estimated_restored_time': '2021-04-25T03:00:00', 'incident_id': 'INCD-252629-J', 'incident_url': 'https://www.ukpowernetworks.co.uk/power-cut/map?incidentid=INCD-252629-J', 'postcodes_impacted': ['SW165TD', 'SW165AX', 'SW165EN', 'SW165SF', 'SW165UP', 'SW165UT'], 'received_time': '2020-12-30T06:17:00'}, 'geometry': {'type': 'Point', 'coordinates': [-0.13741717216371652, 51.416067744493596]}}, {'type': 'Feature', 'properties': {'description': 'A fault occurred on an underground electricity cable affecting the local area.', 'dno': 'ukpn', 'estimated_restored_time': null, 'incident_id': 'INCD-232814-Z', 'incident_url': 'https://www.ukpowernetworks.co.uk/power-cut/map?incidentid=INCD-232814-Z', 'postcodes_impacted': ['NR129AH', 'NR129AF', 'NR129AN', 'NR129BB', 'NR129BE', 'NR129BF', 'NR129BG', 'NR129EG'], 'received_time': '2021-04-23T16:34:00'}, 'geometry': {'type': 'Point', 'coordinates': [1.512346502176928, 52.77297144903066]}}, {'type': 'Feature', 'properties': {'description': 'A fault occurred on an underground electricity cable affecting the local area.', 'dno': 'ukpn', 'estimated_restored_time': '2021-04-25T03:00:00', 'incident_id': 'INCD-232901-Z', 'incident_url': 'https://www.ukpowernetworks.co.uk/power-cut/map?incidentid=INCD-232901-Z', 'postcodes_impacted': ['PE25DZ', 'PE25DY', 'PE25ER'], 'received_time': '2021-04-24T17:33:00'}, 'geometry': {'type': 'Point', 'coordinates': [-0.2924116276852488, 52.552842413359066]}}, {'type': 'Feature', 'properties': {'description': 'We’re sorry for the loss of supply. We currently have a fault affecting the areas listed. Our engineers are on site working hard to get the power back on as quickly as they can. If you need more information, please call us on 105 or send us a message on <a href="http://m.me/ssencommunity/">Facebook</a> or Twitter (<a href="https://twitter.com/ssencommunity">@ssencommunity</a>) and quote reference \'HC1703\'', 'dno': 'ssen', 'estimated_restored_time': '2021-04-25 05:00:00', 'incident_id': 'HC1703', 'incident_url': 'https://www.ssen.co.uk/Powertrack/', 'postcodes_impacted': ['RG10 8AA', 'RG10 8AS', 'RG10 8AY', 'RG10 8BS', 'RG10 8EQ', 'RG10 8JJ', 'RG10 8JU', 'RG10 8JX', 'RG10 8JY', 'RG10 8LN'], 'received_time': '2021-04-24 21:43:00'}, 'geometry': {'type': 'Point', 'coordinates': [-0.8644481, 51.5021887]}}, {'type': 'Feature', 'properties': {'description': 'We’re sorry for the loss of supply. We currently have a fault affecting the areas listed. Our engineers are on site working hard to get the power back on as quickly as they can. If you need more information, please call us on 105 or send us a message on <a href="http://m.me/ssencommunity/">Facebook</a> or Twitter (<a href="https://twitter.com/ssencommunity">@ssencommunity</a>) and quote reference \'HC1651\'', 'dno': 'ssen', 'estimated_restored_time': '2021-04-25 01:00:00', 'incident_id': 'HC1651', 'incident_url': 'https://www.ssen.co.uk/Powertrack/', 'postcodes_impacted': ['AB43 6LY', 'AB43 6QA', 'AB43 6QB', 'AB43 7LX'], 'received_time': '2021-04-24 18:49:00'}, 'geometry': {'type': 'Point', 'coordinates': [-2.20314625, 57.626634]}}, {'type': 'Feature', 'properties': {'description': 'In Progress', 'dno': 'wpd', 'estimated_restored_time': '2021-04-25 02:30:00', 'incident_id': 'INCD-2403-g', 'incident_url': 'https://powercuts.westernpower.co.uk/incident/INCD-2403-g', 'postcodes_impacted': ['CF15 8DB', 'CF14 0RP'], 'received_time': '2021-04-24 23:33:00'}, 'geometry': {'type': 'Point', 'coordinates': [-3.2076640000000003, 51.532348999999996]}}, {'type': 'Feature', 'properties': {'description': 'In Progress', 'dno': 'wpd', 'estimated_restored_time': '2021-04-25 02:30:00', 'incident_id': 'INCD-358532-G', 'incident_url': 'https://powercuts.westernpower.co.uk/incident/INCD-358532-G', 'postcodes_impacted': ['B28 9QR'], 'received_time': '2021-04-24 22:18:00'}, 'geometry': {'type': 'Point', 'coordinates': [-1.832512, 52.429932]}}, {'type': 'Feature', 'properties': {'description': 'Awaiting', 'dno': 'wpd', 'estimated_restored_time': '2021-04-25 05:00:00', 'incident_id': 'INCD-358536-G', 'incident_url': 'https://powercuts.westernpower.co.uk/incident/INCD-358536-G', 'postcodes_impacted': ['ST18 0TP', 'ST18 0TR', 'ST18 0TF'], 'received_time': '2021-04-25 00:54:00'}, 'geometry': {'type': 'Point', 'coordinates': [-2.000047, 52.795836666666666]}}, {'type': 'Feature', 'properties': {'description': 'In Progress', 'dno': 'wpd', 'estimated_restored_time': '2021-04-25 04:00:00', 'incident_id': 'INCD-358529-G', 'incident_url': 'https://powercuts.westernpower.co.uk/incident/INCD-358529-G', 'postcodes_impacted': ['ST1 6QN', 'ST1 6QL', 'ST1 6QW', 'ST1 6QB', 'ST6 6HG'], 'received_time': '2021-04-24 19:54:00'}, 'geometry': {'type': 'Point', 'coordinates': [-2.1672307999999996, 53.0365726]}}, {'type': 'Feature', 'properties': {'description': 'There is a power cut affecting the TD14 postcode area of Eyemouth. We had no advance warning of this and only became aware of it at 1:15am. Our control centre will attempt to reset the network remotely to restore power in stages, and our emergency response team have arrived onsite to investigate and repair the fault. Our team will work to get your power back on as quickly and as safely as possible by 3:30am. When we receive any update regarding the cause, we will be able to provide you with more information. We apologise for the inconvenience and thank you for your patience. This message was updated 2:05am on 25th April', 'dno': 'sp', 'estimated_restored_time': '2021-04-25 02:19', 'incident_id': 'INCD-506823-f', 'incident_url': 'https://www.spenergynetworks.co.uk/pages/power_cuts_map.aspx?incRef=INCD-506823-f', 'postcodes_impacted': ['TD145QE', 'TD145QF'], 'received_time': '2021-04-25 01:15'}, 'geometry': {'type': 'Point', 'coordinates': [-2.154213936141531, 55.904560080709516]}}, {'type': 'Feature', 'properties': {'description': 'There is a power cut affecting the KY11 postcode area of Rosyth. We had no advance warning of this and only became aware of it at 1:13am. Our engineers are on their way to the local area to investigate the fault and our team will work to get your power back on as quickly and as safely as possible by 4:30am. Once they arrive, or when we receive any update regarding the cause, we will be able to provide you with more information. We apologise for the inconvenience and thank you for your patience. This message was updated at 1:53am on 25th April', 'dno': 'sp', 'estimated_restored_time': '2021-04-25 03:13', 'incident_id': 'INCD-506805-f', 'incident_url': 'https://www.spenergynetworks.co.uk/pages/power_cuts_map.aspx?incRef=INCD-506805-f', 'postcodes_impacted': ['KY112LB', 'KY112LD', 'KY112PA', 'KY112SE'], 'received_time': '2021-04-25 01:13'}, 'geometry': {'type': 'Point', 'coordinates': [-3.4167162260302986, 56.04075166551064]}}, {'type': 'Feature', 'properties': {'description': 'We are aware of a fault in your area. If you require more information please call us on: \nCentral and Southern Scotland:  0800 092 9290 . \n Cheshire, Merseyside, North Wales and North Shropshire: 0800 001 5400.', 'dno': 'sp', 'estimated_restored_time': '2021-04-25 05:15', 'incident_id': 'INCD-506793-f', 'incident_url': 'https://www.spenergynetworks.co.uk/pages/power_cuts_map.aspx?incRef=INCD-506793-f', 'postcodes_impacted': ['EH530', 'EH530DZ', 'EH530JL', 'EH530QJ'], 'received_time': '2021-04-24 23:40'}, 'geometry': {'type': 'Point', 'coordinates': [-3.460899473060502, 55.88901171665026]}}, {'type': 'Feature', 'properties': {'description': 'There is a power cut affecting the WA10 postcode area of St. Helens. We had no advance warning of this and only became aware of it at 11:20pm. Our engineers have arrived onsite and are investigating the cause of the fault.  Our team will work to get your power back on as quickly and as safely as possible by 3:45am. We will update this message if this information changes. We apologise for the inconvenience and thank you for your patience. This message was updated at 1am on 25th April 2021', 'dno': 'sp', 'estimated_restored_time': '2021-04-25 02:31', 'incident_id': 'INCD-1810490-i', 'incident_url': 'https://www.spenergynetworks.co.uk/pages/power_cuts_map.aspx?incRef=INCD-1810490-i', 'postcodes_impacted': ['WA101BU', 'WA101DA', 'WA101DB', 'WA101DD', 'WA101DF', 'WA101DG'], 'received_time': '2021-04-24 23:20'}, 'geometry': {'type': 'Point', 'coordinates': [-2.731722700261825, 53.45238760673718]}}, {'type': 'Feature', 'properties': {'description': 'There is a power cut in the KY1 postcode area of Coaltown of Wemyss. We had no advance warning of this and only became aware of it at 9:24pm. Our team has managed to restore power to a number of properties in the area and are still working to locate the cause of the fault affecting the rest of our customers without power. We now expect all power to be back on as quickly and as safely as possible by 3am. We will update this message if this information changes. We apologise for the inconvenience and thank you for your patience. This message was updated at 11:40pm on Saturday, 24 April 2021', 'dno': 'sp', 'estimated_restored_time': '2021-04-25 02:00', 'incident_id': 'INCD-567085-s', 'incident_url': 'https://www.spenergynetworks.co.uk/pages/power_cuts_map.aspx?incRef=INCD-567085-s', 'postcodes_impacted': ['KY14LP', 'KY14LS', 'KY14LT', 'KY14LW', 'KY14LY', 'KY14LZ', 'KY14NN', 'KY14NT'], 'received_time': '2021-04-24 21:24'}, 'geometry': {'type': 'Point', 'coordinates': [-3.086261476559906, 56.15152938082994]}}, {'type': 'Feature', 'properties': {'description': 'There is an unplanned power cut affecting the SY18 postcode area of Llanidloes, affecting properties in Gorn Road and surrounding streets. It was necessary for our engineers to carry out an emergency shutdown at 11:00PM due to faulty equipment on the underground cable network and this may be affecting the supply to your property. Repairs are taking longer than expected because of complex repairs and our team are now working to get your power back on as quickly and as safely as possible by 3am. We will update this message if this information changes. We apologise for the inconvenience and thank you for your patience. This message was updated at 2am on 25th April', 'dno': 'sp', 'estimated_restored_time': '2021-04-25 02:00', 'incident_id': 'INCD-1810454-i', 'incident_url': 'https://www.spenergynetworks.co.uk/pages/power_cuts_map.aspx?incRef=INCD-1810454-i', 'postcodes_impacted': ['SY186DQ', 'SY186FA', 'SY186LB', 'SY186LD'], 'received_time': '2021-04-24 12:01'}, 'geometry': {'type': 'Point', 'coordinates': [-3.5333294559455184, 52.445667658322535]}}, {'type': 'Feature', 'properties': {'description': 'We are aware of a fault in your area. If you require more information please call us on: \nCentral and Southern Scotland:  0800 092 9290 . \n Cheshire, Merseyside, North Wales and North Shropshire: 0800 001 5400.', 'dno': 'sp', 'estimated_restored_time': '2021-04-25 07:00', 'incident_id': 'INCD-506577-f', 'incident_url': 'https://www.spenergynetworks.co.uk/pages/power_cuts_map.aspx?incRef=INCD-506577-f', 'postcodes_impacted': ['FK27AA', 'FK27NS', 'FK27NT', 'FK27NU', 'FK27NX', 'FK27NZ', 'FK27PA', 'FK27RP', 'FK27RR', 'FK27RS', 'FK27RZ'], 'received_time': '2021-04-23 14:36'}, 'geometry': {'type': 'Point', 'coordinates': [-3.7871457775190596, 56.012777524454165]}}, {'type': 'Feature', 'properties': {'description': 'LV Restoration In Progress', 'dno': 'np', 'estimated_restored_time': '2021-04-25 02:00', 'incident_id': 'INCD-17267-D', 'incident_url': 'https://www.northernpowergrid.com/power-cuts', 'postcodes_impacted': {'YO11 2EN': {'class': 'models.MapDataLocation', 'lat': 54.2809, 'lng': -0.400823}}, 'received_time': '2021-04-24 23:13'}, 'geometry': {'type': 'Point', 'coordinates': [-0.40044, 54.280898]}}, {'type': 'Feature', 'properties': {'description': 'HV Restoration Awaiting', 'dno': 'np', 'estimated_restored_time': '', 'incident_id': 'INCD-173066-A', 'incident_url': 'https://www.northernpowergrid.com/power-cuts', 'postcodes_impacted': {'S6 6LG': {'class': 'models.MapDataLocation', 'lat': 53.4285, 'lng': -1.59736}}, 'received_time': '2021-04-20 11:41'}, 'geometry': {'type': 'Point', 'coordinates': [-1.597277, 53.427972]}}, {'type': 'Feature', 'properties': {'description': 'Safety Interruption Awaiting', 'dno': 'np', 'estimated_restored_time': '', 'incident_id': 'INCD-173599-A', 'incident_url': 'https://www.northernpowergrid.com/power-cuts', 'postcodes_impacted': {'DN8 5RY': {'class': 'models.MapDataLocation', 'lat': 53.6089, 'lng': -0.938874}}, 'received_time': '2021-04-22 07:43'}, 'geometry': {'type': 'Point', 'coordinates': [-0.938859, 53.608929]}}, {'type': 'Feature', 'properties': {'description': 'U/G Service repair In Progress', 'dno': 'np', 'estimated_restored_time': '2021-04-26 11:00', 'incident_id': 'INCD-173787-A', 'incident_url': 'https://www.northernpowergrid.com/power-cuts', 'postcodes_impacted': {'TS1 1LP': {'class': 'models.MapDataLocation', 'lat': 54.5764, 'lng': -1.23497}}, 'received_time': '2021-04-22 17:17'}, 'geometry': {'type': 'Point', 'coordinates': [-1.235012, 54.57654]}}, {'type': 'Feature', 'properties': {'description': 'Smart Meter Cutout Change In Progress', 'dno': 'np', 'estimated_restored_time': '', 'incident_id': 'INCD-174029-A', 'incident_url': 'https://www.northernpowergrid.com/power-cuts', 'postcodes_impacted': {'BD8 7DT': {'class': 'models.MapDataLocation', 'lat': 53.8043, 'lng': -1.76226}}, 'received_time': '2021-04-23 13:53'}, 'geometry': {'type': 'Point', 'coordinates': [-1.762256, 53.804294]}}, {'type': 'Feature', 'properties': {'description': 'U/G Service repair In Progress', 'dno': 'np', 'estimated_restored_time': '', 'incident_id': 'INCD-174183-A', 'incident_url': 'https://www.northernpowergrid.com/power-cuts', 'postcodes_impacted': {'DL3 0NN': {'class': 'models.MapDataLocation', 'lat': 54.5407, 'lng': -1.5522}}, 'received_time': '2021-04-24 11:36'}, 'geometry': {'type': 'Point', 'coordinates': [-1.552201, 54.540685]}}, {'type': 'Feature', 'properties': {'description': 'U/G LV Mains Repair (Other) In Progress', 'dno': 'np', 'estimated_restored_time': '2021-04-25 03:00', 'incident_id': 'INCD-174232-A', 'incident_url': 'https://www.northernpowergrid.com/power-cuts', 'postcodes_impacted': {'S2 4BQ': {'class': 'models.MapDataLocation', 'lat': 53.3713, 'lng': -1.46612}}, 'received_time': '2021-04-24 16:10'}, 'geometry': {'type': 'Point', 'coordinates': [-1.466121, 53.371315]}}, {'type': 'Feature', 'properties': {'description': 'U/G Service repair In Progress', 'dno': 'np', 'estimated_restored_time': '', 'incident_id': 'INCD-174240-A', 'incident_url': 'https://www.northernpowergrid.com/power-cuts', 'postcodes_impacted': {'BD10 9BB': {'class': 'models.MapDataLocation', 'lat': 53.8313, 'lng': -1.7147}}, 'received_time': '2021-04-24 17:40'}, 'geometry': {'type': 'Point', 'coordinates': [-1.714699, 53.831298]}}, {'type': 'Feature', 'properties': {'description': 'O/H Service Repair In Progress', 'dno': 'np', 'estimated_restored_time': '2021-04-25 11:00', 'incident_id': 'INCD-174247-A', 'incident_url': 'https://www.northernpowergrid.com/power-cuts', 'postcodes_impacted': {'DL12 9AP': {'class': 'models.MapDataLocation', 'lat': 54.5402, 'lng': -1.9332}}, 'received_time': '2021-04-24 19:23'}, 'geometry': {'type': 'Point', 'coordinates': [-1.933182, 54.540173]}}, {'type': 'Feature', 'properties': {'description': 'Unknown P2 Awaiting', 'dno': 'np', 'estimated_restored_time': '2021-04-25 02:00', 'incident_id': 'INCD-174257-A', 'incident_url': 'https://www.northernpowergrid.com/power-cuts', 'postcodes_impacted': {'YO60 7HN': {'class': 'models.MapDataLocation', 'lat': 54.1064, 'lng': -0.847339}, 'YO60 7HL': {'class': 'models.MapDataLocation', 'lat': 54.1055, 'lng': -0.846186}, 'YO60 7HJ': {'class': 'models.MapDataLocation', 'lat': 54.103, 'lng': -0.835856}, 'YO60 7HH': {'class': 'models.MapDataLocation', 'lat': 54.1005, 'lng': -0.836353}, 'YO60 7HG': {'class': 'models.MapDataLocation', 'lat': 54.0994, 'lng': -0.835115}, 'YO60 7HF': {'class': 'models.MapDataLocation', 'lat': 54.0979, 'lng': -0.836899}, 'YO60 7HE': {'class': 'models.MapDataLocation', 'lat': 54.0968, 'lng': -0.836916}, 'YO60 7EL': {'class': 'models.MapDataLocation', 'lat': 54.0963, 'lng': -0.872789}, 'YO60 7HY': {'class': 'models.MapDataLocation', 'lat': 54.1176, 'lng': -0.847761}, 'YO60 7JB': {'class': 'models.MapDataLocation', 'lat': 54.1114, 'lng': -0.834242}, 'YO60 7HZ': {'class': 'models.MapDataLocation', 'lat': 54.1218, 'lng': -0.834013}, 'YO60 7HW': {'class': 'models.MapDataLocation', 'lat': 54.1065, 'lng': -0.849524}, 'YO60 7HU': {'class': 'models.MapDataLocation', 'lat': 54.1096, 'lng': -0.851593}, 'YO60 7HS': {'class': 'models.MapDataLocation', 'lat': 54.1203, 'lng': -0.860584}, 'YO60 7HT': {'class': 'models.MapDataLocation', 'lat': 54.1167, 'lng': -0.879409}, 'YO60 7EZ': {'class': 'models.MapDataLocation', 'lat': 54.0968, 'lng': -0.8751}, 'YO60 7HQ': {'class': 'models.MapDataLocation', 'lat': 54.1002, 'lng': -0.833257}, 'YO60 7HR': {'class': 'models.MapDataLocation', 'lat': 54.1038, 'lng': -0.87072}}, 'received_time': '2021-04-24 22:44'}, 'geometry': {'type': 'Point', 'coordinates': [-0.849105388888889, 54.10612672222222]}}, {'type': 'Feature', 'properties': {'description': 'Safety Interruption In Progress', 'dno': 'np', 'estimated_restored_time': '2021-04-25 02:30', 'incident_id': 'INCD-174260-A', 'incident_url': 'https://www.northernpowergrid.com/power-cuts', 'postcodes_impacted': {'NE8 1NL': {'class': 'models.MapDataLocation', 'lat': 54.9576, 'lng': -1.60511}, 'NE4 5AE': {'class': 'models.MapDataLocation', 'lat': 54.9775, 'lng': -1.639}, 'NE8 1NN': {'class': 'models.MapDataLocation', 'lat': 54.9572, 'lng': -1.60561}, 'NE4 5PB': {'class': 'models.MapDataLocation', 'lat': 54.9778, 'lng': -1.64161}, 'NE4 5LQ': {'class': 'models.MapDataLocation', 'lat': 54.9784, 'lng': -1.63882}, 'NE4 5LP': {'class': 'models.MapDataLocation', 'lat': 54.9766, 'lng': -1.63912}, 'NE8 1QU': {'class': 'models.MapDataLocation', 'lat': 54.9576, 'lng': -1.60792}, 'NE4 5JU': {'class': 'models.MapDataLocation', 'lat': 54.9756, 'lng': -1.63971}}, 'received_time': '2021-04-24 23:28'}, 'geometry': {'type': 'Point', 'coordinates': [-1.627134625, 54.969789875000004]}}, {'type': 'Feature', 'properties': {'description': 'Unknown P2 In Progress', 'dno': 'np', 'estimated_restored_time': '2021-04-25 03:30', 'incident_id': 'INCD-174262-A', 'incident_url': 'https://www.northernpowergrid.com/power-cuts', 'postcodes_impacted': {'NE8 1NH': {'class': 'models.MapDataLocation', 'lat': 54.9568, 'lng': -1.60535}}, 'received_time': '2021-04-25 00:20'}, 'geometry': {'type': 'Point', 'coordinates': [-1.605335, 54.956752]}}, {'type': 'Feature', 'properties': {'description': 'Unknown P2 Awaiting', 'dno': 'np', 'estimated_restored_time': '2021-04-25 04:15', 'incident_id': 'INCD-174269-A', 'incident_url': 'https://www.northernpowergrid.com/power-cuts', 'postcodes_impacted': {'NE61 5SZ': {'class': 'models.MapDataLocation', 'lat': 55.2136, 'lng': -1.54044}, 'NE61 5TE': {'class': 'models.MapDataLocation', 'lat': 55.2139, 'lng': -1.54086}, 'NE61 5TA': {'class': 'models.MapDataLocation', 'lat': 55.2142, 'lng': -1.54326}, 'NE61 5TD': {'class': 'models.MapDataLocation', 'lat': 55.2143, 'lng': -1.5428}}, 'received_time': '2021-04-25 01:00'}, 'geometry': {'type': 'Point', 'coordinates': [-1.54189875, 55.214017]}}, {'type': 'Feature', 'properties': {'description': 'We need to temporarily turn the power off to carry out maintenance on our network in the area. Work is scheduled to start', 'dno': 'np', 'estimated_restored_time': '2021-04-25 12:00', 'incident_id': 'PPC039332', 'incident_url': 'https://www.northernpowergrid.com/power-cuts', 'postcodes_impacted': {'HX1 1TJ': {'class': 'models.MapDataLocation', 'lat': 53.7232, 'lng': -1.85964}, 'HX1 1RL': {'class': 'models.MapDataLocation', 'lat': 53.723, 'lng': -1.85978}, 'HX1 1RN': {'class': 'models.MapDataLocation', 'lat': 53.7233, 'lng': -1.85952}, 'HX1 1TN': {'class': 'models.MapDataLocation', 'lat': 53.7235, 'lng': -1.8599}, 'HX1 1UU': {'class': 'models.MapDataLocation', 'lat': 53.7246, 'lng': -1.8599}, 'HX1 1RW': {'class': 'models.MapDataLocation', 'lat': 53.7233, 'lng': -1.85952}, 'HX1 1TH': {'class': 'models.MapDataLocation', 'lat': 53.7231, 'lng': -1.86042}}, 'received_time': '2021-04-25 08:00'}, 'geometry': {'type': 'Point', 'coordinates': [-1.8597867142857143, 53.723433428571425]}}, {'type': 'Feature', 'properties': {'description': 'The power cut in your area has been caused by an unexpected incident with the underground cable that provides electricity to your property.', 'dno': 'enw', 'estimated_restored_time': '2021-04-25 07:50', 'incident_id': '40811407', 'incident_url': 'https://www.enwl.co.uk/power-cuts/power-cuts-power-cuts-live-power-cut-information-fault-list/fault-list', 'postcodes_impacted': ['WN7 4QP', 'WN7 4QQ', 'WN7 4QR', 'WN7 4QS', 'WN7 4QT', 'WN7 4QU', 'WN7 4QX', 'WN7 4QY', 'WN7 4QZ', 'WN7 4RB'], 'received_time': '2021-04-25 01:46'}, 'geometry': {'type': 'Point', 'coordinates': [-2.5438121, 53.4944614]}}, {'type': 'Feature', 'properties': {'description': 'The power cut in your area has been caused by an unexpected incident with the underground cable that provides electricity to your property.', 'dno': 'enw', 'estimated_restored_time': '2021-04-25 07:49', 'incident_id': '40811406', 'incident_url': 'https://www.enwl.co.uk/power-cuts/power-cuts-power-cuts-live-power-cut-information-fault-list/fault-list', 'postcodes_impacted': ['WA3 3AA', 'WA3 3SP', 'WA3 3SR', 'WA3 3SU', 'WA3 3SX', 'WA3 3SY', 'WA3 3SZ', 'WA3 3TA', 'WA3 3TD', 'WA3 3TE', 'WA3 3WQ', 'WA3 8YB'], 'received_time': '2021-04-25 00:59'}, 'geometry': {'type': 'Point', 'coordinates': [-2.6054629090909094, 53.482265181818185]}}]}

var geoJson = new L.geoJSON(geojsonFeature, {
  onEachFeature: function (feature, layer) {
    layer.bindPopup('<p>'+feature.properties.description+'</p><p>Received time: '+feature.properties.received_time+'</p><p>Estimated restored time: '+feature.properties.estimated_restored_time+'</p><p><a href="'+feature.properties.incident_url+'" target="_blank">Further details</p>');
    layer.setIcon(boltIcon);
  }
}).addTo(mymap);
});
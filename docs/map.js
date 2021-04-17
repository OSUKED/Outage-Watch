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

var geojsonFeature = {'type': 'FeatureCollection', 'features': [{'type': 'Feature', 'properties': {'description': 'We were investigating an overhead electricity equipment fault which caused a power cut in the local area.', 'dno': 'ukpn', 'estimated_restored_time': null, 'incident_id': 'INCD-248088-G', 'incident_url': 'https://www.ukpowernetworks.co.uk/power-cut/map?incidentid=INCD-248088-G', 'postcodes_impacted': ['BN207YA', 'CR04FE', 'TN288PL', 'TN299JH', 'TN299JJ', 'TN299LR', 'TN299LS', 'TN299NA', 'TN299NB', 'TN299ND', 'TN299NE', 'TN299NF', 'TN299NG', 'TN299NH', 'TN299NJ', 'TN299NL', 'TN299PN', 'TN299PS', 'TN299QL', 'UK'], 'received_time': '2021-04-13T14:08:01'}, 'geometry': {'type': 'Point', 'coordinates': [0.8575519213561089, 50.949847264326976]}}, {'type': 'Feature', 'properties': {'description': 'We were investigating a high voltage overhead electricity line fault which caused a power cut in the local area.', 'dno': 'ukpn', 'estimated_restored_time': null, 'incident_id': 'INCD-231423-Z', 'incident_url': 'https://www.ukpowernetworks.co.uk/power-cut/map?incidentid=INCD-231423-Z', 'postcodes_impacted': ['CM73SE', 'IP121PW', 'IP137', 'IP137AA', 'IP137AB', 'IP137AD', 'IP137AE', 'IP137AF', 'IP137AG', 'IP137AH', 'IP137AJ', 'IP137AL', 'IP137AN', 'IP137AP', 'IP137AQ', 'IP137AR', 'IP137AS', 'IP137AT', 'IP137AU', 'IP137AW', 'IP137AX', 'IP137AZ', 'IP137BS', 'IP137BT', 'IP137BU', 'IP137BY', 'IP137BZ', 'IP137DU', 'IP137JU', 'IP137LH', 'IP139RP', 'IP139RR', 'IP139RS', 'IP139RT', 'IP139RU', 'IP139RX'], 'received_time': '2021-04-16T13:53:51'}, 'geometry': {'type': 'Point', 'coordinates': [1.270533656555274, 52.18864628363777]}}, {'type': 'Feature', 'properties': {'description': 'Due to a faulty piece of network equipment we had to turn off your power.', 'dno': 'ukpn', 'estimated_restored_time': null, 'incident_id': 'INCD-248271-G', 'incident_url': 'https://www.ukpowernetworks.co.uk/power-cut/map?incidentid=INCD-248271-G', 'postcodes_impacted': ['BN25ZJ', 'DA110EG', 'KT12TN', 'KT205NU', 'KT207JA', 'KT207JB', 'KT207JF', 'KT207JH', 'KT207JJ', 'KT207JL', 'KT207JN', 'KT207JP', 'KT207JQ', 'KT207JS', 'KT207JT', 'KT207JW', 'KT207JX', 'KT207JZ', 'KT207LA', 'KT207LB', 'KT207LF', 'KT207LG', 'KT207LJ', 'KT207LL', 'KT207LN', 'KT207LP', 'KT207LQ', 'KT207LR', 'KT207LS', 'KT207LW', 'KT207PS', 'KT207PY', 'KT47AA', 'ME22GB', 'RH185EH', 'RH27LB', 'RH28DN', 'RH28HP', 'RH28LB', 'RH28LE', 'RH28NH', 'RH28NJ', 'RH28NL', 'RH28NN', 'RH28NP', 'RH28NR', 'RH28NS', 'RH28NW', 'RH28NZ', 'RH28PB', 'RH28PD', 'RH28PE', 'RH28PF', 'RH28Q2', 'RH28QR', 'RH28QT', 'RH28QU', 'RH28QX', 'RH28QY', 'RH28QZ', 'RH28RB', 'RH28RD', 'RH28RE', 'RH28RF', 'RH28RG', 'RH28RH', 'RH28RQ', 'RH37AA', 'RH37AB', 'RH37AD', 'RH37AE', 'RH37AF', 'RH37AG', 'RH37AH', 'RH37AN', 'RH37AQ', 'RH37AY', 'RH37AZ', 'RH37BD', 'RH37BF', 'RH37BS', 'RH37BX', 'RH37DH', 'RH37DJ', 'RH37DL', 'RH37DN', 'RH37DP', 'RH37DR', 'RH37DS', 'RH37DW', 'RH37DX', 'RH37EH', 'RH37EJ', 'RH37EL', 'RH37EN', 'RH37EP', 'RH37ER', 'RH37ES', 'RH37EW', 'RH37EZ', 'RH37HA', 'RH37HB', 'RH37HD', 'RH37HF', 'RH37HH', 'RH37LP', 'RH37LX', 'RH37LZ', 'RH37NB', 'RH37ND', 'RH41NN', 'RH41NR', 'RH41NS', 'RH41NT', 'RH41NU', 'RH41NX', 'RH41NY', 'RH41NZ', 'RH56DG', 'RH56DH', 'RH56DQ', 'SE256XN', 'SM11RJ', 'TW110DS'], 'received_time': '2021-04-17T05:51:18'}, 'geometry': {'type': 'Point', 'coordinates': [-0.25497915365559926, 51.239543384506376]}}, {'type': 'Feature', 'properties': {'description': 'A fault occurred on a piece of our electrical equipment which controls the power to your home.', 'dno': 'ukpn', 'estimated_restored_time': '2021-04-17T08:00:00', 'incident_id': 'INCD-231522-Z', 'incident_url': 'https://www.ukpowernetworks.co.uk/power-cut/map?incidentid=INCD-231522-Z', 'postcodes_impacted': ['PE301HT', 'PE301HY', 'PE301HZ', 'PE301JE', 'PE301LZ', 'PE301RD'], 'received_time': '2021-04-17T04:31:26'}, 'geometry': {'type': 'Point', 'coordinates': [0.39367086641771115, 52.753027617613384]}}, {'type': 'Feature', 'properties': {'description': 'A fault occurred on an underground electricity cable affecting the local area.', 'dno': 'ukpn', 'estimated_restored_time': '2021-04-17T06:00:00', 'incident_id': 'INCD-231513-Z', 'incident_url': 'https://www.ukpowernetworks.co.uk/power-cut/map?incidentid=INCD-231513-Z', 'postcodes_impacted': ['CO12EZ', 'CO12HA', 'CO12EX', 'CO12EY', 'CO28AA', 'CO28AB', 'CO28YY'], 'received_time': '2021-04-16T23:31:00'}, 'geometry': {'type': 'Point', 'coordinates': [0.9199961409006951, 51.877201447574016]}}, {'type': 'Feature', 'properties': {'description': 'A fault occurred on a piece of our electrical equipment which controls the power to your home.', 'dno': 'ukpn', 'estimated_restored_time': null, 'incident_id': 'INCD-248273-G', 'incident_url': 'https://www.ukpowernetworks.co.uk/power-cut/map?incidentid=INCD-248273-G', 'postcodes_impacted': ['TN126BT', 'TN126BU', 'TN126DD', 'TN126DE', 'TN126DF', 'TN126DG', 'TN126PY'], 'received_time': '2021-04-17T06:02:03'}, 'geometry': {'type': 'Point', 'coordinates': [0.3887045549296438, 51.187785918720046]}}, {'type': 'Feature', 'properties': {'description': 'A fault occurred on an underground electricity cable affecting the local area.', 'dno': 'ukpn', 'estimated_restored_time': '2021-04-17T10:00:00', 'incident_id': 'INCD-231496-Z', 'incident_url': 'https://www.ukpowernetworks.co.uk/power-cut/map?incidentid=INCD-231496-Z', 'postcodes_impacted': ['SS91AA', 'SS91BW', 'SS91PG', 'SS91PJ', 'SS91PR', 'SS91AY', 'SS91BS', 'SS91BX', 'SS91DE', 'SS91DG', 'SS91DH', 'SS91DJ', 'SS91DQ', 'SS91DY', 'SS91FR', 'SS91PE', 'SS91PH', 'SS91PN', 'SS91PS', 'SS91QB', 'SS91QD', 'SS91QE', 'SS91RJ', 'SS91RL', 'SS91RN', 'SS91RP'], 'received_time': '2021-04-16T19:35:00'}, 'geometry': {'type': 'Point', 'coordinates': [0.6609456177714684, 51.54237948961002]}}, {'type': 'Feature', 'properties': {'description': 'A fault occurred on an underground electricity cable affecting the local area.', 'dno': 'ukpn', 'estimated_restored_time': null, 'incident_id': 'INCD-317078-U', 'incident_url': 'https://www.ukpowernetworks.co.uk/power-cut/map?incidentid=INCD-317078-U', 'postcodes_impacted': ['ME160JJ', 'ME160JA', 'ME160JG'], 'received_time': '2021-04-16T20:45:00'}, 'geometry': {'type': 'Point', 'coordinates': [0.5021719507762511, 51.27564864963486]}}, {'type': 'Feature', 'properties': {'description': 'Due to a faulty piece of underground network equipment we had to turn off your power.', 'dno': 'ukpn', 'estimated_restored_time': '2021-04-17T07:00:00', 'incident_id': 'INCD-260208-J', 'incident_url': 'https://www.ukpowernetworks.co.uk/power-cut/map?incidentid=INCD-260208-J', 'postcodes_impacted': ['SE153SL', 'SE154BH', 'SE154BJ', 'SE154RZ', 'SE154ST', 'SE154TL', 'SE154UN'], 'received_time': '2021-04-17T03:30:00'}, 'geometry': {'type': 'Point', 'coordinates': [-0.0673184641395791, 51.46915389117748]}}, {'type': 'Feature', 'properties': {'description': "We're carrying out planned work in your area. For our engineers to carry it out safely they need to turn the power off. We're doing this work as it's essential to provide reliable electricity supplies to your area. We're sorry for any inconvenience caused and thank you for your patience.", 'dno': 'ukpn', 'estimated_restored_time': '2021-04-17T16:30:00', 'incident_id': 'INCD-227941-Z', 'incident_url': 'https://www.ukpowernetworks.co.uk/power-cut/map?incidentid=INCD-227941-Z', 'postcodes_impacted': ['AL71JD'], 'received_time': '2021-04-17T07:30:00'}, 'geometry': {'type': 'Point', 'coordinates': [-0.1891168918543099, 51.80033146503926]}}, {'type': 'Feature', 'properties': {'description': "We're carrying out planned work in your area. For our engineers to carry it out safely they need to turn the power off. We're doing this work as it's essential to provide reliable electricity supplies to your area. We're sorry for any inconvenience caused and thank you for your patience.", 'dno': 'ukpn', 'estimated_restored_time': '2021-04-17T15:00:00', 'incident_id': 'INCD-229277-Z', 'incident_url': 'https://www.ukpowernetworks.co.uk/power-cut/map?incidentid=INCD-229277-Z', 'postcodes_impacted': ['IP123RE'], 'received_time': '2021-04-17T09:00:00'}, 'geometry': {'type': 'Point', 'coordinates': [1.4321802590784931, 52.0473383091724]}}, {'type': 'Feature', 'properties': {'description': 'We’re sorry for the loss of supply. We currently have a fault affecting the areas listed. Our engineers are on site working hard to get the power back on as quickly as they can. If you need more information, please call us on 105 or send us a message on <a href="http://m.me/ssencommunity/">Facebook</a> or Twitter (<a href="https://twitter.com/ssencommunity">@ssencommunity</a>) and quote reference \'HB8019\'', 'dno': 'ssen', 'estimated_restored_time': '2021-04-17 09:00:00', 'incident_id': 'HB8019', 'incident_url': 'https://www.ssen.co.uk/Powertrack/', 'postcodes_impacted': ['SN3 4DS', 'SN3 4DT', 'SN3 4DU'], 'received_time': '2021-04-16 21:28:00'}, 'geometry': {'type': 'Point', 'coordinates': [-1.7477883333333333, 51.572645666666666]}}, {'type': 'Feature', 'properties': {'description': 'In Progress', 'dno': 'wpd', 'estimated_restored_time': '2021-04-17 07:00:00', 'incident_id': 'INCD-17-q', 'incident_url': 'https://powercuts.westernpower.co.uk/incident/INCD-17-q', 'postcodes_impacted': ['BS34 5TA', 'BS34 5TB'], 'received_time': '2021-04-17 00:01:00'}, 'geometry': {'type': 'Point', 'coordinates': [-2.5915965, 51.5291065]}}, {'type': 'Feature', 'properties': {'description': 'Awaiting', 'dno': 'wpd', 'estimated_restored_time': '2021-04-17 08:00:00', 'incident_id': 'INCD-2095-g', 'incident_url': 'https://powercuts.westernpower.co.uk/incident/INCD-2095-g', 'postcodes_impacted': ['CF44 6TN', 'CF44 6HX', 'CF44 6TW', 'CF44 6HJ', 'CF44 6RZ', 'CF44 7HJ'], 'received_time': '2021-04-17 04:44:00'}, 'geometry': {'type': 'Point', 'coordinates': [-3.4374055, 51.7077195]}}, {'type': 'Feature', 'properties': {'description': 'There is a power cut affecting the LL57 postcode area of Bangor. We had no advance warning of this and only became aware of it at 5:17am. Our control centre will attempt to reset the network remotely to restore power in stages, and our emergency response team are on their way to the local area to investigate and repair the fault. Our team will work to get your power back on as quickly and as safely as possible by 7:30am. Once they arrive, or when we receive any update regarding the cause, we will be able to provide you with more information. We apologise for the inconvenience and thank you for your patience. This message was updated 5:34am on 17th April.', 'dno': 'sp', 'estimated_restored_time': '2021-04-17 06:17', 'incident_id': 'INCD-564505-s', 'incident_url': 'https://www.spenergynetworks.co.uk/pages/power_cuts_map.aspx?incRef=INCD-564505-s', 'postcodes_impacted': ['LL572DX', 'LL572UJ', 'LL572YD', 'LL574DG', 'LL574RY', 'LL574SB', 'LL574SD', 'LL574SE', 'LL574SF', 'LL574SG', 'LL574SH', 'LL574SN', 'LL574SW', 'LL574SX', 'LL574SY', 'LL574TA', 'LL574TJ'], 'received_time': '2021-04-17 05:17'}, 'geometry': {'type': 'Point', 'coordinates': [-4.142541433340932, 53.21601430505421]}}, {'type': 'Feature', 'properties': {'description': 'There is a power cut in the G44 postcode area of Glasgow, affecting properties in Clarkston Road and surrounding streets. We did not know in advance there would be a power cut, and are working to get supplies restored. So far we have started excavation work on the underground cable fault in the area but due to difficult digging condition and we now expect your supply to be restored by 6:15am. We understand that being without power is frustrating and please be assured we will restore your supply as soon as we possibly can. If for any reason this information changes then we will update this message. We apologise for the inconvenience and thank you for your patience. This message was updated at 1:50am on 17th April 2021.', 'dno': 'sp', 'estimated_restored_time': '2021-04-17 07:30', 'incident_id': 'INCD-564379-s', 'incident_url': 'https://www.spenergynetworks.co.uk/pages/power_cuts_map.aspx?incRef=INCD-564379-s', 'postcodes_impacted': ['G443AT', 'G443AU', 'G443AX', 'G443BL', 'G443BQ', 'G443BW', 'G443DA', 'G443YS'], 'received_time': '2021-04-16 18:22'}, 'geometry': {'type': 'Point', 'coordinates': [-4.264698263736534, 55.81362220512008]}}, {'type': 'Feature', 'properties': {'description': 'We are aware of a fault in your area. If you require more information please call us on: \nCentral and Southern Scotland:  0800 092 9290 . \n Cheshire, Merseyside, North Wales and North Shropshire: 0800 001 5400.', 'dno': 'sp', 'estimated_restored_time': '2021-04-18 07:00', 'incident_id': 'INCD-564259-s', 'incident_url': 'https://www.spenergynetworks.co.uk/pages/power_cuts_map.aspx?incRef=INCD-564259-s', 'postcodes_impacted': ['PA75PB'], 'received_time': '2021-04-16 14:11'}, 'geometry': {'type': 'Point', 'coordinates': [-4.542923291440464, 55.91900063681292]}}, {'type': 'Feature', 'properties': {'description': 'U/G Service repair In Progress', 'dno': 'np', 'estimated_restored_time': '2021-04-17 11:00', 'incident_id': 'INCD-172159-A', 'incident_url': 'https://www.northernpowergrid.com/power-cuts', 'postcodes_impacted': {'TS1 4BT': {'class': 'models.MapDataLocation', 'lat': 54.5696, 'lng': -1.24351}}, 'received_time': '2021-04-16 17:11'}, 'geometry': {'type': 'Point', 'coordinates': [-1.24351, 54.569624]}}, {'type': 'Feature', 'properties': {'description': 'U/G Service repair In Progress', 'dno': 'np', 'estimated_restored_time': '', 'incident_id': 'INCD-172187-A', 'incident_url': 'https://www.northernpowergrid.com/power-cuts', 'postcodes_impacted': {'HU3 2PW': {'class': 'models.MapDataLocation', 'lat': 53.743, 'lng': -0.36007}}, 'received_time': '2021-04-16 20:25'}, 'geometry': {'type': 'Point', 'coordinates': [-0.36007, 53.742998]}}, {'type': 'Feature', 'properties': {'description': 'U/G Service repair Awaiting', 'dno': 'np', 'estimated_restored_time': '2021-04-17 11:00', 'incident_id': 'INCD-172215-A', 'incident_url': 'https://www.northernpowergrid.com/power-cuts', 'postcodes_impacted': {'WF9 2AW': {'class': 'models.MapDataLocation', 'lat': 53.5946, 'lng': -1.29936}}, 'received_time': '2021-04-16 23:32'}, 'geometry': {'type': 'Point', 'coordinates': [-1.299044, 53.594699]}}, {'type': 'Feature', 'properties': {'description': 'U/G Service repair In Progress', 'dno': 'np', 'estimated_restored_time': '2021-04-17 09:30', 'incident_id': 'INCD-172220-A', 'incident_url': 'https://www.northernpowergrid.com/power-cuts', 'postcodes_impacted': {'S35 1AB': {'class': 'models.MapDataLocation', 'lat': 53.4599, 'lng': -1.46837}}, 'received_time': '2021-04-17 01:44'}, 'geometry': {'type': 'Point', 'coordinates': [-1.468368, 53.459971]}}, {'type': 'Feature', 'properties': {'description': 'Unknown P1 Awaiting', 'dno': 'np', 'estimated_restored_time': '2021-04-17 06:30', 'incident_id': 'INCD-172223-A', 'incident_url': 'https://www.northernpowergrid.com/power-cuts', 'postcodes_impacted': {'NE22 7HJ': {'class': 'models.MapDataLocation', 'lat': 55.1395, 'lng': -1.56237}}, 'received_time': '2021-04-17 03:28'}, 'geometry': {'type': 'Point', 'coordinates': [-1.562072, 55.139751]}}, {'type': 'Feature', 'properties': {'description': 'Unknown P2 In Progress', 'dno': 'np', 'estimated_restored_time': '2021-04-17 07:30', 'incident_id': 'INCD-172225-A', 'incident_url': 'https://www.northernpowergrid.com/power-cuts', 'postcodes_impacted': {'HU3 1JP': {'class': 'models.MapDataLocation', 'lat': 53.7503, 'lng': -0.358346}, 'HU9 5NX': {'class': 'models.MapDataLocation', 'lat': 53.7472, 'lng': -0.247986}, 'HU5 3LZ': {'class': 'models.MapDataLocation', 'lat': 53.7525, 'lng': -0.371849}, 'HU3 1NJ': {'class': 'models.MapDataLocation', 'lat': 53.7539, 'lng': -0.358509}, 'HU3 1LY': {'class': 'models.MapDataLocation', 'lat': 53.7529, 'lng': -0.359092}, 'HU3 1EN': {'class': 'models.MapDataLocation', 'lat': 53.7491, 'lng': -0.359209}, 'HU3 1LZ': {'class': 'models.MapDataLocation', 'lat': 53.7529, 'lng': -0.358623}, 'HU3 1LR': {'class': 'models.MapDataLocation', 'lat': 53.7513, 'lng': -0.359852}, 'HU3 1EJ': {'class': 'models.MapDataLocation', 'lat': 53.7496, 'lng': -0.359054}, 'HU3 1LS': {'class': 'models.MapDataLocation', 'lat': 53.7541, 'lng': -0.357683}}, 'received_time': '2021-04-17 03:29'}, 'geometry': {'type': 'Point', 'coordinates': [-0.34905929999999996, 53.751289199999995]}}, {'type': 'Feature', 'properties': {'description': 'Unknown P2 In Progress', 'dno': 'np', 'estimated_restored_time': '2021-04-17 07:45', 'incident_id': 'INCD-172226-A', 'incident_url': 'https://www.northernpowergrid.com/power-cuts', 'postcodes_impacted': {'DL2 2AF': {'class': 'models.MapDataLocation', 'lat': 54.4859, 'lng': -1.52525}}, 'received_time': '2021-04-17 04:40'}, 'geometry': {'type': 'Point', 'coordinates': [-1.525076, 54.485941]}}, {'type': 'Feature', 'properties': {'description': 'U/G HV Mains Repair In Progress', 'dno': 'np', 'estimated_restored_time': '2021-04-17 06:30', 'incident_id': 'INCD-172227-A', 'incident_url': 'https://www.northernpowergrid.com/power-cuts', 'postcodes_impacted': {'HD1 2DR': {'class': 'models.MapDataLocation', 'lat': 53.6463, 'lng': -1.78326}, 'HD1 1LG': {'class': 'models.MapDataLocation', 'lat': 53.6479, 'lng': -1.78316}, 'HD1 2DN': {'class': 'models.MapDataLocation', 'lat': 53.6467, 'lng': -1.78279}, 'HD1 2LE': {'class': 'models.MapDataLocation', 'lat': 53.6449, 'lng': -1.78428}, 'HD1 2LF': {'class': 'models.MapDataLocation', 'lat': 53.6449, 'lng': -1.78469}, 'HD1 1LP': {'class': 'models.MapDataLocation', 'lat': 53.6473, 'lng': -1.78468}, 'HD1 2LR': {'class': 'models.MapDataLocation', 'lat': 53.6449, 'lng': -1.78463}, 'HD1 1LN': {'class': 'models.MapDataLocation', 'lat': 53.6473, 'lng': -1.78335}, 'HD1 1LS': {'class': 'models.MapDataLocation', 'lat': 53.6475, 'lng': -1.78365}, 'HD1 2DX': {'class': 'models.MapDataLocation', 'lat': 53.6458, 'lng': -1.78349}, 'HD1 2LN': {'class': 'models.MapDataLocation', 'lat': 53.6449, 'lng': -1.78469}, 'HD1 1LY': {'class': 'models.MapDataLocation', 'lat': 53.6475, 'lng': -1.78365}, 'HD1 2LY': {'class': 'models.MapDataLocation', 'lat': 53.6449, 'lng': -1.78469}, 'HD1 2HL': {'class': 'models.MapDataLocation', 'lat': 53.6452, 'lng': -1.78446}, 'HD1 2HF': {'class': 'models.MapDataLocation', 'lat': 53.6456, 'lng': -1.78552}, 'HD1 2HE': {'class': 'models.MapDataLocation', 'lat': 53.6456, 'lng': -1.78552}, 'HD1 2HG': {'class': 'models.MapDataLocation', 'lat': 53.6452, 'lng': -1.78512}, 'HD1 2ET': {'class': 'models.MapDataLocation', 'lat': 53.6463, 'lng': -1.78473}, 'HD7 1TE': {'class': 'models.MapDataLocation', 'lat': 53.5568, 'lng': -1.7546}, 'HD1 2EP': {'class': 'models.MapDataLocation', 'lat': 53.6466, 'lng': -1.78373}, 'HD1 1EX': {'class': 'models.MapDataLocation', 'lat': 53.6479, 'lng': -1.78316}, 'HD1 1QA': {'class': 'models.MapDataLocation', 'lat': 53.648, 'lng': -1.78035}, 'HD1 2EX': {'class': 'models.MapDataLocation', 'lat': 53.6455, 'lng': -1.78505}, 'HD1 2EA': {'class': 'models.MapDataLocation', 'lat': 53.6459, 'lng': -1.78371}, 'HD1 2NE': {'class': 'models.MapDataLocation', 'lat': 53.6452, 'lng': -1.78512}, 'HD1 1ND': {'class': 'models.MapDataLocation', 'lat': 53.6472, 'lng': -1.78318}, 'HD1 2EH': {'class': 'models.MapDataLocation', 'lat': 53.6466, 'lng': -1.78397}, 'HD1 1AB': {'class': 'models.MapDataLocation', 'lat': 53.6484, 'lng': -1.78212}, 'HD1 2EF': {'class': 'models.MapDataLocation', 'lat': 53.6459, 'lng': -1.78378}, 'HD1 2EG': {'class': 'models.MapDataLocation', 'lat': 53.6461, 'lng': -1.78354}, 'HD1 1NN': {'class': 'models.MapDataLocation', 'lat': 53.6471, 'lng': -1.78314}, 'HD1 1JS': {'class': 'models.MapDataLocation', 'lat': 53.6477, 'lng': -1.78398}, 'HD1 2JF': {'class': 'models.MapDataLocation', 'lat': 53.6464, 'lng': -1.7854}, 'HD1 1JP': {'class': 'models.MapDataLocation', 'lat': 53.6472, 'lng': -1.78445}, 'HD1 1JQ': {'class': 'models.MapDataLocation', 'lat': 53.6473, 'lng': -1.78468}, 'HD1 2JD': {'class': 'models.MapDataLocation', 'lat': 53.6466, 'lng': -1.78479}, 'HD1 2JJ': {'class': 'models.MapDataLocation', 'lat': 53.6465, 'lng': -1.78535}, 'HD1 2BR': {'class': 'models.MapDataLocation', 'lat': 53.6453, 'lng': -1.78369}, 'HD1 2JN': {'class': 'models.MapDataLocation', 'lat': 53.6452, 'lng': -1.78648}, 'HD1 1NU': {'class': 'models.MapDataLocation', 'lat': 53.6472, 'lng': -1.78377}, 'HD1 1BS': {'class': 'models.MapDataLocation', 'lat': 53.6475, 'lng': -1.78293}, 'HD1 2BU': {'class': 'models.MapDataLocation', 'lat': 53.6454, 'lng': -1.7833}, 'HD1 2JL': {'class': 'models.MapDataLocation', 'lat': 53.6463, 'lng': -1.78556}, 'HD1 1JF': {'class': 'models.MapDataLocation', 'lat': 53.6484, 'lng': -1.78452}, 'HD1 2JR': {'class': 'models.MapDataLocation', 'lat': 53.6483, 'lng': -1.7815}, 'HD1 1JD': {'class': 'models.MapDataLocation', 'lat': 53.6472, 'lng': -1.78506}, 'HD1 1NP': {'class': 'models.MapDataLocation', 'lat': 53.6468, 'lng': -1.78363}, 'HD1 4AD': {'class': 'models.MapDataLocation', 'lat': 53.6464, 'lng': -1.78543}, 'HD1 2JY': {'class': 'models.MapDataLocation', 'lat': 53.6453, 'lng': -1.78569}, 'HD1 1NX': {'class': 'models.MapDataLocation', 'lat': 53.6472, 'lng': -1.78468}, 'HD1 4AG': {'class': 'models.MapDataLocation', 'lat': 53.6457, 'lng': -1.78667}, 'HD1 2JW': {'class': 'models.MapDataLocation', 'lat': 53.6457, 'lng': -1.78623}, 'HD1 1NY': {'class': 'models.MapDataLocation', 'lat': 53.6468, 'lng': -1.78518}, 'HD1 2BB': {'class': 'models.MapDataLocation', 'lat': 53.6454, 'lng': -1.78224}, 'HD1 1BB': {'class': 'models.MapDataLocation', 'lat': 53.6479, 'lng': -1.78316}, 'HD1 1JY': {'class': 'models.MapDataLocation', 'lat': 53.6474, 'lng': -1.78399}, 'HD1 1JU': {'class': 'models.MapDataLocation', 'lat': 53.6475, 'lng': -1.78397}, 'HD1 1LD': {'class': 'models.MapDataLocation', 'lat': 53.6479, 'lng': -1.78316}, 'HD1 1PA': {'class': 'models.MapDataLocation', 'lat': 53.6483, 'lng': -1.7815}, 'HD1 1LA': {'class': 'models.MapDataLocation', 'lat': 53.6479, 'lng': -1.78383}, 'HD1 1PB': {'class': 'models.MapDataLocation', 'lat': 53.6468, 'lng': -1.78553}}, 'received_time': '2021-04-17 04:52'}, 'geometry': {'type': 'Point', 'coordinates': [-1.783698229508197, 53.64507872131148]}}, {'type': 'Feature', 'properties': {'description': 'Unknown P2 Awaiting', 'dno': 'np', 'estimated_restored_time': '2021-04-17 08:15', 'incident_id': 'INCD-172228-A', 'incident_url': 'https://www.northernpowergrid.com/power-cuts', 'postcodes_impacted': {'TS26 9EP': {'class': 'models.MapDataLocation', 'lat': 54.6832, 'lng': -1.21868}}, 'received_time': '2021-04-17 05:04'}, 'geometry': {'type': 'Point', 'coordinates': [-1.218677, 54.683188]}}, {'type': 'Feature', 'properties': {'description': 'Unknown P2 Awaiting', 'dno': 'np', 'estimated_restored_time': '2021-04-17 08:15', 'incident_id': 'INCD-172229-A', 'incident_url': 'https://www.northernpowergrid.com/power-cuts', 'postcodes_impacted': {'S71 1QF': {'class': 'models.MapDataLocation', 'lat': 53.5622, 'lng': -1.47773}}, 'received_time': '2021-04-17 05:11'}, 'geometry': {'type': 'Point', 'coordinates': [-1.477686, 53.562211]}}, {'type': 'Feature', 'properties': {'description': 'Unknown P2 Awaiting', 'dno': 'np', 'estimated_restored_time': '2021-04-17 08:15', 'incident_id': 'INCD-172230-A', 'incident_url': 'https://www.northernpowergrid.com/power-cuts', 'postcodes_impacted': {'NE9 6TU': {'class': 'models.MapDataLocation', 'lat': 54.9325, 'lng': -1.59329}}, 'received_time': '2021-04-17 05:12'}, 'geometry': {'type': 'Point', 'coordinates': [-1.59326, 54.932476]}}, {'type': 'Feature', 'properties': {'description': 'Unknown P2 Awaiting', 'dno': 'np', 'estimated_restored_time': '2021-04-17 08:15', 'incident_id': 'INCD-172231-A', 'incident_url': 'https://www.northernpowergrid.com/power-cuts', 'postcodes_impacted': {'YO62 5JH': {'class': 'models.MapDataLocation', 'lat': 54.2194, 'lng': -1.00394}}, 'received_time': '2021-04-17 05:14'}, 'geometry': {'type': 'Point', 'coordinates': [-1.003941, 54.219418]}}, {'type': 'Feature', 'properties': {'description': 'Unknown P2 Awaiting', 'dno': 'np', 'estimated_restored_time': '2021-04-17 08:30', 'incident_id': 'INCD-172232-A', 'incident_url': 'https://www.northernpowergrid.com/power-cuts', 'postcodes_impacted': {'LS25 5BP': {'class': 'models.MapDataLocation', 'lat': 53.7788, 'lng': -1.2449}}, 'received_time': '2021-04-17 05:17'}, 'geometry': {'type': 'Point', 'coordinates': [-1.244902, 53.778775]}}, {'type': 'Feature', 'properties': {'description': 'Unknown P2 Awaiting', 'dno': 'np', 'estimated_restored_time': '2021-04-17 08:30', 'incident_id': 'INCD-172233-A', 'incident_url': 'https://www.northernpowergrid.com/power-cuts', 'postcodes_impacted': {'WF5 0RX': {'class': 'models.MapDataLocation', 'lat': 53.6794, 'lng': -1.57284}}, 'received_time': '2021-04-17 05:17'}, 'geometry': {'type': 'Point', 'coordinates': [-1.572827, 53.679374]}}, {'type': 'Feature', 'properties': {'description': 'We need to temporarily turn the power off to carry out power upgrades in the area. Work is scheduled to start', 'dno': 'np', 'estimated_restored_time': '2021-04-17 10:00', 'incident_id': 'PPC039627', 'incident_url': 'https://www.northernpowergrid.com/power-cuts', 'postcodes_impacted': {'BD19 3JU': {'class': 'models.MapDataLocation', 'lat': 53.7253, 'lng': -1.71067}, 'BD19 3EG': {'class': 'models.MapDataLocation', 'lat': 53.7259, 'lng': -1.7262}, 'BD19 3EA': {'class': 'models.MapDataLocation', 'lat': 53.7265, 'lng': -1.72435}, 'BD19 3AG': {'class': 'models.MapDataLocation', 'lat': 53.7264, 'lng': -1.72608}, 'BD19 3AF': {'class': 'models.MapDataLocation', 'lat': 53.7254, 'lng': -1.72498}, 'BD19 3EP': {'class': 'models.MapDataLocation', 'lat': 53.7259, 'lng': -1.72464}, 'BD19 3AD': {'class': 'models.MapDataLocation', 'lat': 53.7255, 'lng': -1.72549}}, 'received_time': '2021-04-17 08:00'}, 'geometry': {'type': 'Point', 'coordinates': [-1.723217857142857, 53.72584328571429]}}, {'type': 'Feature', 'properties': {'description': 'We need to temporarily turn the power off to carry out maintenance on our network in the area. Work is scheduled to start', 'dno': 'np', 'estimated_restored_time': '2021-04-17 11:00', 'incident_id': 'PPC039683', 'incident_url': 'https://www.northernpowergrid.com/power-cuts', 'postcodes_impacted': {'DL13 1PF': {'class': 'models.MapDataLocation', 'lat': 54.7443, 'lng': -2.11611}}, 'received_time': '2021-04-17 08:30'}, 'geometry': {'type': 'Point', 'coordinates': [-2.116174, 54.74408]}}, {'type': 'Feature', 'properties': {'description': 'We need to temporarily turn the power off to carry out a permanent repair in the area. Work is scheduled to start', 'dno': 'np', 'estimated_restored_time': '2021-04-17 12:00', 'incident_id': 'PPC039884', 'incident_url': 'https://www.northernpowergrid.com/power-cuts', 'postcodes_impacted': {'YO30 4RB': {'class': 'models.MapDataLocation', 'lat': 53.9912, 'lng': -1.09658}, 'YO30 4RA': {'class': 'models.MapDataLocation', 'lat': 53.9904, 'lng': -1.09681}, 'YO30 4US': {'class': 'models.MapDataLocation', 'lat': 53.9912, 'lng': -1.0954}}, 'received_time': '2021-04-17 08:00'}, 'geometry': {'type': 'Point', 'coordinates': [-1.0965173333333333, 53.99096966666667]}}, {'type': 'Feature', 'properties': {'description': 'We need to temporarily turn the power off to carry out replacement of poles that support our overhead power lines in the area. The scheduled work has been cancelled and is no longer taking place today', 'dno': 'np', 'estimated_restored_time': '2021-04-17 14:30', 'incident_id': 'PPC039900', 'incident_url': 'https://www.northernpowergrid.com/power-cuts', 'postcodes_impacted': {'HD7 3DU': {'class': 'models.MapDataLocation', 'lat': 53.5927, 'lng': -1.81854}, 'HD9 4DU': {'class': 'models.MapDataLocation', 'lat': 53.5939, 'lng': -1.81948}}, 'received_time': '2021-04-17 08:30'}, 'geometry': {'type': 'Point', 'coordinates': [-1.81901, 53.5932605]}}, {'type': 'Feature', 'properties': {'description': 'The power cut in your area has been caused by an unexpected incident on our high voltage cable which provides electricity to your property.', 'dno': 'enw', 'estimated_restored_time': '2021-04-17 09:00', 'incident_id': '60508415', 'incident_url': 'https://www.enwl.co.uk/power-cuts/power-cuts-power-cuts-live-power-cut-information-fault-list/fault-list', 'postcodes_impacted': ['CA12 4PH', 'CA12 4PS', 'CA12 4PT', 'CA12 4PL', 'CA12 4PN', 'CA12 4PP', 'CA12 4PW', 'CA12 4PQ', 'CA12 4PY', 'CA12 4PZ', 'CA12 4QA', 'CA12 4RT', 'CA12 5UG'], 'received_time': '2021-04-16 19:40'}, 'geometry': {'type': 'Point', 'coordinates': [-3.1419163846153846, 54.61730107692308]}}]}

var geoJson = new L.geoJSON(geojsonFeature, {
  onEachFeature: function (feature, layer) {
    layer.bindPopup('<p>'+feature.properties.description+'</p><p>Received time: '+feature.properties.received_time+'</p><p>Estimated restored time: '+feature.properties.estimated_restored_time+'</p><p><a href="'+feature.properties.incident_url+'" target="_blank">Further details</p>');
    layer.setIcon(boltIcon);
  }
}).addTo(mymap);
});
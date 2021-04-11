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

var geojsonFeature = {'type': 'FeatureCollection', 'features': [{'type': 'Feature', 'properties': {'description': 'We had to turn off power in your area so our engineers could safely carry out emergency repairs to the network.', 'dno': 'ukpn', 'estimated_restored_time': null, 'incident_id': 'INCD-247691-G', 'incident_url': 'https://www.ukpowernetworks.co.uk/power-cut/map?incidentid=INCD-247691-G', 'postcodes_impacted': ['BN11YE', 'UMS', 'BN11UA', 'BN11YA', 'BN14AB', 'BN14AD', 'BN14AE', 'BN14AF', 'BN14AG'], 'received_time': '2021-04-04T02:05:00'}, 'geometry': {'type': 'Point', 'coordinates': [-0.13702898035919064, 50.82597526373231]}}, {'type': 'Feature', 'properties': {'description': 'We were investigating an electricity cable that was damaged, causing a power cut in the local area.', 'dno': 'ukpn', 'estimated_restored_time': null, 'incident_id': 'INCD-247943-G', 'incident_url': 'https://www.ukpowernetworks.co.uk/power-cut/map?incidentid=INCD-247943-G', 'postcodes_impacted': ['CR82HG', 'CR82HF', 'CR82HN', 'CR82HR', 'CR84DU'], 'received_time': '2021-04-09T14:56:00'}, 'geometry': {'type': 'Point', 'coordinates': [-0.11745994733039047, 51.32891089086045]}}, {'type': 'Feature', 'properties': {'description': 'A fault occurred on an underground electricity cable affecting the local area.', 'dno': 'ukpn', 'estimated_restored_time': null, 'incident_id': 'INCD-248003-G', 'incident_url': 'https://www.ukpowernetworks.co.uk/power-cut/map?incidentid=INCD-248003-G', 'postcodes_impacted': ['TN38DA', 'TN11UX', 'TN38DB', 'TN38EA', 'TN38EB', 'TN38ED', 'TN38EE', 'TN38EF', 'TN38EG', 'TN38EH', 'TN38EJ', 'TN38EL', 'TN38EN', 'TN38EP', 'TN38EQ', 'TN38ES'], 'received_time': '2021-04-11T08:45:00'}, 'geometry': {'type': 'Point', 'coordinates': [0.3828271329087273, 51.101278812110685]}}, {'type': 'Feature', 'properties': {'description': 'A fault occurred on an underground electricity cable affecting the local area.', 'dno': 'ukpn', 'estimated_restored_time': '2021-04-11T23:00:00', 'incident_id': 'INCD-54229-V', 'incident_url': 'https://www.ukpowernetworks.co.uk/power-cut/map?incidentid=INCD-54229-V', 'postcodes_impacted': ['KT207UJ', 'KT207XA', 'KT207RT', 'KT207XB', 'KT207XJ'], 'received_time': '2021-04-11T14:57:00'}, 'geometry': {'type': 'Point', 'coordinates': [-0.24304189427542594, 51.28380165382045]}}, {'type': 'Feature', 'properties': {'description': 'A fault occurred on an underground electricity cable affecting the local area.', 'dno': 'ukpn', 'estimated_restored_time': '2021-04-12T00:30:00', 'incident_id': 'INCD-230223-Z', 'incident_url': 'https://www.ukpowernetworks.co.uk/power-cut/map?incidentid=INCD-230223-Z', 'postcodes_impacted': ['EN93HB', 'EN93HH', 'EN93HJ', 'EN93HX', 'EN93HY'], 'received_time': '2021-04-11T16:34:00'}, 'geometry': {'type': 'Point', 'coordinates': [0.028751054946343464, 51.686672558724034]}}, {'type': 'Feature', 'properties': {'description': 'A fault occurred on an underground electricity cable affecting the local area.', 'dno': 'ukpn', 'estimated_restored_time': '2021-04-12T02:00:00', 'incident_id': 'INCD-230209-Z', 'incident_url': 'https://www.ukpowernetworks.co.uk/power-cut/map?incidentid=INCD-230209-Z', 'postcodes_impacted': ['NR13AF', 'NR13EN', 'NR13EZ', 'NR13GE', 'NR12AE', 'NR13AL', 'NR13ES', 'NR13JE'], 'received_time': '2021-04-11T13:59:00'}, 'geometry': {'type': 'Point', 'coordinates': [1.3004608957488109, 52.62165433395957]}}, {'type': 'Feature', 'properties': {'description': 'A fault occurred on an underground electricity cable affecting the local area.', 'dno': 'ukpn', 'estimated_restored_time': null, 'incident_id': 'INCD-247961-G', 'incident_url': 'https://www.ukpowernetworks.co.uk/power-cut/map?incidentid=INCD-247961-G', 'postcodes_impacted': ['TN74ET'], 'received_time': '2021-04-10T00:20:00'}, 'geometry': {'type': 'Point', 'coordinates': [0.0891248562823091, 51.08024221963581]}}, {'type': 'Feature', 'properties': {'description': 'A fault occurred on an underground electricity cable affecting the local area.', 'dno': 'ukpn', 'estimated_restored_time': null, 'incident_id': 'INCD-230144-Z', 'incident_url': 'https://www.ukpowernetworks.co.uk/power-cut/map?incidentid=INCD-230144-Z', 'postcodes_impacted': ['N226SY', 'N226TN', 'N226TR'], 'received_time': '2021-04-10T17:20:00'}, 'geometry': {'type': 'Point', 'coordinates': [-0.11221473765204514, 51.59437345205913]}}, {'type': 'Feature', 'properties': {'description': 'A fault occurred on an underground electricity cable affecting the local area.', 'dno': 'ukpn', 'estimated_restored_time': '2021-04-11T23:00:00', 'incident_id': 'INCD-230233-Z', 'incident_url': 'https://www.ukpowernetworks.co.uk/power-cut/map?incidentid=INCD-230233-Z', 'postcodes_impacted': ['N88PE', 'N88QH', 'N88QL', 'N88SN', 'N88TA'], 'received_time': '2021-04-11T18:13:00'}, 'geometry': {'type': 'Point', 'coordinates': [-0.12486271488828934, 51.582745179089954]}}, {'type': 'Feature', 'properties': {'description': 'A fault occurred on a piece of our electrical equipment which controls the power to your home.', 'dno': 'ukpn', 'estimated_restored_time': '2021-04-12T00:00:00', 'incident_id': 'INCD-54239-V', 'incident_url': 'https://www.ukpowernetworks.co.uk/power-cut/map?incidentid=INCD-54239-V', 'postcodes_impacted': ['KT100HB', 'KT100TX', 'KT100TY', 'KT100TZ', 'KT100UA', 'KT100UB'], 'received_time': '2021-04-11T19:53:50'}, 'geometry': {'type': 'Point', 'coordinates': [-0.3258517542529758, 51.357017123560276]}}, {'type': 'Feature', 'properties': {'description': 'A fault occurred on an underground electricity cable affecting the local area.', 'dno': 'ukpn', 'estimated_restored_time': '2021-04-11T22:00:00', 'incident_id': 'INCD-54232-V', 'incident_url': 'https://www.ukpowernetworks.co.uk/power-cut/map?incidentid=INCD-54232-V', 'postcodes_impacted': ['KT100HA', 'KT100HB', 'KT100HE', 'KT100HU', 'KT100HY', 'KT100HZ', 'KT100TN', 'KT100TT'], 'received_time': '2021-04-11T17:13:00'}, 'geometry': {'type': 'Point', 'coordinates': [-0.3305177659243483, 51.356212923200985]}}, {'type': 'Feature', 'properties': {'description': 'A fault occurred on a piece of our electrical equipment which controls the power to your home.', 'dno': 'ukpn', 'estimated_restored_time': null, 'incident_id': 'INCD-59826-N', 'incident_url': 'https://www.ukpowernetworks.co.uk/power-cut/map?incidentid=INCD-59826-N', 'postcodes_impacted': ['N79SG', 'N79SH', 'N79SJ', 'N79SL', 'N79SQ', 'N79TD'], 'received_time': '2021-04-11T20:23:48'}, 'geometry': {'type': 'Point', 'coordinates': [-0.11666346989491604, 51.55330446176856]}}, {'type': 'Feature', 'properties': {'description': 'A fault occurred on an underground electricity cable affecting the local area.', 'dno': 'ukpn', 'estimated_restored_time': '2021-04-11T21:00:00', 'incident_id': 'INCD-248015-G', 'incident_url': 'https://www.ukpowernetworks.co.uk/power-cut/map?incidentid=INCD-248015-G', 'postcodes_impacted': ['CT27EN', 'CT27EQ', 'CT27EW', 'CT27HB', 'CT27HE', 'CT27RS', 'CT27RT', 'CT27RU'], 'received_time': '2021-04-11T13:28:00'}, 'geometry': {'type': 'Point', 'coordinates': [1.0752229885850892, 51.286286733502784]}}, {'type': 'Feature', 'properties': {'description': "We're carrying out planned work in your area. For our engineers to carry it out safely they need to turn the power off. We're doing this work as it's essential to provide reliable electricity supplies to your area. We're sorry for any inconvenience caused and thank you for your patience.", 'dno': 'ukpn', 'estimated_restored_time': '2021-04-11T15:00:00', 'incident_id': 'INCD-228154-Z', 'incident_url': 'https://www.ukpowernetworks.co.uk/power-cut/map?incidentid=INCD-228154-Z', 'postcodes_impacted': ['SS71QG', 'SS71QQ'], 'received_time': '2021-04-11T10:00:00'}, 'geometry': {'type': 'Point', 'coordinates': [0.5903232048840419, 51.55272208815717]}}, {'type': 'Feature', 'properties': {'description': "We're carrying out planned work in your area. For our engineers to carry it out safely they need to turn the power off. We're doing this work as it's essential to provide reliable electricity supplies to your area. We're sorry for any inconvenience caused and thank you for your patience.", 'dno': 'ukpn', 'estimated_restored_time': '2021-04-11T09:00:00', 'incident_id': 'INCD-211989-Z', 'incident_url': 'https://www.ukpowernetworks.co.uk/power-cut/map?incidentid=INCD-211989-Z', 'postcodes_impacted': ['NR136AA', 'NR136PD', 'NR136PE', 'NR136QQ', 'NR136SP'], 'received_time': '2021-04-11T01:07:00'}, 'geometry': {'type': 'Point', 'coordinates': [1.3852038495167245, 52.66608437850117]}}, {'type': 'Feature', 'properties': {'description': "We're carrying out planned work in your area. For our engineers to carry it out safely they need to turn the power off. We're doing this work as it's essential to provide reliable electricity supplies to your area. We're sorry for any inconvenience caused and thank you for your patience.", 'dno': 'ukpn', 'estimated_restored_time': '2021-04-11T14:00:00', 'incident_id': 'INCD-227461-Z', 'incident_url': 'https://www.ukpowernetworks.co.uk/power-cut/map?incidentid=INCD-227461-Z', 'postcodes_impacted': ['SG27PX', 'SG27PZ', 'SG27QA'], 'received_time': '2021-04-11T09:21:00'}, 'geometry': {'type': 'Point', 'coordinates': [-0.11508453245880444, 51.941311076841124]}}, {'type': 'Feature', 'properties': {'description': "We're carrying out planned work in your area. For our engineers to carry it out safely they need to turn the power off. We're doing this work as it's essential to provide reliable electricity supplies to your area. We're sorry for any inconvenience caused and thank you for your patience.", 'dno': 'ukpn', 'estimated_restored_time': '2021-04-11T15:30:00', 'incident_id': 'INCD-227945-Z', 'incident_url': 'https://www.ukpowernetworks.co.uk/power-cut/map?incidentid=INCD-227945-Z', 'postcodes_impacted': ['CB75QU', 'CB75RJ'], 'received_time': '2021-04-11T08:35:00'}, 'geometry': {'type': 'Point', 'coordinates': [0.4077326864452153, 52.336646243377984]}}, {'type': 'Feature', 'properties': {'description': "We're carrying out planned work in your area. For our engineers to carry it out safely they need to turn the power off. We're doing this work as it's essential to provide reliable electricity supplies to your area. We're sorry for any inconvenience caused and thank you for your patience.", 'dno': 'ukpn', 'estimated_restored_time': '2021-04-11T10:00:00', 'incident_id': 'INCD-228554-Z', 'incident_url': 'https://www.ukpowernetworks.co.uk/power-cut/map?incidentid=INCD-228554-Z', 'postcodes_impacted': ['MK455AL', 'MK455AN'], 'received_time': '2021-04-11T09:00:00'}, 'geometry': {'type': 'Point', 'coordinates': [-0.512720087894829, 51.99192145920916]}}, {'type': 'Feature', 'properties': {'description': 'We’re sorry for the loss of supply. We currently have a fault affecting the areas listed. Our engineers are on site working hard to get the power back on as quickly as they can. If you need more information, please call us on 105 or send us a message on <a href="http://m.me/ssencommunity/">Facebook</a> or Twitter (<a href="https://twitter.com/ssencommunity">@ssencommunity</a>) and quote reference \'HB5497\'', 'dno': 'ssen', 'estimated_restored_time': '2021-04-11 22:00:00', 'incident_id': 'HB5497', 'incident_url': 'https://www.ssen.co.uk/Powertrack/', 'postcodes_impacted': ['SO18 1HT', 'SO18 1LZ', 'SO18 1NA', 'SO18 1NX', 'SO18 1NY', 'SO18 1NZ', 'SO18 1PA', 'SO18 1PE', 'SO18 1PF', 'SO18 1PG', 'SO18 1PH', 'SO18 1PJ', 'SO18 2HU', 'SO18 2PF'], 'received_time': '2021-04-11 18:56:00'}, 'geometry': {'type': 'Point', 'coordinates': [-1.3732865, 50.93129807142857]}}, {'type': 'Feature', 'properties': {'description': 'We’re sorry for the loss of supply. We currently have a fault affecting the areas listed. Our engineers are on site working hard to get the power back on as quickly as they can. If you need more information, please call us on 105 or send us a message on <a href="http://m.me/ssencommunity/">Facebook</a> or Twitter (<a href="https://twitter.com/ssencommunity">@ssencommunity</a>) and quote reference \'HB5495\'', 'dno': 'ssen', 'estimated_restored_time': '2021-04-11 21:30:00', 'incident_id': 'HB5495', 'incident_url': 'https://www.ssen.co.uk/Powertrack/', 'postcodes_impacted': ['AB14 0RQ', 'AB14 0SN', 'AB14 0SX'], 'received_time': '2021-04-11 18:20:00'}, 'geometry': {'type': 'Point', 'coordinates': [-2.2639973333333336, 57.09944333333333]}}, {'type': 'Feature', 'properties': {'description': 'We\'re sorry for the loss of supply. The reason you\'re currently without power is a planned outage in the areas listed. We have turned off your electricity supply to allow us to safely carry out essential work to our electrical equipment. By doing this, it\'ll help us to improve the reliability of our service to you for the future. If you have any questions or require more information, please call us on 105 or send us a message on <a href="http://m.me/ssencommunity/">Facebook</a> or Twitter (<a href="https://twitter.com/ssencommunity">@ssencommunity</a>) with reference  \'198959\'. You will have received a letter from us confirming your power will be interrupted with specific information relating to your property. If you did not receive this letter, you can assume your power will not be interrupted.', 'dno': 'ssen', 'estimated_restored_time': '2021-04-11 21:30:00', 'incident_id': '198959', 'incident_url': 'https://www.ssen.co.uk/Powertrack/', 'postcodes_impacted': ['DT10 1BE', 'DT11 7EN'], 'received_time': '2021-04-11 15:00:00'}, 'geometry': {'type': 'Point', 'coordinates': [-2.229862, 50.891875999999996]}}, {'type': 'Feature', 'properties': {'description': 'We’re sorry for the loss of supply. We currently have a fault affecting the areas listed. Our engineers are on site working hard to get the power back on as quickly as they can. If you need more information, please call us on 105 or send us a message on <a href="http://m.me/ssencommunity/">Facebook</a> or Twitter (<a href="https://twitter.com/ssencommunity">@ssencommunity</a>) and quote reference \'HB5426\'', 'dno': 'ssen', 'estimated_restored_time': '2021-04-12 00:00:00', 'incident_id': 'HB5426', 'incident_url': 'https://www.ssen.co.uk/Powertrack/', 'postcodes_impacted': ['PO7 8AN', 'PO7 8AY', 'PO7 8AZ', 'PO7 8BG'], 'received_time': '2021-04-11 13:06:00'}, 'geometry': {'type': 'Point', 'coordinates': [-1.027717, 50.85849]}}, {'type': 'Feature', 'properties': {'description': 'Awaiting', 'dno': 'wpd', 'estimated_restored_time': '2021-04-11 22:30:00', 'incident_id': 'INCD-125423-B', 'incident_url': 'https://powercuts.westernpower.co.uk/incident/INCD-125423-B', 'postcodes_impacted': ['TQ12 1QZ', 'TQ12 1PX'], 'received_time': '2021-04-11 19:20:00'}, 'geometry': {'type': 'Point', 'coordinates': [-3.625027, 50.535656]}}, {'type': 'Feature', 'properties': {'description': 'In Progress', 'dno': 'wpd', 'estimated_restored_time': '2021-04-11 23:00:00', 'incident_id': 'INCD-1610-g', 'incident_url': 'https://powercuts.westernpower.co.uk/incident/INCD-1610-g', 'postcodes_impacted': ['CF23 6NQ', 'CF23 6NL', 'CF23 6NP', 'CF23 6NH', 'CF23 6PF', 'CF23 6ND', 'CF23 6NG'], 'received_time': '2021-04-11 15:53:00'}, 'geometry': {'type': 'Point', 'coordinates': [-3.168572285714286, 51.522125714285714]}}, {'type': 'Feature', 'properties': {'description': 'In Progress', 'dno': 'wpd', 'estimated_restored_time': null, 'incident_id': 'INCD-416261-E', 'incident_url': 'https://powercuts.westernpower.co.uk/incident/INCD-416261-E', 'postcodes_impacted': ['GL50 4DU'], 'received_time': '2021-04-11 10:49:00'}, 'geometry': {'type': 'Point', 'coordinates': [-2.076144, 51.903077]}}, {'type': 'Feature', 'properties': {'description': 'In Progress', 'dno': 'wpd', 'estimated_restored_time': '2021-04-11 21:30:00', 'incident_id': 'INCD-357634-G', 'incident_url': 'https://powercuts.westernpower.co.uk/incident/INCD-357634-G', 'postcodes_impacted': ['WR10 1BL', 'WR10 1DW', 'WR10 1BN', 'WR10 1EB', 'WR10 1BJ'], 'received_time': '2021-04-11 18:22:00'}, 'geometry': {'type': 'Point', 'coordinates': [-2.0780146, 52.111641199999994]}}, {'type': 'Feature', 'properties': {'description': 'In Progress', 'dno': 'wpd', 'estimated_restored_time': '2021-04-11 23:00:00', 'incident_id': 'INCD-43894-D', 'incident_url': 'https://powercuts.westernpower.co.uk/incident/INCD-43894-D', 'postcodes_impacted': ['CV10 7EE'], 'received_time': '2021-04-11 13:36:00'}, 'geometry': {'type': 'Point', 'coordinates': [-1.491935, 52.516523]}}, {'type': 'Feature', 'properties': {'description': 'In Progress', 'dno': 'wpd', 'estimated_restored_time': '2021-04-12 01:00:00', 'incident_id': 'INCD-152316-H', 'incident_url': 'https://powercuts.westernpower.co.uk/incident/INCD-152316-H', 'postcodes_impacted': ['NN18 8JL'], 'received_time': '2021-04-11 15:42:00'}, 'geometry': {'type': 'Point', 'coordinates': [-0.721749, 52.46816]}}, {'type': 'Feature', 'properties': {'description': 'We are aware of a fault in your area. If you require more information please call us on: \nCentral and Southern Scotland:  0800 092 9290 . \n Cheshire, Merseyside, North Wales and North Shropshire: 0800 001 5400.', 'dno': 'sp', 'estimated_restored_time': '2021-04-11 22:59', 'incident_id': 'INCD-504273-f', 'incident_url': 'https://www.spenergynetworks.co.uk/pages/power_cuts_map.aspx?incRef=INCD-504273-f', 'postcodes_impacted': ['EH39LJ', 'EH39LL', 'EH39LN'], 'received_time': '2021-04-11 20:08'}, 'geometry': {'type': 'Point', 'coordinates': [-3.2026281155371095, 55.94112459045027]}}, {'type': 'Feature', 'properties': {'description': 'Monitoring systems on our network have alerted us to an unexpected fault affecting a number of customers over a wide area. We apologise for the inconvenience caused, our emergency response teams have been notified and we expect your supply to be restored by 21:00', 'dno': 'sp', 'estimated_restored_time': '2021-04-11 20:00', 'incident_id': 'INCD-562621-s', 'incident_url': 'https://www.spenergynetworks.co.uk/pages/power_cuts_map.aspx?incRef=INCD-562621-s', 'postcodes_impacted': ['ML110RN', 'ML110XX'], 'received_time': '2021-04-11 18:07'}, 'geometry': {'type': 'Point', 'coordinates': [-3.803687775797155, 55.55518342774955]}}, {'type': 'Feature', 'properties': {'description': 'There is an unplanned power cut affecting the LL63 postcode area of Ty Groes. It was necessary for our engineers to carry out an emergency shutdown at 8PM due to a fault on our electrical network. Our team will be carrying out repair work safely on the overhead line network and this may affect the supply to your property. We will work to get your power back on as quickly and as safely as possible, and we expect the power to be restored by 10PM. We will update this message if this information changes. We apologise for the inconvenience and thank you for your patience. This message was updated at 8:07PM on Sunday 11th April 2021.', 'dno': 'sp', 'estimated_restored_time': '2021-04-11 21:00', 'incident_id': 'INCD-1807736-i', 'incident_url': 'https://www.spenergynetworks.co.uk/pages/power_cuts_map.aspx?incRef=INCD-1807736-i', 'postcodes_impacted': ['LL635SX'], 'received_time': '2021-04-11 17:11'}, 'geometry': {'type': 'Point', 'coordinates': [-4.429291946606081, 53.23389408692902]}}, {'type': 'Feature', 'properties': {'description': 'This is a message for customers in the TD2 and TD3 postcode area of Galashiels. It is necessary for our engineers to carry out an emergency shutdown at 8PM to repair a fault on our overhead line network near to Blythe Farm and this may affect the supply to your property. We will work to get your power back on as quickly and as safely as possible by 10PM. We will update this message if this information changes. We apologise for the inconvenience and thank you for your patience. This message was updated at 7:16PM on Sunday, 11 April 2021', 'dno': 'sp', 'estimated_restored_time': '2021-04-11 21:00', 'incident_id': 'INCD-504249-f', 'incident_url': 'https://www.spenergynetworks.co.uk/pages/power_cuts_map.aspx?incRef=INCD-504249-f', 'postcodes_impacted': ['TD26SJ', 'TD26XX', 'TD36NH', 'TD36NJ', 'TD36NQ', 'TD36NW'], 'received_time': '2021-04-11 17:04'}, 'geometry': {'type': 'Point', 'coordinates': [-2.6192975672610843, 55.74972919769796]}}, {'type': 'Feature', 'properties': {'description': 'There is a power cut in the CH1 postcode area of Chester, affecting customers on Higher Ferry Lane, Sealand Road, Deeside Lane and surrounding streets . We had no advance warning of this and only became aware at 1:46PM. Our engineers have established that there is an underground cable fault and that repairs will be complex. We are awaiting delivery of generators to restore power and this should happen by 9PM. We apologise for the inconvenience and thank you for your patience. This message was updated at 6:25PM on Sunday 11th April 2021.', 'dno': 'sp', 'estimated_restored_time': '2021-04-11 20:00', 'incident_id': 'INCD-371560-r', 'incident_url': 'https://www.spenergynetworks.co.uk/pages/power_cuts_map.aspx?incRef=INCD-371560-r', 'postcodes_impacted': ['CH14LP', 'CH14NL', 'CH14NT', 'CH16BA', 'CH16BP', 'CH16BS', 'CH16BY', 'CH16BZ', 'CH16EB', 'CH16QB', 'CH16QE', 'CH16QF', 'CH16QG', 'CH16QQ'], 'received_time': '2021-04-11 13:46'}, 'geometry': {'type': 'Point', 'coordinates': [-2.944273602430924, 53.196821820777714]}}, {'type': 'Feature', 'properties': {'description': 'There is an unplanned power cut affecting the LL18 postcode area of Rhyl, affecting properties in Trehearn Drive. It was necessary for our engineers to carry out an emergency shutdown at 7:15PM due to an underground cable fault. Our team will be carrying out repair work safely on the underground cable network and this may affect the supply to your property. We will work to get your power back on as quickly and as safely as possible, and we expect the power to be restored by 10PM. We will update this message if this information changes. We apologise for the inconvenience and thank you for your patience. This message was updated at 6:15PM on Sunday 11th April 2021.', 'dno': 'sp', 'estimated_restored_time': '2021-04-11 21:00', 'incident_id': 'INCD-496121-k', 'incident_url': 'https://www.spenergynetworks.co.uk/pages/power_cuts_map.aspx?incRef=INCD-496121-k', 'postcodes_impacted': ['LL183RR'], 'received_time': '2021-04-11 12:44'}, 'geometry': {'type': 'Point', 'coordinates': [-3.4766681549573386, 53.32387919008836]}}, {'type': 'Feature', 'properties': {'description': 'We are aware of a fault in your area. If you require more information please call us on: \nCentral and Southern Scotland:  0800 092 9290 . \n Cheshire, Merseyside, North Wales and North Shropshire: 0800 001 5400.', 'dno': 'sp', 'estimated_restored_time': '2021-04-11 14:34', 'incident_id': 'INCD-504153-f', 'incident_url': 'https://www.spenergynetworks.co.uk/pages/power_cuts_map.aspx?incRef=INCD-504153-f', 'postcodes_impacted': ['ML41DR', 'ML41DS', 'ML41DT'], 'received_time': '2021-04-11 12:36'}, 'geometry': {'type': 'Point', 'coordinates': [-4.0024738755500815, 55.81845018500335]}}, {'type': 'Feature', 'properties': {'description': 'Damaged EHV U/G In Progress', 'dno': 'np', 'estimated_restored_time': '', 'incident_id': 'INCD-167229-A', 'incident_url': 'https://www.northernpowergrid.com/power-cuts', 'postcodes_impacted': {'LS25 2DQ': {'class': 'models.MapDataLocation', 'lat': 53.7997, 'lng': -1.39461}, 'LS15 8AB': {'class': 'models.MapDataLocation', 'lat': 53.8048, 'lng': -1.41077}, 'LS15 8AD': {'class': 'models.MapDataLocation', 'lat': 53.804, 'lng': -1.42138}, 'LS15 8AE': {'class': 'models.MapDataLocation', 'lat': 53.8056, 'lng': -1.42527}, 'LS25 1NG': {'class': 'models.MapDataLocation', 'lat': 53.7984, 'lng': -1.39455}, 'LS15 8AJ': {'class': 'models.MapDataLocation', 'lat': 53.8073, 'lng': -1.43811}, 'LS25 1NF': {'class': 'models.MapDataLocation', 'lat': 53.7973, 'lng': -1.40888}, 'LS25 1AS': {'class': 'models.MapDataLocation', 'lat': 53.7946, 'lng': -1.40015}}, 'received_time': '2021-03-29 16:46'}, 'geometry': {'type': 'Point', 'coordinates': [-1.4109423749999999, 53.801725125000004]}}, {'type': 'Feature', 'properties': {'description': 'Unknown P1 Awaiting', 'dno': 'np', 'estimated_restored_time': '', 'incident_id': 'INCD-168880-A', 'incident_url': 'https://www.northernpowergrid.com/power-cuts', 'postcodes_impacted': {'YO32 2NB': {'class': 'models.MapDataLocation', 'lat': 54.0133, 'lng': -1.06187}}, 'received_time': '2021-04-05 14:08'}, 'geometry': {'type': 'Point', 'coordinates': [-1.061855, 54.013288]}}, {'type': 'Feature', 'properties': {'description': 'Unknown P2 Awaiting', 'dno': 'np', 'estimated_restored_time': '', 'incident_id': 'INCD-170226-A', 'incident_url': 'https://www.northernpowergrid.com/power-cuts', 'postcodes_impacted': {'WF16 9EH': {'class': 'models.MapDataLocation', 'lat': 53.7116, 'lng': -1.67113}}, 'received_time': '2021-04-09 13:13'}, 'geometry': {'type': 'Point', 'coordinates': [-1.67109, 53.71158]}}, {'type': 'Feature', 'properties': {'description': 'U/G LV Mains Repair (Other) In Progress', 'dno': 'np', 'estimated_restored_time': '2021-04-11 20:00', 'incident_id': 'INCD-170583-A', 'incident_url': 'https://www.northernpowergrid.com/power-cuts', 'postcodes_impacted': {'TS11 7LZ': {'class': 'models.MapDataLocation', 'lat': 54.5959, 'lng': -1.01906}, 'TS11 7LX': {'class': 'models.MapDataLocation', 'lat': 54.5969, 'lng': -1.01785}, 'TS11 6JT': {'class': 'models.MapDataLocation', 'lat': 54.5953, 'lng': -1.02007}, 'TS11 7LN': {'class': 'models.MapDataLocation', 'lat': 54.5949, 'lng': -1.01791}, 'TS11 7NG': {'class': 'models.MapDataLocation', 'lat': 54.5949, 'lng': -1.01952}, 'TS11 7NF': {'class': 'models.MapDataLocation', 'lat': 54.5975, 'lng': -1.01811}, 'TS11 6JX': {'class': 'models.MapDataLocation', 'lat': 54.5932, 'lng': -1.0201}, 'TS11 7LB': {'class': 'models.MapDataLocation', 'lat': 54.5969, 'lng': -1.01847}, 'TS11 7LU': {'class': 'models.MapDataLocation', 'lat': 54.5964, 'lng': -1.0184}, 'TS11 6JU': {'class': 'models.MapDataLocation', 'lat': 54.5947, 'lng': -1.02013}}, 'received_time': '2021-04-11 08:12'}, 'geometry': {'type': 'Point', 'coordinates': [-1.0189364, 54.59564660000001]}}, {'type': 'Feature', 'properties': {'description': 'Safety Interruption In Progress', 'dno': 'np', 'estimated_restored_time': '2021-04-11 21:30', 'incident_id': 'INCD-170629-A', 'incident_url': 'https://www.northernpowergrid.com/power-cuts', 'postcodes_impacted': {'HU3 3EJ': {'class': 'models.MapDataLocation', 'lat': 53.7377, 'lng': -0.36443}, 'HU3 2UD': {'class': 'models.MapDataLocation', 'lat': 53.7398, 'lng': -0.365789}, 'HU3 2TA': {'class': 'models.MapDataLocation', 'lat': 53.742, 'lng': -0.367706}, 'HU3 2UB': {'class': 'models.MapDataLocation', 'lat': 53.7395, 'lng': -0.364801}, 'HU3 3DW': {'class': 'models.MapDataLocation', 'lat': 53.7396, 'lng': -0.362614}, 'HU3 2UA': {'class': 'models.MapDataLocation', 'lat': 53.7403, 'lng': -0.364997}, 'HU3 2AA': {'class': 'models.MapDataLocation', 'lat': 53.7378, 'lng': -0.351402}, 'HU9 3SJ': {'class': 'models.MapDataLocation', 'lat': 53.7553, 'lng': -0.286599}, 'HU3 2TX': {'class': 'models.MapDataLocation', 'lat': 53.7401, 'lng': -0.363157}, 'HU3 3DP': {'class': 'models.MapDataLocation', 'lat': 53.7391, 'lng': -0.364041}, 'HU3 2BU': {'class': 'models.MapDataLocation', 'lat': 53.7365, 'lng': -0.352455}}, 'received_time': '2021-04-11 10:55'}, 'geometry': {'type': 'Point', 'coordinates': [-0.3552333636363636, 53.740732]}}, {'type': 'Feature', 'properties': {'description': 'U/G Service repair In Progress', 'dno': 'np', 'estimated_restored_time': '', 'incident_id': 'INCD-170642-A', 'incident_url': 'https://www.northernpowergrid.com/power-cuts', 'postcodes_impacted': {'S5 8XF': {'class': 'models.MapDataLocation', 'lat': 53.4069, 'lng': -1.47245}}, 'received_time': '2021-04-11 11:59'}, 'geometry': {'type': 'Point', 'coordinates': [-1.472445, 53.406839]}}, {'type': 'Feature', 'properties': {'description': 'U/G LV Mains Repair (Other) In Progress', 'dno': 'np', 'estimated_restored_time': '2021-04-11 20:30', 'incident_id': 'INCD-170659-A', 'incident_url': 'https://www.northernpowergrid.com/power-cuts', 'postcodes_impacted': {'LS11 9AL': {'class': 'models.MapDataLocation', 'lat': 53.7893, 'lng': -1.55001}, 'LS11 9LA': {'class': 'models.MapDataLocation', 'lat': 53.7836, 'lng': -1.5618}, 'LS11 9LB': {'class': 'models.MapDataLocation', 'lat': 53.7845, 'lng': -1.56308}, 'LS11 9NB': {'class': 'models.MapDataLocation', 'lat': 53.7843, 'lng': -1.56012}, 'LS11 9LJ': {'class': 'models.MapDataLocation', 'lat': 53.7838, 'lng': -1.56142}, 'LS11 9LD': {'class': 'models.MapDataLocation', 'lat': 53.7845, 'lng': -1.56303}, 'LS11 9LE': {'class': 'models.MapDataLocation', 'lat': 53.7846, 'lng': -1.56259}, 'LS11 9LF': {'class': 'models.MapDataLocation', 'lat': 53.7844, 'lng': -1.5626}, 'LS11 9LG': {'class': 'models.MapDataLocation', 'lat': 53.7845, 'lng': -1.56044}, 'LS11 9RQ': {'class': 'models.MapDataLocation', 'lat': 53.7857, 'lng': -1.56411}, 'LS11 9LL': {'class': 'models.MapDataLocation', 'lat': 53.7841, 'lng': -1.56131}, 'LS11 9LS': {'class': 'models.MapDataLocation', 'lat': 53.7844, 'lng': -1.56126}, 'LS11 9LR': {'class': 'models.MapDataLocation', 'lat': 53.7841, 'lng': -1.56148}, 'LS11 9LQ': {'class': 'models.MapDataLocation', 'lat': 53.7846, 'lng': -1.56215}, 'LS11 9LP': {'class': 'models.MapDataLocation', 'lat': 53.7842, 'lng': -1.56081}, 'LS11 9LU': {'class': 'models.MapDataLocation', 'lat': 53.7849, 'lng': -1.56144}, 'LS11 9LT': {'class': 'models.MapDataLocation', 'lat': 53.7848, 'lng': -1.56148}, 'LS11 9RD': {'class': 'models.MapDataLocation', 'lat': 53.7853, 'lng': -1.56464}, 'LS11 9LZ': {'class': 'models.MapDataLocation', 'lat': 53.7846, 'lng': -1.56074}, 'LS11 9LX': {'class': 'models.MapDataLocation', 'lat': 53.7848, 'lng': -1.56112}}, 'received_time': '2021-04-11 14:01'}, 'geometry': {'type': 'Point', 'coordinates': [-1.56120315, 53.78472185]}}, {'type': 'Feature', 'properties': {'description': 'Unknown P1 In Progress', 'dno': 'np', 'estimated_restored_time': '2021-04-11 21:15', 'incident_id': 'INCD-170694-A', 'incident_url': 'https://www.northernpowergrid.com/power-cuts', 'postcodes_impacted': {'HU14 3AH': {'class': 'models.MapDataLocation', 'lat': 53.7182, 'lng': -0.505065}}, 'received_time': '2021-04-11 18:13'}, 'geometry': {'type': 'Point', 'coordinates': [-0.505079, 53.718242]}}, {'type': 'Feature', 'properties': {'description': 'Unknown P2 In Progress', 'dno': 'np', 'estimated_restored_time': '2021-04-11 21:45', 'incident_id': 'INCD-170696-A', 'incident_url': 'https://www.northernpowergrid.com/power-cuts', 'postcodes_impacted': {'DN20 9DD': {'class': 'models.MapDataLocation', 'lat': 53.5338, 'lng': -0.536617}}, 'received_time': '2021-04-11 18:37'}, 'geometry': {'type': 'Point', 'coordinates': [-0.536571, 53.53378]}}, {'type': 'Feature', 'properties': {'description': 'Unknown P2 In Progress', 'dno': 'np', 'estimated_restored_time': '2021-04-11 21:45', 'incident_id': 'INCD-170697-A', 'incident_url': 'https://www.northernpowergrid.com/power-cuts', 'postcodes_impacted': {'TS21 1EW': {'class': 'models.MapDataLocation', 'lat': 54.5817, 'lng': -1.39259}}, 'received_time': '2021-04-11 18:43'}, 'geometry': {'type': 'Point', 'coordinates': [-1.392592, 54.58168]}}, {'type': 'Feature', 'properties': {'description': 'Unknown P2 In Progress', 'dno': 'np', 'estimated_restored_time': '2021-04-11 21:45', 'incident_id': 'INCD-170698-A', 'incident_url': 'https://www.northernpowergrid.com/power-cuts', 'postcodes_impacted': {'DL15 0HB': {'class': 'models.MapDataLocation', 'lat': 54.71, 'lng': -1.69768}}, 'received_time': '2021-04-11 18:44'}, 'geometry': {'type': 'Point', 'coordinates': [-1.697675, 54.70997]}}, {'type': 'Feature', 'properties': {'description': 'Unknown P2 In Progress', 'dno': 'np', 'estimated_restored_time': '2021-04-11 22:15', 'incident_id': 'INCD-170700-A', 'incident_url': 'https://www.northernpowergrid.com/power-cuts', 'postcodes_impacted': {'LS19 7XD': {'class': 'models.MapDataLocation', 'lat': 53.8715, 'lng': -1.68059}}, 'received_time': '2021-04-11 19:10'}, 'geometry': {'type': 'Point', 'coordinates': [-1.680586, 53.871577]}}, {'type': 'Feature', 'properties': {'description': 'Unknown P1 In Progress', 'dno': 'np', 'estimated_restored_time': '', 'incident_id': 'INCD-170701-A', 'incident_url': 'https://www.northernpowergrid.com/power-cuts', 'postcodes_impacted': {'DL3 6QH': {'class': 'models.MapDataLocation', 'lat': 54.536, 'lng': -1.56378}}, 'received_time': '2021-04-11 19:20'}, 'geometry': {'type': 'Point', 'coordinates': [-1.56378, 54.536045]}}, {'type': 'Feature', 'properties': {'description': 'Unknown P2 Awaiting', 'dno': 'np', 'estimated_restored_time': '2021-04-11 22:45', 'incident_id': 'INCD-170702-A', 'incident_url': 'https://www.northernpowergrid.com/power-cuts', 'postcodes_impacted': {'WF10 3EX': {'class': 'models.MapDataLocation', 'lat': 53.7209, 'lng': -1.3233}}, 'received_time': '2021-04-11 19:31'}, 'geometry': {'type': 'Point', 'coordinates': [-1.323273, 53.720811]}}, {'type': 'Feature', 'properties': {'description': 'Unknown P2 In Progress', 'dno': 'np', 'estimated_restored_time': '2021-04-11 22:45', 'incident_id': 'INCD-170704-A', 'incident_url': 'https://www.northernpowergrid.com/power-cuts', 'postcodes_impacted': {'DL13 5EZ': {'class': 'models.MapDataLocation', 'lat': 54.6145, 'lng': -1.81349}}, 'received_time': '2021-04-11 19:36'}, 'geometry': {'type': 'Point', 'coordinates': [-1.813523, 54.614468]}}, {'type': 'Feature', 'properties': {'description': 'We need to temporarily turn the power off to carry out maintenance on our network in the area. The scheduled work has now been completed', 'dno': 'np', 'estimated_restored_time': '2021-04-11 13:30', 'incident_id': 'PPC039509', 'incident_url': 'https://www.northernpowergrid.com/power-cuts', 'postcodes_impacted': {'NE24 4RT': {'class': 'models.MapDataLocation', 'lat': 55.1303, 'lng': -1.55339}}, 'received_time': '2021-04-11 08:00'}, 'geometry': {'type': 'Point', 'coordinates': [-1.553333, 55.131452]}}, {'type': 'Feature', 'properties': {'description': 'We need to temporarily turn the power off to carry out maintenance on our network in the area. The scheduled work has now been completed', 'dno': 'np', 'estimated_restored_time': '2021-04-11 14:00', 'incident_id': 'PPC039520', 'incident_url': 'https://www.northernpowergrid.com/power-cuts', 'postcodes_impacted': {'HU1 3SA': {'class': 'models.MapDataLocation', 'lat': 53.7462, 'lng': -0.342096}, 'HU1 3SQ': {'class': 'models.MapDataLocation', 'lat': 53.7455, 'lng': -0.341291}, 'HU1 3SS': {'class': 'models.MapDataLocation', 'lat': 53.7446, 'lng': -0.339792}, 'HU1 3SJ': {'class': 'models.MapDataLocation', 'lat': 53.7449, 'lng': -0.340147}}, 'received_time': '2021-04-11 08:00'}, 'geometry': {'type': 'Point', 'coordinates': [-0.34083100000000005, 53.745299749999994]}}, {'type': 'Feature', 'properties': {'description': 'We need to temporarily turn the power off to carry out replacement of poles that support our overhead power lines in the area. The scheduled work has now been completed', 'dno': 'np', 'estimated_restored_time': '2021-04-11 14:15', 'incident_id': 'PPC039595', 'incident_url': 'https://www.northernpowergrid.com/power-cuts', 'postcodes_impacted': {'DH4 4JS': {'class': 'models.MapDataLocation', 'lat': 54.8671, 'lng': -1.49143}, 'DH4 4QN': {'class': 'models.MapDataLocation', 'lat': 54.8677, 'lng': -1.49471}, 'DH4 4QT': {'class': 'models.MapDataLocation', 'lat': 54.8674, 'lng': -1.49586}, 'DH4 7DS': {'class': 'models.MapDataLocation', 'lat': 54.868, 'lng': -1.49254}, 'DH4 4QW': {'class': 'models.MapDataLocation', 'lat': 54.8674, 'lng': -1.49351}, 'DH4 4QY': {'class': 'models.MapDataLocation', 'lat': 54.8675, 'lng': -1.49324}, 'DH4 4QZ': {'class': 'models.MapDataLocation', 'lat': 54.8673, 'lng': -1.49149}}, 'received_time': '2021-04-11 08:30'}, 'geometry': {'type': 'Point', 'coordinates': [-1.4932622857142857, 54.867475285714285]}}, {'type': 'Feature', 'properties': {'description': 'We need to temporarily turn the power off to connect a new customer in the area. The scheduled work has now been completed', 'dno': 'np', 'estimated_restored_time': '2021-04-11 12:00', 'incident_id': 'PPC039603', 'incident_url': 'https://www.northernpowergrid.com/power-cuts', 'postcodes_impacted': {'DL14 6XB': {'class': 'models.MapDataLocation', 'lat': 54.6476, 'lng': -1.668}, 'DL14 6XR': {'class': 'models.MapDataLocation', 'lat': 54.6459, 'lng': -1.66601}, 'DL14 6XD': {'class': 'models.MapDataLocation', 'lat': 54.6473, 'lng': -1.66619}, 'DL14 6XF': {'class': 'models.MapDataLocation', 'lat': 54.6456, 'lng': -1.66493}}, 'received_time': '2021-04-11 08:00'}, 'geometry': {'type': 'Point', 'coordinates': [-1.66590325, 54.64667675]}}, {'type': 'Feature', 'properties': {'description': 'We need to temporarily turn the power off to move equipment in order to allow another organisation to work close to our network in the area. The scheduled work has now been completed', 'dno': 'np', 'estimated_restored_time': '2021-04-11 11:30', 'incident_id': 'PPC039875', 'incident_url': 'https://www.northernpowergrid.com/power-cuts', 'postcodes_impacted': {'YO12 4QP': {'class': 'models.MapDataLocation', 'lat': 54.2391, 'lng': -0.440618}, 'YO12 4RD': {'class': 'models.MapDataLocation', 'lat': 54.2407, 'lng': -0.441693}, 'YO12 4QJ': {'class': 'models.MapDataLocation', 'lat': 54.2406, 'lng': -0.440175}}, 'received_time': '2021-04-11 07:30'}, 'geometry': {'type': 'Point', 'coordinates': [-0.4408236666666667, 54.24012833333333]}}, {'type': 'Feature', 'properties': {'description': '', 'dno': 'enw', 'estimated_restored_time': '', 'incident_id': '60508167', 'incident_url': 'https://www.enwl.co.uk/power-cuts/power-cuts-power-cuts-live-power-cut-information-fault-list/fault-list', 'postcodes_impacted': ['BD24 0AA', 'BD24 0AB', 'BD24 0AE', 'BD24 0AF', 'BD24 0AG', 'BD24 0AN', 'BD24 0AQ', 'BD24 0AR', 'BD24 0BX', 'BD24 0EG', 'BD24 0FF', 'BD24 9AB'], 'received_time': '2021-04-11 18:40'}, 'geometry': {'type': 'Point', 'coordinates': [-2.290381583333333, 54.06581633333334]}}, {'type': 'Feature', 'properties': {'description': 'The power cut in your area has been caused by an unexpected incident with the underground cable that provides electricity to your property.', 'dno': 'enw', 'estimated_restored_time': '2021-04-11 21:00', 'incident_id': '10645131', 'incident_url': 'https://www.enwl.co.uk/power-cuts/power-cuts-power-cuts-live-power-cut-information-fault-list/fault-list', 'postcodes_impacted': ['M18 7DY', 'M18 7ED', 'M18 7NF', 'M18 7NH', 'M18 7NL', 'M18 7NN', 'M18 7NP', 'M18 7NS', 'M18 7NW', 'M18 7NX', 'M18 7PY', 'M18 7SD', 'M18 7WE', 'M18 7WN', 'M18 7WP', 'M18 7WR', 'M18 7WW', 'SK5 6PD'], 'received_time': '2021-04-10 17:57'}, 'geometry': {'type': 'Point', 'coordinates': [-2.170929722222222, 53.45457555555556]}}]}

var geoJson = new L.geoJSON(geojsonFeature, {
  onEachFeature: function (feature, layer) {
    layer.bindPopup('<p>'+feature.properties.description+'</p><p>Received time: '+feature.properties.received_time+'</p><p>Estimated restored time: '+feature.properties.estimated_restored_time+'</p><p><a href="'+feature.properties.incident_url+'" target="_blank">Further details</p>');
    layer.setIcon(boltIcon);
  }
}).addTo(mymap);
});
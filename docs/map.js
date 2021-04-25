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

var geojsonFeature = {'type': 'FeatureCollection', 'features': [{'type': 'Feature', 'properties': {'description': 'A fault occurred on an underground electricity cable affecting the local area.', 'dno': 'ukpn', 'estimated_restored_time': '2021-04-25T15:00:00', 'incident_id': 'INCD-232922-Z', 'incident_url': 'https://www.ukpowernetworks.co.uk/power-cut/map?incidentid=INCD-232922-Z', 'postcodes_impacted': ['RM188SJ', 'RM188RW', 'RM188SP'], 'received_time': '2021-04-25T02:02:00'}, 'geometry': {'type': 'Point', 'coordinates': [0.41913805908977936, 51.4836884138798]}}, {'type': 'Feature', 'properties': {'description': 'A fault occurred on a piece of our electrical equipment which controls the power to your home.', 'dno': 'ukpn', 'estimated_restored_time': '2021-04-25T13:30:00', 'incident_id': 'INCD-232947-Z', 'incident_url': 'https://www.ukpowernetworks.co.uk/power-cut/map?incidentid=INCD-232947-Z', 'postcodes_impacted': ['CM187JG'], 'received_time': '2021-04-25T10:18:11'}, 'geometry': {'type': 'Point', 'coordinates': [0.1024843029296516, 51.73807023620521]}}, {'type': 'Feature', 'properties': {'description': 'We had to turn off power in your area so our engineers could safely carry out emergency repairs to the network.', 'dno': 'ukpn', 'estimated_restored_time': '2021-04-25T12:30:00', 'incident_id': 'INCD-260703-J', 'incident_url': 'https://www.ukpowernetworks.co.uk/power-cut/map?incidentid=INCD-260703-J', 'postcodes_impacted': ['NW101BX', 'NW101BL', 'NW101BN', 'NW101BS', 'NW101BT', 'NW101BZ', 'NW101DD', 'NW101DU', 'NW101RP'], 'received_time': '2021-04-24T23:13:00'}, 'geometry': {'type': 'Point', 'coordinates': [-0.24354342090342543, 51.555423354477156]}}, {'type': 'Feature', 'properties': {'description': 'We were investigating an overhead electricity line fault which caused a power cut in the local area.', 'dno': 'ukpn', 'estimated_restored_time': '2021-04-25T12:00:00', 'incident_id': 'INCD-55074-V', 'incident_url': 'https://www.ukpowernetworks.co.uk/power-cut/map?incidentid=INCD-55074-V', 'postcodes_impacted': ['ME172BA', 'ME172AN', 'ME172AP', 'ME172AZ'], 'received_time': '2021-04-25T07:24:00'}, 'geometry': {'type': 'Point', 'coordinates': [0.6798192539281821, 51.20854598990692]}}, {'type': 'Feature', 'properties': {'description': 'A fault occurred on a piece of our electrical equipment which controls the power to your home.', 'dno': 'ukpn', 'estimated_restored_time': '2021-04-25T12:00:00', 'incident_id': 'INCD-232940-Z', 'incident_url': 'https://www.ukpowernetworks.co.uk/power-cut/map?incidentid=INCD-232940-Z', 'postcodes_impacted': ['IP242NA', 'IP242NJ', 'IP242NB', 'IP242NE', 'IP242NF', 'IP242NG', 'IP242NH', 'IP242NQ'], 'received_time': '2021-04-25T09:15:29'}, 'geometry': {'type': 'Point', 'coordinates': [0.745446816401528, 52.3788905519567]}}, {'type': 'Feature', 'properties': {'description': 'We were investigating a high voltage overhead electricity line fault which caused a power cut in the local area.', 'dno': 'ukpn', 'estimated_restored_time': '2021-04-25T13:00:00', 'incident_id': 'INCD-248756-G', 'incident_url': 'https://www.ukpowernetworks.co.uk/power-cut/map?incidentid=INCD-248756-G', 'postcodes_impacted': ['BN189BH', 'BN189FF', 'BN189FL', 'BN189GY', 'BN189LP', 'BN189LR', 'BN189LS', 'BN189LT', 'BN189LU', 'BN189LX', 'BN189LY', 'BN189LZ', 'BN189NA', 'BN189NB', 'BN189ND', 'BN189NE', 'BN189NF', 'BN189NG', 'BN189NH', 'BN189NJ', 'BN189NL', 'BN189NN', 'BN189NP', 'BN189NQ', 'BN189NR', 'BN189NS', 'BN189NT', 'BN189NW', 'BN189NX', 'BN189SR', 'ME57AR', 'ME57AT', 'RH202ER', 'RH202EX', 'RH202EZ', 'RH204HJ', 'RH204HP', 'RH204HR', 'RH204HS'], 'received_time': '2021-04-25T09:39:40'}, 'geometry': {'type': 'Point', 'coordinates': [-0.47166270515296294, 50.93136614832826]}}, {'type': 'Feature', 'properties': {'description': 'We were investigating a high voltage overhead electricity line fault which caused a power cut in the local area.', 'dno': 'ukpn', 'estimated_restored_time': '2021-04-25T13:00:00', 'incident_id': 'INCD-232950-Z', 'incident_url': 'https://www.ukpowernetworks.co.uk/power-cut/map?incidentid=INCD-232950-Z', 'postcodes_impacted': ['CM129PJ', 'CM129PL', 'CM129PN', 'CM129PP', 'CM129PR', 'CM129PS', 'CM129PT', 'CM129PU', 'CM129PW', 'CM129PX', 'CM129PZ', 'CM129SB', 'CM129SD', 'CM129SE', 'CM129SG', 'CM129SJ', 'CM129SL', 'CM129SN', 'CM129SP', 'CM129SR', 'CM129ST', 'CM133SB', 'CM150NX', 'CM120EE', 'CM120EH', 'CM120EL', 'CM120FP', 'CM120FR', 'CM120HD', 'CM120HE', 'CM120HG', 'CM120HQ', 'CM120JL', 'CM120XA', 'CM120XB', 'CM120XD', 'CM120XE', 'CM120XX', 'CM129AB', 'CM129AH', 'CM129AJ', 'CM129AP', 'CM129BE', 'CM129BT', 'CM129BU', 'CM129BY', 'CM129DH', 'CM129DL', 'CM129DN', 'CM129DP', 'CM129DR', 'CM129DS', 'CM129DT', 'CM129DW', 'CM129EA', 'CM129ES', 'CM129ET', 'CM129EU', 'CM129EX', 'CM129EZ', 'CM129FL', 'CM129HA', 'CM129HB', 'CM129HD', 'CM129HE', 'CM129HG', 'CM129HH', 'CM129HJ', 'CM129HL', 'CM129HP', 'CM129HX', 'CM129HZ', 'CM129JA', 'CM129JB', 'CM129JD', 'CM129JE', 'CM129JF', 'CM129JG', 'CM129JH', 'CM129JJ', 'CM129JL', 'CM129JN', 'CM129JS', 'CM129JT', 'CM129JU', 'CM129JX', 'CM129JY', 'CM129JZ', 'CM129LT', 'CM129LY', 'CM129NA', 'CM129NB', 'CM129ND', 'CM129NE', 'CM129NF', 'CM129NG', 'CM129NH', 'CM129NJ', 'CM129NL', 'CM129NN', 'CM129NP', 'CM129NQ', 'CM129NR', 'CM129NS', 'CM129NT', 'CM129NU', 'CM129NW', 'CM129NX', 'CM129NY', 'CM129NZ', 'CM129PA', 'CM129PB', 'CM129PD', 'CM129PE', 'CM129PG', 'CM129PH', 'CM129PQ', 'CM129QB', 'CM129RN', 'CM129SA', 'CM129XG', 'CM129XH', 'CM129XY', 'CM129YE', 'CM129YF'], 'received_time': '2021-04-25T10:45:18'}, 'geometry': {'type': 'Point', 'coordinates': [0.4068289524503946, 51.622604823580076]}}, {'type': 'Feature', 'properties': {'description': "We're carrying out planned work in your area. For our engineers to carry it out safely they need to turn the power off. We're doing this work as it's essential to provide reliable electricity supplies to your area. We're sorry for any inconvenience caused and thank you for your patience.", 'dno': 'ukpn', 'estimated_restored_time': '2021-04-25T12:00:00', 'incident_id': 'INCD-6582-O', 'incident_url': 'https://www.ukpowernetworks.co.uk/power-cut/map?incidentid=INCD-6582-O', 'postcodes_impacted': ['HP25RR', 'NR33ST', 'NR33SY', 'NR33TP'], 'received_time': '2021-04-26T09:30:00'}, 'geometry': {'type': 'Point', 'coordinates': [0.8451798267183119, 52.432168144452916]}}, {'type': 'Feature', 'properties': {'description': "We're carrying out planned work in your area. For our engineers to carry it out safely they need to turn the power off. We're doing this work as it's essential to provide reliable electricity supplies to your area. We're sorry for any inconvenience caused and thank you for your patience.", 'dno': 'ukpn', 'estimated_restored_time': '2021-04-25T16:00:00', 'incident_id': 'INCD-229868-Z', 'incident_url': 'https://www.ukpowernetworks.co.uk/power-cut/map?incidentid=INCD-229868-Z', 'postcodes_impacted': ['CO112JZ', 'CO112LP', 'CO76BJ'], 'received_time': '2021-04-25T09:31:00'}, 'geometry': {'type': 'Point', 'coordinates': [1.0190091446086122, 51.943073414848264]}}, {'type': 'Feature', 'properties': {'description': 'We’re sorry for the loss of supply. We currently have a fault affecting the areas listed. Our engineers are on site working hard to get the power back on as quickly as they can. If you need more information, please call us on 105 or send us a message on <a href="http://m.me/ssencommunity/">Facebook</a> or Twitter (<a href="https://twitter.com/ssencommunity">@ssencommunity</a>) and quote reference \'HC1773\'', 'dno': 'ssen', 'estimated_restored_time': '2021-04-25 12:30:00', 'incident_id': 'HC1773', 'incident_url': 'https://www.ssen.co.uk/Powertrack/', 'postcodes_impacted': ['GL7 1F', 'GL7 1FA', 'GL7 1FR', 'GL7 1FY', 'GL7 1FZ', 'GL7 1GA', 'GL7 1GW', 'GL7 1JE', 'GL7 1NE', 'GL7 1NQ', 'GL7 1PP', 'GL7 1PU', 'GL7 1PZ', 'GL7 1QG', 'GL7 1QS', 'GL7 1QW', 'GL7 1RE', 'GL7 1RF', 'GL7 1RG', 'GL7 1RH', 'GL7 1RL', 'GL7 1RP', 'GL7 1RT', 'GL7 1RW', 'GL7 1RY', 'GL7 1RZ', 'GL7 1SA', 'GL7 1SB', 'GL7 1SD', 'GL7 1SE', 'GL7 1SR', 'GL7 1SS', 'GL7 1SW', 'GL7 1SZ', 'GL7 1TH', 'GL7 1TJ', 'GL7 1TL', 'GL7 1TN', 'GL7 1TP', 'GL7 1TR', 'GL7 1TS', 'GL7 1TW', 'GL7 1UA', 'GL7 1UL', 'GL7 1UR', 'GL7 1US', 'GL7 1UT', 'GL7 1UU', 'GL7 1UW', 'GL7 1UX', 'GL7 1UY', 'GL7 1UZ', 'GL7 1WG', 'GL7 1WJ', 'GL7 1WR', 'GL7 1XA', 'GL7 1XB', 'GL7 1XE', 'GL7 1XF', 'GL7 1XG', 'GL7 1XH', 'GL7 1XJ', 'GL7 1XL', 'GL7 1XN', 'GL7 1XP', 'GL7 1XQ', 'GL7 1XR', 'GL7 1XS', 'GL7 1XT', 'GL7 1XU', 'GL7 1XW', 'GL7 1XX', 'GL7 1XY', 'GL7 1XZ', 'GL7 1YD', 'GL7 1YE', 'GL7 1YF', 'GL7 1YG', 'GL7 1YH', 'GL7 1ZU', 'GL7 6JJ', 'GL7 6JN', 'GL7 6JR', 'GL7 6JS', 'GL7 6PY', 'GL8 8HB'], 'received_time': '2021-04-25 09:24:00'}, 'geometry': {'type': 'Point', 'coordinates': [-1.9749993176470586, 51.709071082352956]}}, {'type': 'Feature', 'properties': {'description': 'We’re sorry for the loss of supply. We currently have a fault affecting the areas listed. Our engineers are on site working hard to get the power back on as quickly as they can. If you need more information, please call us on 105 or send us a message on <a href="http://m.me/ssencommunity/">Facebook</a> or Twitter (<a href="https://twitter.com/ssencommunity">@ssencommunity</a>) and quote reference \'HC1764\'', 'dno': 'ssen', 'estimated_restored_time': '2021-04-25 16:30:00', 'incident_id': 'HC1764', 'incident_url': 'https://www.ssen.co.uk/Powertrack/', 'postcodes_impacted': ['BA14 8EH', 'BA14 8ET', 'BA14 8EX', 'BA14 8HD', 'BA14 8HQ', 'BA14 8HX', 'BA14 8JS', 'BA14 8JU'], 'received_time': '2021-04-25 08:35:00'}, 'geometry': {'type': 'Point', 'coordinates': [-2.209535625, 51.321313375]}}, {'type': 'Feature', 'properties': {'description': 'We’re sorry for the loss of supply. We currently have a fault affecting the areas listed. Our engineers are on site working hard to get the power back on as quickly as they can. If you need more information, please call us on 105 or send us a message on <a href="http://m.me/ssencommunity/">Facebook</a> or Twitter (<a href="https://twitter.com/ssencommunity">@ssencommunity</a>) and quote reference \'HC1762\'', 'dno': 'ssen', 'estimated_restored_time': '2021-04-25 12:00:00', 'incident_id': 'HC1762', 'incident_url': 'https://www.ssen.co.uk/Powertrack/', 'postcodes_impacted': ['AB24 2PT', 'AB24 2QF'], 'received_time': '2021-04-25 08:29:00'}, 'geometry': {'type': 'Point', 'coordinates': [-2.1179125, 57.1673785]}}, {'type': 'Feature', 'properties': {'description': 'We’re sorry for the loss of supply. We currently have a fault affecting the areas listed. Our engineers are on site working hard to get the power back on as quickly as they can. If you need more information, please call us on 105 or send us a message on <a href="http://m.me/ssencommunity/">Facebook</a> or Twitter (<a href="https://twitter.com/ssencommunity">@ssencommunity</a>) and quote reference \'HC1760\'', 'dno': 'ssen', 'estimated_restored_time': '2021-04-25 11:30:00', 'incident_id': 'HC1760', 'incident_url': 'https://www.ssen.co.uk/Powertrack/', 'postcodes_impacted': ['RG28 7RE'], 'received_time': '2021-04-25 08:23:00'}, 'geometry': {'type': 'Point', 'coordinates': [-1.342082, 51.197732]}}, {'type': 'Feature', 'properties': {'description': 'We’re sorry for the loss of supply. We currently have a fault affecting the areas listed. Our engineers are on site working hard to get the power back on as quickly as they can. If you need more information, please call us on 105 or send us a message on <a href="http://m.me/ssencommunity/">Facebook</a> or Twitter (<a href="https://twitter.com/ssencommunity">@ssencommunity</a>) and quote reference \'HC1739\'', 'dno': 'ssen', 'estimated_restored_time': '2021-04-25 11:30:00', 'incident_id': 'HC1739', 'incident_url': 'https://www.ssen.co.uk/Powertrack/', 'postcodes_impacted': ['PO11 9RH', 'W13 0AB', 'W13 0AE', 'W13 0AJ', 'W13 0AL', 'W13 0AN', 'W13 0AP', 'W13 0AR', 'W13 0AT', 'W13 0BL', 'W13 0HT'], 'received_time': '2021-04-25 07:13:00'}, 'geometry': {'type': 'Point', 'coordinates': [-0.3887159090909091, 51.45999327272727]}}, {'type': 'Feature', 'properties': {'description': 'We’re sorry for the loss of supply. We currently have a fault affecting the areas listed. Our engineers are on site working hard to get the power back on as quickly as they can. If you need more information, please call us on 105 or send us a message on <a href="http://m.me/ssencommunity/">Facebook</a> or Twitter (<a href="https://twitter.com/ssencommunity">@ssencommunity</a>) and quote reference \'HC1721\'', 'dno': 'ssen', 'estimated_restored_time': '2021-04-25 10:30:00', 'incident_id': 'HC1721', 'incident_url': 'https://www.ssen.co.uk/Powertrack/', 'postcodes_impacted': ['AB51 3JD', 'AB51 3RN', 'AB51 3UE', 'AB51 3UF', 'AB51 3UR', 'AB51 3US', 'AB51 3UX', 'AB51 3UZ', 'AB51 5XJ'], 'received_time': '2021-04-25 04:39:00'}, 'geometry': {'type': 'Point', 'coordinates': [-2.3707512222222222, 57.271689]}}, {'type': 'Feature', 'properties': {'description': 'In Progress', 'dno': 'wpd', 'estimated_restored_time': '2021-04-25 11:00:00', 'incident_id': 'INCD-413-q', 'incident_url': 'https://powercuts.westernpower.co.uk/incident/INCD-413-q', 'postcodes_impacted': ['DT6 6QL'], 'received_time': '2021-04-25 06:48:00'}, 'geometry': {'type': 'Point', 'coordinates': [-2.896575, 50.739996]}}, {'type': 'Feature', 'properties': {'description': 'In Progress', 'dno': 'wpd', 'estimated_restored_time': '2021-04-25 11:30:00', 'incident_id': 'INCD-420-q', 'incident_url': 'https://powercuts.westernpower.co.uk/incident/INCD-420-q', 'postcodes_impacted': ['TR11 5HQ', 'TR11 5ER', 'TR11 5ES', 'TR11 5ET', 'TR11 5JF'], 'received_time': '2021-04-25 08:27:00'}, 'geometry': {'type': 'Point', 'coordinates': [-5.108986, 50.1150384]}}, {'type': 'Feature', 'properties': {'description': 'In Progress', 'dno': 'wpd', 'estimated_restored_time': '2021-04-25 11:00:00', 'incident_id': 'INCD-2407-g', 'incident_url': 'https://powercuts.westernpower.co.uk/incident/INCD-2407-g', 'postcodes_impacted': ['NP24 6DF', 'NP24 6BH'], 'received_time': '2021-04-25 06:05:00'}, 'geometry': {'type': 'Point', 'coordinates': [-3.2352765000000003, 51.7155955]}}, {'type': 'Feature', 'properties': {'description': 'In Progress', 'dno': 'wpd', 'estimated_restored_time': '2021-04-25 12:00:00', 'incident_id': 'INCD-358536-G', 'incident_url': 'https://powercuts.westernpower.co.uk/incident/INCD-358536-G', 'postcodes_impacted': ['ST18 0TP'], 'received_time': '2021-04-25 00:54:00'}, 'geometry': {'type': 'Point', 'coordinates': [-1.999543, 52.795852]}}, {'type': 'Feature', 'properties': {'description': 'In Progress', 'dno': 'wpd', 'estimated_restored_time': '2021-04-25 12:00:00', 'incident_id': 'INCD-416886-E', 'incident_url': 'https://powercuts.westernpower.co.uk/incident/INCD-416886-E', 'postcodes_impacted': ['TF3 2DW'], 'received_time': '2021-04-25 08:53:00'}, 'geometry': {'type': 'Point', 'coordinates': [-2.432912, 52.670914]}}, {'type': 'Feature', 'properties': {'description': 'There is a power cut in the KY11 postcode area of Dunfermline, affecting properties in Park Road and surrounding streets. We had no advance warning of it and only became aware of this at 1.13AM. Our engineers have arrived on site and are investigating an underground cable fault. Our team will work to get your power back on as quickly and as safely as possible. We expect the power to be restored by 2.30PM. We will update this message if this information changes. We apologise for the inconvenience and thank you for your patience. This message was recorded at 10.00AM on 25 April 2021.', 'dno': 'sp', 'estimated_restored_time': '2021-04-25 13:30', 'incident_id': 'INCD-506805-f', 'incident_url': 'https://www.spenergynetworks.co.uk/pages/power_cuts_map.aspx?incRef=INCD-506805-f', 'postcodes_impacted': ['KY112LB', 'KY112LD', 'KY112SE'], 'received_time': '2021-04-25 01:13'}, 'geometry': {'type': 'Point', 'coordinates': [-3.4171253057430655, 56.040927430018655]}}, {'type': 'Feature', 'properties': {'description': 'There is a power cut in the TD5 postcode area of Kelso, affecting properties in Broompark and surrounding streets. We had no advance warning of this and only became aware of it at 12.03AM. Our team has managed to restore power to a number of properties in the area and is still working to repair a fault on our underground cable network affecting the rest of our customers without power. We now expect all power to be back on as quickly and as safely as possible by 5PM. We will update this message if this information changes. We apologise for the inconvenience and thank you for your patience. This message was recorded at 10:26AM on 25 April 2021.', 'dno': 'sp', 'estimated_restored_time': '2021-04-25 16:00', 'incident_id': 'INCD-506835-f', 'incident_url': 'https://www.spenergynetworks.co.uk/pages/power_cuts_map.aspx?incRef=INCD-506835-f', 'postcodes_impacted': ['TD57LP', 'TD57SN'], 'received_time': '2021-04-25 00:03'}, 'geometry': {'type': 'Point', 'coordinates': [-2.4302977708232056, 55.60674466548582]}}, {'type': 'Feature', 'properties': {'description': 'We are aware of a fault in your area. If you require more information please call us on: \nCentral and Southern Scotland:  0800 092 9290 . \n Cheshire, Merseyside, North Wales and North Shropshire: 0800 001 5400.', 'dno': 'sp', 'estimated_restored_time': '2021-04-25 13:00', 'incident_id': 'INCD-567085-s', 'incident_url': 'https://www.spenergynetworks.co.uk/pages/power_cuts_map.aspx?incRef=INCD-567085-s', 'postcodes_impacted': ['KY14LP', 'KY14LS', 'KY14LT', 'KY14LW', 'KY14LY', 'KY14LZ', 'KY14NN', 'KY14NT'], 'received_time': '2021-04-24 21:24'}, 'geometry': {'type': 'Point', 'coordinates': [-3.086261476559906, 56.15152938082994]}}, {'type': 'Feature', 'properties': {'description': 'We are aware of a fault in your area. If you require more information please call us on: \nCentral and Southern Scotland:  0800 092 9290 . \n Cheshire, Merseyside, North Wales and North Shropshire: 0800 001 5400.', 'dno': 'sp', 'estimated_restored_time': '2021-04-26 07:30', 'incident_id': 'INCD-506577-f', 'incident_url': 'https://www.spenergynetworks.co.uk/pages/power_cuts_map.aspx?incRef=INCD-506577-f', 'postcodes_impacted': ['FK27AA', 'FK27NS', 'FK27NT', 'FK27NU', 'FK27NX', 'FK27NZ', 'FK27PA', 'FK27RP', 'FK27RR', 'FK27RS', 'FK27RZ'], 'received_time': '2021-04-23 14:36'}, 'geometry': {'type': 'Point', 'coordinates': [-3.7871457775190596, 56.012777524454165]}}, {'type': 'Feature', 'properties': {'description': 'The electricity supply to your premises may currently be affected by planned work.  You should have received a letter explaining this.  We hope to be able to restore your supplies by 25-APR-2021 16:00.  Please accept our sincere apologies for any inconvenience this is causing.', 'dno': 'sp', 'estimated_restored_time': '2021-04-25 15:00', 'incident_id': 'INCD-495401-k', 'incident_url': 'https://www.spenergynetworks.co.uk/pages/power_cuts_map.aspx?incRef=INCD-495401-k', 'postcodes_impacted': ['CH71BL', 'CH71BU', 'CH71BX', 'CH71BY', 'CH71DE', 'CH71NQ', 'CH71RW'], 'received_time': '2021-04-07 12:15'}, 'geometry': {'type': 'Point', 'coordinates': [-3.145019417529985, 53.17210940522381]}}, {'type': 'Feature', 'properties': {'description': 'The electricity supply to your premises may currently be affected by planned work.  You should have received a letter explaining this.  We hope to be able to restore your supplies by 25-APR-2021 14:30.  Please accept our sincere apologies for any inconvenience this is causing.', 'dno': 'sp', 'estimated_restored_time': '2021-04-25 13:30', 'incident_id': 'INCD-491261-k', 'incident_url': 'https://www.spenergynetworks.co.uk/pages/power_cuts_map.aspx?incRef=INCD-491261-k', 'postcodes_impacted': ['LL546PA', 'LL551AA', 'LL551RF', 'LL551RR', 'LL551SE', 'LL552AA', 'LL552AB', 'LL552AS', 'LL552AU', 'LL552AY', 'LL552NA', 'LL552NB', 'LL552ND', 'LL552NF', 'LL552NN', 'LL552NP', 'LL552NY', 'LL552PB', 'LL552PF', 'LL552PG', 'LL552PH', 'LL552PN', 'LL552PU', 'LL552YD'], 'received_time': '2021-03-17 14:23'}, 'geometry': {'type': 'Point', 'coordinates': [-4.274758815899328, 53.13569845822025]}}, {'type': 'Feature', 'properties': {'description': 'HV Restoration Awaiting', 'dno': 'np', 'estimated_restored_time': '', 'incident_id': 'INCD-173066-A', 'incident_url': 'https://www.northernpowergrid.com/power-cuts', 'postcodes_impacted': {'S6 6LG': {'class': 'models.MapDataLocation', 'lat': 53.4285, 'lng': -1.59736}}, 'received_time': '2021-04-20 11:41'}, 'geometry': {'type': 'Point', 'coordinates': [-1.597277, 53.427972]}}, {'type': 'Feature', 'properties': {'description': 'Safety Interruption Awaiting', 'dno': 'np', 'estimated_restored_time': '', 'incident_id': 'INCD-173599-A', 'incident_url': 'https://www.northernpowergrid.com/power-cuts', 'postcodes_impacted': {'DN8 5RY': {'class': 'models.MapDataLocation', 'lat': 53.6089, 'lng': -0.938874}}, 'received_time': '2021-04-22 07:43'}, 'geometry': {'type': 'Point', 'coordinates': [-0.938859, 53.608929]}}, {'type': 'Feature', 'properties': {'description': 'U/G Service repair In Progress', 'dno': 'np', 'estimated_restored_time': '2021-04-26 11:00', 'incident_id': 'INCD-173787-A', 'incident_url': 'https://www.northernpowergrid.com/power-cuts', 'postcodes_impacted': {'TS1 1LP': {'class': 'models.MapDataLocation', 'lat': 54.5764, 'lng': -1.23497}}, 'received_time': '2021-04-22 17:17'}, 'geometry': {'type': 'Point', 'coordinates': [-1.235012, 54.57654]}}, {'type': 'Feature', 'properties': {'description': 'Smart Meter Cutout Change In Progress', 'dno': 'np', 'estimated_restored_time': '', 'incident_id': 'INCD-174029-A', 'incident_url': 'https://www.northernpowergrid.com/power-cuts', 'postcodes_impacted': {'BD8 7DT': {'class': 'models.MapDataLocation', 'lat': 53.8043, 'lng': -1.76226}}, 'received_time': '2021-04-23 13:53'}, 'geometry': {'type': 'Point', 'coordinates': [-1.762256, 53.804294]}}, {'type': 'Feature', 'properties': {'description': 'U/G Service repair In Progress', 'dno': 'np', 'estimated_restored_time': '', 'incident_id': 'INCD-174183-A', 'incident_url': 'https://www.northernpowergrid.com/power-cuts', 'postcodes_impacted': {'DL3 0NN': {'class': 'models.MapDataLocation', 'lat': 54.5407, 'lng': -1.5522}}, 'received_time': '2021-04-24 11:36'}, 'geometry': {'type': 'Point', 'coordinates': [-1.552201, 54.540685]}}, {'type': 'Feature', 'properties': {'description': 'O/H Service Repair In Progress', 'dno': 'np', 'estimated_restored_time': '2021-04-25 11:00', 'incident_id': 'INCD-174247-A', 'incident_url': 'https://www.northernpowergrid.com/power-cuts', 'postcodes_impacted': {'DL12 9AP': {'class': 'models.MapDataLocation', 'lat': 54.5402, 'lng': -1.9332}}, 'received_time': '2021-04-24 19:23'}, 'geometry': {'type': 'Point', 'coordinates': [-1.933182, 54.540173]}}, {'type': 'Feature', 'properties': {'description': 'O/H Service Repair In Progress', 'dno': 'np', 'estimated_restored_time': '2021-04-25 11:00', 'incident_id': 'INCD-174273-A', 'incident_url': 'https://www.northernpowergrid.com/power-cuts', 'postcodes_impacted': {'TS27 3HF': {'class': 'models.MapDataLocation', 'lat': 54.6777, 'lng': -1.30344}}, 'received_time': '2021-04-25 02:43'}, 'geometry': {'type': 'Point', 'coordinates': [-1.303458, 54.677739]}}, {'type': 'Feature', 'properties': {'description': 'U/G LV Mains Repair (Other) In Progress', 'dno': 'np', 'estimated_restored_time': '2021-04-25 12:30', 'incident_id': 'INCD-174276-A', 'incident_url': 'https://www.northernpowergrid.com/power-cuts', 'postcodes_impacted': {'NE61 5SZ': {'class': 'models.MapDataLocation', 'lat': 55.2136, 'lng': -1.54044}, 'NE61 5TE': {'class': 'models.MapDataLocation', 'lat': 55.2139, 'lng': -1.54086}, 'NE61 5TA': {'class': 'models.MapDataLocation', 'lat': 55.2142, 'lng': -1.54326}, 'NE61 5TD': {'class': 'models.MapDataLocation', 'lat': 55.2143, 'lng': -1.5428}}, 'received_time': '2021-04-25 04:12'}, 'geometry': {'type': 'Point', 'coordinates': [-1.54189875, 55.214017]}}, {'type': 'Feature', 'properties': {'description': 'LV Restoration In Progress', 'dno': 'np', 'estimated_restored_time': '2021-04-25 11:45', 'incident_id': 'INCD-174279-A', 'incident_url': 'https://www.northernpowergrid.com/power-cuts', 'postcodes_impacted': {'S13 9ZE': {'class': 'models.MapDataLocation', 'lat': 53.3683, 'lng': -1.3428}, 'S13 9ZD': {'class': 'models.MapDataLocation', 'lat': 53.3661, 'lng': -1.33797}, 'S13 9ZH': {'class': 'models.MapDataLocation', 'lat': 53.371, 'lng': -1.33784}, 'S13 9ZL': {'class': 'models.MapDataLocation', 'lat': 53.3692, 'lng': -1.34312}}, 'received_time': '2021-04-25 04:14'}, 'geometry': {'type': 'Point', 'coordinates': [-1.34030425, 53.368722749999996]}}, {'type': 'Feature', 'properties': {'description': 'LV Intermittent Awaiting', 'dno': 'np', 'estimated_restored_time': '2021-04-25 11:15', 'incident_id': 'INCD-174281-A', 'incident_url': 'https://www.northernpowergrid.com/power-cuts', 'postcodes_impacted': {'SR7 7QE': {'class': 'models.MapDataLocation', 'lat': 54.8301, 'lng': -1.34611}, 'SR7 7QD': {'class': 'models.MapDataLocation', 'lat': 54.827, 'lng': -1.34395}, 'SR7 7RS': {'class': 'models.MapDataLocation', 'lat': 54.8301, 'lng': -1.34552}, 'SR7 7QF': {'class': 'models.MapDataLocation', 'lat': 54.8309, 'lng': -1.34592}, 'SR7 7RN': {'class': 'models.MapDataLocation', 'lat': 54.8309, 'lng': -1.34452}}, 'received_time': '2021-04-25 05:45'}, 'geometry': {'type': 'Point', 'coordinates': [-1.3452532, 54.829807800000005]}}, {'type': 'Feature', 'properties': {'description': 'LV Restoration In Progress', 'dno': 'np', 'estimated_restored_time': '2021-04-25 10:00', 'incident_id': 'INCD-174292-A', 'incident_url': 'https://www.northernpowergrid.com/power-cuts', 'postcodes_impacted': {'TS1 2NU': {'class': 'models.MapDataLocation', 'lat': 54.5751, 'lng': -1.2354}, 'TS1 1RA': {'class': 'models.MapDataLocation', 'lat': 54.5769, 'lng': -1.23629}, 'TS1 1RJ': {'class': 'models.MapDataLocation', 'lat': 54.5769, 'lng': -1.23699}, 'TS1 1RL': {'class': 'models.MapDataLocation', 'lat': 54.5771, 'lng': -1.23695}}, 'received_time': '2021-04-25 06:56'}, 'geometry': {'type': 'Point', 'coordinates': [-1.2364365, 54.5765205]}}, {'type': 'Feature', 'properties': {'description': 'U/G Service repair In Progress', 'dno': 'np', 'estimated_restored_time': '2021-04-25 13:00', 'incident_id': 'INCD-174294-A', 'incident_url': 'https://www.northernpowergrid.com/power-cuts', 'postcodes_impacted': {'BD13 1AQ': {'class': 'models.MapDataLocation', 'lat': 53.7697, 'lng': -1.84177}}, 'received_time': '2021-04-25 07:13'}, 'geometry': {'type': 'Point', 'coordinates': [-1.841769, 53.769668]}}, {'type': 'Feature', 'properties': {'description': 'Unknown P2 Awaiting', 'dno': 'np', 'estimated_restored_time': '2021-04-25 10:45', 'incident_id': 'INCD-174295-A', 'incident_url': 'https://www.northernpowergrid.com/power-cuts', 'postcodes_impacted': {'TS11 7DB': {'class': 'models.MapDataLocation', 'lat': 54.5885, 'lng': -1.01752}}, 'received_time': '2021-04-25 07:36'}, 'geometry': {'type': 'Point', 'coordinates': [-1.017103, 54.58856]}}, {'type': 'Feature', 'properties': {'description': 'Unknown P2 In Progress', 'dno': 'np', 'estimated_restored_time': '2021-04-25 11:00', 'incident_id': 'INCD-174296-A', 'incident_url': 'https://www.northernpowergrid.com/power-cuts', 'postcodes_impacted': {'YO16 7LD': {'class': 'models.MapDataLocation', 'lat': 54.0929, 'lng': -0.201673}}, 'received_time': '2021-04-25 07:59'}, 'geometry': {'type': 'Point', 'coordinates': [-0.201671, 54.092965]}}, {'type': 'Feature', 'properties': {'description': 'Unknown P1 In Progress', 'dno': 'np', 'estimated_restored_time': '', 'incident_id': 'INCD-174298-A', 'incident_url': 'https://www.northernpowergrid.com/power-cuts', 'postcodes_impacted': {'HD4 6UW': {'class': 'models.MapDataLocation', 'lat': 53.6055, 'lng': -1.75551}}, 'received_time': '2021-04-25 08:17'}, 'geometry': {'type': 'Point', 'coordinates': [-1.756014, 53.605401]}}, {'type': 'Feature', 'properties': {'description': 'Unknown P2 Awaiting', 'dno': 'np', 'estimated_restored_time': '2021-04-25 12:00', 'incident_id': 'INCD-174302-A', 'incident_url': 'https://www.northernpowergrid.com/power-cuts', 'postcodes_impacted': {'YO25 5BA': {'class': 'models.MapDataLocation', 'lat': 54.0071, 'lng': -0.450555}}, 'received_time': '2021-04-25 09:00'}, 'geometry': {'type': 'Point', 'coordinates': [-0.45054, 54.007089]}}, {'type': 'Feature', 'properties': {'description': 'Unknown P2 Awaiting', 'dno': 'np', 'estimated_restored_time': '2021-04-25 12:15', 'incident_id': 'INCD-174303-A', 'incident_url': 'https://www.northernpowergrid.com/power-cuts', 'postcodes_impacted': {'HU7 4NS': {'class': 'models.MapDataLocation', 'lat': 53.7899, 'lng': -0.311395}}, 'received_time': '2021-04-25 09:13'}, 'geometry': {'type': 'Point', 'coordinates': [-0.31166, 53.790076]}}, {'type': 'Feature', 'properties': {'description': 'Unknown P2 In Progress', 'dno': 'np', 'estimated_restored_time': '2021-04-25 12:30', 'incident_id': 'INCD-174305-A', 'incident_url': 'https://www.northernpowergrid.com/power-cuts', 'postcodes_impacted': {'YO42 4TJ': {'class': 'models.MapDataLocation', 'lat': 53.8748, 'lng': -0.929845}}, 'received_time': '2021-04-25 09:29'}, 'geometry': {'type': 'Point', 'coordinates': [-0.92983, 53.874756]}}, {'type': 'Feature', 'properties': {'description': 'Unknown P2 Awaiting', 'dno': 'np', 'estimated_restored_time': '2021-04-25 12:45', 'incident_id': 'INCD-174307-A', 'incident_url': 'https://www.northernpowergrid.com/power-cuts', 'postcodes_impacted': {'YO10 4XB': {'class': 'models.MapDataLocation', 'lat': 53.9559, 'lng': -1.0732}, 'YO1 9UB': {'class': 'models.MapDataLocation', 'lat': 53.9555, 'lng': -1.07204}, 'YO1 9XQ': {'class': 'models.MapDataLocation', 'lat': 53.956, 'lng': -1.07259}, 'YO1 9UA': {'class': 'models.MapDataLocation', 'lat': 53.9559, 'lng': -1.0732}, 'YO1 9UD': {'class': 'models.MapDataLocation', 'lat': 53.9557, 'lng': -1.07149}, 'YO1 9TJ': {'class': 'models.MapDataLocation', 'lat': 53.9573, 'lng': -1.0766}, 'YO1 9XG': {'class': 'models.MapDataLocation', 'lat': 53.9561, 'lng': -1.07214}, 'YO1 9TL': {'class': 'models.MapDataLocation', 'lat': 53.9565, 'lng': -1.07366}, 'YO1 9PA': {'class': 'models.MapDataLocation', 'lat': 53.9573, 'lng': -1.07294}}, 'received_time': '2021-04-25 09:39'}, 'geometry': {'type': 'Point', 'coordinates': [-1.0730666666666666, 53.95620788888889]}}, {'type': 'Feature', 'properties': {'description': 'Unknown P2 Awaiting', 'dno': 'np', 'estimated_restored_time': '2021-04-25 12:45', 'incident_id': 'INCD-174309-A', 'incident_url': 'https://www.northernpowergrid.com/power-cuts', 'postcodes_impacted': {'HD1 4EA': {'class': 'models.MapDataLocation', 'lat': 53.6515, 'lng': -1.80005}}, 'received_time': '2021-04-25 09:45'}, 'geometry': {'type': 'Point', 'coordinates': [-1.800046, 53.651466]}}, {'type': 'Feature', 'properties': {'description': 'Unknown P2 Awaiting', 'dno': 'np', 'estimated_restored_time': '2021-04-25 12:45', 'incident_id': 'INCD-174310-A', 'incident_url': 'https://www.northernpowergrid.com/power-cuts', 'postcodes_impacted': {'BD10 9AZ': {'class': 'models.MapDataLocation', 'lat': 53.8311, 'lng': -1.71525}, 'BD10 9BQ': {'class': 'models.MapDataLocation', 'lat': 53.832, 'lng': -1.71591}, 'BD10 9BA': {'class': 'models.MapDataLocation', 'lat': 53.8315, 'lng': -1.71509}, 'BD10 9BB': {'class': 'models.MapDataLocation', 'lat': 53.8313, 'lng': -1.7147}, 'BD10 9BD': {'class': 'models.MapDataLocation', 'lat': 53.8306, 'lng': -1.71803}, 'BD10 9BG': {'class': 'models.MapDataLocation', 'lat': 53.8312, 'lng': -1.71781}, 'BD10 9AD': {'class': 'models.MapDataLocation', 'lat': 53.8413, 'lng': -1.72837}}, 'received_time': '2021-04-25 09:24'}, 'geometry': {'type': 'Point', 'coordinates': [-1.7178657142857146, 53.832653428571426]}}, {'type': 'Feature', 'properties': {'description': 'Unknown P1 Awaiting', 'dno': 'np', 'estimated_restored_time': '2021-04-25 13:00', 'incident_id': 'INCD-174311-A', 'incident_url': 'https://www.northernpowergrid.com/power-cuts', 'postcodes_impacted': {'S5 6PB': {'class': 'models.MapDataLocation', 'lat': 53.4229, 'lng': -1.4474}}, 'received_time': '2021-04-25 09:47'}, 'geometry': {'type': 'Point', 'coordinates': [-1.447402, 53.422915]}}, {'type': 'Feature', 'properties': {'description': 'We need to temporarily turn the power off to carry out maintenance on our network in the area. In Progress', 'dno': 'np', 'estimated_restored_time': '2021-04-25 12:00', 'incident_id': 'PPC039332', 'incident_url': 'https://www.northernpowergrid.com/power-cuts', 'postcodes_impacted': {'HX1 1TJ': {'class': 'models.MapDataLocation', 'lat': 53.7232, 'lng': -1.85964}, 'HX1 1RL': {'class': 'models.MapDataLocation', 'lat': 53.723, 'lng': -1.85978}, 'HX1 1RN': {'class': 'models.MapDataLocation', 'lat': 53.7233, 'lng': -1.85952}, 'HX1 1TN': {'class': 'models.MapDataLocation', 'lat': 53.7235, 'lng': -1.8599}, 'HX1 1UU': {'class': 'models.MapDataLocation', 'lat': 53.7246, 'lng': -1.8599}, 'HX1 1RW': {'class': 'models.MapDataLocation', 'lat': 53.7233, 'lng': -1.85952}, 'HX1 1TH': {'class': 'models.MapDataLocation', 'lat': 53.7231, 'lng': -1.86042}}, 'received_time': '2021-04-25 08:00'}, 'geometry': {'type': 'Point', 'coordinates': [-1.8597867142857143, 53.723433428571425]}}, {'type': 'Feature', 'properties': {'description': 'The power cut in your area has been caused by an unexpected incident with the underground cable that provides electricity to your property.', 'dno': 'enw', 'estimated_restored_time': '2021-04-25 15:25', 'incident_id': '40811443', 'incident_url': 'https://www.enwl.co.uk/power-cuts/power-cuts-power-cuts-live-power-cut-information-fault-list/fault-list', 'postcodes_impacted': ['BL0 0GF', 'BL0 0GY', 'BL0 0HN', 'BL0 0HR', 'BL0 0HS', 'BL0 0HU', 'BL0 0HW', 'BL0 0HX', 'BL0 0HY', 'BL0 0HZ', 'BL0 0QT'], 'received_time': '2021-04-25 09:23'}, 'geometry': {'type': 'Point', 'coordinates': [-2.304909363636364, 53.67730290909091]}}, {'type': 'Feature', 'properties': {'description': 'The power cut in your area has been caused by an unexpected incident with the overhead cable that provides electricity to your property.', 'dno': 'enw', 'estimated_restored_time': '2021-04-25 16:30', 'incident_id': '60509212', 'incident_url': 'https://www.enwl.co.uk/power-cuts/power-cuts-power-cuts-live-power-cut-information-fault-list/fault-list', 'postcodes_impacted': ['CA23 3AB', 'CA23 3DJ', 'CA23 3DL', 'CA23 3DS', 'CA23 3DT', 'CA23 3DU', 'CA23 3EP'], 'received_time': '2021-04-25 05:44'}, 'geometry': {'type': 'Point', 'coordinates': [-3.515979714285714, 54.511347857142866]}}]}

var geoJson = new L.geoJSON(geojsonFeature, {
  onEachFeature: function (feature, layer) {
    layer.bindPopup('<p>'+feature.properties.description+'</p><p>Received time: '+feature.properties.received_time+'</p><p>Estimated restored time: '+feature.properties.estimated_restored_time+'</p><p><a href="'+feature.properties.incident_url+'" target="_blank">Further details</p>');
    layer.setIcon(boltIcon);
  }
}).addTo(mymap);
});
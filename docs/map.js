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

var geojsonFeature = {'type': 'FeatureCollection', 'features': [{'type': 'Feature', 'properties': {'description': 'A fault occurred on an underground electricity cable affecting the local area.', 'dno': 'ukpn', 'estimated_restored_time': '2021-04-17T22:30:00', 'incident_id': 'INCD-59923-N', 'incident_url': 'https://www.ukpowernetworks.co.uk/power-cut/map?incidentid=INCD-59923-N', 'postcodes_impacted': ['SW1W8AU', 'SW1W8PB', 'SW1W8PQ', 'SW1W8PZ', 'SW1W8QA', 'SW1W8QB', 'SW1W8QE', 'SW1W8QF', 'SW1W8RB'], 'received_time': '2021-04-17T18:23:00'}, 'geometry': {'type': 'Point', 'coordinates': [-0.15125819261512127, 51.48958640194288]}}, {'type': 'Feature', 'properties': {'description': 'We had to turn off power in your area so our engineers could safely carry out emergency repairs to the network.', 'dno': 'ukpn', 'estimated_restored_time': '2021-04-17T23:30:00', 'incident_id': 'INCD-260219-J', 'incident_url': 'https://www.ukpowernetworks.co.uk/power-cut/map?incidentid=INCD-260219-J', 'postcodes_impacted': ['KT33PB', 'KT33QW', 'KT33BF', 'KT33QP'], 'received_time': '2021-04-17T12:57:00'}, 'geometry': {'type': 'Point', 'coordinates': [-0.26143738458824944, 51.40041820694421]}}, {'type': 'Feature', 'properties': {'description': 'A fault occurred on an underground electricity cable affecting the local area.', 'dno': 'ukpn', 'estimated_restored_time': '2021-04-18T01:00:00', 'incident_id': 'INCD-231583-Z', 'incident_url': 'https://www.ukpowernetworks.co.uk/power-cut/map?incidentid=INCD-231583-Z', 'postcodes_impacted': ['SG54PG'], 'received_time': '2021-04-17T16:03:00'}, 'geometry': {'type': 'Point', 'coordinates': [-0.220409340521745, 52.00791906031363]}}, {'type': 'Feature', 'properties': {'description': 'We were investigating a high voltage overhead electricity line fault which caused a power cut in the local area.', 'dno': 'ukpn', 'estimated_restored_time': '2021-04-18T01:00:00', 'incident_id': 'INCD-231546-Z', 'incident_url': 'https://www.ukpowernetworks.co.uk/power-cut/map?incidentid=INCD-231546-Z', 'postcodes_impacted': ['CM150LD', 'CM150LE', 'CM150EH', 'CM150EJ', 'CM150EL', 'CM150EN', 'CM150EP', 'CM150EQ', 'CM150ER', 'CM150ES', 'CM150ET', 'CM150EW', 'CM150JX', 'CM150LG', 'CM150NA', 'CM150PU', 'CM150QE', 'CM150QZ', 'CM150RE', 'CM150RU', 'CM150SB', 'CM150SE', 'CM150SF', 'CM150SG', 'CM150SH', 'CM150SJ', 'CM150SL', 'CM150SN', 'CM150SP', 'CM150SR', 'CM150SS', 'CM150ST', 'CM150SU', 'CM150TS', 'CM150TT', 'CM150TU', 'CM35QH', 'CM40JR', 'CM40JS', 'CM40JU', 'CM40JX', 'CM40JY', 'CM40JZ', 'CM40NW', 'CM40NX', 'CM40NZ', 'CM40PA', 'CM40QE', 'CM40QH', 'CM40QJ', 'CM40QL', 'CM40QN', 'CM40QP', 'CM40QR', 'CM40QU', 'CM40QW', 'CM40QX', 'CM40QY', 'CM40QZ', 'CM40RA', 'CM40RB', 'CM40RD', 'CM40RJ', 'CM40RL', 'CM40RN', 'CM40RR', 'CM40RS', 'CM40RT', 'CM40RU', 'CM40RX', 'CM40RY', 'CM40RZ', 'CM40SA', 'CM40SB', 'CM40SD', 'CM40SF', 'CM40SG', 'CM40SP', 'CM59RG'], 'received_time': '2021-04-17T09:30:03'}, 'geometry': {'type': 'Point', 'coordinates': [0.3140477013504482, 51.67978289628871]}}, {'type': 'Feature', 'properties': {'description': "We're carrying out planned work in your area. For our engineers to carry it out safely they need to turn the power off. We're doing this work as it's essential to provide reliable electricity supplies to your area. We're sorry for any inconvenience caused and thank you for your patience.", 'dno': 'ukpn', 'estimated_restored_time': '2021-04-17T15:00:00', 'incident_id': 'INCD-229277-Z', 'incident_url': 'https://www.ukpowernetworks.co.uk/power-cut/map?incidentid=INCD-229277-Z', 'postcodes_impacted': ['IP123RE'], 'received_time': '2021-04-17T09:05:00'}, 'geometry': {'type': 'Point', 'coordinates': [1.4321802590784931, 52.0473383091724]}}, {'type': 'Feature', 'properties': {'description': "We're carrying out planned work in your area. For our engineers to carry it out safely they need to turn the power off. We're doing this work as it's essential to provide reliable electricity supplies to your area. We're sorry for any inconvenience caused and thank you for your patience.", 'dno': 'ukpn', 'estimated_restored_time': '2021-04-17T16:30:00', 'incident_id': 'INCD-227941-Z', 'incident_url': 'https://www.ukpowernetworks.co.uk/power-cut/map?incidentid=INCD-227941-Z', 'postcodes_impacted': ['AL71JD'], 'received_time': '2021-04-17T08:00:00'}, 'geometry': {'type': 'Point', 'coordinates': [-0.1891168918543099, 51.80033146503926]}}, {'type': 'Feature', 'properties': {'description': 'We’re sorry for the loss of supply. We currently have a fault affecting the areas listed. Our engineers are on site working hard to get the power back on as quickly as they can. If you need more information, please call us on 105 or send us a message on <a href="http://m.me/ssencommunity/">Facebook</a> or Twitter (<a href="https://twitter.com/ssencommunity">@ssencommunity</a>) and quote reference \'HB8224\'', 'dno': 'ssen', 'estimated_restored_time': '2021-04-18 02:30:00', 'incident_id': 'HB8224', 'incident_url': 'https://www.ssen.co.uk/Powertrack/', 'postcodes_impacted': ['SO45 5BA', 'SO45 5BB', 'SO45 5BE', 'SO45 5BG', 'SO45 5ET'], 'received_time': '2021-04-17 15:12:00'}, 'geometry': {'type': 'Point', 'coordinates': [-1.4088596, 50.861829]}}, {'type': 'Feature', 'properties': {'description': 'We’re sorry for the loss of supply. We currently have a fault affecting the areas listed. Our engineers are on site working hard to get the power back on as quickly as they can. If you need more information, please call us on 105 or send us a message on <a href="http://m.me/ssencommunity/">Facebook</a> or Twitter (<a href="https://twitter.com/ssencommunity">@ssencommunity</a>) and quote reference \'HB8195\'', 'dno': 'ssen', 'estimated_restored_time': '2021-04-18 00:00:00', 'incident_id': 'HB8195', 'incident_url': 'https://www.ssen.co.uk/Powertrack/', 'postcodes_impacted': ['TW7 5JG', 'TW7 5NT', 'TW7 5QE'], 'received_time': '2021-04-17 13:49:00'}, 'geometry': {'type': 'Point', 'coordinates': [-0.325783, 51.482303333333334]}}, {'type': 'Feature', 'properties': {'description': 'In Progress', 'dno': 'wpd', 'estimated_restored_time': '2021-04-18 02:00:00', 'incident_id': 'INCD-67-q', 'incident_url': 'https://powercuts.westernpower.co.uk/incident/INCD-67-q', 'postcodes_impacted': ['EX10 9NQ', 'EX10 9AP', 'EX10 9AS', 'EX10 9AR', 'EX10 9AG', 'EX10 9NS', 'EX10 9AA'], 'received_time': '2021-04-17 19:02:00'}, 'geometry': {'type': 'Point', 'coordinates': [-3.2304158571428565, 50.686792714285716]}}, {'type': 'Feature', 'properties': {'description': 'In Progress', 'dno': 'wpd', 'estimated_restored_time': '2021-04-18 01:00:00', 'incident_id': 'INCD-2117-g', 'incident_url': 'https://powercuts.westernpower.co.uk/incident/INCD-2117-g', 'postcodes_impacted': ['CF3 1RS', 'CF3 1YL', 'CF3 1RT', 'CF3 1QW'], 'received_time': '2021-04-17 21:50:00'}, 'geometry': {'type': 'Point', 'coordinates': [-3.1089085, 51.51847825]}}, {'type': 'Feature', 'properties': {'description': 'In Progress', 'dno': 'wpd', 'estimated_restored_time': null, 'incident_id': 'INCD-358018-G', 'incident_url': 'https://powercuts.westernpower.co.uk/incident/INCD-358018-G', 'postcodes_impacted': ['B9 5NX'], 'received_time': '2021-04-17 19:09:00'}, 'geometry': {'type': 'Point', 'coordinates': [-1.843799, 52.482179]}}, {'type': 'Feature', 'properties': {'description': 'In Progress', 'dno': 'wpd', 'estimated_restored_time': '2021-04-18 01:00:00', 'incident_id': 'INCD-358023-G', 'incident_url': 'https://powercuts.westernpower.co.uk/incident/INCD-358023-G', 'postcodes_impacted': ['GL20 5SS', 'GL20 5SY'], 'received_time': '2021-04-17 20:45:00'}, 'geometry': {'type': 'Point', 'coordinates': [-2.1607570000000003, 51.9849205]}}, {'type': 'Feature', 'properties': {'description': 'In Progress', 'dno': 'wpd', 'estimated_restored_time': '2021-04-18 00:30:00', 'incident_id': 'INCD-44297-D', 'incident_url': 'https://powercuts.westernpower.co.uk/incident/INCD-44297-D', 'postcodes_impacted': ['DN10 4HA', 'DN10 4HB'], 'received_time': '2021-04-17 09:54:00'}, 'geometry': {'type': 'Point', 'coordinates': [-0.808916, 53.445492]}}, {'type': 'Feature', 'properties': {'description': 'In Progress', 'dno': 'wpd', 'estimated_restored_time': '2021-04-18 01:30:00', 'incident_id': 'INCD-152734-H', 'incident_url': 'https://powercuts.westernpower.co.uk/incident/INCD-152734-H', 'postcodes_impacted': ['DE13 8JW'], 'received_time': '2021-04-17 05:02:00'}, 'geometry': {'type': 'Point', 'coordinates': [-1.728004, 52.763511]}}, {'type': 'Feature', 'properties': {'description': 'There is a power cut in the LL63 postcode area of Ty Croes, affecting properties in Llanfelog and surrounding areas. Our emergency response team has managed to restore power to a number of properties, and we are working to restore power for those customers still off supply. Repairs are taking longer than expected because of a grounded overhead line and our team are now working to get the power back on as quickly and as safely as possible by 3:00AM. We will update this message if this information changes. We apologise for the inconvenience and thank you for your patience. This message was updated at 10:53PM on 17th April 2021.', 'dno': 'sp', 'estimated_restored_time': '2021-04-18 02:00', 'incident_id': 'INCD-564721-s', 'incident_url': 'https://www.spenergynetworks.co.uk/pages/power_cuts_map.aspx?incRef=INCD-564721-s', 'postcodes_impacted': ['LL535AZ', 'LL635AD', 'LL635AJ', 'LL635AQ', 'LL635AZ', 'LL635BJ', 'LL635BQ', 'LL635BX', 'LL635BZ', 'LL635DJ', 'LL635DQ', 'LL635DX', 'LL635DZ', 'LL635EJ', 'LL635EQ', 'LL635EX', 'LL635EZ', 'LL635HX', 'LL635HY', 'LL635HZ', 'LL635LJ', 'LL635LQ', 'LL635LX', 'LL635LZ', 'LL635PJ', 'LL635PQ', 'LL635RJ', 'LL635RN', 'LL635RP', 'LL635RQ', 'LL635RR', 'LL635RW', 'LL635RX', 'LL635RY', 'LL635SH', 'LL635SL', 'LL635SN', 'LL635SR', 'LL635SS', 'LL635SW', 'LL635SY', 'LL635TA', 'LL635TB', 'LL635TD', 'LL635TE', 'LL635TF', 'LL635TG', 'LL635TN', 'LL635TU', 'LL635XX', 'LL635YH', 'LL635YL', 'LL635YN', 'LL635YP', 'LL635YR', 'LL635YS', 'LL635YU', 'LL635YY', 'LL645JP', 'LL645JR'], 'received_time': '2021-04-17 21:07'}, 'geometry': {'type': 'Point', 'coordinates': [-4.478147079412324, 53.20697028640983]}}, {'type': 'Feature', 'properties': {'description': 'There is a power cut in the G72 postcode area of Blantyre. We had no advance warning of this and only became aware of it at 9:02pm. Our engineers have established that there is an underground cable fault outside 17 Church Street and that repairs will be complex so we are awaiting delivery of generators to restore power, and this should happen by 1:30am. We will update this message if this information changes. We apologise for the inconvenience and thank you for your patience. This message was updated at 11:05pm on Saturday, 17th April 2021', 'dno': 'sp', 'estimated_restored_time': '2021-04-18 00:30', 'incident_id': 'INCD-564709-s', 'incident_url': 'https://www.spenergynetworks.co.uk/pages/power_cuts_map.aspx?incRef=INCD-564709-s', 'postcodes_impacted': ['G720NH', 'G720NJ', 'G720NS', 'G720NT', 'G720NY', 'G720PR', 'G720QD', 'G729DB'], 'received_time': '2021-04-17 21:02'}, 'geometry': {'type': 'Point', 'coordinates': [-4.0878920837826405, 55.79140048397763]}}, {'type': 'Feature', 'properties': {'description': 'There is a power cut in the EH12 postcode area of Edinburgh. We did not know in advance there would be a power cut, and are working to get supplies restored. So far we have managed to restore power to some customers and identified an underground cable fault affecting the rest of our customers. We have arranged additional resources to attend to assist in carrying out the repair and now expect your supply to be restored by 2:00am. We understand that being without power is frustrating and please be assured we will restore your supply as soon as we possibly can. If for any reason this information changes then we will update this message. We apologise for the inconvenience and thank you for your patience. This message was updated at 10:15pm on Saturday 17th April 2021', 'dno': 'sp', 'estimated_restored_time': '2021-04-18 01:00', 'incident_id': 'INCD-564631-s', 'incident_url': 'https://www.spenergynetworks.co.uk/pages/power_cuts_map.aspx?incRef=INCD-564631-s', 'postcodes_impacted': ['EH127NW', 'EH127NY'], 'received_time': '2021-04-17 16:34'}, 'geometry': {'type': 'Point', 'coordinates': [-3.2830958074643606, 55.93382808748372]}}, {'type': 'Feature', 'properties': {'description': 'There is a power cut in the KA7 postcode area of Ayr. Our team are working to repair an underground cable fault outside 7 Newmarket Street however due to difficult digging conditions, we now expect supplies to be restored by 1:30am. We will update this message if this information changes. We apologise for the inconvenience and thank you for your patience. This message was updated at 11:29pm on Saturday 17th April 2021', 'dno': 'sp', 'estimated_restored_time': '2021-04-18 00:30', 'incident_id': 'INCD-497753-k', 'incident_url': 'https://www.spenergynetworks.co.uk/pages/power_cuts_map.aspx?incRef=INCD-497753-k', 'postcodes_impacted': ['KA71LL'], 'received_time': '2021-04-17 13:51'}, 'geometry': {'type': 'Point', 'coordinates': [-4.631596931209811, 55.46305130924389]}}, {'type': 'Feature', 'properties': {'description': 'The electricity supply to your premises may currently be affected by planned work.  You should have received a letter explaining this.  We hope to be able to restore your supplies by 18-APR-2021 08:00.  Please accept our sincere apologies for any inconvenience this is causing.', 'dno': 'sp', 'estimated_restored_time': '2021-04-18 07:00', 'incident_id': 'INCD-494579-k', 'incident_url': 'https://www.spenergynetworks.co.uk/pages/power_cuts_map.aspx?incRef=INCD-494579-k', 'postcodes_impacted': ['FK28QX', 'FK28XX'], 'received_time': '2021-04-02 10:05'}, 'geometry': {'type': 'Point', 'coordinates': [-3.79198947265032, 56.04415359395529]}}, {'type': 'Feature', 'properties': {'description': 'Smart Meter Cutout Change In Progress', 'dno': 'np', 'estimated_restored_time': '', 'incident_id': 'INCD-17176-D', 'incident_url': 'https://www.northernpowergrid.com/power-cuts', 'postcodes_impacted': {'LS9 9JZ': {'class': 'models.MapDataLocation', 'lat': 53.7936, 'lng': -1.514}}, 'received_time': '2021-04-17 11:12'}, 'geometry': {'type': 'Point', 'coordinates': [-1.513938, 53.79355]}}, {'type': 'Feature', 'properties': {'description': 'U/G LV CONSAC Repair In Progress', 'dno': 'np', 'estimated_restored_time': '2021-04-17 23:30', 'incident_id': 'INCD-172314-A', 'incident_url': 'https://www.northernpowergrid.com/power-cuts', 'postcodes_impacted': {'DH7 9TB': {'class': 'models.MapDataLocation', 'lat': 54.7981, 'lng': -1.6682}, 'DH7 9SR': {'class': 'models.MapDataLocation', 'lat': 54.7999, 'lng': -1.66656}, 'DH7 9DZ': {'class': 'models.MapDataLocation', 'lat': 54.798, 'lng': -1.66911}, 'DH7 9TG': {'class': 'models.MapDataLocation', 'lat': 54.7976, 'lng': -1.6666}, 'DH7 9SF': {'class': 'models.MapDataLocation', 'lat': 54.8, 'lng': -1.66619}, 'DH7 9TD': {'class': 'models.MapDataLocation', 'lat': 54.7988, 'lng': -1.66704}, 'DH7 9XR': {'class': 'models.MapDataLocation', 'lat': 54.7967, 'lng': -1.66759}, 'DH7 9XS': {'class': 'models.MapDataLocation', 'lat': 54.797, 'lng': -1.66733}, 'DH7 9SW': {'class': 'models.MapDataLocation', 'lat': 54.7992, 'lng': -1.66643}, 'DH7 9TQ': {'class': 'models.MapDataLocation', 'lat': 54.7994, 'lng': -1.66542}}, 'received_time': '2021-04-17 11:35'}, 'geometry': {'type': 'Point', 'coordinates': [-1.6670348000000001, 54.7984506]}}, {'type': 'Feature', 'properties': {'description': 'U/G Service repair In Progress', 'dno': 'np', 'estimated_restored_time': '', 'incident_id': 'INCD-172367-A', 'incident_url': 'https://www.northernpowergrid.com/power-cuts', 'postcodes_impacted': {'S36 6HT': {'class': 'models.MapDataLocation', 'lat': 53.5194, 'lng': -1.6313}}, 'received_time': '2021-04-17 18:24'}, 'geometry': {'type': 'Point', 'coordinates': [-1.631296, 53.519405]}}, {'type': 'Feature', 'properties': {'description': 'U/G Service repair In Progress', 'dno': 'np', 'estimated_restored_time': '', 'incident_id': 'INCD-172368-A', 'incident_url': 'https://www.northernpowergrid.com/power-cuts', 'postcodes_impacted': {'WF14 0DQ': {'class': 'models.MapDataLocation', 'lat': 53.6933, 'lng': -1.70995}}, 'received_time': '2021-04-17 18:30'}, 'geometry': {'type': 'Point', 'coordinates': [-1.709939, 53.693407]}}, {'type': 'Feature', 'properties': {'description': 'U/G Service repair In Progress', 'dno': 'np', 'estimated_restored_time': '', 'incident_id': 'INCD-172369-A', 'incident_url': 'https://www.northernpowergrid.com/power-cuts', 'postcodes_impacted': {'HX3 0AS': {'class': 'models.MapDataLocation', 'lat': 53.7085, 'lng': -1.85801}}, 'received_time': '2021-04-17 18:02'}, 'geometry': {'type': 'Point', 'coordinates': [-1.858011, 53.708507]}}, {'type': 'Feature', 'properties': {'description': 'LV Restoration In Progress', 'dno': 'np', 'estimated_restored_time': '2021-04-18 00:15', 'incident_id': 'INCD-172376-A', 'incident_url': 'https://www.northernpowergrid.com/power-cuts', 'postcodes_impacted': {'HU6 0AJ': {'class': 'models.MapDataLocation', 'lat': 53.8026, 'lng': -0.372003}, 'HU6 0AD': {'class': 'models.MapDataLocation', 'lat': 53.8005, 'lng': -0.370978}}, 'received_time': '2021-04-17 21:04'}, 'geometry': {'type': 'Point', 'coordinates': [-0.371498, 53.801565499999995]}}, {'type': 'Feature', 'properties': {'description': 'Unknown P2 In Progress', 'dno': 'np', 'estimated_restored_time': '2021-04-18 00:30', 'incident_id': 'INCD-172380-A', 'incident_url': 'https://www.northernpowergrid.com/power-cuts', 'postcodes_impacted': {'YO15 2EZ': {'class': 'models.MapDataLocation', 'lat': 54.0881, 'lng': -0.189587}, 'YO15 2HQ': {'class': 'models.MapDataLocation', 'lat': 54.0877, 'lng': -0.186641}, 'YO15 2HE': {'class': 'models.MapDataLocation', 'lat': 54.088, 'lng': -0.187818}, 'YO15 2HU': {'class': 'models.MapDataLocation', 'lat': 54.0877, 'lng': -0.185921}, 'YO15 2HJ': {'class': 'models.MapDataLocation', 'lat': 54.0886, 'lng': -0.187854}, 'YO15 1AA': {'class': 'models.MapDataLocation', 'lat': 54.1135, 'lng': -0.150159}}, 'received_time': '2021-04-17 21:25'}, 'geometry': {'type': 'Point', 'coordinates': [-0.1813005, 54.09224633333333]}}, {'type': 'Feature', 'properties': {'description': 'Unknown P2 In Progress', 'dno': 'np', 'estimated_restored_time': '2021-04-18 01:00', 'incident_id': 'INCD-172383-A', 'incident_url': 'https://www.northernpowergrid.com/power-cuts', 'postcodes_impacted': {'LS15 0AR': {'class': 'models.MapDataLocation', 'lat': 53.7894, 'lng': -1.48366}}, 'received_time': '2021-04-17 21:59'}, 'geometry': {'type': 'Point', 'coordinates': [-1.483658, 53.789424]}}, {'type': 'Feature', 'properties': {'description': 'Unknown P2 In Progress', 'dno': 'np', 'estimated_restored_time': '2021-04-18 01:15', 'incident_id': 'INCD-172384-A', 'incident_url': 'https://www.northernpowergrid.com/power-cuts', 'postcodes_impacted': {'YO21 3SR': {'class': 'models.MapDataLocation', 'lat': 54.4928, 'lng': -0.654637}}, 'received_time': '2021-04-17 22:08'}, 'geometry': {'type': 'Point', 'coordinates': [-0.654671, 54.492682]}}, {'type': 'Feature', 'properties': {'description': 'We need to temporarily turn the power off to carry out power upgrades in the area. The scheduled work has now been completed', 'dno': 'np', 'estimated_restored_time': '2021-04-17 10:00', 'incident_id': 'PPC039627', 'incident_url': 'https://www.northernpowergrid.com/power-cuts', 'postcodes_impacted': {'BD19 3JU': {'class': 'models.MapDataLocation', 'lat': 53.7253, 'lng': -1.71067}, 'BD19 3EG': {'class': 'models.MapDataLocation', 'lat': 53.7259, 'lng': -1.7262}, 'BD19 3EA': {'class': 'models.MapDataLocation', 'lat': 53.7265, 'lng': -1.72435}, 'BD19 3AG': {'class': 'models.MapDataLocation', 'lat': 53.7264, 'lng': -1.72608}, 'BD19 3AF': {'class': 'models.MapDataLocation', 'lat': 53.7254, 'lng': -1.72498}, 'BD19 3EP': {'class': 'models.MapDataLocation', 'lat': 53.7259, 'lng': -1.72464}, 'BD19 3AD': {'class': 'models.MapDataLocation', 'lat': 53.7255, 'lng': -1.72549}}, 'received_time': '2021-04-17 08:00'}, 'geometry': {'type': 'Point', 'coordinates': [-1.723217857142857, 53.72584328571429]}}, {'type': 'Feature', 'properties': {'description': 'We need to temporarily turn the power off to carry out maintenance on our network in the area. The scheduled work has now been completed', 'dno': 'np', 'estimated_restored_time': '2021-04-17 11:00', 'incident_id': 'PPC039683', 'incident_url': 'https://www.northernpowergrid.com/power-cuts', 'postcodes_impacted': {'DL13 1PF': {'class': 'models.MapDataLocation', 'lat': 54.7443, 'lng': -2.11611}}, 'received_time': '2021-04-17 08:30'}, 'geometry': {'type': 'Point', 'coordinates': [-2.116174, 54.74408]}}, {'type': 'Feature', 'properties': {'description': 'We need to temporarily turn the power off to carry out a permanent repair in the area. The scheduled work has now been completed', 'dno': 'np', 'estimated_restored_time': '2021-04-17 12:00', 'incident_id': 'PPC039884', 'incident_url': 'https://www.northernpowergrid.com/power-cuts', 'postcodes_impacted': {'YO30 4RB': {'class': 'models.MapDataLocation', 'lat': 53.9912, 'lng': -1.09658}, 'YO30 4RA': {'class': 'models.MapDataLocation', 'lat': 53.9904, 'lng': -1.09681}, 'YO30 4US': {'class': 'models.MapDataLocation', 'lat': 53.9912, 'lng': -1.0954}}, 'received_time': '2021-04-17 08:00'}, 'geometry': {'type': 'Point', 'coordinates': [-1.0965173333333333, 53.99096966666667]}}, {'type': 'Feature', 'properties': {'description': 'We need to temporarily turn the power off to carry out replacement of poles that support our overhead power lines in the area. The scheduled work has now been completed', 'dno': 'np', 'estimated_restored_time': '2021-04-17 14:30', 'incident_id': 'PPC039900', 'incident_url': 'https://www.northernpowergrid.com/power-cuts', 'postcodes_impacted': {'HD7 3DU': {'class': 'models.MapDataLocation', 'lat': 53.5927, 'lng': -1.81854}, 'HD9 4DU': {'class': 'models.MapDataLocation', 'lat': 53.5939, 'lng': -1.81948}}, 'received_time': '2021-04-17 08:30'}, 'geometry': {'type': 'Point', 'coordinates': [-1.81901, 53.5932605]}}, {'type': 'Feature', 'properties': {'description': 'The power cut in your area has been caused by an unexpected incident with the underground cable that provides electricity to your property.', 'dno': 'enw', 'estimated_restored_time': '2021-04-18 12:30', 'incident_id': '60508633', 'incident_url': 'https://www.enwl.co.uk/power-cuts/power-cuts-power-cuts-live-power-cut-information-fault-list/fault-list', 'postcodes_impacted': ['LA3 2BP', 'LA3 2BU', 'LA3 2DF', 'LA3 2DN', 'LA3 2DQ', 'LA3 2DR', 'LA3 2DS', 'LA3 2DY', 'LA3 2JH'], 'received_time': '2021-04-17 16:41'}, 'geometry': {'type': 'Point', 'coordinates': [-2.890340777777778, 54.048605888888886]}}]}

var geoJson = new L.geoJSON(geojsonFeature, {
  onEachFeature: function (feature, layer) {
    layer.bindPopup('<p>'+feature.properties.description+'</p><p>Received time: '+feature.properties.received_time+'</p><p>Estimated restored time: '+feature.properties.estimated_restored_time+'</p><p><a href="'+feature.properties.incident_url+'" target="_blank">Further details</p>');
    layer.setIcon(boltIcon);
  }
}).addTo(mymap);
});
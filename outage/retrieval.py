# AUTOGENERATED! DO NOT EDIT! File to edit: nbs/01-retrieval.ipynb (unless otherwise specified).

__all__ = ['extract_single_incident_ids', 'extract_multiple_incident_urls', 'extract_multiple_incident_ids',
           'get_incident_detail_url', 'extract_relevant_info', 'get_ukpn_incidents_info', 'save_json_data',
           'clean_ssen_incident_info', 'get_ssen_incidents_info', 'get_wpd_incident_feed', 'wpd_incident_id_to_url',
           'clean_wpd_incident_info', 'get_wpd_incidents_info']

# Cell
import json
import pandas as pd

import html
import requests
from bs4 import BeautifulSoup as bs
from warnings import warn

from ipypb import track

# Cell
extract_single_incident_ids = lambda r_json: [
    incident['PanelContentUrl'].split('incidentId=')[1]
    for incident
    in r_json['Incidents']
    if incident['PowerCutType'] != 'Multiple'
]

# Cell
extract_multiple_incident_urls = lambda r_json: [
    f"https://www.ukpowernetworks.co.uk{incident['PanelContentUrl']}"
    for incident
    in r_json['Incidents']
    if incident['PowerCutType'] == 'Multiple'
]

# Cell
def extract_multiple_incident_ids(multiple_incident_urls):
    incident_ids = []

    for multiple_incident_url in track(multiple_incident_urls, label='Multiple Ids'):
        r = requests.get(multiple_incident_url)
        soup = bs(r.text, features='lxml')

        incident_ids += [
            link['data-url'].split('incidentId=')[1]
            for link
            in soup.find('div', {'class': 'multiple-incidents--wrapper mb-4'}).findAll('a')
        ]

    return incident_ids

# Cell
get_incident_detail_url = lambda incident_id: f'https://www.ukpowernetworks.co.uk/Incidents/getincidentdetails?incidentid={incident_id}'

# Cell
def extract_relevant_info(r_json):
    incident_info = {
        'incident_active': r_json['ServiceDown'],
        'restored_time': r_json['UKPNIncident']['RestoredDateTime'],
        'estimated_restored_time': r_json['UKPNIncident']['EstimatedRestorationDate'],
        'planned_time': r_json['UKPNIncident']['PlannedDate'],
        'received_time': r_json['UKPNIncident']['ReceivedDate'],
        'postcodes_impacted': r_json['FullPostcodeData'],
        'description': r_json['IncidentCategoryCustomerFriendlyDescription']
    }

    return incident_info

# Cell
def get_ukpn_incidents_info(incidents_url='https://www.ukpowernetworks.co.uk/Incidents/GetIncidents'):
    r_json = requests.get(incidents_url).json()

    incident_ids = (
        extract_single_incident_ids(r_json) +
        extract_multiple_incident_ids(extract_multiple_incident_urls(r_json))
    )

    raw_incidents_info = dict()
    cleaned_incidents_info = dict()

    for incident_id in track(incident_ids, label='Details'):
        try:
            incident_detail_url = get_incident_detail_url(incident_id)
            r_json = requests.get(incident_detail_url).json()

            raw_incidents_info[incident_id] = r_json
            cleaned_incidents_info[incident_id] = extract_relevant_info(r_json)
        except:
            warn(f'Failed to retrieve incident details for: {incident_id}')

    return raw_incidents_info, cleaned_incidents_info

# Cell
def save_json_data(data, filename, data_dir='../data/raw'):
    with open(f'{data_dir}/{filename}.json', 'w') as fp:
        json.dump(data, fp)

# Cell
def clean_ssen_incident_info(incident):
    ssen_relevant_dates_name_mapping = {
        'LoggedAtUtc': 'received_time',
        'EstimatedArrivalOnSiteUtc': 'estimated_arrival_time',
        'EstimatedRestorationTimeUtc': 'estimated_restored_time'
     }

    cleaned_incident_info = dict()

    for old_dt_name, new_dt_name in ssen_relevant_dates_name_mapping.items():
        dt_str = incident[old_dt_name].split('(')[1].split(')')[0]

        if dt_str != '-62135596800000':
            dt = pd.to_datetime(int(dt_str)*1e6).strftime('%Y-%m-%d %H:%M:%S')
        else:
            dt = None

        cleaned_incident_info[new_dt_name] = dt

    cleaned_incident_info['postcodes_impacted'] = incident['AffectedAreas']
    cleaned_incident_info['description'] = incident['Message']

    return cleaned_incident_info

# Cell
def get_ssen_incidents_info(incidents_url='https://www.ssen.co.uk/Sse_Components/Views/Controls/FormControls/PowerTrackHandler.ashx'):
    raw_incidents_info = requests.get(incidents_url, verify=False).json()
    cleaned_incidents_info = dict()

    for incident in track(raw_incidents_info['Faults']):
        incident_ref = incident['Reference']
        cleaned_incidents_info[incident_ref] = clean_ssen_incident_info(incident)

    return raw_incidents_info, cleaned_incidents_info

# Cell
def get_wpd_incident_feed(url='https://powercuts.westernpower.co.uk'):
    r = requests.get(url)

    raw_incidents_info = json.loads(html.unescape(r.text.split('data-ng-init="init(')[1].split(')"></div><div id="powercuts"')[0]))
    feed = json.loads(raw_incidents_info['feed'])

    return feed

# Cell
wpd_incident_id_to_url = lambda incident_id: f'https://powercuts.westernpower.co.uk/__powercuts/getIncidentById?incidentId={incident_id}'

# Cell
def clean_wpd_incident_info(incident):
    wpd_relevant_dates_name_mapping = {
        'startTime': 'received_time',
        'etr': 'estimated_restored_time'
     }

    cleaned_incident_info = dict()

    for old_dt_name, new_dt_name in wpd_relevant_dates_name_mapping.items():
        if incident[old_dt_name] is not None:
            cleaned_incident_info[new_dt_name] = pd.to_datetime(incident[old_dt_name]*1e6).strftime('%Y-%m-%d %H:%M:%S')
        else:
            cleaned_incident_info[new_dt_name] = None

    cleaned_incident_info['postcodes_impacted'] = incident['postcodes']
    cleaned_incident_info['description'] = incident['status']
    cleaned_incident_info['incident_active'] = bool(1 - incident['restored'])

    return cleaned_incident_info

# Cell
def get_wpd_incidents_info(incidents_url='https://powercuts.westernpower.co.uk'):
    cleaned_incidents_info = dict()

    raw_incidents_info = get_wpd_incident_feed(incidents_url)
    incident_ids = [incident['id'] for incident in raw_incidents_info['incidents']]

    for incident_id in incident_ids:
        incident_url = wpd_incident_id_to_url(incident_id)
        r_json = requests.get(incident_url).json()
        cleaned_incidents_info[incident_id] = clean_wpd_incident_info(r_json)

    return raw_incidents_info, cleaned_incidents_info
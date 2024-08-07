import requests
import xml.etree.ElementTree as ET
import sys

def create_sru_url(callnumber):
    callnumber = callnumber.replace(" ", "%20")
    parts = callnumber.split("%20")
    
    if len(parts) < 2:
        raise ValueError("Call number not reading correctly")
    
    sru_query = " and ".join([f"alma.PermanentCallNumber=%22{part}%22" for part in parts])
    srubase = "https://na05.alma.exlibrisgroup.com/view/sru/01SUNY_STB?operation=searchRetrieve&version=1.2&recordSchema=mods&query="
    api_url = f"{srubase}{sru_query}"
    
    return api_url

def get_first_identifier(api_url):

    response = requests.get(api_url)
    response.raise_for_status()
    xmlsearch = ET.fromstring(response.content)

    # Define the namespaces
    namespaces = {
        'srw': 'http://www.loc.gov/zing/srw/',
        'mods': 'http://www.loc.gov/mods/v3'
    }

    # Find the first identifier of type isbn or issn
    identifier = None
    for identifier_element in xmlsearch.findall('.//mods:identifier', namespaces):
        identifier_type = identifier_element.attrib.get('type')
        if identifier_type in ['isbn', 'issn']:
            identifier = identifier_element.text
            break

    return identifier

def construct_final_url(base_url, callnumber):
    api_url = create_sru_url(callnumber)
    identifier = get_first_identifier(api_url)
    if identifier:
        final_url = f"{base_url}{identifier}/sc.jpg"
        return final_url
    else:
        return None
# Allows coverfinder.py to be accessed by shell_exec
if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: python coverfinder.py <callnumber>")
        sys.exit(1)
    
    callnumber = sys.argv[1]
    base_url = "https://proxy-na.hosted.exlibrisgroup.com/exl_rewrite/syndetics.com/index.php?client=primo&isbn="
    
    final_url = construct_final_url(base_url, callnumber)
    if final_url:
        print(final_url)
    else:
        print("No cover available.")

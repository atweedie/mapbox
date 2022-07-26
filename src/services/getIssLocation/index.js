const OPEN_NOTIFY_ISS_LOCATION_ENDPOINT = 'http://api.open-notify.org/iss-now.json'

const getIssLocation = async () => {
    const response = await fetch(OPEN_NOTIFY_ISS_LOCATION_ENDPOINT);
    const {iss_position} = await response.json();

    const issLatitudeAndLongitude = [iss_position.latitude, iss_position.longitude];
    
    return issLatitudeAndLongitude;
}

export default getIssLocation;
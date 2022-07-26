import { Fragment, useContext, useEffect } from "react";
import { Polyline, Marker } from "react-leaflet";
import { Icon } from "leaflet";
import { IssLocationContext } from "../../services/issLocationContext";
import getIssLocation from "../../services/getIssLocation";

const FlightPath = () => {
    const {issLocationHistory, setIssLocationHistory} = useContext(IssLocationContext);

    const issMarker = new Icon({
        iconUrl: "iss_map_marker.png"
    })

    const issCurrentLocation = issLocationHistory[issLocationHistory.length-1];

    useEffect(() => {
        const interval = setInterval(() => {
            const fetchIssLocation = async () => {
                const issCurrentLocation = await getIssLocation();
            
                setIssLocationHistory([...issLocationHistory, issCurrentLocation])
            }

            fetchIssLocation();
        }, 5000)

        return () => clearInterval(interval);
    }, [issLocationHistory]);

    return (
        <Fragment>
            {
                issCurrentLocation && <Marker icon={issMarker} position={issCurrentLocation}></Marker>
            }
            <Polyline pathOptions={{color: 'blue', weight: 3}} positions={issLocationHistory} />
        </Fragment>

    );
}

export default FlightPath;
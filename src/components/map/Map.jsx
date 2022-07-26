import { MapContainer, TileLayer } from 'react-leaflet'
import FlightPath from '../flightPath/FlightPath';
import 'leaflet/dist/leaflet.css';

const DEFAULT_CENTER_COORDINATES = [51.4934, 0.0098];

const Map = () => (
    <MapContainer center={DEFAULT_CENTER_COORDINATES} zoom={3} scrollWheelZoom={false} style={{ width: "100vw", height: "100vh"}}>
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <FlightPath/>
    </MapContainer>
)

export default Map
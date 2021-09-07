import { useState } from 'react';
import ReactMapGL, {Marker, Popup} from 'react-map-gl';
import getCenter from 'geolib/es/getCenter';

const Map = ({searchResults}) => {

    

    const cordinations = searchResults.map(result => ({
        latitude: result.lat,
        longitude: result.long
    }))

    const center = getCenter(cordinations);

    const [viewport, setViewport] = useState({
        width: '100%',
        height: '100%',
        latitude: center.latitude,
        longitude: center.longitude,
        zoom: 11
    })

    const [selectedLocation, setSelectedLocation] = useState();
    
    console.log(selectedLocation);

    return (
        <ReactMapGL
            mapStyle='mapbox://styles/hamidkarimi1991/ckt625bru0r6917mimszosvqo'
            mapboxApiAccessToken={process.env.mapbox_key}
            {...viewport}
            onViewportChange = {(nextViewPort) => setViewport(nextViewPort) }
        >
            {searchResults.map(({long, lat, title}) => (
                <div key={long}>
                    <Marker
                        latitude={lat}
                        longitude={long}
                        offsetLeft={-20}
                        offsetTop={-10}
                    >
                    <p
                        onClick={() => setSelectedLocation(lat)}
                        className="cursor-pointer text-2xl animate-bounce"
                        role="img"
                        aria-label="push-pin"
                    >
                        📌
                    </p>
                    </Marker>
                    {selectedLocation === lat ? (
                        <Popup
                            closeOnClick = {true}
                            onClose={() => setSelectedLocation()}
                            latitude={lat}
                            longitude={long}
                        >
                            {title}
                        </Popup>
                    ):(
                        false
                    )}
                </div>
            ))}
        </ReactMapGL>
    )
}

export default Map

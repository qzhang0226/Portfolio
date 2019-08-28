import React, { useState } from 'react';
import { 
  GoogleMap, 
  withScriptjs, 
  withGoogleMap, 
  Marker,
  InfoWindow, 
} from 'react-google-maps';
import styled from 'styled-components';

const MyMap: React.FC = () => {

  const [selectedPos, setSelectedPos] = useState(false);

  return (
    <GoogleMap 
      defaultZoom={10} 
      defaultCenter={{ lat: 41.032730, lng: -73.766327 }}
      >
      <Marker 
        position={{
          lat: 41.032730,
          lng: -73.766327
        }}
        onClick={() => {
          setSelectedPos(true)
        }} 
      />
      {selectedPos && 
      <InfoWindow 
        position={{
          lat: 41.032730,
          lng: -73.766327
        }}
        onCloseClick={() => {
          setSelectedPos(false)
        }}
      >
          <div>
            <h4>I'm living here!</h4>
            <p>
              <a 
                href="https://www.google.com/maps/dir/?api=1&destination=White%20Plains" 
                target="_blank"
                rel="noopener noreferrer"
              >
                Directions
              </a>
            </p>
          </div>
      </InfoWindow>}
    </GoogleMap>
  ); 
}

const WrappedMap:any = withScriptjs(withGoogleMap(MyMap));

export default function Map() {
  return (
    <MapWrapper>
      <WrappedMap 
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&
        libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_MAP}`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </MapWrapper>
  )
}

const MapWrapper = styled("section")`
  width: 100%;
  height: 500px;
  margin: 0 0 100px 0;
  p{
    margin-bottom: 0;
  }
  a{
    cursor: pointer;
  }
`
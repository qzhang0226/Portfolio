import React from 'react';
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps';
import styled from 'styled-components';

const MyMap: React.FC = () => {
  return (
    <GoogleMap 
      defaultZoom={10} 
      defaultCenter={{ lat: 41.032730, lng: -73.766327 }}>
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

const MapWrapper = styled("div")`
  width: 100vw;
  height: 500px;
`
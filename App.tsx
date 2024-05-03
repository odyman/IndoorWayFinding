/**
 * IndoorWayFinding
 * Indonusa Persada Teknologi
 */

import React, {useRef} from 'react';
import {WoosmapView} from '@woosmap/react-native-woosmap';

function App(): React.JSX.Element {
  const mapRef = useRef(null);
  const mapOptions = {
    center: {lat: -6.921178823812511, lng: 107.60918111904743}, // New York City coordinates
    zoom: 18,
    mapType: 'roadmap',
    // You can add more options as needed
  };

  return (
    <>
      <WoosmapView
        ref={mapRef}
        mapOptions={mapOptions}
        wooskey={'woos-753c46d5-7730-3d85-bdc7-9c5a698ac4a9'}
        click={(routeInfo: any) => {
          console.log(`route Index changed ${JSON.stringify(routeInfo)}`);
        }}
      />
    </>
  );
}

export default App;

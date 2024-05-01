/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useRef} from 'react';
// import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  // Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  // DebugInstructions,
  // Header,
  // LearnMoreLinks,
  // ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {
  WoosmapView,
  IndoorRendererOptions,
  IndoorWidgetOptions,
  // MapController,
  // LatLngBounds,
  // WoosPadding,
  // LatLng,
  // StoreOverlay,
} from '@woosmap/react-native-woosmap';

// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;

// function Section({children, title}: SectionProps): React.JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// }

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const mapRef = useRef(null);
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const indoorRendererConfiguration: IndoorRendererOptions = {
    centerMap: true,
    defaultFloor: 3,
  };
  const indoorWidgetConfiguration: IndoorWidgetOptions = {
    units: 'metric',
    ui: {
      primaryColor: '#318276',
      secondaryColor: '#004651',
    },
  };

  const mapOptions = {
    center: {lat: 40.7128, lng: -74.006}, // New York City coordinates
    zoom: 12,
    mapType: 'roadmap',
    // You can add more options as needed
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      {/* <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}> */}
      <WoosmapView
        ref={mapRef}
        // mapOptions={mapOptions}
        wooskey={'woos-a3a2b5eb-e72f-37f0-a0bf-ec51290af6fa'}
        indoorRendererConfiguration={indoorRendererConfiguration}
        indoorWidgetConfiguration={indoorWidgetConfiguration}
        widget={true}
        activateIndoorProduct={true}
        defaultIndoorVenueKey={'mtp'}
        loaded={() => {
          // add();
        }}
        indoor_venue_loaded={info => {
          console.log(JSON.stringify(info));
        }}
        indoor_level_changed={info => {
          console.log('Level changed ' + JSON.stringify(info));
        }}
        indoor_feature_selected={info => {
          console.log('Feature selected ' + JSON.stringify(info));
        }}
        indoor_user_location={info => {
          console.log('User location ' + JSON.stringify(info));
        }}
        indoor_highlight_step={info => {
          console.log('Step info ' + JSON.stringify(info));
        }}
        indoor_navigation_started={() => {
          console.log('Navigation Started');
        }}
        // indoor_navigation_exited={() => {
        //   console.log('Navigation ended');
        //   mapRef.current?.clearDirections();
        // }}
      />
      {/* </View>
      </ScrollView> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;

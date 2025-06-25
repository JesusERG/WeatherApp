/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import StackNavigation from './src/navigation/StackNavigation';
import { NavigationContainer } from '@react-navigation/native';
import LocationProvider from './src/context/LocationContext';

function App() {
  return (
    <LocationProvider>
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
    </LocationProvider>
  );
}

export default App;

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from '../screens/MainScreen';
import ClimateInfoScreen from '../screens/ClimateInfoScreen';
import ForecastScreen from '../screens/ForecastScreen';

const StackNavigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName="MainScreen">
      <Stack.Screen name="MainScreen" component={MainScreen} />
      <Stack.Screen name="ClimateInfoScreen" component={ClimateInfoScreen} />
      <Stack.Screen name="ForecastScreen" component={ForecastScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigation;

import { SafeAreaView, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MainScreen = () => {
  const navigation = useNavigation();

  const handleNavigation = () => {
    navigation.navigate('ClimateInfoScreen' as never);
  };

  return (
    <SafeAreaView>
      <Text>Main</Text>
      <Button title="Go to climate" onPress={handleNavigation} />
    </SafeAreaView>
  );
};

export default MainScreen;

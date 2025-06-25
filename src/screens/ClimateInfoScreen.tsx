import { SafeAreaView, Text, View, TextInput, Pressable } from 'react-native';
import { LocationContext } from '../context/LocationContext';
import { useContext, useState, useEffect } from 'react';

interface WeatherData {
  main: {
    temp: number;
    temp_max: number;
    temp_min: number;
  };
  weather: {
    main: string;
  }[];
}
const ClimateInfoScreen = () => {
  const getCurrentDate = () => {
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();

    //Alert.alert(date + '-' + month + '-' + year);
    // You can turn it in to your desired format
    return date + '-' + month + '-' + year; //format: d-m-y;
  };
  const { latitude, longitude, location } = useContext(LocationContext);
  const [data, setData] = useState<WeatherData | null>(null);
  const [city, setCity] = useState('');

  const lat = JSON.stringify(latitude);
  const lon = JSON.stringify(longitude);
  console.log(location);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=9f8f869bf9fafdc29efcc0f5d68da553&units=metric`,
        );
        const resData = await response.json();
        setData(resData);
      } catch (error) {
        console.error('this is an error\n' + error);
      }
    };
    fetchData();
  }, [lat, lon]);

  if (!data) {
    return <Text>Loading...</Text>;
  }

  const fetchByCity = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9f8f869bf9fafdc29efcc0f5d68da553&units=metric`,
      );
      const resData = await response.json();
      console.log(resData);
      setData(resData);
    } catch (error) {
      console.error('this is an error\n' + error);
    }
  };

  return (
    <SafeAreaView>
      <View>
        <Text>Icon</Text>
        <Text>Temperature: {data.main.temp}</Text>
        <Text>conditions: {data.weather[0].main}</Text>
        <Text>Max: {data.main.temp_max}</Text>
        <Text>Min: {data.main.temp_min}</Text>
      </View>
      <View>
        <Text>City: {city}</Text>
        <Text>Date: {getCurrentDate()}</Text>
      </View>
      <View>
        <TextInput
          placeholder="Search for a city"
          onChangeText={text => setCity(text)}
        />
        <Pressable onPress={fetchByCity}>
          <Text>Search</Text>
        </Pressable>
      </View>
      <View>
        <Text>Bottom navigator</Text>
      </View>
    </SafeAreaView>
  );
};

export default ClimateInfoScreen;

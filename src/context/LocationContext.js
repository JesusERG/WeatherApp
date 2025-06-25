// src/context/LocationContext.js
import { createContext, useState, useEffect } from 'react';
import Geolocation from '@react-native-community/geolocation';
import { Alert } from 'react-native';

export const LocationContext = createContext();

const LocationProvider = ({ children }) => {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [location, setLocation] = useState("I'm the first value");

  useEffect(() => {
    Geolocation.getCurrentPosition(info => {
      setLocation(info);
      setLatitude(info.coords.latitude);
      setLongitude(info.coords.longitude);
    });
  }, []);

  return (
    <LocationContext.Provider value={{ latitude, longitude, location }}>
      {children}
    </LocationContext.Provider>
  );
};

export default LocationProvider;

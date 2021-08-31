import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Weather from './Components/Weather'
import { API_key } from './utilities/WeatherAPI';

export default class App extends React.Component {
  state = {
    isLoading: false,
    temperature: 0,
    weathercondition: null,
    error: null
  }
  componentDidMount(){
    navigator.geolocation.getCurrentPosition(position=>{
      this.fetchweather(position.coords.latitude,position.coords.longitude)
    })
  }
  render() {
    const { isLoading } = this.state;
    return (<View style={styles.container}>{isLoading ? null : (
      <View><Weather /></View>
    )}</View>)
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  }
})
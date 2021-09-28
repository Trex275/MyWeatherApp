import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View, Alert, Platform} from 'react-native';
import Weather from './Components/Weather'
import { API_key } from './utilities/WeatherAPI';
import * as Location from 'expo-location';

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      isLoading: false,
      temperature: 0,
      weathercondition: null,
      error: null
    }
  }
  componentDidMount() {
    if (Platform.OS !== 'android') {
      return Alert.alert("Oops, this will not work on Snack in an Android emulator. Try it on your device!")
    }
    else {
      this.fetchcoordinates();
    }
  }

  async fetchcoordinates(){
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      return Alert.alert('Permission to access location was denied');
    }
    else {
      this.setState({ isLoading: true })
      let location = await Location.getCurrentPositionAsync({});
      let coordinates = await location.coords;
      let latitude = coordinates.latitude
      let longitude = coordinates.longitude
      this.fetchweather(latitude, longitude)
    }
  }
  fetchweather(lat, lon) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_key}&units=metric`).then(res => res.json()).then(json => {
      //console.log(json);
      this.setState({
        temperature: json.main.temp,
        weathercondition: json.weather[0].main,
        isLoading: false
      })
    })
  }

  render(){
    return (<View style={styles.container}>{this.state.isLoading ? (<Text>"Please wait..."</Text>) : (
      <View><Weather weather={this.state.weathercondition} temperature={this.state.temperature} /></View>
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
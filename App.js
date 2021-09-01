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
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(position => {
      this.fetchweather(position.coords.latitude, position.coords.longitude)
    }, error => {
      this.setState({ error: 'error getting weather conditions' })
    })
  }
  fetchweather(lat, lon) {

    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_key}&units=metric`).then(res => res.json()).then(json => {
      //console.log(json);
      this.setState({
        temperature: json.main.temp , 
        weathercondition: json.weather[0].main,
        isLoading: false
      })
    })
  }
  render() {
    const { isLoading } = this.state;
    return (<View style={styles.container}>{isLoading ? null : (
      <View><Weather weather = {this.state.weathercondition} temperature = {this.state.temperature}/></View>
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
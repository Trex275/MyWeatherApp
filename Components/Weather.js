import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {MaterialCommunityIcons} from 'react-native-vector-icons'
import { weatherconditions } from '../utilities/Weatherconditions';
import PropTypes from 'prop-types'

const Weather = ({weather, temperature})=>{
    if (weather){
    return(
        <View style = {[styles.weathercontainer, {backgroundColor: weatherconditions[weather].color}]}>
            <View style = {styles.headercontainer}>
                <MaterialCommunityIcons name = {weatherconditions[weather].icon} size = {70} color = {"white"}/>
                <Text style={styles.temptext}>{temperature}°</Text>
            </View>
            <View style = {styles.bodycontainer}>
                <Text style = {styles.title}>{weatherconditions[weather].title}</Text>
                <Text style = {styles.subtitle}>{weatherconditions[weather].subtitle}</Text>
            </View>
        </View>
    )
} else {
    return(
        <View style = {styles.weathercontainer}>
            <Text>
                Loading Data...
            </Text>
        </View>
    )
}
}

Weather.propTypes = {
    temperature: PropTypes.number.isRequired, 
    weather: PropTypes.string
}

const styles = StyleSheet.create({
    weathercontainer: {
        flex: 1,
        backgroundColor: '#f7b733'
    },
    headercontainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    temptext: {
        fontSize: 45,
        color: 'white'
    },
    bodycontainer: {
        flex: 2,
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        paddingLeft: 25,
        marginBottom: 40,
    },
    title: {
        fontSize: 45,
        color: 'white',
    },
    subtitle: {
        fontSize: 24,
        color: 'white'
    }
})

export default Weather;
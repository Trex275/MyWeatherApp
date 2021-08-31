import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {MaterialCommunityIcons} from 'react-native-vector-icons'

const Weather = ()=>{
    return(
        <View style = {styles.weathercontainer}>
            <View style = {styles.headercontainer}>
                <MaterialCommunityIcons name = "weather-sunny" size = {45} color = {"white"}/>
                <Text style={styles.temptext}>Temperature</Text>
            </View>
            <View style = {styles.bodycontainer}>
                <Text style = {styles.title}>So Sunny!</Text>
                <Text style = {styles.subtitle}>It hurts my eyes</Text>
            </View>
        </View>
    )
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
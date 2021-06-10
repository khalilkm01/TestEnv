import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';

import React from 'react';

const LandingScreen = ({navigation}: any) => {

    const NAME = "Pizza and Gurasa";
    
    setTimeout(() => {
        navigation.navigate('Menu',{
            order: []
        })
    }, 3000);
    



    return (
        <View style={styles.container}>
            <View style={styles.navigation}/>

            <View style={styles.body}>
                <Image source={require('../Images/logo.jpeg')} style={styles.appIcon}/>
                <Text style={styles.txt}> {NAME} </Text>
            </View>

            <View style={styles.footer}>
                <Text style={styles.TheGodFather}>
                    Developed by TheGodfather
                </Text>

            </View>
        </View>
    )
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black'
    },
    navigation: {
        flex: 2,

    },
    body: {
    
        flex: 9,
        alignItems: 'center',
        backgroundColor: 'black'
    },
    appIcon: {
        margin:50,
        width: 200,
        height:200,
        borderRadius: 20,
        borderWidth: 0.3,
        borderColor: 'white'
    },
    txt:{
        color: '#b6b3b3',
        fontSize: 18,
        padding: 1,
        fontFamily: "Rockwell"
    },
    footer: {
        flex: 1,
        alignItems: 'center'
    },
    TheGodFather: {
        margin: 20,
        fontSize: 12,
        color: '#b6b3b3',
        fontFamily: "Cochin"
    }


    });

export default LandingScreen;
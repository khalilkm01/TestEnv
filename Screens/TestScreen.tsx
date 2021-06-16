import { Pressable, StyleSheet, Text, View } from 'react-native'

import FoodCard from '../Components/FoodCard'
import React from 'react'
import foods from '../items'

const TestScreen = ({navigation,route}: any) => {
    const theFood = {...route.params.theFood}
    return (
        <View style={styles.root}>
            <Pressable style={styles.btn} onPress={() => {navigation.navigate('Menu')}}>
                <Text>X</Text>
            </Pressable>
            <FoodCard {...foods[2]}/>
        </View>
    )
}

export default TestScreen;

const styles= StyleSheet.create({
    root:{
        backgroundColor: 'white',
        flex: 1
    },
    btn: {
        position: 'absolute',
        margin: 10,
        borderColor: '#02ccf0',
        borderWidth: 1,
        borderRadius: 5,
        height: 25,
        width: 25,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
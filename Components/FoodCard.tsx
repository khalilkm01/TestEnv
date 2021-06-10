import { Image, StyleSheet, Text, View } from 'react-native';

import React from 'react'

interface FoodInterface{
    id: string;
    Name: string;
    Description: string;
    Available: boolean;
    Price: number;
    Img: any;
    Quantity: number
}

const FoodCard = () => {

    return (
        <View style = {styles.root}>
            <Image style = {styles.image} source = {require("../Images/FoodImages/x.jpg")}/>
        </View>
    )
};

export default FoodCard;

const styles = StyleSheet.create({
    root: {
        margin: 30,
        padding: 5,
        alignItems: 'center',
        alignSelf: 'center',
        elevation: 2,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: '#444',
        width: 350,
        height: 600,
    },
    image: {
        margin: 10,
        height: 310,
        width: 310,
        borderRadius: 20
    }
})

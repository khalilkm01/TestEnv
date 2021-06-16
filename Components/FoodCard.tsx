import { Image, StyleSheet, Text, View } from 'react-native';

import AddToOrder from './AddToOrder'
import React from 'react'

interface FoodInterface{
    id: string;
    Name: string;
    Description: string;
    Available: boolean;
    Price: any;
    Img: any;
    Category: string;
}

const FoodCard = (props: FoodInterface) => {
    const {id,Name,Description, Available, Price, Img,Category} = props;
    
    var priceTXT = '';

    if (Price.Small){
        priceTXT = 'Small: N' + Price.Small + '\n'
    }
    if (Price.Regular){
        priceTXT = priceTXT + 'Regular: N' + Price.Regular + '\n'
    }
    if (Price.Large){
        priceTXT = priceTXT + 'Large: N' + Price.Large + '\n'
    }
    
    return (
        <View style = {styles.root}>
            <View style={styles.titleContainer }>
                <Text style={styles.title}>{Name}</Text>

                <Text>{priceTXT}</Text>
                <Text>{Description}</Text>
            </View> 
            <View style = {styles.imageContainer}>
                <Image source = {Img} style={styles.image}/>
            </View>
            <View style={styles.buttonsContainer}>
                <AddToOrder {...id}/>
            </View>
        </View>
    )
};

export default FoodCard;

const styles = StyleSheet.create({
    root: {
        margin: 30,
        padding: 5,
        alignSelf: 'center',
        width: 350,
        height: 600,
    },
    image: {
        height: 300,
        width: 300,
        alignSelf: 'center',
    
    },
    titleContainer :{
        padding: 20,
        flex: 2,
    },
    imageContainer: {
        flex: 6,
        justifyContent: 'center',
    },
    buttonsContainer:{
        flex: 3,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold'
    }
})
